const StatusCard = ({ trackingInfo }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'In Transit':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Exception':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Delivered':
        return '✅';
      case 'In Transit':
        return '🚚';
      case 'Exception':
        return '⚠️';
      default:
        return '📦';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-800">Shipment Status</h3>
        <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(trackingInfo.status)}`}>
          {getStatusIcon(trackingInfo.status)} {trackingInfo.status}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-1">Carrier</p>
          <p className="font-semibold text-gray-800">{trackingInfo.carrier}</p>
        </div>
        
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-1">Current Location</p>
          <p className="font-semibold text-gray-800">{trackingInfo.currentLocation}</p>
        </div>
        
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-1">
            {trackingInfo.status === 'Delivered' ? 'Delivered On' : 'Estimated Delivery'}
          </p>
          <p className="font-semibold text-gray-800">
            {trackingInfo.status === 'Delivered' 
              ? formatDate(trackingInfo.actualDelivery)
              : formatDate(trackingInfo.estimatedDelivery)
            }
          </p>
        </div>
      </div>

      {trackingInfo.exception && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
          <p className="text-sm text-red-800">
            <span className="font-semibold">Exception:</span> {trackingInfo.exception}
          </p>
        </div>
      )}

      <div className="mt-4 pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-600">
          <span className="font-semibold">Tracking Number:</span> {trackingInfo.trackingNumber}
        </p>
      </div>
    </div>
  );
};

export default StatusCard;
