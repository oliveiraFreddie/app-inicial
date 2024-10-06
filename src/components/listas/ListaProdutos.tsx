import Produto from "@/model/Produto"
import ProdutoItem from "./ProdutoItem"

interface ListaDeProdutosProps {
    produtos: Produto[]
    comprar: (produto: Produto) => void
}

export default function ListaDeProdutos(props: ListaDeProdutosProps) {
    return (
        <div className="flex justify-center flex-wrap gap-5">
            {props.produtos.map((produto => {
                return <ProdutoItem key={produto.id} produto={produto} comprar={props.comprar} />
            }))}
        </div>
    )
}