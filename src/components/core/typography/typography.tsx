import React from 'react';
import { TypographyProps } from './typography.props';
import { TypographyStyles } from './typography.style';
import { useTheme } from 'react-jss';
import classNames from 'classnames';

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
  const ClassList = classNames({[classes.MorphUI_Typography]: true, [props.classNames]: props.classNames !== undefined});

  return (
    <ComponentTag className={ClassList}>{ props.children }</ComponentTag>
  );
};

export default Typography;
