interface FilhoProps {
    nome: string
    sobrenome: string
}

export default function Filho(props: FilhoProps) {
    return (
        <div className={`
            flex flex-row justify-center items-center 
            bg-green-500 rounded-md p-5 border border-white
        `}>
            <div className="flex gap-2 text-xl">
                <span className="font-black">Filho</span>
                <span>{props.nome}</span>
                <span>{props.sobrenome}</span>
            </div>

        </div>
    )
}