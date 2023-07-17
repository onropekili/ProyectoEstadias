
const selectStylesForm = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#F9FAFB' : 'rgba(124, 133, 140, 0.1)',
      borderRadius: '8px',
      border: state.isFocused ? '2px solid #F18A00' : '2px solid rgb(209, 213, 219)',
      boxShadow: 'none',
      minHeight: '100% !important',
      '&:hover': {
        border: !state.isFocused ? '2px solid #9CA3AF' : '2px solid #F18A00',// Cambiar el color del borde al hacer hover
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
        padding:'4px 8px',
        borderTopRightRadius: '8px',
        borderBottomRightRadius: '8px',
      }),
    };
    
    export default selectStylesForm;
    