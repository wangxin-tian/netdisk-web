import myAxios from './request.js'

/** User */
export const userLogin = data => myAxios({ url: 'user/login', method: 'Post', data});