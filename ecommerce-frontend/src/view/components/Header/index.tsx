import { HeaderContainer, Navbar } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <Navbar>
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </Navbar>
    </HeaderContainer>
  );
}
