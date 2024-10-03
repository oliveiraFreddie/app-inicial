import useStarWars from "@/data/hooks/useStarWars"

interface PesonagensProps {
    personagens: any[]
}

export default function Personagens(props: PesonagensProps) {


    function renderizarPersonagens() {
        return (
            <ul>
                {props.personagens.map((p: any) => (
                    <li key={p.name}>{p.name}</li>
                ))}
            </ul>
        )
    }

    return <div>{renderizarPersonagens()}</div >

}