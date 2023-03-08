import fifa from '../assets/fifa.png';
import '../App.css'

const Newfifa = ()=> {
    return(
        //1. Inline Css
        <div style={{
        }}>
            <div className="cardswit">
                <img className='aturswit' src={fifa} />
                <div className='namaswit'>fifa</div>
                <div className='deskswit'>Di Jepang, permainan batu-gunting-kertas disebut Janken. Sedangkan, di Indonesia, Janken sering disebut suit jepang. 
                Di Indonesia sendiri, permainan jari </div>
            </div>

            <h1 className='scoreswit'>Highscore:</h1>
            <p className='namascore'>Budi: 100</p>
            <p className='namascore'>Jona: 80</p>
            <p className='namascore'>Kelvin: 75</p>
        </div>
    )
}

export default Newfifa