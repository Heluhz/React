import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Profile from './UserProfile';
import NotFound from './NotFound';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="*" element={<NotFound />} /> {/* 404 inside Layout */}
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
