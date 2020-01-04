function makeSound(animal) {
    const tasks = {
        개: () => {
            console.log('멍멍');
        },
        고양이() {
            console.log('야옹');
        },
        비둘기: function () {
            console.log('구구구구');
        }
    }
}

makeSound('개');
makeSound('비둘기');
makeSound('인간');
