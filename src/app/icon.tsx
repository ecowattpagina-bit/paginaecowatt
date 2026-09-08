import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
  const logo = await readFile(join(process.cwd(), "public/logo-ecowatt.png"));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#003d68",
          borderRadius: 7,
        }}
      >
        <img
          src={`data:image/png;base64,${logo.toString("base64")}`}
          width={28}
          height={19}
          alt=""
        />
      </div>
    ),
    size
  );
}
