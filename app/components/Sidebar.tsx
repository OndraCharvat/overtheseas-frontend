// Sidebar.tsx
import CountdownTimer from './CountdownTimer';
import ProgressBar from './ProgressBar';

const Sidebar = () => {
  const targetDate = '2025-06-15T00:00:00';
  const progress = 50.00;

  return (
    <div className="w-full max-w-xs space-y-4 p-4">
      {/* Countdown Timer */}
      <CountdownTimer targetDate={targetDate} />
      
      {/* Progress Bar */}
      <div className="p-6 bg-white rounded-xl shadow-sm">
        <h3 className="text-base font-medium text-gray-800 mb-2">Aktuální stav procesu</h3>
        <ProgressBar progress={progress} />
      </div>
      
      {/* Profil studenta */}
      <div className="p-4 bg-white rounded-xl shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
              <path d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"></path>
              <path d="M20 19v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1c0-3.3 2.7-6 6-6h4c3.3 0 6 2.7 6 6z"></path>
            </svg>
            <span className="font-medium text-gray-800">Profil studenta</span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      
      {/* Dokumenty */}
      <div className="p-4 bg-white rounded-xl shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
            <span className="font-medium text-gray-800">Dokumenty</span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;