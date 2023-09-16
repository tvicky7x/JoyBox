import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Root from "./Pages/Root";
import Favorite from "./Pages/Favorite";
import Sent from "./Pages/Sent";
import Trash from "./Pages/Trash";
import Inbox from "./Pages/Inbox";
import Auth from "./Pages/Auth";
import Drafts from "./Pages/Drafts";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Inbox />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/sent" element={<Sent />} />
          <Route path="/drafts" element={<Drafts />} />
          <Route path="/trash" element={<Trash />} />{" "}
        </Route>
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
}

export default App;
