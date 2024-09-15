import Circulo from "@/components/basicos/Circulo";

export default function PaginaCirculos() {
    return (
        <div className="flex justify-around h-screen items-center">
            <Circulo texto="Circ #1" />
            <Circulo texto="Circ #2" />
            <Circulo texto="Funcionou" quasePerfeito />
        </div>
    )
}