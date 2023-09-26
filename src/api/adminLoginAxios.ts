import axios from "axios";
import { instance } from "./axios";

export const postLogin = async (_user: { uid: string; upw: string }) => {
  try {
    const res = await instance.post("/api/user/admin/sign-in", _user);
    const result: string = res.data.accessToken;
    console.log(result);
    localStorage.setItem("accessToken", result);
    return result;
  } catch (err: any) {
    console.log(err);
    return err;
    //     if (err.message) {
    //     alert(err.message)
    // }
  }
};
