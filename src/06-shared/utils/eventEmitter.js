
/*
Пример подписки: eventEmitter.subscribe("editSidebar", ()=> this.text = Date.now());
    Принимает 1. Строку - Название события 2. Функцию - Колбек
    Возвращает - Объект с полем unsubscribe, содержащий анонимную функцию, что удаляет подписку на событие
Пример вызова: eventEmitter.emit("editSidebar", [text]);
    Принимает 1. Строку - Название события 2. Массив - Аргументы для функций
    Возвращает - Массив с результатами выполнения событий

В рамках одного события функции выполняются в порядке добавления
 */
class EventEmitter {
    constructor() {
        this.state = new Map;
    }
    subscribe(eventName, callback) {
        this.state.set(eventName, (this.state.get(eventName) || new Set()).add(callback))
        return {
            unsubscribe: () => {
                this.state.get(eventName)?.delete(callback)
            }
        };
    }
    emit(eventName, args = []) {
        const eventList = this.state.get(eventName)
        return !eventList ? [] : [...eventList].map(callback => callback(...args))
    }
}
const eventController = new EventEmitter()
export default eventController
