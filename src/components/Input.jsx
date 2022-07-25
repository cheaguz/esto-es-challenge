import { styled } from '@mui/material'
import { StyledLabel, StyledDivError } from './styled/StyledIndex';

const StyledInput = styled('input')({
    width: '99.3%',
    height: '30px',
    borderRadius: '4px',
    border: '1px solid #d9d9d9',
});


export const Input = ({handleChange, value , label , errors, name}) => {
  return (
    <div>
        <StyledLabel>{label}</StyledLabel>
        <StyledInput type="text" name={name} value={value} onChange={handleChange} />
        <StyledDivError >{errors && <span>{errors}</span>} </StyledDivError>
    </div>
  )
}
