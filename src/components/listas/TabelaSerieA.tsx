interface TabelaSerieAProps {
    times: string[]
}



export default function TabelaSerieA(props: TabelaSerieAProps) {
    const itens: any[] = []

    // Utilizando for pra renderizar uma lista
    // Transformando uma string em <li>

    for (let i = 0; i < props.times.length; i++) {
        itens.push((
            <li key={props.times[i]} className="text-xl list-decimal">
                {props.times[i]}
            </li>
        ))
    }

    // Utilizando map para renderizar uma lista


    const itens2 = props.times.map((time, i) => {
        return (
            <li
                key={time}
                className={`
                text-xl list-decimal ${i % 2 === 0 ? 'text-gray-600' : 'text-gray-400'}    
                `}
            >
                {time}
            </li>
        )
    })

    return (
        <div className="p-5">
            <h1>Renderização de lista usando For</h1>
            <ol className="p-5" >
                {itens}
            </ol>
            <h1>Renderização de lista usando Map</h1>
            <ol className="p-5">
                {itens2}
            </ol>
        </div>

    )

    // Utilizando o map diretamente dentro do retorno do JSX

    // return (
    //     <ol>
    //         {props.times.map((time, i) => {
    //             return (
    //                 <li
    //                     key={time}
    //                     className={`text-xl list-decimal ${i % 2 === 0 ? 'text-gray-600' : 'text-gray-400'}`}
    //                 >
    //                     {time}
    //                 </li>
    //             )
    //         })}
    //     </ol>
    // )
}