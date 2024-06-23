import React, { useState } from 'react';
import Modal from '../UI/Modal/Modal'; // Шлях до Modal.tsx, TypeScript автоматично розпізнає .tsx файл
import cl from './FeedbackStyle.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store'; // Передбачаючи, що ваш файл store.ts розширений без розширення
import { setValuesFeedbackForm } from '../slices/feedbackFormSlice'; // Шлях до feedbackFormSlice.ts, TypeScript автоматично розпізнає .ts файл
import { radioButton } from "./constant.ts";

const FeedBackForm = () => {
    const [isOpenFeedBackForm, setIsOpenFeedBackForm] = useState(false);
    const dispatch = useDispatch();
    const feedbackData = useSelector((state: RootState) => state.feedback);

    const onCloseFeedBackFormHandler = () => {
        setIsOpenFeedBackForm(false);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        dispatch(setValuesFeedbackForm({ name, value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Опрацювання відправки форми, якщо потрібно
        // Наприклад, відправлення даних на сервер або інше логічне опрацювання
    };

    const variable = {
        nameVariable: "aaaa",
        valueVariable: "true"
    };

    const isNoneEmpty = Object.values(feedbackData).every(e => e !== "");

    return (
        <div>
            <button onClick={() => setIsOpenFeedBackForm(true)} className={cl.openButton}>Open</button>
            <Modal variable={variable} isOpen={isOpenFeedBackForm} onClose={onCloseFeedBackFormHandler}>
                <div className={cl.feedbackWrapper}>
                    <span className={cl.closeBtn}></span>
                    <div className={cl.feedbackFormContainer}>
                        <h2 className={cl.feedbackH2}>Форма обратной связи</h2>
                        <form onSubmit={handleSubmit}>
                            <div className={cl.feedbackInputsColumn}>
                                <input
                                    name="userName"
                                    type="text"
                                    value={feedbackData.userName}
                                    onChange={handleInputChange}
                                    placeholder="Ваше имя"
                                />
                                <input
                                    name="userPhone"
                                    type="text"
                                    value={feedbackData.userPhone}
                                    onChange={handleInputChange}
                                    placeholder="Ваш телефон"
                                />
                            </div>
                            <div className={cl.feedbackInputsColumn}>
                                <input
                                    name="userEmail"
                                    type="text"
                                    value={feedbackData.userEmail}
                                    onChange={handleInputChange}
                                    placeholder="Ваш e-mail"
                                />
                                <input
                                    className={cl.d}
                                    name="userThemeMessage"
                                    type="text"
                                    value={feedbackData.userThemeMassage}
                                    onChange={handleInputChange}
                                    placeholder='Тема сообщения'
                                />
                            </div>
                            <div className={cl.feedbackFormFooter}>
                                <textarea
                                    name="userMessage"
                                    value={feedbackData.userMassage}
                                    placeholder='Сообщение'
                                    onChange={handleInputChange}
                                ></textarea>
                                <div className={cl.feedbackInputsColumn}>

                                    <div>
                                        {radioButton.map((e) => (
                                            <label htmlFor={e} key={e}>
                                                <input
                                                    id={e}
                                                    type="radio"
                                                    name="userThemeRequest"
                                                    value={e}
                                                    checked={feedbackData.userThemeRequest === e}
                                                    onChange={handleInputChange}
                                                />
                                                {e}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                <button disabled={!isNoneEmpty} type="submit">Надіслати</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default FeedBackForm;
