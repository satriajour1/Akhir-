import cookingmama from '../assets/cookingmama.png';
import '../App.css'

const Newcookingmama = ()=> {
    return(
        //1. Inline Css
        <div style={{
        }}>
            <div className="cardswit">
                <img className='aturswit' src={cookingmama} />
                <div className='namaswit'>cookingmama</div>
                <div className='deskswit'>Di Jepang, permainan batu-gunting-kertas disebut Janken. Sedangkan, di Indonesia, Janken sering disebut suit jepang. 
                Di Indonesia sendiri, permainan jari </div>
            </div>

            <h1 className='scoreswit'>Highscore:</h1>
            <p className='namascore'>Udin: 100</p>
            <p className='namascore'>Memed: 90</p>
            <p className='namascore'>desta: 89</p>
        </div>
    )
}

export default Newcookingmama