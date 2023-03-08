import subway from '../assets/subway.png';
import '../App.css'

const Newsubway = ()=> {
    return(
        //1. Inline Css
        <div style={{
        }}>
            <div className="cardswit">
                <img className='aturswit' src={subway} />
                <div className='namaswit'>subway</div>
                <div className='deskswit'>Di Jepang, permainan batu-gunting-kertas disebut Janken. Sedangkan, di Indonesia, Janken sering disebut suit jepang. 
                Di Indonesia sendiri, permainan jari </div>
            </div>

            <h1 className='scoreswit'>Highscore:</h1>
            <p className='namascore'>Excel: 100</p>
            <p className='namascore'>Alem: 86</p>
            <p className='namascore'>Mardigu: 85</p>
        </div>
    )
}

export default Newsubway