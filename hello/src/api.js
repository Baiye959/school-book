import axios from "axios";

const baseUrl = "http://localhost:8000"; // 后端服务器地址

// 获取图书列表
export const getBooksByState = async (state) => {
  const url = `${baseUrl}/book/${state}`;
  const response = await axios.get(url);
  return response.data;
};

// 更新图书状态
export const updateBookState = async (id, state) => {
  const url = `${baseUrl}/book/${id}/${state}`;
  const response = await axios.put(url);
  return response.data;
};

// 创建图书
export const createBook = async(book) => {
  const url = `${baseUrl}/book/`;
  const response = await axios.post(url, book);
  return response.data;
};