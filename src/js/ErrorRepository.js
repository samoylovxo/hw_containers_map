/* eslint-disable linebreak-style */
export default class ErrorRepository {
  constructor() {
    this.map = new Map([
      [200, 'ОК. Успешная обработке запроса'],
      [301, 'Moved Permanently. Страница временно недоступна по данному адресу, но есть новый временный URL'],
      [403, 'Forbidden. Запрет на просмотр страницы'],
      [404, 'Not Found. Заданная страница/ресурс больше не существует'],
      [500, 'Internet Server Error. Произошла ошибка на стороне сервера'],
      [502, 'Bad Gateway. Прокси сервер не может получить ответ'],
      [503, 'Service Unavailable. Сервис перегружен и в данный момент недоступен'],
      [504, 'Gateway Timeout. Долгий ответ, прокси-сервер не получил результат запроса'],
      [503, 'Service Unavailable. Сервис перегружен и в данный момент недоступен'],
    ]);
  }

  translate(code) {
    if (this.map.has(code)) {
      return this.map.get(code);
    }

    return 'Unknown error';
  }
}
