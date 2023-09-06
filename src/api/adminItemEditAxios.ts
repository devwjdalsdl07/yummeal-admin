import axios from "axios";

export const getItemInfo = async (_id: number) => {
  try {
    const res = await axios.get(
      `api/admin/product/{productId}?productId=${_id}`,
    );
    const result = res.data;
    return result;
  } catch (err) {
    console.log(err);
  }
};
