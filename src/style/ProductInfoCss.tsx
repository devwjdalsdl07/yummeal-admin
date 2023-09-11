import styled from "@emotion/styled";
export const ProductInfo = styled.div`
  flex-grow: 1;
  min-width: auto;
  height: 100%;
  padding: 20px 30px;
  h2 {
    font-size: 30px;
  }
  .search-wrap {
    display: flex;
    gap: 30px;
    padding-top: 15px;
    margin-left: 40px;
    margin-top: 15px;

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
    .search-bt {
      /* margin-left: auto; */
      margin-left: 100px;
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

    margin: 30px 40px;

    padding: 20px 0;
    gap: 40px;
    border-bottom: 1px solid #969696;
    > span {
      font-size: 23px;
      font-weight: 600;

      /* margin-left: 50px; */

      ::after {
        margin-left: 20px;
        content: " | ";
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
      margin: 0;
      display: grid;
      grid-template-columns: repeat(9, 1fr);
      border-top: 1px solid #bfb6b6;
      border-bottom: 1px solid #bfb6b6;
      background: #efeeee;
      list-style: none;

      li {
        padding: 10px;
        text-align: center;
        font-weight: bold;
        border-right: 1px solid #bfb6b6;

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
  }
  .page-bt {
    text-align: center;
    margin: 10px;
  }
`;
