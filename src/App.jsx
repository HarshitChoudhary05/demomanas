import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChoose from './components/WhyChoose';
import ChooseClass from './components/ChooseClass';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import 'font-awesome/css/font-awesome.min.css';
import Notes from './pages/Notes';
import Videos from './pages/Videos';
import Class6 from './pages/Notes/Class6';
import TopicViewer from './context/TopicViewer';
import Viewer from './context/Viewer';
import Class6Video from './pages/Videos/Class6Video';
import Class7 from './pages/Notes/Class7';
import Class8 from './pages/Notes/Class8';
import Class9 from './pages/Notes/Class9';
import Class10 from './pages/Notes/Class10';
import Class11 from './pages/Notes/Class11';
import Class12 from './pages/Notes/Class12';
import Class7Video from './pages/Videos/Class7Video';
import Class8Video from './pages/Videos/Class8Video';
import Class9Video from './pages/Videos/Class9Video';
import Class10Video from './pages/Videos/Class10Video';
import Class11Video from './pages/Videos/Class11Video';
import Class12Video from './pages/Videos/Class12Video';


const App = () => {
  return (
    <div>
      {/* Always displayed components */}
      <Navbar />
      
      {/* Routes */}
      <Routes>
        {/* Default route */}
        <Route path="/" element={
          <>
            <Hero />
            <WhyChoose />
            <ChooseClass />
            <Testimonial />
          </>
        } />

        {/* Notes page route */}
     
        <Route path="/notes" element={<Notes />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/class6" element={<Class6 />} />
        <Route path="/class7" element={<Class7/>} />
        <Route path="/class8" element={<Class8/>} />
        <Route path="/class9" element={<Class9/>} />
        <Route path="/class10" element={<Class10/>} />
         <Route path="/class11" element={<Class11/>} />
        <Route path="/class12" element={<Class12/>} />

        <Route path="/class6video" element={<Class6Video />} />
        <Route path="/class7video" element={<Class7Video />} />
        <Route path="/class8video" element={<Class8Video />} />
        <Route path="/class9video" element={<Class9Video />} />
        <Route path="/class10video" element={<Class10Video />} />
        <Route path="/class11video" element={<Class11Video />} />
        <Route path="/class12video" element={<Class12Video />} />

        {/* Topic Viewer route */}
        <Route path="/topics/:className/:chapter" element={<TopicViewer />} />

        {/* PDF Viewer route */}
        <Route path="/viewer/:className/:chapter/:topic" element={<Viewer/>} />

      </Routes>

      {/* Always displayed Footer */}
      <Footer />
    </div>
  );
};

export default App;
