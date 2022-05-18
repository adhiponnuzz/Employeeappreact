import logo from './logo.svg';
import './App.css';

function App() {
  return (

    <>
    
    <BrowserRouter>
    <Routes>

      <Route path="/" exact element={<Empregister/>}/>
      <Route path="/search" exact element={<Search/>}/>
      <Route path="/view" exact element={<View/>}/>

      




    </Routes>
    
    
    
    
    
    
    </BrowserRouter>
    
    </>

  );
}

export default App;
