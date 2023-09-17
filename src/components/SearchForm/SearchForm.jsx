import makes from '../../data/makes.json';
import { Controller } from 'react-hook-form';
import {
  Form,
  Input,
  Label,
  MileageContainer,
  Selector,
  SubmitButton,
  selectStyles,
} from './SearchForm.styled';

const carModels = makes.map(option => ({
  value: option,
  label: option,
}));

const hourlyRates = [];
for (let i = 0; i <= 300; i += 10) {
  hourlyRates.push({ value: i, label: `To ${i} $` });
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
    <Form onSubmit={onSubmit}>
      <Label>
        Car brand:
        <Controller
          name="make"
          control={control}
          render={({ field }) => (
            <Selector
              options={carModels}
              styles={selectStyles}
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
      </Label>
      <Label>
        Price/ 1 hour:
        <Controller
          name="rentalPrice"
          control={control}
          render={({ field }) => (
            <Selector
              options={hourlyRates}
              styles={selectStyles}
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
      </Label>
      <Label>
        Сar mileage / km:
        <MileageContainer>
          <span>From </span>
          <Controller
            name="from"
            control={control}
            defaultValue=""
            render={({ field }) => <Input type="number" {...field} />}
          />
          <span>To </span>
          <Controller
            name="to"
            control={control}
            defaultValue=""
            render={({ field }) => <Input type="number" {...field} />}
          />
        </MileageContainer>
      </Label>
      <SubmitButton type="submit">Submit</SubmitButton>
    </Form>
  );
};
