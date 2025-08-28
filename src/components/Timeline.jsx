const Timeline = ({ timeline }) => {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return '✅';
      case 'in-progress':
        return '🔄';
      case 'exception':
        return '⚠️';
      default:
        return '⏳';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'in-progress':
        return 'bg-blue-500';
      case 'exception':
        return 'bg-red-500';
      default:
        return 'bg-gray-400';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-6">Shipment Timeline</h3>
      
      <div className="space-y-6">
        {timeline.map((event, index) => (
          <div key={event.id} className="relative">
            {index < timeline.length - 1 && (
              <div className="absolute left-6 top-8 w-0.5 h-16 bg-gray-200"></div>
            )}
            
            <div className="flex items-start space-x-4">
              <div className={`flex-shrink-0 w-12 h-12 rounded-full ${getStatusColor(event.status)} flex items-center justify-center text-white text-lg`}>
                {getStatusIcon(event.status)}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-medium text-gray-900">{event.event}</h4>
                  <span className="text-sm text-gray-500">{event.timestamp}</span>
                </div>
                <p className="text-gray-600 mt-1">
                  📍 {event.location}
                </p>
                
                <div className="mt-2">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    event.status === 'completed' ? 'bg-green-100 text-green-800' :
                    event.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                    event.status === 'exception' ? 'bg-red-100 text-red-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {event.status === 'completed' ? 'Completed' :
                     event.status === 'in-progress' ? 'In Progress' :
                     event.status === 'exception' ? 'Exception' :
                     'Pending'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
