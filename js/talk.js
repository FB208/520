new TypeIt("#tqyher", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("杨惠超 && 汪丽媛")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("一起走过的第十个520...")
    .pause(3000)
    .go();

new TypeIt('#talkList', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();