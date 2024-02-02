import "./Main.scss"
import { Icon } from '@iconify/react'
import { previewMovies } from '../src/PreviewMovies.js'


export default function Main() {
  return (
    <main>
      <div className="wrapper">
        <div className="content-max">
          <div className="title-logo-text">
            <h5>The</h5>
            <h1>{previewMovies[0].title}</h1>
          </div>
          <div className="rate-date">
            <ul>
              <Icon icon="ic:baseline-star" />
              <Icon icon="ic:baseline-star" />
              <Icon icon="ic:baseline-star" />
              <Icon icon="ic:baseline-star" />
            </ul>
            <p>2010 • Horror</p>
            <span>+16</span>
          </div>
          <div className="info-serial">
            Season <p className="red">10</p> | Episode <p className="red">01</p>{" "}
            | Lines we cross <div className="duration">Duration: 50 min</div>
          </div>
          <div className="description">
            {previewMovies[0].description}
          </div>
          <div className="play-my_list">
            <button className="play">
              <Icon icon="iconoir:play-solid" height='17'/>
              Play
            </button>
            <button className="my_list">
              <Icon icon="mingcute:plus-fill" height='17'/>
              My list
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}


