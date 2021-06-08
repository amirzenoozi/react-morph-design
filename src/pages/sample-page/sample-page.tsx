import React  from 'react';
import { PageContainer } from './sample-page.style';
import Typography from 'src/components/core/typography';
import Grid from 'src/components/core/grid';
import GridItem from 'src/components/core/grid-item';

const SamplePage = () => {

  return (
    <PageContainer>
      <Typography component={'h1'} variant={'title1'}>تست سایز فونت است!</Typography>
      <Grid>
        <GridItem xs={24} sm={12} md={6} lg={4}>Sample</GridItem>
      </Grid>
    </PageContainer>
  );
};

export default SamplePage;
