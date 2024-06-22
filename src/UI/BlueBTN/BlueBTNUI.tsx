import React from 'react';
import  cl from  "./BlueBTNUI.module.css"

interface BlueBtnUiProps {
    onClick: () => void;
    children: React.ReactNode;
}

const BlueBtnUi: React.FC<BlueBtnUiProps> = ({ onClick, children }) => {
    return (
        <button  className={cl.blue} onClick={onClick}>
            {children}
        </button >
    );
};

export default BlueBtnUi;
