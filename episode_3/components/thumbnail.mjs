export default class Thumbnail {
  constructor(props) {
    this.props = props;
  }

  render() {
    return `
      <div class="thumbnail">
        <img src="${this.props.srcThumbnail}" alt="lamai">
        <div class="caption">
          <h3>${this.props.title}</h3>
          <p>${this.props.shortDesc}</p>
          <a href="/single-photo?id=${this.props.id}" class="btn btn-primary" role="button">See more</a>
        </div>
      </div>
    `    
  }
}