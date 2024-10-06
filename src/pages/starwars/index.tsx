import Background from "@/components/starwars/Background";
import Filmes from "@/components/starwars/Filmes";
import Personagens from "@/components/starwars/Personagens";
import useStarWars from "@/data/hooks/useStarWars";


export default function PaginaStarWars() {
    const { processando, personagens, filmes, selelecionarPersonagem, voltar } = useStarWars()



    return (
        <div className='flex flex-col gap-5 justify-center items-center text-white text-xs sm:text-base'>
            <Background />
            {processando ? (
                <div>Processando...</div>
            ) : filmes.length > 0 ? (
                <Filmes filmes={filmes} voltar={voltar} />
            ) : personagens.length > 0 ? (
                <Personagens personagens={personagens} selecionar={selelecionarPersonagem} />
            ) : (
                <div>Dados não encontrados</div>
            )}
        </div>
    )
}