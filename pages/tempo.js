function Tempo(props) {
    const DataDinamica = new Date();
    const DataDinamicaString = DataDinamica.toGMTString();

    return (
        <div>
            <div>{DataDinamicaString} (dinâmico)</div>
            <div>{props.DataStaticaString} (estático)</div>
        </div>
    )
}

    export function getStaticProps() {
        const DataStatica = new Date();
        const DataStaticaString = DataStatica.toGMTString();
        
        return {
            props: {
                DataStaticaString
            }

        }
    }

    export default Tempo;