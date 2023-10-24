import SeatsContext from "../SeatsContext"
import "./index.css"

const NormalSeat = props => {
  const {single, ChangeSeat, isActive} = props
  const {id} = single

  const sendId = () => {
    ChangeSeat(id)
  }

  const changeSeatColor = isActive ? 'btn-green' : 'btn-seat'

  return (
    <SeatsContext.Consumer>
      {value => {
        const {seatIds} = value
        const isInclude = seatIds.includes(id)
        return (
          <li>
            <button
              type="button"
              onClick={sendId}
              className={changeSeatColor}
              disabled={isInclude}
            >
              seat
            </button>
          </li>
        )
      }}
    </SeatsContext.Consumer>
  )
}

export default NormalSeat
