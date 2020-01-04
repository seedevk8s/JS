function getSound(animal) {
    switch (animal) {
        case '개':
            return '멍멍';
        case '고양이':
            return '야옹';
        case '참새':
            return '짹짹';
        case '비둘기':
            return '구구구구';
        default:
            return '...?'
    }


/*    if (animal === '개') return '멍멍!';
    if (animal === '고양이') return '야옹!';
    if (animal === '참새') return '짹짹!';
    if (animal === '비둘기') return '구구구구!';
    return '...?';*/
}

console.log(getSound('개'));
console.log(getSound('비둘기'));
console.log(getSound('인간'));
