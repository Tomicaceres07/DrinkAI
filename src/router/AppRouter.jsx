import { Route, Routes } from 'react-router-dom';
import { GeneratedDrinkPage } from 'src/pages/drink/GeneratedDrinkPage';
import { HomePage } from 'src/pages/home/HomePage';
import { WelcomePage } from 'src/pages/welcome/WelcomePage';

export const AppRouter = () => {
  return (
    <>
      <Routes>
				<Route path="/" element={<WelcomePage />} />
				<Route path="home" element={<HomePage />} />

        {/* TODO: Protect this route. If a drink isn't generated, then you can't enter here */}
				<Route path="drink" element={<GeneratedDrinkPage />} />
      </Routes>
    </>
  );
};
