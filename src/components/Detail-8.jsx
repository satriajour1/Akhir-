import harvestmoon from '../assets/harvestmoon.png';
import '../App.css'

const Newharvestmoon = ()=> {
    return(
        //1. Inline Css
        <div style={{
        }}>
            <div className="cardswit">
                <img className='aturswit' src={harvestmoon} />
                <div className='namaswit'>harvestmoon</div>
                <div className='deskswit'>Di Jepang, permainan batu-gunting-kertas disebut Janken. Sedangkan, di Indonesia, Janken sering disebut suit jepang. 
                Di Indonesia sendiri, permainan jari </div>
            </div>

            <h1 className='scoreswit'>Highscore:</h1>
            <p className='namascore'>Melvin: 100</p>
            <p className='namascore'>Jo: 90</p>
            <p className='namascore'>Alex: 87</p>
        </div>
    )
}

export default Newharvestmoon