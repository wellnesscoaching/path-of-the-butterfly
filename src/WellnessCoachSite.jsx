import React, { useState } from "react";

export default function WellnessCoachSite() {
  const [date, setDate] = useState(new Date());

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#000", color: "#fff", fontFamily: "sans-serif" }}>
      <header style={{ backgroundColor: "#4c1d95", padding: "1.5rem" }}>
        <h1 style={{ fontSize: "2.5rem", color: "#fff", fontWeight: "bold" }}>Wellness Coaching</h1>
        <p style={{ color: "#d8b4fe", fontStyle: "italic", fontSize: "1rem" }}>Path of the Butterfly</p>
      </header>

      <main style={{ padding: "1.5rem", display: "grid", gap: "2rem" }}>
        <section style={{ backgroundColor: "#6b21a8", borderRadius: "1rem", padding: "1.5rem" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Monarch_Butterfly_Life_Stages.jpg/320px-Monarch_Butterfly_Life_Stages.jpg"
              alt="Chrysalis to Butterfly"
              style={{ width: "200px", height: "auto", marginBottom: "1rem", borderRadius: "0.5rem" }}
            />
            <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem" }}>Welcome</h2>
            <p style={{ textAlign: "center", maxWidth: "600px" }}>
              Welcome to a space for transformation and growth. At Path of the Butterfly,
              I offer heart-centered coaching rooted in healing and empowerment.
              Like the butterfly, I believe in the potential for metamorphosis—
              no matter the distance or difficulty.
            </p>
          </div>
        </section>

        <section style={{ backgroundColor: "#6b21a8", borderRadius: "1rem", padding: "1.5rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem" }}>Meet Your Coach</h2>
          <p style={{ maxWidth: "600px" }}>
            I work to support individuals in setting and achieving wellness goals.
            My background has prepared me to guide others with compassion, and cultural humility.
            I specialize in one-on-one, evidence-based coaching that supports stress management,
            healthy habit formation, and promotes lifelong emotional well-being.
          </p>
        </section>

        <section style={{ backgroundColor: "#6b21a8", borderRadius: "1rem", padding: "1.5rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem" }}>Book an Appointment</h2>
          <div style={{ maxWidth: "400px", margin: "0 auto", backgroundColor: "#7c3aed", padding: "1rem", borderRadius: "0.5rem" }}>
            <p style={{ marginBottom: "0.5rem", color: "#e0e7ff" }}>
              Ready to take the next step? Select a date to request your discovery call or coaching session.
            </p>
            <button style={{ marginTop: "1rem", width: "100%", backgroundColor: "#fff", color: "#6b21a8", padding: "0.5rem", borderRadius: "0.25rem" }}>
              Schedule My Session
            </button>
          </div>
        </section>
      </main>

      <footer style={{ textAlign: "center", fontSize: "0.875rem", color: "#9ca3af", padding: "1rem" }}>
        © {new Date().getFullYear()} Path of the Butterfly. All rights reserved.
      </footer>
    </div>
  );
}
