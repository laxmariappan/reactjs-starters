export default function Performers({performers}){
  return(
    <ul>
    {performers.map((performer,index) => (
        <li key={index} className="performer">
            {performer.name}
            <span className="year">{' '}({performer.startYear} {performer.endYear && - performer.endYear} )</span>
            {/* adding hypen to end year if it exists */}
         </li>
    ))}
    </ul>
  )
}
