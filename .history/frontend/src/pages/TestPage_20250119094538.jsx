import React from 'react';
import { Button, useToast } from '@chakra-ui/react';

function TestPage() {
  const toast = useToast();

  return (
    <Button onClick={() => toast({ title: 'Toast works!' })}>
      Show Toast
    </Button>
  );
}

export default TestPage;
