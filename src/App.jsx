import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";
import Tasks from "./routes/tasks";
import About from "./routes/about";
import { GlobalStateProvider } from "./context";
import Layout from "./components/layout";
export default function App() {
    return <GlobalStateProvider Root={() =>
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Tasks />} />
                    <Route path="/tasks/*" element={<Tasks />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    } />
}