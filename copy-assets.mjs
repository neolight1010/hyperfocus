import { cpSync, mkdirSync } from "node:fs";

const assets = ["manifest.json", "pages", "lib"];

mkdirSync("build", { recursive: true });

for (const asset of assets) {
  cpSync(asset, `build/${asset}`, {
    recursive: true,
    force: false,
    errorOnExist: false,
    // Never copy TypeScript sources or overwrite compiled output.
    filter: (src) => !src.endsWith(".ts"),
  });
}
