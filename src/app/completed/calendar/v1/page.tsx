"use client";

import { useMemo, useState } from "react";

type GroceryItem = {
  id: string;
  label: string;
  checked: boolean;
};

type TaskItem = {
  id: string;
  label: string;
  done: boolean;
};

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const calendarDays = Array.from({ length: 35 }, (_, index) => {
  const dayNumber = index - 2;
  const isCurrentMonth = dayNumber >= 1 && dayNumber <= 30;

  const notes: Record<number, string[]> = {
    3: ["Trash night"],
    7: ["Bill check"],
    12: ["Appointment"],
    16: ["Grocery run"],
    22: ["House reset"],
    27: ["Meal prep"],
  };

  return {
    id: `day-${index}`,
    label: isCurrentMonth ? String(dayNumber) : "",
    isCurrentMonth,
    isToday: dayNumber === 16,
    notes: isCurrentMonth ? notes[dayNumber] ?? [] : [],
  };
});

const defaultGroceries: GroceryItem[] = [
  { id: "milk", label: "Milk", checked: false },
  { id: "eggs", label: "Eggs", checked: true },
  { id: "coffee", label: "Coffee", checked: false },
  { id: "paper", label: "Paper towels", checked: false },
];

const defaultTasks: TaskItem[] = [
  { id: "filter", label: "Check filter", done: false },
  { id: "plants", label: "Water plants", done: true },
  { id: "laundry", label: "Move laundry", done: false },
];

const mealDays = [
  ["Mon", "leftovers"],
  ["Tue", "chicken bowls"],
  ["Wed", "easy night"],
  ["Thu", "pasta"],
  ["Fri", "freezer backup"],
];

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-200">
      {children}
    </span>
  );
}

function BoardCard({
  title,
  action,
  children,
  className = "",
}: {
  title: string;
  action?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`rounded-3xl border border-white/15 bg-slate-950/55 p-4 shadow-2xl shadow-black/30 backdrop-blur ${className}`}
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="text-lg font-bold tracking-tight text-white">{title}</h2>
        {action}
      </div>
      {children}
    </section>
  );
}

function EditButton({
  active,
  onClick,
}: {
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] transition ${
        active
          ? "border-cyan-300 bg-cyan-300 text-slate-950"
          : "border-white/15 bg-white/5 text-slate-300 hover:bg-white/10"
      }`}
      aria-pressed={active}
    >
      {active ? "Done" : "Edit"}
    </button>
  );
}

function StatusCard({
  name,
  emoji,
  accent,
  status,
  timers,
  meds,
  shift,
}: {
  name: string;
  emoji: string;
  accent: string;
  status: string;
  timers: string[];
  meds: string;
  shift: string;
}) {
  return (
    <BoardCard title={name}>
      <div className="space-y-4">
        <div
          className="rounded-2xl border border-white/10 p-4"
          style={{
            background: `linear-gradient(135deg, ${accent}, rgba(15, 23, 42, 0.75))`,
          }}
        >
          <div className="flex items-center gap-3">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-black/25 text-3xl">
              {emoji}
            </div>
            <div>
              <div className="text-sm uppercase tracking-[0.2em] text-white/70">
                status line
              </div>
              <div className="text-xl font-black text-white">{status}</div>
            </div>
          </div>
        </div>

        <div className="grid gap-2 text-sm text-slate-200">
          {timers.map((timer) => (
            <div
              key={timer}
              className="flex items-center justify-between rounded-xl border border-white/10 bg-black/20 px-3 py-2"
            >
              <span>Timer</span>
              <strong>{timer}</strong>
            </div>
          ))}
          <div className="flex items-center justify-between rounded-xl border border-white/10 bg-black/20 px-3 py-2">
            <span>Meds</span>
            <strong>{meds}</strong>
          </div>
          <div className="flex items-center justify-between rounded-xl border border-white/10 bg-black/20 px-3 py-2">
            <span>Shift</span>
            <strong>{shift}</strong>
          </div>
        </div>
      </div>
    </BoardCard>
  );
}

function CalendarDemo({
  selectedDay,
  setSelectedDay,
}: {
  selectedDay: string | null;
  setSelectedDay: (value: string | null) => void;
}) {
  return (
    <BoardCard
      title="Calendar"
      className="lg:col-span-5"
      action={
        <div className="flex gap-2">
          <button className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-200">
            Previous
          </button>
          <button className="rounded-full border border-cyan-300/40 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100">
            Current Month
          </button>
          <button className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-200">
            Next
          </button>
        </div>
      }
    >
      <div className="mb-4 flex items-end justify-between">
        <div>
          <div className="text-sm uppercase tracking-[0.28em] text-cyan-200">
            demo month
          </div>
          <div className="text-4xl font-black text-white">Calendar V1</div>
        </div>
        <div className="text-right text-xs uppercase tracking-[0.18em] text-slate-400">
          static sanitized board
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {weekdays.map((day) => (
          <div
            key={day}
            className="rounded-xl border border-white/10 bg-white/5 px-2 py-2 text-center text-xs font-bold uppercase tracking-[0.16em] text-slate-300"
          >
            {day}
          </div>
        ))}

        {calendarDays.map((day) => (
          <button
            key={day.id}
            type="button"
            disabled={!day.isCurrentMonth}
            onClick={() => setSelectedDay(day.label)}
            className={`min-h-24 rounded-2xl border p-2 text-left transition ${
              day.isCurrentMonth
                ? "border-white/10 bg-white/[0.06] hover:border-cyan-300/50 hover:bg-cyan-300/10"
                : "border-white/5 bg-black/20 opacity-40"
            } ${day.isToday ? "ring-2 ring-cyan-300" : ""} ${
              selectedDay === day.label ? "border-cyan-300 bg-cyan-300/15" : ""
            }`}
          >
            <span className="text-sm font-black text-white">{day.label}</span>
            <div className="mt-2 space-y-1">
              {day.notes.slice(0, 2).map((note) => (
                <div
                  key={note}
                  className="truncate rounded-lg bg-black/30 px-2 py-1 text-xs text-slate-200"
                >
                  {note}
                </div>
              ))}
            </div>
          </button>
        ))}
      </div>
    </BoardCard>
  );
}

export default function CalendarV1Page() {
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [appearanceOpen, setAppearanceOpen] = useState(false);
  const [groceryEditing, setGroceryEditing] = useState(false);
  const [sharedBoardEditing, setSharedBoardEditing] = useState(false);
  const [mealPrepEditing, setMealPrepEditing] = useState(false);
  const [groceries, setGroceries] = useState(defaultGroceries);
  const [tasks, setTasks] = useState(defaultTasks);

  const selectedDayNotes = useMemo(() => {
    if (!selectedDay) return [];
    return (
      calendarDays.find((day) => day.label === selectedDay)?.notes ?? [
        "No saved items in this static recreation.",
      ]
    );
  }, [selectedDay]);

  function resetDemo() {
    setSelectedDay(null);
    setAppearanceOpen(false);
    setGroceryEditing(false);
    setSharedBoardEditing(false);
    setMealPrepEditing(false);
    setGroceries(defaultGroceries);
    setTasks(defaultTasks);
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.22),_transparent_30%),radial-gradient(circle_at_70%_20%,_rgba(168,85,247,0.18),_transparent_28%),#050816] text-slate-100">
      <section className="mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-12">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <a
            href="/projects/calendar"
            className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200 hover:bg-white/10"
          >
            ← Back to Calendar Project
          </a>

          <button
            type="button"
            onClick={resetDemo}
            className="rounded-full border border-cyan-300/50 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100 hover:bg-cyan-300/20"
          >
            Reset safe demo
          </button>
        </div>

        <section className="mb-8 rounded-3xl border border-white/15 bg-white/[0.06] p-6 shadow-2xl shadow-black/30 backdrop-blur md:p-8">
          <div className="flex flex-wrap gap-3">
            <Pill>before</Pill>
            <Pill>looked fine at a glance</Pill>
            <Pill>sanitized recreation</Pill>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-cyan-200">
                Calendar Project / V1
              </p>
              <h1 className="max-w-4xl text-5xl font-black tracking-tight text-white md:text-7xl">
                The first board looked real.
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
                This is a safe recreation of the first visible household board:
                calendar on top, status cards underneath, plus grocery, shared
                board, and meal prep widgets. It captures the shape without
                connecting to the old backend.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-300/30 bg-amber-300/10 p-5 text-sm leading-7 text-amber-50">
              <strong className="block text-base text-amber-100">
                Archive safety note
              </strong>
              The original V1 app had live service wiring. This page does not
              import the old Firebase config, API routes, scripts, deployment
              folders, or environment variables.
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-white/15 bg-slate-900/65 p-4 shadow-2xl shadow-black/40 md:p-6">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-3xl font-black text-white">Household Board</h2>
              <p className="text-sm text-slate-400">
                Main household · sanitized-v1-demo
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-300">
                Appearance
              </span>
              <button
                type="button"
                onClick={() => setAppearanceOpen(true)}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-bold text-slate-200 hover:bg-white/10"
              >
                Edit Appearance
              </button>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-5">
            <CalendarDemo
              selectedDay={selectedDay}
              setSelectedDay={setSelectedDay}
            />

            <div className="grid gap-4 lg:col-span-5 lg:grid-cols-5">
              <StatusCard
                name="Squirtle"
                emoji="🌊"
                accent="rgba(14, 165, 233, 0.55)"
                status="home mode"
                timers={["12m left", "44m left"]}
                meds="done"
                shift="off"
              />

              <StatusCard
                name="Nerdy"
                emoji="⚡"
                accent="rgba(168, 85, 247, 0.55)"
                status="working"
                timers={["break in 18m"]}
                meds="due later"
                shift="5:00–1:30"
              />

              <BoardCard
                title="Grocery"
                action={
                  <EditButton
                    active={groceryEditing}
                    onClick={() => setGroceryEditing((value) => !value)}
                  />
                }
              >
                <div className="space-y-2">
                  {groceries.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() =>
                        setGroceries((current) =>
                          current.map((grocery) =>
                            grocery.id === item.id
                              ? { ...grocery, checked: !grocery.checked }
                              : grocery
                          )
                        )
                      }
                      className="flex w-full items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-left text-sm text-slate-200"
                    >
                      <span
                        className={`grid h-5 w-5 place-items-center rounded-md border ${
                          item.checked
                            ? "border-cyan-300 bg-cyan-300 text-slate-950"
                            : "border-white/25"
                        }`}
                      >
                        {item.checked ? "✓" : ""}
                      </span>
                      <span className={item.checked ? "line-through opacity-60" : ""}>
                        {item.label}
                      </span>
                    </button>
                  ))}
                  {groceryEditing ? (
                    <div className="rounded-xl border border-dashed border-white/20 px-3 py-2 text-sm text-slate-400">
                      Add item field lived here.
                    </div>
                  ) : null}
                </div>
              </BoardCard>

              <BoardCard
                title="Shared Board"
                action={
                  <EditButton
                    active={sharedBoardEditing}
                    onClick={() => setSharedBoardEditing((value) => !value)}
                  />
                }
              >
                <div className="space-y-3 text-sm text-slate-200">
                  <div className="rounded-xl border border-white/10 bg-black/20 p-3">
                    Remember to check the mail.
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/20 p-3">
                    House reset before weekend.
                  </div>
                  <div className="space-y-2">
                    {tasks.map((task) => (
                      <button
                        key={task.id}
                        type="button"
                        onClick={() =>
                          setTasks((current) =>
                            current.map((item) =>
                              item.id === task.id
                                ? { ...item, done: !item.done }
                                : item
                            )
                          )
                        }
                        className="flex w-full gap-2 rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-left"
                      >
                        <span>{task.done ? "☑" : "☐"}</span>
                        <span className={task.done ? "line-through opacity-60" : ""}>
                          {task.label}
                        </span>
                      </button>
                    ))}
                  </div>
                  {sharedBoardEditing ? (
                    <div className="rounded-xl border border-dashed border-white/20 px-3 py-2 text-slate-400">
                      Note/task editor lived here.
                    </div>
                  ) : null}
                </div>
              </BoardCard>

              <BoardCard
                title="Meal Prep"
                action={
                  <EditButton
                    active={mealPrepEditing}
                    onClick={() => setMealPrepEditing((value) => !value)}
                  />
                }
              >
                <div className="space-y-2 text-sm">
                  {mealDays.map(([day, meal]) => (
                    <div
                      key={day}
                      className="flex items-center justify-between rounded-xl border border-white/10 bg-black/20 px-3 py-2"
                    >
                      <span className="font-bold text-slate-200">{day}</span>
                      <span className="text-slate-300">{meal}</span>
                    </div>
                  ))}
                  {mealPrepEditing ? (
                    <div className="rounded-xl border border-dashed border-white/20 px-3 py-2 text-slate-400">
                      Meal idea editor lived here.
                    </div>
                  ) : null}
                </div>
              </BoardCard>
            </div>
          </div>
        </section>

        {selectedDay ? (
          <section className="fixed inset-x-4 bottom-4 z-20 mx-auto max-w-xl rounded-3xl border border-cyan-300/30 bg-slate-950/95 p-5 shadow-2xl shadow-black/60 backdrop-blur">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-200">
                  Day Detail
                </p>
                <h2 className="mt-1 text-2xl font-black text-white">
                  Demo Day {selectedDay}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setSelectedDay(null)}
                className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-slate-200"
              >
                Close
              </button>
            </div>

            <div className="mt-4 space-y-2">
              {selectedDayNotes.length > 0 ? (
                selectedDayNotes.map((note) => (
                  <div
                    key={note}
                    className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200"
                  >
                    {note}
                  </div>
                ))
              ) : (
                <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-400">
                  No saved items in this static recreation.
                </div>
              )}
            </div>
          </section>
        ) : null}

        {appearanceOpen ? (
          <section className="fixed inset-0 z-30 grid place-items-center bg-black/70 p-4 backdrop-blur">
            <div className="max-w-lg rounded-3xl border border-white/15 bg-slate-950 p-6 shadow-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-200">
                Appearance modal
              </p>
              <h2 className="mt-2 text-3xl font-black text-white">
                This existed in V1.
              </h2>
              <p className="mt-4 leading-7 text-slate-300">
                The original board let the household appearance be edited. In
                this archive version, the modal is only a safe visual reference.
              </p>
              <button
                type="button"
                onClick={() => setAppearanceOpen(false)}
                className="mt-6 rounded-full border border-cyan-300/50 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100"
              >
                Close modal
              </button>
            </div>
          </section>
        ) : null}

        <section className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-white/15 bg-white/[0.06] p-6">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-200">
              What V1 got right
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              It made the whiteboard replacement feel real.
            </h2>
            <p className="mt-4 leading-8 text-slate-300">
              Calendar, person cards, groceries, shared notes, and meals all
              lived on one screen. That was enough to prove the household board
              idea had legs.
            </p>
          </div>

          <div className="rounded-3xl border border-white/15 bg-white/[0.06] p-6">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-amber-200">
              Why it could not stay this way
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              It was already becoming more than a calendar.
            </h2>
            <p className="mt-4 leading-8 text-slate-300">
              The visible surface looked fine, but the project was becoming a
              live household appliance: runtime status, editable days, timers,
              meds, shifts, and appearance state all wanted stronger structure
              than the first version was built around.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}
