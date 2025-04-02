import { BrowserRouter } from "react-router";
import MainRouter from "./navigation/MainRouter";
import AuthRouter from "./navigation/AuthRouter";
import { useState } from "react";
import GlobalLayout from "./layouts/GlobalLayout";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <BrowserRouter>
      <GlobalLayout>
        {isLoggedIn ? <MainRouter /> : <AuthRouter />}
      </GlobalLayout>
    </BrowserRouter>
  );
}

export default App;
