const uuid = () =>  {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
       var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
       return v.toString(16);
    });
}

const generateUniqCode = (now = new Date(), uniq = new String()) => {
    return `${now.getFullYear()}${now.getMonth()}${now.getMilliseconds()}${now.getDate()}(${uniq})${uuid()}`;
}


const generateRoom = (obj = {}) => {
    const date = new Date();
    obj.roomChat = generateUniqCode(date, `${obj.email}(chat)`);
    obj.roomAnnoucment = generateUniqCode(date, `${obj.email}(annoucment)`);
    obj.roomNotif = generateUniqCode(date, `${obj.email}(notif)`);
    return obj;
} 

module.exports = {generateRoom};