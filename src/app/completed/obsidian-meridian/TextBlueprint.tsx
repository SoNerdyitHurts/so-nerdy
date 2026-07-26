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

export default function TextBlueprint() {
  const [lines, setLines] = useState(["THE", "OBSIDIAN", "MERIDIAN"]);
  const widths = useMemo(() => lines.map(getLineWidth), [lines]);
  const panel = useMemo(() => createPanel(lines), [lines]);

  function updateLine(index: number, value: string) {
    setLines((current) => current.map((line, i) => (i === index ? cleanInput(value) : line)));
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

        <div className="overflow-x-auto rounded-2xl border border-white/10 bg-black/30 p-3 md:p-5">
          <div
            className="grid min-w-[760px] overflow-hidden rounded-xl border-2 border-[#6B5CA5]"
            style={{ gridTemplateColumns: `repeat(${PANEL_WIDTH}, minmax(0, 1fr))` }}
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

        <p className="text-sm leading-6 text-slate-400">
          Supported characters: A–Z, 0–9, spaces, and basic punctuation. Lines wider than 45 blocks are left out of the preview.
        </p>
      </div>
    </section>
  );
}
