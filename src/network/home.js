import { request } from "./request";

export function getBanner() {
  return request({
    url: "/home/banner"
  });
}

export function getCategory() {
  return request({
    url: "/home/category"
  });
}

export function getGoods() {
  return request({
    url: "/home/goods"
  });
}