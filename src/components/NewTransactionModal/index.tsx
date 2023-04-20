import Modal from "react-modal";
import {useState, useEffect} from "react";
import closeImg from "../../assests/Vector.svg";
import {Container} from "./styles";
import { TransactionTypeContainer } from "../TransactionTypeContainer";



interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}


export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [value, setValue] = useState(0);

    function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault();
        console.log({title})
    }

    return (
        <Modal 
          isOpen={isOpen}
          onRequestClose={onRequestClose}
          overlayClassName="react-modal-overlay"
          className="react-modal-content"
        >
            <Container onSubmit={handleCreateNewTransaction}>
                <img src={closeImg} className="closeImg" alt="closeImg" onClick={onRequestClose}/>
                <h2>Cadastrar transacao</h2>
                <input type="text" placeholder="Titulo" value={title} onChange={event => setTitle(event.target.value)}/>
                <input type="number" placeholder="Valor" value={value} onChange={event => setValue(Number(event.target.value))}/>
                <TransactionTypeContainer/>
                <input placeholder="Categoria" value={category} onChange={event => setCategory(event.target.value)}/>
                <button type="submit">
                    Cadastrar
                </button> 
 
            </Container>
      </Modal>
    );
}