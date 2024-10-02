import If from "./If"
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react"

interface PerguntaProps {
    indice: number
    texto: string
    resposta: string
    aberta: boolean
    alternarVisibilidade: (indice: number) => void
}

export default function Pergunta(props: PerguntaProps) {


    return (
        <div className={`
           border border-zinc-900 rounded-md overflow-hidden
        `}>
            <div
                className="p-5 bg-zinc-700 cursor-pointer select-none flex justify-between"
                onClick={() => props.alternarVisibilidade(props.indice)}
            >
                <span>{props.texto}</span>
                {props.aberta ? <IconChevronUp /> : <IconChevronDown />}
                {/* Outra maneira de ter a renderização condicional do icone */}
                {/* <IfElse teste={aberta}>
                    <IconChevronUp />
                    <IconChevronDown />
                </IfElse> */}
            </div>
            <If teste={props.aberta}>
                <div>{props.resposta}</div>
            </If>

        </div >
    )
}