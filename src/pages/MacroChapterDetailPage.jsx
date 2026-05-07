import { useParams, Navigate } from 'react-router-dom';
import TopBar from '../components/TopBar';
import '../styles/studiohub.css';

import Cap1 from './macro/Cap1_Macroeconomia';
import Cap2 from './macro/Cap2_DatiMacro';
import Cap3 from './macro/Cap3_RedditoNazionale';
import Cap4 from './macro/Cap4_SistemaMonetario';
import Cap5 from './macro/Cap5_Inflazione';
import Cap6 from './macro/Cap6_EconomiaAperta';
import Cap7 from './macro/Cap7_Disoccupazione';
import Cap8 from './macro/Cap8_Solow';
import Cap9 from './macro/Cap9_Crescita';
import Cap10 from './macro/Cap10_Evidenza';
import Cap11 from './macro/Cap11_CicloEconomico';
import Cap12 from './macro/Cap12_ISLM';
import Cap13 from './macro/Cap13_ApplicazioneISLM';
import Cap14 from './macro/Cap14_MundellFleming';
import Cap15 from './macro/Cap15_OffertaAggregata';
import Cap16 from './macro/Cap16_ModelloDinamico';
import Cap17 from './macro/Cap17_PoliticheStabilizzazione';

const COLOR = '#45ABD9';
const CAP_COMPONENTS = {
  1: Cap1, 2: Cap2, 3: Cap3, 4: Cap4, 5: Cap5, 6: Cap6, 7: Cap7,
  8: Cap8, 9: Cap9, 10: Cap10, 11: Cap11, 12: Cap12, 13: Cap13,
  14: Cap14, 15: Cap15, 16: Cap16, 17: Cap17,
};

export default function MacroChapterDetailPage() {
  const { num } = useParams();
  const capNum = parseInt(num, 10);
  const Component = CAP_COMPONENTS[capNum];

  if (!Component) return <Navigate to="/macro" replace />;

  return (
    <div className="studiohub-app">
      <TopBar
        title={`CAPITOLO ${capNum}`}
        color={COLOR}
        weight={600}
        showSearch={false}
      />
      <main className="studiohub-page">
        <div className="big-card">
          <div className="big-card-inner">
            <Component />
          </div>
        </div>
      </main>
    </div>
  );
}
