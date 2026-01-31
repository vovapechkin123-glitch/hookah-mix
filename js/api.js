import { CONFIG } from "./config.js";

async function safeJson(r) {
  const text = await r.text();
  try {
    return JSON.parse(text);
  } catch {
    return { ok: false, raw: text };
  }
}

export const api = {
  async ping() {
    const r = await fetch(`${CONFIG.BACKEND_BASE}/`);
    return r.ok;
  },

  async getMoments(limit = 200) {
    const r = await fetch(`${CONFIG.BACKEND_BASE}/moments?limit=${limit}`);
    const data = await safeJson(r);
    if (!r.ok) throw new Error(`GET /moments failed: ${r.status}`);
    return data;
  },

  async createMoment(moment) {
    const r = await fetch(`${CONFIG.BACKEND_BASE}/moment`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(moment)
    });
    const data = await safeJson(r);
    if (!r.ok) throw new Error(`POST /moment failed: ${r.status}`);
    return data;
  },

  async setMomentStatus(id, status) {
    const r = await fetch(`${CONFIG.BACKEND_BASE}/moment/${id}/status`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status })
    });
    const data = await safeJson(r);
    if (!r.ok) throw new Error(`PATCH /moment/:id/status failed: ${r.status}`);
    return data;
  },

  async setMomentRating(id, rating) {
    const r = await fetch(`${CONFIG.BACKEND_BASE}/moment/${id}/rating`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ rating })
    });
    const data = await safeJson(r);
    if (!r.ok) throw new Error(`PATCH /moment/:id/rating failed: ${r.status}`);
    return data;
  }
};