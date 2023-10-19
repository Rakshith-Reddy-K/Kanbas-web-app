import { Link } from "react-router-dom";
function LandingPage() {
  return (
    <div className="container">
      <h1>Assignment</h1>
      <div className="nav nav-pills">
        <Link to="/Kanbas" className="nav-link">
          Kanbas
        </Link>
        <Link to="/Labs" className="nav-link">
          Labs
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
