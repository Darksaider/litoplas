import './App.css'
import Header from "./components/Header.tsx";
import Slider from "./components/Swiper.tsx";
import Modal from "./UI/Modal/Modal.tsx";
import {useState} from "react";

function App() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleHandler = () => {
        setIsOpen(!isOpen);
    }


    return (
    <div className="container">
        <Modal isOpen ={isOpen} onClose={toggleHandler}> Модальне вікно</Modal>
<Header/>
        <Slider/>

    </div>
  )
}

export default App
