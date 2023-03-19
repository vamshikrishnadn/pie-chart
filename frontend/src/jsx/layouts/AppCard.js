import Card from 'react-bootstrap/Card';

function AppCard({ children }) {
  return (
    <Card>
      <Card.Body>{children}</Card.Body>
    </Card>
  );
}

export default AppCard;
