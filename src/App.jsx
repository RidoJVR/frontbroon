
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import IndexPublish from './components/Publishes/IndexPublish'
import ShowPublish from './components/Publishes/ShowPublish';
import StorePublish from './components/Publishes/StorePublish';

import UpdatePublish from './components/Publishes/UpdatePublish';


function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <IndexPublish/> } />
        <Route path='/publicaciones' element={ <ShowPublish/> } />
        <Route path='/crear_publicacion' element={ <StorePublish/> } />

        <Route path='/subir_img' element={ <UpdatePublish/> } />


      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
