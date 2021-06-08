import { chooseFontWeight, rem } from 'src/theme/functions';
import { Typographies } from 'src/interfaces/typographies';
import { createUseStyles } from 'react-jss';
import { ITheme } from 'src/interfaces/ITheme';

const TypographyStyles = createUseStyles((theme: ITheme) => ({
  MorphUI_Typography: {
    fontSize: (props: { variant?: keyof Typographies }) => rem(theme.typography[props.variant]),
    fontFamily: (props: { variant?: keyof Typographies, weight?: string }) => chooseFontWeight( props.weight ),
  }
}))

export { TypographyStyles };
