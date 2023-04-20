import {Container, RadioBox} from "./styles"
import {useState,useEffect} from "react"
import incomeImg from "../../assests/Entradas.svg"
import outcomeImg from "../../assests/Saídas.svg"


export function TransactionTypeContainer(){
    const[type, setType] = useState("deposit");


    return(
        <Container>
            <RadioBox type="button" onClick={() => {setType("deposit");}} isActive={type === "deposit"}>
                <img src={incomeImg} alt="" />
                <span>Entrada</span>
            </RadioBox>

            <RadioBox type="button" onClick={() => {setType("withdraw");}} isActive={type === "withdraw"}>
                <img src={outcomeImg} alt="" />
                <span>Saida</span>
            </RadioBox>
        </Container>
        
    );
} 