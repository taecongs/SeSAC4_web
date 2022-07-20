// function func(){
    // return new Promise(function(resolve, reject){
        // resolve(1);
    // });
// }

// 위의 내용과 같다.
async function func(){
    return 1;
}

func().then(function(result){console.log(result);});