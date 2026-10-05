import type { ProjectId } from "./currentInfo";
import { SUBTEAM_NAMES, type SubteamId } from "./subteams";
import julianPhoto from "/eboard/julian.webp";
import praneethPhoto from "/eboard/praneeth.webp";
import aayushiPhoto from "/eboard/aayushi.webp";
import nilaPhoto from "/eboard/nila.webp";
import kanikaPhoto from "/eboard/kanika.webp";

/** E-board positions in display (hierarchy) order. */
export const EBOARD_ORDER = [
  "President",
  "Vice President",
  "Treasurer",
  "Outreach Coordinator",
  "Social Media Coordinator",
  "Webmaster",
  "EGC Representative",
  "SEDS Representative",
] as const;

export type EboardPosition = (typeof EBOARD_ORDER)[number];

export type Role =
  | { kind: "eboard"; position: EboardPosition }
  | {
      kind: "project";
      project: ProjectId;
      position: "Project Manager" | "Chief Engineer";
      scope?: "Internal" | "External";
    }
  | { kind: "subteam-lead"; subteam: SubteamId };

export interface PersonPhoto {
  src: string;
  width: number;
  height: number;
  /** CSS object-position used to frame the face inside the card crop. */
  position?: string;
}

export interface Person {
  /** Kebab-case full name; also the photo file name and the profile URL hash. */
  id: string;
  name: string;
  roles: Role[];
  /** Absent until the person has a portrait; cards show a placeholder icon. */
  photo?: PersonPhoto;
  major?: string;
  /** Written by the person; never invented. */
  bio?: string;
  /** Shown publicly only for people who agreed to it. */
  discord?: string;
}

const LEGACY_PHOTO = { width: 964, height: 640 };

export const people: Person[] = [
  {
    id: "kanika-syal",
    name: "Kanika Syal",
    roles: [
      { kind: "eboard", position: "President" },
      { kind: "subteam-lead", subteam: "robotics/mechanical" },
    ],
    photo: { src: kanikaPhoto, ...LEGACY_PHOTO, position: "55%" },
    major: "Mechanical Engineering",
  },
  {
    id: "praneeth-damarla",
    name: "Praneeth Damarla",
    roles: [{ kind: "eboard", position: "Vice President" }],
    photo: { src: praneethPhoto, ...LEGACY_PHOTO, position: "75% 20px" },
    major: "Electrical and Computer Engineering",
  },
  {
    id: "sasho-petrov",
    name: "Sasho Petrov",
    roles: [{ kind: "eboard", position: "Treasurer" }],
  },
  {
    id: "nila-anbumani",
    name: "Nila Anbumani",
    roles: [{ kind: "eboard", position: "Outreach Coordinator" }],
    photo: { src: nilaPhoto, ...LEGACY_PHOTO },
    major: "Math and Computer Science",
  },
  {
    id: "aayushi-mallik",
    name: "Aayushi Mallik",
    roles: [{ kind: "eboard", position: "Social Media Coordinator" }],
    photo: { src: aayushiPhoto, ...LEGACY_PHOTO },
    major: "Aerospace Engineering",
  },
  {
    id: "julian-vilfort",
    name: "Julian Vilfort",
    roles: [
      { kind: "eboard", position: "Webmaster" },
      { kind: "subteam-lead", subteam: "cubesat/guidance-and-controls" },
      { kind: "subteam-lead", subteam: "robotics/software" },
    ],
    photo: { src: julianPhoto, ...LEGACY_PHOTO, position: "65% 25px" },
    major: "Electrical and Computer Engineering",
  },
  {
    id: "vanshika-gupta",
    name: "Vanshika Gupta",
    roles: [{ kind: "eboard", position: "EGC Representative" }],
  },
  {
    id: "venya-tiwari",
    name: "Venya Tiwari",
    roles: [{ kind: "eboard", position: "SEDS Representative" }],
  },
  {
    id: "natalia-rabinovich",
    name: "Natalia Rabinovich",
    roles: [{ kind: "project", project: "cubesat", position: "Project Manager" }],
  },
  {
    id: "joseph-field",
    name: "Joseph Field",
    roles: [{ kind: "project", project: "cubesat", position: "Chief Engineer" }],
  },
  {
    id: "jordan-gopez",
    name: "Jordan Gopez",
    roles: [
      { kind: "project", project: "robotics", position: "Project Manager", scope: "Internal" },
    ],
  },
  {
    id: "devon-de-sanctis",
    name: "Devon De Sanctis",
    roles: [
      { kind: "project", project: "robotics", position: "Project Manager", scope: "External" },
    ],
  },
  {
    id: "thomas-kamyszek",
    name: "Thomas Kamyszek",
    roles: [
      { kind: "project", project: "robotics", position: "Chief Engineer" },
      { kind: "subteam-lead", subteam: "robotics/mechanical" },
    ],
  },
  {
    id: "ihsan-balik",
    name: "Ihsan Balik",
    roles: [
      { kind: "project", project: "weather-balloon", position: "Project Manager" },
      { kind: "subteam-lead", subteam: "weather-balloon/structures" },
    ],
  },
  {
    id: "aidan-mclendon",
    name: "Aidan McLendon",
    roles: [{ kind: "subteam-lead", subteam: "cubesat/structures" }],
  },
  {
    id: "timothy-wilburn",
    name: "Timothy Wilburn",
    roles: [{ kind: "subteam-lead", subteam: "cubesat/thermal" }],
  },
  {
    id: "ahmadh-hassan",
    name: "Ahmadh Hassan",
    roles: [{ kind: "subteam-lead", subteam: "cubesat/power" }],
  },
  {
    id: "miguel-pagador",
    name: "Miguel Pagador",
    roles: [{ kind: "subteam-lead", subteam: "cubesat/communications" }],
  },
  {
    id: "amrik-krishnakumar",
    name: "Amrik Krishnakumar",
    roles: [{ kind: "subteam-lead", subteam: "cubesat/systems-integration" }],
  },
  {
    id: "parth-patel",
    name: "Parth Patel",
    roles: [{ kind: "subteam-lead", subteam: "cubesat/systems-integration" }],
  },
  {
    id: "seth-caskey",
    name: "Seth Caskey",
    roles: [{ kind: "subteam-lead", subteam: "cubesat/flight-software" }],
  },
  {
    id: "christian-metchenko",
    name: "Christian Metchenko",
    roles: [{ kind: "subteam-lead", subteam: "cubesat/payload" }],
  },
  {
    id: "bhanavi-senthil",
    name: "Bhanavi Senthil",
    roles: [{ kind: "subteam-lead", subteam: "robotics/electrical" }],
  },
  {
    id: "victoria-santiago",
    name: "Victoria Santiago",
    roles: [{ kind: "subteam-lead", subteam: "weather-balloon/software" }],
  },
];

/** Everything after the first word, so "Devon De Sanctis" sorts under "De Sanctis". */
const familyName = (person: Person) => person.name.split(" ").slice(1).join(" ");
const byFamilyName = (a: Person, b: Person) => familyName(a).localeCompare(familyName(b));

/** The person's e-board position, if they hold one. */
export const eboardPosition = (person: Person) =>
  person.roles.find((role): role is Extract<Role, { kind: "eboard" }> => role.kind === "eboard")
    ?.position;

/** E-board members in hierarchy order. */
export const eboard = () =>
  people
    .filter((person) => eboardPosition(person))
    .sort(
      (a, b) =>
        EBOARD_ORDER.indexOf(eboardPosition(a)!) - EBOARD_ORDER.indexOf(eboardPosition(b)!),
    );

const leadershipRank = (role: Extract<Role, { kind: "project" }>) =>
  (role.position === "Project Manager" ? 0 : 2) + (role.scope === "External" ? 1 : 0);

/** A project's leadership: Project Manager(s), internal before external, then Chief Engineer. */
export const projectLeadership = (project: ProjectId) =>
  people
    .flatMap((person) =>
      person.roles
        .filter(
          (role): role is Extract<Role, { kind: "project" }> =>
            role.kind === "project" && role.project === project,
        )
        .map((role) => ({ person, role })),
    )
    .sort((a, b) => leadershipRank(a.role) - leadershipRank(b.role));

/** Leads of one subteam, ordered by family name. */
export const subteamLeads = (subteam: SubteamId) =>
  people
    .filter((person) =>
      person.roles.some((role) => role.kind === "subteam-lead" && role.subteam === subteam),
    )
    .sort(byFamilyName);

if (import.meta.env.DEV) {
  const problems: string[] = [];
  const ids = new Set<string>();
  for (const person of people) {
    if (ids.has(person.id)) problems.push(`duplicate person id "${person.id}"`);
    ids.add(person.id);
    if (person.roles.length === 0) problems.push(`${person.id} has no roles`);
  }
  for (const position of EBOARD_ORDER) {
    const holders = people.filter((person) => eboardPosition(person) === position);
    if (holders.length !== 1) problems.push(`${position} is held by ${holders.length} people`);
  }
  for (const subteam of Object.keys(SUBTEAM_NAMES) as SubteamId[]) {
    if (subteamLeads(subteam).length === 0) problems.push(`${subteam} has no lead`);
  }
  if (problems.length) throw new Error(`people.ts is inconsistent:\n${problems.join("\n")}`);
}
