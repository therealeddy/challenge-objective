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
  .avatar {
    display: block;
    width: 100px;
    height: 100px;
    border-radius: 200px;
    margin: 0 auto;
    margin-bottom: 20px;
    background-color: #999999;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    @media (min-width: 992px) {
      width: 200px;
      height: 200px;
    }
  }
  h1 {
    text-align: center;
    margin-bottom: 40px;
  }
  h2 {
    color: #111111;
    font-size: 20px !important;
    line-height: normal;
    margin-bottom: 10px;
  }
  p {
    color: #444444;
    font-size: 16px !important;
    line-height: 30px;
    margin: 0;
    @media (min-width: 992px) {
      font-size: 20px;
    }
  }
`;
