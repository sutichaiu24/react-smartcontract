import React ,{Component} from 'react';
import _ from 'lodash'
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from  './components/video_detail';
const API_KEY = 'AIzaSyAKzSMffjMpXKxUKL7MlZm9m_RiuYktuIY';


class App extends Component { 
  constructor(props){
    super();
    this.state = { videos: []
    , selectVideo: null };
    this.videoSearch('surfboards');
  }
  videoSearch(term){
    YTSearch({key: API_KEY, term:term}, (videos)=>{
      this.setState(
        {videos:videos,
         selectVideo: videos[0]
       });
   });
  }
  

  render() {
    const videoSearch = _.debounce((term)=>{this.videoSearch(term)},300);
  return(
   <div>
     <SearchBar onSearchTermChange= {term => this.videoSearch(term)}/>
     <VideoDetail video ={this.state.selectVideo} />
     <VideoList 
     onVideoSelect={selectVideo => this.setState({selectVideo})}
     videos={this.state.videos} />
   </div>
  );
  }
}

ReactDom.render(<App/>,document.querySelector('.container'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
