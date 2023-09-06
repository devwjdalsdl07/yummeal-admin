import styled from "@emotion/styled";

export const SearchBarWrap = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  font-size: 15px;
  .content-wrap {
    display: flex;
    gap: 20px;
    justify-content: center;
    padding: 25px 20px;
    .select-wrap {
      width: 150px;
      padding-top: 20px;
      .select {
        width: 100%;
        height: 30px;
        border: 1px solid;
        border-radius: 8px;
        padding-left: 5px;
      }
    }
  }
  .search-wrap {
    width: 40%;
    padding-top: 20px;
    position: relative;
    .search {
      width: 100%;
      height: 30px;
      border: 1px solid;
      border-radius: 8px;
      padding: 15px;
    }
    .glasswrap {
      position: absolute;
      top: 50%;
      right: 3%;
      font-size: 20px;
      border: 0;
      background: #fff;
      cursor: pointer;
    }
  }
`;