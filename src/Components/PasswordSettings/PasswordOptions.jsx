const PasswordOptions = ({ includedCharacters, setIncludedCharacters }) => {
  return (
    <div className="password-options-container">
      <div className="checkbox-group">
        <input
          type="checkbox"
          id="include-uppercase"
          value={includedCharacters.uppercase}
          onChange={(e) => setIncludedCharacters({ ...includedCharacters, uppercase: e.target.checked })}
        />
        <label htmlFor="include-uppercase">Include Uppercase Letters</label>
      </div>
      <div className="checkbox-group">
        <input
          type="checkbox"
          id="include-lowercase"
          value={includedCharacters.lowercase}
          onChange={(e) => setIncludedCharacters({ ...includedCharacters, lowercase: e.target.checked })}
        />
        <label htmlFor="include-lowercase">Include Lowercase Letters</label>
      </div>
      <div className="checkbox-group">
        <input
          type="checkbox"
          id="include-numbers"
          value={includedCharacters.numbers}
          onChange={(e) => setIncludedCharacters({ ...includedCharacters, numbers: e.target.checked })}
        />
        <label htmlFor="include-numbers">Include Numbers</label>
      </div>
      <div className="checkbox-group">
        <input
          type="checkbox"
          id="include-symbols"
          value={includedCharacters.symbols}
          onChange={(e) => setIncludedCharacters({ ...includedCharacters, symbols: e.target.checked })}
        />
        <label htmlFor="include-symbols">Include Symbols</label>
      </div>
    </div>
  );
};

export default PasswordOptions;
