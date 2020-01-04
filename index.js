function print(person) {
    if(!person) {
        return;
    }
    console.log(person.name);
}

const person = null;

print(person);
