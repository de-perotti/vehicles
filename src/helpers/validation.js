export default {
  string: (value = '') => {
    const error = [
      typeof value === 'string' || 'Campo deve ser do tipo texto',
      !!value.length || 'Campo não pode estar vazio',
    ].filter(e => e !== true).join('\n');

    return { value, error: error.length ? error : null };
  },
  int: (value) => {
    const error = [
      Number.isInteger(+value) || 'Campo deve ser um número inteiro',
      !Number.isNaN(+value) || 'Campo deve estar preenchido corretamente',
    ].filter(e => e !== true).join('\n');

    return { value: error.length ? value : +value, error: error.length ? error : null };
  },
};
