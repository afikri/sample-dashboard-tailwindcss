import React from "react";
import { Card, Sidebar } from "./components/";
import Dashboard from "./pages/Dashboard";
const App = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div class="w-full px-4 py-2 bg-gray-200 lg:w-full">
        <div class="container mx-auto mt-12">
          <Card />
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default App;
