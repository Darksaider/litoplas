import Modal from "../UI/Modal/Modal.tsx";
import {useState} from "react";

const FeedBackForm = () => {
    const [isOpenFeedBackForm, setIsOpenFeedBackForm] = useState(false)
     const onCloseFeedBackFormHandler = () =>{
        setIsOpenFeedBackForm(false)
     }
    return (
        <div>
            <Modal  isOpen={isOpenFeedBackForm} onClose={onCloseFeedBackFormHandler}>s</Modal>
        </div>
    );
};

export default FeedBackForm;