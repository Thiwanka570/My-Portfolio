import './App.css';
import Navbar from './component/Navbar';
import Sidebar from './component/Sidebar';
import Home from './pages/Home';
import MyStory from './pages/MyStory';
import Contact from './pages/Contact';
import ImageSlider from './component/ImageSlider';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="App relative min-h-screen w-full">
      {/* Background design */}
      <div className="fixed top-0 left-0 z-[-1] h-full w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>

      {/* Content */}
      <div className="text-white flex items-center justify-center mt-10">
        <Navbar />
        <Sidebar />

        {/* Main Content */}
        <div id='home' className='flex justify-center items-center'>
          <Home />
        </div>
      </div>
      {/* <div>
        <ImageSlider/>
      </div> */}
      <div id='myStory'>
        <MyStory />
      </div>
      <div id='contact'>
        <Contact />
      </div>
      <div id='projects'>
        <Projects />
      </div>
    </div>
  );
}

export default App;
