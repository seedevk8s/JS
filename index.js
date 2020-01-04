function Animal(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
}


Animal.prototype.say = function () {
    console.log(this.sound)
}

function Dog(name, sound) {
    Animal.call(this, '개', name, sound);
}

function Cat(name, sound) {
    Animal.call(this, '고양이', name, sound);
}

Dog.prototype = Animal.prototype;
Cat.prototype = Animal.prototype;

const dog = new Animal('개', '멍멍이', '멍멍');
const cat = new Animal('고양이', '야용이', '야용');

dog.say();
cat.say();























