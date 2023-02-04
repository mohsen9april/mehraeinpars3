import React from "react";
import { ReactComponent as WorkIcon } from "../../../src/work.svg";
import { ReactComponent as SchoolIcon } from "../../../src/school.svg";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import timelineElements from "./timelineElements";
import "./Newline.css";

const Newline = () => {
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };

  return (
    <>
      <div className="Newline_container">
        <div className="timeline_header">
          <h1>پروژه خط جدید</h1>
        </div>
        <div className="timeline_top">
          <video loop autoPlay>
            <source src="./images/video1.mp4" type="video/mp4" />
          </video>
        </div>
        <VerticalTimeline lineColor="#000000">
          {timelineElements.map((element) => {
            let isWorkIcon = element.icon === "work";
            let showButton =
              element.buttonText !== undefined &&
              element.buttonText !== null &&
              element.buttonText !== "";

            return (
              <VerticalTimelineElement
                key={element.key}
                date={element.date}
                dateClassName="date"
                iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
              >
                <h3 className="vertical-timeline-element-title">{element.title}</h3>
                <h5 className="vertical-timeline-element-subtitle">{element.location}</h5>
                <p id="description">{element.description}</p>
                {showButton && (
                  <a className={`button ${isWorkIcon ? "workButton" : "schoolButton"}`} href="/">
                    {element.buttonText}
                  </a>
                )}
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Newline;

// مراحل ساخت کارخانه

// تسطیح کف و برداشتن خاک.
// اجرای فندانسیون سوله ودیوار محوطه که شامل بتن مگر ،قالب بندی ،آرماتوربندی قرار دادن صفحه ستون و ریختن بتن.
// ساخت و نصب سازه سوله وسازه اداری.
// اجرای سقف سوله که شامل : توری ،پشم شیشه و ورق و سقف اداری، تیرچه یونولیت و بتن.
// اجرای دیوار سوله ودیوار محوطه کارخانه و دیوار اداری.
// ساخت و نصب درب و پنجره سوله و ساختمان اداری.
// ریختن بتن کف سوله و نازک کاری شامل گچ کاری ،کاشی و سرامیک ساختمان اداری.
// محوطه سازی محل کارخانه.
// تاسیسات مکانیکی و برقی.
