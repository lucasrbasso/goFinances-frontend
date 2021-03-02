import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

function selected(pathname: string): string {
  if (window.location.pathname === pathname) {
    return 'selected';
  }
  return '';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        <Link className={selected('/')} to="/">
          Listagem
        </Link>
        <Link className={selected('/import')} to="/import">
          Importar
        </Link>
      </nav>
    </header>
  </Container>
);

export default Header;
