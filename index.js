function getSound(animal) {
    const sounds = {
        개: '멍멍!',
        고양이: '야옹',
        참색: '짹짹',
        비둘기: '구구구구'
    };
    return sounds[animal] || '...!';

}

console.log(getSound('개'));
console.log(getSound('비둘기'));
console.log(getSound('인간'));
