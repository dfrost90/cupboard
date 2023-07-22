import styled from 'styled-components';

const Header = () => {
  return (
    <Wrapper>
      <h2>Project List</h2>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--clr-header-background);
  box-shadow: var(--box-shadow);
  display: flex;
  height: 76px;
  justify-content: center;
  padding: 18px 24px;
  position: relative;
  place-items: center;
  text-transform: uppercase;
`;

export default Header;
