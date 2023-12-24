import React from "react";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Routes
} from "react-router-dom";
import Home from "../screens/home";
import About from "../screens/about";
import Contact from "../screens/contact";
import { Box } from "@mui/material";
import ResponsiveAppBar from "../components/appbar";
import ProductDescription from "../screens/nestedPages/productdescription";
import ImageGenerator from "../screens/nestedPages/imgaegenerator";
import TaglineGenerator from "../screens/nestedPages/taglineGenerater";
import TweetsGenerator from "../screens/nestedPages/tweetsGenerater";
import ApplicationGenerator from "../screens/nestedPages/ApplicationGenerater";
import RephraseText from "../screens/nestedPages/rephraseText";

export default function AppRouter() {
    return (
        <Router>
            <ResponsiveAppBar/>
            <Routes>
                <Route index element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="/productdescription" element={<ProductDescription />} />
                <Route path="/imageGenerator" element={<ImageGenerator />} />
                <Route path="/taglineGenerator" element={<TaglineGenerator />} />
                <Route path="/tweetsGenerator" element={<TweetsGenerator />} />
                <Route path="/applicationGenerator" element={<ApplicationGenerator />} />
                <Route path="/rephraseText" element={<RephraseText />} />
                <Route path="*" element={<p>Path not resolved</p>} />
            </Routes>
        </Router>
    );
}