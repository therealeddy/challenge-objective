import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  width: 100%;
  .thead {
    display: flex;
    width: 100%;
    span {
      background: #d42026;
      padding: 10px 20px;
      color: #ffffff;
      font-size: 16px;
      line-height: 19px;
      width: 100%;
      @media (min-width: 992px) {
        width: 25%;
      }
      &:last-child {
        width: 75%;
        margin-left: 10px;
        display: none;
        @media (min-width: 992px) {
          display: block;
        }
      }
    }
  }
  .tbody {
    display: block;
    width: 100%;
    .row {
      display: flex;
      width: 100%;
      border-bottom: 2px solid rgba(212, 32, 38, 0.5);
      span {
        display: flex;
        align-items: center;
        padding: 20px;
        width: 100%;
        @media (min-width: 992px) {
          width: 25%;
        }
        img {
          width: 58px;
          height: 58px;
          border-radius: 100px;
          object-fit: cover;
          margin-right: 25px;
        }
        p,
        a {
          color: #4e4e4e;
          font-size: 21px;
          line-height: 24px;
        }
        &:last-child {
          width: 75%;
          margin-left: 10px;
          display: none;
          @media (min-width: 992px) {
            display: block;
          }
        }
      }
    }
  }
`;
