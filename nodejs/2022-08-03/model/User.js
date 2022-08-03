const fs = require('fs').promises;

exports.post_user = function(data){
    console.log(data);

    let $id = data.id;
    let $pw = data.pw;
    let $name = data.name;
    let $age = data.age;


    // const fs = require('fs').promises; 방식
    fs.writeFile('./model/info.txt', $id + '/' + $pw + '/' + $name + '/' + $age)
    .then(() => {
          console.log('작성완료');
    })
    .catch((err) => {
        console.log(err);
    })

    /*
    // const fs = require('fs') 방식
    // fs.writeFile('./model/info.txt', $id + '/' + $pw + '/' + $name + '/' + $age (err) => {
    //     if(err){
    //         console.log(err);
    //     } else{
    //         console.log('작성완료');
    //     }
    // })
    */
}



exports.get_user = async function(){
    let buffer = await fs.readFile('./model/info.txt');
    return buffer.toString();
}
