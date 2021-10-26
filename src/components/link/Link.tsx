import React from 'react';
import cn from 'classnames';
import './Link.less';
import 'nav-frontend-lenker-style';
import Lenke from 'nav-frontend-lenker';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import { logEvent } from '../../utils/logEvent';

interface LinkProps extends RouterLinkProps {
  isInline?: boolean;
  isExternal?: boolean;
  children?: React.ReactNode;
  dataTestId?: string;
  logEventNavn?: string;
}

function Link({
  children,
  isExternal = false,
  isInline = false,
  to,
  className,
  logEventNavn,
  ...others
}: LinkProps) {
  return isExternal ? (
    <Lenke
      href={to.toString()}
      className={className}
      onClick={() => logEventNavn && logEvent.event(logEventNavn)}
      {...others}
    >
      {children}
    </Lenke>
  ) : (
    <RouterLink
      to={to}
      className={cn('link', { lenke: isInline }, className)}
      onClick={() => logEventNavn && logEvent.event(logEventNavn)}
      {...others}
    >
      {children}
    </RouterLink>
  );
}

export default Link;
