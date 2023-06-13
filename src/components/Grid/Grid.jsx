
import GridBox from "./gridBox"
import './grid.scss'

import minitur1 from '../../assets/images/img/minitur-1.png'
import minitur2 from '../../assets/images/img/minitur-2.png'
import minitur3 from '../../assets/images/img/minitur-3.png'
import minitur4 from '../../assets/images/img/minitur-4.png'
import minitur5 from '../../assets/images/img/minitur-5.png'
import minitur6 from '../../assets/images/img/minitur-6.png'
import minitur7 from '../../assets/images/img/minitur-7.png'




const Grid = () => {
  return (
    <div className="grid">
        <div className="grid__row">
            <div className="col-4">
                <GridBox image={minitur1}/>
            </div>
            <div className="col-4">
                <GridBox image={minitur2}/>
            </div>
            <div className="col-4">
                <GridBox image={minitur3}/>
            </div>
            <div className="col-3">
                <GridBox image={minitur4}/>
            </div>
            <div className="col-3">
                <GridBox image={minitur5}/>
            </div>
            <div className="col-3">
                <GridBox image={minitur6}/>
            </div>
            <div className="col-3">
                <GridBox image={minitur7}/>
            </div>
        </div>
    </div>
  )
}

export default Grid