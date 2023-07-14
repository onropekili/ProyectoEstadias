
const selectStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? '#FFF' : '#fff',
    height:'36px',
    border: '2px solid rgb(209 213 219);',
    borderRadius: '10px',
    boxShadow: 'none',
    '&:hover': {
      border: '2px solid #F18A00', // Cambiar el color del borde al hacer hover
    },
  }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#F18A00' : state.isFocused ? '#F18A00' : '',
      color: state.isSelected || state.isFocused ? '#fff' : '#000',
      padding: '10px',
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      padding: '9px',
      borderTopRightRadius: '10px',
      borderBottomRightRadius: '10px',
    }),
    
  };
  
  export default selectStyles;
  