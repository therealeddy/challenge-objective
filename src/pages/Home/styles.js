import styled from 'styled-components';

export const Container = styled.div`
  padding: 0;
  box-shadow: inset 0 -15px 0px 0 #d42026;
  flex: 1;
  flex-direction: column;
  display: flex;
  @media (min-width: 992px) {
    padding: 0 42px;
  }

  .area-pagination {
    flex: 1;
    padding-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
