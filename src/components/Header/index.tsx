import { HeaderContainer, HeaderContent } from './styles';

import logo from '../../assets/logo.svg';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="Smart Finances" />

        <button type="button">
          Nova transação
        </button>
      </HeaderContent>
    </HeaderContainer>
  );
}