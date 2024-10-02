import ItemCarrinho from "@/model/ItemCarrinho"
import CarrinhoItem from "./CarrinhoItem"
import CarrinhoVazio from "./CarrinhoVaio"
import Moeda from "@/utils/Moeda"

interface CarrinhoProps {
    itens: ItemCarrinho[]
}


export default function Carrinho(props: CarrinhoProps) {
    const total = props.itens.reduce((soma, item) => {
        return soma + item.quantidade * item.produto.preco
    }, 0)
    return (
        <div className="flex flex-col border border-white rounded-md overflow-hidden w-4/5">
            <div className="bg-zinc-800 text-2xl p-2 text-white">
                <div>Carrinho</div>
                <div>Total da Compra: {Moeda.toPrice(total)}</div>
            </div>
            <div className="flex flex-wrap gap-5 p-2">
                {props.itens.length === 0 ? (
                    <CarrinhoVazio />
                ) : (

                    props.itens.map((item, i) => {
                        return (
                            <CarrinhoItem key={i} {...item} />

                        )
                    })

                )}

            </div>
        </div>
    )
}