import React from "react";
import Loader from "react-loader-spinner";

class Destination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: [],
      selectedId: null,
      selectedVideoTitle: null,
      isLoading: true
    };
  }

  componentDidMount = async () => {
    var API_key = "AIzaSyBmDPwDFGa1-KZ7lXqvs-oQZR4WhQHQjTQ";
    var maxResults = 5;
    var url =
      "https://www.googleapis.com/youtube/v3/search?key=" +
      API_key +
      "&part=snippet,id&order=date&maxResults=" +
      maxResults +
      "&q=top ten things to do in " +
      this.props.match.params.name;
    var response1 = await fetch(url);
    if (response1.ok) {
      var jSON = await response1.json();
      this.setState({
        videos: jSON.items,
        mainVideo: jSON.items,
        mainSelectedVideo: jSON.items[0].id.videoId,
        mainSelectedVideoTitle: jSON.items[0].snippet.title,
        selectedVideo: jSON.items[0].id.videoId,
        selectedVideoTitle: jSON.items[0].snippet.title,
        isLoading: false
      });
      console.log(jSON);
    } else {
      console.log("Try again");
    }
  };

  displayImage = video => {
    this.setState({
      selectedVideo: video.id.videoId,
      selectedVideoTitle: video.snippet.title
    });
  };

  updateText = input => {
    if (input.currentTarget.value) {
      console.log(input.currentTarget.value);
      var filteredArr = [];
      filteredArr = this.state.videos.filter(
        video =>
          video.snippet.title
            .toLowerCase()
            .indexOf(input.currentTarget.value.toLowerCase()) >= 0
      );

      this.setState({
        videos: filteredArr,
        selectedVideo: filteredArr[0].id.videoId,
        selectedVideoTitle: filteredArr[0].snippet.title
      });
    } else {
      this.setState({
        videos: this.state.mainVideo,
        selectedVideo: this.state.mainSelectedVideo,
        selectedVideoTitle: this.state.mainSelectedVideoTitle
      });
      console.log(this.state.videos);
    }
  };

  render() {
   
    var src;
    if (this.state.selectedVideo) {
      console.log("selected");
      src = "https://www.youtube.com/embed/" + this.state.selectedVideo;
    }
    
    return (
      <>
        {this.state.isLoading ? (
          <Loader type="Circles" color="Red" height={80} width={80} />
        ) : (
          <div className="container-fluid">
            <div className="mt-2">
              <div className="md-form active-cyan active-cyan-2 mb-3">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={this.updateText}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-8">
                <div className="card mb-3 mt-4">
                  <iframe
                    className="card-img-top"
                    title="video player"
                    frameBorder="0"
                    height="540px"
                    width="80%"
                    src={src}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      <b>{this.state.selectedVideoTitle}</b>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-4">
                {this.state.videos.map((video, key) => (
                  <div
                    key={video.id.videoId}
                    className="card mb-3"
                    style={{ maxwidth: "540px" }}
                  >
                    <div className="row no-gutters">
                      <div className="col-md-4">
                        <img
                          src={video.snippet.thumbnails.medium.url}
                          style={{ height: "200px", cursor: "pointer" }}
                          className="card-img"
                          alt="No"
                          onClick={() => this.displayImage(video)}
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">
                            <b>{video.snippet.title}</b>
                          </h5>
                          <p className="card-text">
                            {video.snippet.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Destination;
