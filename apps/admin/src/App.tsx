export default function App() {
  return (
    <main style={{ fontFamily: "system-ui, sans-serif", padding: 32, maxWidth: 900, margin: "0 auto", color: "#332923" }}>
      <p style={{ color: "#8c4356", letterSpacing: 2, fontSize: 12, fontWeight: 700 }}>CUSTOMIZECOM · OPERATIONS</p>
      <h1>Admin dashboard scaffold</h1>
      <p>The admin workspace is initialized. Catalogue management, inventory, packaging rules, pricing, order processing, and role-based access will be implemented in later milestones.</p>
      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12, marginTop: 28 }}>
        {["Products & categories", "Inventory", "Packaging options", "Orders & fulfilment"].map((item) => (
          <div key={item} style={{ border: "1px solid #e8dcd2", background: "#fffdfa", borderRadius: 12, padding: 18 }}>
            <strong>{item}</strong>
            <p style={{ color: "#766b64", fontSize: 13 }}>Planned module</p>
          </div>
        ))}
      </section>
    </main>
  );
}
