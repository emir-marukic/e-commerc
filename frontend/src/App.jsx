import Navbar from "./Components/landingPage/Navbar";
import Content from "./Components/landingPage/Content";
import Footer from "./Components/landingPage/Footer";
import TabsSegmentedControls from "./Components/landingPage/Tab";

function App() {
  return (
    <div>
      <Navbar />
      <Content
        header="Explore the Future of Connectivity"
        text={
          "Discover a curated collection of the most advanced smartphones, designed to keep you connected in style. From flagship models to budget-friendly options, SyncSphere brings you the best in performance, design, and functionality."
        }
        img={
<<<<<<< HEAD
          "https://images.pexels.com/photos/4195325/pexels-photo-4195325.jpeg?auto=compress&cs=tinysrgb&w=800"
=======
          "https://i.pinimg.com/564x/66/c2/3f/66c23f9566266ec63f39b2dac1a56585.jpg"
>>>>>>> 0b7b06096f747e3d507b8dd40cb20fff9e4a77e7
        }
      />
      <TabsSegmentedControls />
      <Content
        header="Elevate Your Style with Smartwatches"
        text={
          "Transform the way you stay connected with our range of smartwatches. SyncSphere offers a handpicked selection of sleek and intelligent timepieces that not only keep you on schedule but also complement your unique style."
        }
        img={
          "https://images.pexels.com/photos/5081914/pexels-photo-5081914.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
      />

      <Footer />
    </div>
  );
}

export default App;
