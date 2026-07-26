"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type PersonId = "person1" | "person2";
type TimerType = "Break" | "Lunch";

type TimerState = {
  id: string;
  personId: PersonId;
  type: TimerType;
  endAt: number;
};

type MedsState = {
  taken: boolean;
  takenAt: string | null;
};

type EventItem = {
  id: string;
  title: string;
  time: string;
};

type ReminderItem = {
  id: string;
  title: string;
  offset: string;
};

type DayContent = {
  events: EventItem[];
  reminders: ReminderItem[];
};

const personLabels: Record<PersonId, string> = {
  person1: "PERSON 1",
  person2: "PERSON 2",
};

const people: PersonId[] = ["person1", "person2"];

const initialDayContent: Record<number, DayContent> = {
  4: {
    events: [{ id: "e-4-1", title: "Pay bills", time: "09:00" }],
    reminders: [{ id: "r-4-1", title: "Trash out", offset: "At time" }],
  },
  9: {
    events: [{ id: "e-9-1", title: "Appointment", time: "14:30" }],
    reminders: [{ id: "r-9-1", title: "Bring documents", offset: "60 min" }],
  },
  17: {
    events: [{ id: "e-17-1", title: "Grocery pickup", time: "17:15" }],
    reminders: [],
  },
  22: {
    events: [],
    reminders: [{ id: "r-22-1", title: "Refill meds", offset: "120 min" }],
  },
};

function pad2(value: number) {
  return value.toString().padStart(2, "0");
}

function formatTimer(endAt: number, now: number) {
  const remaining = Math.max(0, Math.ceil((endAt - now) / 1000));
  const minutes = Math.floor(remaining / 60);
  const seconds = remaining % 60;
  return `${pad2(minutes)}m ${pad2(seconds)}s`;
}

function formatClock(date: Date) {
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
}

function makeId(prefix: string) {
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

const days = Array.from({ length: 31 }, (_, index) => index + 1);

export default function CompletedCalendarV2Page() {
  const [selectedDay, setSelectedDay] = useState(9);
  const [dayContent, setDayContent] = useState<Record<number, DayContent>>(initialDayContent);
  const [eventTitle, setEventTitle] = useState("Call the office");
  const [eventTime, setEventTime] = useState("10:30");
  const [reminderTitle, setReminderTitle] = useState("Check calendar board");
  const [reminderOffset, setReminderOffset] = useState("15 min");
  const [timers, setTimers] = useState<TimerState[]>([]);
  const [meds, setMeds] = useState<Record<PersonId, MedsState>>({
    person1: { taken: false, takenAt: null },
    person2: { taken: false, takenAt: null },
  });
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const interval = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    setTimers((current) => current.filter((timer) => timer.endAt > now));
  }, [now]);

  const selectedContent = dayContent[selectedDay] ?? { events: [], reminders: [] };

  const monthStats = useMemo(() => {
    const all = Object.values(dayContent);
    const events = all.reduce((total, day) => total + day.events.length, 0);
    const reminders = all.reduce((total, day) => total + day.reminders.length, 0);
    const activeTimers = timers.length;
    const medsDone = Object.values(meds).filter((entry) => entry.taken).length;

    return { events, reminders, activeTimers, medsDone };
  }, [dayContent, timers.length, meds]);

  function setPersonTimer(personId: PersonId, type: TimerType, minutes: number) {
    setTimers((current) => {
      const withoutSameTimer = current.filter(
        (timer) => !(timer.personId === personId && timer.type === type)
      );

      return [
        ...withoutSameTimer,
        {
          id: makeId(`${personId}-${type.toLowerCase()}`),
          personId,
          type,
          endAt: Date.now() + minutes * 60 * 1000,
        },
      ];
    });
  }

  function clearPersonTimer(personId: PersonId, type: TimerType) {
    setTimers((current) =>
      current.filter((timer) => !(timer.personId === personId && timer.type === type))
    );
  }

  function markMeds(personId: PersonId) {
    setMeds((current) => ({
      ...current,
      [personId]: { taken: true, takenAt: formatClock(new Date()) },
    }));
  }

  function clearMeds(personId: PersonId) {
    setMeds((current) => ({
      ...current,
      [personId]: { taken: false, takenAt: null },
    }));
  }

  function addEvent() {
    const trimmed = eventTitle.trim();
    if (!trimmed) return;

    setDayContent((current) => {
      const existing = current[selectedDay] ?? { events: [], reminders: [] };
      return {
        ...current,
        [selectedDay]: {
          ...existing,
          events: [
            ...existing.events,
            { id: makeId("event"), title: trimmed, time: eventTime || "All day" },
          ],
        },
      };
    });

    setEventTitle("");
  }

  function addReminder() {
    const trimmed = reminderTitle.trim();
    if (!trimmed) return;

    setDayContent((current) => {
      const existing = current[selectedDay] ?? { events: [], reminders: [] };
      return {
        ...current,
        [selectedDay]: {
          ...existing,
          reminders: [
            ...existing.reminders,
            { id: makeId("reminder"), title: trimmed, offset: reminderOffset },
          ],
        },
      };
    });

    setReminderTitle("");
  }

  function clearSelectedDay() {
    setDayContent((current) => ({
      ...current,
      [selectedDay]: { events: [], reminders: [] },
    }));
  }

  function resetDemo() {
    setSelectedDay(9);
    setDayContent(initialDayContent);
    setTimers([]);
    setMeds({
      person1: { taken: false, takenAt: null },
      person2: { taken: false, takenAt: null },
    });
    setEventTitle("Call the office");
    setEventTime("10:30");
    setReminderTitle("Check calendar board");
    setReminderOffset("15 min");
  }

  function personTimers(personId: PersonId) {
    return timers.filter((timer) => timer.personId === personId);
  }

  return (
    <main className="min-h-screen bg-[#07111f] text-[#edf8f8]">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_12%_12%,rgba(0,109,111,0.42),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(135,81,106,0.34),transparent_30%),radial-gradient(circle_at_50%_90%,rgba(214,165,80,0.16),transparent_36%),linear-gradient(135deg,#07111f,#111a34_52%,#062b2d)]" />

      <div className="mx-auto max-w-7xl px-4 py-8 md:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <Link
            href="/completed/calendar"
            className="inline-flex w-fit border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-[#c6d9dc] transition hover:border-[#D6A550]/70 hover:text-white"
          >
            ← Calendar Project
          </Link>

          <button
            type="button"
            onClick={resetDemo}
            className="w-fit border border-[#D6A550]/45 bg-[#D6A550]/10 px-4 py-2 text-sm text-[#f0dfbd] transition hover:bg-[#D6A550]/20"
          >
            Reset demo
          </button>
        </div>

        <section className="mt-8 border border-white/10 bg-[#0c1426]/90 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.28)] md:p-7">
          <p className="text-xs uppercase tracking-[0.32em] text-[#D6A550]">
            V2 / finished board
          </p>
          <div className="mt-4 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <h1 className="text-5xl font-black leading-[0.9] tracking-[-0.07em] md:text-7xl">
                The actual appliance.
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-[#b7c9d0]">
                This is a sanitized, local-only recreation of the finished version: structured day content, visible reminders, status cards, timers, meds, and controls that update the board without touching live household data.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-4">
              <div className="border border-white/10 bg-white/[0.04] p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-[#83d7d7]">events</p>
                <p className="mt-2 text-2xl font-black text-white">{monthStats.events}</p>
              </div>
              <div className="border border-white/10 bg-white/[0.04] p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-[#D6A550]">reminders</p>
                <p className="mt-2 text-2xl font-black text-white">{monthStats.reminders}</p>
              </div>
              <div className="border border-white/10 bg-white/[0.04] p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-[#d8a9bc]">timers</p>
                <p className="mt-2 text-2xl font-black text-white">{monthStats.activeTimers}</p>
              </div>
              <div className="border border-white/10 bg-white/[0.04] p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-[#83d7d7]">meds</p>
                <p className="mt-2 text-2xl font-black text-white">{monthStats.medsDone}/2</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6 grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
          <div className="border border-white/10 bg-[#0c1426]/90 p-4 md:p-6">
            <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#83d7d7]">calendar</p>
                <h2 className="mt-2 text-3xl font-black tracking-[-0.04em] text-white">May 2026</h2>
              </div>
              <p className="max-w-sm text-sm leading-6 text-[#b7c9d0]">
                Click a day, add structured events/reminders, and the cell updates immediately.
              </p>
            </div>

            <div className="grid grid-cols-7 gap-2 text-center text-xs uppercase tracking-[0.18em] text-[#D6A550]">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div key={day} className="py-2">{day}</div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-2">
              {days.map((day) => {
                const content = dayContent[day] ?? { events: [], reminders: [] };
                const isSelected = day === selectedDay;
                const hasContent = content.events.length > 0 || content.reminders.length > 0;

                return (
                  <button
                    key={day}
                    type="button"
                    onClick={() => setSelectedDay(day)}
                    className={`min-h-[92px] border p-2 text-left transition ${
                      isSelected
                        ? "border-[#D6A550] bg-[#D6A550]/16"
                        : hasContent
                          ? "border-[#1ba1a4]/45 bg-[#006D6F]/14 hover:border-[#D6A550]/60"
                          : "border-white/10 bg-white/[0.035] hover:border-white/25"
                    }`}
                  >
                    <span className="text-sm font-bold text-white">{day}</span>
                    <div className="mt-2 space-y-1">
                      {content.events.slice(0, 1).map((event) => (
                        <div key={event.id} className="truncate bg-[#87516A]/35 px-2 py-1 text-[11px] text-[#f0cedb]">
                          {event.title}
                        </div>
                      ))}
                      {content.reminders.slice(0, 1).map((reminder) => (
                        <div key={reminder.id} className="truncate bg-[#D6A550]/22 px-2 py-1 text-[11px] text-[#f0dfbd]">
                          {reminder.title}
                        </div>
                      ))}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="border border-[#D6A550]/45 bg-[#14172a] p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-[#D6A550]">selected day</p>
              <h2 className="mt-2 text-3xl font-black text-white">May {selectedDay}</h2>

              <div className="mt-5 space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#83d7d7]">events</p>
                  <div className="mt-2 space-y-2">
                    {selectedContent.events.length ? (
                      selectedContent.events.map((event) => (
                        <div key={event.id} className="border border-white/10 bg-white/[0.04] p-3 text-sm text-[#d6e8eb]">
                          <span className="font-semibold text-white">{event.time}</span> · {event.title}
                        </div>
                      ))
                    ) : (
                      <p className="text-sm text-[#8ea6ad]">No events.</p>
                    )}
                  </div>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#D6A550]">reminders</p>
                  <div className="mt-2 space-y-2">
                    {selectedContent.reminders.length ? (
                      selectedContent.reminders.map((reminder) => (
                        <div key={reminder.id} className="border border-white/10 bg-white/[0.04] p-3 text-sm text-[#f0dfbd]">
                          <span className="font-semibold text-white">{reminder.offset}</span> · {reminder.title}
                        </div>
                      ))
                    ) : (
                      <p className="text-sm text-[#8ea6ad]">No reminders.</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-5 grid gap-3">
                <label className="text-sm text-[#c7d7dc]">
                  Event title
                  <input
                    value={eventTitle}
                    onChange={(event) => setEventTitle(event.target.value)}
                    className="mt-1 w-full border border-white/10 bg-[#07111f] px-3 py-2 text-base text-white outline-none focus:border-[#D6A550]"
                  />
                </label>
                <label className="text-sm text-[#c7d7dc]">
                  Event time
                  <span className="mt-1 flex w-full min-w-0 border border-white/10 bg-[#07111f] px-3 py-2 focus-within:border-[#D6A550]">
                    <input
                      type="time"
                      value={eventTime}
                      onChange={(event) => setEventTime(event.target.value)}
                      className="block w-full min-w-0 border-0 bg-transparent p-0 text-base text-white outline-none"
                    />
                  </span>
                </label>
                <button type="button" onClick={addEvent} className="border border-[#87516A]/60 bg-[#87516A]/28 px-3 py-2 text-sm text-[#f0cedb] hover:bg-[#87516A]/40">
                  Save event
                </button>

                <label className="text-sm text-[#c7d7dc]">
                  Reminder title
                  <input
                    value={reminderTitle}
                    onChange={(event) => setReminderTitle(event.target.value)}
                    className="mt-1 w-full border border-white/10 bg-[#07111f] px-3 py-2 text-base text-white outline-none focus:border-[#D6A550]"
                  />
                </label>
                <label className="text-sm text-[#c7d7dc]">
                  Reminder offset
                  <select
                    value={reminderOffset}
                    onChange={(event) => setReminderOffset(event.target.value)}
                    className="mt-1 w-full border border-white/10 bg-[#07111f] px-3 py-2 text-base text-white outline-none focus:border-[#D6A550]"
                  >
                    <option>At time</option>
                    <option>15 min</option>
                    <option>60 min</option>
                    <option>120 min</option>
                  </select>
                </label>
                <button type="button" onClick={addReminder} className="border border-[#D6A550]/60 bg-[#D6A550]/16 px-3 py-2 text-sm text-[#f0dfbd] hover:bg-[#D6A550]/25">
                  Save reminder
                </button>
                <button type="button" onClick={clearSelectedDay} className="border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-[#c7d7dc] hover:bg-white/[0.08]">
                  Clear selected day
                </button>
              </div>
            </div>
          </aside>
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-2">
          {people.map((personId) => {
            const activeTimers = personTimers(personId);
            const medState = meds[personId];

            return (
              <div key={personId} className="border border-white/10 bg-[#0c1426]/90 p-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-[#D6A550]">status card</p>
                    <h2 className="mt-2 text-4xl font-black tracking-[-0.05em] text-white">{personLabels[personId]}</h2>
                    <p className="mt-2 text-sm text-[#b7c9d0]">Available by phone</p>
                  </div>

                  <div className="grid gap-2 text-sm sm:min-w-[210px]">
                    {activeTimers.length ? (
                      activeTimers.map((timer) => (
                        <div key={timer.id} className="border border-[#1ba1a4]/45 bg-[#006D6F]/14 p-3">
                          <div className="text-xs uppercase tracking-[0.2em] text-[#83d7d7]">{timer.type}</div>
                          <div className="mt-1 text-xl font-black text-white">{formatTimer(timer.endAt, now)}</div>
                        </div>
                      ))
                    ) : (
                      <div className="border border-white/10 bg-white/[0.04] p-3 text-[#8ea6ad]">No active timers.</div>
                    )}

                    <div className={`border p-3 ${medState.taken ? "border-[#D6A550]/45 bg-[#D6A550]/14 text-[#f0dfbd]" : "border-[#87516A]/45 bg-[#87516A]/18 text-[#e0b9c8]"}`}>
                      <div className="text-xs uppercase tracking-[0.2em]">Meds</div>
                      <div className="mt-1 text-xl font-black text-white">
                        {medState.taken ? `Taken • ${medState.takenAt}` : "Pending"}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid gap-2 sm:grid-cols-3">
                  <button type="button" onClick={() => setPersonTimer(personId, "Break", 15)} className="border border-[#1ba1a4]/45 bg-[#006D6F]/18 px-3 py-2 text-sm text-[#bde9e9] hover:bg-[#006D6F]/28">Start break</button>
                  <button type="button" onClick={() => clearPersonTimer(personId, "Break")} className="border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-[#c7d7dc] hover:bg-white/[0.08]">Clear break</button>
                  <button type="button" onClick={() => setPersonTimer(personId, "Lunch", 30)} className="border border-[#D6A550]/45 bg-[#D6A550]/14 px-3 py-2 text-sm text-[#f0dfbd] hover:bg-[#D6A550]/24">Start lunch</button>
                  <button type="button" onClick={() => clearPersonTimer(personId, "Lunch")} className="border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-[#c7d7dc] hover:bg-white/[0.08]">Clear lunch</button>
                  <button type="button" onClick={() => markMeds(personId)} className="border border-[#87516A]/45 bg-[#87516A]/20 px-3 py-2 text-sm text-[#e0b9c8] hover:bg-[#87516A]/32">Mark meds</button>
                  <button type="button" onClick={() => clearMeds(personId)} className="border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-[#c7d7dc] hover:bg-white/[0.08]">Clear meds</button>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </main>
  );
}
