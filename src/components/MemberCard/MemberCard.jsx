import "./MemberCard.scss";

export default function MemberCard() {
  return (
    <div className="contributor-card">
      <img
        className="contributor-card__photo"
        src='./images/person.png'
        alt='Person photo'
      />
      <div className="contributor-card__text">
        <div className="contributor-card__position">St. Mechanic</div>
        <div className="contributor-card__name">Dave Johnson</div>
      </div>
    </div>
  );
}
