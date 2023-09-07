import React, { useEffect, useMemo, useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { AdminWrapper } from "../style/AdminAddCss";
import { getCate, imgAdd, itemAdd, postImage } from "../api/adminAddAxios";
import { useLocation, useNavigate } from "react-router-dom";
import { TAllergy } from "./AdminItem";
import { getItemInfo } from "../api/adminItemEditAxios";
import ImgEdit from "../components/ImgEdit";

interface ICateList {
  category: {
    cateId: number;
    cateName: string;
  };
  cateDetail: Array<ISubCateList>;
}
interface ISubCateList {
  cateDetailEntity: {
    cateDetailId: number;
    cateDetailName: string;
  };
}

const AdminItemEdit = () => {
  const { state } = useLocation();
  const allergyArr: Array<TAllergy> = [
    { value: 1, label: "난류" },
    { value: 2, label: "우유" },
    { value: 3, label: "메밀" },
    { value: 4, label: "땅콩" },
    { value: 5, label: "대두" },
    { value: 6, label: "밀" },
    { value: 7, label: "잣" },
    { value: 8, label: "호두" },
    { value: 9, label: "게" },
    { value: 10, label: "새우" },
    { value: 11, label: "오징어" },
    { value: 12, label: "고등어" },
    { value: 13, label: "조개류" },
    { value: 14, label: "복숭아" },
    { value: 15, label: "토마토" },
    { value: 16, label: "닭고기" },
    { value: 17, label: "돼지고기" },
    { value: 18, label: "소고기" },
    { value: 19, label: "아황산류" },
    { value: 20, label: "생선류" },
  ];
  const navigate = useNavigate();
  const quillRef = useRef<any>();
  const [cateList, setCateList] = useState<Array<ICateList>>([]);
  const [subCateList, setSubCateList] = useState<Array<ISubCateList>>([]);
  const [content, setContent] = useState<string>("");
  const [itemName, setItemName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [commaPrice, setCommaPrice] = useState<string>("0");
  const [cate, setCate] = useState<string | number>();
  const [selectedCateDetail, setSelectedCateDetail] = useState<Array<number>>(
    [],
  );
  const [product, setProduct] = useState<number | string>();
  const [imgArr, setImgArr] = useState<Array<File | null | string>>([
    null,
    null,
    null,
    null,
  ]);
  const [allegy, setAllegy] = useState<Array<number>>([]);
  const [commaQuant, setCommaQuant] = useState<string>("");
  const [quant, setQuant] = useState<number>(0);
  const productRef = useRef<any>(product);
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const removedCommaValue = Number(value.replaceAll(/[^0-9]/g, ""));
    setCommaPrice(removedCommaValue.toLocaleString());
    setPrice(removedCommaValue);
  };
  const handleQuantChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const removedCommaValue = Number(value.replaceAll(/[^0-9]/g, ""));
    setCommaQuant(removedCommaValue.toLocaleString());
    setQuant(removedCommaValue);
  };
  const handleCateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCate(e.target.value);
    setSelectedCateDetail([]);
    const selectedCate = cateList.find(
      item => item.category.cateId === Number(e.target.value),
    );
    if (selectedCate && selectedCate.cateDetail) {
      setSubCateList(selectedCate.cateDetail);
    } else {
      setSubCateList([]);
    }
  };
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cateDetailId = Number(e.target.value);
    if (e.target.checked) {
      // 체크 박스가 체크되었을 때
      setSelectedCateDetail(prevSelected => [...prevSelected, cateDetailId]);
    } else {
      // 체크 박스가 해제되었을 때
      setSelectedCateDetail(prevSelected =>
        prevSelected.filter(id => id !== cateDetailId),
      );
    }
  };
  const handleAllegyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const allegyId = Number(e.target.value);
    if (e.target.checked) {
      setAllegy(prevSelected => [...prevSelected, allegyId]);
    } else {
      setAllegy(prevSelected => prevSelected.filter(id => id !== allegyId));
    }
  };
  const handleCancleClick = () => {
    navigate("/adminitem");
  };
  const imgUpload = async (_product: number, _file: File | null) => {
    const result = await postImage(_product, _file);
    return result;
  };

  const imageHandler = () => {
    const input: any = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();
    input.addEventListener("change", async () => {
      const editor = quillRef.current.getEditor();
      const file: File | null = input.files[0];
      const range = editor.getSelection(true);
      try {
        const img = await imgUpload(productRef.current, file);
        console.log("받아오는 값", img);
        editor.insertEmbed(
          range.index,
          "imageBlot",
          { src: img.img, pk: img.pimgId },
          "user",
        );
        editor.setSelection(range.index + 1);
      } catch (error) {
        console.log(error);
      }
    });
  };
  const fetchItem = async () => {
    const result = await getItemInfo(state);
    const cateResult = await getCate();
    setCateList(cateResult);
    setProduct(state);
    setItemName(result.name);
    setPrice(result.price);
    setCommaPrice(result.price?.toLocaleString());
    setCate(result.cate);
    setSelectedCateDetail(result.cateDetail);
    setContent(result.description);
    setAllegy(result.allergyId);
    setQuant(result.quantity);
    setCommaQuant(result.quantity?.toLocaleString());
    setImgArr(
      imgArr.map((item: any, idx: number) => (item = result.thumbnail[idx])),
    );
    productRef.current = result.product;
    console.log(result);
    const selectedCate = cateResult.find(
      (item: any) => item.category.cateId === Number(result.cate),
    );
    if (selectedCate && selectedCate.cateDetail) {
      setSubCateList(selectedCate.cateDetail);
    } else {
      setSubCateList([]);
    }
  };
  const handleOkCliclk = async () => {
    console.log(imgArr);
    const data = {
      productId: product,
      name: itemName,
      price: price,
      quantity: quant,
      description: content,
      saleVolume: 0,
      allergy: allegy,
      category: cate,
      cateDetail: selectedCateDetail,
      poinRate: 0,
    };
    const result = imgArr.filter(
      item => item !== null || typeof item !== "string",
    );
    const imgResult = await imgAdd(product, result);
    const itemResult = await itemAdd(data);
    if (imgResult === itemResult) {
      localStorage.removeItem("adminStorage");
      navigate("/adminitem");
    }
  };
  useEffect(() => {
    fetchItem();
  }, []);
  useEffect(() => {
    console.log(content);
  }, [content]);

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          [{ header: [1, 2, 3, false] }],
          ["bold", "italic", "underline", "strike"],
          ["blockquote"],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ color: [] }, { background: [] }],
          [{ align: [] }, "link", "image"],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    };
  }, []);
  return (
    <div
      style={{
        backgroundColor: "rgb(248, 245, 239)",
      }}
    >
      <AdminWrapper>
        <div className="titleArea">
          <div>
            <div className="uploadContainer">
              {/* {elements} */}
              {imgArr.map((item, idx) => (
                <ImgEdit
                  key={idx}
                  imgArr={imgArr}
                  setImgArr={setImgArr}
                  idx={idx}
                  product={product}
                />
              ))}
            </div>
            <br />
            <div className="textWrap">
              <input
                className="nameText"
                type="text"
                value={itemName}
                placeholder="네임"
                onChange={e => setItemName(e.target.value)}
              />
              <input
                className="priceText"
                type="text"
                value={commaPrice}
                placeholder="가격"
                onChange={e => handlePriceChange(e)}
              ></input>
              <span>원</span>
              <input
                className="quantText"
                type="text"
                value={commaQuant}
                placeholder="재고"
                onChange={handleQuantChange}
              />
              <span>개</span>
            </div>
          </div>
          <div className="textContainer">
            <div className="cateWrap">
              <span>단계 및 카테고리 선택</span>
              <br />
              <select onChange={handleCateChange}>
                <option value="">단계</option>
                {cateList.map((item, idx) => (
                  <option
                    key={idx}
                    value={item.category.cateId}
                    selected={cate == item.category.cateId}
                  >
                    {item.category.cateName}
                  </option>
                ))}
              </select>
              {subCateList.map((item, idx) => (
                <React.Fragment key={idx}>
                  <input
                    type="checkbox"
                    value={item.cateDetailEntity.cateDetailId}
                    id={`checkbox-${item.cateDetailEntity.cateDetailId}`}
                    onChange={e => handleCheckboxChange(e)}
                    checked={selectedCateDetail.includes(
                      item.cateDetailEntity.cateDetailId,
                    )}
                  />
                  <label
                    htmlFor={`checkbox-${item.cateDetailEntity.cateDetailId}`}
                  >
                    {item.cateDetailEntity.cateDetailName}
                  </label>
                </React.Fragment>
              ))}
            </div>
            <div className="allegyWrap">
              <span>알러지 선택</span>
              {allergyArr.map((item, idx) => {
                return (
                  <div className="allegyCheck" key={idx}>
                    <input
                      type="checkbox"
                      value={item.value}
                      id={`allergy-${item.value}`}
                      onChange={handleAllegyChange}
                      checked={allegy.includes(item.value)}
                    />
                    <label htmlFor={`allegy-${item.value}`}>{item.label}</label>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="editorWrapper">
          <h2>상품 상세 정보</h2>
          <ReactQuill
            className="editor"
            style={{ width: "1000px", height: "500px" }}
            placeholder="상세정보"
            theme="snow"
            ref={quillRef}
            value={content}
            onChange={setContent}
            modules={modules}
          />
          <div className="buttonWrap">
            <button className="okButton" onClick={handleOkCliclk}>
              등록
            </button>
            <button className="cancleButton" onClick={handleCancleClick}>
              취소
            </button>
          </div>
        </div>
      </AdminWrapper>
    </div>
  );
};

export default AdminItemEdit;
