import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="flex items-center justify-center h-[80vh]">
        <h1 className="text-5xl font-bold">
          Welcome to MakeAMove 🚀
        </h1>
      </div>
    </div>
  );
}

export default App;