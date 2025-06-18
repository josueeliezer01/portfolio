function Section({ children, background }) {
  const sectionStyle = {
    background: background,
    width: "100%",
    display: "flex",
  };

  return <div style={sectionStyle}>{children}</div>;
}

export default Section;
