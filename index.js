function Animal(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
}

/*
Animal.prototype.say = function () {
    console.log(this.sound)
}
*/

const dog = new Animal('개', '멍멍이', '멍멍');
const cat = new Animal('고양이', '야용이', '야용');

function say() {
    console.log(this.sound);
}

dog.say = say;
cat.say = say;

dog.say();
cat.say();






















