import { useState } from "react";
import "./styles.css";

const GetUserComponent = ({ setUser, setIsLoggedIn }) => {
  const [userInput, setUserInput] = useState("");

  const handleLogin = (username) => {
    setUser(username);
    setIsLoggedIn(true);
  };

  return (
    <form>
      <input
        type="text"
        value={userInput}
        onChange={(event) => setUserInput(event.target.value)}
      />
      <button onClick={() => handleLogin(userInput)}>Acessar com o nome</button>
    </form>
  );
};

export default GetUserComponent;
