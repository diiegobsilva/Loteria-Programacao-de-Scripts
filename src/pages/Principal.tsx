import Lotofacil from "../components/Lotofacil";
import Megasena from "../components/Megasena";
import { useContexto } from "../hooks";

function Principal(){
    const {megasena} = useContexto();
    return (
        <>
        {megasena.numeroDoConcurso?

        <div>
            <Megasena/>
            <hr/>
            <Lotofacil/>
        </div>
            : 
        <div>Carregando...</div>
        }
        </>
    );
}
export default Principal;