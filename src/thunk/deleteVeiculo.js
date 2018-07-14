import thunkTemplate from '../helpers/thunks';


export const DELETE_VEICULO = 'deleteVeiculo';


const buildBody = ({ _id }) => `{
  deleteVeiculo (id: "${_id}")
}`;


const options = {
  name: DELETE_VEICULO,
  builder: buildBody,
};


export default thunkTemplate(options);
