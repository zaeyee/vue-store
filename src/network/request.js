import axios from "axios";

export function request(config) {
  //创建一个axios实例
  const instance = axios.create({
    baseURL: "http://node.ouzero.com:800/store",
    timeout: 5000
  });

  //请求时拦截
  instance.interceptors.request.use(
    config => {
      return config;
    },
    err => {
      console.log(err);
    }
  );

  //响应后拦截
  instance.interceptors.response.use(
    res => {
      return res.data;
    },
    err => {
      console.log(err);
    }
  );

  return instance(config);
}
