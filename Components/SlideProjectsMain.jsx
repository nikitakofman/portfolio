import { useTranslation } from "react-i18next";
import CustomCursor from "./CustomCursor";
import styles from "./page.module.css";
import Project from "./SlideProjects";

export default function Projects() {
  const projects = [
    {
      title1: "Juventus",
      title2: "France",
      src: "/JFFILM.mp4",
      link: "https://www.juventus.fr",
    },
    {
      title1: "Villa",
      title2: "Palmire",
      src: "/VPFILM.mp4",
      link: "https://www.villadepalmire.com",
    },
    {
      title1: "Beat",
      title2: "Odyssey",
      src: "/BOFILM.mp4",
      link: "https://www.beatodyssey.com",
    },
    {
      title1: "",
      title2: "NZX",
      src: "/NZXFILM.mp4",
      link: "https://www.nzxaudio.com",
    },
  ];

  const { t } = useTranslation();

  return (
    <>
      {" "}
      <main className={styles.main}>
        <div className={styles.gallery}>
          <p>{t("mainworks")}</p>
          {projects.map((project) => {
            return <Project project={project} />;
          })}
        </div>
      </main>
    </>
  );
}
