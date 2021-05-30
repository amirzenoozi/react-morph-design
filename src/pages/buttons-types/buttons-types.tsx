import React, { useEffect } from 'react';
import { PageContainer } from './buttons-types.style';

const ButtonsTypes: React.FC = () => {
  const search = window.location.search;
  const params = new URLSearchParams(search);

  return (
    <PageContainer>
      <span>
        404
      </span>
    </PageContainer>
  );
};

export default ButtonsTypes;
