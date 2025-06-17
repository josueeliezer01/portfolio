function Section({ children, background }) {
  const sectionStyle = {
    background: background,
    width: "100%",
    padding: "20px 0",
    display: "flex",
    justifyContent: "center",
  };

  return <div style={sectionStyle}>{children}</div>;
}

export default Section;
