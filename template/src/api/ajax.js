import axios from 'axios';
import { Message } from 'element-ui';

axios.defaults.timeout = 120000;
// axios.defaults.headers = {'X-Requested-With': 'XMLHttpRequest'};

// http request 拦截器
axios.interceptors.request.use(
    config => config,
    error => Promise.reject(error)
);

const STATUS_TIPS_TEXT_MAP = {
    500: '服务器错误，请联系管理员',
    504: '请求超时'
};
// http response 拦截器
axios.interceptors.response.use(
    (response) => {
        let data = response.data;
        // 处理cas的异步返回的提示
        if (data.hasOwnProperty('retcode') && data.retcode === 10006) {
            data.msg && Message.error(data.msg);
            return Promise.reject({
                code: data.retcode,
                message: data.message
            });
        }
        if (data && data.code !== 200) {
            data.message && Message.error(data.message);
        }
        return data;
    },
    (error) => {
        if (error.response) {
            let status = error.response.status;
            Message.error(STATUS_TIPS_TEXT_MAP[status] || '请求失败');
        }
        return Promise.reject(error);
    }
);

export default axios;