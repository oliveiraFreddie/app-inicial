interface FilmesProps {
    filmes: any[]
    voltar: () => void
}

export default function Filmes(props: FilmesProps) {
    return (
        <div className="flex flex-col gap-5 items-center w-full">
            <button className="button" onClick={props.voltar}>Voltar</button>
            <table className="w-4/5 opacity-70 rounded-lg overflow-hidden">
                <thead>
                    <tr className="bg-zinc-900">
                        <th className="p-2 font-black">Título</th>
                        <th className="p-2 font-black">Episódio</th>
                        <th className="p-2 font-black">Data de Lançamento</th>

                    </tr>
                </thead>
                <tbody>
                    {props.filmes.map((filme: any, indice: number) => (
                        <tr
                            key={filme.title}
                            className={`
                        ${indice % 2 === 0 ? 'bg-zinc-700' : 'bg-zinc-800'}
                        `}
                        >
                            <td className="p-2">{filme.title}</td>
                            <td className="p-2">{filme.episode_id}</td>
                            <td className="p-2">{new Date(filme.release_date).toLocaleDateString('pt-BR')}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
}