import thunkTemplate from '../helpers/thunks';
import { gqlArgumentParser } from '../helpers/graphql';


export const UPDATE_VEICULO = 'updateVeiculo';


const buildBody = ({
  marca,
  modelo,
  ano_fabricacao,
  ano_modelo,
  combustivel,
  cor,
  usado,
  _id,
}) => `{
  updateVeiculo (
    data: {
      ${
  gqlArgumentParser(({ combustivel, marca }), '\n', false)}
      ${
  gqlArgumentParser(({
    modelo,
    ano_fabricacao,
    ano_modelo,
    cor,
    usado,
  }), '\n')}
    }
    id: "${_id}"
  )
}`;

const options = {
  name: UPDATE_VEICULO,
  builder: buildBody,
};

export default thunkTemplate(options);
