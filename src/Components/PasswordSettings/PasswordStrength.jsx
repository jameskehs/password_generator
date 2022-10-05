const PasswordStrength = ({ passwordStrength }) => {
  return (
    <div className="password-strength-container">
      <p>STRENGTH</p>
      <div className={`strength-bars-container ${passwordStrength.replace(/ /g, "").replace("!", "")}`}>
        <h2>{passwordStrength}</h2>
        <div className={`strength-bar`}></div>
        <div className={`strength-bar`}></div>
        <div className={`strength-bar`}></div>
        <div className={`strength-bar`}></div>
      </div>
    </div>
  );
};

export default PasswordStrength;
