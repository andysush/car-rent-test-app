import axios from 'axios';

axios.defaults.baseURL = 'https://648889e60e2469c038fdf3cd.mockapi.io/catalog';

export const getCars = async query => {
  const { data } = await axios.get('/', {
    params: query,
  });

  let filterData = data;

  if (query.rentalPrice !== '') {
    filterData = filterData.filter(
      car => parseInt(car.rentalPrice) === parseInt(query.rentalPrice)
    );
  }

  if (query.from !== '' && query.to !== '') {
    filterData = filterData.filter(
      car =>
        car.mileage >= parseInt(query.from) && car.mileage <= parseInt(query.to)
    );
  } else if (query.from !== '') {
    filterData = filterData.filter(car => car.mileage >= parseInt(query.from));
  } else if (query.to !== '') {
    filterData = filterData.filter(car => car.mileage <= parseInt(query.to));
  }

  return filterData;
};
