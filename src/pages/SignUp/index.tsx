import React from 'react';
import { Link } from 'react-router-dom';

import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';

import { Container, ContainerLeft, ContainerRight } from './styles';

import logo from '../../utils/images/Logo.svg';
import calendar from '../../utils/images/Calendar.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';


const SignUp: React.FC = () => {
  return (
        <Container>

            <ContainerLeft>
                <div className="title">
                    <h1>Sign Up</h1>
                </div>

                <form>
                    <Input icon={FiUser} type="text" name="Name"  />
                    <Input icon={FiMail} type="mail" name="E-mail"  />
                    <Input icon={FiLock} type="password" name="Senha"  />
                    
                    <Button name="Create Account"></Button>
                </form>

            <div>
                <Link to="/" className="back">
                    <span>
                        <FiArrowLeft/>
                    </span>
                    Back to login
                </Link>
            </div>
            </ContainerLeft>
           
            <ContainerRight>
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>

            <div className="calendar">
                <img src={calendar} alt="calendar"/>
            </div>
            </ContainerRight>
        </Container>
  );
}

export default SignUp;