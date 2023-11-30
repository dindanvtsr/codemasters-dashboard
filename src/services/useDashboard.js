import { services } from '.';

export default () => {
  const statisticsList = async () => {
    try {
      const response = await services.get('statistics');
      console.log('res use', response);
      return response;
    } catch (e) {
      console.log('err', e);
      throw e;
    }
  };

  return {
    statisticsList,
  };
};
