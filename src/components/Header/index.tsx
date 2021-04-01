import { HeaderContainer, HeaderContent } from './styles';

import logo from '../../assets/logo.svg';

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="Smart Finances" />

        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </HeaderContent>
    </HeaderContainer>
  );
}