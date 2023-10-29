import styled, { css } from 'styled-components';
import { InputProps } from './Input';

const getOptionStyling = (option: Required<InputProps>['option']) => {
  const styles = {
    default: css`
      background-color: white;
    `,
    grey: css`
      /* border: none; */
      background-color: ${({ theme }) => theme.color.grey5};
    `,
  };
  return styles[option];
};

const getInputSizeStyling = (inputSize: Required<InputProps>['inputSize']) => {
  const styles = {
    medium: css`
      font-size: ${({ theme }) => theme.fontSize.body1};
    `,
    small: css`
      height: 56px;
      font-size: ${({ theme }) => theme.fontSize.body3};
      border-radius: 17px;
    `,
  };

  return styles[inputSize];
};

const Input = styled.input<InputProps>`
  width: 100%;
  height: 64px;
  padding-left: 28px;
  border-radius: 50px;
  display: flex;
  outline: none;
  flex-direction: row;
  justify-content: center;
  ${({ option = 'default' }) => getOptionStyling(option)};
  ${({ inputSize = 'medium' }) => getInputSizeStyling(inputSize)};

  &:placeholder {
    color: ${({ theme }) => theme.color.grey2};
  }

  &:focus {
    outline: none;
    border: 0.1rem solid ${({ theme }) => theme.color.blue3};
  }

  &:focus::placeholder {
    color: transparent;
  }
`;

export { Input };
