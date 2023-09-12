import axios from "axios";

export const getProductId = async () => {
  try {
    const res = await axios.post("/api/admin/product/webeditor");
    const result = res.data;
    console.log("Product ID 임", result);
    return result;
  } catch (err) {
    console.log(err);
  }
};

export const getCate = async () => {
  try {
    const res = await axios.get("/api/cate/list");
    const result = res.data;
    return result;
  } catch (err) {
    console.log(err);
    return [
      {
        category: {
          cateId: 1,
          cateName: "초기",
        },
        cateDetail: [
          {
            cateDetailEntity: {
              cateDetailId: 1,
              cateDetailName: "곡물류",
            },
          },
          {
            cateDetailEntity: {
              cateDetailId: 2,
              cateDetailName: "야채류",
            },
          },
        ],
      },
      {
        category: {
          cateId: 2,
          cateName: "중기",
        },
        cateDetail: [
          {
            cateDetailEntity: {
              cateDetailId: 1,
              cateDetailName: "곡물류",
            },
          },
          {
            cateDetailEntity: {
              cateDetailId: 2,
              cateDetailName: "야채류",
            },
          },
          {
            cateDetailEntity: {
              cateDetailId: 3,
              cateDetailName: "고기류",
            },
          },
          {
            cateDetailEntity: {
              cateDetailId: 5,
              cateDetailName: "과일류",
            },
          },
        ],
      },
      {
        category: {
          cateId: 3,
          cateName: "후기",
        },
        cateDetail: [
          {
            cateDetailEntity: {
              cateDetailId: 1,
              cateDetailName: "곡물류",
            },
          },
          {
            cateDetailEntity: {
              cateDetailId: 2,
              cateDetailName: "야채류",
            },
          },
          {
            cateDetailEntity: {
              cateDetailId: 3,
              cateDetailName: "고기류",
            },
          },
          {
            cateDetailEntity: {
              cateDetailId: 4,
              cateDetailName: "해산물류",
            },
          },
          {
            cateDetailEntity: {
              cateDetailId: 5,
              cateDetailName: "과일류",
            },
          },
        ],
      },
      {
        category: {
          cateId: 4,
          cateName: "완료기",
        },
        cateDetail: [
          {
            cateDetailEntity: {
              cateDetailId: 1,
              cateDetailName: "곡물류",
            },
          },
          {
            cateDetailEntity: {
              cateDetailId: 2,
              cateDetailName: "야채류",
            },
          },
          {
            cateDetailEntity: {
              cateDetailId: 3,
              cateDetailName: "고기류",
            },
          },
          {
            cateDetailEntity: {
              cateDetailId: 4,
              cateDetailName: "해산물류",
            },
          },
          {
            cateDetailEntity: {
              cateDetailId: 5,
              cateDetailName: "과일류",
            },
          },
        ],
      },
    ];
  }
};

const config = {
  headers: {
    "Content-Type": "multipart/form-data", // 헤더 설정
  },
};

export const postImage = async (_iproduct, img) => {
  const formData = new FormData();
  console.log("이미지 파일", img);
  formData.append("img", img);
  try {
    console.log("폼데이타", formData);
    const res = await axios.post(
      `/api/admin/${_iproduct}/img`,
      formData,
      // config,
    );
    const result = res.data;
    console.log("이미지업로드 성공", result);
    return result;
  } catch (err) {
    console.log("이미지업로드 에러", err);
  }
};

export const deleteProduct = async _iproduct => {
  try {
    const res = axios.delete(`/api/admin/${_iproduct}`);
    return res.data;
  } catch (err) {
    console.log(_iproduct);
    console.log(err);
  }
};

export const itemAdd = async _data => {
  try {
    const res = await axios.post("/api/admin/product", _data);
    return res.data;
  } catch (err) {
    console.log("아이템 등록 실패");
    console.log(_data);
    console.log(err);
  }
};
export const imgAdd = async (_iproduct, imgArr) => {
  const formData = new FormData();
  for (const img of imgArr) {
    formData.append("img", img);
  }
  try {
    const res = await axios.post(
      `/api/admin/webeditor/product/imglist/thumbnail?productId=${_iproduct}`,
      formData,
      config,
    );
    const result = res.data;
    console.log("이미지 등록", result);
    return result;
  } catch (err) {
    console.log("이미지 등록 실패");
    console.log(err);
  }
};

export const deleteImage = async _imgpk => {
  try {
    const res = await axios.delete(`/api/admin/${_imgpk}/webeditor`);
    const result = await res.data;
    console.log("이미지 삭제", result);
    return result;
  } catch (err) {
    console.log(err);
  }
};
