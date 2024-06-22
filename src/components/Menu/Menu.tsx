import cl from "./Menu.module.css";
import { useState ,useRef,useEffect } from "react";
import BlueBTNUI from "../../UI/BlueBTN/BlueBTNUI.tsx";

interface PropsAccordionItem {
    title: string;
    items: string[];
}
interface PropsMenu {
    isOpen: boolean;
    onClose: ()=>void;
}

export const AccordionItem = ({ title, items }: PropsAccordionItem) => {
    const [isOpen, setIsOpen] = useState(false);

    const contentRef = useRef<HTMLUListElement | null>(null);

    useEffect(() => {
        if (contentRef.current) {
            if (isOpen) {
                contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;

            } else {
                contentRef.current.style.maxHeight = '0px';
            }
        }
    }, [isOpen]);

    return (
        <div>
            <span className={ ` ${isOpen && cl.open}  ${cl.subTitleMenu}`} onClick={() => setIsOpen(!isOpen)}>{title}</span>

                {/*<ul   className={isOpen ? cl.accOpen : cl.acClosed}>*/}
                <ul  ref={contentRef}  className={ `${isOpen ? cl.accOpen : cl.acClosed} ${cl.accSubList}` }>
                    {items.map((e, i) => (
                        <li className={cl.accText} key={i}>{e}</li>
                    ))}
                </ul>

        </div>
    );
};

const Menu = ({ onClose} : PropsMenu) => {
    const menu = [
        {
            title: "Изделия медицинского назначения из пластмасс",
            items: [
                "Изделия медицинского назначения из пластмасс",
                "Изделия медицинского назначения из пластмасс",
                "Изделия медицинского назначения из пластмасс",
                "Изделия медицинского назначения из пластмасс",
                "Изделия медицинского назначения из пластмасс",

            ],
        },       {
            title: "Изделия из пластмасс",
            items: [
                "Бытовые изделия из пластика",
                "Колпачки и плечи для тубной упаковки",
                "Швейные изделия из пластика",
                "Корпуса для электроприборов (корпуса на DIN рейку)",
                "Брендирование продукции из пластика",
                "Изготовление продукции из пластика на заказ",
            ],
        },
        {
            title: "Нагревательные системы",
            items: [
                "Нагревательные системы",
                "Нагревательные системы",
                "Нагревательные системы",
                "Нагревательные системы",
                "Нагревательные системы",

            ],
        },   {
            title: "Электронные компоненты",
            items: [
                "Электронные компоненты",
                "Электронные компоненты",
                "Электронные компоненты",

            ],
        },   {
            title: "Пресс-формы для литья",
            items: [
                "Пресс-формы для литья",
                "Пресс-формы для литья",
                "Пресс-формы для литья",
                "Пресс-формы для литья",

            ],
        },
    ];
 const companyServices = ["Нагревательный кабель на заказ","Литье изделий из пластмасс","Брендирование продукции из пластмасс","Контрактное производство электроники"]

  const aboutCompany = ["О компании","Пресс-блог","Как купить","Политика конфиденциальности","Обработка персональных данных"]
    return (
        <div className="container">
            <BlueBTNUI onClick={onClose}  >Закрити</BlueBTNUI>
            <div className={cl.menu}>
            <div className={cl.catalog}>
                <span className={cl.titleMenu}>Каталог продукции</span>
                <div className={cl.accList}>
                    <AccordionItem title={menu[1].title} items={menu[1].items} />
                    {menu.map((e ,i) =>(
                        <AccordionItem key={i} title={e.title} items={e.items}/>
                    ) )}
                </div>
            </div>
            <div className={cl.companyServices}>
                <span className={cl.titleMenu}>Услуги</span>
                <div>
                    <ul className={cl.accList}>{
                        companyServices.map((e,i) =>(
                            <li className={cl.subTitleMenu} key={i}>{e}</li>
                        ))
                    }</ul>
                </div>
            </div>
            <div className={cl.aboutCompany}>
                <span className={cl.titleMenu}>О компании</span>
                <div>
                    <ul className={cl.accList}>{
                        aboutCompany.map((e, i) => (
                            <li className={cl.subTitleMenu} key={i}>{e}</li>
                        ))
                    }</ul>
                </div>
            </div>
        </div></div>
    );
};

export default Menu;
