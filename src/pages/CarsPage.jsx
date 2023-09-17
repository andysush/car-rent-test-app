import { getCars } from 'api/getCars';
import { CarsList } from 'components/CarsList/CarsList';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';

const CarsPage = () => {
  const { control, handleSubmit, getValues } = useForm({
    defaultValues: {
      make: '',
      rentalPrice: '',
      from: '',
      to: '',
    },
  });
  const [searchParams, setSearchParams] = useSearchParams();
  const [carsList, setCarsList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [carsPerPage] = useState(8);

  const make = searchParams.get('make') || '';
  const rentalPrice = searchParams.get('rentalPrice') || '';
  const limit = carsPerPage;
  const page = currentPage;
  const from = searchParams.get('from') || '';
  const to = searchParams.get('to') || '';

  useEffect(() => {
    const query = {
      make,
      rentalPrice,
      limit,
      page,
      from,
      to,
    };

    if (page === 1) {
      getCars(query).then(data => {
        setCarsList(data);
      });
    } else {
      getCars(query).then(data => {
        setCarsList(carList => [...carList, ...data]);
      });
    }
  }, [from, limit, make, page, rentalPrice, to, searchParams]);

  const onSubmit = async () => {
    setSearchParams({
      make,
      rentalPrice,
      limit,
      page,
      from: getValues('from') || '',
      to: getValues('to') || '',
    });
  };

  const onModelChange = () => {
    setSearchParams({
      make: getValues('make.value'),
      rentalPrice,
      limit,
      page,
    });
  };

  const onRatesChange = () => {
    setSearchParams({
      make,
      rentalPrice: getValues('rentalPrice.value'),
      limit,
      page,
    });
  };

  const onClick = () => {
    const nextPage = currentPage + 1;

    setSearchParams({
      make,
      rentalPrice,
      limit,
      page: nextPage,
    });
    setCurrentPage(nextPage);
  };

  return (
    <section>
      <SearchForm
        onSubmit={handleSubmit(onSubmit)}
        control={control}
        initialMake={searchParams.get('make')}
        initialRent={searchParams.get('rentalPrice')}
        onModelChange={onModelChange}
        onRatesChange={onRatesChange}
      />
      <CarsList
        carsList={carsList}
        onClick={onClick}
        isLoadMoreDisabled={carsList.length < carsPerPage * page}
      />
    </section>
  );
};

export default CarsPage;
