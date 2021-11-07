export default function RedlightGreenlight({
  go,
  toggle,
}) {
  let goValue, message
  if(go){
    goValue = 'Green'
    message = 'Go'
  }else{
    goValue = 'Red'
    message = 'Stop'
  }

  return (
    <>
      <div>
        <img src="/doll.png" alt="doll"/>
      </div>
      <div className="data">
        <h2 className={goValue}>
          <span className={goValue}></span>
          {message}
        </h2>
      </div>
      <button onClick={() => toggle(go)} >Toggle Status</button>
    </>
  );
}
