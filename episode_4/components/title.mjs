export default class Title {
  constructor() {
    this.heading = "Galeria mea foto!";
    this.subHeading = "Aceasta este galeria mea foto";
  }

  render() {
    return `
      <section class="text-center jumbotron">
        <h1>${this.heading}</h1>
        <p>${this.subHeading}</p>
      </section>
   `;
  }
}