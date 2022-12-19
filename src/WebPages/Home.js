import FilterBar from '../components/Filter/Filter';
import MovieList from '../components/MovieList/MovieList';
import React, { useState } from 'react';
import ADDmovies from '../components/MovieList/ADDMovies';
import Modal from '../Modal'
import '../components/Filter/movie.css'
function Home() {

  const [typed, setTyped] = useState('');
  const [Sectionx, SectionClicked] = useState('');
  const [countSTARS, setCountSTARS] = useState(1)
  const [allValues, setAllValues] = useState({ movieTitle: '', Img: '', Rate: '', url: '', Type: '', Description: '' });
  const [UpdatedMovieList, UpdateMovieList] = useState(MovieList);
  const AddingMovieInfo = (e) => setAllValues({ ...allValues, [e.target.name]: e.target.value })
  const Reasearched = (e) => { setTyped(e) }
  const StarsReasearchedEvent = (e) => { setCountSTARS(e) }
  const NoNSectionClicked = () => { return SectionClicked('') }
  const SectionXClicked = (e) => { return SectionClicked(e) }
  const [popInitial, popUpdate] = useState(false);
  const SubmitingADDedmovie = () => { popUpdate(false); UpdateMovieList([allValues, ...UpdatedMovieList]); window.onscroll = function () { } }
  const disableScrolling = () => { popUpdate(true); var x = window.scrollX; var y = window.scrollY; window.onscroll = function () { window.scrollTo(x, y); }; }
  const ClosingProp = () => { popUpdate(false); window.onscroll = function () { } }

  return (
    <div class="background" >
      <FilterBar Section1={NoNSectionClicked} Section2={SectionXClicked} Section3={SectionXClicked} Section4={SectionXClicked} Section5={SectionClicked} section1='ALL' section2='Kids' section3='Romance' section4='Comedy' section5='Action' Research={Reasearched} StarsResearchFilter={StarsReasearchedEvent} />
      <br></br>
      <section style={{ poisition: 'absolute', display: 'grid', gridTemplateColumns: '22% 22% 22% 22%', marginLeft: '1cm', marginTop: '-2cm' }}>
        <ADDmovies
          MoviesAdded={UpdatedMovieList.filter(d => { return d.movieTitle.toLowerCase().includes(typed.toLowerCase()) && (d.Rate >= countSTARS) && (d.Type.toLowerCase().includes(Sectionx.toLowerCase())) })} />
        <button class='popup' onClick={() => { disableScrolling() }} >ADDmovie</button>
      </section>
      <div class='FormContainer'>
        <Modal Submit={SubmitingADDedmovie} TitleField={AddingMovieInfo} ImgField={AddingMovieInfo} RateField={AddingMovieInfo} URLField={AddingMovieInfo} TypeField={AddingMovieInfo} DescriptionField={AddingMovieInfo} Close={ClosingProp} pop={popInitial} />
      </div>
    </div>
  );
}

export default Home;