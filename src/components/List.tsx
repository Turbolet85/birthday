import Person from "./Person.tsx";
import {IPerson} from "../data.ts";

const List = ({people}:{people:IPerson[]}) => {
  return (
    <section>
      {people.map((person: IPerson) => {
        return <Person {...person} key={person.id}/>
      })}
    </section>
  );
};

export default List;
