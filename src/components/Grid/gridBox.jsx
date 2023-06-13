import './grid.scss'

const GridBox = ({image}) => {
  return (
    <div className="grid__col">
        <div className="grid__overlay">
          <button className='btn'>Узнать больше</button>
        </div>
        <img src={image} alt="" />
    </div>
  )
}

export default GridBox