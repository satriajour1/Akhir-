import swit from '../assets/swit.png';
import '../App.css'

const Rockpaper = ()=> {
    return(
        //1. Inline Css
        <div style={{
        }}>
            <div className="cardswit">
                <img className='aturswit' src={swit} />
                <div className='namaswit'>Rock paper</div>
                <div className='deskswit'>Di Jepang, permainan batu-gunting-kertas disebut Janken. Sedangkan, di Indonesia, Janken sering disebut suit jepang. 
                Di Indonesia sendiri, permainan jari </div>
            </div>

            <h1 className='scoreswit'>Highscore:</h1>
            <p className='namascore'>Jonathan: 100</p>
            <p className='namascore'>Azfar: 90</p>
            <p className='namascore'>Satria: 85</p>
        </div>
    )
}

export default Rockpaper