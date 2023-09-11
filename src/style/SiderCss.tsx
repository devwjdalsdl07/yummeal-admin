import styled from "@emotion/styled";
export const SiderCss = styled.div`
  min-height: 100vh;
  width: 250px;
  background: #2a2a3d;
  color: white;
  padding: 20px;
  flex-shrink: 0;
  font-size: 15px;
  .menu {
    list-style: none;
    > li {
      display: flex;
      flex-direction: column;
      cursor: pointer;
      padding: 10px 0;
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
      padding: 5px 20px;
      &:hover {
        background-color: #414253;
      }
    }
    a {
      color: #fff;
    }
  }
`;
export const LayoutCss = styled.div`
  width: 100%;
  position: relative;
`;
export const HeaderCss = styled.div`
  height: 70px;
  width: 100%;
  background-color: #fefefe;
  text-align: end;
  padding-top: 10px;
  padding-right: 40px;
  i {
    font-size: 30px;
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
