const deepObject = {
    state: {
        information: {
            name: 'velopert',
            languages: ['korean', 'english', 'chinese']
        }
    },
    value: 5
}

const { name, languages } = deepObject.state.information;  //바깥으로 꺼내짐
const { value } = deepObject;

const extracted = {
    name,
    languages,
    value
}
console.log(extracted);


















