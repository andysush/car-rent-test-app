import { Container } from 'pages/Styles.styled';
import {
  AnimatedIcon,
  Description,
  ImageContainer,
  Title,
} from './Home.styled';

const Home = () => {
  return (
    <Container>
      <Title>Welcome to Car Rental</Title>
      <Description>Discover the freedom of the open road.</Description>

      <ImageContainer>
        <img
          src="https://res.cloudinary.com/dybx333rw/image/upload/v1694971606/Open-Road.jpg"
          alt="Car on the open road"
        />
        <p>Explore New Horizons</p>
        <AnimatedIcon>🚗</AnimatedIcon>
      </ImageContainer>

      <ImageContainer>
        <img
          src="https://res.cloudinary.com/dybx333rw/image/upload/v1694971912/Happy-travelers_kvrxvn.jpg"
          alt="Happy travelers with their rental car"
        />
        <p>Unforgettable Adventures</p>
        <AnimatedIcon>🌍</AnimatedIcon>
      </ImageContainer>

      <ImageContainer>
        <img
          src="https://res.cloudinary.com/dybx333rw/image/upload/v1694973373/luxury-cars_rdamfw.jpg"
          alt="Luxury car in a scenic location"
        />
        <p>Luxury Awaits You</p>
        <AnimatedIcon>💎</AnimatedIcon>
      </ImageContainer>
    </Container>
  );
};

export default Home;
