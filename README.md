# 📦 Shipping Tracker Dashboard

A modern, responsive shipping tracking application built with React that mimics the functionality of popular shipping companies like FedEx, DHL, and Amazon.

## ✨ Features

- **🔍 Tracking Form**: Input tracking numbers to search for shipments
- **📊 Status Display**: Real-time shipment status with visual indicators
- **⏰ Timeline View**: Chronological timeline of shipment events
- **🗺️ Location Map**: Visual representation of current package location
- **🌙 Dark/Light Mode**: Toggle between UI themes for better UX
- **📱 Responsive Design**: Works seamlessly on desktop and mobile devices
- **⚡ Error Handling**: Graceful handling of invalid tracking numbers and errors

## 🚀 Tech Stack

- **Frontend**: React 19 with Hooks
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Mock Data**: Custom JSON data simulating real shipping APIs

## 📁 Project Structure

```
/shipping-tracker
│
├── public/
├── src/
│   ├── components/
│   │   ├── TrackingForm.jsx      # Input form for tracking numbers
│   │   ├── StatusCard.jsx        # Shipment status display
│   │   ├── Timeline.jsx          # Event timeline component
│   │   ├── MapView.jsx           # Location visualization
│   ├── data/
│   │   └── mockTrackingData.js   # Sample tracking data
│   ├── App.jsx                   # Main application component
│   ├── index.css                 # Global styles with Tailwind
│   └── main.jsx                  # Application entry point
├── tailwind.config.js            # Tailwind CSS configuration
├── postcss.config.js             # PostCSS configuration
└── package.json                  # Dependencies and scripts
```

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd shipping-tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Tailwind CSS (if not already installed)**
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   ```

4. **Initialize Tailwind CSS (if needed)**
   ```bash
   npx tailwindcss init -p
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:5173`

## 🧪 Sample Tracking Numbers

The application includes sample data for testing:

- **TRK123456789** (FedEx) - In Transit
- **DHL987654321** (DHL) - Delivered  
- **UPS456789123** (UPS) - Exception (Weather delay)

## 🎨 Customization

### Adding New Tracking Data
Edit `src/data/mockTrackingData.js` to add more sample tracking numbers and shipment information.

### Styling
- Modify `tailwind.config.js` for theme customization
- Update `src/index.css` for custom CSS classes
- Component-specific styles are inlined using Tailwind classes

### Components
Each component is modular and can be easily modified:
- `TrackingForm.jsx` - Form handling and validation
- `StatusCard.jsx` - Status display and formatting
- `Timeline.jsx` - Event timeline visualization
- `MapView.jsx` - Location display (currently emoji-based)

## 🔮 Future Enhancements

- **Real API Integration**: Connect to actual shipping company APIs
- **Interactive Maps**: Integrate with Google Maps or Leaflet.js
- **Push Notifications**: Real-time status updates
- **Multi-language Support**: Internationalization
- **Advanced Analytics**: Shipping performance metrics
- **Mobile App**: React Native version

## 📱 Responsive Design

The dashboard is fully responsive and optimized for:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🎯 Key Features Explained

### Status Tracking
- **In Transit**: Package is moving between facilities
- **Delivered**: Package has reached its destination
- **Exception**: Issues or delays in delivery

### Timeline Events
- **Completed**: Events that have finished
- **In Progress**: Currently happening events
- **Exception**: Events with issues or delays

### Dark Mode
Toggle between light and dark themes using the sun/moon button in the header.

## 🐛 Troubleshooting

### Common Issues

1. **Tailwind CSS not working**
   - Ensure `tailwind.config.js` and `postcss.config.js` exist
   - Check that `@tailwind` directives are in `src/index.css`
   - Restart the development server

2. **Components not rendering**
   - Check browser console for JavaScript errors
   - Verify all component files are properly imported
   - Ensure React version compatibility

3. **Styling issues**
   - Clear browser cache
   - Check Tailwind CSS installation
   - Verify PostCSS configuration

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Built with ❤️ using React and Tailwind CSS**
"# shipping-tracker" 
