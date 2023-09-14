import styled from "@emotion/styled";
export const SiderCss = styled.div`
  min-height: 100vh;
  width: 250px;
  background: #222;
  color: white;
  padding: 20px;
  flex-shrink: 0;
  font-size: 15px;

  .menu {
    list-style: none;
    padding: 0;

    > li {
      display: flex;
      flex-direction: column;
      cursor: pointer;
      padding: 20px 0;
      .menu-wrap {
        display: flex;
        gap: 15px;
      }
      .icon {
        margin-right: 10px;
        width: 15px;
      }

      .name {
        flex-grow: 1;
        & > div {
          display: flex;
          gap: 30px;
        }
      }
    }
    a {
      display: block;
      color: #fff;
    }
  }

  .sub-menu {
    padding-left: 20px;
    padding-top: 10px;
    > li {
      list-style-type: none;
      /* padding: 5px 20px; */
      line-height: 35px;
      &:hover {
        width: 130px;
        background-color: #444;
        transition: all 0.5s;
      }
    }
    a {
      display: block;
      width: 100%;
      color: #fff;
    }
  }
  .sub-menu .active {
    width: 130px;
    text-align: center;
    background: #444;
  }
`;
export const LayoutCss = styled.div`
  width: 100%;
  position: relative;
`;
export const HeaderCss = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  height: 70px;
  width: 100%;
  background-color: #fefefe;
  padding-top: 10px;
  padding-right: 40px;
  .title{
    padding-left: 30px;
    h2{
      text-align: center;
    }
  }
  & > i {
    font-size: 30px;
    cursor: pointer;
  }
  .userinfo-wrap {
    position: absolute;
    top: 80px;
    right: 10px;
    width: 250px;
    font-size: 20px;
    font-weight: 700;
    background: white;
    border-radius: 6px;
    padding: 30px;
    z-index: 10;
    box-shadow:
      rgba(0, 0, 0, 0.16) 0px 3px 6px,
      rgba(0, 0, 0, 0.23) 0px 3px 6px;
      .bt-close{
        text-align: end;
        cursor: pointer;
        :hover {
          color:rgba(255, 0, 0, 0.5);
        }
      }
    .home,
    .shoppingmall > a {
      display: flex;
      gap: 40px;
      padding-bottom: 30px;
      cursor: pointer;
    }
    .logout {
      padding: 10px 15px;
      border: 1px solid #aaa;
      border-radius: 5px;
      cursor: pointer;
      font-weight: 600;
      background: #fefefe;
      &:hover {
        border: 1px solid #c3cbf3;
        background: #222;
        color: #fefefe;
      }
    }
  }
`;
export const FooterCss = styled.div`
  position: absolute;
  bottom: 0;
  height: 50px;
  width: 100%;
  background-color: #fefefe;
  padding-top: 17px;
  div {
    text-align: center;
  }
`;