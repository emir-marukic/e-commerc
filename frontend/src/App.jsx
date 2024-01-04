import Navbar from "./Components/landingPage/Navbar";
import BasicTabs from "./Components/landingPage/Tabs";
import Content from "./Components/landingPage/Content";

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
          "https://images.pexels.com/photos/5048613/pexels-photo-5048613.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
      />
      <BasicTabs />
      <Content
        header="Elevate Your Style with Smartwatches"
        text={
          "Transform the way you stay connected with our range of smartwatches. SyncSphere offers a handpicked selection of sleek and intelligent timepieces that not only keep you on schedule but also complement your unique style."
        }
        img={
          "https://images.pexels.com/photos/5081914/pexels-photo-5081914.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
      />
    </div>
  );
}

export default App;
