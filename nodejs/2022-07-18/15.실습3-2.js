function call(name){
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log(name);
            resolve(name);
            // resolve를 통해 then으로 가겠다.
        }, 1000);
    })
}


function back(){
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('back');
            resolve('back');
            // resolve를 통해 then으로 가겠다.
        }, 1000);
    })
}


function hell(){
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('callback hell');
        }, 1000);
    })
}



call('kim')
// resolve를 통해 call의 결과값인 'kim'이 name으로 넘어온다.
.then(function(name) {
    console.log(name + ' 반가워');
    // back을 실행한다. 
    /*
    // let b = back();
    // console.log(b); => Promise {<pending>}
    // return b;
    */
    return back();
})
// resolve를 통해 back 결과값인 'back'이 txt로 넘어온다.
.then(function(txt) {
    console.log(txt + '을 실행했구나');
    // hell을 실행한다.
    return hell();
})
.then(function(message) {
    console.log('여기는 ' + message);
});