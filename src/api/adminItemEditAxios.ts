import axios from "axios";
import { instance } from "./axios";

export const getItemInfo = async (_id: number) => {
  try {
    const res = await instance.get(
      `/api/admin/product/{productId}?productId=${_id}`,
    );
    const result = res.data;
    console.log(result)
    return result;
  } catch (err) {
    console.log(err);
  }
};
export const deleteThumb = async (_item: any) => {
  try {
    const res = await instance.delete("/api/admin/webeditor/thumbnail", {
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        productId: _item.productId,
        thumbnailFullName: _item.thumbnailFullName,
      },
    });
    const result = await res.data;
    return result;
  } catch (err) {
    console.log(_item);
    console.log(err);
  }
};

export const itemEdit = async (_data:any) => {
  try {
    const res = await instance.patch("/api/admin/webeditor/product/modification", _data);
    console.log("아이템등록",_data)
    console.log("아이템등록 후",res.data)
    return res.data;
  } catch (err) {
    console.log("아이템 등록 실패");
    console.log(_data)
    console.log(err);
  }
};
