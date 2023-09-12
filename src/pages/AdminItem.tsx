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
import { useNavigate } from "react-router-dom";
import { getItem } from "../api/adminItemAxios";

export interface Iitem {
  productId: number;
  thumbnail: Array<string>;
  name: string;
  price: number;
  cate: number;
  quantity: number;
  cateDetail: Array<number>;
  allegyName: Array<number>;
  delYn?: 1 | 0;
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
  const [radio, setRadio] = useState<number | undefined>();
  const [sale, setSale] = useState<number | undefined>();
  const [name, setName] = useState<string | undefined>();
  const [itemList, setItemList] = useState<Array<Iitem>>([
    {
      productId: 1,
      thumbnail: ["title"],
      name: "name",
      price: 1000,
      cate: 1,
      quantity: 20,
      cateDetail: [1, 3, 5],
      allegyName: [1, 2, 3, 5],
      delYn: 1,
    },
  ]);
  const [filter, setFilter] = useState<Iitem[]>([]);

  const fetchItem = async () => {
    const result = await getItem();
    setItemList(result);
    setFilter(result);
  };
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleAllergy = (allergyArr: TAllergy[]) => {
    setSelectAllergy(allergyArr);
  };
  const handleAddClick = () => {
    navigate("/admin/adminadd");
  };
  const handleRadioChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    setRadio(e.target.value);
  };
  const handleCateChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setCate([...cate, parseInt(value)]);
    } else {
      setCate(cate.filter(item => item !== parseInt(value)));
    }
  };

  const handleSubCateChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setSubCate([...subCate, parseInt(value)]);
    } else {
      setSubCate(subCate.filter(item => item !== parseInt(value)));
    }
  };
  const handleSaleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    setSale(e.target.value);
  };
  const handleResetClick = () => {
    setSelectAllergy([]);
    setSubCate([]);
    setRadio(undefined);
    setName("");
    setCate([]);
    const checkboxes = document.querySelectorAll("input");
    checkboxes.forEach(checkbox => {
      checkbox.checked = false;
    });
  };
  const nameFilter = (_item: Iitem[]) =>
    name ? _item.filter(item => item.name.includes(name)) : _item;

  // const allergyFilter = (_item: Iitem[]) =>
  //   selectAllergy.length > 0
  //     ? _item.filter(item =>
  //         item.allergy.some(allergy =>
  //           selectAllergy.some(
  //             selectedAllergy => selectedAllergy.value === allergy,
  //           ),
  //         ),
  //       )
  //     : _item;

  const allergyFilter = (_item: Iitem[]) => {
    if (selectAllergy.length > 0) {
      const selectedAllergyArr: number[] = selectAllergy.map(item => {
        return item.value;
      });

      const resultList = _item.filter(item => {
        const list = item.allegyName?.filter(
          subItem => selectedAllergyArr?.includes(subItem),
        );
        return list?.length === selectedAllergyArr?.length;
      });
      return resultList;
    }
    return _item;
  };

  const cateFilter = (_item: Iitem[]) =>
    cate.length > 0 ? _item.filter(item => cate.includes(item.cate)) : _item;

  const subCateFilter = (_item: Iitem[]) => {
    if (subCate.length > 0) {
      const resultList = _item.filter(item => {
        if (item.cateDetail?.length > 0) {
          const list = item.cateDetail.filter(subItem =>
            subCate.includes(subItem),
          );
          return list.length === subCate.length;
        }
      });
      return resultList;
    }
    return _item;
  };
  const quaintyFilter = (_item: Iitem[]) => {
    if (radio == 1) {
      return _item.filter(item => item.quantity > 0);
    } else if (radio == 2) {
      return _item.filter(item => item.quantity <= 0);
    }
    return _item;
  };
  const deleteFilter = (_item: Iitem[]) => {
    if (sale == 1) {
      return _item.filter(item => item.delYn === 0);
    } else if (sale == 2) {
      return _item.filter(item => item.delYn === 1);
    }
    return _item;
  };
  const filterList = [
    nameFilter,
    allergyFilter,
    cateFilter,
    subCateFilter,
    quaintyFilter,
    deleteFilter,
  ];

  const filterItemList = filterList.reduce(
    (filteredItems: any, filterFunction) => {
      return filterFunction(filteredItems);
    }, // 각각의 필터링 함수를 실행합니다.
    itemList, // 초기값으로 itemList을 사용합니다.
  );

  useEffect(() => {
    setFilter(filterItemList);
  }, [name, cate, subCate, selectAllergy, radio, sale]);

  useEffect(() => {
    fetchItem();
  }, []);

  const items: Array<JSX.Element> = filter.map((item, idx) => {
    return (
      <ItemList
        key={idx}
        item={item}
        allergyArr={allergyArr}
        subCateArr={subCateArr}
        filter={filter}
        setFilter={setFilter}
      />
    );
  });
  return (
    <div style={{ background: "rgb(242,243,247)", height: "100%" }}>
      <ItemContainer>
        <h1>상품 목록</h1>
        <TotalInfoWrap>
          <span className="itemCount">
            전체 상품<strong>{itemList.length}</strong>개
          </span>
          <span className="itemCount">
            재고보유 상품{" "}
            <strong>{itemList.filter(item => item.quantity > 0).length}</strong>
            개
          </span>
          <span className="itemCount">
            재고없는 상품{" "}
            <strong>
              {itemList.filter(item => item.quantity <= 0).length}
            </strong>
            개
          </span>
          <span className="itemCount">
            판매중지 상품{" "}
            <strong>{itemList.filter(item => item.delYn === 1).length}</strong>
            개
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
              <div className="test1 bg-grey">
                <span>판매 상태</span>
              </div>
              <div className="test2">
                <form onChange={handleSaleChange}>
                  <input type="radio" name="sale" value={1} />
                  판매 중
                  <input type="radio" name="sale" value={2} />
                  판매 중지
                  <input type="radio" name="sale" value={3} />
                  전체
                </form>
              </div>
            </div>
            <div className="selectFilter bg-white">
              <div className="saleName bg-grey">
                <span>재고 상태</span>
              </div>
              <div className="saleCheck">
                <form onChange={handleRadioChange}>
                  <input type="radio" name="quant" value={1} />
                  재고보유 중
                  <input type="radio" name="quant" value={2} />
                  재고 없음
                  <input type="radio" name="quant" value={3} />
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
                  onChange={(allergyArr: any) => {
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
            <div className="resetBtWrap">
              <button className="resetBt" onClick={handleResetClick}>
                검색 초기화
              </button>
            </div>
          </div>
        </SearchFilterWrap>
        <ItemListWrap>
          <h2>상품 리스트</h2>
          <div className="itemListContainer">
            <div>
              검색된 상품 <strong>{filter.length}</strong> 개
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
