import styled from 'styled-components'
import { theme } from '../theme/globalStyle'

export const StyledLabel = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const StyledHelper = styled.h4`
  color: ${theme.palette.text.gray};
`

export const StyledInput = styled.input`
  width: 100%;
  height: 48px;
  padding: 0px 16px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
  background-color: ${theme.palette.black.minus4};
  color: ${theme.palette.text.white};
  border: none;
  outline: none;

  &::placeholder {
    color: ${theme.palette.text.grayPlusOne};
  }

  &:hover,
  &:focus {
  }
`

export const SubmitWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`

export const SubmitButton = styled.button`
  background-color: ${theme.palette.primary.zero};
  color: ${theme.palette.text.white};
  border-radius: 12px;
  padding: 12px 32px;
  outline: none;
  border: none;

  &:hover,
  &:focus {
    cursor: pointer;
    background-color: ${theme.palette.primary.plus1};
  }
`
