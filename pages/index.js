import Link from 'next/link';

function Home() {
    return (<div>
         <h1>Home page - index</h1>

        <Link href="/sobre">
            <a>Acessar a página Sobre</a>
        </Link>
        </div>)
}

export default Home