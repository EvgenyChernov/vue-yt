// пример класса работающего с JWT можно позже разобраться что к чему
// import axios from "axios";
//
// // Конфигурация по умолчанию для JWT
// const jwtDefaultConfig = {
//   loginEndpoint: `${process.env.SOME_API}/login`,
//   refreshEndpoint: `${process.env.SOME_API}/refresh-token`,
//   logoutEndpoint: `${process.env.SOME_API}/logout`,
//   tokenType: "Bearer",
//   storageTokenKeyName: "accessToken",
//   storageRefreshTokenKeyName: "refreshToken",
// };
//
// export class JwtService {
//   private jwtConfig: any;
//   private axios: axios.AxiosInstance;
//   private isRefreshingToken: boolean;
//   private subscribers: any[];
//
//   constructor(url: string, jwtOverrideConfig: any) {
//     this.axios = axios.create({ baseURL: url });
//     this.jwtConfig = { ...jwtDefaultConfig, ...jwtOverrideConfig };
//     this.isRefreshingToken = false;
//     this.subscribers = [];
//
//     // Добавление интерсептора для обработки запросов
//     this.axios.interceptors.request.use(
//       (config) => {
//         const accessToken = this.getToken(); // Получаем токен доступа
//         if (accessToken) {
//           config.headers.Authorization = `${this.jwtConfig.tokenType} ${accessToken}`; // Устанавливаем заголовок
//         }
//         return config;
//       },
//       (error) => Promise.reject(error) // Обработка ошибок запроса
//     );
//
//     // Добавление интерсептора для обработки ответов
//     this.axios.interceptors.response.use(
//       (response) => response?.data || response,
//       async (error) => {
//         const { config, response } = error;
//         const originalRequest = config;
//
//         // Обработка 401 ошибки (неавторизован)
//         if (response && response.status === 401) {
//           if (this.jwtConfig.loginEndpoint === response.config.url) {
//             return Promise.reject(error); // Отклоняем ошибку, если запрос к логину
//           }
//
//           // Если токен истек, обновляем его
//           if (!this.isRefreshingToken) {
//             this.isRefreshingToken = true;
//             try {
//               const tokenResponse = await this.refreshToken(); // Обновляем токен
//               this.setToken(tokenResponse.data.accessToken); // Сохраняем новый токен
//               this.setRefreshToken(tokenResponse.data.refreshToken); // Сохраняем новый refresh токен
//               this.notifySubscribers(tokenResponse.data.accessToken); // Уведомляем подписчиков
//             } finally {
//               this.isRefreshingToken = false; // Сбрасываем флаг обновления
//             }
//           }
//
//           // Возвращаем обещание для повторного запроса с новым токеном
//           return new Promise((resolve) => {
//             this.addSubscriber((newAccessToken) => {
//               originalRequest.headers.Authorization = `${this.jwtConfig.tokenType} ${newAccessToken}`; // Устанавливаем новый токен
//               resolve(this.axios(originalRequest)); // Повторяем запрос
//             });
//           });
//         }
//
//         return Promise.reject(error); // Отклоняем другие ошибки
//       }
//     );
//   }
//
//   get() {
//     return this.axios; // Возвращаем экземпляр Axios
//   }
//
//   // Уведомить подписчиков о новом accessToken
//   private notifySubscribers(accessToken: string) {
//     this.subscribers.forEach((callback) => callback(accessToken)); // Уведомляем всех подписчиков
//     this.subscribers = []; // Очищаем подписчиков
//   }
//
//   // Добавить подписчика, ожидающего нового accessToken
//   private addSubscriber(callback: Function) {
//     this.subscribers.push(callback); // Добавляем подписчика в массив
//   }
//
//   // Получить токен доступа
//   private getToken() {
//     return localStorage.getItem(this.jwtConfig.storageTokenKeyName);
//   }
//
//   // Получить refresh токен
//   private getRefreshToken() {
//     return localStorage.getItem(this.jwtConfig.storageRefreshTokenKeyName);
//   }
//
//   // Установить токен доступа
//   private setToken(value: string) {
//     localStorage.setItem(this.jwtConfig.storageTokenKeyName, value);
//   }
//
//   // Установить refresh токен
//   private setRefreshToken(value: string) {
//     localStorage.setItem(this.jwtConfig.storageRefreshTokenKeyName, value);
//   }
//
//   // Обновить токен доступа
//   async refreshToken() {
//     try {
//       return await this.axios.post(this.jwtConfig.refreshEndpoint, {
//         refreshToken: this.getRefreshToken(), // Отправляем refresh токен на сервер
//       });
//     } catch (error) {
//       if (error && String(error.message).includes("code 422")) {
//         this.handleRefreshTokenError(); // Обработка ошибки refresh токена
//       }
//       throw error; // Пробрасываем ошибку
//     }
//   }
//
//   // Обработка ошибки обновления токена
//   private handleRefreshTokenError() {
//     localStorage.removeItem(this.jwtConfig.storageTokenKeyName); // Очищаем токен доступа
//     localStorage.removeItem(this.jwtConfig.storageRefreshTokenKeyName); // Очищаем refresh токен
//     localStorage.removeItem("userData"); // Очищаем данные пользователя
//     window.location.reload(); // Перезагружаем страницу
//   }
// }
