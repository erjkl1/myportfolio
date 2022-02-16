import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './Home';
import About from './About';
import History from './History';
import Skill from './Skill/Skill';
// import Work from './Work';
import Contact from './Contact';
import NoMatch from './NoMatch';

const Routing = () =>{
    type routeConfig ={
      [address : string]: JSX.Element;
    };
    const routing:routeConfig = {
       home:<Home />, 
       about: <About />, 
       history: <History />, 
       skill: <Skill />,
       contact: <Contact />,
      //  work: <work />,`
      }
    const componentsKey=Object.keys(routing);
    return(
      <BrowserRouter>
        <Routes>
                <Route path="/" element = {<Home />} />
                <Route path="*" element={<NoMatch />} />
                {componentsKey.map((key) =>
                (
                <Route path={'/'+key} element = {routing[key]} key={key} />
                ))}
        </Routes>
      </BrowserRouter>
    )
}

export default Routing;