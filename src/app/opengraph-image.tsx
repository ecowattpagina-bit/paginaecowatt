import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Ecowatt Chile — Asesoría en ingeniería y construcción";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logo = await readFile(join(process.cwd(), "public/logo-ecowatt.png"));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #003d68 0%, #00558f 55%, #1a7ab8 100%)",
        }}
      >
        <img
          src={`data:image/png;base64,${logo.toString("base64")}`}
          width={520}
          height={347}
          alt=""
        />
        <div
          style={{
            marginTop: 28,
            color: "#ffffff",
            fontSize: 34,
            fontWeight: 700,
            letterSpacing: -0.4,
          }}
        >
          Asesoría en ingeniería y construcción
        </div>
        <div
          style={{
            marginTop: 10,
            color: "#fbb03b",
            fontSize: 22,
            fontWeight: 600,
          }}
        >
          Chillán y Ñuble
        </div>
      </div>
    ),
    size
  );
}
