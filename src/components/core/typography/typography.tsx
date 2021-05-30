import React from 'react';
import { TypographyProps } from './typography.props';
import { TypographyRoot } from './typography.style';

const Typography: React.FC<TypographyProps> = ({
  component = 'p',
  variant= 'body1',
  weight = 'regular',
  children
}) => {
  return (
    <TypographyRoot as={component} variant={variant} weight={weight}>
      { children }
    </TypographyRoot>
  );
};

export default Typography;
