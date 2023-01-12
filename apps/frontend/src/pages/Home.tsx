import { FeaturedNotes } from "../components/FeaturedNotes";
import { Heading } from "../components/Heading";
import { NotesGrid } from "../components/NotesGrid";

import styles from "./Home.module.scss";

export const Home = () => {
  return (
    <div className={styles.Home}>
      <FeaturedNotes />
      <Heading level={2}>Check Your Previous Notes:</Heading>
      <NotesGrid />
    </div>
  );
};
