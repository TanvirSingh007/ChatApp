import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import LoginPage from "./pages/Contact";
import NoPage from "./pages/NoPage";
import SignIn from './components/login';
import Register from './components/register';
import { createTheme, NextUIProvider } from "@nextui-org/react"
import useDarkMode from 'use-dark-mode';

const lightTheme = createTheme({
  type: 'light'
})

const darkTheme = createTheme({
  type: 'dark'
})


export default function App() {
  const darkMode = useDarkMode(true);
  return (
    <NextUIProvider theme={darkTheme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<LoginPage />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </NextUIProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);