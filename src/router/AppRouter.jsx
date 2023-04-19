import { Route, Routes } from 'react-router-dom';
import { DrinkPage } from 'src/pages/drink/DrinkPage';
import { HomePage } from 'src/pages/home/HomePage';
import { WelcomePage } from 'src/pages/welcome/WelcomePage';
import { Generating } from '../pages/generating/Generating';

export const AppRouter = () => {
  return (
    <>
      <Routes>
				<Route path="/" element={<WelcomePage />} />
				<Route path="home" element={<HomePage />} />


        {/* TODO: Protect this route. If a drink isn't generating, then you can't enter here */}
				<Route path="generating" element={<Generating />} />
        {/* TODO: Protect this route. If a drink isn't generated, then you can't enter here */}
				<Route path="drink" element={<DrinkPage />} />
      </Routes>
    </>
  );
};
