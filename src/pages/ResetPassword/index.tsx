import React from 'react';
import { FiLock } from 'react-icons/fi';

import { Container } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

import Logo from '../../utils/images/Logo.svg';

const ResetPassword: React.FC = () => {
  return (
    <Container>
        <img src={Logo} alt="logo"/>

        <form>
            <Input icon={FiLock} placeholder="Password" />
            <Input icon={FiLock} placeholder="Reset Password" />

            <Button name="Enter"></Button>

        </form>
    </Container>
  );
}

export default ResetPassword;