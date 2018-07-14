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
}) => ({
  body: `
    mutation {
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
    }
  `,
});


export default thunkTemplate(CREATE_VEICULO, buildBody);
