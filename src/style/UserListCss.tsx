import { styled } from "styled-components";

export const UserListWrap = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  font-size: 15px;
  padding: 20px;

  .ant-checkbox .ant-checkbox-inner {
    width: 20px;
    height: 20px;
  }

  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #65ad65;
    border-color: #65ad65;
  }
  .ant-checkbox .ant-checkbox-inner:after {
    inset-inline-start: 25.5%;
  }
  /* .ant-checkbox-indeterminate .ant-checkbox-inner:after {
    background-color: #65ad65;
  } */

  .ant-checkbox-wrapper:not(.ant-checkbox-wrapper-disabled):hover
    .ant-checkbox-inner {
    border-color: #65ad65;
  }
  /* .ant-checkbox-wrapper:not(.ant-checkbox-wrapper-disabled):hover
    .ant-checkbox-checked:not(.ant-checkbox-disabled)
    .ant-checkbox-inner {
    background-color: ;
    border-color: ;
  } */

  .prod-info-menu {
    width: 1150px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 100px 100px 150px 250px 150px 100px 150px 150px;
    text-align: center;
    background: #e3eaf2;
    border: 1px solid #aaa;
    & > li {
      line-height: 25px;
      padding: 10px 0;
      border-right: 1px solid #aaa;
      &:last-of-type {
        border: none;
      }
    }
  }
  .prod-info-content {
    display: grid;
    width: 1150px;
    margin: 0 auto;
    border-left: 1px solid #aaa;
    border-bottom: 1px solid #aaa;
    .content-grid {
      & > ul {
        display: flex;
        margin: 0 auto;
        &:hover {
          background: #e3eaf2;
        }
        & > li {
          line-height: 25px;
          padding: 10px 0;
          text-align: center;
          border-right: 1px solid #aaa;
        }
        & > li:nth-of-type(1) {
          width: 100px;
        }
        & > li:nth-of-type(2) {
          width: 100px;
        }
        & > li:nth-of-type(3) {
          width: 150px;
        }
        & > li:nth-of-type(4) {
          width: 250px;
        }
        & > li:nth-of-type(5) {
          width: 150px;
        }
        & > li:nth-of-type(6) {
          width: 100px;
        }
        & > li:nth-of-type(7) {
          width: 150px;
        }
        & > li:nth-of-type(8) {
          width: 149px;
        }
      }
    }
  }
`;
