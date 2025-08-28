import { useState, useEffect } from 'react';
import TrackingForm from './components/TrackingForm';
import StatusCard from './components/StatusCard';
import Timeline from './components/Timeline';
import MapView from './components/MapView';
import { getTrackingInfo, getTrackingStats, getAllTrackingNumbers } from './data/mockTrackingData';
import './App.css';

function App() {
  const [trackingInfo, setTrackingInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [stats, setStats] = useState(null);
  const [allTrackingNumbers, setAllTrackingNumbers] = useState([]);

  useEffect(() => {
    setStats(getTrackingStats());
    setAllTrackingNumbers(getAllTrackingNumbers());
  }, []);

  const handleTrack = async (trackingNumber) => {
    setIsLoading(true);
    setError(null);
    
    setTimeout(() => {
      const info = getTrackingInfo(trackingNumber);
      
      if (info) {
        setTrackingInfo(info);
        setStats(getTrackingStats());
        setAllTrackingNumbers(getAllTrackingNumbers());
      } else {
        setError('Tracking number not found. Please check and try again.');
        setTrackingInfo(null);
      }
      
      setIsLoading(false);
    }, 1000);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <header className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                📦 Shipping Tracker
              </h1>
            </div>
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <TrackingForm onTrack={handleTrack} isLoading={isLoading} />
            
            {error && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md">
                <p className="text-red-800 text-center">{error}</p>
              </div>
            )}

            {stats && (
              <div className="mt-6 bg-white rounded-lg shadow-md p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">📊 Tracking Statistics</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Trackings:</span>
                    <span className="font-semibold text-gray-800">{stats.total}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">In Transit:</span>
                    <span className="font-semibold text-blue-600">{stats.statusCounts['In Transit'] || 0}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Delivered:</span>
                    <span className="font-semibold text-green-600">{stats.statusCounts['Delivered'] || 0}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Exceptions:</span>
                    <span className="font-semibold text-red-600">{stats.statusCounts['Exception'] || 0}</span>
                  </div>
                  <div className="pt-2 border-t border-gray-200">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Carriers:</span>
                      <span className="font-semibold text-gray-800">{stats.carriers.length}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-3 pt-3 border-t border-gray-200">
                  <p className="text-xs text-gray-600 mb-2">Recent Trackings:</p>
                  <div className="space-y-1">
                    {allTrackingNumbers.slice(-3).map((trackingNumber) => (
                      <button
                        key={trackingNumber}
                        onClick={() => handleTrack(trackingNumber)}
                        className="text-xs text-blue-600 hover:text-blue-800 underline block text-left"
                      >
                        {trackingNumber}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-2">
            {isLoading && (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                <p className="mt-4 text-gray-600">Tracking your package...</p>
              </div>
            )}

            {trackingInfo && !isLoading && (
              <div className="space-y-6">
                <StatusCard trackingInfo={trackingInfo} />
                
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                  <Timeline timeline={trackingInfo.timeline} />
                  <MapView 
                    currentLocation={trackingInfo.currentLocation} 
                    carrier={trackingInfo.carrier} 
                  />
                </div>
              </div>
            )}

            {!trackingInfo && !isLoading && !error && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📦</div>
                <h3 className="text-xl font-medium text-gray-600 mb-2">
                  Ready to track your package?
                </h3>
                <p className="text-gray-500 mb-4">
                  Enter a tracking number or generate a random one to get started
                </p>
                <div className="text-sm text-gray-400">
                  <p>💡 Our mock API generates realistic shipping data for any tracking number!</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-t mt-12`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className={`text-center text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            🚀 Built with React & Tailwind CSS | Mock API Shipping Tracker Dashboard
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
