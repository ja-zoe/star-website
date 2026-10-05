import { useLocation, useNavigate } from "react-router";
import { UserRound } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { PORTRAIT_SIZE, people, type Role } from "../../content/people";
import { roleLabel } from "./roleLabel";
import { personIdFromHash, takeOpener } from "./personHash";

const ROLE_ORDER: Role["kind"][] = ["eboard", "project", "subteam-lead"];

/**
 * The one profile dialog for the whole app. It opens whenever the URL hash is
 * `#person/<id>` for a known person, whichever page or card linked there.
 */
const PersonProfileDialog = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const personId = personIdFromHash(location.hash);
  const person = people.find((candidate) => candidate.id === personId);
  const close = () => {
    navigate({ pathname: location.pathname, search: location.search }, { replace: true });
  };

  const roles = person
    ? [...person.roles].sort((a, b) => ROLE_ORDER.indexOf(a.kind) - ROLE_ORDER.indexOf(b.kind))
    : [];
  const labels = roles.map((role) => roleLabel(role));

  return (
    <Dialog open={Boolean(person)} onOpenChange={(open) => !open && close()}>
      {person && (
        <DialogContent
          className="space-mono max-h-[85vh] overflow-y-auto border-white/15 bg-black text-white sm:max-w-2xl"
          onCloseAutoFocus={(event) => {
            const opener = takeOpener();
            if (opener?.isConnected) {
              event.preventDefault();
              opener.focus();
            }
          }}
        >
          <div className="grid gap-6 pr-6 text-left sm:grid-cols-[12rem_1fr]">
            <div className="aspect-[4/5] w-40 overflow-hidden border border-white/15 bg-white/[0.025] sm:w-48">
              {person.photo ? (
                <img
                  className="h-full w-full object-cover"
                  src={person.photo}
                  alt=""
                  width={PORTRAIT_SIZE.width}
                  height={PORTRAIT_SIZE.height}
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-3" aria-hidden>
                  <UserRound className="h-16 w-16 text-white/20" />
                </div>
              )}
            </div>

            <div>
              <DialogHeader className="text-left">
                <DialogTitle className="text-2xl leading-tight">{person.name}</DialogTitle>
                <DialogDescription className="sr-only">{labels.join(", ")}</DialogDescription>
              </DialogHeader>

              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Roles">
                {labels.map((label) => (
                  <li
                    key={label}
                    className="border border-red-300/40 px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-[0.16em] text-red-300"
                  >
                    {label}
                  </li>
                ))}
              </ul>

              {(person.major || person.discord) && (
                <dl className="mt-6 grid gap-4 border-t border-white/10 pt-4 sm:grid-cols-2">
                  {person.major && (
                    <div>
                      <dt className="text-[0.6rem] uppercase tracking-wider text-white/50">Major</dt>
                      <dd className="mt-1 text-sm">{person.major}</dd>
                    </div>
                  )}
                  {person.discord && (
                    <div>
                      <dt className="text-[0.6rem] uppercase tracking-wider text-white/50">Discord</dt>
                      <dd className="mt-1 text-sm">@{person.discord}</dd>
                    </div>
                  )}
                </dl>
              )}

              {person.bio && <p className="mt-6 leading-relaxed text-white/80">{person.bio}</p>}

              {!person.photo && <p className="mt-6 text-xs text-white/45">Photo coming soon.</p>}
            </div>
          </div>
        </DialogContent>
      )}
    </Dialog>
  );
};

export default PersonProfileDialog;
