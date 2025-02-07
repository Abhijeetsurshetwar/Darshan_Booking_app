import React from 'react';
import { Container, Card } from 'react-bootstrap';

const Transaction = () => {
  return (
    <Container className="py-4">
      <h1 className="fs-2 fw-bold mb-4">Transactions</h1>
      <Card className="shadow-sm">
        <Card.Body>
          <p>Transaction details will appear here.</p>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Transaction;
