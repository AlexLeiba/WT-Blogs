import React from 'react';
import { Container, Row } from '@/components/UI/Grid';
import CreateNewArticle from '@/components/CreateNewArticle';

function NewArticle() {
  return (
    <Container variant={'fluid'} className='dark:bg-black min-h-[100vh] '>
      <Row>
        <CreateNewArticle />
      </Row>
    </Container>
  );
}

export default NewArticle;
