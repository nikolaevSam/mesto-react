import headerLogo from '../images/header__logo.svg';

export default function Header() {
  return (
    <header className="header">
      <img
        src={headerLogo}
        alt="логотип Mesto Russia"
        className="header__logo" />
    </header>
  );
}