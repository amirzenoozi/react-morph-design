import { chooseFontWeight, rem } from 'src/theme/functions';
import { Typographies } from 'src/interfaces/typographies';
import { createUseStyles } from 'react-jss';
import { MorphTheme } from 'src/interfaces/morph-theme';

const TypographyStyles = createUseStyles((theme: MorphTheme) => ({
  MorphUI_Typography: {
    fontSize: (props: { variant?: keyof Typographies }) => rem(theme.typography[props.variant]),
    fontFamily: (props: { variant?: keyof Typographies, weight?: string }) => chooseFontWeight( props.weight ),
  }
}))

export { TypographyStyles };
