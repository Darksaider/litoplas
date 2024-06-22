import React, { useEffect, useState } from 'react';
import cl from './ModalUI.module.css';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
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

    return visible ? (
        <div className={`${cl.modalOverlay} ${animate ? cl.show : ''}`} onClick={onClose}>
            <div className={`${cl.modalContent} ${animate ? cl.show : ''}`} onClick={e => e.stopPropagation()}>
                <button className={cl.modalClose} onClick={onClose}>
                    &times;
                </button>
                {children}
            </div>
        </div>
    ) : null;
};

export default Modal;
