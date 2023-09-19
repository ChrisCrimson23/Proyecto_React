import Navbar from './components/navbar/Navbar';
import { Outlet } from 'react-router';
import Formulario from './components/form/Formulario';
import Videos from './components/videos/Videos';
import Opiniones from './components/opiniones/Opiniones';

function App() {
  return (
    <main>
      <Navbar />
      <Videos />
      <Opiniones />
      <section className='inicio'>
        <Outlet/>
      </section>
      <Formulario />
    </main>
  );
}

export default App;
