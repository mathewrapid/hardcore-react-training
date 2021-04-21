import axios from "axios";

// type | interface

export interface PersonInterface {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
}

export const getPersons = async (): Promise<PersonInterface[]> => {
  try {
    const persons = await axios.get<PersonInterface[]>(
      `${process.env.REACT_APP_API}/person`
    );

    return persons.data;
  } catch (e) {
    console.error(e);

    throw e;
  }
};

/*
export default {
  getPersons
};
*/
