import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Select } from "antd";
import { Dispatch, SetStateAction } from "react";

interface IOrder {
  
  // 선택된 필터 조건을 보내주는 값
  orderCodeCheckIndex: number | string;
  setOrderCodeCheckIndex: Dispatch<SetStateAction<number | string>>;
  orderCodeCheckWord: string;
  setOrderCodeCheckWord: Dispatch<SetStateAction<string>>;
}

const Search = ({
  orderCodeCheckIndex,
  setOrderCodeCheckIndex,
  orderCodeCheckWord,
  setOrderCodeCheckWord,
}: IOrder) => (
  <>
    <Select
      value={orderCodeCheckIndex == 0 ? "선택" : orderCodeCheckIndex}
      style={{ width: 130 }}
      onChange={e => {
        setOrderCodeCheckIndex(e);
      }}
      options={[
        { value: 1, label: "상품명" },
        { value: 2, label: "주문번호" },
        { value: 5, label: "주문자명" },
        { value: 3, label: "상품주문번호" },
      ]}
    />
    <div className="search-bar">
      <i>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </i>
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        value={orderCodeCheckWord}
        onChange={e => setOrderCodeCheckWord(e.target.value)}
        onClick={() => setOrderCodeCheckWord("")}
      />
    </div>
  </>
);

export default Search;
