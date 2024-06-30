import React, { useState } from 'react';
import Modal from '../UI/Modal/Modal'; // Шлях до Modal.tsx, TypeScript автоматично розпізнає .tsx файл
import cl from './FeedbackStyle.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store'; // Передбачаючи, що ваш файл store.ts розширений без розширення
import { setValuesFeedbackForm } from '../slices/feedbackFormSlice'; // Шлях до feedbackFormSlice.ts, TypeScript автоматично розпізнає .ts файл
import { radioButton } from "./constant.ts";
import { SubmitHandler, useForm } from "react-hook-form";
import { IFeedbackFormFields } from "./intergeces.ts"; // Перевірте правильний шлях та назву вашого інтерфейсу

const FeedBackForm = () => {
    const [isOpenFeedBackForm, setIsOpenFeedBackForm] = useState(false);
    const dispatch = useDispatch();
    const feedbackData = useSelector((state: RootState) => state.feedback);
    const { register, reset, handleSubmit } = useForm<IFeedbackFormFields>(); // Вказуємо тип для useForm

    const onSubmit: SubmitHandler<IFeedbackFormFields> = (data) => {
        reset();
        // Опрацювання відправки форми, якщо потрібно
        // Наприклад, відправлення даних на сервер або інше логічне опрацювання
    };

    const onCloseFeedBackFormHandler = () => {
        setIsOpenFeedBackForm(false);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        dispatch(setValuesFeedbackForm({ name, value }));
    };

    const variable = {
        nameVariable: "aaaa",
        valueVariable: "true"
    };

    const isNoneEmpty = Object.values(feedbackData).every(e => e !== "");

    return (
        <div>
            <button onClick={() => setIsOpenFeedBackForm(true)} className={cl.openButton}>Відкрити форму</button>
            <Modal variable={variable} isOpen={isOpenFeedBackForm} onClose={onCloseFeedBackFormHandler}>
                <div className={cl.feedbackWrapper}>
                    <span className={cl.closeBtn}></span>
                    <div className={cl.feedbackFormContainer}>
                        <h2 className={cl.feedbackH2}>Форма зворотнього зв'язку</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className={cl.feedbackInputsColumn}>
                                <input
                                    {...register('userName', {
                                        required: "Ім'я обов'язкове",
                                    })}
                                        placeholder="Введіть ім'я"
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
                                    placeholder='Тема повідомлення'
                                />
                            </div>
                            <div className={cl.feedbackFormFooter}>
                                <textarea
                                    name="userMessage"
                                    value={feedbackData.userMassage}
                                    placeholder='Повідомлення'
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
