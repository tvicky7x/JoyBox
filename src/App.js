import "./App.css";
import MainContainer from "./Components/Container/MainContainer";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <MainContainer>
        <Navbar />
        <div className=" bg-white sm:col-span-9 row-span-full row-start-2 rounded-2xl"></div>
      </MainContainer>
    </>
  );
}

export default App;
