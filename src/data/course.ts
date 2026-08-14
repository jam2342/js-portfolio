/**
 * The hands-on activity kit that ships with the cryptography course.
 *
 * Titles, durations, and formats come from the kit's own manifest. If the
 * course gains a public listing URL, put it in `courseUrl` and the site will
 * start linking it; while it's null the page says so instead of guessing.
 */

/**
 * Public Udemy listing. Search/tracking query parameters are deliberately
 * stripped; the bare course URL resolves to the same page.
 */
export const courseUrl: string | null =
  "https://www.udemy.com/course/practical-cryptography-for-developers-and-qa-engineers/";

export const courseTitle = "Practical Cryptography for Developers and QA Engineers";

export const kit = {
  activities: 16,
  orientation: 1,
  minutes: 840,
  python: "3.11+",
  delivery: "Local terminal mini-range",
} as const;

export type Activity = {
  n: string;
  title: string;
  /** Exercise format, as named in the manifest. */
  format: string;
  minutes: number;
};

export const activities: Activity[] = [
  { n: "01", title: "Crypto threat map", format: "Security design review", minutes: 25 },
  { n: "02", title: "Math and randomness playground", format: "Incident investigation", minutes: 35 },
  { n: "03", title: "Break the pattern", format: "Mini challenge", minutes: 40 },
  { n: "04", title: "Authenticated encryption", format: "Debug and repair", minutes: 55 },
  { n: "05", title: "File integrity", format: "Chain of custody", minutes: 40 },
  { n: "06", title: "Password reset audit", format: "State-machine race lab", minutes: 60 },
  { n: "07", title: "Private key lifecycle", format: "Key ceremony tabletop", minutes: 55 },
  { n: "08", title: "Signature verification", format: "Release policy challenge", minutes: 50 },
  { n: "09", title: "TLS evidence pack", format: "Protocol investigation", minutes: 60 },
  { n: "10", title: "JWT mutation matrix", format: "Cross-token confusion", minutes: 60 },
  { n: "11", title: "Crypto code review", format: "Patch and regression", minutes: 60 },
  { n: "12", title: "Incident regression tests", format: "Timed tabletop", minutes: 45 },
  { n: "13", title: "Crypto test framework", format: "Standards traceability", minutes: 60 },
  { n: "14", title: "Negative test pack", format: "Mutation test design", minutes: 60 },
  { n: "15", title: "Capstone validation", format: "Red-team release gate", minutes: 90 },
  { n: "16", title: "PQC migration inventory", format: "Crypto agility board", minutes: 45 },
];
