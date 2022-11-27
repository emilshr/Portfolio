import React from "@astrojs/react";
import "./components.css";
import "./company-details.css";
import type { WorkExperienceContent } from "./constants";

export const CompanyDetails = (props: WorkExperienceContent) => {
  const { companyName, companyProfile, position, description } = props;
  return (
    <div className="box-container div-container">
      <div className="box-container">
        <a href={companyProfile} target="_blank">
          <h4>{companyName}</h4>
        </a>
      </div>
      <div className="box-container">
        <h5 className="position">{position}</h5>
      </div>
      <div className="box-container">
        <ul>
          {description.map((desc) => {
            return (
              <li key={desc} className="description-list-item">
                <h5>{desc}</h5>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
