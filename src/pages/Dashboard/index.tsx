import React, { useState } from 'react';
import DayPicker from 'react-day-picker';
import { Link } from 'react-router-dom';
import { FiInfo } from 'react-icons/fi';

import 'react-day-picker/lib/style.css';
import { Container, Header, ContainerLeft, Content, Calendar, ContainerRigth, Event } from './styles';

import Button from '../../components/Button';
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
          <ContainerLeft>
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

            <Button
              name="Add new Event"
            />
          </ContainerLeft>

          <ContainerRigth>
            <div>
              <span>Next Events</span>

              <p>
                <span>Dia | Dia da semana</span>
              </p>
            </div>

            <Event>
              <strong>Reunião</strong>

              <div>
                <span> Das 8:00 às 10:00</span>
                <FiInfo size={20} color="#7c7c7c"/>
              </div>
            </Event>

            <Event>
              <strong>Mentoria</strong>

              <div>
                <span> Das 17:00 às 20:00</span>
                <FiInfo size={20} color="#7c7c7c"/>
              </div>
            </Event>
          </ContainerRigth>
          </Content>
    </Container>
    );
}

export default Dashboard;