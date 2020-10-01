import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import * as serviceWorker from './serviceWorker';
import SearchBar from './components/search_bar';
import { render } from '@testing-library/react';
import VideoList from './components/video_list'
const API_KEY = 'AIzaSyAKzSMffjMpXKxUKL7MlZm9m_RiuYktuIY';


class App extends Component { 
  constructor(props){
    super();
    this.state = { videos: [] };
    

  YTSearch({key: API_KEY, term:'surfboards'}, (videos)=>{
   this.setState({videos})
});

  }

  render() {
  return(
   <div>
     <SearchBar />
     <VideoList videos={this.state.videos} />
   </div>
  );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
