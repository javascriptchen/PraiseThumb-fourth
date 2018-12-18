import path from "path";

const CONFIG = new Map();
CONFIG.set("port", 3000);
CONFIG.set("viewDir", path.join(__dirname, "..", "views"));
CONFIG.set("staticDir", path.join(__dirname, ".."));// 因为webpack把public路径写上了，所以这边改下

export default CONFIG;