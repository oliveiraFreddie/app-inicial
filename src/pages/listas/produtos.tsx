import Carrinho from "@/components/listas/Carrinho"
import ListaDeProdutos from "@/components/listas/ListaProdutos"
import produtos from "@/constants/produtos"
import ItemCarrinho from "@/model/ItemCarrinho"
import Produto from "@/model/Produto"
import { useState } from "react"

export default function PaginaPordutos() {
    const [itens, setItens] = useState<ItemCarrinho[]>([])

    function adicionarProduto(produto: Produto) {
        const itemAtual = itens.find((item) => item.produto.id === produto.id) ?? { quantidade: 0, produto }
        const novoItem = { ...itemAtual, quantidade: itemAtual.quantidade + 1 }
        const outrosItens = itens.filter((item) => item.produto.id !== produto.id)
        setItens([...outrosItens, novoItem])
    }

    return (
        <div className={`
       flex flex-col justify-center items-center 
       gap-10 m-5 h-auto 
    `}>
            <Carrinho itens={itens} />
            <ListaDeProdutos produtos={produtos} comprar={adicionarProduto} />
        </div>
    )
}        