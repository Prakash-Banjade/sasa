import React, { useContext } from "react";
import { ThemeContext } from "../context/context";

const tagTitle = [
  "Excellent in Everything",
  "Positive Conversation",
  "Worth It Pricings",
  "Absolute Free Suggestions",
];

const tagStyle = {
  padding: "2rem",
  flex: "1 1 300px",
  textAlign: "center",
};

const tabTextStyle = {
  fontFamily: "var(--primary-font)",
  color: "white",
  fontSize: "1rem",
};

const Tag = (props) => {
  return (
    <div className="tag" style={tagStyle}>
      <li className="tag-list" style={tabTextStyle}>
        {props.tagTitle}
      </li>
    </div>
  );
};

const Tags = () => {
  const { dark } = useContext(ThemeContext);

  const tagContainerStyles = {
    padding: 0,
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    background: dark
      ? "transparent"
      : "linear-gradient(to right, var(--purple), var(--primary-color))",
    marginTop: 0,
  };

  return (
    <div style={tagContainerStyles} className="tags-container container">
      {tagTitle.map((tag) => {
        return <Tag tagTitle={tag} key={tag.length} />;
      })}
    </div>
  );
};

export default Tags;
