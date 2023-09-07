import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { deleteThumb } from "../api/adminItemEditAxios";

const ImgEdit = ({
  imgArr,
  setImgArr,
  idx,
  product,
}: {
  imgArr: Array<File | null | string>;
  setImgArr: React.Dispatch<React.SetStateAction<(string | File | null)[]>>;
  idx: number;
  product: string | number | undefined;
}) => {
  const [imgPreview, setImgPreview] = useState<string | undefined | null>(null);
  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const fileInput: any = useRef(null);
  const handleImgUpload = () => {
    fileInput.current.click();
  };
  const handleImgChange = (e: any) => {
    const file = e.target.files[0];
    if (typeof imgArr[idx] === "string") {
      deleteThumb({
        productId: product,
        thumbnailFullName: String(imgArr[idx]),
      });
    }

    if (file) {
      const reader = new FileReader();
      reader.onload = function (event: any) {
        setImgPreview(event.target.result);
      };
      reader.readAsDataURL(file);

      // 이미지 데이터를 imgArr에 추가하는 부분
      setImgArr(prevImgArr => {
        const newImgArr = [...prevImgArr]; // 기존 배열 복사
        newImgArr[idx] = file; // 새로운 이미지 데이터 추가
        return newImgArr;
      });
    }
  };

  const handleImgDelete = (e: any) => {
    e.stopPropagation();
    if (typeof imgArr[idx] === "string") {
      deleteThumb({
        productId: product,
        thumbnailFullName: String(imgArr[idx]),
      });
    }
    setImgPreview(null);
    setShowDeleteButton(false);
    setImgArr(prevImgArr => {
      const newImgArr = [...prevImgArr];
      newImgArr[idx] = null;
      return newImgArr;
    });
  };
  useEffect(() => {
    if (typeof imgArr[idx] === "string") {
      setImgPreview(
        `http://192.168.0.144:5001/img/product/${product}/${String(
          imgArr[idx],
        )}`,
      );
    }
  }, [imgArr]);
  return (
    <div className="img">
      <div className="upload" onClick={handleImgUpload}>
        {imgPreview ? (
          <>
            <img
              src={imgPreview}
              alt="미리보기"
              onMouseEnter={() => setShowDeleteButton(true)}
              onMouseLeave={() => setShowDeleteButton(false)}
            ></img>
          </>
        ) : (
          <p> 업로드 </p>
        )}
        <input
          type="file"
          ref={fileInput}
          accept="image/*"
          name="profile_img"
          onChange={handleImgChange}
        ></input>
        {showDeleteButton && (
          <button
            onClick={handleImgDelete}
            onMouseEnter={() => setShowDeleteButton(true)}
            onMouseLeave={() => setShowDeleteButton(false)}
          >
            사진 삭제
          </button>
        )}
      </div>
    </div>
  );
};

export default ImgEdit;
