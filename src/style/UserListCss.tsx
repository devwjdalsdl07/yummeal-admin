import { styled } from "styled-components";

export const UserListWrap = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  font-size: 15px;
  padding: 20px 30px;
  .user-info {
    padding: 25px 20px;
  }
  .user-info-menu {
    width: 1180px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 120px 170px 270px 170px 100px 200px 150px;
    text-align: center;
    background: #e3eaf2;
    border-top: 1px solid #aaa;
    border-bottom: 1px solid #aaa;
    & > li {
      line-height: 25px;
      padding: 10px 0;
      /* border-right: 1px solid #aaa; */
      &:last-of-type {
        border: none;
      }
    }
  }
  .user-info-content {
    display: grid;
    width: 1180px;
    margin: 0 auto;
    /* border-left: 1px solid #aaa; */
    .no-data {
      width: 1180px;
      margin: 0 auto;
      text-align: center;
      border-bottom: 1px solid #aaa;
    }
    .content-grid {
      & > ul {
        display: flex;
        margin: 0 auto;
        border-bottom: 1px solid #aaa;
        &:hover {
          background: #e3eaf2;
        }
        & > li {
          line-height: 35px;
          padding: 10px 0;
          text-align: center;
          /* border-right: 1px solid #aaa; */
        }
        & > li:nth-of-type(1) {
          width: 120px;
        }
        & > li:nth-of-type(2) {
          width: 170px;
        }
        & > li:nth-of-type(3) {
          width: 270px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        & > li:nth-of-type(4) {
          width: 170px;
        }
        & > li:nth-of-type(5) {
          width: 100px;
        }
        & > li:nth-of-type(6) {
          width: 200px;
        }
        & > li:nth-of-type(7) {
          width: 150px;
        }
      }
    }
    .userdelete {
      padding: 5px 10px;
      background: #ec9c9c;
      border: none;
      cursor: pointer;
    }
  }
  .ant-pagination {
    padding-bottom: 10px;
    text-align: center;
  }
`;
