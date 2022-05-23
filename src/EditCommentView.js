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
             <textarea
                name="Text1"
                cols="40"
                rows="5"
                className="input-text edit"
                value={inputValue}
                onChange = {onChangeInputHandler}
            ></textarea>
            <button className='post-button' onClick={onCompleteEditHandler}>Post</button>
        </div>
    );
}

export default EditCommentView;