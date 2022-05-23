import CommentSectionView from './CommentSectionView';
import {getUpdatedDataAfterAddingReply} from './utility';

function ReplyCommentView({data, setData, id, setReplyComment}) {
    
    const updatedDataOnPostClick = (name, comment) => {
        setData(getUpdatedDataAfterAddingReply(data, id, name, comment));
        localStorage.setItem("commentsData", JSON.stringify(data));
        setReplyComment(null);
    }

    return (
        <div className="reply-section">
            <CommentSectionView  onClickPost = {updatedDataOnPostClick} type = {"Reply"}/>
        </div>
    )
}

export default ReplyCommentView;