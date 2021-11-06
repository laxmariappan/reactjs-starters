import Performers from './performer';
export default function CharacterList({
  data,
}) {
  return (
    <>
{data.map((character, index) => (

   <div key={index}>
      <h2 className="character">{character.name}</h2>
      <hr/>
      <Performers performers={character.performers} />
    </div>


    ))}


    </>
  );
}
