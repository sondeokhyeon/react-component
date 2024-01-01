import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <aside className="w-48 overflow-y-auto">
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <div>
          <h1> Component</h1>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/component/accordion"> Accodian</Link>
            </li>
            <li>
              <Link to="/component/star-rating"> StarRating</Link>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Navigation;
