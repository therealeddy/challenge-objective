import styled from 'styled-components';

export const Container = styled.div`
  margin: 16px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media (min-width: 992px) {
    width: fit-content;
    justify-content: flex-start;
  }
  .pages {
    display: flex;
    justify-content: center;
  }

  button.next,
  button.prev {
    padding: 0;
    border: 0px solid;
    background: transparent;
    width: fit-content;
    height: fit-content;
  }

  button.prev {
    opacity: ${props => (props.prevDesable ? 0.5 : 1)};
    pointer-events: ${props => (props.prevDesable ? 'none' : 'all')};
    svg {
      transform: rotate(180deg);
    }
  }

  button.next {
    opacity: ${props => (props.nextDesable ? 0.5 : 1)};
    pointer-events: ${props => (props.nextDesable ? 'none' : 'all')};
  }
`;

export const ButtonPage = styled.button`
  width: 25px;
  height: 25px;
  border: 2px solid #d42026;
  background: ${props => (props.active ? '#d42026' : '#ffffff')};
  color: ${props => (props.active ? '#ffffff' : '#d42026')};
  font-size: 14px;
  line-height: 24px;
  border-radius: 100px;
  margin-right: 15px;
  @media (min-width: 992px) {
    font-size: 21px;
    margin-right: 20px;
    width: 32px;
    height: 32px;
  }
  &:last-child {
    margin: 0;
  }
`;
