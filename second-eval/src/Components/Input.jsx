import "./style.css";
export const Input = ({
  type,
  size,
  variant,
  rightLogo,
  rightLogoOnClick,
  onChange,
}) => {
  let style;
  if (variant === "outline") {
    style = {
      border: "1px solid black"
    }
  } else if (variant === "flushed") {
    style = {
      border: "none",
      borderBottom: "1px solid black"
    }
  } else if (variant === 'filled') {
    style = {
      border: "none",
      background: "lightgray"
    }
  }
  return (
    <div className="inputContainer">
      {/* Add Right Logo */}
      <img src={rightLogo} width="20" height="20" onClick={rightLogoOnClick} />
      <input className={`input`} type={type ? "password" : "text"} size={size} style={style} onChange={(e) => onChange(e.target.value)} >
      </input>
    </div>
  );
};
