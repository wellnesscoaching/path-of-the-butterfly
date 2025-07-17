import React, { useState } from "react";

export default function WellnessCoachSite() {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  return (
    <>
      <div
  style={{
    background: "linear-gradient(to bottom right, #e0e7ff, #f5f3ff)",
    minHeight: "100vh",
    paddingBottom: "2rem",
    fontFamily: "Georgia, serif",
  }}
>

        {/* Banner */}
        <header
  style={{
    backgroundImage: "url('/lavender-pic.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "3rem 1rem",
    color: "#fff",
    position: "relative",
  }}
>
  {/* Name in upper left corner */}
  <div
  style={{
    position: "absolute",
    top: "1rem",
    left: "1rem",
    fontFamily: "'Dancing Script', cursive",
    fontSize: "1.75rem",
    color: "#fff",
    textShadow: "1px 1px 4px rgba(0, 0, 0, 0.6)",
  }}
>
  Selene Lockerbie
</div>



  <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "0.5rem", textAlign: "center" }}>
    Wellness Coaching
  </h1>
  <div
  style={{
    position: "absolute",
    bottom: "1rem",
    right: "1rem",
    fontFamily: "'Dancing Script', cursive",
    fontSize: "1.3rem",
    color: "#fff",
    textShadow: "1px 1px 4px rgba(0, 0, 0, 0.6)",
  }}
>
  Path of the Butterfly
</div>



</header>


        {/* Welcome Section */}
        <section style={{ padding: "2rem 1rem", textAlign: "center" }}>
        <div
  style={{
    width: "90%",
    maxWidth: "800px",
    margin: "0 auto",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    padding: "1.25rem",
    borderRadius: "0.5rem",
  }}
>


<h2
  style={{
    fontSize: "2rem",
    fontWeight: "500",
    marginBottom: "1rem",
    fontFamily: "'Dancing Script', cursive",
    color: "#4b0082"  // Optional: rich soft purple
  }}
>
  Welcome
</h2>

            <p style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
              Welcome to a space for transformation and growth. As your Wellness Coach,
              I offer specialized coaching rooted in holistic healing and empowerment that lead to a healthier and happier life.
              Like the butterfly, I believe in the potential for metamorphosis—
              no matter the distance or difficulty.
            </p>
          </div>
        </section>

        {/* Meet Your Coach */}
        <section style={{ padding: "2rem 1rem", textAlign: "center" }}>
        <div
  style={{
    width: "90%",
    maxWidth: "800px",
    margin: "0 auto",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    padding: "1.25rem",
    borderRadius: "0.5rem",
  }}
>

<img
  src="https://i.imgur.com/kYAmjmu.jpeg"
  alt="Your Wellness Coach"
  style={{
    width: "180px",
    height: "180px",
    objectFit: "cover",
    objectPosition: "bottom",

    borderRadius: "50%",
    marginBottom: "1rem",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  }}
/>

<h2
  style={{
    fontSize: "2rem",
    fontWeight: "500",
    marginBottom: "1rem",
    fontFamily: "'Dancing Script', cursive",
    color: "#4b0082"  // Optional: match Welcome heading
  }}
>
  Meet Your Coach
</h2>

            <p style={{ maxWidth: "600px", margin: "0 auto" }}>
  Hi, I'm Selene. I work to support individuals in setting and achieving wellness goals.
  My background has prepared me to guide others with compassion, and cultural humility.
  I specialize in one-on-one, evidence-based coaching over video or phone that supports stress management,
  healthy habit formation, and promotes lifelong emotional well-being.
</p>

<ul style={{ listStyle: "none", padding: 0, marginTop: "1rem", color: "#333" }}>
  <li style={{ paddingBottom: "0.5rem" }}>🦋 Stress & anxiety support</li>
  <li style={{ paddingBottom: "0.5rem" }}>🦋 Healthy routines & habits</li>
  <li style={{ paddingBottom: "0.5rem" }}>🦋 Lifestyle modifications</li>
  <li style={{ paddingBottom: "0.5rem" }}>🦋 Ongoing support and guidance</li>
  <li style={{ paddingBottom: "0.5rem" }}>🦋 Remote sessions via video or phone</li>
</ul>




          </div>
        </section>

        {/* Book Appointment */}
        <section style={{ padding: "2rem 1rem", textAlign: "center" }}>
        <div
  style={{
    width: "90%",
    maxWidth: "800px",
    margin: "0 auto",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    padding: "1.25rem",
    borderRadius: "0.5rem",
  }}
>


<h2
  style={{
    fontSize: "2rem",
    fontWeight: "500",
    marginBottom: "1rem",
    fontFamily: "'Dancing Script', cursive",
    color: "#4b0082"  // Optional: keep style consistent
  }}
>
  Book an Appointment
</h2>

            <p style={{ maxWidth: "600px", margin: "0 auto" }}>
              Ready to begin your journey? Schedule a coaching session using the button below.
            </p>
            <a
  href="https://calendly.com/zenfem/new-meeting"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    display: "inline-block",
    marginTop: "1.5rem",
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
    backgroundColor: "#7e22ce",
    color: "white",
    textDecoration: "none",
    border: "none",
    borderRadius: "0.5rem",
    cursor: "pointer",
  }}
>
  
  Book Now
</a>

          </div>
        </section>
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
  <button
    onClick={() => setShowDisclaimer(true)}
    style={{
      background: "none",
      border: "none",
      fontFamily: "Georgia, serif",
      fontSize: "0.9rem",
      color: "#888",
      textDecoration: "underline",
      cursor: "pointer"
    }}
  >
    Disclaimer
  </button>
</div>
{showDisclaimer && (
  <div
    onClick={() => setShowDisclaimer(false)}
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0,0,0,0.6)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000
    }}
  >
    <div
      onClick={(e) => e.stopPropagation()}
      style={{
        background: "white",
        padding: "2rem",
        borderRadius: "1rem",
        maxWidth: "600px",
        fontFamily: "Georgia, serif",
        color: "#333",
        lineHeight: 1.5,
        boxShadow: "0 4px 8px rgba(0,0,0,0.3)"
      }}
    >
      <h3 style={{ marginTop: 0, color: "#6b21a8" }}>Disclaimer</h3>
      <p>
        This website offers general wellness information and coaching services intended to support personal development, empowerment, and lifestyle goals.
        It is not a substitute for medical advice, diagnosis, or treatment. Wellness coaching is not therapy or mental health care. No guarantees of specific
        outcomes are made.
        <br /><br />
        Always consult a licensed medical or mental health professional for clinical concerns or emergencies.
        By using this site, you agree to these terms.
      </p>
      <div style={{ textAlign: "right", marginTop: "1.5rem" }}>
        <button
          onClick={() => setShowDisclaimer(false)}
          style={{
            backgroundColor: "#6b21a8",
            color: "white",
            border: "none",
            padding: "0.5rem 1rem",
            borderRadius: "0.5rem",
            fontFamily: "Georgia, serif",
            cursor: "pointer"
          }}
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}

      </div>
    </>
  );
}
