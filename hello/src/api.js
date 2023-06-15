import axios from "axios";
import TcSms from 'tencentcloud-sdk-nodejs/tencentcloud/services/sms/v20190711';

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


// export const sendSms = async (phoneNumber, message) => {
//   try {
//     const url = `https://sms.tencentcloudapi.com/`;
//     const data = {
//       PhoneNumberSet: [
//         phoneNumber
//       ],
//       SmsSdkAppId: "1400006666",
//       SignName: "腾讯云",
//       TemplateId: "1234",
//       TemplateParamSet: [
//         message
//       ],
//       SessionContext: "test"
//     };
//     const headers = {
//       'Content-Type': 'application/json',
//       'X-TC-Action': 'SendSms'
//     };

//     const response = await axios.post(url, data, { headers });

//     if (response.data.Response.Error === null) {
//       return response.data.Response;
//     } else {
//       throw new Error(response.data.Response.Error.Code);
//     }
//   } catch (error) {
//     console.error('发送失败：', error);
//     throw error;
//   }
// };

// export const sendSms = async (phoneNumber, message) => {
//   try {
//     const url = `https://sms.tencentcloudapi.com`;
//     // 1. 添加 X-TC-Version 和 Host 字段
//     const headers = {
//       'Host': 'sms.tencentcloudapi.com',
//       'Content-Type': 'application/json',
//       'X-TC-Action': 'SendSms',
//       'X-TC-Version': '2019-07-11',
//     };

//     const data = {
//       PhoneNumberSet: [
//         phoneNumber
//       ],
//       SmsSdkAppId: "1400006666",
//       SignName: "腾讯云",
//       TemplateId: "1234",
//       TemplateParamSet: [
//         message
//       ],
//       SessionContext: "test"
//     };

//     // 2. 将请求体 data 转化成 JSON 格式，并将结果作为 POST 请求的 body
//     const requestBody = JSON.stringify(data);

//     // 3. 计算 Authorization 签名并加入到 header 中
//     const signer = new TcSms.Signers.TcSignature()
//     const authorization = await signer.sign({
//       method: 'POST',
//       endpoint: 'sms.tencentcloudapi.com',
//       path: '/',
//       headers: headers,
//       body: requestBody,
//       service: 'sms',
//       region: 'ap-guangzhou',
//       secretId: '<your-secret-id>',
//       secretKey: '<your-secret-key>'
//     })
//     headers.Authorization = authorization;

//     const response = await axios.post(url, requestBody, { headers });

//     if (response.data.Response.Error === null) {
//       return response.data.Response;
//     } else {
//       throw new Error(response.data.Response.Error.Code);
//     }
//   } catch (error) {
//     console.error('发送失败：', error);
//     throw error;
//   }
// };