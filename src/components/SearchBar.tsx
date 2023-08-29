import styled from "@emotion/styled";
import { useState } from "react";
import SelectBox from "./SelectBox";

const Wrap = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  font-size: 15px;
  .content-wrap {
    display: flex;
    gap: 20px;
    justify-content: center;
    padding: 20px;
    .select-wrap {
      width: 150px;
      padding-top: 20px;
      .select {
        width: 100%;
        height: 30px;
        border: 1px solid;
        border-radius: 8px;
      }
    }
  }
  .search-wrap {
    width: 40%;
    padding-top: 20px;
    .search {
      width: 100%;
      height: 30px;
      border: 1px solid;
      border-radius: 8px;
      padding: 15px;
    }
  }
`;
const searchMenu = ["통합검색", "아이디", "주문 번호", "상품 번호"];

export interface ISearchMenu {
  label: string;
  value: string;
}

const SearchBar = () => {
  const options: Array<ISearchMenu> = [
    ...searchMenu.map(item => ({ label: item, value: item })),
  ];

  const [search, setSearch] = useState("");
  const [selectValue, setSelectValue] = useState("");

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearchPost = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    setSearch("");
  };

  return (
    <Wrap>
      <div className="content-wrap">
        <div className="select-wrap">
          <SelectBox
            options={options}
            value={selectValue}
            onChange={handleSelectChange}
          />
        </div>
        <form className="search-wrap">
          <input
            className="search"
            type="text"
            value={search}
            onChange={e => handleSearch(e)}
            placeholder="검색어를 입력하세요"
            onClick={() => setSearch("")}
          />
          <button className="glasswrap" onClick={e => handleSearchPost(e)}>
            {/* <i className="glass">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </i> */}
          </button>
        </form>
      </div>
    </Wrap>
  );
};

export default SearchBar;
