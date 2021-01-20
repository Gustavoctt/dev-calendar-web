import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    background: #D4E4FD;
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 36px auto;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media(min-width: 800px) {
      display: flex;
      flex-direction: row;
    }
`;

export const Aside = styled.div``;

export const Calendar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    margin-left: 60px;

    .DayPicker {
        border-radius: 10px;
    }

    .DayPicker-wrapper{
        padding-bottom: 0;
        background: #7c7c7c;
        border-radius: 10px;
    }

    .DayPicker,
    .DayPicker-Month {
        width: 100%;
    }

    .DayPicker-NavBar {
    color: #fff !important;
    }

    .DayPicker-NavButton--prev {
    right: auto;
    left: 1.5em;
    margin-right: 0;
  }
  .DayPicker-Weekday {
    color: #7C7C7C;
    font-weight: 500;
  }
  .DayPicker-Month {
    border-collapse: separate;
    border-spacing: 8px;
    margin: 16px 0 0 0;
    padding: 16px;
    border-radius: 0 0 10px 10px;
    background: #CAD8ED;
  }
  .DayPicker-Caption {
    margin-bottom: 1em;
    padding: 0 1em;
    color: #fff;
    > div {
      text-align: center;
    }
  }
  .DayPicker-Day {
    width: 40px;
    height: 40px;
  }
  .DayPicker-Day--available:not(.DayPicker-Day--outside) {
    background: #fff;
    border-radius: 10px;
    color: #7C7C7C;
    font-weight: 500;
  }
  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
  }
  .DayPicker-Day--today {
    font-weight: normal;
  }
  /* .DayPicker-Day--disabled {
    color: #666360 !important;
    background: transparent !important;
  } */
  .DayPicker-Day--selected {
    background: #2B63FF !important;
    border-radius: 10px;
    color: #fff !important;
  }
`;

export const ContainerRigth = styled.div`
    max-width: 600px;
    width: 100%;

    > div {
      > span {
        font-size: 30px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color: #323232;
      }

      > p {
        > span {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #2B63FF;
          font-size: 18px;
        }
      }
    }
`;

export const Event = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    background: #CAD8ED;
    padding: 20px 30px;
    border-radius: 8px;
    margin-top: 15px;

    > strong {
      color: #323232;;
    }

    > div {
      display: flex;
      align-items: center;

      > span {
        color: #7c7c7c;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        margin-right: 10px;
      }
    }
`;