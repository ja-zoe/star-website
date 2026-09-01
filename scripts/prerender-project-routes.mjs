import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const DIST_DIR = path.resolve("dist");
const SITE_URL = (process.env.SITE_URL ?? "").replace(/\/$/, "");

const projects = [
  {
    route: "cubesat",
    title: "CubeSat — STAR",
    name: "CubeSat",
    eyebrow: "PROJECT 01 · SPICESAT",
    accent: "#F5A524",
    description:
      "STAR's CubeSat team is engineering Rutgers' first student-built satellite across eight technical subteams, with a mission focused on fuel slosh in microgravity.",
    tagline: [
      "Rutgers' first student-built satellite.",
      "Fuel-slosh science. Eight technical subteams.",
    ],
  },
  {
    route: "robotics",
    title: "Robotics — STAR",
    name: "Robotics",
    eyebrow: "PROJECT 02 · NASA LUNABOTICS",
    accent: "#34D399",
    description:
      "STAR's Robotics team builds an autonomous excavation rover for NASA Lunabotics across mechanical, electrical, and software subteams.",
    tagline: [
      "An autonomous excavation rover.",
      "Mechanical. Electrical. Software.",
    ],
  },
  {
    route: "weather-balloon",
    title: "Weather Balloon — STAR",
    name: "Weather Balloon",
    eyebrow: "PROJECT 03 · HIGH-ALTITUDE FLIGHT",
    accent: "#38BDF8",
    description:
      "STAR's Weather Balloon team develops recoverable high-altitude payloads, flight software, telemetry, and experiments for near-space conditions.",
    tagline: [
      "Student payloads for near-space conditions.",
      "Build. Launch. Track. Recover. Learn.",
    ],
  },
];

const escapeHtml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

const escapeXml = (value) => escapeHtml(value).replaceAll("'", "&apos;");

const replaceMeta = (html, attribute, key, content) => {
  const expression = new RegExp(`<meta\\s+${attribute}="${key}"[^>]*>`, "i");
  return html.replace(
    expression,
    `<meta ${attribute}="${key}" content="${escapeHtml(content)}" />`,
  );
};

const createShareCard = async (project) => {
  const outputDir = path.join(DIST_DIR, "og");
  await mkdir(outputDir, { recursive: true });
  const [lineOne, lineTwo] = project.tagline;
  const svg = `
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <rect width="1200" height="630" fill="#000000"/>
      <circle cx="1040" cy="70" r="280" fill="${project.accent}" opacity="0.10"/>
      <circle cx="1120" cy="590" r="390" fill="#9D2626" opacity="0.09"/>
      <path d="M0 430 C260 330 420 520 680 410 C900 315 1040 390 1200 320" fill="none" stroke="${project.accent}" stroke-width="44" opacity="0.25"/>
      <path d="M0 470 C220 370 490 525 720 455 C920 395 1050 430 1200 385" fill="none" stroke="#9D2626" stroke-width="20" opacity="0.24"/>
      <rect x="72" y="72" width="8" height="486" fill="${project.accent}"/>
      <text x="112" y="128" fill="${project.accent}" font-family="DejaVu Sans Mono, monospace" font-size="24" font-weight="700" letter-spacing="5">${escapeXml(project.eyebrow)}</text>
      <text x="112" y="270" fill="#ffffff" font-family="DejaVu Sans Mono, monospace" font-size="76" font-weight="700">${escapeXml(project.name)}</text>
      <text x="116" y="350" fill="#d4d4d4" font-family="DejaVu Sans Mono, monospace" font-size="28">${escapeXml(lineOne)}</text>
      <text x="116" y="396" fill="#a3a3a3" font-family="DejaVu Sans Mono, monospace" font-size="24">${escapeXml(lineTwo)}</text>
      <text x="112" y="530" fill="#ffffff" font-family="DejaVu Sans Mono, monospace" font-size="25" font-weight="700">STAR</text>
      <text x="204" y="530" fill="#8f8f8f" font-family="DejaVu Sans Mono, monospace" font-size="20">SPACE TECHNOLOGY ASSOCIATION OF RUTGERS</text>
      <path d="M1090 492 L1102 526 L1138 527 L1109 548 L1119 582 L1090 562 L1061 582 L1071 548 L1042 527 L1078 526 Z" fill="#9D2626"/>
    </svg>`;

  await sharp(Buffer.from(svg)).png().toFile(path.join(outputDir, `${project.route}.png`));
};

const baseHtml = await readFile(path.join(DIST_DIR, "index.html"), "utf8");

for (const project of projects) {
  const routePath = `/${project.route}`;
  const imagePath = `${SITE_URL}/og/${project.route}.png`;
  const canonicalUrl = `${SITE_URL}${routePath}`;
  let html = baseHtml.replace(/<title>[^<]*<\/title>/i, `<title>${escapeHtml(project.title)}</title>`);
  html = replaceMeta(html, "name", "description", project.description);
  html = replaceMeta(html, "property", "og:title", project.title);
  html = replaceMeta(html, "property", "og:description", project.description);
  html = replaceMeta(html, "property", "og:image", imagePath);
  html = replaceMeta(html, "name", "twitter:title", project.title);
  html = replaceMeta(html, "name", "twitter:description", project.description);
  html = replaceMeta(html, "name", "twitter:image", imagePath);
  html = html.replace(
    "</head>",
    `    <meta property="og:url" content="${canonicalUrl}" />\n  </head>`,
  );

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.description,
    url: canonicalUrl,
    isPartOf: {
      "@type": "Organization",
      name: "STAR — Space Technology Association of Rutgers",
    },
  };
  html = html.replace(
    "</head>",
    `    <link rel="canonical" href="${canonicalUrl}" />\n    <script type="application/ld+json">${JSON.stringify(projectJsonLd).replaceAll("<", "\\u003c")}</script>\n  </head>`,
  );
  html = html.replace(
    '<div id="root"></div>',
    `<div id="root"><noscript><main style="background:#000;color:#fff;min-height:100vh;padding:4rem;font-family:monospace"><h1>${escapeHtml(project.name)}</h1><p>${escapeHtml(project.description)}</p><p><a style="color:${project.accent}" href="/">Return to STAR</a></p></main></noscript></div>`,
  );

  await writeFile(path.join(DIST_DIR, `${project.route}.html`), html);
  await createShareCard(project);
}

if (SITE_URL) {
  const urls = ["/", ...projects.map((project) => `/${project.route}`)];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((route) => `  <url><loc>${SITE_URL}${route}</loc></url>`).join("\n")}\n</urlset>\n`;
  await writeFile(path.join(DIST_DIR, "sitemap.xml"), sitemap);
  const robotsPath = path.join(DIST_DIR, "robots.txt");
  const robots = await readFile(robotsPath, "utf8");
  await writeFile(robotsPath, `${robots.trim()}\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
}

console.log(`Generated ${projects.length} project HTML entries and share cards.`);
