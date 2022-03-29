import React, { Component } from "react";
import PlaceData from "../../data/data.json";
import "./placelist.css";
import { PlaceDetail } from "../PlaceDetail/placedetail";
import { Carousel } from "react-bootstrap";

class PlaceList extends Component {
  constructor() {
    super();

    this.state = {
      height: 0,
      width: 0,
    };

    window.addEventListener("resize", this.update);
  }

  componentDidMount() {
    this.update();
  }

  update = () => {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  };

  ClickToDetail(placeDetail) {
    window.location.href = "/" + placeDetail.id;
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {PlaceData.slice(0,9).map((placeDetail, index) => {
            // console.log(placeDetail.operation_time);
            return (
              <div className="col-lg-4 col-sm-12 col-12">
                <div className="card">
                  <div className="row">
                    <div class="col-md-3 col-sm-12">
                      <img
                        className="Img-place"
                        onClick={() => this.ClickToDetail(placeDetail)}
                        src={placeDetail.profile_image_url}
                      />
                    </div>
                    <div class="col-lg-9">
                      <div className="row">
                        <h1
                          className="Name-place-card col-12"
                          onClick={() => this.ClickToDetail(placeDetail)}
                        >
                          <b className="px-3">{placeDetail.name}</b>
                        </h1>
                        <div className="row">
                          <div className="col-lg-2 col-sm-1 col-1">
                            <i
                              class="fa fa-calendar px-3"
                              aria-hidden="true"
                            ></i>
                          </div>
                          <div className="col-lg-7 col-sm-8 col-8">
                            <p>
                              {placeDetail.operation_time[new Date().getDay() -1].time_open !=
                              "closed" ? (
                                <div>
                                  {
                                    placeDetail.operation_time[
                                      new Date().getDay() - 1
                                    ].time_open
                                  }{" "}
                                  -{" "}
                                  {
                                    placeDetail.operation_time[
                                      new Date().getDay() - 1
                                    ].time_close
                                  }
                                </div>
                              ) : (
                                <p>Closed</p>
                              )}
                            </p>
                          </div>
                          <div className="col-lg-3 col-sm-3 col-3 Rating">
                            <i class="fa fa-circle p-1" aria-hidden="true"></i>
                            {placeDetail.rating}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    {this.state.width <= 576 ? (
                      <div>
                        <Carousel interval={null}>
                          <Carousel.Item>
                            <img
                              className="testimonialImages d-block w-100"
                              src={placeDetail.images[0]}
                              alt={placeDetail.name}
                            />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="testimonialImages d-block w-100"
                              src={placeDetail.images[1]}
                              alt={placeDetail.name}
                            />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="testimonialImages d-block w-100"
                              src={placeDetail.images[2]}
                              alt={placeDetail.name}
                            />
                          </Carousel.Item>
                        </Carousel>
                      </div>
                    ) : (
                      <div className=" Img-preview">
                        <img
                          className="Img-preview_1"
                          src={placeDetail.images[0]}
                        />
                        <img
                          className="Img-preview_2"
                          src={placeDetail.images[1]}
                        />
                        <img
                          className="Img-preview_3"
                          src={placeDetail.images[2]}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default PlaceList;
