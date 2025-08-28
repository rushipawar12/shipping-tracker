const MapView = ({ currentLocation, carrier }) => {
  const getLocationEmoji = (location) => {
    if (location.includes('New York')) return '🗽';
    if (location.includes('Chicago')) return '🏙️';
    if (location.includes('Los Angeles')) return '🌴';
    if (location.includes('Miami')) return '🌴';
    if (location.includes('Seattle')) return '🌲';
    if (location.includes('Houston')) return '🌆';
    return '📍';
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Current Location</h3>
      
      <div className="bg-gray-100 rounded-lg p-6 text-center">
        <div className="text-6xl mb-4">
          {getLocationEmoji(currentLocation)}
        </div>
        
        <h4 className="text-lg font-medium text-gray-900 mb-2">
          {currentLocation}
        </h4>
        
        <p className="text-gray-600 mb-4">
          Package is currently at this location
        </p>
        
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
          🚚 {carrier}
        </div>
      </div>
      
      <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
        <p className="text-sm text-blue-800 text-center">
          💡 <strong>Pro tip:</strong> Enable location services for real-time tracking updates
        </p>
      </div>
    </div>
  );
};

export default MapView;
