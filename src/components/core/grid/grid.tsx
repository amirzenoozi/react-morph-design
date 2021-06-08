import React from 'react';
import { useTheme } from 'react-jss';
import classNames from 'classnames';
import { GridStyles } from './grid.style';
import { GridProps } from './grid.props';

const Grid = (props: GridProps) => {
  const theme: any = useTheme();
  GridStyles( { ...props, theme });
  const ClassList = classNames({['morphGrid']: true });

  return (
    <div className={ClassList}>{ props.children }</div>
  );
};

export default Grid;
