import {useState} from "react";
import styled from 'styled-components'
import Modal from "react-modal"
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';     
import { Dashboard } from './components/Dashboard';
import { NewTransactionModal } from "./components/NewTransactionModal";

const Title = styled.h1`
  color: #8257e6;
`
Modal.setAppElement("#root")
export default function App() {

  const [isNewTransactionsModalOpen, setIsNewTransactionsModalOpen] = useState(false);

  function handleOpenNewTransactionsModal(){
    setIsNewTransactionsModalOpen(true);
  }

  function handleCloseNewTransactionsModal(){
    setIsNewTransactionsModalOpen(false);
  } 


  return (
    <>
      <Header onOpenNewTransactionsModal={handleOpenNewTransactionsModal}/>
      <Dashboard/>

      <NewTransactionModal isOpen={isNewTransactionsModalOpen} onRequestClose={handleCloseNewTransactionsModal}/>

      <GlobalStyle/>
    </>
  );
}