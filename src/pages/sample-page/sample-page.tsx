import React  from 'react';
import { PageContainer } from './sample-page.style';
import Typography from 'src/components/core/typography';

const SamplePage = () => {

  return (
    <PageContainer>
      <Typography component={'p'}>Hello World!</Typography>
    </PageContainer>
  );
};

export default SamplePage;
