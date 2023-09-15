import { CarsList } from 'components/CarsList/CarsList';
import { SearchForm } from 'components/SearchForm/SearchForm';

const Cars = () => {
  return (
    <section>
      <SearchForm />
      <CarsList />
    </section>
  );
};

export default Cars;
