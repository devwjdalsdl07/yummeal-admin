import styled from "@emotion/styled";

export const AdminWrapper = styled.div`
  max-width: 1200px;
  height: 100vh;
  margin: 0 auto;
  margin-bottom: 70px;
  font-size: 16px;
  .titleArea {
    padding: 20px 0;
    display: flex;
    justify-content: space-evenly;
  }
  .uploadContainer {
    display: flex;
    gap: 15px;
  }
  .img {
    position: relative;
  }
  .upload {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100px;
    height: 100px;
    background: white;
    border-radius: 10px;
    border: 1px solid;
    cursor: pointer;
    input {
      position: relative;
      display: none;
    }
    img {
      width: 100%;
      height: 100%;
    }
    button {
      position: absolute;
      transform: translate(-50%, -50%);
      white-space: nowrap;
      left: 50%;
      top: 50%;
    }
  }
  .textWrap {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    .nameText {
      height: 30px;
      width: 100%;
      font-size: 20px;
      margin-bottom: 20px;
      border-radius: 5px;
    }
    .priceText {
      height: 30px;
      width: 30%;
      font-size: 20px;
      text-align: right;
      border-radius: 5px;
      margin-right: 10px;
    }
    .quantText {
      height: 30px;
      width: 20%;
      font-size: 20px;
      text-align: right;
      border-radius: 5px;
      margin-right: 10px;
    }
    span {
      font-size: 20px;
      margin-right: 20px;
    }
  }
  .textContainer {
    display: flex;
    flex-direction: column;
    max-width: 380px;
    .cateWrap {
      margin-top: 10px;
    }
    .allegyWrap {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      margin-top: 20px;
      span {
        display: inline-block;
        width: 100%;
      }
      .allegyCheck {
        width: 80px;
        margin-right: 10px;
      }
    }
  }
  .editorWrapper {
    border-top: 1px solid;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
    }
    .editor {
      margin: 20px auto;
    }
    .ql-snow {
      background: white;
    }
    .buttonWrap {
      display: flex;
      justify-content: center;
      margin-top: 50px;
      gap: 30px;
      button {
        width: 100px;
        height: 40px;
        font-size: 20px;
        border-radius: 10px;
      }
      .okButton {
        background-color: #3971ff;
        border: none;
      }
    }
  }
  .modalWrap {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    .modalBody {
      position: absolute;
      width: 300px;
      height: 200px;
      padding: 40px;
      text-align: center;
      background: rgb(255, 255, 255);
      border-radius: 25px;
      span {
        font-size: 20px;
      }
      .modalButton {
        display: flex;
        justify-content: space-around;
        margin-top: 30px;
        font-size: 15px;
        .goButton {
          padding: 5px 10px;
          background: rgb(200, 200, 200);
          color: white;
          cursor: pointer;
        }
        .delButton {
          padding: 5px 10px;
          background: rgb(200, 200, 200);
          color: red;
          cursor: pointer;
        }
      }
      .modalInfo {
        margin-top: 10px;
        span {
          color: red;
          font-size: 15px;
        }
      }
    }
  }
`;
