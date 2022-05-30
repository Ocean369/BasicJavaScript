'use strict';

let game = {
    countQuestions: questions.length,
    scoreQuestions: 0,
    /**
     * запускает игру
     */
    run() {
        questionBox.clear();
        for (let i = 1; i <= 5; i++) {
            console.log(i + ' вопрос');
            if (this.scoreQuestions === this.countQuestions) {
                this.scoreQuestions = 0;
            }
            let timeout = setTimeout(questionBox.answer(this.scoreQuestions), 3000);
            let userAnswer = answers.getAnswer();
            if (userAnswer === null) {
                console.log("Игра окончена!Ваш счет - " + player.score);
                return;
            }
            answers.getScore(userAnswer, this.scoreQuestions);
            questionBox.testForUser = '';
            this.scoreQuestions++;
        }

        console.log('Игра окончена! Ваш счет - ' + player.score);
        player.playAgain();
    },

    // при открытии страницы
    init() {
        console.log('Здравствуйте! Вас приветствует игра «Кто хочет стать миллионером?»');
        //renderer.render();
        console.log('Чтобы начать игру, наберите в консоли game.run();  и нажмите Enter.');
    }
};
game.init();