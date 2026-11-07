"use strict";


const links = [
  {
    label: "explore katelyn codes",
    icon: "🎀",
    url: "https://katelynmccullough.github.io/katelyncodes/",
  },
  {
    label: "let's connect on linkedin",
    icon: "♡",
    url: "https://www.linkedin.com/in/katelynmccullough09",
  },
  {
    label: "stalk my github",
    icon: "⌘",
    url: "https://github.com/katelynmccullough",
  },
  {
    label: "find me on tiktok",
    icon: "♥",
    url: "https://www.tiktok.com/@katelyncodes",
  },
];

/**
 * Only permit HTTPS destinations.
 */
function isValidLink(link) {
  if (
    !link ||
    typeof link.label !== "string" ||
    typeof link.icon !== "string" ||
    typeof link.url !== "string"
  ) {
    return false;
  }

  try {
    const parsed = new URL(link.url);
    return parsed.protocol === "https:";
  } catch {
    return false;
  }
}

/**
 * Create a link using DOM methods instead of
 * injecting HTML strings.
 */
function createLink(link) {
  const item = document.createElement("li");
  const anchor = document.createElement("a");

  anchor.className = "link";
  anchor.href = link.url;
  anchor.target = "_blank";
  anchor.rel = "noopener noreferrer";

  const icon = document.createElement("span");
  icon.className = "symbol";
  icon.setAttribute("aria-hidden", "true");
  icon.textContent = link.icon;

  const label = document.createElement("span");
  label.textContent = link.label;

  const arrow = document.createElement("span");
  arrow.className = "arrow";
  arrow.setAttribute("aria-hidden", "true");
  arrow.textContent = "↗";

  anchor.append(icon, label, arrow);
  item.appendChild(anchor);

  return item;
}

/**
 * Render all valid links.
 */
function renderLinks() {
  const container = document.getElementById("links");

  if (!container) return;

  const fragment = document.createDocumentFragment();

  for (const link of links) {
    if (!isValidLink(link)) {
      console.warn("Invalid link skipped:", link);
      continue;
    }

    fragment.appendChild(createLink(link));
  }

  container.replaceChildren(fragment);
}

/**
 * Keep the copyright year current.
 */
function updateYear() {
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }
}

renderLinks();
updateYear();
