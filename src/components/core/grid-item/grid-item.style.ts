import { createUseStyles } from 'react-jss';
import { MorphTheme } from 'src/interfaces/morph-theme';

const colGenerator = ( gridSize: number , breakPoint: 'xs' | 'sm' | 'md' | 'lg' | 'xlg' | 'xxlg') => {
  const GridColStyle: any = {};
  for ( let i = 1; i <= gridSize; i++ ) {
    GridColStyle[`.morphCol-${breakPoint}-${i}`] = {
      width: `${( i / gridSize) * 100}%`,
    };
  }
  return GridColStyle;
}

const GridItemStyles = createUseStyles((theme: MorphTheme) => (
  {
    '@global': {
      '.test': { backgroundColor: 'red', },
      ...colGenerator( theme.gridType, 'xs'),
      [`@media (min-width: ${theme.breakPoints.xs})`]: { ...colGenerator( theme.gridType, 'sm') },
      [`@media (min-width: ${theme.breakPoints.sm})`]: { ...colGenerator( theme.gridType, 'md') },
      [`@media (min-width: ${theme.breakPoints.md})`]: { ...colGenerator( theme.gridType, 'lg') },
      [`@media (min-width: ${theme.breakPoints.lg})`]: { ...colGenerator( theme.gridType, 'xlg') },
      [`@media (min-width: ${theme.breakPoints.xlg})`]: { ...colGenerator( theme.gridType, 'xxlg') },
    }
  })
)

export { GridItemStyles };
