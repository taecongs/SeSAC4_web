// Model이란?
// 어떤 데이터가 들어가는지 정의하는 부분이며, 데이터를 처리 하는 부분이다.

const fs = require('fs').promises;



exports.post_user = function(data){
    const {id, pw, name, age} = data;
                                     // id + '/' + pw + '/' + name + '/' + age + \n
    fs.appendFile('./model/info2.txt', `${id}/${pw}/${name}/${age}\n`);
}



exports.get_user = async function(){
    let buffer = await fs.readFile('./model/info2.txt');
    return buffer.toString();
}