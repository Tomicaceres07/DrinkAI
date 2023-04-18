import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export const Generating = () => {

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate(`/drink`, {
        replace: true,
      });
    }, 3000);
  }, [])
  

  return (
    <div className="generating__container">
      <div className="generating__container-mixer">
        <img src="src/assets/icons/mixer.png" alt="Mixer" className="generating__mixer"/>
      </div>
      <h1 className="generating__title">Generando <br /> tu trago...</h1>
    </div>
  )
}
