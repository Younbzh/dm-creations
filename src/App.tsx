import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Prestations from './pages/Prestations';
import Galerie from './pages/Galerie';
import VotreProjet from './pages/VotreProjet';
import Atelier from './pages/Atelier';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="prestations" element={<Prestations />} />
        <Route path="galerie" element={<Galerie />} />
        <Route path="votre-projet" element={<VotreProjet />} />
        <Route path="latelier" element={<Atelier />} />
      </Route>
    </Routes>
  );
}
