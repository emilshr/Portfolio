import React, { useEffect, useState } from "react";
import { CompanyDetails } from "./CompanyDetails";
import { WorkExperienceContent, workExperienceData } from "./constants";
import "./work-experience.css";

const YEARS: string[] = ["2019", "2020", "2021"];

export const WorkExperience = () => {
  const [selectedYear, setSelectedYear] = useState(YEARS[0] ?? "2019");
  const [selectedContent, setSelectedContent] = useState<WorkExperienceContent>(
    workExperienceData[0]
  );

  useEffect(() => {
    const foundData = workExperienceData.find(
      (data) => data.year === selectedYear
    );
    if (foundData) {
      setSelectedContent(foundData);
    }
  }, [selectedYear]);

  return (
    <div className="work-experience-container">
      <div className="years-container">
        {YEARS.map((year) => {
          return (
            <div
              key={year}
              className={selectedYear === year ? "selected-year year" : "year"}
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                setSelectedYear(year);
              }}
            >
              {year}
            </div>
          );
        })}
      </div>
      <div className="experience-container">
        <div className="experience-content">
          <CompanyDetails {...selectedContent} />
        </div>
      </div>
    </div>
  );
};
