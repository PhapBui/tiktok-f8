import request from '~/utils/httpRequest.js';
export const search = async (q, type) => {
    try {
        const res = await request.get(`users/search`, {
            params: {
                q,
                type,
            },
        });
        return res.data;
    } catch (error) {
        console.log('Fails to fetch data Search: ', error);
    }
};
