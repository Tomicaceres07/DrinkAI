import { useNavigate } from 'react-router-dom';

export const CyanButton = ({title, page}) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/generating`, {
      replace: true,
    });
  }

  return (
    <div className={`cyanbutton__container ${page == "drink" && "cyanbutton__container__drink"}`}>
      <button onClick={handleClick} className={`cyanbutton__button ${page == "drink" && "cyanbutton__button__drink"}`}>{title}</button>
    </div>
  )
}
