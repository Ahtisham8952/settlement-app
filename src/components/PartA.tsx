import React, { useState } from 'react';
import { Box, Button, Input, Text, VStack } from '@chakra-ui/react';

interface Response {
  status: string;
  amount: string;
}

interface PartyAProps {
  currentAmount: string;
  onSubmitAmount: (amount: string) => void;
  onFetchResponse: () => void;
  response: Response;
}

const PartyA: React.FC<PartyAProps> = ({ currentAmount, onSubmitAmount, onFetchResponse, response }) => {
  const [amount, setAmount] = useState('');
  const [isFetching, setIsFetching] = useState(false);

  const handleSubmit = () => {
    onSubmitAmount(amount);
    setAmount('');
  };

  const handleFetchResponse = () => {
    setIsFetching(true);
    onFetchResponse();
    setIsFetching(false);
  };

  return (
    <Box p={4}>
      <Text>Current Amount: {currentAmount}</Text>
      <VStack spacing={4}>
        <Input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter settlement amount"
        />
        <Button onClick={handleSubmit} colorScheme="teal">Submit Amount</Button>
        <Button onClick={handleFetchResponse} colorScheme="blue" isLoading={isFetching}>
          Fetch Response
        </Button>
      </VStack>
      <Box mt={4}>
        <Text>Party B's Response: {response.status}</Text>
        {response.status === 'dispute' && (
          <Text>Disputed Amount: {response.amount}</Text>
        )}
      </Box>
    </Box>
  );
};

export default PartyA;
