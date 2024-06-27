//這裡是扮演服務器，之後有跟登入有關都可以來這裡
import axios from "axios";
const API_URL = "https://project9-backend.onrender.com/api/user";

class AuthService {
  login(email, password) {
    return axios.post(API_URL + "/login", { email, password });
  }
  logout() {
    localStorage.removeItem("user"); //登出，直接刪掉存在本機的user資料
  }
  register(username, email, password, role) {
    //代入使用者提供的註冊資料
    return axios.post(API_URL + "/register", {
      //把參數post到後端
      username,
      email,
      password,
      role,
    });
  }

  //顯示出存在本地的使用者資料
  getCurrrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
