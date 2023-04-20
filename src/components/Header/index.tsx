import logoImg from "../../assests/logo.svg";
import {Content} from "./style";
import { Container } from "./style";

interface HeaderProps{
    onOpenNewTransactionsModal: () => void;
}

 export function Header({onOpenNewTransactionsModal}: HeaderProps){

    
    return(
        <Container>
            <Content>
                <img src={logoImg} alt="dt money"/>
                <button type="button" onClick={onOpenNewTransactionsModal}>
                    Nova transacao
                </button>
            </Content>
        </Container>
    )
}