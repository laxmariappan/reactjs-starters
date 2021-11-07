export default function CheckCounter({num}){
  let color;
  let message;
    switch(true){ //true is required for the switch to work
      case (num>=10):
        color = 'green'
        message = <p className="counter">{num} seconds left</p>
      break
      case(num < 10 && num >= 5):
      color = 'gold'
      message = <p className="counter">{num} hurry up</p>
      break
      case (num < 5 && num > 0 ):
      color = 'orange'
      message = <p className="counter">{num} hurry up</p>
      break
      case (num === 0 ):
      color = 'red'
      message = <p className="counter">{num} time up</p>
      break
      default:
      color = 'green'
      message = <p className="counter">{num} seconds left</p>
    }
  return(
    <>
    <div className={color}>
      {message}
    </div>
    <div>
    <progress max="15" value={num}></progress>

    </div>
    </>
  )
}
