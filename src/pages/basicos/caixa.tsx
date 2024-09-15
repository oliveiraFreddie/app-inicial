import Caixa from "@/components/basicos/Caixa";

export default function PaginaCaixa() {
    let name = "Frederico"
    return (
        <div className="flex gap-7 p-7">
            <Caixa>Olá, {name}</Caixa>
            <Caixa>
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>
            </Caixa>
        </div>
    )
} 