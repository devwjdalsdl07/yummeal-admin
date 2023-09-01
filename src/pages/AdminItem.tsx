import React, { useEffect, useState } from "react";
import {
  ItemContainer,
  ItemListWrap,
  SearchFilterWrap,
  TotalInfoWrap,
} from "../style/AdminItemCss";
import ItemList from "../components/ItemList";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useNavigate } from "react-router";
import { getItem } from "../api/adminItemAxios";

export interface Iitem {
  id: number;
  thumnail: string;
  name: string;
  price: number;
  cate: number;
  quainty: number;
  subCate: Array<number>;
  allergy: Array<number>;
}

export type TAllergy = {
  value: number;
  label: string;
};
export type TSubCate = {
  value: number;
  label: string;
};

const AdminItem = () => {
  // test
  const navigate = useNavigate();
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
  const subCateArr: Array<TSubCate> = [
    { value: 1, label: "곡물류" },
    { value: 2, label: "야채류" },
    { value: 3, label: "고기류" },
    { value: 4, label: "해산물류" },
    { value: 5, label: "과일류" },
  ];
  const [selectAllergy, setSelectAllergy] = useState<Array<TAllergy>>([]);
  const animatedComponents = makeAnimated();
  const [subCate, setSubCate] = useState<Array<number>>([]);
  const [cate, setCate] = useState<Array<number>>([]);
  const [radio, setRadio] = useState<number>();
  const [name, setName] = useState<string>();
  const [itemList, setItemList] = useState<Array<Iitem>>([
    {
      id: 1,
      thumnail: "title",
      name: "name",
      price: 1000,
      cate: 1,
      quainty: 20,
      subCate: [1, 3, 5],
      allergy: [1, 2, 3, 4],
    },
    {
      id: 1,
      thumnail: "title",
      name: "name",
      price: 1000,
      cate: 1,
      quainty: 30,
      subCate: [1, 3, 5],
      allergy: [5, 6, 7, 8],
    },
  ]);
  const [filter, setFilter] = useState([]);
  interface test {
    name:string|undefined,
    subCate:Array<number>,
    cate:Array<number>,
    radio:number|undefined,
    selecAllergy:Array<number>
  }
  let searchFilter:test = {
    name,
    subCate,
    cate,
    radio,
    selecAllergy: selectAllergy.map(item => item.value),
  };

  const fetchItem = async () => {
    const result = await getItem();
    console.log(result);
    return result;
  };
  const handleNameChange = e => {
    setName(e.target.value);
  };
  const handleAllergy = (allergyArr: any) => {
    setSelectAllergy(allergyArr.value);
  };
  const handleAddClick = () => {
    navigate("/adminadd");
  };
  const handleRadioChange = (e) => {
    setRadio(e.target.value);
  };
  const handleCateChange = e => {
    const { value, checked } = e.target;
    if (checked) {
      setCate([...cate, value]);
    } else {
      setCate(cate.filter(item => item !== value));
    }
  };

  const handleSubCateChange = e => {
    const { value, checked } = e.target;

    // 선택된 경우 배열에 추가, 선택 취소된 경우 배열에서 제거
    if (checked) {
      setSubCate([...subCate, value]);
    } else {
      setSubCate(subCate.filter(item => item !== value));
    }
  };
  // useEffect(() => setItemList(fetchItem()), []);

  const nameFilter = name
    ? itemList.filter(item => item.name.includes(name))
    : itemList;
  const allergyFilter = selectAllergy
    ? itemList.filter(item => item.allergy.includes(searchFilter.selecAllergy))
    : itemList;
  const cateFilter = cate
    ? itemList.filter(item => cate.includes(item.cate))
    : itemList;
  const subCateFilter = subCate
    ? itemList.filter(item => item.subCate.includes(subCate))
    : itemList;

  const filterList = [nameFilter, allergyFilter, cateFilter, subCateFilter];

  const filterItemList = filterList.reduce((filteredItems, filterFunction) => {
    return filterFunction(filteredItems); // 필터 함수를 순차적으로 적용
  }, itemList); // 초기값으로 itemList을 사용

  useEffect(() => {
    setFilter(filterItemList);
  }, [searchFilter]);

  const items: Array<JSX.Element> = itemList.map((item, idx) => {
    return (
      <ItemList
        key={idx}
        item={item}
        allergyArr={allergyArr}
        subCateArr={subCateArr}
      />
    );
  });
  return (
    <div style={{ background: "rgb(242,243,247)", height: "100vh" }}>
      <ItemContainer>
        <h1>상품 목록</h1>
        <TotalInfoWrap>
          <span className="itemCount">
            전체 상품<strong>{itemList.length}</strong>개
          </span>
          <span className="itemCount">
            재고보유 상품 <strong>{}</strong>개
          </span>
          <span className="itemCount">
            재고없는 상품 <strong>{}</strong>개
          </span>
          <span className="itemAdd" onClick={handleAddClick}>
            상품추가
          </span>
        </TotalInfoWrap>
        <SearchFilterWrap>
          <div>
            <h2>검색 필터</h2>
          </div>
          <div className="searchContainer">
            <div className="textFilter bg-white">
              <div className="itemName bg-grey">
                <span>상품 이름</span>
              </div>
              <div className="textFiled">
                <input
                  type="text"
                  placeholder="검색어 입력 해주세요."
                  value={name}
                  onChange={handleNameChange}
                />
              </div>
            </div>
            <div className="selectFilter bg-white">
              <div className="saleName bg-grey">
                <span>재고 상태</span>
              </div>
              <div className="saleCheck">
                <form onChange={handleRadioChange}>
                  <input type="radio" name="sale" value={1} />
                  재고보유 중
                  <input type="radio" name="sale" value={2} />
                  재고 없음
                  <input type="radio" name="sale" value={3} />
                  전체
                </form>
              </div>
              <div className="allergyName bg-grey">
                <span>알러지</span>
              </div>
              <div className="allergySelect">
                <Select
                  className="allergy"
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  onChange={allergyArr => {
                    handleAllergy(allergyArr);
                  }}
                  value={selectAllergy}
                  isMulti
                  options={allergyArr}
                  placeholder="알러지 선택"
                  isSearchable={false}
                />
              </div>
            </div>
            <div className="cateFilter bg-white">
              <div className="cateName bg-grey">
                <span>단계</span>
              </div>
              <div className="cateCheck">
                <form onChange={handleCateChange}>
                  <input type="checkBox" value={1} /> 1단계
                  <input type="checkBox" value={2} /> 2단계
                  <input type="checkBox" value={3} /> 3단계
                  <input type="checkBox" value={4} /> 4단계
                </form>
              </div>
              <div className="subCateName bg-grey">
                <span>카테고리</span>
              </div>
              <div className="subCateCheck">
                <form onChange={handleSubCateChange}>
                  <input type="checkBox" value={1} /> 곡물류
                  <input type="checkBox" value={2} /> 야채류
                  <input type="checkBox" value={3} /> 고기류
                  <input type="checkBox" value={4} /> 해산물류
                  <input type="checkBox" value={5} /> 과일류
                </form>
              </div>
            </div>
            <button className="resetBt">검색 초기화</button>
          </div>
        </SearchFilterWrap>
        <ItemListWrap>
          <h2>상품 리스트</h2>
          <div className="itemListContainer">
            <div>
              검색된 상품 <strong>{itemList.length}</strong> 개
            </div>
            <div className="itemListTop bg-grey">
              <div className="itemNum">
                <span>No</span>
              </div>
              <div className="itemName">
                <span>상품명</span>
              </div>
              <div className="itemPrice">
                <span>가격</span>
              </div>
              <div className="itemCate">
                <span>단계</span>
              </div>
              <div className="itemSubCate">
                <span>카테고리</span>
              </div>
              <div className="itemAllergy">
                <span>알러지</span>
              </div>
              <div className="itemButton">
                <p>비고</p>
              </div>
            </div>
            <div
              className="itemList"
              style={{
                overflowY: "auto",
              }}
            >
              {items}
            </div>
          </div>
        </ItemListWrap>
      </ItemContainer>
    </div>
  );
};

export default AdminItem;
