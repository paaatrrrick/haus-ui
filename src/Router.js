import { useCallback, useState, useEffect, useMemo } from "react";

import { DisplayContext } from "./utils/context";
import { Route, Routes, } from "react-router-dom";
import Home from "./views/Home";
import AuthNavbar from "./components/AuthNavbar";
import NoAuthNavbar from "./components/NoAuthNavarbar";
import NotFound from "./views/NotFound";
import Dashboard from "./views/Dashboard"
import ThankYou from "./views/ThankYou";
import Contact from "./views/Contact";
import Onboard from "./views/Onboard"
import { useLocation } from "react-router-dom";
import About from "./views/About";
import { trackPathForAnalytics } from "./utils/analytics";


const Router = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const { pathname, search } = useLocation();

    const analytics = useCallback(() => {
        trackPathForAnalytics({ path: pathname, search: search, title: pathname.split("/")[1] });
    }, [pathname, search]);

    useEffect(() => {
        analytics();
    }, [analytics]);

    useEffect(() => {
        // Update windowWidth state whenever the window is resized
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const useContextData = useMemo(() => {
        // Derive a value from the window width
        return {
            isMobile: window.innerWidth <= 900,
            mobile1200: window.innerWidth <= 1200,
        }
    }, [windowWidth]);
    return (
        <DisplayContext.Provider value={useContextData}>
            <Routes>
                <Route element={<NoAuthNavbar />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/thank-you" element={<ThankYou />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/getting-started" element={<Onboard />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
                <Route path="/admin" element={<AuthNavbar />}>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="error" element={<NotFound />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </DisplayContext.Provider>
    )
}

export default Router;