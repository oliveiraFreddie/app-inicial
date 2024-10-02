import Produto from "@/model/Produto";
import Moeda from "@/utils/Moeda";
import { IconShoppingCart } from "@tabler/icons-react";
import Image from "next/image";

interface ProdutoItemProps {
    produto: Produto
    comprar: (produto: Produto) => void
}

export default function ProdutoItem(props: ProdutoItemProps) {
    const { produto } = props
    return (
        <div className={`
            flex flex-col rounded-md
            overflow-hidden
            border border-green-600
        `}>
            <Image src={produto.imagem} width={200} height={200} alt="Imagem do produto" />
            <div className="flex flex-col p-3 gap-3">
                <div className="flex items-center justify-between">
                    <div className="text-2xl font-black">{produto.nome}</div>
                    <div className="font-bold text-green-700">{Moeda.toPrice(produto.preco)}</div>
                </div>
                <div className="text-xs text-zinc-400">{produto.descricao}</div>
                <button className="button flex justify-center gap-2" onClick={() => props.comprar(produto)}>
                    <IconShoppingCart /> Comprar
                </button>
            </div>
        </div>
    )


}