import './styles.css';
import image from './woods2.jpg';
import svgExample from './catching-catching-a-ball-person-svgrepo-com.svg';
export const App = () => {
  return (
    <div>
      <h1>Hello World - {process.env.NODE_ENV} {process.env.name}</h1>
      <img src={image} alt="wood" />
      <img src={svgExample} alt="stick" />
    </div>
  );
};