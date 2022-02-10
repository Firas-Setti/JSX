import './App.css';
import './style.css'
import genshin from './imageInSrc.jpg';

function App() {
  return (
    <>
    <div style={{border:"solid 1px black", maxWidth:"100vw"}}>

 <h1 className="title red">Your Traveler Nickname Here</h1>
 <br />
 <img src={genshin} alt="genshin1"/>
 <br />
 <img src="/imageInPublic.jpg" alt="genshin2" />
</div>
<video width="320" height="240" controls>
 <source src="myVideo.mp4" type="video/mp4" />
</video>
</>
  );
}

export default App;
