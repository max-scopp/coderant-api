import fetch from "node-fetch";
import * as fs from "fs";

async function fetchSchema() {
  const response = await fetch("http://localhost:6969/-json");
  const jsonSpec = await response.json();

  fs.writeFileSync("swagger-spec.json", JSON.stringify(jsonSpec, null, 4));
}

fetchSchema();
