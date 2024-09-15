import Image from 'next/image'
import { useState } from 'react'

export default function ImagemAleatoria() {
    // Inicializa o estado com uma URL inicial da API picsum.photos
    const [url, setUrl] = useState<string>('https://picsum.photos/500/500')

    // Função para atualizar a URL com uma nova imagem aleatória
    function pesquisarImagem() {
        // Atualiza o estado com uma nova URL aleatória
        setUrl(`https://picsum.photos/500/500?random=${Math.random()}`)
    }

    // Renderiza o botão que busca uma nova imagem
    function renderizarBotao() {
        return (
            <button className={`
             bg-blue-500 px-4 py-2 rounded-md
            `} onClick={pesquisarImagem}>
                Pesquisar
            </button>
        )
    }

    return (
        <div className="flex flex-col gap-5 items-center">
            {/* Exibe a imagem com a URL atualizada */}
            <Image priority src={url} height={500} width={500} alt='Imagem Aleatória' />
            {/* Renderiza o botão */}
            {renderizarBotao()}
        </div>
    )
}
