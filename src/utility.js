/**
    * @function getDateFromTimeStamp
    * @param { string } timeStamp - date string
    * @returns returns a formatted date
*/
export const getDateFromTimeStamp = (timeStamp) => {
    let date = new Date(timeStamp);
    return date.toLocaleDateString("en-US");
};

/**
    * @function getUpdatedData
    * @param { Array } data - data Array
    * @param { String } id - id string
    * @param { String } inputValue - input comment string
    * @returns updated data with the comment
*/
export const getUpdatedData = (data, id, inputValue) => {
    data.forEach((record) => {
        if (record.id === id) {
            record.comment = inputValue;
        } else if (record.reply.length > 0) {
            record.reply.forEach((item) => {
                if (item.id === id) {
                    item.comment = inputValue;
                }
            });
        }
    });
    return data;
};

/**
    * @function removeIdFromEditCommentList
    * @param { Array } list - data Array
    * @param { String } id - id string
    * @returns filtered data by id
*/
export const removeIdFromEditCommentList = (list, id) => {
    return list.filter((record) => record !== id);
};

/**
    * @function getUpdatedDataAfterAddingReply
    * @param { Array } data - data Array
    * @param { String } id - id string
    * @param { String } name - name string
    * @param { String } inputValue - input comment string
    * @returns updated data with the rely
*/
export const getUpdatedDataAfterAddingReply = (data, id, name, comment) => {
    let date = new Date();
    let timeStamp = date.getTime();
    data.forEach((record) => {
        if (record.id === id) {
            let array = record.reply;
            let obj = {};
            obj.id = Math.random().toString(16).slice(2);
            obj.timeStamp = timeStamp;
            obj.name = name;
            obj.comment = comment;
            record.reply = [obj, ...array];
        }
    });
    return data;
};

/**
    * @function sortData
    * @param { Array } data - data Array
    * @returns data sorted in asc or des order
*/
export const sortData = (data) => {
    data.forEach((record) => {
        record.reply.reverse();
    });
    data.reverse();
    return data;
};

/**
    * @function removeEntryFromData
    * @param { Array } data - data Array
    * @param { Object } record - record object to be removed
    * @returns updated data after removing the specified record
*/
export const removeEntryFromData = (data, record) => {
    let filteredData = [];
    data.forEach((item) => {
        if (item.id !== record.id) {
            item.reply = item.reply.filter((rec) => rec.id !== record.id);
            filteredData.push(item);
        }
    });
    return filteredData;
};
