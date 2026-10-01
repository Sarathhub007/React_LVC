import Add from './Add'
import Sub from './Sub'
import Multi from './Multi'
import Divide from './Divide'
import { Routes,Route, Link } from 'react-router-dom'

export default function nav() {
  return (
    <div>
        
      <Link to="/add">Add</Link>
       <Link to="/sub">subtract</Link>
        <Link to="/multiply">multiply</Link>
         <Link to="/divide">divide</Link>
        <Routes>
            <Route path="/add" element={<Add/>}/>
             <Route path="/sub" element={<Sub/>}/>
              <Route path="/multiply" element={<Multi/>}/>
               <Route path="/divide" element={<Divide/>}/>
        </Routes>


    </div>
  )
}
