import { createUseStyles } from 'react-jss';

const GridStyles = createUseStyles(() => (
  {
    '@global': {
      '.morphGrid': {
        display: 'flex',
        flexWrap: 'wrap',
        boxSizing: 'border-box',
        width: '100%',
      },
    }
  })
)

export { GridStyles };
