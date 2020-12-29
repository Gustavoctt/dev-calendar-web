import React from 'react';
import { Link } from 'react-router-dom';

import {FiLock, FiMail} from 'react-icons/fi';

import Input from '../../components/Input';
import Button from '../../components/Button';


import logo from '../../utils/images/Logo.svg';
import calendar from '../../utils/images/Calendar.svg';

import { Container, ContainerLeft, ContainerRight } from './styles';

const SigIn: React.FC = () => {
  return (
      <Container>
          <ContainerLeft>
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>

            <div className="calendar">
                <img src={calendar} alt="calendar"/>
            </div>
          </ContainerLeft>

          <ContainerRight>
              <div className="title">
                  <h1>SignIn</h1>
              </div>

              <form>
                <Input icon={FiMail} type="text" name="E-mail"  />
                <Input icon={FiLock} type="text" name="Senha"  />
                  

                  <Button name="Enter"></Button>
              </form>

            <div>
              <Link to="/forgot" className="password">forgot my password</Link>

              <Link to="/signup" className="account">Create Account</Link>
            </div>
          </ContainerRight>
      </Container>
  );
}

export default SigIn;