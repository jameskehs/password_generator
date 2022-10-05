const PasswordLengthSlider = ({ passwordLength, setPasswordLength }) => {
  return (
    <div className="password-length-container">
      <div className="password-length-counter">
        <p>Password Length</p>
        <h1>{passwordLength}</h1>
      </div>

      <input
        className="password-length-input"
        type="range"
        min="1"
        max="20"
        step="1"
        value={passwordLength}
        onChange={(e) => setPasswordLength(e.target.value)}
      />
    </div>
  );
};

export default PasswordLengthSlider;
