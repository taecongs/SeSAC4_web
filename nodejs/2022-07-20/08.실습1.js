function call(name){
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log(name);
            // resolve를 통해 then으로 가겠다.
            resolve(name);
        }, 1000);
    })
}


function back(){
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('back');
            // resolve를 통해 then으로 가겠다.
            resolve('back');
        }, 1000);
    })
}


function hell(){
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            // resolve를 통해 then으로 가겠다.
            resolve('callback hell');
        }, 1000);
    })
}


call('kim')
// resolve를 통해 결과값이 넘어와서 name에 'kim'이 넘어온다.
.then(function(name) {
    console.log(name + ' 반가워');
    // back을 실행한다. 
    return back();
})
// resolve를 통해 back 결과값이 txt로 넘어온다.
.then(function(txt) {
    console.log(txt + '을 실행했구나');
    // hell을 실행한다.
    return hell();
})
.then(function(message) {
    console.log('여기는 ' + message);
});



async function exec(){
    let name = await call('kim');
    console.log(name + ' 반가워');
    let txt = await back(name);
    console.log(txt + '을 실행했구나');
    let message = await hell(txt);
    console.log('여기는 ' + message);
}

exec();