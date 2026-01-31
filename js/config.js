export const CONFIG = {
  BACKEND_BASE: "https://hookah-mix-bot-56x5.onrender.com",

  MASTER_ID: 1292778768,

  // 25 минут — песок
  DURATION_MS: 25 * 60 * 1000,

  // ссылка на жест/чаевые
  TIP_URL: "https://netmonet.co/qr/192937/tip?o=6",

  // зона допуска (пока используем твой адрес/дом)
  GEOFENCE: {
    lat: 56.519963,
    lon: 84.933527,
    radiusM: 40
  },

  // TTL допуска после гео (например 2 часа)
  GEO_TTL_MS: 2 * 60 * 60 * 1000,

  // громкость музыки по умолчанию
  MUSIC_VOLUME: 0.3
};