import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Mouhamadou Kane · Data Analyst, Data Scientist et Expert Power BI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #f8f7f3 0%, #eaf2f3 100%)",
          color: "#17212b",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "54px 48px 48px 64px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              alignItems: "center",
              border: "1px solid #b6d9df",
              borderRadius: 999,
              background: "#e3f1f2",
              color: "#075f75",
              fontSize: 20,
              fontWeight: 700,
              padding: "11px 18px",
            }}
          >
            Disponible immédiatement
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                color: "#596b74",
                fontSize: 19,
                fontWeight: 700,
                letterSpacing: 3,
                marginBottom: 18,
              }}
            >
              DATA ANALYST · DATA SCIENTIST
            </div>
            <div
              style={{
                fontSize: 68,
                fontWeight: 750,
                letterSpacing: -3,
                lineHeight: 1.04,
              }}
            >
              Mouhamadou
            </div>
            <div
              style={{
                color: "#08758b",
                fontSize: 82,
                fontWeight: 750,
                letterSpacing: -4,
                lineHeight: 1.02,
              }}
            >
              Kane
            </div>
            <div
              style={{
                color: "#344650",
                fontSize: 28,
                fontWeight: 600,
                marginTop: 22,
              }}
            >
              Expert Power BI · Python · Machine Learning
            </div>
          </div>

          <div
            style={{
              color: "#58666e",
              fontSize: 20,
              fontWeight: 500,
            }}
          >
            SNCF Voyageurs · Keolis / Ilévia · Lille, France
          </div>
        </div>

        <div
          style={{
            display: "flex",
            width: 390,
            height: 630,
            overflow: "hidden",
            borderLeft: "7px solid #08758b",
          }}
        >
          <img
            src="https://mouhamadou-kane.vercel.app/profile.jpg"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 22%" }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
