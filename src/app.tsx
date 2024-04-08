import { Counter } from './components/counter';

import img from './assets/images/img.jpeg';
import logo from './assets/images/logo.svg';

export const App = () => {
  return (
    <>
      <h1>
        {`React TypeScript Webpack Starter Template
        ${process.env.NODE_ENV}`}
      </h1>

      <img src={img} alt="A girl with a bag" />
      <img src={logo} alt="Cat Energy" />

      <Counter />
    </>
  );
};
