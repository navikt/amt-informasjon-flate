import React from 'react';
import { DecoratorProps } from './decorator-props';
import decoratorConfig from './decorator-config';
import Navspa from '@navikt/navspa';

const InternflateDecorator = Navspa.importer<DecoratorProps>('internarbeidsflatefs');

const Decorator = () => {
  const dekoratorConfig = decoratorConfig();
  return <InternflateDecorator {...dekoratorConfig} />;
};

export default Decorator;
