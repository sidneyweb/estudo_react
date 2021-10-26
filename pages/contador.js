import { useState } from 'react';
import Link from 'next/link';

function exibe() {
    return (
        <div>    
            <Contador />
            <br/ >
            <Link href="/"><a> Voltar Home</a></Link>
        </div>
        )
}

function Contador() {
    const [contador,setContador] = useState(1);

    function adicionarContador() {
        setContador(contador + 1);
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}

export default exibe

