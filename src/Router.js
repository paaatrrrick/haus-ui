import {
    Route,
    Routes,
} from "react-router-dom";
import Home from "./views/Home";
import AuthNavbar from "./components/AuthNavbar";
import NoAuthNavbar from "./components/NoAuthNavarbar";
import NotFound from "./views/NotFound";
import Dashboard from "./views/Dashboard"
import Form from "./views/Form";


const Router = () => {
    return (
        <Routes>
            <Route element={<NoAuthNavbar />}>
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<Form />} />
                <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="/admin" element={<AuthNavbar />}>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="error" element={<NotFound />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}

export default Router;