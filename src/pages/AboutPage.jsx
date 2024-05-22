import { Link } from 'react-router-dom';
import Card from '../components/shared/Card';

const AboutPage = () => {
  return (
    <Card>
      <h1>About this project</h1>
      <p>This is a react app to leave feedback for a product or service</p>
      <p>Verion: 1.0.0 </p>
      <Link to="/">Back to Home Page</Link>
    </Card>
  );
};

export default AboutPage;
