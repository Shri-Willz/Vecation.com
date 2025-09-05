import React from 'react';
import Hero from './ui/component/Hero/smhero.jsx';
import About from "./ui/component/Aboutus/smabout.jsx"
import Destination from "./ui/component/Gallery/smdesti.jsx"
import Feature from "./ui/component/Features/Smfearture.jsx"
import Blog from "./ui/component/Blog/smblog.jsx"
import Testimonial from "./ui/component/Testimonial/smtest.jsx"
import Footer from "./ui/component/Footer/smfooter.jsx"
import "./index.css";

export default function Home () {
return (
    <div>
        <Hero />
        <About />
        <Destination />
        <Feature />
        <Testimonial />
        <Blog />
        <Footer />
    </div>
);
}