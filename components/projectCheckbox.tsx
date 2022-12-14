import React, { useEffect, useState } from "react";

interface ProjectCheckboxPropsType {
  projectInfoHandler: (string) => void;
}
export function ProjectCheckbox(props: ProjectCheckboxPropsType): JSX.Element {
  const [ckBoxState, setState] = useState({
    options: [
      { id: 1, name: "Project Name1" },
      { id: 2, name: "Project Name2" },
      { id: 3, name: "Project Name3" },
    ],
    optionSelected: undefined,
  });

  const toggleHandler = (event) => {
    if (ckBoxState.optionSelected === event.target.id) {
      setState({
        ...ckBoxState,
        optionSelected: undefined,
      });
    } else {
      setState({
        ...ckBoxState,
        optionSelected: event.target.id,
      });
    }
  };
  useEffect(() => {
    props.projectInfoHandler(ckBoxState.optionSelected);
  }, [ckBoxState.optionSelected]);
  // const ChangeHandler = (event) => {
  //   toggleHandler(event);
  //   props.projectInfoHandler(ckBoxState.optionSelected);
  // };
  // useEffect(() => {}, [ckBoxState.optionSelected]);

  return (
    <div>
      <style jsx>{`
        .headingBox {
          display: flex;
          align-items: center;
        }
        .heading {
          font-family: "Gotham-Medium";
          font-size: 18px;
          line-height: 22px;
          word-spacing: 1px;
          color: #9b5d26;
          font-weight: 500;
          padding-right: 22px;
        }
        .subtitle {
          font-family: "Gotham-Book";
          font-size: 12px;
          line-height: 32px;
          color: #59493b;
        }
        .checkBoxContainer {
          display: flex;
          flex-wrap: wrap;
          padding-top: 32px;
        }
        .checkBox {
          display: flex;
          align-items: center;
          width: 50%;
          padding-bottom: 25px;
        }
        .inputStyle {
          height: 25px;
          width: 25px;
          border: solid 1px #59493b;
          background-color: transparent;
        }
        .label {
          font-family: "Gotham-Book";
          font-size: 18px;
          line-height: 32px;
          padding-left: 15px;
          color: #59493b;
        }

        @media (max-width: 550px) {
          .heading {
            font-size: 16px;
            padding-right: 10px;
          }
          .label {
            font-size: 16px;
          }
        }
      `}</style>
      <div className="headingBox">
        <div className="heading">PROJECTS</div>
        <div className="subtitle">
          What Novara Projects are you interested in?
        </div>
      </div>
      <div className="checkBoxContainer">
        {ckBoxState.options.map((option) => {
          return (
            <div className="checkBox" key={option.id}>
              <input
                className="inputStyle"
                checked={ckBoxState.optionSelected === option.name}
                onChange={toggleHandler}
                id={option.name}
                name={option.name}
                placeholder={option.name}
                type="checkbox"
              />
              <label className="label" htmlFor={option.name}>
                {option.name}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
