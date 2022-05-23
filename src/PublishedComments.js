import React, { useState } from "react";
import PublishedCommentView from "./PublishedCommentView";
import ReplyCommentView from "./ReplyCommentView";
import EditCommentView from "./EditCommentView";

function PublishedComments(props) {
    const [editComment, setEditComment] = useState(null);
    const [replyComment, setReplyComment] = useState(null);

    const onClickEditHandler = (e) => {
        if(e.target.innerText === 'Edit'){
            setEditComment(e.target.getAttribute("value"))
        }
        else if(e.target.innerText === 'Reply'){
            setReplyComment(e.target.getAttribute("value"))
        }
    }

    return (
        <div>
            {props.commentsData.map((record, index) => (
                <>
                <div className="comment-container-spacing" key={record.id} onClick={onClickEditHandler}>
                    <PublishedCommentView key = {index} record={record} showReply = {true} data = {props.commentsData} setData = {props.setData}/>
                    {editComment===record.id ? <EditCommentView data = {props.commentsData} comment={record.comment} setEditComment = {setEditComment} setData = {props.setData} id = {record.id}/> : null}
                    {replyComment===record.id ? <ReplyCommentView data = {props.commentsData} setData = {props.setData} id = {record.id} setReplyComment = {setReplyComment}/> : null}
                </div>
                {
                    record.reply.map((item, index) => (
                        <div className="comment-container-spacing reply-comment" key={item.id} onClick={onClickEditHandler}>
                            <PublishedCommentView key = {index} record={item} showReply = {false} data = {props.commentsData} setData = {props.setData}/>
                            {editComment===item.id ? <EditCommentView data = {props.commentsData} comment={item.comment} setEditComment = {setEditComment} setData = {props.setData} id = {item.id}/> : null}
                        </div>
                    ))
                }
                </>
            ))}
        </div>
    );
}





export default PublishedComments;
