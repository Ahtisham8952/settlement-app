import React, { useState } from 'react';
import { ChakraProvider, Grid, GridItem, Heading } from '@chakra-ui/react';
import PartyA from './components/PartA';
import PartyB from './components/PartyB';

const App: React.FC = () => {
  const [currentAmount, setCurrentAmount] = useState('');
  const [response, setResponse] = useState({ status: '', amount: '' });

  const handleSubmitAmount = (amount: string) => {
    setCurrentAmount(amount);
    setResponse({ status: '', amount: '' });
  };

  const handleFetchResponse = () => {
    // Simulate fetching response from Party B
    setResponse((prevResponse) => prevResponse);
  };

  const handleRespond = (response: { status: string, amount: string }) => {
    setResponse(response);
  };

  return (
    <ChakraProvider>
      <Grid templateColumns="repeat(2, 1fr)" gap={6} p={6}>
        <GridItem>
          <Heading mb={4}>Party A</Heading>
          <PartyA
            currentAmount={currentAmount}
            onSubmitAmount={handleSubmitAmount}
            onFetchResponse={handleFetchResponse}
            response={response}
          />
        </GridItem>
        <GridItem>
          <Heading mb={4}>Party B</Heading>
          <PartyB
            currentAmount={currentAmount}
            onRespond={handleRespond}
          />
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
};

export default App;
