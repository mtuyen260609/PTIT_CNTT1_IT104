const formatDate = (currentDate)=>{
    // Lấy ra ngày
    let day = currentDate.getDate();
    if(day > 0 && day < 10){
        day = `0${day}`;
    }
    // Lấy ra tháng
    let month = currentDate.getMonth() + 1;
    if(month > 0 && month < 10){
        month = `0${month}`;
    }
    // Lấy ra năm
    const year = currentDate.getFullYear();
    
    return `${day}/${month}/${year}`
};

export default formatDate;