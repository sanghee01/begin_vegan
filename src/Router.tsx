import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Community from "./pages/Community/Community";
import MyPage from "./pages/MyPage/MyPage";
import Map from "./pages/Map/Map";
import Recipe from "./pages/Recipe/Recipe";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Header from "./components/Header";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/community" element={<Community />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/map" element={<Map />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
