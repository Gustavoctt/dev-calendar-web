import React, { InputHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

import { Headers } from './styles';

import logo from '../../utils/images/Logo.svg';

interface HeaderProps extends InputHTMLAttributes<HTMLInputElement>{
  name?: string;
  icon?: React.ComponentType;
}


const Header: React.FC<HeaderProps> = ({name, icon:Icon, ...rest}) => {
  return (
    <Headers>
      
      <Link className="goBack" to="/dashboard">
        {Icon && <Icon size={20} color="#7C7C7C"/>}
        <span>{name}</span>
      </Link>

      <img src={logo} alt="Dev Calendar"/>

      <Link to="/profile" className="link">
        <strong>Gustavo Tartare</strong>
        <img src="https://avatars1.githubusercontent.com/u/44401595?s=460&u=71939b487a5d2b5f5f630944697ef38610193449&v=4" alt="avatar"/>
      </Link>
    </Headers>
  );
}

export default Header;