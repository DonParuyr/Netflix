import Main from './Main'
import Movie from './Movie'
import Serials from './Serials'

import './Home.scss'

export default function Home(){
    return(
        <div className='home'>
            <Main />
            <Movie />
            <Serials />
        </div>
    )
}