import {IPerson} from "../data.ts";

const Person = ({image, name, age}:IPerson) => {
  return (
    <article className={'person'}>
      <img src={image} alt={name} className={'img'}/>
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </article>
  );
};

export default Person;