import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    background: #D4E4FD;
`;

export const Header = styled.div`
    width: 100vw;
    height: 15vh;

    background: #CAD8ED;

    display: flex;
    flex-direction: row;
    justify-content: space-around;

    > img {
        width: 30vw;
    }

    .link {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        > strong {
            color: #323232;
            margin-right: 10px;
            text-decoration: none;
        }

        > img {
            width: 8vw;
            border-radius: 50%;
        }
    }

    @media(min-width: 800px) {
        height: 25vh;

        > img {
            width: 20vw;
        }

        .link {
            > img{
                margin-left: 20px;
            }
        }
    }
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 36px auto;

    display: flex;
    justify-content: space-between;
`;

export const Aside = styled.div``;

export const Calendar = styled.div`
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