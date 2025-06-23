function Section({ id, children, background }) {
  const sectionStyle = {
    background: background,
    width: "100%",
    display: "flex",
  };

  return (
    <div
      id={id}
      style={sectionStyle}>
      {children}
    </div>
  );
}

export default Section;
