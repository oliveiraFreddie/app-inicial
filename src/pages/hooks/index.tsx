import React, { useState } from 'react';

export default function Contador() {
    const [contagem, setContagem] = useState(0); // contagem é o valor, setContagem é a função para atualizar

    return (
        <div>
            <p>Você clicou {contagem} vezes</p>
            <button onClick={() => setContagem(contagem + 1)}>
                Clique aqui
            </button>
        </div>
    );
}
