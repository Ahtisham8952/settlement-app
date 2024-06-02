import React, { useEffect, useState } from 'react';
import { Box, Button, Text, VStack } from '@chakra-ui/react';

interface Response {
  status: string;
  amount: string;
}

interface PartyBProps {
  currentAmount: string;
  onRespond: (response: Response) => void;
}

const PartyB: React.FC<PartyBProps> = ({ currentAmount, onRespond }) => {
  const [response, setResponse] = useState<Response>({ status: '', amount: '' });

  const handleAgree = () => {
    onRespond({ status: 'agree', amount: currentAmount });
  };

  const handleDispute = () => {
    const disputedAmount = prompt("Enter the disputed amount", currentAmount);
    if (disputedAmount) {
      onRespond({ status: 'dispute', amount: disputedAmount });
    }
  };

  useEffect(() => {
    setResponse({ status: '', amount: '' });
  }, [currentAmount]);

  return (
    <Box p={4}>
      <Text>Amount Submitted by Party A: {currentAmount}</Text>
      <VStack spacing={4}>
        <Button onClick={handleAgree} colorScheme="green">Agree</Button>
        <Button onClick={handleDispute} colorScheme="red">Dispute</Button>
      </VStack>
      <Box mt={4}>
        <Text>Current Response: {response.status}</Text>
        {response.status === 'dispute' && (
          <Text>Disputed Amount: {response.amount}</Text>
        )}
      </Box>
    </Box>
  );
};

export default PartyB;
