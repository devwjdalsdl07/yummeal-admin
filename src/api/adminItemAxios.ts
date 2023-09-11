import axios from "axios";
import { Iitem } from "../pages/AdminItem";

export const getItem = async () => {
  try {
    const res = await axios.get("/api/admin/product?page=0&size=1000&sort=productId")
    const result = res.data.content
    const filter = result.filter((item:Iitem) => item.name )
    console.log(filter)
    return filter
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
export const deleteItem = async (_Iproduct:number) => {
  try{
    const res = await axios.delete(`/api/admin/product/productId?productId=${_Iproduct}`)
    const result = await res.data
    console.log(result)
    return result
  }catch(err){console.log(err)}
}
