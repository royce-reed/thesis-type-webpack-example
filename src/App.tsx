import './styles.css';
import image from './woods2.jpg';
import svgExample from './catching-catching-a-ball-person-svgrepo-com.svg';
import { ClickCounter } from './ClickCounter';
export const App = () => {
  return (
    <div>
      <h1>Heller World - {process.env.NODE_ENV} {process.env.name}</h1>
      <img src={image} alt="wood" />
      <img src={svgExample} alt="stick" />
      <ClickCounter />
    </div>
  );
};