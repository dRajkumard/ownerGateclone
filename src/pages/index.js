import BodyComponent from "../Layout/dashboard";
import DiscoverProperty from "../Layout/DiscoverProperty";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import "./index.css";

function Dashboard() {
  return (
    <div className="App">
      <Header />
      <div className="dashboard">
        <BodyComponent />
        <DiscoverProperty />
        <Footer />
      </div>
    </div>
  );
}

export default Dashboard;
