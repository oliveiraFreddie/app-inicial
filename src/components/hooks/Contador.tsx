import { useCallback, useEffect, useState } from "react"

export default function Contador() {
    const [valor, setValor] = useState(0)
    const [multi10, setmulti10] = useState(0)

    const calcularValorMulti10 = useCallback(() => {
        return valor * 10
    }, [valor])


    useEffect(() => {
        const multi10 = calcularValorMulti10()
        setmulti10(multi10)
    }, [valor, calcularValorMulti10])

    return (
        <div className="flex flex-col justify-center items-center gap-5">
            <div>
                <button className="button" onClick={() => setValor(valor - 1)}>-1</button>
            </div>
            <span className="text-5xl">{valor}</span>
            <span className="text-2xl text-zinc-400">{multi10}</span>
            <div>
                <button className="button" onClick={() => setValor(valorAtual => valorAtual + 1)}>+1</button>
            </div>
        </div>

    )
}