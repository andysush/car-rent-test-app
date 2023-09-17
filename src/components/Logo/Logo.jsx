import logo from '../../images/logo.png';
import { LogoImg, LogoLink, Text } from './Logo.styled';

export const Logo = () => {
  return (
    <>
      <LogoLink to="/">
        <LogoImg src={logo} alt="Car logo" />
        <Text>DRIVE BEST</Text>
      </LogoLink>
    </>
  );
};
