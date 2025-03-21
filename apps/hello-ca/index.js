import { app } from "@azure/functions";

app.get("Info", async () => ({
  status: 200,
  jsonBody: {
    message: "Hello from hello-ca",
  },
}));
