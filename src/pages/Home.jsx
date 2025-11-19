import { Link } from "react-router-dom";
import  Movies from "../Data/Movie";

function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Galerie</h1>

      <div style={{ display: "flex", gap: "20px" }}>
        {Movies.map((item) => (
          <Link
            key={item.id}
            to={`/details/${item.id}`}
            style={{
              width: "200px",
              textDecoration: "none",
              color: "black",
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "10px",
              cursor: "pointer",
            }}
          >
            <img src={item.image} alt={item.name} style={{ width: "100%", borderRadius: "8px" }} />
            <h3>{item.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
