import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import {
  StyledHelper,
  StyledInput,
  StyledLabel,
  SubmitButton,
  SubmitWrapper,
} from '../../common/styled'
import { theme } from '../../theme/globalStyle'
const channels = ['Arequipa', 'Perú', 'Lima', 'El Salvador']
export const CreateEvent = () => {
  const [eventName, setEventName] = useState('')
  const [channel, setChannel] = useState('')
  const [eventDate, setEventDate] = useState('')
  const navigate = useNavigate()

  async function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log(eventName, channel, eventDate)
    try {
      const response = await axios.post(
        `https://fda5-190-237-34-153.ngrok.io/createEvent`,
        {
          eventName: eventName,
          eventDate: eventDate,
          eventPlanner: 'b1b7d495-80df-4bfe-95ea-07f89e584adb',
          channel: channel,
        }
      )
      console.log('response', response)
      if (response.data) navigate('/')
    } catch (error) {
      const err = error as Error
      console.error(err.message)
      alert(err.message)
    }
  }
  return (
    <FormWrapper onSubmit={submitHandler}>
      <Title>Create Event</Title>
      <StyledLabel>
        <StyledHelper>Event Title</StyledHelper>
        <StyledInput
          placeholder="Chicken Party"
          onChange={(e) => setEventName(e.target.value)}
          required
        ></StyledInput>
      </StyledLabel>
      <StyledLabel>
        <StyledHelper>Channel</StyledHelper>
        <Select
          defaultValue=""
          onBlur={(e) => setChannel(e.target.value)}
          required
        >
          <option value="">Pick a Channel</option>
          {channels.map((channel, index) => (
            <option key={index + ' ' + channel} value={channel}>
              {channel}
            </option>
          ))}
        </Select>
      </StyledLabel>
      <StyledLabel>
        <StyledHelper>Date</StyledHelper>
        <StyledInput
          type="date"
          onChange={(e) => setEventDate(e.target.value)}
          required
        />
      </StyledLabel>
      <ButtonWrapper>
        <CancelButton type="reset">Cancel</CancelButton>
        <SubmitButton type="submit">Create Event</SubmitButton>
      </ButtonWrapper>
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
const ButtonWrapper = styled(SubmitWrapper)`
  justify-content: flex-end;
  gap: 16px;
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
  border: 1px solid ${theme.palette.primary.zero};

  &:hover,
  &:focus {
    background-color: inherit;

    cursor: pointer;
    border: 1px solid ${theme.palette.primary.plus1};
  }
`
