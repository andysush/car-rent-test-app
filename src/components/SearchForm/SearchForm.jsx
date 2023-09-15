import React, { useState } from 'react';
import Select from 'react-select';
import { useSearchParams } from 'react-router-dom';
import makes from '../../data/makes.json';
import { useEffect } from 'react';
import { getCars } from 'api/getCars';
import { useForm, Controller } from 'react-hook-form';

const carModels = makes.map(option => ({
  value: option,
  label: option,
}));

const hourlyRates = [];
for (let i = 0; i <= 200; i += 10) {
  hourlyRates.push({ value: i, label: `${i}` });
}

export const SearchForm = () => {
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
  const initialRent = searchParams.get('rentalPrice');
  const initialMake = searchParams.get('make');
  const defaultRent = {
    value: initialRent,
    label: initialRent,
  };
  const defaultMake = {
    value: initialMake,
    label: initialMake,
  };

  useEffect(() => {
    const query = {
      make,
      rentalPrice,
      limit,
      page,
      from,
      to,
    };

    getCars(query).then(data => setCarsList(data));
  }, [from, limit, make, page, rentalPrice, to, searchParams]);

  console.log(carsList);

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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Car brand:
        <Controller
          name="make"
          control={control}
          render={({ field }) => (
            <Select
              options={carModels}
              {...field}
              value={initialMake && initialMake.length > 0 ? defaultMake : ''}
              onChange={selectedOption => {
                field.onChange(selectedOption);
                onModelChange(selectedOption.value);
              }}
              placeholder="Enter the text"
            />
          )}
        />
      </label>
      <label>
        Price/ 1 hour:
        <Controller
          name="rentalPrice"
          control={control}
          render={({ field }) => (
            <Select
              options={hourlyRates}
              {...field}
              value={initialRent && initialRent.length > 0 ? defaultRent : ''}
              onChange={selectedOption => {
                field.onChange(selectedOption);
                onRatesChange(selectedOption.value);
              }}
              placeholder="To $"
            />
          )}
        />
      </label>
      <label>
        Сar mileage / km:
        <div>
          <span>From </span>
          <Controller
            name="from"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                type="number"
                {...field}
                style={{
                  border: 'none',
                  borderBottom: '1px solid #ccc',
                  outline: 'none',
                }}
              />
            )}
          />
          <span>To </span>
          <Controller
            name="to"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                type="number"
                {...field}
                style={{
                  border: 'none',
                  borderBottom: '1px solid #ccc',
                  outline: 'none',
                }}
              />
            )}
          />
        </div>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
