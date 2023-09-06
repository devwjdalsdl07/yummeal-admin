import axios from "axios";

export const getItem = async () => {
  try {
    const res = await axios.get("/api/admin/product?page=0&size=1000&sort=productId")
    const result = res.data.content
    console.log(result)
    return result
  } catch (err) {
    console.log(err);
    return [{
      productId: 1,
      thumnail: "title",
      name: "name",
      price: 1000,
      cate: 1,
      quainty: 20,
      cateDetail: [1, 3, 5],
      allergyName: [1, 2, 3, 5],
    }]
  }
};
