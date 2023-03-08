import gta from '../assets/gta.png';
import '../App.css'

const Newgta = ()=> {
    return(
        //1. Inline Css
        <div style={{
        }}>
            <div className="cardswit">
                <img className='aturswit' src={gta} />
                <div className='namaswit'>gta</div>
                <div className='deskswit'>Di Jepang, permainan batu-gunting-kertas disebut Janken. Sedangkan, di Indonesia, Janken sering disebut suit jepang. 
                Di Indonesia sendiri, permainan jari </div>
            </div>

            <h1 className='scoreswit'>Highscore:</h1>
            <p className='namascore'>Jonathan: 100</p>
            <p className='namascore'>Surya: 79</p>
            <p className='namascore'>Syarif: 75</p>
        </div>
    )
}

export default Newgta