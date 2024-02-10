// import logo from './logo.svg';
// import './App.css';

import { BrowserRouter, useRoutes } from "react-router-dom";
import { User, Users } from "./view";

function AppContent() {
  const routes = useRoutes([
    { path: "/", element: <Users /> },
    {
      path: "/:id",
      element: <User />,
    },
  ])
  return routes
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
