const url = require('url');
const {URL} = url;

const string = 'https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=sesac&oquery=%EC%83%88%EC%8B%B9+%EC%BA%A0%ED%8D%BC%EC%8A%A4&tqi=hWRt6dprvN8ssvssniVssssssrR-016804'
const naver = new URL(string);


// 해당 url 경로 나온다.
console.log(url.format(naver));

// Url {키 : 값} 으로 나온다. 
console.log(url.parse(string));

// 특정한 (? 뒤에 나오는) 키 값을 볼 수 있다.
console.log(naver.searchParams);