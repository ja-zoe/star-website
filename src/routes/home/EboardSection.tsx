import HomeSectionTitle from "../../components/HomeSectionTitle";
import PersonTile from "../../components/people/PersonTile";
import { eboard, eboardPosition } from "../../content/people";

const EboardSection = () => {
  return (
    <section id="EboardSection" className="w-full scroll-mt-24 px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto w-full max-w-7xl">
        <HomeSectionTitle
          title="Meet E-board"
          display="MEET E-BOARD"
          description="The students keeping projects moving, questions answered, and the Cage open."
        />
        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {eboard().map((member) => (
            <PersonTile
              key={member.id}
              person={member}
              role={eboardPosition(member)!}
              detail={member.major}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EboardSection;
