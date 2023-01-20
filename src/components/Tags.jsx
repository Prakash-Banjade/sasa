import React, { useContext, useMemo } from "react";
import { ThemeContext } from "../context/context";

const tagTitle = [
  "Excellent in Everything",
  "Positive Conversation",
  "Worth It Pricings",
  "Absolute Free Suggestions",
];

const tagStyle = {
  flex: "1 1 300px",
  width: '100%'
};

const tagTextStyle = {
  fontFamily: "var(--primary-font)",
  color: "white",
  fontSize: "1rem",
};

const Tag = (props) => {
  return (
    <div className="tag dflex-center" style={tagStyle}>
      <li className="tag-list" style={tagTextStyle}>
        {props.tagTitle}
      </li>
    </div>
  );
};

const Tags = () => {
  const { dark } = useContext(ThemeContext);

  const tagContainerStyles = useMemo(() => {
    return {
      padding: "1rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "1rem",
      flexWrap: "wrap",
      background: dark
        ? "transparent"
        : "linear-gradient(to right, var(--purple), var(--primary-color))",
      marginTop: '0 !important',
    };
  }, [dark]);

  return (
    <div style={tagContainerStyles} className="tags-container container">
      {tagTitle.map((tag) => {
        return <Tag tagTitle={tag} key={tag.length} />;
      })}
    </div>
  );
};

export default Tags;
