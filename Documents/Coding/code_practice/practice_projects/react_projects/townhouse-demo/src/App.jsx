import Form from "./components/Form";
import React from 'react';

function App() {
  return (
      <div className="flex w-1440 max-h-screen">
          <div className="relative h-full w-625">
              <div className="absolute top-6 left-10 flex items-center gap-4 z-10  ml-20">
                  <img src="/assets/images/logos/townhouse-logo.png" alt="" />
                  <span>Townhouse</span>
              </div>
          </div>
          <img
              className="w-625 h-full object-cover"
              src="./assets/images/backgrounds/login-pic-1.png"
              alt="main-pic"
          />

          <div className="flex justify-center">
              <Form />
          </div>
      </div>
  );
}

export default App;
