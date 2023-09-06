import axios from "axios";

export const postLogin = async (_user:any) => {
  try {
    const res = await axios.post("/api/user/admin/sign-in", _user);
    const result = res.data.accessToken;
    console.log(result);
    localStorage.setItem("aceesToken", result);
  } catch (err) {
    console.log(err);
    //     if (err.message) {
    //     alert(err.message)
    // }
  }
};
