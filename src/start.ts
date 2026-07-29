import { createStart, createMiddleware } from "@tanstack/react-start";

const errorPage = `<!doctype html><html lang="en"><head><meta charset="utf-8"/><title>Something went wrong</title></head><body><p>Something went wrong. <a href="/">Go home</a></p></body></html>`;

const errorMiddleware = createMiddleware().server(async ({ next }) => {
  try {
    return await next();
  } catch (error) {
    if (error != null && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error(error);
    return new Response(errorPage, {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
});

export const startInstance = createStart(() => ({
  requestMiddleware: [errorMiddleware],
}));
