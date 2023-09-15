import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Inbox from "./Pages/Inbox";
import Starred from "./Pages/Starred";
import Sent from "./Pages/Sent";
import Drafts from "./Pages/Drafts";
import Trash from "./Pages/Trash";
import Attachments from "./Pages/Attachments";
import Labels from "./Pages/Labels";
import Error from "./Pages/Error";
import Ball from "./Components/Ball/Ball";

function App() {
  return (
    <>
      <div>
        <Ball />
        <Navbar />
        <switch>
          <Routes>
            <Route path="/" exact element={<Navigate to={"/inbox"} />}></Route>
            <Route path="/inbox" element={<Inbox />}></Route>
            <Route path="/starred" element={<Starred />}></Route>
            <Route path="/sent" element={<Sent />}></Route>
            <Route path="/drafts" element={<Drafts />}></Route>
            <Route path="/trash" element={<Trash />}></Route>
            <Route path="/attachments" element={<Attachments />}></Route>
            <Route path="/labels" element={<Labels />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
        </switch>
      </div>
    </>
  );
}

export default App;
