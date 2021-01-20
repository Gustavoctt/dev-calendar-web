import React, { useState } from 'react';
import DayPicker from 'react-day-picker';
import { Link } from 'react-router-dom';
import { FiInfo } from 'react-icons/fi';

import 'react-day-picker/lib/style.css';
import { Container, Content, Aside, Calendar, ContainerRigth, Event } from './styles';

import Header from '../../components/Header';
import logo from '../../utils/images/Logo.svg';

const Dashboard: React.FC = () => {

  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <Container>
      <Header/>
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