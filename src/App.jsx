import { Route, Routes } from "react-router-dom";
import Layout from "./views/layout/Layout";
import Home from "./views/pages/home/Home";
import ManageBoard from "./views/pages/manageBoard/ManageBoard";
import WorkSpace from "./views/pages/workSpace/WorkSpace";
import LoginForm from "./components/Login.Component";
import RegistrationForm from "./components/Registration.component";

function App() {
    return (
        <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/" element={<Layout />}>
                <Route path="/home" element={<Home />} />
                <Route path="/board" element={<ManageBoard />} />
                <Route path="/progress/:id" element={<WorkSpace />} />
                <Route path="/progress" element={<WorkSpace />} />
            </Route>
        </Routes>
    );
}

export default App;
