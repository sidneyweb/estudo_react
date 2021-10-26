import Link from 'next/link';

function Tempo(props) {
    console.log('>>>> Passando pelo Frontend;')
    const DataDinamica = new Date();
    const DataDinamicaString = DataDinamica.toGMTString();

    return (
        <div>
            <div>{DataDinamicaString} (dinâmico)</div>
            <div>{props.DataStaticaString} (estático)</div>

            <br />
        <Link href="/">
            <a>Voltar Home</a>
        </Link>
        </div>
    )
}

    export function getStaticProps() {
        console.log('>>>> Passando pelo getStaticProps();')        
        const DataStatica = new Date();
        const DataStaticaString = DataStatica.toGMTString();
        
        return {
            props: {
                DataStaticaString
            },
            revalidate: 1 // um segundo para aguardar para computar novamente o range 
        }
    }

    export default Tempo;