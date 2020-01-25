import styled from 'styled-components';

export const Form = styled.form`
  display: block;
  width: 100%;
  padding: 0 20px;
  margin-bottom: 12px;
  @media (min-width: 992px) {
    padding: 0;
    margin-bottom: 34px;
    width: 400px;
  }
  label {
    display: block;
    width: fit-content;
    color: #d42026;
    font-size: 14px;
    line-height: 19px;
    margin-bottom: 5px;
    @media (min-width: 992px) {
      font-size: 16px;
    }
  }
  input {
    display: block;
    width: 100%;
    height: 31px;
    border: 1px solid #a5a5a5;
    border-radius: 4px;
    padding: 0 10px;
  }
`;
