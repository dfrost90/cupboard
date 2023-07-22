import { nanoid } from 'nanoid';
import projects from '../data.json';
import GridItem from './GridItem';
import styled from 'styled-components';

const Grid = () => {
  return (
    <Wrapper>
      {projects.map((item) => {
        return <GridItem key={nanoid()} item={item} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: var(--flex-gap);
  max-width: 1280px;
`;

export default Grid;
