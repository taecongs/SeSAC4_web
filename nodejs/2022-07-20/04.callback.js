// 함수명 func1 , 매개변수 callback
function func1(callback){
    callback();
}

function func2(a){
    console.log('안녕');
}

func1(func2);



// 한번에 정의
func1(function (){
    console.log('안녕');
});