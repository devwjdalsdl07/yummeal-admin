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
  deleteImage,
  deleteProduct,
  getCate,
  getProductId,
  imgAdd,
  itemAdd,
  postImage,
} from "../api/adminAddAxios";
import { useNavigate } from "react-router-dom";

const AdminAddItem = () => {
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
  const [uploadImg, setUploadImg] = useState([]);
  let storage = {
    product,
    itemName,
    price,
    cate,
    selectedCateDetail,
    content,
    allegy,
    quant,
    uploadImg,
  };
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
      item => item.category.cateId === Number(e.target.value),
    );
    if (selectedCate && selectedCate.cateDetail) {
      setSubCateList(selectedCate.cateDetail);
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

  var InlineBlot = Quill.import("blots/block");
  class ImageBlot extends InlineBlot {
    static create(data) {
      console.log(data);
      const node = super.create(data);
      node.setAttribute("src", data.src);
      node.setAttribute("pk", data.pk);
      return node;
    }
    static value(domNode) {
      const { src, pk } = domNode.dataset;
      return { src, pk };
    }
  }
  ImageBlot.blotName = "imageBlot";
  ImageBlot.className = "image-blot";
  ImageBlot.tagName = "img";
  Quill.register({ "formats/imageBlot": ImageBlot });

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
          {
            src: `http://192.168.0.144:5001/img/webeditor/${productRef.current}/${img.img}`,
            pk: img.pimgId,
          },
          "user",
        );
        setUploadImg([
          ...uploadImg,
          {
            src: `http://192.168.0.144:5001/img/webeditor/${productRef.current}/${img.img}`,
            pk: img.pimgId,
          },
        ]);
        editor.setSelection(range.index + 1);
      } catch (error) {
        console.log(error);
      }
    });
  };

  const handleEditorChange = (content, delta, source, editor) => {
    console.log("콘텐트", content);
    console.log("델타", delta);
    console.log("에디터", editor);
    if (delta.filter(item => item.delete) && uploadImg.length > 0) {
      for (let i = 0; i < uploadImg.length; i++) {
        if (!quillRef.current?.value.includes(uploadImg[i].src)) {
          const tempImgFiles = structuredClone(uploadImg);
          const filterdImgFiles = tempImgFiles.filter(
            img => img.id !== uploadImg[i].pk,
          );
          deleteImage(uploadImg[i].pk);
          setUploadImg(filterdImgFiles);
        }
      }
    }

    setContent(content);
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
      name: itemName,
      price: price,
      quantity: quant,
      description: content,
      saleVolume: 0,
      allergyId: allegy,
      category: cate,
      cateDetail: selectedCateDetail,
      pointRate: 0,
    };
    const result = imgArr.filter(item => item !== null);
    const itemResult = await itemAdd(data);
    if (1 == itemResult) {
      const imgResult = await imgAdd(product, result);
      localStorage.removeItem("adminStorage");
      navigate("/adminitem");
    }
  };
  const adminStorage = () => {
    const storedStorage = localStorage.getItem("adminStorage");
    const parsedStorage = JSON.parse(storedStorage);
    console.log("파스한 스토레이지", parsedStorage);
    return parsedStorage;
  };
  const handleGoClick = () => {
    setShowModal(false);
    const selectedCate = cateList.find(
      item => item.category.cateId === Number(storage.cate),
    );
    if (selectedCate && selectedCate.cateDetail) {
      setSubCateList(selectedCate.cateDetail);
    } else {
      setSubCateList([]);
    }
  };
  const handleDelClick = async () => {
    localStorage.removeItem("adminStorage");
    deleteProduct(product);
    fetchProductId();
    fetchCate();
    setItemName("");
    setPrice(0);
    setCommaPrice("");
    setQuant(0);
    setCommaQuant("");
    setCate("");
    setSelectedCateDetail([]);
    setContent("");
    setShowModal(false);
    setAllegy([]);
  };

  useLayoutEffect(() => {
    storage = adminStorage();
  }, []);

  useEffect(() => {
    if (storage && storage.product) {
      setShowModal(true);
      setProduct(storage.product);
      setItemName(storage.itemName);
      setPrice(storage.price);
      setCommaPrice(storage.price?.toLocaleString());
      setCate(storage.cate);
      setSelectedCateDetail(storage.selectedCateDetail);
      setContent(storage.content);
      setAllegy(storage.allegy);
      setQuant(storage.quant);
      setCommaQuant(storage.quant?.toLocaleString());
      setUploadImg(storage.uploadImg);
      fetchCate();
      productRef.current = storage.product;
    } else {
      fetchProductId();
      fetchCate();
    }
  }, []);
  useEffect(() => {
    // storage 값이 변경될 때마다 값을 로컬스토리지에 저장
    localStorage.setItem("adminStorage", JSON.stringify(storage));
    console.log(storage);
  }, [storage]); // storage 값이 변경될 때만 이펙트 실행
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
            onChange={handleEditorChange}
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

        {showModal ? (
          <div className="modalWrap">
            <div className="modalBody">
              <span>이어서 작성 하시겠습니까 ?</span>
              <div className="modalButton">
                <div className="goButton" onClick={handleGoClick}>
                  이어쓰기
                </div>
                <div className="delButton" onClick={handleDelClick}>
                  삭제
                </div>
              </div>
              <div className="modalInfo">
                <span>*이미지는 불러올수 없습니다.</span>
              </div>
            </div>
          </div>
        ) : null}
      </AdminWrapper>
    </div>
  );
};

export default AdminAddItem;
