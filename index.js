const deepObject = {
    state: {
        information: {
            name: 'velopert',
            languages: ['korean', 'english', 'chinese']
        }
    },
    value: 5
}

const {
        name,
        languages: [first, second]
} = deepObject.state.information;             // name,languages,value를 바깥으로 꺼내줌

const { value } = deepObject;

const extracted = {
    name,
    first,
    second,
    value
}
console.log(extracted);


















