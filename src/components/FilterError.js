import React from 'react';
import PropTypes from 'prop-types';
import ErrorItem from './ErrorItem';


const FilterError = ({ value }) => (
  <ErrorItem
    header={`Sua busca por ${value} não gerou resultados.`}
    body="Verifique se digitou corretamente, tente palavras diferentes ou arraste para tentar novamente"
  />
);


FilterError.propTypes = {
  value: PropTypes.string.isRequired,
};


export default FilterError;
