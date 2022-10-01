import React, { useState } from 'react'
import styled from 'styled-components'
import { theme } from '../../theme/globalStyle'
import { ArrowDown } from './ArrowDown'

export const SelectDropdown = () => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(0)

  const optionsList = ['Arequipa', 'El Salvador', 'RAVN']

  const toggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen)
  }

  return (
    <SelectWrapper>
      <SelectButton
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOptionsOpen}
        onClick={toggleOptions}
      >
        <h4>{optionsList[selectedOption]}</h4>
        <ArrowDown />
      </SelectButton>
      <SelectItemsWrapper
        isOptionsOpen={isOptionsOpen}
        className={`options ${isOptionsOpen ? 'show' : ''}`}
        role="listbox"
        aria-activedescendant={optionsList[selectedOption]}
        tabIndex={-1}
      >
        {optionsList.map((option, index) => (
          <Selectitem
            key={`${index}-${option}`}
            id={option}
            role="option"
            aria-selected={selectedOption == index}
            tabIndex={0}
            onClick={() => {
              setSelectedOption(index)
              setIsOptionsOpen(false)
            }}
          >
            <h3>{option}</h3>
          </Selectitem>
        ))}
      </SelectItemsWrapper>
    </SelectWrapper>
  )
}

const SelectWrapper = styled.div`
  width: 100%;
  position: relative;
`

const SelectButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: none;
  background-color: transparent;
  color: ${theme.palette.text.white};
  font-weight: 700;
`

interface SelecItemsProps {
  isOptionsOpen: boolean
}
const SelectItemsWrapper = styled.ul<SelecItemsProps>`
  z-index: 20;
  position: absolute;
  top: 20px;
  left: 0;
  display: ${(props) => (props.isOptionsOpen ? 'flex' : 'none')};
  flex-direction: column;
  gap: 1px;
  background-color: ${theme.palette.text.grayPlusOne};
  list-style-type: none;
  border-radius: 16px;
  overflow: hidden;
`

const Selectitem = styled.li`
  width: 260px;
  padding: 16px 24px;
  font-weight: 700;
  background-color: ${theme.palette.black.minus3};

  &:hover {
    background-color: ${theme.palette.black.minus4};
  }
`
