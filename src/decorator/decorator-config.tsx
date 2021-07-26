import { DecoratorProps } from './decorator-props';

const decoratorConfig = (): DecoratorProps => {
  return {
    appname: 'Arbeidstiltak',
    toggles: {
      visVeileder: true,
    },
  };
};

export default decoratorConfig;
