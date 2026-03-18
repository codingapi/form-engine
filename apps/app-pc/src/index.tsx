import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import HomePage from "@/pages/home.tsx";
import {registerForms} from "@/config/form-register.tsx";


const App = () => {

   registerForms();

    return (
        <HomePage/>
    )
}

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
