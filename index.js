function work(callback) {
    setTimeout(() => {              // 백그란운드에서 실행됨=>기존흐름 막지 않음
        const start = Date.now();
        for(let i = 0; i< 1000000000; i++) {

        }
        const end = Date.now();
        console.log(end - start + 'ms');
        callback(end - start);
    }, 0);                          // 0 ms 후 호출해 주겠다.

}

console.log('작업 시작!')
work((ms) => {
    console.log('작업이 끝났어요!');
    console.log(ms + 'ms 걸렸다고 해요.');
});
console.log('다음 작업');










