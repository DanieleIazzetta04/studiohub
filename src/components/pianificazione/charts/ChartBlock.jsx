import CVPChart from './CVPChart'
import { FixedCostChart, VariableCostChart } from './CostBehaviorChart'
import ABCChart from './ABCChart'
import EVAChart from './EVAChart'
import PerformanceChain from '../diagrams/PerformanceChain'
import StakeholderDiagram from '../diagrams/StakeholderDiagram'
import BSCDiagram from '../diagrams/BSCDiagram'
import StrategyMapDiagram from '../diagrams/StrategyMapDiagram'
import BudgetProcessDiagram from '../diagrams/BudgetProcessDiagram'
import BudgetCycleDiagram from '../diagrams/BudgetCycleDiagram'
import BudgetSettorialiDiagram from '../diagrams/BudgetSettorialiDiagram'
import TopDownBottomUpDiagram from '../diagrams/TopDownBottomUpDiagram'

export default function ChartBlock({ chart }) {
  if (chart.type === 'cvp') return <CVPChart defaults={chart.defaults} />
  if (chart.type === 'fixed-cost') return <FixedCostChart />
  if (chart.type === 'variable-cost') return <VariableCostChart />
  if (chart.type === 'abc') return <ABCChart />
  if (chart.type === 'eva') return <EVAChart />
  if (chart.type === 'performance-chain') return <PerformanceChain />
  if (chart.type === 'stakeholder') return <StakeholderDiagram />
  if (chart.type === 'bsc') return <BSCDiagram />
  if (chart.type === 'strategy-map') return <StrategyMapDiagram />
  if (chart.type === 'budget-process') return <BudgetProcessDiagram />
  if (chart.type === 'budget-cycle') return <BudgetCycleDiagram />
  if (chart.type === 'budget-settoriali') return <BudgetSettorialiDiagram />
  if (chart.type === 'top-down-bottom-up') return <TopDownBottomUpDiagram />
  return null
}
