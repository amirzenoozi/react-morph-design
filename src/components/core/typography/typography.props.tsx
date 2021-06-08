export interface TypographyProps {
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span',
  variant?: 'head1' | 'head2' | 'title1' | 'title2' | 'body1' | 'body2' | 'cap1' | 'cap2',
  weight?: 'thin' | 'light' | 'regular' | 'medium' | 'bold',
  children?: any,
  classNames?: string,
}
