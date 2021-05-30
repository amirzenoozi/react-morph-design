import styled from 'styled-components';
import { chooseFontWeight, rem } from 'src/theme/functions';
import { theme } from 'src/theme/theme';
import { Typographies } from 'src/interfaces/typographies';

const TypographyRoot = styled.h1<{ variant: keyof Typographies, weight: string }>`
  font-size: ${ props => rem( theme.typography[props.variant] )  };
  font-family: ${ props => chooseFontWeight( props.weight ) };
`;

export { TypographyRoot };
