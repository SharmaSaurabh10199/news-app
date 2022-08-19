import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loader from "./Loader";

export class News extends Component {
  constructor(props) {
    super(props);
    // console.log("hello people");
    this.state = {
      article: [],
      load: true,
      page: 1,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=307198de8eef462c98224fa3955b7abe&page=1&pageSize=8`;
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);

    this.setState({
      totalResults: parsedData.totalResults,
      article: parsedData.articles,
      load: false,
    });
  }

  // to handle the previous
  handlePrev = async () => {
    this.setState({ load: true });
    // console.log("prev");
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=307198de8eef462c98224fa3955b7abe&page=${
      this.state.page - 1
    }&pageSize=8`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      article: parsedData.articles,
      load: false,
    });
    // console.log(this.state.page);
    // console.log(this.state.totalResults);
  };

  // to handle the next button

  handleNext = async () => {
    this.setState({ load: true });
    console.log("next");
    // the state shows undefined.
    console.log(this.state);
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=307198de8eef462c98224fa3955b7abe&page=${
      this.state.page + 1
    }&pageSize=8`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({
      page: this.state.page + 1,
      article: parsedData.articles,
      load: false,
    });
  };

  render() {
    // loader
    if (this.state.load) {
      return <Loader />;
    }
    // rendering of the news
    return (
      <div className="container my-3">
        <h1>News Headlines</h1>
        <div className="row my-5">
          {this.state.article.map(function (elem) {
            return (
              <div className="col-md-4 my-4" key={elem.url}>
                <NewsItem
                  newsUrl={elem.url}
                  title={elem.title ? elem.title.slice(0, 50) : ""}
                  description={
                    elem.description ? elem.description.slice(0, 100) : ""
                  }
                  imageUrl={
                    elem.urlToImage
                      ? elem.urlToImage
                      : "https://imgs.search.brave.com/oIDuppDAvK5vDFi6sJTfC4VnC1f4B4uxDntZ6R_xKpU/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uy/LmV4cGxpY2l0LmJp/bmcubmV0L3RoP2lk/PU9JUC5rQUl0Y3ct/UnlsdGhzanFuSEFo/bTJnSGFFSyZwaWQ9/QXBp"
                  }
                  content={elem.content}
                />
              </div>
            );
          })}
        </div>

        {/* the next and the previous buttons */}
        <div className="d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrev.bind(this)}
            disabled={this.state.page <= 1}
          >
            &#8592;Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNext}
            disabled={this.state.page >= Math.ceil(this.state.totalResults / 8)}
          >
            Next&#8594;
          </button>
        </div>
      </div>
    );
  }
}

// the default prop for the news
News.defaultProps = {
  country: "in",
  category: "sports",
};

export default News;
