'use strict';

let game = {
    /**
     * запускает игру
     */
    run() {
        while (true) {
            // получаем направление от игрока
            const direction = mover.getDirection();
            if (direction === null) {
                console.log("Игра окончена!");
                return;
            }
            const nextPoint = mover.getNextPosition(direction);
            renderer.clear();
            player.move(nextPoint);
            renderer.render();
        }

    },
    // при открытии страницы
    init() {
        console.log('Ваше положение на поле в виде о.');
        renderer.render();
        console.log('Чтобы начать игру, наберите в консоли game.run();  и нажмите Enter.');
    }
};

game.init();