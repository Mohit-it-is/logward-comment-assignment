import React, { useState } from "react";

function CommentSectionView(props) {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");

    const onClickPostButtonHandler = () => {
        if (name.length > 0 && comment.length > 0) {
            props.onClickPost(name, comment);
            setName("");
            setComment("");
        }
    };

    return (
        <div className="comment-section">
            <p>{props.type}</p>

            <input
                placeholder="Name"
                className="input-text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <textarea
                name="Text1"
                cols="40"
                rows="5"
                placeholder="Comment"
                className="input-text comment-input"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            ></textarea>
            <button className="post-button" onClick={onClickPostButtonHandler}>
                Post
            </button>
        </div>
    );
}

export default CommentSectionView;
