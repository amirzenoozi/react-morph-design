import React  from 'react';
import { PageContainer } from './sample-page.style';
import Typography from 'src/components/core/typography';

const SamplePage = () => {

  return (
    <PageContainer>
      <Typography component={'h1'} variant={'head1'}>Hello World!</Typography>
    </PageContainer>
  );
};

export default SamplePage;
