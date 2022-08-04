const fs = require('fs').promises;


/* ----------------------------------------------   실습 1   ----------------------------------------------*/
exports.post_user = (data) => {
    console.log(data);

    let $id = data.id;
    let $pw = data.pw;
    let $name = data.name;
    let $age = data.age;


    fs.appendFile('./model/info.txt', $id + '/' + $pw + '/' + $name + '/' + $age + '\n')
    .then(() => {
        console.log('작성완료');
    })
    .catch((err) => {
        console.log(err);
    })
}



exports.get_user = async () => {
    let userInfo = await fs.readFile('./model/info.txt');
    return userInfo.toString();
}
/* -------------------------------------------------------------------------------------------------------*/






/* ----------------------------------------------   실습 2   ----------------------------------------------*/
exports.post_user2 = (data2) => {
    console.log(data2);

    let $$id = data2.id;
    let $$pw = data2.pw;
    let $$name = data2.name;
    let $$age = data2.age;
    // let $$img = data2.file.filename


    fs.appendFile('./model/login.txt', $$id + '/' + $$pw + '/' + $$name + '/' + $$age + '/' + '\n')
    .then(() => {
        console.log('작성완료');
    })
    .catch((err) => {
        console.log(err);
    })  
}


exports.get_user2 = async () => {
    let userInfo2 = await fs.readFile('./model/login.txt');
    return userInfo2.toString();
}