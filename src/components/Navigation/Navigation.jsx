import { Li, Link, List } from './Navigtion.styled';

export const Navigation = () => {
  return (
    <div>
      <List>
        <Li>
          <Link to="/">Main</Link>
        </Li>
        <Li>
          <Link to="/catalog">Cars</Link>
        </Li>
        <Li>
          <Link to="/favorites">Favorites</Link>
        </Li>
      </List>
    </div>
  );
};
