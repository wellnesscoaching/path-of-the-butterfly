import React, { useState } from "react";

export default function WellnessCoachSite() {
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [showDrawer, setShowDrawer] = useState(null);

  return (
    <>
  

  <div
  style={{
    minHeight: "100vh",
    width: "100%",
    background: "linear-gradient(to bottom right, #e0e7ff, #f5f3ff)",
    fontFamily: "Georgia, serif",
    display: "block", // ✅ FIXED HERE
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
    width: "100%",
    minHeight: "300px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
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

  <h1
    style={{
      fontSize: "2.5rem",
      fontWeight: "bold",
      marginBottom: "0.5rem",
    }}
  >
    Wellness Coaching
  </h1>

  <div
    style={{
      position: "absolute",
      bottom: "1rem",
      right: "2rem",
      fontFamily: "'Dancing Script', cursive",
      fontSize: "1.3rem",
      color: "#fff",
      textShadow: "1px 1px 4px rgba(0, 0, 0, 0.6)",
      maxWidth: "90%",
    }}
  >
    Path of the Butterfly
  </div>
</header>

<div
  style={{
    position: "absolute",
    top: "auto",
    left: "1rem",
    marginTop: "3rem", // adds spacing below the banner
    zIndex: 800,
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "100px", // new
    paddingLeft: "1rem",
  }}
>
  <button
    onClick={() => setShowDrawer("practice")}
    style={{
      background: "none",
      border: "none",
      fontFamily: "Georgia, serif",
      fontSize: "1.1rem",
      color: "#888",
      textDecoration: "underline",
      textAlign: "left",
      cursor: "pointer",
    }}
  >
    Practice & Pricing
  </button>
  <button
    onClick={() => setShowDrawer("about")}
    style={{
      background: "none",
      border: "none",
      fontFamily: "Georgia, serif",
      fontSize: "1.1rem",
      color: "#888",
      textDecoration: "underline",
      textAlign: "left",
      cursor: "pointer",
    }}
  >
    About
  </button>
  <button
    onClick={() => setShowDrawer("book")}
    style={{
      background: "none",
      border: "none",
      fontFamily: "Georgia, serif",
      fontSize: "1.1rem",
      color: "#888",
      textDecoration: "underline",
      textAlign: "left",
      cursor: "pointer",
    }}
  >
    Book a Session
  </button>
</div>
<main style={{ flex: 1, paddingBottom: "2rem" }}>

{/* Slide-Out Drawer Panel */}
{showDrawer && (
  <div
    style={{
      position: "fixed",
      top: "0",
      left: "120px", // matches paddingLeft
      height: "100%",
      width: "calc(100% - 200px)",
      backgroundColor: "white",
      padding: "2rem",
      boxShadow: "2px 0 5px rgba(0,0,0,0.2)",
      zIndex: 600,
      overflowY: "auto",
    }}
  >
    <button
      onClick={() => setShowDrawer(null)}
      style={{
        background: "none",
        border: "none",
        fontFamily: "Georgia, serif",
        fontSize: "1rem",
        color: "#888",
        textDecoration: "underline",
        cursor: "pointer",
        marginBottom: "1rem",
      }}
    >
      ✕ Close
    </button>
    {showDrawer === "practice" && (
  <div>
    <h2
      style={{
        fontFamily: "'Dancing Script', cursive",
        fontSize: "1.8rem",
        fontWeight: "normal",
        color: "#4b0082",
        marginBottom: "1rem",
      }}
    >
      Practice & Pricing
    </h2>
    <p style={{ lineHeight: 1.6 }}>
      <strong>The Practice</strong><br /><br />
      The 3 Days / 3 Weeks / 3 Months model supported me on my own journey, and it's the framework I now use to help others make lasting change.<br /><br />

      <strong>3 days</strong> is the time it typically takes to reset a habit. If you can maintain a new behavior for just 3 days, your brain can begin to accept the idea of change.<br />
      <strong>3 weeks</strong> of practicing that behavior builds "muscle memory" for your brain — you're laying down a pattern.<br />
      <strong>3 months</strong> of sustained effort transforms that pattern into a habit. A true shift.<br /><br />

      This method takes time and intention — but you won’t be doing it alone. I’ll be here to support you with compassionate coaching every step of the way.<br /><br />

      We’ll begin with a 90-minute intake session, where I’ll get to know you and your wellness aspirations. Together, we’ll set meaningful goals and create a timeline to reach them.<br /><br />

      We’ll reconnect three days later for a 55-minute check-in to explore how the journey has begun.<br />
      After that, we’ll meet once per week for 55 minutes, over the course of three months. During these sessions, I’ll support you in staying aligned with your goals through personalized guidance, resources, and reflection.<br /><br />

      <strong>The Pricing</strong><br /><br />

      This 3-month coaching package includes:<br />
      • One 90-minute intake session<br />
      • Thirteen 55-minute weekly sessions<br /><br />

      <strong>Total Package Price: $580</strong><br />
      • The initial intake session is $60 and paid at the time of booking.<br />
      • The remaining sessions can be paid as you go: $40 per session.
    </p>
  </div>
)}



    {showDrawer === "about" && (
      <div>
        <h2
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: "1.8rem",
            fontWeight: "normal",
            color: "#4b0082",
            marginBottom: "1rem",
          }}
        >
          About
        </h2>
        <p style={{ lineHeight: 1.6 }}>
          [content coming soon.]
        </p>
      </div>
    )}

    {showDrawer === "book" && (
      <div>
        <h2
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: "1.8rem",
            fontWeight: "normal",
            color: "#4b0082",
            marginBottom: "1rem",
          }}
        >
          Book a Session
        </h2>
        <p style={{ lineHeight: 1.6 }}>
          Ready to begin your journey? Schedule a coaching session below.
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
    )}
  </div>
)}



        {/* Welcome Section */}
        <section style={{ padding: "2rem 1rem", textAlign: "center" }}>
        <div
  style={{
    width: "calc(100% - 200px)",  // subtract nav width
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
        color: "#4b0082",
      }}
    >
      Meet Your Coach
    </h2>

    <p style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
      Hi, I'm Selene. I work to support individuals in setting and achieving wellness goals.
      My background has prepared me to guide others with compassion, and cultural humility.
      I specialize in one-on-one, evidence-based coaching over video or phone that supports stress management,
      healthy habit formation, and promotes lifelong emotional well-being.
    </p>

    <ul
      style={{
        listStyle: "none",
        padding: 0,
        marginTop: "1rem",
        color: "#333",
        textAlign: "center",
      }}
    >
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
</main>
      </div>
      

    </>
  );
}
