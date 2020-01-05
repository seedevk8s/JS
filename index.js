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
    state: {
        information: {
            name, languages
        }
    },
    value
} = deepObject;             // name,languages,value를 바깥으로 꺼내줌

const extracted = {
    name,
    languages,
    value
}
console.log(extracted);


















