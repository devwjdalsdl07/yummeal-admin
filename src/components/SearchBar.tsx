import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { SearchBarWrap } from "../style/SearchBarCss";
import SelectBox from "./SelectBox";

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
    <SearchBarWrap>
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
            <i className="glass">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </i>
          </button>
        </form>
      </div>
    </SearchBarWrap>
  );
};

export default SearchBar;
