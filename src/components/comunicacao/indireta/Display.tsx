interface DisplayProps {
    valor: number
}

export default function Display(props: DisplayProps) {
    return (
        <div className={`
            bg-zinc-800 text-5xl font-black 
            rounded-md text-white p-10
            flex justify-center items-center flex-1
        `}>
            {props.valor}
        </div>
    )
}