import { useNavigate } from 'react-router-dom';

export const CyanButton = ({title}) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/generating`, {
      replace: true,
    });
  }

  return (
    <div className="cyanbutton__container">
      <button onClick={handleClick} className="cyanbutton__button">{title}</button>
    </div>
  )
}
