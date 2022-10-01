import React from 'react'
import styled from 'styled-components'
import {
  StyledHelper,
  StyledInput,
  StyledLabel,
  SubmitButton,
  SubmitWrapper,
} from '../../common/styled'
import { theme } from '../../theme/globalStyle'

export const CreateEvent = () => {
  return (
    <FormWrapper>
      <Title>Create Event</Title>
      <StyledLabel>
        <StyledHelper>Event Title</StyledHelper>
        <StyledInput placeholder="Chicken Party"></StyledInput>
      </StyledLabel>
      <StyledLabel>
        <StyledHelper>Location</StyledHelper>
        <Select defaultValue="">
          <option value="">Arequipa</option>
        </Select>
      </StyledLabel>
      <StyledLabel>
        <StyledHelper>Date</StyledHelper>
        <StyledInput type="date" />
      </StyledLabel>
      <SubmitWrapper>
        <SubmitButton>Create</SubmitButton>
        <CancelButton>Cancel</CancelButton>
      </SubmitWrapper>
    </FormWrapper>
  )
}
const Select = styled.select`
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
`

const Title = styled.h1`
  color: ${theme.palette.text.white};
`

const FormWrapper = styled.form`
  padding-top: 214px;
  width: 512px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: auto;
  /* align-items: center; */
`
const CancelButton = styled(SubmitButton)`
  background-color: inherit;
  color: ${theme.palette.primary.zero};
  border-color: ${theme.palette.primary.zero};
`
