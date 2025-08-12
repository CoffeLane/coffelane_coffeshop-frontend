import {styled} from "@mui/material/styles";
import {TextField} from "@mui/material";


export const StyledTextField = styled(TextField) `
    width: 100%;
    height: 44px;
    font-size: 16px;

    .MuiOutlinedInput-root {
        border-radius: 8px;

        fieldset {
            border-color: #E0E0E0;
        }

        &:hover fieldset {
            border-color: #BDBDBD;
        }

        &.Mui-focused fieldset {
            border-color: #8B4513;
        }

        &.Mui-error fieldset {
            border-color: #D32F2F;
        }
    }


    .MuiInputBase-adornedStart {
        padding: 0;
    }

    .MuiInputBase-multiline.MuiAutocomplete-inputRoot {
        height: 100%;
        padding: 0;
    }
    

    .MuiInputAdornment-root {
        svg {
            path {
                fill: #3E3027;
            }
        }
    }

    .MuiFormHelperText-root {
        margin: 3px 0 0;
    }

    input {
        height: 44px;
        line-height: 44px;
        font-size: 16px;
        padding: 0 8px;
        -webkit-appearance: none;

        &::placeholder {
            color: #b0b0b0;
            opacity: 1;
        }
    }

    .MuiInputBase-root.Mui-disabled {
        .MuiAutocomplete-endAdornment {
            opacity: 0.6;
        }
    }
//Input label position
    label {
        top: -5px;
        font-size: 16px;

        &[data-shrink='true'] {
            top: 1px;
        }
    }

    .MuiInputLabel-outlined {
        color: #3E3027;
    }

    .MuiInputLabel-shrink {
        color: #3E3027 !important;
    }

    label.Mui-focused {
        color: #3E3027 !important;
    }
//label white background
    .MuiOutlinedInput-notchedOutline {
        legend {
            font-size: 0.75em;
        }
    }

    .MuiFormHelperText-root.Mui-error {
        margin: -2px auto 0;
    }

    .MuiAutocomplete-endAdornment {
        display: flex;
        top: 0;
        height: 100%;
        align-items: center;
        transform: none;

        .MuiButtonBase-root {
            padding: 2px;

            svg {
                height: 18px;
                width: 18px;
            }
        }
    }

`
