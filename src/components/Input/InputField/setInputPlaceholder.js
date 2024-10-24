const setInputPlaceholder = (type) => {
  let placeholder = '';

  switch (type) {
    case 'day':
      placeholder = 'DD'
      break;
    case 'month':
      placeholder = 'MM'
      break;
    case 'year':
      placeholder = 'YYYY'
      break;
    default:
      throw new Error(`Invalid type "${type}" passed as an Input component type.`);
  }

  return placeholder;
}

export default setInputPlaceholder;
