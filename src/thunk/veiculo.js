import thunkTemplate from '../helpers/thunks';
import { gqlArgumentParser } from '../helpers/graphql';


export const VEICULO = 'veiculo';


const buildBody = ({ _id }) => `{
  veiculo (${gqlArgumentParser({ _id })}){
    _id
    marca
    modelo
    ano_fabricacao
    ano_modelo
    combustivel
    cor
    usado
  }
}`;


const options = {
  name: VEICULO,
  builder: buildBody,
};


export default thunkTemplate(options);
