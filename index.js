function print(person) {
    if(person === undefined) {
        return;
    }
    console.log(person.name);
}

const person = {
    name: 'John'
};

print();
