"use client";

import { useMemo, useState } from "react";

type Glyph = readonly string[];
type Cell = "M" | "C" | "B" | "P" | "E";

const PANEL_WIDTH = 49;
const PANEL_HEIGHT = 29;
const MAX_TEXT_WIDTH = 45;
const LINE_START_ROWS = [2, 11, 20];

const COLORS: Record<Cell, string> = {
  M: "#0A0F1E",
  C: "#E6D9B8",
  B: "#4FC3F7",
  P: "#6B5CA5",
  E: "#E1A84A",
};

const FONT: Record<string, Glyph> = {
  A: ["MCCM", "CMMC", "CMMC", "CCCC", "CMMC", "CMMC", "CMMC"],
  B: ["CCCCM", "CMMMC", "CMMMC", "CCCCM", "CMMMC", "CMMMC", "CCCCM"],
  C: ["MCCCC", "CMMMM", "CMMMM", "CMMMM", "CMMMM", "CMMMM", "MCCCC"],
  D: ["CCCCCM", "CMMMMC", "CMMMMC", "CMMMMC", "CMMMMC", "CMMMMC", "CCCCCM"],
  E: ["CCCCC", "CMMMM", "CMMMM", "CCCCM", "CMMMM", "CMMMM", "CCCCC"],
  F: ["CCCCC", "CMMMM", "CMMMM", "CCCCM", "CMMMM", "CMMMM", "CMMMM"],
  G: ["MCCCCC", "CMMMMM", "CMMMMM", "CMMCCC", "CMMMMC", "CMMMMC", "MCCCCC"],
  H: ["CMMMC", "CMMMC", "CMMMC", "CCCCC", "CMMMC", "CMMMC", "CMMMC"],
  I: ["C", "C", "C", "C", "C", "C", "C"],
  J: ["MMMMC", "MMMMC", "MMMMC", "MMMMC", "CMMMC", "CMMMC", "MCCCM"],
  K: ["CMMMC", "CMMCM", "CMCCM", "CCMMM", "CMCCM", "CMMCM", "CMMMC"],
  L: ["CMMMM", "CMMMM", "CMMMM", "CMMMM", "CMMMM", "CMMMM", "CCCCC"],
  M: ["CMMMMC", "CCMMCC", "CMCCMC", "CMMMMC", "CMMMMC", "CMMMMC", "CMMMMC"],
  N: ["CMMMMC", "CCMMMC", "CMCMMC", "CMMCMC", "CMMMCC", "CMMMMC", "CMMMMC"],
  O: ["MCCCCM", "CMMMMC", "CMMMMC", "CMMMMC", "CMMMMC", "CMMMMC", "MCCCCM"],
  P: ["CCCCM", "CMMMC", "CMMMC", "CCCCM", "CMMMM", "CMMMM", "CMMMM"],
  Q: ["MCCCCM", "CMMMMC", "CMMMMC", "CMMMMC", "CMMCMC", "CMMMCM", "MCCCCM"],
  R: ["CCCCM", "CMMMC", "CMMMC", "CCCCM", "CMCCM", "CMMCM", "CMMMC"],
  S: ["CCCCC", "CMMMM", "CMMMM", "CCCCM", "MMMMC", "MMMMC", "CCCCC"],
  T: ["CCCCC", "MMCMM", "MMCMM", "MMCMM", "MMCMM", "MMCMM", "MMCMM"],
  U: ["CMMMC", "CMMMC", "CMMMC", "CMMMC", "CMMMC", "CMMMC", "MCCCM"],
  V: ["CMMMC", "CMMMC", "CMMMC", "CMMMC", "CMMMC", "MCMMM", "MMCCM"],
  W: ["CMMMMC", "CMMMMC", "CMMMMC", "CMMMMC", "CMCCMC", "CCMMCC", "CMMMMC"],
  X: ["CMMMC", "MCMMM", "MMCCM", "MMCCM", "MMCCM", "MCMMM", "CMMMC"],
  Y: ["CMMMC", "MCMMM", "MMCCM", "MMCCM", "MMCCM", "MMCCM", "MMCCM"],
  Z: ["CCCCC", "MMMMC", "MMMCM", "MMCCM", "MCMMM", "CMMMM", "CCCCC"],
  "0": ["MCCCCM", "CMMMMC", "CMMMCC", "CMMCMC", "CCMMMC", "CMMMMC", "MCCCCM"],
  "1": ["C", "C", "C", "C", "C", "C", "C"],
  "2": ["CCCCC", "MMMMC", "MMMMC", "CCCCC", "CMMMM", "CMMMM", "CCCCC"],
  "3": ["CCCCC", "MMMMC", "MMMMC", "CCCCC", "MMMMC", "MMMMC", "CCCCC"],
  "4": ["CMMMC", "CMMMC", "CMMMC", "CCCCC", "MMMMC", "MMMMC", "MMMMC"],
  "5": ["CCCCC", "CMMMM", "CMMMM", "CCCCC", "MMMMC", "MMMMC", "CCCCC"],
  "6": ["CCCCC", "CMMMM", "CMMMM", "CCCCC", "CMMMC", "CMMMC", "CCCCC"],
  "7": ["CCCCC", "MMMMC", "MMMCM", "MMCCM", "MCMMM", "MCMMM", "MCMMM"],
  "8": ["CCCCC", "CMMMC", "CMMMC", "CCCCC", "CMMMC", "CMMMC", "CCCCC"],
  "9": ["CCCCC", "CMMMC", "CMMMC", "CCCCC", "MMMMC", "MMMMC", "CCCCC"],
  " ": ["MMM", "MMM", "MMM", "MMM", "MMM", "MMM", "MMM"],
  "-": ["MMM", "MMM", "MMM", "CCC", "MMM", "MMM", "MMM"],
  ".": ["M", "M", "M", "M", "M", "M", "C"],
  "!": ["C", "C", "C", "C", "C", "M", "C"],
  "?": ["CCCCM", "MMMMC", "MMMCM", "MMCCM", "MMCCM", "MMMMM", "MMCCM"],
  "'": ["C", "C", "M", "M", "M", "M", "M"],
  "&": ["MCCMM", "CMMCM", "CMMCM", "MCCMM", "CMCMC", "CMMCM", "MCCMC"],
};

const BORDER_PATTERN: Cell[] = [
  ...Array<Cell>(6).fill("B"),
  ...Array<Cell>(5).fill("E"),
  ...Array<Cell>(5).fill("C"),
  ...Array<Cell>(5).fill("P"),
  ...Array<Cell>(5).fill("B"),
  ...Array<Cell>(5).fill("E"),
  ...Array<Cell>(5).fill("C"),
  ...Array<Cell>(5).fill("P"),
  ...Array<Cell>(5).fill("B"),
  ...Array<Cell>(3).fill("E"),
];

function cleanInput(value: string) {
  return value.toUpperCase().replace(/[^A-Z0-9 .!?'&-]/g, "");
}

function renderLine(text: string) {
  const rows = Array.from({ length: 7 }, () => "");

  [...text].forEach((character, index) => {
    const glyph = FONT[character] ?? FONT["?"];

    for (let row = 0; row < 7; row += 1) rows[row] += glyph[row];
    if (index < text.length - 1) {
      for (let row = 0; row < 7; row += 1) rows[row] += "M";
    }
  });

  return rows;
}

function getLineWidth(text: string) {
  return text ? renderLine(text)[0].length : 0;
}

function createPanel(lines: string[]) {
  const panel: Cell[][] = Array.from({ length: PANEL_HEIGHT }, () =>
    Array<Cell>(PANEL_WIDTH).fill("M"),
  );

  panel[0] = [...BORDER_PATTERN];
  panel[PANEL_HEIGHT - 1] = [...BORDER_PATTERN];

  for (let row = 1; row < PANEL_HEIGHT - 1; row += 1) {
    const sideColor: Cell =
      row <= 5 ? "B" : row <= 10 ? "E" : row <= 15 ? "C" : row <= 20 ? "P" : row <= 25 ? "B" : "E";
    panel[row][0] = sideColor;
    panel[row][PANEL_WIDTH - 1] = sideColor;
  }

  lines.forEach((line, lineIndex) => {
    if (!line) return;
    const rendered = renderLine(line);
    const width = rendered[0].length;
    if (width > MAX_TEXT_WIDTH) return;

    const startColumn = Math.floor((PANEL_WIDTH - width) / 2);
    const startRow = LINE_START_ROWS[lineIndex];

    rendered.forEach((row, rowOffset) => {
      [...row].forEach((cell, columnOffset) => {
        if (cell === "C") panel[startRow + rowOffset][startColumn + columnOffset] = "C";
      });
    });
  });

  return panel;
}


function buildSvg(panel: Cell[][]) {
  const cellSize = 20;
  const padding = 24;
  const gridWidth = PANEL_WIDTH * cellSize;
  const gridHeight = PANEL_HEIGHT * cellSize;
  const svgWidth = gridWidth + padding * 2;
  const svgHeight = gridHeight + padding * 2;

  const cells = panel
    .flatMap((row, rowIndex) =>
      row.map((cell, columnIndex) => {
        const x = padding + columnIndex * cellSize;
        const y = padding + rowIndex * cellSize;

        return `<rect x="${x}" y="${y}" width="${cellSize}" height="${cellSize}" fill="${COLORS[cell]}" stroke="#000000" stroke-opacity="0.25" stroke-width="1" />`;
      }),
    )
    .join("");

  return [
    `<svg xmlns="http://www.w3.org/2000/svg" width="${svgWidth}" height="${svgHeight}" viewBox="0 0 ${svgWidth} ${svgHeight}" role="img" aria-label="49 by 29 wall-piece blueprint" shape-rendering="crispEdges">`,
    `<rect width="100%" height="100%" fill="#11131c" rx="16" />`,
    `<rect x="${padding - 10}" y="${padding - 10}" width="${gridWidth + 20}" height="${gridHeight + 20}" fill="none" stroke="${COLORS.P}" stroke-width="2" rx="12" />`,
    cells,
    `</svg>`,
  ].join("");
}

function makeDownloadName(lines: string[]) {
  const name = lines
    .filter(Boolean)
    .join("-")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return `${name || "wall-piece-blueprint"}.svg`;
}

export default function TextBlueprint() {
  const [lines, setLines] = useState(["THE", "OBSIDIAN", "MERIDIAN"]);
  const widths = useMemo(() => lines.map(getLineWidth), [lines]);
  const panel = useMemo(() => createPanel(lines), [lines]);
  const hasInvalidLine = widths.some((width) => width > MAX_TEXT_WIDTH);

  function updateLine(index: number, value: string) {
    setLines((current) =>
      current.map((line, i) => (i === index ? cleanInput(value) : line)),
    );
  }

  function downloadSvg() {
    if (hasInvalidLine) return;

    const svg = buildSvg(panel);
    const blob = new Blob([svg], {
      type: "image/svg+xml;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");

    anchor.href = url;
    anchor.download = makeDownloadName(lines);
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      <div className="space-y-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-10">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm uppercase tracking-[0.25em] text-[#E1A84A]">Try the Blueprint</p>
          <h2 className="text-3xl font-bold">Make your own wall-piece grid</h2>
          <p className="text-base leading-8 text-slate-300">
            Type up to three lines and the generator will map them into the same 49×29 blueprint format I used for The Obsidian Meridian. Each square in the preview represents one painted wall piece in Palworld.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {lines.map((line, index) => {
            const isTooWide = widths[index] > MAX_TEXT_WIDTH;
            return (
              <label key={index} className="space-y-2">
                <span className="flex items-center justify-between text-sm">
                  <span className="font-medium text-slate-200">Line {index + 1}</span>
                  <span className={isTooWide ? "text-red-400" : "text-slate-400"}>
                    {widths[index]}/{MAX_TEXT_WIDTH} blocks
                  </span>
                </span>
                <input
                  value={line}
                  onChange={(event) => updateLine(index, event.target.value)}
                  aria-invalid={isTooWide}
                  className={`w-full rounded-lg border bg-black/25 px-4 py-3 font-mono uppercase text-slate-100 outline-none transition ${isTooWide ? "border-red-400 focus:border-red-300" : "border-white/10 focus:border-[#4FC3F7]"}`}
                />
                {isTooWide && <span className="block text-sm text-red-400">This line is too wide for the 49-column panel.</span>}
              </label>
            );
          })}
        </div>

        <div className="space-y-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-100">
                Live blueprint
              </h3>
              <p className="mt-1 text-sm text-slate-400">
                Download the exact grid currently shown below.
              </p>
            </div>

            <button
              type="button"
              onClick={downloadSvg}
              disabled={hasInvalidLine}
              className="inline-flex items-center justify-center rounded-lg border border-[#4FC3F7]/50 bg-[#4FC3F7]/10 px-4 py-2.5 text-sm font-semibold text-[#BFEAFF] transition hover:border-[#4FC3F7] hover:bg-[#4FC3F7]/20 disabled:cursor-not-allowed disabled:border-white/10 disabled:bg-white/[0.03] disabled:text-slate-500"
            >
              Download SVG
            </button>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-black/30 p-3 md:p-5">
            <div
              className="grid min-w-[760px] overflow-hidden rounded-xl border-2 border-[#6B5CA5]"
              style={{
                gridTemplateColumns: `repeat(${PANEL_WIDTH}, minmax(0, 1fr))`,
              }}
              aria-label="Live 49 by 29 wall-piece blueprint preview"
            >
              {panel.flatMap((row, rowIndex) =>
                row.map((cell, columnIndex) => (
                  <div
                    key={`${rowIndex}-${columnIndex}`}
                    className="aspect-square border-b border-r border-black/25"
                    style={{ backgroundColor: COLORS[cell] }}
                    title={`Row ${rowIndex + 1}, column ${columnIndex + 1}`}
                  />
                )),
              )}
            </div>
          </div>
        </div>

        <p className="text-sm leading-6 text-slate-400">
          Supported characters: A–Z, 0–9, spaces, and basic punctuation. Lines wider than 45 blocks are left out of the preview.
        </p>
      </div>
    </section>
  );
}
