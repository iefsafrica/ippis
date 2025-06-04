import Form from "./components/Form";

function App() {
  return (
    <div className="flex flex-col justify-between w-screen pt-5 h-screen bg-pink-100">
      <div className="flex justify-center mb-4">
        <Form />
      </div>
      <footer className=" bg-white p-4 text-center">
        <div className="container mx-auto flex items-center justify-center">
          <p className="text-xs text-gray-600">
            &copy; 2025 IPPIS Nigeria. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
