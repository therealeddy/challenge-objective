import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
  padding-top: 12px;
  margin-bottom: 12px;
  @media (min-width: 992px) {
    margin-bottom: 34px;
    padding: 0 42px;
    padding-top: 20px;
  }
  .text {
    color: #d42026;
    opacity: 100%;
    font-weight: 300;
    text-transform: uppercase;
    font-size: 16px;
    line-height: 19px;
    @media (min-width: 992px) {
      font-size: 27px;
      line-height: 32px;
    }
    &.name {
      display: none;
      @media (min-width: 992px) {
        display: block;
      }
    }
    strong {
      font-weight: 800;
      position: relative;
      &::before {
        content: '';
        position: absolute;
        left: 0;
        bottom: -2px;
        width: 50px;
        height: 4px;
        background: #d42026;
        display: block;
      }
    }
  }
`;
