function makeSound(animal) {
    const tasks = {
        개: () => {
            console.log('멍멍');
        },
        고양이() {
            console.log('야옹');
        },
        비둘기() {
            console.log('구구구구');
        }
    }

    const task = tasks[animal];

    if (!task) {
        console.log('...!');
        return;
    }
    task();
}

makeSound('개');
makeSound('비둘기');
makeSound('인간');

















