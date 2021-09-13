import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Sidebar from "./components/Sidebar";
function App() {
  const position = [51.505, -0.09];
  return (
    <div>
      <Sidebar />
    </div>
  );
}

export default App;
