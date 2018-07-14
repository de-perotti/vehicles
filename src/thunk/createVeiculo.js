import thunkTemplate from '../helpers/thunks';
import { gqlArgumentParser } from '../helpers/graphql';


export const CREATE_VEICULO = 'createVeiculo';


const buildBody = ({
  marca,
  modelo,
  ano_fabricacao,
  ano_modelo,
  combustivel,
  cor,
  usado,
}) => `{
  createVeiculo (data: {
    ${gqlArgumentParser(({ combustivel, marca }), '\n', false)}
    ${gqlArgumentParser(({
    modelo,
    ano_fabricacao,
    ano_modelo,
    cor,
    usado,
  }), '\n')}
  })
}`;


const options = {
  name: CREATE_VEICULO,
  builder: buildBody,
};


export default thunkTemplate(options);
