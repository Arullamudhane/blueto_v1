import "./FlipCard.css";
const FlipCard = () => {
  return (
    <>
      <div class='flip-card'>
        <div class='flip-card-inner'>
          <div class='flip-card-front'>
            <p class='title'>AGILE</p>
            <p>Hover for more info</p>
          </div>
          <div class='flip-card-back'>
            <p class='title'>BACK</p>
            <p>Leave Me</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlipCard;
