import thunkTemplate from '../helpers/thunks';


export const DELETE_VEICULO = 'deleteVeiculo';


const buildBody = ({ _id }) => ({
  body: `
    mutation {
      deleteVeiculo (id: "${_id}")
    }
  `,
});


export default thunkTemplate(DELETE_VEICULO, buildBody);
