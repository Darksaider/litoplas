import {LogoUi} from "../UI/Logo/LogoUI.tsx";
import BlueBTNUI from "../UI/BlueBTN/BlueBTNUI.tsx";
import cl from "./header.module.css"
import React, {useState} from "react";
import Modal from "../UI/Modal/Modal.tsx";
import Menu from "./Menu/Menu.tsx";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const languages = [{code: "en", label: "EN"}, {code: 'ua', label: "UA"}]
    const [selectedLang, setSelectedLang] = useState(languages[0].code)
    const toggleHandler = () => {
        setIsOpen(!isOpen);
    }

    return (<header className={cl.header}>
            <Modal isOpen={isOpen} onClose={toggleHandler}>
                <Menu isOpen={isOpen} onClose={toggleHandler}/>
            </Modal>

            <BlueBTNUI onClick={toggleHandler}> <span className={cl.burgerMenu}> <span></span></span> Меню</BlueBTNUI>
            <LogoUi/>

            <form action=""></form>
            <div className="selectLang">
                {languages.map((e, i) => (<React.Fragment key={i}>.
                        {i === 1 && "/"}
                        <span  onClick={() => setSelectedLang(e.code)}
                              className={selectedLang === e.code ? cl.langActive : cl.lang}>{e.label}</span>
                    </React.Fragment>))}
            </div>
        </header>);
};

export default Header;

