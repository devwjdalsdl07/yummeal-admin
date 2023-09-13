import styled from "@emotion/styled";
export const ProductInfo = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  font-size: 15px;
  padding: 20px 30px;

  .search-wrap {
    display: flex;
    gap: 30px;
    padding-top: 15px;
    margin-left: 40px;
    margin-top: 15px;
    .search-bt {
      margin-left: 400px;
      > button {
        width: 150px;
        height: 35px;
        margin-right: 35px;
        font-size: 15px;
        border-radius: 8px;
        border: 1px solid #d9d9d9;
        background: #fff;
        :hover {
          background: #ff5d5c;
          border: 1px solid #ff5d5c;
          color: #fff;
        }
      }
    }

    h3 {
      font-size: 22px;
      margin-right: 25px;
      width: 95px;
      color: #152941;
    }
    .search-check {
      display: flex;
      gap: 27px;
      > button {
        width: 60px;
        border-radius: 35px;
        border: 1px solid #d9d9d9;
        background-color: #fff;
        padding: 6px;
        color: #152941;
        :hover {
          background: #61a1f3;
          border: 1px solid #61a1f3;
          color: #fff;
        }
      }
    }

    .search-bar {
      width: 400px;
      height: 32px;
      padding-right: 20px;
      border-radius: 5px;
      border: solid 1px #d9d9d9;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1;
      opacity: 1;
      font-size: 15px;
      background: #fff;
      i {
        color: #969696;
      }
      input {
        width: 300px;
        border: none;
        text-align: center;
        overflow: auto;
        font-size: 15px;

        &:focus {
          outline: none;
          width: 220px;
          text-align: left;
        }
      }
    }
  }

  .box-layout {
    display: flex;
    margin: 30px 0;
    padding: 20px 40px;
    gap: 40px;

    > span {
      display: flex;
      font-size: 23px;
      font-weight: 600;

      p {
        margin-left: 20px;
        font-size: 23px;
      }
    }

    .delivery-bt {
      > ul {
        display: flex;
        gap: 10px;
      }
    }

    button {
      border: 1px solid #d9d9d9;
      background: #fff;
      border-radius: 5px;
      width: 80px;
      height: 32px;
      top: 5px;
      :hover {
        background: #ff5d5c;
        border: 1px solid #ff5d5c;
        color: #fff;
      }
    }
  }
  .content-info {
    height: 500px;

    .title {
      margin: 0 10px;
      display: grid;
      grid-template-columns: 35px 140px 70px 130px 120px 260px 100px 75px 130px 130px 130px;
      text-align: center;
      border-top: 1px solid #bfb6b6;
      border-bottom: 1px solid #bfb6b6;
      background: #e3eaf2;
      list-style: none;

      li {
        display: grid;
        margin: 10px 0;
        text-align: center;
        font-weight: bold;

        &:last-child {
          border-right: none;
        }
      }
      .i {
        text-align: end;
        padding-top: 10px;
        padding-right: 40px;
      }
    }
    .item-list {
      display: grid;
      grid-column: column;
    }
  }
  .page-bt {
    text-align: center;
    margin: 10px;
  }
`;
