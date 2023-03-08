import templerun from '../assets/templerun.png';
import '../App.css'

const Newtemplerun = ()=> {
    return(
        //1. Inline Css
        <div style={{
        }}>
            <div className="cardswit">
                <img className='aturswit' src={templerun} />
                <div className='namaswit'>templerun</div>
                <div className='deskswit'>Di Jepang, permainan batu-gunting-kertas disebut Janken. Sedangkan, di Indonesia, Janken sering disebut suit jepang. 
                Di Indonesia sendiri, permainan jari </div>
            </div>

            <h1 className='scoreswit'>Highscore:</h1>
            <p className='namascore'>Boco: 100</p>
            <p className='namascore'>Nabil: 95</p>
            <p className='namascore'>Ahza: 90</p>
        </div>
    )
}

export default Newtemplerun