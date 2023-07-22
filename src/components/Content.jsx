import styled from 'styled-components';
import Grid from './Grid';

const Content = () => {
  return (
    <Wrapper>
      <Grid />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  align-items: center;
  background: var(--clr-palette-7);
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  padding: 40px;
`;

export default Content;
