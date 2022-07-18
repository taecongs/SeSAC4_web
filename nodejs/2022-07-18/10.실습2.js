// url이라는 모듈을 사용 할 것이다. 선언 
const url = require('url');
const {URL} = url;


const site = "https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=sesac&oquery=sesac&tqi=hWg%2F8sprvmZss6uZF3GssssssfV-461107";

// 위에서 const {URL} = url;을 선언하면 
// const naver = new URL(site)로 정의 


// 한번에 정의하는 방법
const naver = new url.URL(site);


// 위의 URL에서 모든 키를 가져오기
console.log(naver.searchParams.keys());


// 위의 URL에서 모든 값을 가져오기
console.log(naver.searchParams.values());


// 위의 URL에서 sm 키를 삭제하고 1)을 이용해 모든 키 가져오기
// console.log(naver.searchParams.delete('sm'));
naver.searchParams.delete('sm');
console.log(naver.searchParams.keys());
