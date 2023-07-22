import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import styled from 'styled-components';

function App() {
  return (
    <Wrapper>
      <Header />
      <Content />
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default App;
