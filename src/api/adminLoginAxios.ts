import axios from "axios";

export const postLogin = async (_user: { uid: string; upw: string }) => {
  try {
    const res = await axios.post("/api/user/admin/sign-in", _user);
    const result: string = res.data.accessToken;
    console.log(result);
    localStorage.setItem("accessToken", result);
    return "success"
  } catch (err: any) {
    console.log(err);
    return err;
    //     if (err.message) {
    //     alert(err.message)
    // }
  }
};
