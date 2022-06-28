import ItemSkill from "../ItemSkill";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Image from "next/image";

export default function LeftColumn({ profile, skills }) {
  const { name, lastName, occupation, avatar } = profile;
  return (
    <div className="flex-auto md:w-full lg:w-96 md:max-h-full overflow-y-auto relative bg-arian-grisoscuro border-r border-arian-grisclaro scrollbar-thin scrollbar-thumb-arian-scroll scrollbar-track-arian-grisoscuro">
      <section className="mx-auto rounded-2xl px-8 py-6 text-arian-blanco">
        <p className="font-mono text-xs h-0 text-arian-naranja">v1.2.1</p>
        <div className="mt-6 mx-auto text-center">
          <Zoom
            overlayBgColorEnd="rgba(0, 0, 0, 0.95)"
            zoomMargin={40}
            className="inline-block"
          >
            <Image
              src={avatar}
              className="inline-block rounded-full"
              width={190}
              height={190}
              alt="Foto de Arián Fernández"
            />
          </Zoom>
        </div>

        <div className="mt-8">
          <h2 className="flex font-light text-2xl tracking-wide items-stretch">
            <i>
              <b className="font-bold">
                {name} {lastName}
              </b>
            </i>
          </h2>
        </div>
        <p className="font-semibold tracking-wide mt-2.5 text-arian-amarillo mb-10">
          <i>{occupation}</i>
        </p>

        <p className="font-mono text-sm font-medium tracking-wide">
          {/* Line 1 */}
          <font className="text-arian-amarillo">export default</font>{" "}
          <font className="text-arian-celeste">
            <i>function</i>
          </font>{" "}
          <font className="text-arian-azul">Skills</font>{" "}
          <font className="text-arian-grisclaro2">() {"{"}</font>
          <br />
          {/* Line 2 */}
          <font className="text-arian-amarillo pl-4">return</font>{" "}
          <font className="text-arian-grisclaro2">(</font>
        </p>

        <div className="pl-4 pr-8">
          {skills.map((item, index) => (
            <ItemSkill
              key={`skill-${index}`}
              width={item.skill}
              name={item.name}
            />
          ))}
        </div>

        <p className="font-mono text-sm font-medium tracking-wide mt-5">
          {/* Line 3 */}
          <font className="text-arian-grisclaro2 pl-4">)</font>
          <br />
          {/* Line 4 */}
          <font className="text-arian-grisclaro2">{"}"}</font>
        </p>
      </section>
    </div>
  );
}
