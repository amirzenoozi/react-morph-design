import React from 'react';
import { useTheme } from 'react-jss';
import { GridItemStyles } from './grid-item.style';
import { GridItemProps } from './grid-item.props';
import classNames from 'classnames';

const GridItem = ( props: GridItemProps) => {
  GridItemStyles();
  const theme: any = useTheme();
  const classList = classNames({
    [`morphCol-xs-${theme['gridType']}`]: true,
    [`morphCol-sm-${props.sm}`]: ( props.sm !== undefined ),
    [`morphCol-md-${props.md}`]: ( props.md !== undefined ),
    [`morphCol-lg-${props.lg}`]: ( props.lg !== undefined ),
  });

  return (
    <div className={classList}>{ props.children }</div>
  );
};

export default GridItem;
