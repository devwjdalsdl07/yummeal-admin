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
export const deleteThumb = async (_item: any) => {
  try {
    const res = await axios.delete("/api/admin/webeditor/thumbnail", {
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
