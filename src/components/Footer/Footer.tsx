export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ textAlign: "center", padding: "2rem", color: "var(--text-muted)" }}>
      <p>
        © {year} Nelson Geovetty — Full Stack Developer
      </p>
    </footer>
  );
}
