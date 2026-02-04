import type { NextApiRequest, NextApiResponse } from "next";

const GOOGLE_SHEETS_WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycbzyB80FKLdS2U-609lZhwf_LrN3Xq_almp-bH5sMMX-1w14ztsqp802rbtp8mnR4XfB/exec";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const response = await fetch(GOOGLE_SHEETS_WEB_APP_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });

    const text = await response.text();
    if (!response.ok) {
      console.error("Sheets web app error:", response.status, text);
      return res.status(502).json({
        success: false,
        error: "Spreadsheet returned an error",
      });
    }
    try {
      const data = JSON.parse(text);
      if (data.success === false) {
        console.error("Sheets script error:", data.error);
        return res.status(502).json({
          success: false,
          error: data.error || "Spreadsheet script error",
        });
      }
    } catch (_) {
      // response might be plain text; treat as success
    }
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error sending data to Google Sheets:", error);
    return res.status(500).json({
      success: false,
      error: "Failed to save to spreadsheet",
    });
  }
}
