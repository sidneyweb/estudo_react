import { useState } from 'react';

import Link from 'next/link';

function Home() {
    return (
        <div>
        <h1>Home page index</h1>
        <Contador />
        <br />
        <Link href="/sobre"><a>Acessar a página Sobre</a></Link>
        <br />
        <Link href="/tempo"><a>Acessar a página Tempo</a></Link>
        <br />
        <Link href="/contador"><a>Acessar a página Contador</a></Link>
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


export default Home