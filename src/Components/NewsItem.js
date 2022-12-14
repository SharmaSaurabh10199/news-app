import React, { Component } from "react";

export class NewsItem extends Component {
  constructor() {
    super();
    // console.log("hello people");
  }
  render() {
    let { title, description, imageUrl, content, newsUrl } = this.props;

    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>

            <p className="card-text">{description}...</p>

            <a href={newsUrl} target="blank" className="btn btn-dark">
              Read More
            </a>
            {/* console.log(newsUrl); */}
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
