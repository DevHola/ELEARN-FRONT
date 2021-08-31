import './App.css';
import Enrolled from './Enrolled';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';


function App() {
  return (
    <div className="App">
     <Header/>
     <div className="app__body">
       <Sidebar/>
       <Enrolled/>
     </div>
     <div className="app__footer">
       {/*Footer*/}
       <Footer/>
     </div>
    {/* Header  Completed*/}
    {/* Sidebar  Remain Achievement Badges*/}
    {/* Recommended Courses Remain Course Arrangements*/}
    {/* Enrolled Course */}
    {/* News $ Update */}
    </div>
  );
}

export default App;
