import { UserRound } from "lucide-react";
import { Link, useLocation } from "react-router";
import { cn } from "../../lib/utils";
import { personHash, rememberOpener } from "./personHash";
import { WobbleCard } from "../ui/wobble-card";
import { PORTRAIT_SIZE, type Person } from "../../content/people";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

/**
 * Rectangular portrait card used wherever a person is listed (home e-board, project
 * leadership, team page). The whole card links to the person's profile dialog.
 */
const PersonTile = ({
  person,
  role,
  detail,
  projectAccent = false,
}: {
  person: Person;
  /** The role this listing is about, already formatted. */
  role: string;
  /** Optional muted line under the name, e.g. the person's major. */
  detail?: string;
  /** Color the role in the project page's --accent instead of STAR red. (The global
   *  shadcn theme also defines --accent, so it can't serve as an implicit fallback.) */
  projectAccent?: boolean;
}) => {
  const reducedMotion = usePrefersReducedMotion();
  const { pathname, search } = useLocation();
  const otherRoles = person.roles.length - 1;

  return (
    <WobbleCard
      animate={!reducedMotion}
      containerClassName="group h-full rounded-none border border-white/15 bg-black"
      className="flex h-full flex-col rounded-none bg-black"
    >
      <Link
        to={{ pathname, search, hash: personHash(person.id) }}
        aria-haspopup="dialog"
        onClick={(event) => rememberOpener(event.currentTarget)}
        className="flex h-full flex-col"
      >
        <div className="aspect-[4/5] w-full overflow-hidden border-b border-white/10 bg-white/[0.025]">
          {person.photo ? (
            <img
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              src={person.photo}
              alt=""
              width={PORTRAIT_SIZE.width}
              height={PORTRAIT_SIZE.height}
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-white/[0.025]" aria-hidden>
              <UserRound className="h-16 w-16 text-white/20 sm:h-20 sm:w-20" />
            </div>
          )}
        </div>

        <div className="min-h-28 p-4 sm:p-5">
          <p
            className={cn(
              // Two lines reserved so names line up across a row whether or not roles wrap.
              "min-h-[2lh] text-[0.52rem] font-bold uppercase tracking-[0.2em] sm:text-[0.58rem]",
              projectAccent ? "text-[var(--accent)]" : "text-red-300",
            )}
          >
            {role}
          </p>
          <h3 className="mt-2 text-base font-bold leading-tight sm:text-lg">{person.name}</h3>
          {detail && <p className="mt-2 text-[0.65rem] leading-4 text-white/45 sm:text-xs">{detail}</p>}
          {otherRoles > 0 && (
            <p className="mt-2 text-[0.6rem] uppercase tracking-[0.16em] text-white/55">
              +{otherRoles} {otherRoles === 1 ? "role" : "roles"}
            </p>
          )}
        </div>
      </Link>
    </WobbleCard>
  );
};

export default PersonTile;
