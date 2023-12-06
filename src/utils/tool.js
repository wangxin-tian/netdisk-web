import { playFile } from '@/service/api.js';
import nProgress from 'nprogress';

class FnMap {
  constructor() {
    this.events = {}; // 存放所有注册的事件及其对应的回调函数列表
  }

  on(name, callback) {
    if (!this.events[name]) {
      this.events[name] = callback;
    }
  }

  emit(name, data) {
    const callback = this.events[name];
    callback(data);
  }
}

const blobType = {
  1: "image/jpeg",
  2: "audio/mpeg",
  3: "video/mp4"
}

const IMAGE_SOURCE = 1;
const imageHandle = async ({ store, params, openImage }) => {
  const data = await playFile(params);
  const blob = new Blob([data], { type: blobType[params.filetype] });

  const reader = new FileReader();
  reader.readAsDataURL(blob);
  reader.onload = async () => {
    openImage(reader.result, params.filename);
  };
};

const MUSIC_SOURCE = 2;
const musicHandle = async ({ store, params, openSide }) => {
  const data = await playFile(params);
  const blob = new Blob([data], { type: blobType[params.filetype] });

  const reader = new FileReader();
  reader.readAsDataURL(blob);
  reader.onload = async () => {
    openSide();
    await store.dispatch('setMusic', {
      url: reader.result,
      name: params.filename
    });
  };
};

const VIDEO_SOURCE = 3;
const videoHandle = async ({ store, params, router }) => {
  const data = await playFile(params);
  const blob = new Blob([data], { type: blobType[params.filetype] });

  const reader = new FileReader();
  reader.readAsDataURL(blob);
  reader.onload = async () => {
    await store.dispatch('setVideo', {
      url: reader.result,
      name: params.filename
    });
    router.push('/video')
  };
};

const TEXT_SOURCE = 4;
const textHandle = async ({ store, params, router }) => {
  const textMap = {
    'md': "text/plain",
    'txt': "text/plain"
  }
  const type = params.filename.split(".").pop();
  const data = await playFile(params);
  const blob = new Blob([data], { type: textMap[type] });

  const reader = new FileReader();
  reader.readAsText(blob, 'UTF-8');
  reader.onload = async () => {
    console.log(reader.result)
    await store.dispatch('setText', {
      value: reader.result,
      name: params.filename,
      params: params
    });
    router.push('/read')
  };
};

const instance = new FnMap();

instance.on(IMAGE_SOURCE, imageHandle);
instance.on(MUSIC_SOURCE, musicHandle);
instance.on(VIDEO_SOURCE, videoHandle);
instance.on(TEXT_SOURCE, textHandle);

/**
 * 打开文件
 * @param {number} TYPE 
 * @param { 
 *  params?: obj , 
 *  openSide?: fn ,
 * 
 * } data 
 * @returns void
 */
export const dispatchPlay = async (TYPE, data) => {
  instance.emit(TYPE, data);
}


export const dispatchDownload = async (params) => {

  nProgress.start();
  const data = await playFile(params);
  const blob = new Blob([data], { type: blobType[params.filetype] });

  const reader = new FileReader();
  reader.readAsDataURL(blob);
  reader.onload = async () => {
    const a = document.createElement('a');
    a.href = reader.result;
    a.download = params.filename;
    a.click();
    a.remove();
    nProgress.end();
  };
  reader.onerror = async () => nProgress.end();
}