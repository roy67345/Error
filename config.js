//GIFTED-MD//
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "ngoyaibraah@gmail.com";
global.location = "Bumgoma,Kenya";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://giftedte:SER3spXjIJSOwrPT@cluster0.ni61idp.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgres://giftedtech:ZMIkfrL3rHsvmfyGboVXKkeyoM0FPl6z@dpg-cpp83jlds78s73e39m10-a.oregon-postgres.render.com/giftedtech";
global.BUTTONS = process.env.BUTTON_MODE || "1";
global.timezone = process.env.TIME_ZONE || process.env.TIME_ZONE || "Africa/Nairobi";
global.github = process.env.GITHUB || "https://github.com/ibrahimaitech/BLACK-PANTHER-XMD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaZuGSxEawdxZK9CzM0Y";
global.website = process.env.GURL || "https://youtube.com/@ibrahimaitech";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c5b2b527a08a0b21392e0.jpg";
global.devs = "254739937062,254710772666";
global.sudo = process.env.SUDO_NUMBERS || "2560706608131";
global.sudo = process.env.SUDO || "2560706608131";
global.owner = process.env.OWNER_NUMBER || "2560706608131";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 5;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.MENU_VIDEOS || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/9e038e5890def3cc7aca7.jpg";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "254739937062,254710772666";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "254739937062,254710772666";

global.api_smd = "https://api-smd.onrender.com";
global.scan = "https://whatsapp.com/channel/0029VaZuGSxEawdxZK9CzM0Y";

global.SESSION_ID = "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib01rcXY5Y3YvZldjb0pMSkJKdXk5R0JidkE5YzVITXhZZ25DS1R1WDhFcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieitlQjRkMGtaUnZlb0d6UVFqUUwyVWJFUmd5Ulc5T1VLUVVHQzMrNDRHdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzT251Q21qNWxaZmJnOEFOdHptYUtHajlMNU5iZjRhNmxTZUthaWt1SjI4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0M3FzSS9MWUM0ZTJPNXRjbU9XakdJeWViTXkvUHhCVmcwUUVvVngvczFrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1NeE8wYkU1a29aV213RndieFBIbmkzeXMzWGY5Tll5SkxXOUhNREJOSDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJreWJPL05KT2gxTzZZc25Hb2JVSURva0lXMUgzL1VwcTdESldZaGpnQUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUZYVFRsL2Vac0FOeFNsMjhXeG5KLzF4Y2ZLZU01LzVpemhwV3hMVXExTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUlXTnZIVG81MWVucEVjMFh2eUNtQWo5dUxYQjZRd2d4NzA5SldlKzlUcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InIvdlpnZ0ZjY0t4aVZMWU5IUzhuRWQwYzFWdER4NmZOMmlDc255dmdERURTTXBTTVZ1Y3B4cWN6ekZRUGtzQjcyWkRuTFZWOS9qWWRTZCtmcjR4dmdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIsImFkdlNlY3JldEtleSI6InZ1VFZ5cWdsYndQSDZ1amh2WVVLUi8zSXZ6R2FGY0V3V3BQQ2Z5WldUSXc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InBmWERSN2lHVEItT0l2cmtCT3lWZ0EiLCJwaG9uZUlkIjoiYTJiMzA0MWQtMzE4NC00N2FhLTg2NTctYWJlNmU3ODM0N2U5IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWaDl4WWZZczVCQkdFWHlSMHdSY3Q3aWgxVT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWeVVoUEpKNkNjWnZpSzhNNVQ3cFJYNWZacGc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUUExRTlOTFIiLCJtZSI6eyJpZCI6IjI1NjcwNjYwODEzMToyN0BzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS1B3aStvREVNelBsTFVHR0FzZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiL2h3ck9KYlo2cS9EUzVCWXppR2pZbzIwSzVKMWM5eUt0L3N3dllTUkNBTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiOU52TTdKbHhGd20rT1dUaENwQUxKYWxCRFQ4bVEwWkZ6RzBPL2F4VWwzQTJ1cUhKaVJreFVBR2ZQNmxVRTQ2VkF1ZVpLa29jMURkbC9UYWhUcFZkQWc9PSIsImRldmljZVNpZ25hdHVyZSI6IklMQzIxeDVOUTRYb09EQmRlVFNPWUQ2MjJnc1pVelJSUVpVSE1BdFpPU3dGdkRndWI5Qm9aYmpVbUtWQXRNVmh5V3B2NUtoYzhmTWZ5MGU3b3JjV2pRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU2NzA2NjA4MTMxOjI3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmY0Y0t6aVcyZXF2dzB1UVdNNGhvMktOdEN1U2RYUGNpcmY3TUwyRWtRZ0QifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjIwOTk2NzV9"
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0c5bU9hUVo0SEowOXBrTWU4ZDZXSG9GaU5mU2JzWEVhWEhkN2FxbGwwcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaWxlLzRBdlJmU3BmSVYzblk0RjBVMlQ2eGc1ZW1XYjhXczQ1bWcrTHBYaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJQ1hiN2dCak92TDhDSWxlVlVCcmJUU3crSnlZNlQ1elMxR0xONjNvNmw0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0OENoVGw5SmpZQWluYkgvQlVjWEc4OEl4VXp6bkFpQURDUytVSTNJL2pFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitPNDBzZXMxRExuSmpsYWhNSzdMWERVNk5ZU21BZXJXb1FYV1dYNE9yMFk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBJc21NY2V0RUJMZEt1eWdmSWZMcFhZbXZVRm8xd1JRandiRC9vM0drRW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUZ5ajlxUzdHVENZUmw0VVJES1FqMXgvempxWXFiUnMyMUNyTU1GMEsxWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUZ0N1p1UHVxRzZUUTRxSGZ0VHdycXdneTBOZElYREtZUDZHemptQjFHcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFLTlF0UGgweEJMcDhlcGxmZERQQTBxa003MU9XN0tpTHYySmJ0dWVnL0hwYmh4VzJwOGlDOWlZU21vN0plekFhajhmK0FsSVdKbEVBdGp1dWNHRUJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzgsImFkdlNlY3JldEtleSI6IkRPV3lVVWNRMmF2Wjk2R0lCMHZVRGtnbSt3SzhTVDFOZVc1cytPSGUyZlk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImM1anhXU09tUlhDcXBGRVNibk84MkEiLCJwaG9uZUlkIjoiYzJmMmU5YTctZjc3OC00OGU1LWFmOTgtZTdmMzYxMDZiMjBlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVvUk1GWmtMWWZiMk44UTVKRU9FTnNrUTBnZz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKNE5KU1g5SFB3NFRoK2NzVUwzWkpCL1FQaW89In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMkFYREQ1NUoiLCJtZSI6eyJpZCI6IjI1NDcxMDc3MjY2NjozQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IklicmFoaW0gQWRhbXMifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xyYi9hMEhFSjNnaWJVR0dBY2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlFPL29MWHlPYTB5Y2FVZmd3dnA5Y1pyZ2VKUmp0LzBTbTdZQVhjV3pUU2M9IiwiYWNjb3VudFNpZ25hdHVyZSI6InNCbHp6aFdubnlqaW1HdXVYUXM5b3JYUTF2cnhRa2lOUlJVbUZyRzA2Mm5ZdFEwMmtKOENzYWI5NWNTUHFOdUlmNUNSTHFMOElTV05xMml2Ymdha0RBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJNL0Fka3FiTXdxY2pNT2pSdU1rdzM0UUUxQzhkMTJhZjJDZ1RINThYT2pFN0FwdmhKQm5MYnduMW1EeGdxYUJPYWFYYnZxcWM5VnMxTUJzSnlrWHpCZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDcxMDc3MjY2NjozQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVEdjZDMThqbXRNbkdsSDRNTDZmWEdhNEhpVVk3ZjlFcHUyQUYzRnMwMG4ifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjE5MjE1NzksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQWRSIn0="
module.exports = {
  menu: process.env.MENU_STYLE || "G1", /*Leave it in Default else bot will Crash*/
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "4.0.0",
  caption: process.env.CAPTION ||"ROY",
  author: process.env.STICKER_AUTHOR || "roy-the-boy",
  packname: process.env.STICKER_NAME || "🐯",
  botname: process.env.BOT_NAME || "roy-bot",
  ownername: process.env.OWNER_NAME || "ROY",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "ADAM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});


