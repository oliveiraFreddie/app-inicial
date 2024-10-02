import TabelaSerieA from "@/components/listas/TabelaSerieA"
import { IconBallFootball } from "@tabler/icons-react"

export default function PaginaListaBasica() {
    const times = [
        'Botafogo',
        'Palmeiras',
        'Fortaleza',
        'Flamengo',
        'São Paulo',
        'Bahia',
        'Cruzeiro',
        'Internacional',
        'Atlético - MG',
        'Vasco'
    ]
    return (
        <div className={`
           flex flex-col justify-center items-center h-screen 
        `}>
            <h1 className="flex items-center gap-2 text-5xl font-black">
                <IconBallFootball />
                Tabela Série A
                <IconBallFootball />
            </h1>
            <TabelaSerieA times={times} />
        </div>
    )
}