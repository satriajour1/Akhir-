import sa from '../assets/sa.png';
import '../App.css'

const Newsa = ()=> {
    return(
        //1. Inline Css
        <div style={{
        }}>
            <div className="cardswit">
                <img className='aturswit' src={sa} />
                <div className='namaswit'>sa</div>
                <div className='deskswit'>Di Jepang, permainan batu-gunting-kertas disebut Janken. Sedangkan, di Indonesia, Janken sering disebut suit jepang. 
                Di Indonesia sendiri, permainan jari </div>
            </div>

            <h1 className='scoreswit'>Highscore:</h1>
            <p className='namascore'>Lukman: 100</p>
            <p className='namascore'>Asep: 89</p>
            <p className='namascore'>Badrus: 78</p>
        </div>
    )
}

export default Newsa