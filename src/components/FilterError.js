import React from 'react';
import { Text, View } from 'react-native';


const FilterError = ({ value }) => (
  <View>
    <Text>
      {`Sua busca por ${value} não gerou resultados.`}
    </Text>
    <Text>
      Verifique se digitou corretamente ou tente palavras diferentes
    </Text>
  </View>
);


export default FilterError;
