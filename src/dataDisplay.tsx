import { useFetch } from "./useFetch";

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function DataDisplay() {
  const { data, loading, error } = useFetch<Post[]>(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <p>⏳ Loading data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: "center", padding: "20px", color: "red" }}>
        <p>❌ Error: {error}</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h2>📡 Fetched Posts</h2>
      <p style={{ color: "#666" }}>Using custom useFetch hook</p>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {data?.map((post) => (
          <li
            key={post.id}
            style={{
              padding: "12px",
              margin: "8px 0",
              border: "1px solid #ddd",
              borderRadius: "8px",
            }}
          >
            <h4 style={{ margin: "0 0 5px 0" }}>{post.title}</h4>
            <p style={{ margin: 0, color: "#666", fontSize: "0.9rem" }}>
              {post.body.substring(0, 80)}...
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
