import PropTypes from 'prop-types';
import styled from 'styled-components';

const GridItem = ({ item }) => {
  const { title, image, link } = item;
  return (
    <Wrapper>
      <img src={image} alt={title} />
      <div>
        <h3>{title}</h3>
        <a href={link} target="_blank" rel="noreferrer">
          visit
        </a>
      </div>
    </Wrapper>
  );
};

GridItem.propTypes = {
  item: PropTypes.object,
};

const Wrapper = styled.article`
  background-color: var(--clr-article-background);
  border-radius: var(--border-radius);
  overflow: hidden;
  padding: 15px;
  position: relative;
  transform-origin: center center;
  transition: var(--transition-all);
  width: 330px;

  &:before {
    background-color: #ffffffc7;
    content: '';
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transition: var(--transition-all);
  }

  &:hover {
    box-shadow: var(--box-shadow);
  }

  img {
    height: 225px;
    width: 100%;
    object-fit: cover;
  }

  h3 {
    color: var(--clr-text-muted);
    text-transform: uppercase;
  }

  a {
    background-color: var(--clr-btn);
    border-radius: var(--border-radius);
    color: var(--clr-palette-white);
    position: absolute;
    top: 50%;
    left: 50%;
    opacity: 0;
    visibility: hidden;
    padding: 8px 16px;
    text-transform: uppercase;
    transform: translate(-50%, -50%);
    transition: var(--transition-all);

    &:hover {
      background-color: var(--clr-btn-hover);
    }
  }

  &:hover a,
  &:hover::before {
    opacity: 1;
    visibility: visible;
  }
`;

export default GridItem;
