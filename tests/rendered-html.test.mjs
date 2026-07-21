import assert from "node:assert/strict";
import { access } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the finished homepage with conservative claims", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Gregory General Contractors/);
  assert.match(html, /Built right\. Repaired with care\./);
  assert.match(html, /Oregon CCB #161158/);
  assert.match(html, /Illustrative 3D render/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|100% satisfaction|500\+ projects/i);
});

test("all public draft routes render", async () => {
  const routes = [
    "/about", "/accessibility", "/contact", "/estimate", "/faq",
    "/licensing", "/marketing-consent", "/photo-upload-privacy", "/privacy",
    "/process", "/projects", "/service-area", "/services", "/terms",
  ];

  for (const route of routes) {
    const response = await render(route);
    assert.equal(response.status, 200, `${route} should render successfully`);
  }
});

test("estimate form remains visibly disconnected and disabled", async () => {
  const response = await render("/estimate");
  const html = await response.text();
  assert.match(html, /Draft form/);
  assert.match(html, /not connected/);
  assert.match(html, /<button[^>]*disabled[^>]*>Request an Estimate<\/button>/i);
});

test("required original render assets are included", async () => {
  const assets = [
    "../public/concepts/pnw-home-renovation.webp",
    "../public/concepts/kitchen-remodel.webp",
    "../public/concepts/addition-structural.webp",
    "../public/concepts/deck-concrete.webp",
    "../public/og.png",
  ];
  await Promise.all(assets.map((asset) => access(new URL(asset, import.meta.url))));
});
