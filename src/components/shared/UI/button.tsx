import React from "react";
import buttonStyle from "./button.module.scss";

interface OwnProps {
  title: string;
}

const Button: React.FC<OwnProps> = props => {
  return <button className={buttonStyle.Button}>{props.title}</button>;
};

export default Button;
