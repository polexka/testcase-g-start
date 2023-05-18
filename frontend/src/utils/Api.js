class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getCards(start = 1, limit = 100) {
    return fetch(`${this._baseUrl}/cards?limit=${limit}&start=${start}`, {
      method: 'GET',
    })
      .then(this._checkResponse);
  }

}

export const api = new Api({
  baseUrl: 'http://localhost:5000/api/'
});