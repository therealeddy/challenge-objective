import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: block;
  background: #dedede;
  border-radius: 10px;
  box-shadow: 3px 3px 10px -3px #222222;
  margin: 50px auto 100px;
  padding: 20px;
  @media (min-width: 992px) {
    padding: 40px;
    width: 800px;
  }
  img {
    display: block;
    width: 100px;
    height: 100px;
    border-radius: 200px;
    margin: 0 auto;
    margin-bottom: 20px;
    object-fit: cover;
    @media (min-width: 992px) {
      width: 200px;
      height: 200px;
    }
  }
  h1 {
    text-align: center;
    margin-bottom: 40px;
  }
  p {
    color: #444444;
    font-size: 16px;
    line-height: 40px;
    margin: 0;
    @media (min-width: 992px) {
      font-size: 20px;
    }
  }
`;
