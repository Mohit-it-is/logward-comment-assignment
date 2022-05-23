import { useState } from "react";
import { getUpdatedData} from "./utility";

function EditCommentView({ data, id, comment, setEditComment, setData}) {
    const [inputValue, setInputValue] = useState(comment);

    const onChangeInputHandler = (e) => {
        setInputValue(e.target.value)
    }

    const onCompleteEditHandler = () => {
        setData(getUpdatedData(data, id, inputValue));
        setEditComment(null);
    }

    return (
        <div className="edit-container">
            <input value={inputValue} className = "input-text edit" onChange = {onChangeInputHandler}/>
            <button className='post-button' onClick={onCompleteEditHandler}>Post</button>
        </div>
    );
}

export default EditCommentView;