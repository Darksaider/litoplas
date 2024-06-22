import React, { useEffect, useState, CSSProperties } from 'react';
import cl from './ModalUI.module.css';


interface Variable {
    nameVariable: string;
    valueVariable: string;
}

 interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    variable?: Variable;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, variable }) => {
    const [visible, setVisible] = useState(false);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setVisible(true);
            setTimeout(() => {
                setAnimate(true);
            }, 10); // Невелика затримка для запуску анімації
        } else {
            setAnimate(false);
            const timer = setTimeout(() => {
                setVisible(false);
            }, 1000); // Таймер на тривалість анімації
            return () => clearTimeout(timer);
        }
    }, [isOpen]);


    // Явне вказівка типу для об'єкта стилів
    const modalStyle: { [key: string]: string } = {
        '--feedback': variable?.valueVariable || 'false',
    };

    return visible ? (
        <div  style={modalStyle as CSSProperties} className={`${cl.modalOverlay} ${animate ? cl.show : ''}`}>
            <div className={cl.modalWrapper}
                 onClick={onClose}>

                <div className={`${cl.modalContent} ${animate ? cl.show : ''}`} onClick={e => e.stopPropagation()}>
                    <button className={cl.modalClose} onClick={onClose}>
                        &times;
                    </button>
                    {children}
                </div>


            </div>
        </div>

    ) : null;
};

export default Modal;
