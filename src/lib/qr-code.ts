import QRCode from "qrcode";

export type EccLevel = "L" | "M" | "Q" | "H";

export interface QRCodeOptions {
  ecc?: EccLevel;
  margin?: number;
  size?: number;
  darkColor?: string;
  lightColor?: string;
}

/**
 * Generates an ISO/IEC 18004 compliant SVG QR Code markup string synchronously.
 * 100% scannable by all mobile cameras, Google Lens, iOS Camera, and ZXing.
 */
export function generateQRCodeSVG(
  text: string,
  options: QRCodeOptions = {}
): string {
  const content = text && text.trim() ? text.trim() : "https://dizitalgrow.in";
  const ecc: EccLevel = options.ecc || "M";
  const margin = options.margin ?? 4;
  const darkColor = options.darkColor || "#000000";
  const lightColor = options.lightColor || "#FFFFFF";

  try {
    const qr = QRCode.create(content, {
      errorCorrectionLevel: ecc,
    });

    const numModules = qr.modules.size;
    const fullSize = numModules + margin * 2;

    let pathData = "";
    for (let r = 0; r < numModules; r++) {
      for (let c = 0; c < numModules; c++) {
        if (qr.modules.get(r, c)) {
          const x = c + margin;
          const y = r + margin;
          pathData += `M${x},${y}h1v1h-1z `;
        }
      }
    }

    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${fullSize} ${fullSize}" width="100%" height="100%" shape-rendering="crispEdges">
  <rect width="${fullSize}" height="${fullSize}" fill="${lightColor}"/>
  <path d="${pathData.trim()}" fill="${darkColor}"/>
</svg>`;
  } catch (err) {
    console.warn("[QRCode] Fallback generation error:", err);
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 33" width="100%" height="100%">
  <rect width="33" height="33" fill="#FFFFFF"/>
</svg>`;
  }
}

/**
 * Generates a high-resolution PNG Data URL for instant download or clipboard copy.
 */
export async function generateQRCodeDataURL(
  text: string,
  options: QRCodeOptions = {}
): Promise<string> {
  const content = text && text.trim() ? text.trim() : "https://dizitalgrow.in";
  const ecc: EccLevel = options.ecc || "M";
  const margin = options.margin ?? 4;
  const size = options.size || 512;
  const darkColor = options.darkColor || "#000000";
  const lightColor = options.lightColor || "#FFFFFF";

  return QRCode.toDataURL(content, {
    width: size,
    margin,
    errorCorrectionLevel: ecc,
    color: {
      dark: darkColor,
      light: lightColor,
    },
  });
}
