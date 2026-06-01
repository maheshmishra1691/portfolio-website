import { PropsWithChildren } from "react";
import "./styles/Landing.css";
import { config } from "../config";

const Landing = ({ children }: PropsWithChildren) => {
  const nameParts = config.developer.fullName.split(" ");
  const firstName = nameParts[0] || config.developer.name;
  const lastName = nameParts.slice(1).join(" ") || "";
  const headlineParts = config.developer.headline.split(" & ");

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              {firstName.toUpperCase()}
              {' '}
              <br />
              {lastName && <span>{lastName.toUpperCase()}</span>}
            </h1>
          </div>
          <div className="landing-info">
            <h3 className="landing-role-title">{config.developer.title}</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">
                {headlineParts.length > 1 ? (
                  <>
                    <span className="landing-headline-line">
                      {headlineParts[0]} &amp;
                    </span>
                    <span className="landing-headline-line">
                      {headlineParts.slice(1).join(" & ")}
                    </span>
                  </>
                ) : (
                  <span className="landing-headline-line">
                    {config.developer.headline}
                  </span>
                )}
              </div>
            </h2>
            <h2>
              <div className="landing-h2-info">{config.developer.subtitle}</div>
            </h2>
          </div>
          {/* Mobile photo - shows only on mobile when 3D character is hidden */}
          <div className="mobile-photo">
            <img
              className="mobile-photo-img"
              src={config.developer.photo}
              alt={config.developer.fullName}
            />
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
