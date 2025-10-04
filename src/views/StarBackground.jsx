import "../StarBackground.css";

const StarBackground = () => {
  const circles = Array.from({ length: 60 }); // cantidad de estrellas
  return (
    <div className="star-container">
      {circles.map((_, i) => (
        <div key={i} className="circle-container">
          <div className="circle"></div>
        </div>
      ))}
    </div>
  );
};

export default StarBackground;
