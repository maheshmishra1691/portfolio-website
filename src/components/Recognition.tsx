import "./styles/Recognition.css";
import { config } from "../config";

const Recognition = () => {
  return (
    <div className="recognition-section section-container" id="recognition">
      <div className="recognition-container">
        <h2>
          Recognition <span>&</span> awards
        </h2>
        <div className="recognition-grid">
          {config.recognitions.map((item, index) => (
            <article className="recognition-card" key={item.id}>
              <span className="recognition-index">0{index + 1}</span>
              <p className="recognition-period">{item.period}</p>
              <h3>{item.title}</h3>
              <h4>{item.organization}</h4>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recognition;
