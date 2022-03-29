import React, { Component } from "react";
import PlaceData from "../../data/data.json";
import "./placedetail.css";

class PlaceDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
    };
  }
  componentDidMount() {
    this.setState({ id: window.location.pathname.split("/")[1] });
  }
  render() {
    return (
      <>
        <button type="button" class="btn mx-5 mt-2 btn-button" onClick={() => window.location.href="/"} >
           BACK
        </button>
        <div className="container bg-color">
          {PlaceData.map((placeDetail, index) => {
            return placeDetail.id == this.state.id ? (
              <div className="row">
                <div className="col-lg-7">
                  <div className="card">
                    <img
                      className="img-profile card-img-top"
                      src={placeDetail.profile_image_url}
                    />
                    <div className="px-5">
                      <div className="row">
                        <h3 className="col-lg-6 col-sm-6 col-8 mb-3 mt-3">
                          {placeDetail.name}
                        </h3>
                        <div className="col-lg-6 col-sm-6 col-4 Rating d-flex align-items-center justify-content-center">
                          <i class="fa fa-circle p-1" aria-hidden="true"></i>
                          {placeDetail.rating}
                        </div>
                      </div>
                      <div className="row">
                        <h5 className="col-lg-3">Address: </h5>
                        <p className="col-lg-9">{placeDetail.address}</p>
                      </div>
                      <div className="row">
                        <h5 className="col-lg-3 col-12 col-sm-12 ">
                          Opening Hour:{" "}
                        </h5>
                        <div className="col-lg-9 col-12 col-sm-12 ">
                          {placeDetail.operation_time.map((time, index) => {
                            return (
                              <div className="row ">
                                <p className="col-lg-6 col-md-6 col-6 col-sm-6  list-date">
                                  {placeDetail.operation_time[index].day}:
                                </p>
                                <p className="col-lg-6 col-md-6 col-6 col-sm-6 list-date">
                                  {placeDetail.operation_time[index]
                                    .time_close == "closed" ? (
                                    <p>
                                      {
                                        placeDetail.operation_time[index]
                                          .time_open
                                      }{" "}
                                    </p>
                                  ) : (
                                    <p>
                                      {
                                        placeDetail.operation_time[index]
                                          .time_open
                                      }{" "}
                                      -{" "}
                                      {
                                        placeDetail.operation_time[index]
                                          .time_close
                                      }{" "}
                                    </p>
                                  )}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="card img-preview">
                    <h4 className="p-3">Images</h4>
                    <img src={placeDetail.images[0]} />
                    <img src={placeDetail.images[1]} />
                    <img className="mb-4" src={placeDetail.images[2]} />
                  </div>
                </div>
              </div>
            ) : null;
          })}
        </div>
      </>
    );
  }
}

export default PlaceDetail;
