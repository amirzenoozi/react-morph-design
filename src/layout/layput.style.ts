import styled from "styled-components";

const Wrapper = styled.section`
  width: 100%;
  min-height: 100vh;

  display: flex;

  & main {
    left: 250px;
    position: relative;
    width: calc(100% - 250px);

    padding: 16px;
  }
`;

export { Wrapper };
