import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import ImgUpload from "../components/ImgUpload";
import { AdminWrapper } from "../style/AdminAddCss";
import {
  deleteProduct,
  getCate,
  getProductId,
  imgAdd,
  itemAdd,
  postImage,
} from "../api/adminAddAxios";
import { useNavigate } from "react-router-dom";

const AdminItemEdit = () => {
  const allergyArr = [
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
  const quillRef = useRef();
  const [cateList, setCateList] = useState([]);
  const [subCateList, setSubCateList] = useState([]);
  const [content, setContent] = useState();
  const [itemName, setItemName] = useState();
  const [price, setPrice] = useState(0);
  const [commaPrice, setCommaPrice] = useState(0);
  const [cate, setCate] = useState();
  const [selectedCateDetail, setSelectedCateDetail] = useState([]);
  const [product, setProduct] = useState();
  const [imgArr, setImgArr] = useState([null, null, null, null]);
  const [showModal, setShowModal] = useState(false);
  const [allegy, setAllegy] = useState([]);
  const [commaQuant, setCommaQuant] = useState("");
  const [quant, setQuant] = useState(0);
  const productRef = useRef(product);
  const handlePriceChange = e => {
    const value = e.target.value;
    const removedCommaValue = Number(value.replaceAll(/[^0-9]/g, ""));
    setCommaPrice(removedCommaValue.toLocaleString());
    setPrice(removedCommaValue);
  };
  const handleQuantChange = e => {
    const value = e.target.value;
    const removedCommaValue = Number(value.replaceAll(/[^0-9]/g, ""));
    setCommaQuant(removedCommaValue.toLocaleString());
    setQuant(removedCommaValue);
  };
  const handleCateChange = e => {
    setCate(e.target.value);
    setSelectedCateDetail([]);
    const selectedCate = cateList.find(
      item => item.cateId === Number(e.target.value),
    );
    if (selectedCate && selectedCate.list) {
      setSubCateList(selectedCate.list);
    } else {
      setSubCateList([]);
    }
  };
  const handleCheckboxChange = e => {
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
  const handleAllegyChange = e => {
    const allegyId = Number(e.target.value);
    if (e.target.checked) {
      setAllegy(prevSelected => [...prevSelected, allegyId]);
    } else {
      setAllegy(prevSelected => prevSelected.filter(id => id !== allegyId));
    }
  };
  const handleCancleClick = () => {
    deleteProduct(product);
    localStorage.removeItem("adminStorage");
    navigate("/admin");
  };
  const imgUpload = async (_product, _file) => {
    const result = await postImage(_product, _file);
    return result;
  };

  const imageHandler = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();
    input.addEventListener("change", async () => {
      const editor = quillRef.current.getEditor();
      const file = input.files[0];
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

  const fetchProductId = async () => {
    const result = await getProductId();
    setProduct(result);
    productRef.current = result;
  };
  const fetchCate = async () => {
    const result = await getCate();
    setCateList(result);
  };
  const handleOkCliclk = async () => {
    console.log(imgArr);
    const data = {
      productId: product,
      title: "",
      name: itemName,
      price: price,
      quantity: 0,
      description: content,
      saleVolume: 0,
      allergy: allegy,
      category: cate,
      cateDetail: selectedCateDetail,
    };
    const result = imgArr.filter(item => item !== null);
    const imgResult = await imgAdd(product, result);
    const itemResult = await itemAdd(data);
    navigate("/admin");
  };
  useEffect(() => {
   
  }, []);
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
                <ImgUpload
                  key={idx}
                  imgArr={imgArr}
                  setImgArr={setImgArr}
                  idx={idx}
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
                    value={item.cateId}
                    selected={cate == item.cateId}
                  >
                    {item.cateName}
                  </option>
                ))}
              </select>
              {subCateList.map((item, idx) => (
                <React.Fragment key={idx}>
                  <input
                    type="checkbox"
                    value={item.cateDetailId}
                    id={`checkbox-${item.cateDetailId}`}
                    onChange={e => handleCheckboxChange(e)}
                    checked={selectedCateDetail.includes(item.cateDetailId)}
                  />
                  <label htmlFor={`checkbox-${item.cateDetailId}`}>
                    {item.cateName}
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
