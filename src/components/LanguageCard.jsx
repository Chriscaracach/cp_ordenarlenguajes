// LanguageCard.js

const LanguageCard = ({ language, index, onClick }) => {
  return (
    <div
      className="Language-Card"
      onClick={() => {
        onClick();
      }}
    >
      {index}
      <br />
      {language}
    </div>
  );
};

export default LanguageCard;
