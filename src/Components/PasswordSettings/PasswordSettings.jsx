import { useEffect, useState } from "react";
import PasswordLengthSlider from "./PasswordLengthSlider";
import PasswordOptions from "./PasswordOptions";
import "./PasswordSettings.css";
import PasswordStrength from "./PasswordStrength";

const PasswordSettings = ({ setGeneratedPassword }) => {
  const [passwordLength, setPasswordLength] = useState(10);
  const [includedCharacters, setIncludedCharacters] = useState({ uppercase: false, lowercase: false, numbers: false, symbols: false });
  const [passwordStrength, setPasswordStrength] = useState("WEAK");

  useEffect(() => {
    calculatePasswordStrength();
  }, [passwordLength, includedCharacters]);

  function calculatePasswordStrength() {
    const values = Object.values(includedCharacters);
    let toggled = 0;
    values.forEach((value) => {
      if (value) {
        toggled += 1;
      }
    });
    if (passwordLength < 8 || values.every((val) => val === false)) {
      setPasswordStrength("TOO WEAK!");
    }
    if (passwordLength < 8 && values.some((val) => val === true)) {
      setPasswordStrength("WEAK");
      return;
    }
    if (toggled === 3) {
      setPasswordStrength("MEDIUM");
    }
    if (toggled === 4) {
      setPasswordStrength("STRONG");
      return;
    }
  }

  function generatePassword() {
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseLetters = `abcdefghijklmnopqrstuvwxyz`;
    const numbers = `0123456789`;
    const symbols = `@#$!&`;
    let availableCharacters = "";
    let password = "";
    if (includedCharacters.uppercase) availableCharacters += uppercaseLetters;
    if (includedCharacters.lowercase) availableCharacters += lowercaseLetters;
    if (includedCharacters.numbers) availableCharacters += numbers;
    if (includedCharacters.symbols) availableCharacters += symbols;

    for (let i = 1; i <= passwordLength; i++) {
      let char = Math.floor(Math.random() * availableCharacters.length + 1);
      password += availableCharacters.charAt(char);
    }
    setGeneratedPassword(password);
  }

  return (
    <div className="password-settings-container">
      <PasswordLengthSlider passwordLength={passwordLength} setPasswordLength={setPasswordLength} />
      <PasswordOptions includedCharacters={includedCharacters} setIncludedCharacters={setIncludedCharacters} />
      <PasswordStrength passwordStrength={passwordStrength} />
      <button className="generate-password-btn" onClick={() => generatePassword()}>
        <p>GENERATE</p>
        <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
          <path fill="#24232C" d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z" />
        </svg>
      </button>
    </div>
  );
};

export default PasswordSettings;
