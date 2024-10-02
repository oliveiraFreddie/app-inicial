import ItemCarrinho from "@/model/ItemCarrinho"
import Moeda from "@/utils/Moeda"

export default function CarrinhoItem(pros: ItemCarrinho) {


    return (
        <div className={`
            flex items-center 
            rounded-full gap-2
            bg-blue-500 text-white 
        `}>
            <span className={`
                    flex justify-center items-center
                    w-7 h-7 rounded-full bg-blue-700
            `}>
                {pros.quantidade}
            </span>
            <span className={`
            `}>
                {pros.produto.nome}
            </span>
            <span className={` 
                pr-5
            `}>
                {Moeda.toPrice(pros.produto.preco * pros.quantidade)}
            </span>
        </div>
    )
}