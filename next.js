export default function Page() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>VARTO IS NOT OWNERLESS</h1>

      <div style={{ position: "relative", width: "100%", paddingTop: "56.25%" }}>
        <iframe
          src="https://www.canva.com/design/DAHFykP1eTU/rUs_Lj-AUpWJsbf_RKA89w/view?embed"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "none",
          }}
          allowFullScreen
        />
      </div>

      <a
        href="https://canva.link/ljbxul2t1wjlkyt"
        target="_blank"
        style={{
          display: "inline-block",
          marginTop: "15px",
          padding: "10px 16px",
          background: "#00c4cc",
          color: "#000",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Open in Canva
      </a>
    </div>
  );
}
