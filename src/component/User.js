import { useEffect, useState } from "react";
const User = () => {
  // const isTokenSet = localStorage.getItem("demo-token");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const isTokenSet = localStorage.getItem("demo-token");
    setIsLoggedIn(isTokenSet);
    document.title = isLoggedIn ? "Welcome User" : "please Login";
  }, [isLoggedIn]);
  const handleLogin = () => {
    localStorage.setItem("demo-token", true);
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    localStorage.removeItem("demo-token");
    setIsLoggedIn(false);
  };
  return (
    <div>
      {isLoggedIn ? <h1>Welcome to home Page</h1> : <h1>Please Login</h1>}
      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};
export default User;
