import thunkTemplate from '../helpers/thunks';
import { gqlArgumentParser } from '../helpers/graphql';


export const VEICULO = 'veiculo';


const buildBody = ({ _id }) => ({
  body: `
    query {
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
    }
  `,
});


export default thunkTemplate(VEICULO, buildBody);
