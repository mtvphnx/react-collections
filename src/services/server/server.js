import axios from 'axios';

export const server = async (link) => {
    const domain = 'https://media.2x2tv.ru',
        key = 'fc62110ca6739b16228cceff36',
        fields = '&filter=tag:collections';

    const api = () => link ? `${domain}/ghost/api/v3/content/posts/slug/${link}/?key=${key}` : `${domain}/ghost/api/v3/content/posts/?key=${key}${fields}`;

    return new Promise((resolve, reject) => {
        axios.get(api())
            .then(function (response) {
                return resolve(response.data.posts);
            })
            .catch(function (error) {
                console.log(error);
            })
    })
}