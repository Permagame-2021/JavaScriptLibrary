const https = require("https");

const HOST = "permagame.app.norsys.io";
const PORT = 443;
const SETTINGS_PATH = "/api/advancedInfos";
const ACTION_PATH = "/api/action";
const ACTION_LIST_PATH = "/api/actionList";
const STATE_PATH = "/api/state";
const PLANTS_PATH = "/api/plants";
const FAMILIES_PATH = "/api/plantFamilies";
const TOKEN =
  "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJEUEhvVWswek5KdnBqRFFWdjVSa3hkbDVRVU16TWc3RDQwUUFaanBMak1BIn0.eyJleHAiOjE2MzUyNTA2NjcsImlhdCI6MTYzMzk1NDY2OCwiYXV0aF90aW1lIjoxNjMzOTU0NjY3LCJqdGkiOiJmOGYwZDA5ZS00ZmI5LTQxNjgtOGRhYS1hYmUwYTFhMTkwNjIiLCJpc3MiOiJodHRwczovL3Blcm1hZ2FtZS5hcHAubm9yc3lzLmlvL2F1dGgvcmVhbG1zL3Blcm1hZ2FtZSIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiJkMTk2MjEzNy1jY2ZiLTRlYjctYWYwYy1jOTY4YmVjZGVhNmQiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJsb2dpbi1hcHAiLCJub25jZSI6ImJmY2U1MDNlLTJkNTQtNDc1My1iOGI5LTdmZDZmOWQ2OGEzYSIsInNlc3Npb25fc3RhdGUiOiIwNmNiNjllNi02NTI5LTQzYzctYTNhMy0xYzcyZjc2OTY3ZTUiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbIioiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbImRlZmF1bHQtcm9sZXMtcGVybWFnYW1lIiwib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiIsInBsYXllciJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInByZWZlcnJlZF91c2VybmFtZSI6ImxodWJlcnQiLCJlbWFpbCI6ImxodWJlcnRAbm9yc3lzLmZyIiwiZ3JvdXAiOiJBUlRJQ0hBVVQifQ.LyaCriAm8C6Wf_EDUCVm5V5k_j-_-3FanDMAy-R1SqBll1wLr6185DHeE3YWUExOV2VhOg1WydIa0q2cfMTdEaPU4nP6HiXI-VeKlItE9UN2zBnbriWq99vseOZRr3c-7EJIia_OvLv6cBn-VlZ5-WWRfMEcum9Bvv_QogJJBpqvUE4EqJn-d_fr8wRpxHPKC19eoVDFDRrAMGu0m4HcM2cVpjjKTinqaIgIzNq3v_tCBTE46MCc0B3csZcU6oNbzkFzQKyra96WAQ3P-g1gRZAvJhwGmY2Xvc_-L2b7AtXpnkWqQIr0b-WoCnpln7nsDzdupDkQ9yv76xJtjPVR5w";

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

function fetchGameSettings() {
  return requestFetch(SETTINGS_PATH);
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
  fetchGameSettings,
  fetchGameState,
  fetchActionList,
  fetchPlants,
  fetchFamilies,
  plant,
  harvest,
  fertilize,
};
