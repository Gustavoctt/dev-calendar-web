import React, { InputHTMLAttributes } from 'react';

import { InputBlock } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
    icon: React.ComponentType;
}

const Input: React.FC<InputProps> = ({name, icon:Icon, ...rest}) => {
  return (
        <InputBlock>
            {Icon && <Icon size={20} color="#7C7C7C"/>}
            <input 
                placeholder={ name } 
                {...rest}
            />
        </InputBlock>
    );
}

export default Input;