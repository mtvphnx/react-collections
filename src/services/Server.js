import axios from 'axios';

export default class Server {
    _apiBase = 'https://media.2x2tv.ru';
    _apiKey = 'fc62110ca6739b16228cceff36';
    _apiFields = '&filter=tag:collections';

    getResource = async (link) => {
        const api = link ? `${this._apiBase}/ghost/api/v3/content/posts/slug/${link}/?key=${this._apiKey}` : `${this._apiBase}/ghost/api/v3/content/posts/?key=${this._apiKey}${this._apiFields}`;

        return new Promise((resolve, reject) => {
            axios.get(api)
                .then(function (response) {
                    return resolve(response.data.posts);
                })
                .catch(function (error) {
                    console.log(error);
                })
        })
    }
}