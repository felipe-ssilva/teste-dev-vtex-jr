import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";
import { AppContainer } from "./app_styles";
import { Route, Routes } from "react-router-dom";
import { Header } from "./Header";
import { Home } from "./Home";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <AppContainer>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </AppContainer>
      </Router>
    </Provider>
  );
};

export default App;
