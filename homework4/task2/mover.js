'use strict';

let mover = {

    /**
     * Получает и отдает направление от пользователя.
     * @returns {int} Возвращаем напрвление, введенное от пользователя.
     */
    getDirection() {
        const availableDirections = [1, 2, 3, 4, 6, 7, 8, 9];
        while (true) {
            let direction = parseInt(prompt('Введите число (1, 2, 3, 4, 6, 7, 8  или 9), куда вы хотите переместиться, "Отмена" для выхода.'));
            if (isNaN(direction)) return null;
            if (!availableDirections.includes(direction)) {
                alert('Для перемещения необходимо ввести любое число от 1 до 9 кроме 5.');
                continue;
            }
            return direction;
        }
    },

    /**
     * Отдает следующую точку,в которой будет находиться игрок после движения
     * @param {int} direction Направление движения игрока
     * @return {{x:int, y: int}} Следующая позиция игрока
     */
    getNextPosition(direction) {
        const nextPosition = {
            x: player.x,
            y: player.y,
        };

        switch (direction) {
            case 1:
                if (--nextPosition.x < 0) {
                    nextPosition.x++;
                    break;
                }
                if (++nextPosition.y >= config.rowsCount) {
                    nextPosition.y--;
                    nextPosition.x++;
                    break;
                }
                break;
            case 2:
                if (++nextPosition.y >= config.rowsCount) {
                    nextPosition.y--;
                    break;
                }
                break;
            case 3:
                if (++nextPosition.x >= config.colsCount) {
                    nextPosition.x--;
                    break;
                }
                if (++nextPosition.y >= config.rowsCount) {
                    nextPosition.y--;
                    nextPosition.x--;
                    break;
                }
                break;
            case 4:
                if (--nextPosition.x < 0) {
                    nextPosition.x++;
                    break;
                }
                break;
            case 6:
                if (++nextPosition.x >= config.colsCount) {
                    nextPosition.x--;
                    break;
                }
                break;
            case 7:
                if (--nextPosition.x < 0) {
                    nextPosition.x++;
                    break;
                }
                if (--nextPosition.y < 0) {
                    nextPosition.y++;
                    nextPosition.x++;
                    break;
                }
                break;
            case 8:
                if (--nextPosition.y < 0) {
                    nextPosition.y++;
                    break;
                }
                break;
            case 9:
                if (++nextPosition.x >= config.colsCount) {
                    nextPosition.x--;
                    break;
                }
                if (--nextPosition.y < 0) {
                    nextPosition.y++;
                    nextPosition.x--;
                    break;
                }
                break;
        }
        return nextPosition;
    }
};