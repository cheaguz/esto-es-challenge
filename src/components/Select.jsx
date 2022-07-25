import { styled } from '@mui/material/styles';
import { StyledLabel, StyledDivError } from './styled/StyledIndex';


const StyledSelect = styled('select')({
    width: '100%',
    height: '40px',
    borderRadius: '4px',
    border: '1px solid #d9d9d9',
});


export const Select = ({ label, value, handleChange, options, errors, placeHolder, name }) => {
    return (
        <div>
            <StyledLabel>{label}</StyledLabel>
            <StyledSelect name={name} value={value} onChange={handleChange}>
                <option value=''>{placeHolder}</option>
                {options.map((opt, i) => (
                    <option key={i} value={opt}>{opt}</option>
                ))}
            </StyledSelect>
            <StyledDivError > {errors && <span>{errors}</span>} </StyledDivError>
        </div>
    )
}
