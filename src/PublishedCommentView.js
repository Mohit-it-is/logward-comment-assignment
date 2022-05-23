import {getDateFromTimeStamp} from './utility';
import DeleteIcon from "./DeleteIcon";
import moment from 'moment';

function PublishedCommentView({ record, showReply, data, setData }) {
    let date = getDateFromTimeStamp(record.timeStamp);
    return (
        <>
            <div className="published-comment">
                <p className="date">{moment(date).format('Do MMMM YYYY')}</p>
                <p className="name">{record.name}</p>
                <p className="comment">{record.comment}</p>
                <div className="reply-edit-container">
                    {showReply ? <span className="reply-link" value = {record.id}>Reply</span>: null}
                    <span className="edit-link" value = {record.id}>Edit</span>
                </div>
                <div className="delete-icon"><DeleteIcon data = {data} setData = {setData} record = {record}/></div>
            </div>
        </>
    );
}

export default PublishedCommentView;