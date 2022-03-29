import axios from 'axios';

export const server = async (link) => {
    const domain = 'https://media.2x2tv.ru',
        key = 'fc62110ca6739b16228cceff36',
        fields = '';

    const api = () => `${domain}/ghost/api/v3/content/posts/slug/${link}/?key=${key}`;

    return new Promise((resolve, reject) => {
        axios.get(api())
            .then(function (response) {
                let result = response.data.posts[0];
                return resolve(result);
            })
            .catch(function (error) {
                console.log(error);
            })
    })
}