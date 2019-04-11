import { platform } from "os";

let getIcon: any;

if (platform() === 'win32') {
  getIcon = require("bindings")("addon");
}

const getFileIcon = (path: string): Buffer => {
  if (!getIcon) return;
  return getIcon(path);
};

export { getFileIcon };
