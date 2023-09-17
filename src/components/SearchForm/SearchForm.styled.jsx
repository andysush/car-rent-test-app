import styled from '@emotion/styled';
import Select from 'react-select';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: 0 auto;
  padding: 20px;
  margin-bottom: 50px;
`;

export const Label = styled.label`
  display: block;
  color: #8a8a89;
  margin-right: 18px;
  font-size: 14px;
`;

export const Selector = styled(Select)`
  border-color: #f7f7fb;
  min-width: 199px;
`;

export const selectStyles = {
  control: baseStyles => ({
    ...baseStyles,
    padding: '5px',
    fontSize: `16px`,
    lineHeight: 'calc(18 / 14)',
    borderRadius: '14px',
    borderColor: 'transparent',
    minWidth: '199px',
    backgroundColor: '#f7f7fb',
    outline: 0,
    cursor: 'text',
  }),
  menu: baseStyles => ({
    ...baseStyles,
    width: '100%',
  }),
};
export const MileageContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f7f7fb;
  padding: 15px;
  border-radius: 14px;
`;

export const Input = styled.input`
  border: none;
  background-color: #f7f7fb;
  outline: none;
  margin-left: 5px;
`;

export const SubmitButton = styled.button`
  display: flex;
  width: 185px;
  height: 48px;
  padding: 18px 50px;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 12px;
  background: #3470ff;
  border-color: transparent;
  margin-top: auto;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    background: #0b44cd;
  }
`;
