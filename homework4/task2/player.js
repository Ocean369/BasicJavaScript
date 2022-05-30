'use strict';

/**
 * Объект игрока, здесь будут все методы и свойства связанные с ним
 * @property {int} x Позиция по x - координате
 * @property {int} y Позиция по y - координате
 */
const player = {
    x: 0,
    y: 0,

    /**
     * Двигает объект по переданному напровлению
     * @param {{x:Int, y: Int}} nextPoint  следующая точка пользователя
     */
    move(nextPoint) {
        this.x = nextPoint.x;
        this.y = nextPoint.y;
    }
}
