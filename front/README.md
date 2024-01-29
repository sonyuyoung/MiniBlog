Axios(액시오스)는 웹 브라우저에서 HTTP 요청을 만들기 위해 사용되는 JavaScript 라이브러리 ,

사용예시)
axios.get('https://api.example.com/data')
.then(response => {
// 성공적인 응답을 처리
console.log(response.data);
})
.catch(error => {
// 요청 중에 발생한 오류를 처리
console.error('데이터를 가져오는 중 오류 발생:', error);
});

npm install axios

# 또는

yarn add axios
