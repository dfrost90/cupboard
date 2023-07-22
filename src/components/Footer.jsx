import styled from 'styled-components';

const Footer = () => {
  return <Wrapper>project list © {new Date().getFullYear()} by dfr0st</Wrapper>;
};

const Wrapper = styled.footer`
  background-color: var(--clr-footer-background);
  height: 90px;
  padding: 18px 24px;
  text-align: center;
`;

export default Footer;
