import ContadorContext from "@/data/context/ContadorContext"
import Link from "next/link"
import { useContext, useState } from "react"

export default function Contador() {
    const { numero, incrementar, decrementar } = useContext(ContadorContext)
    const [valor, setValor] = useState(0)


    return (
        <div className="flex flex-col items-center gap-5">
            <span className="text-6xl">{numero}</span>
            <div className="flex gap-5">
                <button className="button" onClick={decrementar}>
                    -1
                </button>
                <button className="button" onClick={incrementar}>
                    +1
                </button>
                <Link href='/'>
                    <button className="button">Voltar</button>
                </Link>
            </div>
        </div>

    )
}