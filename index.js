function work() {
    setTimeout(() => {              // 백그란운드에서 실행됨=>기존흐름 막지 않음
        const start = Date.now();
        for(let i = 0; i< 1000000000; i++) {

        }
        const end = Date.now();
        console.log(end - start + 'ms');
    }, 0);                          // 0 ms 후 호출해 주겠다.

}

work();
console.log('다음 작업');










