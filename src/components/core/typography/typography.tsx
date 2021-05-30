import React from 'react';
import { TypographyProps } from './typography.props';
import { TypographyRoot } from './typography.style';

const Typography: React.FC<TypographyProps> = ({
  component = 'p',
  variant= 'body1',
  children
}) => {
  return (
    <TypographyRoot as={component} variant={variant}>
      { children }
    </TypographyRoot>
  );
};

export default Typography;
