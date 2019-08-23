import React from "react";
import { Jumbotron } from "reactstrap";
import Londan from "../London.jpg";
import Warsaw from "../Warsaw.jpg";
import Rome from "../Rome.jpg";
import Madrid from "../Madrid.jpg";
import Valleta from "../Valleta.jpg";
import Kerala from "../kerala.jpg"
import { Link } from "react-router-dom";
import ReactTooltip from 'react-tooltip'
import TourGuide from "../tourGuide.jpg";


class DisplayCity extends React.Component {
  state = {};
  render() {
    return (
      <>
        <div className="container-fluid" style={{padding:"0px"}}>
          <Jumbotron style={{backgroundImage:"url(" + TourGuide + ")" , color:"white",height :"400px" }}>
            <p className="lead">
              Making every hour count means letting the timeless grandeur and
              beauty of the place seep into your blood.
            </p>
            <hr className="my-2" />
            <p style={{alignItems:"center"}}><b>
            TAKE YOUR DIABETES ON THE ROAD!
            </b></p>
          </Jumbotron>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-4 p-2">
              <div  style={{ width: "17.5rem" }}>
              
              <p data-tip="Londan">
                <Link to={"/Destination/Londan"}>
                  <img
                    src={Londan}
                    alt="London"
                    style={{ width: "280px", height: "280px",borderRadius: 280/2 }}
                  />
                </Link>
                </p>
                <ReactTooltip />
                <div className="card-body" style={{padding:"0px"}} >
                  <h5 className="card-title" style={{justifyContent:"center",display:"flex",color:"#F57C00" }} ><b>Londan</b></h5>
                  <p className="card-text">
                  London is the capital of and largest city in England and the United Kingdom, with the largest municipal population in the European Union.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 p-2">
              <div  style={{ width: "17.5rem" }}>
              <p data-tip="Warsaw">
                <Link to={"/Destination/Warsaw"}>
                  <img
                    src={Warsaw}
                    alt="Warsaw"
                    style={{ width: "280px", height: "280px",borderRadius: 280/2 }}
                  />
                </Link>
                </p>
                <ReactTooltip/>
                <div className="card-body" style={{padding:"0px"}} >
                  <h5 className="card-title" style={{justifyContent:"center",display:"flex",color:"#F57C00" }}><b>Warsaw</b></h5>
                  <p className="card-text">
                  Warsaw is the sprawling capital of Poland. Its widely varied architecture reflects the city's long, turbulent history, from Gothic churches
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 p-2 ">
              <div  style={{ width: "17.5rem" }}>
              <p data-tip="Rome">
                <Link to={"/Destination/Rome"}>
                  <img
                    src={Rome}
                    alt="Rome"
                    style={{ width: "280px", height: "280px",borderRadius: 280/2 }}
                  />
                </Link>
                </p><ReactTooltip/>
                <div className="card-body" style={{padding:"0px"}}>
                  <h5 className="card-title" style={{justifyContent:"center",display:"flex",color:"#F57C00" }}><b>Rome</b></h5>
                  <p className="card-text">
                  Rome, Italy’s capital, is a sprawling, cosmopolitan city with nearly 3,000 years of globally influential art, architecture and culture on display.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4  p-2">
              <div  style={{ width: "17.5rem" }}>
              <p data-tip="Madrid">
                <Link to={"/Destination/Madrid"}>
                  <img
                    src={Madrid}
                    alt="Madrid"
                    style={{ width: "280px", height: "280px",borderRadius: 280/2 }}
                  />
                </Link>
                </p><ReactTooltip/>
                <div className="card-body" style={{padding:"0px"}}>
                  <h5 className="card-title" style={{justifyContent:"center",display:"flex",color:"#F57C00" }}><b>Madrid</b></h5>
                  <p className="card-text">
                  Madrid, Spain's central capital, is a city of elegant boulevards and expansive, manicured parks such as the Buen Retiro
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 p-2">
              <div style={{ width: "17.5rem" }}>
              <p data-tip="Valleta">
                <Link to={"/Destination/Valleta"}>
                  <img
                    src={Valleta}
                    alt="Valleta"
                    style={{ width: "280px", height: "280px",borderRadius: 280/2 }}
                  />
                </Link>
                </p><ReactTooltip/>
                <div className="card-body" style={{padding:"0px"}}>
                  <h5 className="card-title" style={{justifyContent:"center",display:"flex",color:"#F57C00" }}><b>Valleta</b></h5>
                  <p className="card-text">
                  Valletta (or Il-Belt) is the tiny capital of the Mediterranean island nation of Malta. The walled city was established in the 1500s on a peninsula by the Knights of St. John, a Roman Catholic order. 
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 p-2">
              <div  style={{ width: "17.5rem" }}>
              <p data-tip="Kerala">
                <Link to={"/Destination/Kerala"}>
                  <img
                    src={Kerala}
                    alt="Kerala"
                    style={{ width: "280px", height: "280px",borderRadius: 280/2 }}
                  />
                </Link>
                </p><ReactTooltip/>
                <div className="card-body" style={{padding:"0px"}}>
                  <h5 className="card-title" style={{justifyContent:"center",display:"flex",color:"#F57C00" }}><b>Kerala</b></h5>
                  <p className="card-text">
                  Kerala, a state on India's tropical Malabar Coast, has nearly 600km of Arabian Sea shoreline.It's known for its palm-lined beaches and backwaters, a network of canals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default DisplayCity;
