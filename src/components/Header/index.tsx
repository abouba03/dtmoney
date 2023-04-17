 import logoImg from "../../assests/logo.svg"
 import {Content} from "./style"
 import { Container } from "./style"

 export function Header(){
    return(
        <Container>
            <Content>
                <img src={logoImg} alt="dt money"/>
                <button type="button">
                    Nova transacao
                </button>
            </Content>
            
 
        </Container>
    )
}