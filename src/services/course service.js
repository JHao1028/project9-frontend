//這裡是扮演服務器，之後有跟登入有關都可以來這裡
import axios from "axios";
const API_URL = "https://project9-backend.onrender.com/api/courses";

class CourseService {
  post(title, description, price) {
    let token;
    //如果localStorage有使用者
    if (localStorage.getItem("user")) {
      //拿到使用者的token
      //就設定token是找到這個使用者的token
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    return axios.post(
      API_URL,
      { title, description, price },
      {
        headers: {
          Authorization: token,
        },
      }
    );
  }

  //使用學生id，來找到學生註冊過的課程
  getEnrolledCourses(_id) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    return axios.get(API_URL + "/student/" + _id, {
      headers: {
        Authorization: token,
      },
    });
  }

  //使用instructor id ，來找到講師擁有的課程
  get(_id) {
    let token;
    //如果localStorage有使用者
    if (localStorage.getItem("user")) {
      //就設定token是找到這個使用者的token
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }

    //要得到課程時，除了使用者_id外，還要拿token去後端確認使否正確
    return axios.get(API_URL + "/instructor/" + _id, {
      headers: {
        Authorization: token,
      },
    });
  }

  //使用課程名稱，來去尋找課程
  getCourseByName(name) {
    let token;
    //如果localStorage有使用者
    if (localStorage.getItem("user")) {
      //就設定token是找到這個使用者的token
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }

    //要得到課程時，除了課程名稱外，還要拿token去後端確認使否正確
    return axios.get(API_URL + "/findByName/" + name, {
      headers: {
        Authorization: token,
      },
    });
  }

  //使用課程id來註冊課程
  enroll(_id) {
    let token;
    //如果localStorage有使用者
    if (localStorage.getItem("user")) {
      //就設定token是找到這個使用者的token
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    return axios.post(
      API_URL + "/enroll/" + _id,
      {}, //因為是這註冊課程，所以用post，而post需要一個data(註冊資料)，但我們不需要就放{}
      {
        headers: {
          Authorization: token,
        },
      }
    );
  }
}

export default new CourseService();
