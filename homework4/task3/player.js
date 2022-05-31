'use strict';

const player = {
    //счетчик очков
    score: 0,

    /**
     * Спрашивает у игрока хочет ли он сыграть еще раз
     */
    playAgain() {
        let again = +prompt('Если есть желание сыграть еще раз - нажмите 1, если хотите выйти из игры - любой другой символ');

        if (again === 1) {
            this.score = 0;
            game.run();
        }
        console.log('Вы покинули игру!');
        return;
    }
};