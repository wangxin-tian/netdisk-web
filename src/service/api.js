import myAxios from './request.js'

/** User */
export const userLogin = data => myAxios({ url: 'user/login', method: 'Post', data });

/** File */
export const selectFiles = data => myAxios({ url: 'files', method: 'Post', data });
export const playFile = data => myAxios({
  url: 'files/play',
  method: 'Post',
  responseType: 'arraybuffer',
  responseEncoding: 'binary',
  data
});
export const saveFile = formData => myAxios.post('files/save', formData);

/** Folder */
export const selectFolders = data => myAxios({ url: 'folders', method: 'Post', data });