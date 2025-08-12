
export const btnStyles = {
  height: '52px',
  fontWeight: 500,
  fontSize: '16px',
  fontFamily: "Montserrat, sans-serif",
  backgroundColor: "#A4795B",
  color: "#fff",
  borderRadius: "20px",
  padding: ' 6px 24px',
  border: 'none',
  "&:hover": {
    backgroundColor: "#B88A6E"
  }
};
export const inputStyles = {
  '& .MuiOutlinedInput-root': {
    borderRadius: '16px',
    backgroundColor: '#fff',
    fontFamily: 'Work Sans',
    height: '52px',
    color: '#000',
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#3E3027',
      borderWidth: '1px',
    },
    '&:hover:not(.Mui-error):not(.Mui-focused) .MuiOutlinedInput-notchedOutline': {
      borderColor: '#B88A6E',
      borderWidth: '1px',
    },
    '&:hover:not(.Mui-error):not(.Mui-focused)': {
      color: '#B88A6E',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#A4795B',
      borderWidth: '1px',
    },
    '&.Mui-focused': {
      color: '#A4795B',
    },
    '&.Mui-error .MuiOutlinedInput-notchedOutline': {
      borderColor: '#FF2F2F',
      borderWidth: '1px',
    },
    '&.Mui-error:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#A63A3A',
      borderWidth: '2px',
    },
    '&.Mui-error.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#A63A3A',
      borderWidth: '2px',
    },
    '&.Mui-error': {
      color: '#FF2F2F',
    },
    '&.Mui-error:hover': {
      color: '#A63A3A',
    },
    '&.Mui-error.Mui-focused': {
      color: '#A63A3A',
    },
    '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
      borderColor: '#999999',
      backgroundColor: '#f5f5f5',
      borderWidth: '1px',
    },
    '&.Mui-disabled': {
      color: '#999999',
    },
    '&.Mui-disabled:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#999999',
    },
    '&.Mui-disabled.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#999999',
    },
  },
};


export const helperTextRed = {
  color: '#FF2F2F',
  fontSize: '14px',
  fontWeight: 400,
}