const https = require("https");

const HOST = "permagame.app.norsys.io";
const PORT = 443;
const ACTION_PATH = "/api/action";
const ACTION_LIST_PATH = "/api/actionList";
const STATE_PATH = "/api/state";
const PLANTS_PATH = "/api/plants";
const FAMILIES_PATH = "/api/plantFamilies";
const TOKEN = "your token here";

function requestFetch(path) {
  return new Promise((resolve, reject) => {
    let data = "";
    const req = https.request(
      {
        host: HOST,
        port: PORT,
        path: path,
        method: "GET",
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      },
      (res) => {
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => {
          try {
            resolve(JSON.parse(data));
          } catch (e) {
            reject(e);
          }
        });
        res.on("error", (error) => reject(error));
      }
    );
    req.on("error", (error) => reject(error));
    req.end();
  });
}

function requestPost(path, data) {
  return new Promise((resolve, reject) => {
    const req = https.request({
      host: HOST,
      port: PORT,
      path: path,
      method: "POST",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
        "Content-Length": data.length,
      },
    });
    req.on("error", (error) => reject(error));
    req.on("close", () => resolve());
    req.write(data);
    req.end();
  });
}

function fetchGameState() {
  return requestFetch(STATE_PATH);
}

function fetchActionList() {
  return requestFetch(ACTION_LIST_PATH);
}

function fetchPlants() {
  return requestFetch(PLANTS_PATH);
}

function fetchFamilies() {
  return requestFetch(FAMILIES_PATH);
}

function doAction(action) {
  const stringAction = JSON.stringify(action);
  return requestPost(ACTION_PATH, stringAction);
}

function plant(line, column, plantType) {
  return doAction({
    action: "plant",
    column,
    line,
    plantType,
  });
}

function harvest(line, column) {
  return doAction({
    action: "harvest",
    column,
    line,
  });
}

function fertilize(line, column) {
  return doAction({
    action: "fertilize",
    column,
    line,
  });
}

module.exports = {
  fetchGameState,
  fetchActionList,
  fetchPlants,
  fetchFamilies,
  plant,
  harvest,
  fertilize,
};
