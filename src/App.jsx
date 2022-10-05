import { useState } from "react";
import "./App.css";
import GeneratedPassword from "./Components/GeneratedPassword/GeneratedPassword";
import PasswordSettings from "./Components/PasswordSettings/PasswordSettings";

function App() {
  const [generatedPassword, setGeneratedPassword] = useState("");

  return (
    <div className="App">
      <div className="generator-container">
        <h2>Password Generator</h2>
        <GeneratedPassword generatedPassword={generatedPassword} />
        <PasswordSettings setGeneratedPassword={setGeneratedPassword} />
      </div>
    </div>
  );
}

export default App;
