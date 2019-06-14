function Pet(obj){
    this.name = obj.name;
    this.age = obj.age;
}

Pet.prototype.bio = function(){
    return `${this.name}이는 ${this.age}살입니다.`;
}

window.onload = function(){
    const $SUBMIT = document.querySelector('#submit');
    const $NAME_INPUT = document.querySelector('#nameInput');
    const $AGE_INPUT = document.querySelector('#ageInput');
    const $RESULT = document.querySelector('#result');
    
    const BIO = function (){
        const obj = {};
        obj.name = $NAME_INPUT.value;
        obj.age = $AGE_INPUT.value;
        const myPet = new Pet(obj);

        if(obj.name && obj.age){
            $RESULT.innerHTML = myPet.bio();
        }else{
            alert('값을 입력해주세요!');
        }
    }

    $SUBMIT.addEventListener('click', BIO);
    $SUBMIT.addEventListener('keydown', BIO);
}