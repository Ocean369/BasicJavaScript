'use strict';

let questionBox = {

    //вопрос с вариантами ответов
    testForUser: '',

    /**
     * Отображает вопрос с вариантами ответов в консоли
     */
    answer(numberQuestion) {
        this.testForUser += questions[numberQuestion].text + '\n';
        this.testForUser += 'a)' + questions[numberQuestion].answersList[0] + '\n';
        this.testForUser += 'b)' + questions[numberQuestion].answersList[1] + '\n';
        this.testForUser += 'c)' + questions[numberQuestion].answersList[2] + '\n';
        this.testForUser += 'd)' + questions[numberQuestion].answersList[3] + '\n';
        console.log(this.testForUser);
    },

    clear() {
        //чистим консоль
        console.clear();
        //чистим поле с вопросом
        this.testForUser = '';
    }
}