const carriers = [
  { name: 'Blue Dart', prefix: 'BD', format: 'BD########' },
  { name: 'DTDC', prefix: 'DT', format: 'DT########' },
  { name: 'Delhivery', prefix: 'DV', format: 'DV########' },
  { name: 'India Post', prefix: 'IP', format: 'IP#######' },
  { name: 'Ecom Express', prefix: 'EE', format: 'EE########' },
  { name: 'Flipkart', prefix: 'FK', format: 'FK########' },
  { name: 'Amazon India', prefix: 'AI', format: 'AI########' },
  { name: 'Shiprocket', prefix: 'SR', format: 'SR########' }
];

const locations = [
  'Mumbai, Maharashtra', 'Delhi, Delhi', 'Bengaluru, Karnataka', 'Hyderabad, Telangana',
  'Chennai, Tamil Nadu', 'Kolkata, West Bengal', 'Pune, Maharashtra', 'Ahmedabad, Gujarat',
  'Jaipur, Rajasthan', 'Surat, Gujarat', 'Lucknow, Uttar Pradesh', 'Kanpur, Uttar Pradesh',
  'Nagpur, Maharashtra', 'Indore, Madhya Pradesh', 'Bhopal, Madhya Pradesh', 'Visakhapatnam, Andhra Pradesh',
  'Patna, Bihar', 'Vadodara, Gujarat', 'Ludhiana, Punjab', 'Coimbatore, Tamil Nadu',
  'Agra, Uttar Pradesh', 'Nashik, Maharashtra', 'Kochi, Kerala', 'Guwahati, Assam',
  'Chandigarh, Chandigarh', 'Mysuru, Karnataka', 'Bhubaneswar, Odisha', 'Raipur, Chhattisgarh'
];

const shippingEvents = [
  'Shipment booked',
  'Picked up from sender',
  'Reached sorting hub',
  'In transit to destination city',
  'Arrived at destination hub',
  'Out for delivery',
  'Delivered successfully',
  'Delivery attempted - recipient unavailable',
  'Held at local office',
  'Customs clearance in progress',
  'Weather delay - monsoon',
  'Vehicle breakdown',
  'Package damaged in transit',
  'Recipient not available',
  'Address verification required',
  'Festival delay',
  'RTO (Return to Origin) initiated'
];

const generateTrackingNumber = (carrier) => {
  const numbers = Math.random().toString().slice(2, 10);
  return `${carrier.prefix}${numbers}`;
};

const generateRandomDate = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const randomTime = start.getTime() + Math.random() * (end.getTime() - start.getTime());
  return new Date(randomTime);
};

const generateTimeline = (status, startLocation, endLocation) => {
  const timeline = [];
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - Math.floor(Math.random() * 7) - 1);
  
  let currentDate = new Date(startDate);
  let currentLocation = startLocation;
  
  timeline.push({
    id: 1,
    event: 'Shipment booked',
    location: startLocation,
    timestamp: currentDate.toLocaleString('en-IN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      timeZone: 'Asia/Kolkata'
    }),
    status: 'completed'
  });
  
  currentDate.setHours(currentDate.getHours() + Math.floor(Math.random() * 4) + 1);
  
  timeline.push({
    id: 2,
    event: 'Picked up from sender',
    location: startLocation,
    timestamp: currentDate.toLocaleString('en-IN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      timeZone: 'Asia/Kolkata'
    }),
    status: 'completed'
  });
  
  currentDate.setHours(currentDate.getHours() + Math.floor(Math.random() * 6) + 2);
  
  timeline.push({
    id: 3,
    event: 'Reached sorting hub',
    location: startLocation,
    timestamp: currentDate.toLocaleString('en-IN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      timeZone: 'Asia/Kolkata'
    }),
    status: 'completed'
  });
  
  currentDate.setDate(currentDate.getDate() + Math.floor(Math.random() * 2) + 1);
  
  timeline.push({
    id: 4,
    event: 'In transit to destination city',
    location: startLocation,
    timestamp: currentDate.toLocaleString('en-IN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      timeZone: 'Asia/Kolkata'
    }),
    status: 'completed'
  });
  
  currentDate.setDate(currentDate.getDate() + Math.floor(Math.random() * 3) + 1);
  
  timeline.push({
    id: 5,
    event: 'Arrived at destination hub',
    location: endLocation,
    timestamp: currentDate.toLocaleString('en-IN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      timeZone: 'Asia/Kolkata'
    }),
    status: 'completed'
  });
  
  if (status === 'Delivered') {
    currentDate.setHours(currentDate.getHours() + Math.floor(Math.random() * 8) + 2);
    timeline.push({
      id: 6,
      event: 'Out for delivery',
      location: endLocation,
      timestamp: currentDate.toLocaleString('en-IN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        timeZone: 'Asia/Kolkata'
      }),
      status: 'completed'
    });
    
    currentDate.setHours(currentDate.getHours() + Math.floor(Math.random() * 4) + 1);
    timeline.push({
      id: 7,
      event: 'Delivered successfully',
      location: endLocation,
      timestamp: currentDate.toLocaleString('en-IN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        timeZone: 'Asia/Kolkata'
      }),
      status: 'completed'
    });
  } else if (status === 'In Transit') {
    currentDate.setHours(currentDate.getHours() + Math.floor(Math.random() * 8) + 2);
    timeline.push({
      id: 6,
      event: 'Out for delivery',
      location: endLocation,
      timestamp: currentDate.toLocaleString('en-IN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        timeZone: 'Asia/Kolkata'
      }),
      status: 'in-progress'
    });
  } else if (status === 'Exception') {
    const exceptions = ['Weather delay - monsoon', 'Festival delay', 'Address verification required', 'Customs clearance in progress', 'Vehicle breakdown'];
    const randomException = exceptions[Math.floor(Math.random() * exceptions.length)];
    
    timeline.push({
      id: 6,
      event: randomException,
      location: endLocation,
      timestamp: currentDate.toLocaleString('en-IN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        timeZone: 'Asia/Kolkata'
      }),
      status: 'exception'
    });
  }
  
  return timeline;
};

const generateShippingData = () => {
  const carrier = carriers[Math.floor(Math.random() * carriers.length)];
  const trackingNumber = generateTrackingNumber(carrier);
  const startLocation = locations[Math.floor(Math.random() * locations.length)];
  let endLocation = locations[Math.floor(Math.random() * locations.length)];
  
  
  while (endLocation === startLocation) {
    endLocation = locations[Math.floor(Math.random() * locations.length)];
  }
  
  const statusOptions = [
    { status: 'In Transit', weight: 0.5 },
    { status: 'Delivered', weight: 0.3 },
    { status: 'Exception', weight: 0.2 }
  ];
  
  const random = Math.random();
  let cumulativeWeight = 0;
  let selectedStatus = 'In Transit';
  
  for (const option of statusOptions) {
    cumulativeWeight += option.weight;
    if (random <= cumulativeWeight) {
      selectedStatus = option.status;
      break;
    }
  }
  
  const estimatedDelivery = generateRandomDate(new Date(), new Date(Date.now() + 7 * 24 * 60 * 60 * 1000));
  
  const shippingData = {
    trackingNumber,
    status: selectedStatus,
    estimatedDelivery: estimatedDelivery.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }),
    currentLocation: endLocation,
    carrier: carrier.name,
    timeline: generateTimeline(selectedStatus, startLocation, endLocation)
  };
  
  if (selectedStatus === 'Delivered') {
    shippingData.actualDelivery = estimatedDelivery.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  }
  
  if (selectedStatus === 'Exception') {
    const exceptions = ['Weather delay - monsoon', 'Festival delay', 'Address verification required', 'Customs clearance in progress'];
    shippingData.exception = exceptions[Math.floor(Math.random() * exceptions.length)];
  }
  
  return shippingData;
};

const generateMultipleTrackingNumbers = (count = 10) => {
  const data = {};
  for (let i = 0; i < count; i++) {
    const shippingData = generateShippingData();
    data[shippingData.trackingNumber] = shippingData;
  }
  return data;
};

export const mockTrackingData = {
  ...generateMultipleTrackingNumbers(5),
  "BD12345678": {
    trackingNumber: "BD12345678",
    status: "In Transit",
    estimatedDelivery: "28/08/2025",
    currentLocation: "Bengaluru, Karnataka",
    carrier: "Blue Dart",
    timeline: [
      {
        id: 1,
        event: "Shipment booked",
        location: "Mumbai, Maharashtra",
        timestamp: "25/08/2025, 10:30 AM",
        status: "completed"
      },
      {
        id: 2,
        event: "Picked up from sender",
        location: "Mumbai, Maharashtra",
        timestamp: "25/08/2025, 02:15 PM",
        status: "completed"
      },
      {
        id: 3,
        event: "Reached sorting hub",
        location: "Mumbai, Maharashtra",
        timestamp: "25/08/2025, 08:45 PM",
        status: "completed"
      },
      {
        id: 4,
        event: "In transit to destination city",
        location: "Mumbai, Maharashtra",
        timestamp: "26/08/2025, 06:00 AM",
        status: "completed"
      },
      {
        id: 5,
        event: "Arrived at destination hub",
        location: "Bengaluru, Karnataka",
        timestamp: "27/08/2025, 11:20 AM",
        status: "completed"
      },
      {
        id: 6,
        event: "Out for delivery",
        location: "Bengaluru, Karnataka",
        timestamp: "28/08/2025, 09:00 AM",
        status: "in-progress"
      }
    ]
  }
};

export const getTrackingInfo = (trackingNumber) => {
  if (mockTrackingData[trackingNumber]) {
    return mockTrackingData[trackingNumber];
  }
  
  const newData = generateShippingData();
  newData.trackingNumber = trackingNumber;
  mockTrackingData[trackingNumber] = newData;
  
  return newData;
};

export const generateNewTrackingNumber = () => {
  const newData = generateShippingData();
  mockTrackingData[newData.trackingNumber] = newData;
  return newData;
};

export const getAllTrackingNumbers = () => {
  return Object.keys(mockTrackingData);
};

export const searchByCarrier = (carrierName) => {
  return Object.values(mockTrackingData).filter(
    data => data.carrier.toLowerCase().includes(carrierName.toLowerCase())
  );
};

export const getTrackingStats = () => {
  const total = Object.keys(mockTrackingData).length;
  const statusCounts = {};
  
  Object.values(mockTrackingData).forEach(data => {
    statusCounts[data.status] = (statusCounts[data.status] || 0) + 1;
  });
  
  return {
    total,
    statusCounts,
    carriers: [...new Set(Object.values(mockTrackingData).map(data => data.carrier))]
  };
};


export const getDeliveryTimeByDistance = (startLocation, endLocation) => {

  const sameState = startLocation.split(', ')[1] === endLocation.split(', ')[1];
  const metros = ['Mumbai', 'Delhi', 'Bengaluru', 'Chennai', 'Kolkata', 'Hyderabad'];
  const isMetroToMetro = metros.some(city => startLocation.includes(city)) && 
                          metros.some(city => endLocation.includes(city));
  
  if (sameState) return '1-2 days';
  if (isMetroToMetro) return '2-3 days';
  return '3-5 days';
};

export const getCODStatus = (trackingNumber) => {
  
  const codStatuses = ['COD Collected', 'COD Pending', 'Prepaid', 'COD Failed'];
  return codStatuses[Math.floor(Math.random() * codStatuses.length)];
};

export const getServiceType = () => {
  const services = ['Express', 'Standard', 'Economy', 'Same Day', 'Next Day'];
  return services[Math.floor(Math.random() * services.length)];
};