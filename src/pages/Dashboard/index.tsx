import React, { useState } from 'react';
import DayPicker from 'react-day-picker';
import { Link } from 'react-router-dom';

import 'react-day-picker/lib/style.css';
import { Container, Header, Content, Aside, Calendar } from './styles';

import logo from '../../utils/images/Logo.svg';

const Dashboard: React.FC = () => {

  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <Container>
        <Header>
          <img src={logo} alt="Dev Calendar"/>

          <Link to="/profile" className="link">
            <strong>Gustavo Tartare</strong>
            <img src="https://avatars1.githubusercontent.com/u/44401595?s=460&u=71939b487a5d2b5f5f630944697ef38610193449&v=4" alt="avatar"/>
          </Link>
        </Header>

        <Content>
          <Aside>
            <Calendar>
              <DayPicker
                modifiers = {{
                  available: {
                    daysOfWeek: [0, 1, 2, 3, 4, 5, 6]
                  }
                }}
                selectedDays = {selectedDate}
                onDayClick = { () => {}}
              />
            </Calendar>
          </Aside>
        </Content>
    </Container>
    );
}

export default Dashboard;