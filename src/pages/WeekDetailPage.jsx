import { useParams, Navigate } from 'react-router-dom';
import TopBar from '../components/TopBar';
import '../styles/studiohub.css';

import Week1 from './Week1';
import Week2 from './Week2';
import Week3 from './Week3';
import Week4 from './Week4';
import Week5 from './Week5';
import Week6 from './Week6';
import Week8 from './Week8';
import Week9 from './Week9';
import Week10 from './Week10';
import Week11 from './Week11';
import Week12 from './Week12';

const COLOR = '#7251B5';
const WEEK_COMPONENTS = {
  1: Week1, 2: Week2, 3: Week3, 4: Week4, 5: Week5, 6: Week6,
  8: Week8, 9: Week9, 10: Week10, 11: Week11, 12: Week12,
};

export default function WeekDetailPage() {
  const { weekNum } = useParams();
  const num = parseInt(weekNum, 10);
  const Component = WEEK_COMPONENTS[num];

  if (!Component) return <Navigate to="/egi" replace />;

  return (
    <div className="studiohub-app">
      <TopBar
        title={`WEEK ${num}`}
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
