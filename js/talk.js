new TypeIt("#tqyher", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("小碗儿 && 小挑儿")
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