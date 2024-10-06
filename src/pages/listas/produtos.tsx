import Carrinho from "@/components/listas/Carrinho"
import ListaDeProdutos from "@/components/listas/ListaProdutos"
import produtos from "@/constants/produtos"
import CarrinhoContext from "@/data/context/CarrinhoContext"
import Link from "next/link"
import { useContext } from "react"

export default function PaginaPordutos() {
    const { itens, adicionarProduto } = useContext(CarrinhoContext)

    return (
        <div className={`
       flex flex-col justify-center items-center 
       gap-10 m-5 h-auto 
    `}>
            <Carrinho itens={itens} />
            <ListaDeProdutos produtos={produtos} comprar={adicionarProduto} />
            <Link href='/'>
                <button className="button">
                    Voltar
                </button>
            </Link>
        </div>
    )
}        