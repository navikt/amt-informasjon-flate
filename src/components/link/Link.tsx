import React from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';

interface LinkProps extends RouterLinkProps, React.HTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode;
}

function Link(props: LinkProps) {
  const { children, ...others } = props;
  return <RouterLink {...others}>{children}</RouterLink>;
}

export default Link;
