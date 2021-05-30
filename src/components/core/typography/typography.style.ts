import styled from 'styled-components';
import { rem } from 'src/theme/functions';
import { theme } from 'src/theme/theme';
import { Typographies } from 'src/interfaces/typographies';

const TypographyRoot = styled.h1<{ variant: keyof Typographies }>`
  font-size: ${ props => rem( theme.typography[props.variant] )  };
`;

export { TypographyRoot };
