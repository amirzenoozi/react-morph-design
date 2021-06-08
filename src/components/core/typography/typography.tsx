import React from 'react';
import { TypographyProps } from './typography.props';
import { TypographyStyles } from './typography.style';
import { useTheme } from 'react-jss';

const Typography = (props: TypographyProps) => {
  props = {
    ...props,
    ...(props.weight === undefined ) && { weight: 'regular' },
    ...(props.variant === undefined ) && { variant: 'body1' },
    ...(props.component === undefined ) && { component: 'p' },
  }
  const theme: any = useTheme();
  const classes = TypographyStyles( { ...props, theme });
  const ComponentTag = `${props.component}` as keyof JSX.IntrinsicElements;

  return (
    <ComponentTag className={classes.MorphUI_Typography}>{ props.children }</ComponentTag>
  );
};

export default Typography;
