import express from "express";
import fetch from "node-fetch";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", async (req, res) => {
  try {
    await fetch("https://n8n-t3ii.onrender.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ triggeredBy: "cron-job.org" }),
    });

    res.send("OK");
  } catch (err) {
    console.error("n8n trigger failed: ", err);
    res.status(500).send("Failed");
  }
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
