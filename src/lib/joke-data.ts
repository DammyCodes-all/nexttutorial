export interface JokeType {
  id: number | string | Date;
  joke: string;
}

const jokes: JokeType[] = [
  {
    id: 1,
    joke: "Why did the developer go broke? Because they used up all their cache.",
  },
  {
    id: "banana-setup",
    joke: "I tried to write a joke about UDP... but you might not get it.",
  },
  { id: new Date("2025-01-01"), joke: "New Year’s resolution: 1920x1080." },
  {
    id: 42,
    joke: "The answer is 42. The question is why your test still fails.",
  },
  {
    id: "refactor-LOL",
    joke: "Refactoring: rewriting yesterday’s clever into today’s clear.",
  },
  {
    id: new Date("2024-12-31T23:59:59Z"),
    joke: "Year-end deploy? Bold move, captain.",
  },
  {
    id: "0xdeadbeef",
    joke: "Hex programmers never die; they just lose their references.",
  },
  {
    id: 7,
    joke: "My code never has bugs. It just develops unexpected features.",
  },
  {
    id: new Date("2023-07-04"),
    joke: "Freedom is deleting 500 lines with one utility function.",
  },
  {
    id: "async-await",
    joke: "I awaited a good joke about promises—still pending.",
  },
];

export default jokes;
