import { BrowserRouter, Routes, Route } from 'react-router-dom';

import StudioHubHome from './pages/StudioHubHome';
import EGIHub from './pages/EGIHub';
import MacroHub from './pages/MacroHub';
import MacroSectionPage from './pages/MacroSectionPage';
import MacroChapterDetailPage from './pages/MacroChapterDetailPage';
import WeekDetailPage from './pages/WeekDetailPage';
import PlaceholderPage from './pages/PlaceholderPage';
import SimulazioniEGIHub from './pages/SimulazioniEGIHub';
import SimulazioneEGIDetail from './pages/SimulazioneEGIDetail';
import SimulazioniMacroHub from './pages/SimulazioniMacroHub';
import SimulazioneMacroDetail from './pages/SimulazioneMacroDetail';

import './index.css';
import './styles/studiohub.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StudioHubHome />} />

        {/* EGI */}
        <Route path="/egi" element={<EGIHub />} />
        <Route path="/egi/week/:weekNum" element={<WeekDetailPage />} />

        {/* Macroeconomia */}
        <Route path="/macro" element={<MacroHub />} />
        <Route path="/macro/:section" element={<MacroSectionPage />} />
        <Route path="/macro/:section/cap/:num" element={<MacroChapterDetailPage />} />

        {/* Placeholders */}
        <Route
          path="/matematica-finanziaria"
          element={<PlaceholderPage title="Matematica Finanziaria" color="#7DB85B" />}
        />
        <Route
          path="/pianificazione-controllo"
          element={<PlaceholderPage title="Pianificazione e Controllo" color="#FDB828" />}
        />

        {/* Simulazioni EGI */}
        <Route path="/simulazioni-egi" element={<SimulazioniEGIHub />} />
        <Route path="/simulazioni-egi/:category/:id" element={<SimulazioneEGIDetail />} />

        {/* Simulazioni Macro */}
        <Route path="/simulazioni-macro" element={<SimulazioniMacroHub />} />
        <Route path="/simulazioni-macro/:id" element={<SimulazioneMacroDetail />} />

        {/* Catch-all back to home */}
        <Route path="*" element={<StudioHubHome />} />
      </Routes>
    </BrowserRouter>
  );
}
