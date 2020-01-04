function print(person) {
    if(person === undefined || person === null) {
        return;
    }
    console.log(person.name);
}

const person = null;

print(person);
