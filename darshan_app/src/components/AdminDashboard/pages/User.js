import React from 'react';
import { Container, Card } from 'react-bootstrap';

const User = () => {
  return (
    <Container className="py-4">
      <h1 className="fs-2 fw-bold mb-4">User Management</h1>
      <Card className="shadow-sm">
        <Card.Body>
          <p>User details will appear here.</p>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default User;
