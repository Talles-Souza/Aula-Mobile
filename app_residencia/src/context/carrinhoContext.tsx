import React, { createContext } from "react";
import Realm from "realm";


export const CarrinhoContext = createContext({});


class ProdutosSchema extends Realm.Object { }
ProdutosSchema.schema = {
    name: 'Produto',
    properties: {
        id_produto: { type: 'int', default: 0 },
        sku: 'string',
        nome_produto: 'string',
        descricao_produto: 'string',
        preco_produto: 'double',
        imagem_produto: 'string'

    }
};

let realm_carrinho = new Realm({ schema: [ProdutosSchema], schemaVersion: 1 });

export function CarrinhoProvider({ children }) {
    const listarProdutos = () => {
        return realm_carrinho.objects('Produtos');
    }

    const contarQuantidadeProdutos = () => {
        return realm_carrinho.objects('Produtos').length;
    }
    const adicionarProduto = (_sku: string, _nome: string, _descricao: string, _preco: number, _imagem: string) => {

        const ultimoProdutoCadastrado = realm_carrinho.objects('Produto').sorted('id_produto', true)[0];
    }


}
