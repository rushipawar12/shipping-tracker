import { useState } from 'react';

const TrackingForm = ({ onTrack, isLoading }) => {
  const [trackingNumber, setTrackingNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (trackingNumber.trim()) {
      onTrack(trackingNumber.trim());
    }
  };

  const handleGenerateRandom = () => {
    const carriers = ['TRK', 'DHL', 'UPS', 'USPS', 'AMZ'];
    const randomCarrier = carriers[Math.floor(Math.random() * carriers.length)];
    const randomNumbers = Math.random().toString().slice(2, 10);
    const randomTracking = `${randomCarrier}${randomNumbers}`;

    setTrackingNumber(randomTracking);
    onTrack(randomTracking);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Track Your Shipment
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="tracking" className="block text-sm font-medium text-gray-700 mb-2">
            Tracking Number
          </label>
          <input
            type="text"
            id="tracking"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            placeholder="Enter tracking number"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div className="space-y-2">
          <button
            type="submit"
            disabled={isLoading || !trackingNumber.trim()}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? 'Tracking...' : 'Track Package'}
          </button>

          <button
            type="button"
            onClick={handleGenerateRandom}
            disabled={isLoading}
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            🎲 Generate Random Tracking
          </button>
        </div>
      </form>

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600 mb-2">
          Try these sample tracking numbers:
        </p>
        <div className="space-y-1">
          <button
            onClick={() => onTrack('TRK123456789')}
            className="text-xs text-blue-600 hover:text-blue-800 underline block"
          >
            TRK123456789 (FedEx)
          </button>
          <button
            onClick={() => onTrack('DHL987654321')}
            className="text-xs text-blue-600 hover:text-blue-800 underline block"
          >
            DHL987654321 (DHL)
          </button>
          <button
            onClick={() => onTrack('UPS456789123')}
            className="text-xs text-blue-600 hover:text-blue-800 underline block"
          >
            UPS456789123 (UPS)
          </button>
        </div>

        <div className="mt-3 p-2 bg-blue-50 rounded-md">
          <p className="text-xs text-blue-800">
            💡 <strong>Pro tip:</strong> Try any tracking number format! Our mock API will generate realistic data for any input.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrackingForm;
