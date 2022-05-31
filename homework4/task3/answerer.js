'use strict';

let answers = {

    /**
     * Получает и отдает вариант ответа от пользователя.
     * @returns {string} Возвращаем вариант ответа от игрока
     */
    getAnswer() {
        const availableAnswers = ['a', 'b', 'c', 'd'];
        while (true) {
            let userAnswer = prompt('Введите один правильный на ваш взгляд вариант ответа (a, b, c, d) или нажмите "Отмена" для выхода.');
            if (userAnswer === null) return null;
            if (!availableAnswers.includes(userAnswer)) {
                alert('Для возможноcти ответа необходимо ввести a, b, c  или d. Попробуйте еще раз.');
                continue;
            }
            console.log('Ваш ответ - ' + userAnswer);
            return userAnswer;
        }
    },

    /**
     * Возвращает счет игрока после проверки его ответа
     * @param {string} userAnswer вариант ответа от пользователя
     * @param {number} numberQuestion номер вопроса
     */
    getScore(userAnswer, numberQuestion) {
        // const scoreUser = player.score;
        const availableAnswers = ['a', 'b', 'c', 'd'];

        if (availableAnswers.indexOf(userAnswer) === questions[numberQuestion].answer) {
            player.score++;
        }
    }

}