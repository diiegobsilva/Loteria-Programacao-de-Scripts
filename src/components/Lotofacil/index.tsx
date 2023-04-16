import { useContexto } from "../../hooks";
import logolotofacil from '../../assets/trevo-lotofacil.png'
import "./index.css";

function Lotofacil() {
    const {lotofacil} = useContexto();
    return (
        
        <div>
            <div className='row'>
                <div className='column'>
                    <div className='image-trevo'>
                        <img
                            src={logolotofacil}
                            alt='trevo-lotofacil'
                        />
                        <div className='text-lotofacil'>MEGA-SENA</div>
                    </div>

                    <p style={{marginLeft: '45px'}}>
                        Estimativa de prêmio do próximo <br/> concurso. Sorteio em {lotofacil.dataProximoConcurso}:
                    </p>

                    <div className='text-premio-loto'>
                        R${lotofacil.valorEstimadoProximoConcurso}
                    </div>

                </div>
                <div className='column'>
                {lotofacil.dezenas.map((valor, indice) => (
                    <>
                        {indice % 5 === 0 && indice > 0 && <hr className="hrLoto"/>}
                        <div className='row-numbers-loto' style={{display: 'inline-block'}}>
                            <div className='numbers-loto'>{valor}</div>
                        </div>
                    </>    

                    ))}

                    <div className='text-acc'>{lotofacil.quantidadeGanhadores}  GANHADORES!</div>
                    <p>
                        Concurso {lotofacil.numeroDoConcurso} {lotofacil.dataPorExtenso}
                    </p>
                </div>
            </div>

        </div>
    );
}
export default Lotofacil;

