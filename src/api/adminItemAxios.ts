import axios from "axios";

export const getItem = async () => {
  try {
    const res = await axios.get(
      "/api/admin/product/all?page=1&row=10000",
    );
    const result:[] = res.data.filter((item:any) => item.name);
    return result;
  } catch (err) {
    console.log(err);
  }
};
