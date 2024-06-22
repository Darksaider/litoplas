import React from 'react';
import  cl from "./TitleH1UI.module.css"
 interface props{
     children : React.ReactNode
 }

const TitleH1UI = ({children }:props) => {
    return (
        <h1 className={cl.h1}>
            {children}
        </h1>
    );
};

export default TitleH1UI;