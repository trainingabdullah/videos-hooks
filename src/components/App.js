import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideo from "../hooks/useVidos";
// transform from claas Component to functional componnent

const App = () => {
  // insshall value for vedue and selct vedoe
  const [selectedVideo, setSelectedVideo] = useState(null);
  // distracter from cstom hook useVideo
  const [videos, search] = useVideo("car");

  // function :-)
  // any time new vido
  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  // setSelectedVideo(respnse.data.items[0]);

  return (
    <div className=" ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              onVideoSelect={(vedeo) => {
                setSelectedVideo(vedeo);
              }}
              videos={videos}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
// class App extends React.Component {
//   // insshall value for vedue and selct vedoe
//   // state = { videos: [], selectedVideo: null };
//   //   defolt serch
//   componentDidMount() {
//     this.onTurmSubmit("car");
//   }
//   //   handle serch
//   onTurmSubmit = async (term) => {
//     // hook for serch API
//     const respnse = await youtube.get("/search", {
//       params: {
//         q: term,
//       },
//     });
//     // set state
//     this.setState({
//       videos: respnse.data.items,
//       selectedVideo: respnse.data.items[0],
//     });
//   };
//   //   set selected vedue
//   onVideoSelect = (vedeo) => {
//     this.setState({ selectedVideo: vedeo });
//   };
//   render() {
//     return (
//       <div className=" ui container">
//         <SearchBar onFormSubmit={this.onTurmSubmit} />
//         <div className="ui grid">
//           <div className="ui row">
//             <div className="eleven wide column">
//               <VideoDetail video={this.state.selectedVideo} />
//             </div>
//             <div className="five wide column">
//               <VideoList
//                 onVideoSelect={this.onVideoSelect}
//                 videos={this.state.videos}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

export default App;
