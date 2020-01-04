const namelessDog = {
    name: '',
};

function getName(animal) {
    const name = animal && animal.name;
    if (!name) {
        return '이름이 없는 동물입니다.';
    }
    return name;
}

const name = getName(namelessDog);
console.log(name);








