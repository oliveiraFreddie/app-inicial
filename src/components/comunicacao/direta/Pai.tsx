import Filho from "./Filho";

interface PaiProps {
    nome: string
    sobrenome: string
}

export default function Pai(props: PaiProps) {
    return (
        <div className={`
            flex flex-col gap-5 rounded-md p-5
            bg-blue-500 text-white border border-white
        `}>
            <div className="flex justify-center gap-2 text-xl">
                <span className="font-black">Pai</span>
                <span>{props.nome}</span>
                <span>{props.sobrenome}</span>
            </div>
            <div className="flex flex-col gap-5">
                <Filho nome="Lucas" sobrenome={props.sobrenome} />
                <Filho nome="Frederico" sobrenome={props.sobrenome} />
                <Filho nome="Arthur" sobrenome={props.sobrenome} />
            </div>

        </div>
    )
}