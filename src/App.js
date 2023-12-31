import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Root from "./Pages/Root";
import Favorite from "./Pages/Favorite";
import Sent from "./Pages/Sent";
import Trash from "./Pages/Trash";
import Inbox from "./Pages/Inbox";
import Auth from "./Pages/Auth";
import Drafts from "./Pages/Drafts";
import Profile from "./Pages/Profile";
import Setting from "./Pages/Setting";
import Loader from "./Components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserInfo } from "./Store/AuthAction";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector((states) => states.general.isLoading);

  //  useEffect
  useEffect(() => {
    const idToken = localStorage.getItem("token");
    if (idToken) {
      dispatch(getUserInfo(idToken));
    }
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Inbox />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/sent" element={<Sent />} />
          <Route path="/drafts" element={<Drafts />} />
          <Route path="/trash" element={<Trash />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Setting />} />
        </Route>
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
}

export default App;
