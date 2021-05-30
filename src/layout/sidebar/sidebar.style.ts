import styled from 'styled-components';

const MainMenu = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  > figure {
    overflow: hidden;
    border-radius: 50%;
    width: 90px;
    height: 90px;

    > img {
      width: 100%;
      height: 100%;
    }
  }
`;

const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: #F3F3F3;
  position: absolute;
  width: 250px;
  height: 100%;
  left: 0;
  top: 0;
`

export { SidebarWrapper, UserInfo, MainMenu };
