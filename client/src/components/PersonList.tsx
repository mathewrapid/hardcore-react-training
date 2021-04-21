import { AnimateSharedLayout } from "framer-motion";
import { motion } from "framer-motion";
import { FC } from "react";
import { PersonInterface } from "../services/person";
import Person from "./Person";

type Props = {
  persons: PersonInterface[];
  firePerson: (id: string) => void;
};

const PersonList: FC<Props> = ({ persons, firePerson }) => {
  if (persons.length === 0) {
    return null;
  }

  return (
    <div>
      <AnimateSharedLayout>
        <motion.div>
          {persons.map((person) => {
            return (
              <Person firePerson={firePerson} key={person.id} person={person} />
            );
          })}
        </motion.div>
      </AnimateSharedLayout>
    </div>
  );
};

export default PersonList;
