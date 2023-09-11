import styled from "@emotion/styled";
export const LoginCss = styled.div`
  flex-grow: 1;
  min-width: auto;
  height: 100%;
  padding: 20px 30px;
  text-align: center;
  .contents-wrap {
    background-color: #f2f3f9;

    .content-info {
      margin: 125px auto;
      border-radius: 5px;
      width: 600px;
      padding: 40px;
      background-color: #fefefe;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
      h2 {
        font-size: 30px;
        font-weight: 600;
        margin-bottom: 10px;
        color: #2b5183;
      }
      .content-input {
        padding: 25px;
        p {
          display: block;
          margin: 30px auto;
          width: 350px;
          line-height: 40px;
          padding: 10px;
          border: 1px solid #61a1f3;

          input {
            width: 250px;
            height: 30px;
            text-align: center;
            border: none;
          }
        }
      }
      button {
        width: 350px;
        height: 50px;
        background: #61a1f3;
        border-radius: 10px;
        border: 1px solid #61a1f3;
        color: #fff;
        font-size: 15px;
        font-weight: 600;
      }
    }
  }
`;
