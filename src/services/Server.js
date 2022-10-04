import axios from 'axios';

export default class Server {
    _apiBase = 'https://media.2x2tv.ru/ghost/api/v3/content/posts';
    _apiKey = '?key=fc62110ca6739b16228cceff36';
    _apiFields = '&filter=tag:collections&limit=all';

    getResource = async (link) => {
        const api = link ? `${this._apiBase}/slug/${link}/${this._apiKey}` : `${this._apiBase}/${this._apiKey}${this._apiFields}`;

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