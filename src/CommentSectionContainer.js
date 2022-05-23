import React, { useEffect, useState } from "react";
import CommentSectionView from "./CommentSectionView";
import PublishedComments from "./PublishedComments";
import Sort from "./Sort";
import { sortData } from "./utility";

function CommentSectionContainer(props) {
    const [data, setData] = useState(
        !localStorage.getItem("commentsData")
            ? []
            : JSON.parse(localStorage.getItem("commentsData"))
    );

    useEffect(() => {
        localStorage.setItem("commentsData", JSON.stringify(data));
    }, [JSON.stringify(data)]);

    const updatedDataOnPostClick = (name, comment) => {
        let obj = {};
        let date = new Date();

        obj.id = Math.random().toString(16).slice(2);
        obj.timeStamp = date.getTime();
        obj.name = name;
        obj.comment = comment;
        obj.reply = [];

        setData([obj, ...data]);
    };

    const handleSortingOfData = () => {
        setData([...sortData(data)]);
    };

    return (
        <div className="parent-container">
            <CommentSectionView
                onClickPost={updatedDataOnPostClick}
                type={"Comment"}
            />
            {data.length > 0 ? <Sort onSortData={handleSortingOfData} /> : null}
            <PublishedComments commentsData={data} setData={setData} />
        </div>
    );
}

export default CommentSectionContainer;
