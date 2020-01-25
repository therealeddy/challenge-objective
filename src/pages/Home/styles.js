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
  form {
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
  }

  .table {
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
  }

  .area-pagination {
    flex: 1;
    padding-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pagination {
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
      button.paged {
        width: 25px;
        height: 25px;
        border: 2px solid #d42026;
        background: #ffffff;
        color: #d42026;
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
      }
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
      svg {
        transform: rotate(180deg);
      }
    }
  }
`;
