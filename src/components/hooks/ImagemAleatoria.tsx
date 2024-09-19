import Image from 'next/image'
import { useState } from 'react'

export default function ImagemAleatoria() {

    const [size, setSize] = useState<number>(250)
    const [url, setUrl] = useState<string>(`https://picsum.photos/${size}/${size}`)

    function pesquisarImagem() {
        setUrl(`https://picsum.photos/${size}/${size}?random=${Math.random()}`)
    }

    function renderizarBotao() {
        return (
            <button className={`
             bg-blue-500 px-4 py-2 rounded-md text-white
            `} onClick={pesquisarImagem}>
                Pesquisar
            </button>
        )
    }

    return (
        <div className="flex flex-col gap-5 items-center">
            <div className="flex flex-col gap-5 items-center">
                <h1 className='font-bold'>Gerando e alterando o tamanho da Imagem com useState</h1>

                <h1 className='font-bold'> Tamanho da Imagem: {size}x{size}</h1>
                <Image
                    className='rounded-md'
                    src={url} height={size} width={size}
                    alt='Imagem Aleatória'
                />
                {renderizarBotao()}
            </div>
            <div>
                <input
                    type="number"
                    value={size}
                    className='bg-zinc-500 rounded-md items-center text-center'
                    // capturei o evento de mudança no input
                    onChange={e => {
                        setSize(+e.target.value)
                    }}
                />
            </div>

        </div>
    )
}

