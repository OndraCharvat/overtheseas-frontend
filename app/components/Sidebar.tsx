import CountdownTimer from './CountdownTimer';
import ProgressBar from './ProgressBar';

const Sidebar = () => {
  const targetDate = '2025-06-15T00:00:00'; // Příklad cílového data
  const progress = 82.45; // Příklad progresu

  return (
    <div className="w-72 p-4 bg-gray-50 rounded-lg shadow-sm">
      <CountdownTimer targetDate={targetDate} />
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Aktuální stav procesu</h3>
        <ProgressBar progress={progress} />
      </div>
    </div>
  );
};

export default Sidebar;