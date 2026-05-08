import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">

      <Navbar />

      <div className="pt-36 flex items-center justify-center">
        <h1 className="text-5xl font-bold text-center px-4">
          Welcome to MakeAMove
        </h1>
      </div>

    </div>
  );
}

export default App;