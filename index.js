function Animal(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
}


Animal.prototype.say = function () {
    console.log(this.sound)
}

Animal.prototype.sharedValue = 1;

const dog = new Animal('개', '멍멍이', '멍멍');
const cat = new Animal('고양이', '야용이', '야용');

dog.say();
cat.say();

console.log(dog.sharedValue);
console.log(cat.sharedValue);





















