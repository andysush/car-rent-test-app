import Select from 'react-select';
import makes from '../../data/makes.json';
import { Controller } from 'react-hook-form';

const carModels = makes.map(option => ({
  value: option,
  label: option,
}));

const hourlyRates = [];
for (let i = 0; i <= 200; i += 10) {
  hourlyRates.push({ value: i, label: `${i}` });
}

export const SearchForm = ({
  initialRent,
  initialMake,
  onSubmit,
  control,
  onModelChange,
  onRatesChange,
}) => {
  const defaultRent = {
    value: initialRent,
    label: initialRent,
  };
  const defaultMake = {
    value: initialMake,
    label: initialMake,
  };

  return (
    <form onSubmit={onSubmit}>
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
