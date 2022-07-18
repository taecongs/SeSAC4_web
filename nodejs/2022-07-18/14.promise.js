// 안에 내용이 모두 성공한다면 resolve => then,  실패한다면 reject => catch
const func1 = new Promise((resolve, reject) => {
    let flag = true;
    if(flag) resolve('성공');
    else reject('실패');
})



// func1.then(value => {
//     console.log(value);
// }).catch(err => {
//     console.log(err);
// });



func1.then(value => {
    return value + '1';
}).then(result => {
    console.log(result);

    // 실패한다면 catch로 
}).catch(err => {
    console.log(err);
})