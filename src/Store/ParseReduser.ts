import { useSelector } from 'react-redux';
import User from 'Helpers/User';
import Image from 'Helpers/Image';
import { RootState } from 'Store';

const ParseReduser = (state: RootState) => {
  const serializedData = state; // предположим, что данные класса хранятся в поле 'data' объекта 'myClass' в хранилище
  // const deserializedData = JSON.parse(serializedData.authorization); // десериализуем данные из строки JSON
  const image = new Image()
  // const user = new User(deserializedData); // создаем экземпляр класса с десериализованными данными

  const parseReduser = {
    
  }

  return parseReduser;
};

