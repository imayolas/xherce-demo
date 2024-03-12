import { Hono } from "hono";
import { stream, streamText, streamSSE } from "hono/streaming";
import { FakeListLLM } from "langchain/llms/fake";
import { cors } from "hono/cors";
import { xherceLangchain } from "./xherceLangchain";
import { getOpenaiResponseBody } from "./utils";

const app = new Hono();
app.use("*", cors());

// Herce's langchain
app.post("/chat/completions", async (c) => {
  const body = await c.req.json();
  return streamSSE(c, async (stream) => {
    const context = {
      writeMessage: async (text: string) => {
        return await stream.writeSSE({
          data: JSON.stringify(getOpenaiResponseBody(text, false)),
        });
      },
      updateWaitingMessage: async (text: string) => {
        // Not implemented
        return await Promise.resolve();
      },
      sleep: async (time: number) => {
        new Promise((resolve) => {
          setTimeout(resolve, time);
        });
      },
    };
    await xherceLangchain(context, body);
    await stream.writeSSE({
      data: JSON.stringify(getOpenaiResponseBody("", true)),
    });
  });
});

export default app;
