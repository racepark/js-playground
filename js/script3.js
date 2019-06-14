const loadRequest = function(user){
    // const httpRequest = new XMLHttpRequest();
    // httpRequest.onreadystatechange = function(){
    //     if(httpRequest.status == 200 && httpRequest.readyState == httpRequest.DONE) {
    //         const obj = JSON.parse(httpRequest.response);
    //         setResponse(obj);
    //     }else{
    //         console.log('유저정보가 없습니다');
    //     }
    // }
    // httpRequest.open('GET', `https://api.github.com/users/${user}`, true);
    // httpRequest.send(null);

    fetch(`https://api.github.com/users/${user}`)
    .then(response => response.json())
    .then(data => setResponse(data))
    .catch(error => console.error(error));
}

const nullResponse = function(){
    const $code = document.querySelector('#profile');
    $code.innerHTML =  '<p>유저정보가 없습니다.</p>'
}

const setResponse = function({login, html_url}){
    const $code = document.querySelector('#profile');
    $code.innerHTML =  `
        <div class="user">${login}</div>
        <div><a href="${html_url}">${html_url}<a><div>
    `;
}

window.onload = function(){
    const $SUBMIT = document.querySelector('#submit');
    const $user = document.querySelector('#user');

    //loadRequest();

    $SUBMIT.addEventListener('click', function(e){
        e.preventDefault();
        loadRequest($user.value);
    });
}