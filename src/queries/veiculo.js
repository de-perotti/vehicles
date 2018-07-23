import gql from 'graphql-tag';
import { firstCapital } from '../helpers/strings';

export const marcaList = [
  'FIAT',
  'CHEVROLET',
  'GM',
  'VOLKSWAGEN',
  'FORD',
  'RENAULT',
  'HYUNDAI',
  'TOYOTA',
  'HONDA',
  'NISSAN',
  'CITROEN',
  'MITSUBISHI',
  'PEUGEOT',
  'SUZUKI',
];


export const marcaValidation = (value = '') => {
  const error = [
    marcaList.some(marca => marca === value.toUpperCase())
    || `Marca deve ser uma das seguintes:${marcaList.map(marca => `\n -${firstCapital(marca)}`)}`,
  ].filter(e => e !== true).join('\n');
  return { value: error.length ? value : value.toUpperCase(), error: error.length ? error : null };
};

export const fields = [
  { name: 'marca', label: 'Marca', validation: marcaValidation },
  { name: 'modelo', label: 'Modelo', type: 'string' },
  { name: 'ano_fabricacao', label: 'Ano / Fabricação', type: 'int' },
  { name: 'ano_modelo', label: 'Ano / Modelo', type: 'int' },
  { name: 'cor', label: 'Cor', type: 'string' },
];

export default gql`
  query Veiculo ($id: ID!) {
    veiculo (id: $id) {
      _id
      marca
      modelo
      ano_fabricacao
      ano_modelo
      combustivel
      cor
      usado
    }
  }
`;
