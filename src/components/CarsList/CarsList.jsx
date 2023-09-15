import { CarsListItem } from 'components/CarsListItem/CarsListItem';
import { GridContainer, LoadBtn } from './CarsList.styled';

export const CarsList = ({ carsList, onClick, isLoadMoreDisabled }) => {
  return (
    <>
      <GridContainer>
        {carsList.map(data => (
          <CarsListItem key={data.id} data={data} />
        ))}
      </GridContainer>
      <LoadBtn onClick={onClick} disabled={isLoadMoreDisabled}>
        Load more
      </LoadBtn>
    </>
  );
};
