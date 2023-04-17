import { Container } from "./styles";
import incomeImg from '../../assests/Entradas.svg';
import outcomeImg from '../../assests/Saídas.svg';
import totalImg from '../../assests/Total.svg';

export function Summary(){
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas"></img>
                </header>
                <strong>R$1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeImg} alt="Saidas"></img>
                </header>
                <strong>-R$500,00</strong>
            </div>
            <div className="total-card">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="total"></img>
                </header>
                <strong>R$500,00</strong>
            </div>
        </Container>
    )
}