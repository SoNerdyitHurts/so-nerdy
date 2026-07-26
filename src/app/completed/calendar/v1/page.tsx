"use client";

import { useEffect, useMemo, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

type DayOverride = {
  background: string;
  dateColor: string;
  contentColor: string;
  accent: string;
  note: string;
};

type CalendarDay = {
  isoDate: string;
  dayNumber: number;
  isCurrentMonth: boolean;
  isToday: boolean;
  backgroundColor: string;
  dateColor: string;
  contentColor: string;
  borderColor: string;
  accentColor: string;
  noteText: string;
  override?: DayOverride;
};

type GroceryItem = {
  id: string;
  text: string;
  done: boolean;
};

type SharedTask = {
  id: string;
  text: string;
  done: boolean;
};

type MealDay = {
  id: string;
  day: string;
  value: string;
};

type TimerType = "break" | "lunch";

type DemoTimer = {
  id: string;
  type: TimerType;
  label: string;
  startedAt: number;
  endsAt: number;
};

type MedsState = {
  taken: boolean;
  takenAt: number | null;
};

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const defaultGroceries: GroceryItem[] = [
  { id: "milk", text: "Milk", done: false },
  { id: "eggs", text: "Eggs", done: true },
  { id: "coffee", text: "Coffee", done: false },
  { id: "paper-towels", text: "Paper towels", done: false },
];

const defaultNotes = [
  { id: "mail", text: "Remember to check the mail." },
  { id: "reset", text: "House reset before weekend." },
];

const defaultTasks: SharedTask[] = [
  { id: "filter", text: "Check filter", done: false },
  { id: "plants", text: "Water plants", done: true },
  { id: "laundry", text: "Move laundry", done: false },
];

const defaultMeals: MealDay[] = [
  { id: "mon", day: "Mon", value: "leftovers" },
  { id: "tue", day: "Tue", value: "chicken bowls" },
  { id: "wed", day: "Wed", value: "easy night" },
  { id: "thu", day: "Thu", value: "pasta" },
  { id: "fri", day: "Fri", value: "freezer backup" },
];

const defaultMealIdeas = ["slow cooker chili", "rice bowls", "breakfast-for-dinner"];

const defaultDayNotes: Record<number, string> = {
  3: "Trash night",
  7: "Bill check",
  12: "Appointment",
  16: "Grocery run",
  22: "House reset",
  27: "Meal prep",
};

function pad2(value: number) {
  return String(value).padStart(2, "0");
}

function formatCountdown(msRemaining: number) {
  const totalSeconds = Math.max(0, Math.ceil(msRemaining / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  if (minutes > 0) {
    return `${minutes}m ${pad2(seconds)}s`;
  }

  return `${seconds}s`;
}

function formatClock(timestamp: number | null) {
  if (!timestamp) return "";
  return new Date(timestamp).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
}

function timerLabel(type: TimerType) {
  return type === "break" ? "Break" : "Lunch";
}

const timerDurations: Record<TimerType, number> = {
  break: 15 * 60 * 1000,
  lunch: 30 * 60 * 1000,
};

function getCurrentMonthKey() {
  const now = new Date();
  return `${now.getFullYear()}-${pad2(now.getMonth() + 1)}`;
}

function shiftMonthKey(monthKey: string, delta: number) {
  const [yearText, monthText] = monthKey.split("-");
  const shifted = new Date(Number(yearText), Number(monthText) - 1 + delta, 1);
  return `${shifted.getFullYear()}-${pad2(shifted.getMonth() + 1)}`;
}

function formatMonthLabel(monthKey: string) {
  const [yearText, monthText] = monthKey.split("-");
  const monthIndex = Number(monthText) - 1;
  return { month: monthNames[monthIndex], year: yearText };
}

function makeIso(year: number, monthIndex: number, dayNumber: number) {
  return `${year}-${pad2(monthIndex + 1)}-${pad2(dayNumber)}`;
}

function getCalendarDays(monthKey: string, overrides: Record<string, DayOverride>) {
  const [yearText, monthText] = monthKey.split("-");
  const year = Number(yearText);
  const monthIndex = Number(monthText) - 1;
  const firstDay = new Date(year, monthIndex, 1);
  const startDayOfWeek = firstDay.getDay();
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const today = new Date();
  const todayIso = makeIso(today.getFullYear(), today.getMonth(), today.getDate());

  return Array.from({ length: 42 }, (_, index): CalendarDay => {
    const dayNumber = index - startDayOfWeek + 1;
    const isCurrentMonth = dayNumber >= 1 && dayNumber <= daysInMonth;
    const isoDate = isCurrentMonth
      ? makeIso(year, monthIndex, dayNumber)
      : `empty-${monthKey}-${index}`;
    const override = isCurrentMonth ? overrides[isoDate] : undefined;
    const defaultNote = isCurrentMonth ? defaultDayNotes[dayNumber] ?? "" : "";

    return {
      isoDate,
      dayNumber,
      isCurrentMonth,
      isToday: isoDate === todayIso,
      backgroundColor: override?.background ?? "#151b2a",
      dateColor: override?.dateColor ?? "#f8fafc",
      contentColor: override?.contentColor ?? "#e2e8f0",
      borderColor: override?.accent ?? "rgba(255,255,255,0.10)",
      accentColor: override?.accent ?? "#67e8f9",
      noteText: override?.note ?? defaultNote,
      override,
    };
  });
}

function parseNoteText(noteText: string) {
  return noteText
    .replace(/\r\n/g, "\n")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

function Button({
  children,
  onClick,
  disabled = false,
  variant = "ghost",
}: {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "ghost" | "primary" | "danger";
}) {
  const className =
    variant === "primary"
      ? "border-cyan-300/60 bg-cyan-300/15 text-cyan-50 hover:bg-cyan-300/25"
      : variant === "danger"
        ? "border-rose-300/50 bg-rose-400/10 text-rose-100 hover:bg-rose-400/20"
        : "border-white/14 bg-white/[0.04] text-slate-200 hover:bg-white/[0.08]";

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`rounded-full border px-4 py-2 text-xs font-black uppercase tracking-[0.16em] transition disabled:cursor-not-allowed disabled:opacity-35 ${className}`}
    >
      {children}
    </button>
  );
}

function BoardCard({
  title,
  action,
  children,
  className = "",
}: {
  title: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`rounded-[1.35rem] border border-slate-700/70 bg-[#070b17]/92 p-4 shadow-[0_18px_55px_rgba(0,0,0,0.32)] ${className}`}
    >
      <div className="mb-4 flex min-h-8 items-start justify-between gap-3">
        <h2 className="text-xl font-black tracking-[-0.03em] text-white">{title}</h2>
        {action}
      </div>
      {children}
    </section>
  );
}

function EditToggle({ active, onClick }: { active: boolean; onClick: () => void }) {
  return (
    <div className="flex items-center gap-2">
      {active ? (
        <span className="text-[0.65rem] font-black uppercase tracking-[0.2em] text-cyan-200">
          Editing
        </span>
      ) : null}
      <button
        type="button"
        onClick={onClick}
        aria-pressed={active}
        className={`rounded-full border px-3 py-1 text-[0.7rem] font-black uppercase tracking-[0.18em] transition ${
          active
            ? "border-cyan-300 bg-cyan-300 text-slate-950"
            : "border-slate-600 bg-slate-900 text-slate-300 hover:border-slate-400"
        }`}
      >
        {active ? "Done" : "Edit"}
      </button>
    </div>
  );
}

function TextInput({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <input
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
      className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 outline-none focus:border-cyan-300/70"
    />
  );
}

function ColorField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="grid gap-2 rounded-2xl border border-slate-700 bg-slate-900/80 p-3 text-sm text-slate-200 sm:grid-cols-[1fr_auto] sm:items-center">
      <span className="font-bold">{label}</span>
      <span className="flex items-center gap-2">
        <input
          type="color"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="h-9 w-12 cursor-pointer rounded-lg border border-slate-600 bg-transparent p-1"
        />
        <input
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="w-28 rounded-lg border border-slate-700 bg-slate-950 px-2 py-2 font-mono text-xs text-slate-200 outline-none focus:border-cyan-300/70"
        />
      </span>
    </label>
  );
}

function CalendarCard({
  monthKey,
  realCurrentMonthKey,
  days,
  selectedIsoDate,
  onPreviousMonth,
  onNextMonth,
  onJumpToCurrentMonth,
  onViewDay,
  onEditDay,
  monthColor,
}: {
  monthKey: string;
  realCurrentMonthKey: string;
  days: CalendarDay[];
  selectedIsoDate: string | null;
  onPreviousMonth: () => void;
  onNextMonth: () => void;
  onJumpToCurrentMonth: () => void;
  onViewDay: (day: CalendarDay) => void;
  onEditDay: (day: CalendarDay) => void;
  monthColor: string;
}) {
  const { month, year } = formatMonthLabel(monthKey);
  const canJumpToCurrentMonth = monthKey !== realCurrentMonthKey;

  return (
    <div className="calendar-card-shell">
      <BoardCard
        title="Calendar"
        className="calendar-card"
        action={
          <div className="flex flex-wrap justify-end gap-2">
            <Button onClick={onPreviousMonth}>Previous</Button>
            <Button onClick={onJumpToCurrentMonth} disabled={!canJumpToCurrentMonth}>
              Current Month
            </Button>
            <Button onClick={onNextMonth}>Next</Button>
          </div>
        }
      >
        <div className="rounded-[1.35rem] border border-slate-700/80 bg-[#0c1222]/88 p-3 md:p-4">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-200/90">
                household month view
              </p>
              <div className="mt-1 flex items-baseline gap-3">
                <span
                  className="text-4xl font-black tracking-[-0.05em] md:text-5xl"
                  style={{ color: monthColor }}
                >
                  {month}
                </span>
                <span className="text-2xl font-black text-slate-400 md:text-3xl">
                  {year}
                </span>
              </div>
            </div>
            <div className="rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1 text-[0.68rem] font-black uppercase tracking-[0.18em] text-slate-400">
              safe local demo
            </div>
          </div>

          <div className="grid grid-cols-7 gap-2">
            {weekDays.map((day, index) => (
              <div
                key={day}
                className="rounded-xl border border-slate-700/70 bg-slate-950/75 px-1 py-2 text-center text-[0.68rem] font-black uppercase tracking-[0.16em] text-slate-300 md:text-xs"
                style={{ color: index === 0 || index === 6 ? "#a7f3d0" : undefined }}
              >
                {day}
              </div>
            ))}

            {days.map((day, index) => {
              const noteLines = parseNoteText(day.noteText);
              return (
                <button
                  key={day.isoDate}
                  type="button"
                  disabled={!day.isCurrentMonth}
                  onClick={() => day.isCurrentMonth && onViewDay(day)}
                  className={`group relative min-h-[6.35rem] rounded-2xl border p-2 text-left transition md:min-h-[7.4rem] ${
                    day.isCurrentMonth
                      ? "bg-[#151b2a] hover:-translate-y-0.5 hover:border-cyan-300/60 hover:shadow-[0_15px_35px_rgba(34,211,238,0.10)]"
                      : "border-slate-800/50 bg-black/25 opacity-40"
                  } ${selectedIsoDate === day.isoDate ? "ring-2 ring-cyan-300/80" : ""} ${
                    day.isToday ? "shadow-[inset_0_0_0_2px_rgba(103,232,249,0.75)]" : ""
                  }`}
                  style={
                    {
                      background: day.isCurrentMonth ? day.backgroundColor : undefined,
                      borderColor: day.isCurrentMonth ? day.borderColor : undefined,
                    } as CSSProperties
                  }
                >
                  {day.isCurrentMonth ? (
                    <>
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-lg font-black" style={{ color: day.dateColor }}>
                          {day.dayNumber}
                        </span>
                        <span
                          className="h-2.5 w-2.5 rounded-full opacity-80"
                          style={{ background: day.accentColor }}
                        />
                      </div>
                      <div className="mt-2 space-y-1">
                        {noteLines.slice(0, 3).map((line, lineIndex) => (
                          <div
                            key={`${line}-${lineIndex}`}
                            className="truncate rounded-lg bg-black/24 px-2 py-1 text-xs font-semibold"
                            style={{ color: day.contentColor }}
                          >
                            {line}
                          </div>
                        ))}
                      </div>
                      <span
                        onClick={(event) => {
                          event.stopPropagation();
                          onEditDay(day);
                        }}
                        className="absolute bottom-2 right-2 rounded-full border border-slate-600 bg-slate-950/90 px-2 py-1 text-[0.62rem] font-black uppercase tracking-[0.15em] text-slate-300 opacity-0 transition group-hover:opacity-100"
                      >
                        Edit
                      </span>
                    </>
                  ) : (
                    <span className="text-slate-600">{index < 7 ? "" : ""}</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </BoardCard>
    </div>
  );
}

function StatusCard({
  personLabel,
  accent,
  status,
  shift,
}: {
  personLabel: string;
  accent: string;
  status: string;
  shift: string;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [statusLine, setStatusLine] = useState(status);
  const [timers, setTimers] = useState<DemoTimer[]>([]);
  const [meds, setMeds] = useState<MedsState>({
    taken: false,
    takenAt: null,
  });
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const interval = window.setInterval(() => {
      setNow(Date.now());
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  const activeTimers = timers
    .filter((timer) => timer.endsAt > now)
    .slice(0, 2);

  function startTimer(type: TimerType) {
    const startedAt = Date.now();
    const endsAt = startedAt + timerDurations[type];

    setTimers((current) => {
      const withoutSameType = current.filter((timer) => timer.type !== type);

      return [
        ...withoutSameType,
        {
          id: `${personLabel}-${type}-${startedAt}`,
          type,
          label: timerLabel(type),
          startedAt,
          endsAt,
        },
      ];
    });

    setNow(startedAt);
  }

  function clearTimer(type: TimerType) {
    setTimers((current) => current.filter((timer) => timer.type !== type));
  }

  function markMedsTaken() {
    setMeds({
      taken: true,
      takenAt: Date.now(),
    });
  }

  function clearMeds() {
    setMeds({
      taken: false,
      takenAt: null,
    });
  }

  return (
    <BoardCard
      title={personLabel}
      className="status-card"
      action={<EditToggle active={isEditing} onClick={() => setIsEditing((value) => !value)} />}
    >
      <div className="space-y-4">
        <div
          className="rounded-2xl border border-white/12 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]"
          style={{
            background: `linear-gradient(135deg, ${accent}, rgba(13,18,33,0.9))`,
          }}
        >
          <div className="flex items-center gap-3">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-black/25 text-lg font-black text-white">
              {personLabel.replace("PERSON ", "P")}
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-sm font-black uppercase tracking-[0.24em] text-white/68">
                Status Line
              </div>
              {isEditing ? (
                <input
                  value={statusLine}
                  onChange={(event) => setStatusLine(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      setIsEditing(false);
                    }
                  }}
                  className="mt-1 w-full rounded-xl border border-white/20 bg-black/30 px-3 py-2 text-lg font-black text-white outline-none focus:border-cyan-200"
                />
              ) : (
                <div className="mt-1 text-2xl font-black leading-tight text-white">
                  {statusLine}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="grid gap-2 text-sm text-slate-200">
          {activeTimers.length > 0 ? (
            activeTimers.map((timer) => (
              <div
                key={timer.id}
                className="flex items-center justify-between gap-3 rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2"
              >
                <span>{timer.label}</span>
                <strong>{formatCountdown(timer.endsAt - now)}</strong>
              </div>
            ))
          ) : (
            <div className="flex items-center justify-between gap-3 rounded-xl border border-dashed border-slate-700 bg-slate-950/40 px-3 py-2 text-slate-400">
              <span>Timer</span>
              <strong>none active</strong>
            </div>
          )}

          <div
            className={`flex items-center justify-between gap-3 rounded-xl border px-3 py-2 ${
              meds.taken
                ? "border-emerald-300/40 bg-emerald-400/10"
                : "border-slate-700 bg-slate-950/70"
            }`}
          >
            <span>Meds</span>
            <strong>{meds.taken ? `Taken • ${formatClock(meds.takenAt)}` : "Pending"}</strong>
          </div>

          <div className="flex items-center justify-between gap-3 rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2">
            <span>Shift</span>
            <strong>{shift}</strong>
          </div>
        </div>

        <div className="rounded-2xl border border-cyan-200/20 bg-cyan-200/5 p-3">
          <div className="mb-3 text-[0.68rem] font-black uppercase tracking-[0.22em] text-cyan-100">
            Shortcut simulator
          </div>

          <div className="grid gap-2">
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => startTimer("break")}
                className="rounded-xl border border-cyan-200/30 bg-cyan-300/10 px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-cyan-100 hover:bg-cyan-300/20"
              >
                Start Break
              </button>
              <button
                type="button"
                onClick={() => clearTimer("break")}
                className="rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-slate-300 hover:bg-slate-900"
              >
                Clear Break
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => startTimer("lunch")}
                className="rounded-xl border border-cyan-200/30 bg-cyan-300/10 px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-cyan-100 hover:bg-cyan-300/20"
              >
                Start Lunch
              </button>
              <button
                type="button"
                onClick={() => clearTimer("lunch")}
                className="rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-slate-300 hover:bg-slate-900"
              >
                Clear Lunch
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={markMedsTaken}
                className="rounded-xl border border-emerald-200/30 bg-emerald-300/10 px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-emerald-100 hover:bg-emerald-300/20"
              >
                Mark Meds
              </button>
              <button
                type="button"
                onClick={clearMeds}
                className="rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-slate-300 hover:bg-slate-900"
              >
                Clear Meds
              </button>
            </div>
          </div>
        </div>
      </div>
    </BoardCard>
  );
}

function GroceryCard() {
  const [items, setItems] = useState(defaultGroceries);
  const [editing, setEditing] = useState(false);
  const [newItem, setNewItem] = useState("");

  function addItem() {
    const text = newItem.trim();
    if (!text) return;
    setItems((current) => [
      ...current,
      { id: `${Date.now()}-${text}`, text, done: false },
    ]);
    setNewItem("");
  }

  return (
    <BoardCard
      title="Grocery"
      className={editing ? "ring-1 ring-cyan-300/50" : ""}
      action={<EditToggle active={editing} onClick={() => setEditing((value) => !value)} />}
    >
      <div className="space-y-2">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-slate-200"
          >
            <button
              type="button"
              onClick={() =>
                setItems((current) =>
                  current.map((entry) =>
                    entry.id === item.id ? { ...entry, done: !entry.done } : entry
                  )
                )
              }
              className={`grid h-6 w-6 shrink-0 place-items-center rounded-lg border ${
                item.done ? "border-cyan-300 bg-cyan-300 text-slate-950" : "border-slate-600"
              }`}
            >
              {item.done ? "✓" : ""}
            </button>
            {editing ? (
              <input
                value={item.text}
                onChange={(event) =>
                  setItems((current) =>
                    current.map((entry) =>
                      entry.id === item.id ? { ...entry, text: event.target.value } : entry
                    )
                  )
                }
                className="min-w-0 flex-1 bg-transparent text-slate-100 outline-none"
              />
            ) : (
              <span className={`min-w-0 flex-1 ${item.done ? "text-slate-500 line-through" : ""}`}>
                {item.text}
              </span>
            )}
            {editing ? (
              <button
                type="button"
                onClick={() => setItems((current) => current.filter((entry) => entry.id !== item.id))}
                className="text-xs font-black uppercase tracking-[0.12em] text-rose-200"
              >
                Delete
              </button>
            ) : null}
          </div>
        ))}

        {editing ? (
          <div className="flex gap-2 pt-2">
            <TextInput value={newItem} onChange={setNewItem} placeholder="Add grocery item" />
            <Button onClick={addItem} variant="primary">
              Add
            </Button>
          </div>
        ) : null}
      </div>
    </BoardCard>
  );
}

function SharedBoardCard() {
  const [editing, setEditing] = useState(false);
  const [notes, setNotes] = useState(defaultNotes);
  const [tasks, setTasks] = useState(defaultTasks);
  const [newNote, setNewNote] = useState("");
  const [newTask, setNewTask] = useState("");

  function addNote() {
    const text = newNote.trim();
    if (!text) return;
    setNotes((current) => [...current, { id: `${Date.now()}-note`, text }]);
    setNewNote("");
  }

  function addTask() {
    const text = newTask.trim();
    if (!text) return;
    setTasks((current) => [...current, { id: `${Date.now()}-task`, text, done: false }]);
    setNewTask("");
  }

  return (
    <BoardCard
      title="Shared Board"
      className={editing ? "ring-1 ring-cyan-300/50" : ""}
      action={<EditToggle active={editing} onClick={() => setEditing((value) => !value)} />}
    >
      <div className="space-y-3 text-sm text-slate-200">
        {notes.map((note) => (
          <div key={note.id} className="rounded-xl border border-slate-700 bg-slate-950/70 p-3">
            {editing ? (
              <div className="space-y-2">
                <textarea
                  value={note.text}
                  onChange={(event) =>
                    setNotes((current) =>
                      current.map((entry) =>
                        entry.id === note.id ? { ...entry, text: event.target.value } : entry
                      )
                    )
                  }
                  rows={2}
                  className="w-full resize-none bg-transparent text-slate-100 outline-none"
                />
                <button
                  type="button"
                  onClick={() => setNotes((current) => current.filter((entry) => entry.id !== note.id))}
                  className="text-xs font-black uppercase tracking-[0.12em] text-rose-200"
                >
                  Delete note
                </button>
              </div>
            ) : (
              note.text
            )}
          </div>
        ))}

        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2"
          >
            <button
              type="button"
              onClick={() =>
                setTasks((current) =>
                  current.map((entry) =>
                    entry.id === task.id ? { ...entry, done: !entry.done } : entry
                  )
                )
              }
              className="font-mono"
            >
              {task.done ? "☑" : "☐"}
            </button>
            {editing ? (
              <input
                value={task.text}
                onChange={(event) =>
                  setTasks((current) =>
                    current.map((entry) =>
                      entry.id === task.id ? { ...entry, text: event.target.value } : entry
                    )
                  )
                }
                className="min-w-0 flex-1 bg-transparent text-slate-100 outline-none"
              />
            ) : (
              <span className={`min-w-0 flex-1 ${task.done ? "text-slate-500 line-through" : ""}`}>
                {task.text}
              </span>
            )}
            {editing ? (
              <button
                type="button"
                onClick={() => setTasks((current) => current.filter((entry) => entry.id !== task.id))}
                className="text-xs font-black uppercase tracking-[0.12em] text-rose-200"
              >
                Delete
              </button>
            ) : null}
          </div>
        ))}

        {editing ? (
          <div className="grid gap-2 pt-2">
            <div className="flex gap-2">
              <TextInput value={newNote} onChange={setNewNote} placeholder="Add shared note" />
              <Button onClick={addNote} variant="primary">
                Add
              </Button>
            </div>
            <div className="flex gap-2">
              <TextInput value={newTask} onChange={setNewTask} placeholder="Add shared task" />
              <Button onClick={addTask} variant="primary">
                Add
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    </BoardCard>
  );
}

function MealPrepCard() {
  const [editing, setEditing] = useState(false);
  const [mealDays, setMealDays] = useState(defaultMeals);
  const [ideas, setIdeas] = useState(defaultMealIdeas);
  const [newIdea, setNewIdea] = useState("");

  function addIdea() {
    const text = newIdea.trim();
    if (!text) return;
    setIdeas((current) => [...current, text]);
    setNewIdea("");
  }

  return (
    <BoardCard
      title="Meal Prep"
      className={editing ? "ring-1 ring-cyan-300/50" : ""}
      action={<EditToggle active={editing} onClick={() => setEditing((value) => !value)} />}
    >
      <div className="space-y-2 text-sm text-slate-200">
        {mealDays.map((meal) => (
          <div
            key={meal.id}
            className="grid grid-cols-[3.2rem_1fr] items-center gap-3 rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2"
          >
            <span className="font-black">{meal.day}</span>
            {editing ? (
              <input
                value={meal.value}
                onChange={(event) =>
                  setMealDays((current) =>
                    current.map((entry) =>
                      entry.id === meal.id ? { ...entry, value: event.target.value } : entry
                    )
                  )
                }
                className="bg-transparent text-right text-slate-100 outline-none"
              />
            ) : (
              <span className="text-right text-slate-300">{meal.value}</span>
            )}
          </div>
        ))}

        {editing ? (
          <div className="space-y-2 pt-2">
            <div className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
              Meal ideas
            </div>
            {ideas.map((idea, index) => (
              <div key={`${idea}-${index}`} className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-950/70 px-3 py-2">
                <input
                  value={idea}
                  onChange={(event) =>
                    setIdeas((current) =>
                      current.map((entry, entryIndex) =>
                        entryIndex === index ? event.target.value : entry
                      )
                    )
                  }
                  className="min-w-0 flex-1 bg-transparent text-slate-100 outline-none"
                />
                <button
                  type="button"
                  onClick={() => setIdeas((current) => current.filter((_, entryIndex) => entryIndex !== index))}
                  className="text-xs font-black uppercase tracking-[0.12em] text-rose-200"
                >
                  Delete
                </button>
              </div>
            ))}
            <div className="flex gap-2">
              <TextInput value={newIdea} onChange={setNewIdea} placeholder="Add meal idea" />
              <Button onClick={addIdea} variant="primary">
                Add
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    </BoardCard>
  );
}

function DayDetailCard({
  day,
  days,
  onClose,
  onEdit,
  onSelect,
}: {
  day: CalendarDay;
  days: CalendarDay[];
  onClose: () => void;
  onEdit: (day: CalendarDay) => void;
  onSelect: (isoDate: string) => void;
}) {
  const monthDays = days.filter((entry) => entry.isCurrentMonth);
  const selectedIndex = monthDays.findIndex((entry) => entry.isoDate === day.isoDate);
  const previous = selectedIndex > 0 ? monthDays[selectedIndex - 1] : null;
  const next = selectedIndex >= 0 && selectedIndex < monthDays.length - 1 ? monthDays[selectedIndex + 1] : null;
  const date = new Date(`${day.isoDate}T12:00:00`);
  const title = date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const noteLines = parseNoteText(day.noteText);

  return (
    <div
      className="fixed inset-0 z-40 grid place-items-center overflow-y-auto bg-black/72 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="presentation"
    >
      <section
        className="w-full max-w-3xl rounded-[2rem] border border-slate-600 bg-[#070b17] p-5 shadow-[0_35px_110px_rgba(0,0,0,0.75)]"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={`Details for ${title}`}
      >
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs font-black uppercase tracking-[0.28em] text-cyan-200">
            {day.isToday ? "Today" : "Day details"}
          </div>
          <div className="flex flex-wrap justify-end gap-2">
            <Button disabled={!previous} onClick={() => previous && onSelect(previous.isoDate)}>
              ← Prev
            </Button>
            <Button disabled={!next} onClick={() => next && onSelect(next.isoDate)}>
              Next →
            </Button>
            <Button onClick={() => onEdit(day)} variant="primary">
              Edit
            </Button>
            <Button onClick={onClose}>×</Button>
          </div>
        </div>

        <div
          className="rounded-[1.5rem] border p-6"
          style={{ background: day.backgroundColor, borderColor: day.borderColor }}
        >
          <div className="flex items-start justify-between gap-4">
            <div style={{ color: day.dateColor }}>
              <div className="text-7xl font-black leading-none tracking-[-0.08em]">
                {day.dayNumber}
              </div>
              <h2 className="mt-3 text-2xl font-black tracking-[-0.04em] md:text-4xl">
                {title}
              </h2>
              <p className="mt-2 text-sm font-black uppercase tracking-[0.18em] opacity-70">
                {noteLines.length ? "Scheduled content" : "No notes yet"}
              </p>
            </div>
            <span className="mt-2 h-4 w-16 rounded-full" style={{ background: day.accentColor }} />
          </div>
        </div>

        <div className="mt-4 rounded-[1.5rem] border border-slate-700 bg-slate-950/70 p-4">
          <div className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-slate-400">
            Events
          </div>
          {noteLines.length ? (
            <div className="space-y-2" style={{ color: day.contentColor }}>
              {noteLines.map((line, index) => (
                <div key={`${line}-${index}`} className="rounded-xl border border-slate-700 bg-black/20 px-3 py-2">
                  {line}
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-slate-700 bg-black/20 px-3 py-2 text-slate-500">
              No notes for this day yet.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function DayEditorModal({
  day,
  onSave,
  onClear,
  onClose,
}: {
  day: CalendarDay;
  onSave: (override: DayOverride) => void;
  onClear: () => void;
  onClose: () => void;
}) {
  const [background, setBackground] = useState(day.backgroundColor);
  const [dateColor, setDateColor] = useState(day.dateColor);
  const [contentColor, setContentColor] = useState(day.contentColor);
  const [accent, setAccent] = useState(day.accentColor);
  const [note, setNote] = useState(day.noteText);
  const [confirmingReset, setConfirmingReset] = useState(false);

  function saveDay() {
    onSave({ background, dateColor, contentColor, accent, note });
  }

  return (
    <div className="fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/78 p-4 backdrop-blur" role="presentation">
      <section
        className="max-h-[92vh] w-full max-w-2xl overflow-hidden rounded-[2rem] border border-slate-600 bg-[#070b17] shadow-[0_35px_110px_rgba(0,0,0,0.85)]"
        role="dialog"
        aria-modal="true"
        aria-label={`Edit Day ${day.dayNumber}`}
      >
        <div className="flex items-center justify-between border-b border-slate-800 px-5 py-4">
          <div>
            <div className="text-xs font-black uppercase tracking-[0.25em] text-cyan-200">
              Edit Day {day.dayNumber}
            </div>
            <h2 className="mt-1 text-2xl font-black text-white">Day styling</h2>
          </div>
          <Button onClick={onClose}>Close</Button>
        </div>

        <div className="max-h-[calc(92vh-9rem)] overflow-y-auto p-5">
          <div className="mb-5 rounded-2xl border border-slate-700 bg-slate-900/80 p-4 text-sm leading-6 text-slate-300">
            Update this date without affecting the rest of the calendar. Save Day writes to this local archive demo and immediately updates the calendar cell.
          </div>

          <div className="grid gap-3">
            <ColorField label="Background" value={background} onChange={setBackground} />
            <ColorField label="Date Color" value={dateColor} onChange={setDateColor} />
            <ColorField label="Event Text Color" value={contentColor} onChange={setContentColor} />
            <ColorField label="Accent" value={accent} onChange={setAccent} />
          </div>

          <div className="mt-5 rounded-2xl border border-slate-700 bg-slate-900/80 p-4">
            <div className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-slate-400">
              Day Text
            </div>
            <textarea
              value={note}
              onChange={(event) => setNote(event.target.value)}
              rows={9}
              placeholder="Add a note, reminder, event, or short text..."
              className="w-full resize-none rounded-2xl border border-slate-700 bg-slate-950/80 p-4 text-sm leading-6 text-slate-100 outline-none focus:border-cyan-300/70"
            />
            <p className="mt-2 text-xs text-slate-500">
              Line breaks are preserved in the day detail card and shown on the calendar cell.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 px-5 py-4">
          <Button onClick={saveDay} variant="primary">
            Save Day
          </Button>
          <div className="flex gap-2">
            <Button
              onClick={() => {
                if (!confirmingReset) {
                  setConfirmingReset(true);
                  return;
                }
                onClear();
              }}
              variant="danger"
            >
              {confirmingReset ? "Confirm Reset" : "Reset Day"}
            </Button>
            {confirmingReset ? <Button onClick={() => setConfirmingReset(false)}>Cancel</Button> : null}
          </div>
        </div>
      </section>
    </div>
  );
}

function AppearanceModal({
  boardTitleColor,
  setBoardTitleColor,
  monthColor,
  setMonthColor,
  onClose,
  onReset,
}: {
  boardTitleColor: string;
  setBoardTitleColor: (value: string) => void;
  monthColor: string;
  setMonthColor: (value: string) => void;
  onClose: () => void;
  onReset: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/78 p-4 backdrop-blur" role="presentation">
      <section className="w-full max-w-xl rounded-[2rem] border border-slate-600 bg-[#070b17] p-5 shadow-[0_35px_110px_rgba(0,0,0,0.85)]" role="dialog" aria-modal="true" aria-label="Edit Appearance">
        <div className="mb-5 flex items-center justify-between gap-3">
          <div>
            <div className="text-xs font-black uppercase tracking-[0.25em] text-cyan-200">
              Appearance
            </div>
            <h2 className="mt-1 text-2xl font-black text-white">Edit Appearance</h2>
          </div>
          <Button onClick={onClose}>Close</Button>
        </div>
        <div className="grid gap-3">
          <ColorField label="Board Title Color" value={boardTitleColor} onChange={setBoardTitleColor} />
          <ColorField label="Month Color" value={monthColor} onChange={setMonthColor} />
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          <Button onClick={onClose} variant="primary">
            Save Appearance
          </Button>
          <Button onClick={onReset} variant="danger">
            Reset Appearance
          </Button>
        </div>
      </section>
    </div>
  );
}

export default function CalendarV1Page() {
  const realCurrentMonthKey = useMemo(() => getCurrentMonthKey(), []);
  const [visibleMonthKey, setVisibleMonthKey] = useState(realCurrentMonthKey);
  const [selectedIsoDate, setSelectedIsoDate] = useState<string | null>(null);
  const [editingIsoDate, setEditingIsoDate] = useState<string | null>(null);
  const [dayOverrides, setDayOverrides] = useState<Record<string, DayOverride>>({});
  const [appearanceOpen, setAppearanceOpen] = useState(false);
  const [boardTitleColor, setBoardTitleColor] = useState("#f8fafc");
  const [monthColor, setMonthColor] = useState("#a5f3fc");

  const days = useMemo(() => getCalendarDays(visibleMonthKey, dayOverrides), [visibleMonthKey, dayOverrides]);
  const selectedDay = selectedIsoDate ? days.find((day) => day.isoDate === selectedIsoDate) ?? null : null;
  const editingDay = editingIsoDate ? days.find((day) => day.isoDate === editingIsoDate) ?? null : null;

  function openEditor(day: CalendarDay) {
    setSelectedIsoDate(day.isoDate);
    setEditingIsoDate(day.isoDate);
  }

  function saveDay(override: DayOverride) {
    if (!editingIsoDate) return;
    setDayOverrides((current) => ({ ...current, [editingIsoDate]: override }));
    setSelectedIsoDate(editingIsoDate);
    setEditingIsoDate(null);
  }

  function clearDay() {
    if (!editingIsoDate) return;
    setDayOverrides((current) => {
      const next = { ...current };
      delete next[editingIsoDate];
      return next;
    });
    setSelectedIsoDate(editingIsoDate);
    setEditingIsoDate(null);
  }

  function resetDemo() {
    setVisibleMonthKey(realCurrentMonthKey);
    setSelectedIsoDate(null);
    setEditingIsoDate(null);
    setDayOverrides({});
    setAppearanceOpen(false);
    setBoardTitleColor("#f8fafc");
    setMonthColor("#a5f3fc");
  }

  const boardGridStyle = {
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
    backgroundSize: "32px 32px",
  } as CSSProperties;

  return (
    <main className="min-h-screen bg-[#050608] text-slate-100" style={boardGridStyle}>
      <section className="mx-auto max-w-[1600px] px-5 py-6 md:px-8 md:py-8">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <a
            href="/completed/calendar"
            className="rounded-full border border-slate-700 bg-black/45 px-4 py-2 text-sm font-bold text-slate-200 hover:border-slate-500"
          >
            ← Back to Calendar Project
          </a>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-amber-300/35 bg-amber-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-amber-100">
              sanitized v1 archive
            </span>
            <Button onClick={resetDemo} variant="primary">
              Reset demo
            </Button>
          </div>
        </div>

        <section className="rounded-[2rem] border border-slate-700/80 bg-[#0b1020]/94 p-5 shadow-[0_30px_100px_rgba(0,0,0,0.55)] md:p-7">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-4xl font-black tracking-[-0.06em] md:text-5xl" style={{ color: boardTitleColor }}>
                Household Board
              </h1>
              <p className="mt-1 text-sm text-slate-400">Main household · main-household</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-full border border-slate-700 bg-slate-950/70 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-slate-300">
                Appearance
              </div>
              <Button onClick={() => setAppearanceOpen(true)}>Edit Appearance</Button>
            </div>
          </div>

          <div className="grid gap-4">
            <CalendarCard
              monthKey={visibleMonthKey}
              realCurrentMonthKey={realCurrentMonthKey}
              days={days.map((day) => ({
                ...day,
                dateColor: day.dateColor,
                contentColor: day.contentColor,
                accentColor: day.accentColor,
              }))}
              selectedIsoDate={selectedIsoDate}
              onPreviousMonth={() => {
                setSelectedIsoDate(null);
                setEditingIsoDate(null);
                setVisibleMonthKey((current) => shiftMonthKey(current, -1));
              }}
              onNextMonth={() => {
                setSelectedIsoDate(null);
                setEditingIsoDate(null);
                setVisibleMonthKey((current) => shiftMonthKey(current, 1));
              }}
              onJumpToCurrentMonth={() => {
                setSelectedIsoDate(null);
                setEditingIsoDate(null);
                setVisibleMonthKey(realCurrentMonthKey);
              }}
              onViewDay={(day) => setSelectedIsoDate(day.isoDate)}
              onEditDay={openEditor}
              monthColor={monthColor}
            />

            <div className="grid gap-4 xl:grid-cols-5">
              <StatusCard
                personLabel="PERSON 1"
                accent="rgba(14,165,233,0.55)"
                status="home mode"
                shift="off"
              />
              <StatusCard
                personLabel="PERSON 2"
                accent="rgba(124,58,237,0.55)"
                status="working"
                shift="5:00–1:30"
              />
              <GroceryCard />
              <SharedBoardCard />
              <MealPrepCard />
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-4 lg:grid-cols-2">
          <div className="rounded-[1.5rem] border border-slate-700 bg-black/40 p-6">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-200">
              What V1 got right
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              It made the whiteboard replacement feel real.
            </h2>
            <p className="mt-4 leading-8 text-slate-300">
              Calendar, person cards, groceries, shared notes, and meals all lived on one screen. This version was useful because it made the household board visible enough to test.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-slate-700 bg-black/40 p-6">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-amber-200">
              Why it could not stay this way
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              It was already becoming more than a calendar.
            </h2>
            <p className="mt-4 leading-8 text-slate-300">
              The surface looked workable, but editable days, runtime status, timers, meds, shifts, and appearance state were already pushing it toward a real household appliance.
            </p>
          </div>
        </section>
      </section>

      {selectedDay && !editingDay ? (
        <DayDetailCard
          day={selectedDay}
          days={days}
          onClose={() => setSelectedIsoDate(null)}
          onEdit={openEditor}
          onSelect={setSelectedIsoDate}
        />
      ) : null}

      {editingDay ? (
        <DayEditorModal
          key={editingDay.isoDate}
          day={editingDay}
          onSave={saveDay}
          onClear={clearDay}
          onClose={() => setEditingIsoDate(null)}
        />
      ) : null}

      {appearanceOpen ? (
        <AppearanceModal
          boardTitleColor={boardTitleColor}
          setBoardTitleColor={setBoardTitleColor}
          monthColor={monthColor}
          setMonthColor={setMonthColor}
          onClose={() => setAppearanceOpen(false)}
          onReset={() => {
            setBoardTitleColor("#f8fafc");
            setMonthColor("#a5f3fc");
          }}
        />
      ) : null}
    </main>
  );
}
