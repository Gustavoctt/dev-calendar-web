import React, {  } from 'react';

import { ButtonAll } from './styles';

interface ButtonProps{
    name: string;
}

const Button: React.FC<ButtonProps> = ({name}) => {
  return (
      <ButtonAll>
          <span>{ name }</span>
      </ButtonAll>
  );
}

export default Button;