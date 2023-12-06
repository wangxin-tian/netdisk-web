import message from '@/utils/message.js';

/**
 * 对查询接口进行封装
 * @param {*} run 请求api
 * @returns 请求方法
 */
export const selectWithMsg = (run) => {

  /**
   * @param params 请求体
   */
  return async (params) => {
    const res = await run(params);
    res.code === 400 && message('warning', res.msg);
    if (res.code === 200) {
      message('success', res.msg);
      return res.data;
    }

    return [];
  }
}

/**
 * 对查询接口进行封装（无消息打印）
 * @param {*} run 请求api
 * @returns 请求方法
 */
export const select = (run) => {
  return async (params) => {
    const res = await run(params);
    res.code === 400 && message('warning', res.msg);
    if (res.code === 200) {
      return res.data;
    }
    return [];
  }
}