import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: auto;

    background: #D4E4FD;

`;

export const Header = styled.div`
    width: 100vw;
    height: 15vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    background: #Cad8ed;

    > img {
        width: 200px;
    }

    .link {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        > img {
            padding: 10px;
            width: 80px;
            border-radius: 50%;
        }
    }
`;

export const ContainerLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > Button {
      margin-top: 0px;
    }

    @media(min-width: 800px){
      display: flex;
      flex-direction: column;
      align-items: center;

      width: 700px;
    }
`;

export const Content = styled.div`
    @media(min-width: 800px){
      display: flex;
      flex-direction: row;
    }
`;

export const Calendar = styled.div`
  margin: 20px 10px;

    .DayPicker {
    border-radius: 10px;
  }
  .DayPicker-wrapper {
    padding-bottom: 0;
    background: #7c7c7c;
    border-radius: 10px;
  }
  .DayPicker,
  .DayPicker-Month {
    width: 100%;
  }
  .DayPicker-NavBar {
    color: #7C7C7C !important;
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
    background-color: #CAD8ED;
    border-radius: 0 0 10px 10px;
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
    background: #D4E4FD;
    border-radius: 10px;
    color: #323232;
    font-weight: 500;
  }
  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
  }
  .DayPicker-Day--today {
    font-weight: normal;
  }
  .DayPicker-Day--selected {
    background: #2B63FF !important;
    border-radius: 10px;
    color: #fff !important;
  }
`;

export const ContainerRigth = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    margin-left: 20px;

    > span {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-size: 36px;
    }

    > p {
      > span {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 16px;
        color: #2B63FF;
      }
    }
  }

  @media(min-width: 800px){
      display: flex;
      flex-direction: column;

      margin: 20px 0px;
    }

`;

export const Event = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 20px 20px;
    background: #CAD8ED;
    margin: 10px;
    border-radius: 10px;

    > strong {
      color: #323232;
    }

    > div {
      display: flex;
      justify-content: center;

      > span {
        color: #7c7c7c;
        margin-right: 5px;
      }
    }

    @media(min-width: 800px){
      width: 600px;
      max-width: 700px;
    }

`;
