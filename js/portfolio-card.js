const template = document.createElement('template');
template.innerHTML = `
<style>
a {
  box-sizing: border-box;
  outline: none;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  font-weight: 300;
  line-height: 1.5;
  flex-flow: column wrap;
}
figure {
  position: relative;
  display: flex;
  margin: 10px 10px;
  justify-content: center;
  width: 180px;
  height: 200px;
  padding: 15px 15px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100%;
  border-radius: 10px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25), 0 1px 1px rgba(0, 0, 0, 0.22);
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  overflow: hidden;
}
figure:before, figure:after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
figure:before {
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 0;
}
figure:after {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  overflow: hidden;
}
figure:hover {
  background-size: 175%;
}
figure:hover:after {
  content: 'Click for more';
  color: white;  
  font-size: 20px;
  z-index: 2;
}
figure:hover .date {
  bottom: -59px;
}
figure:hover figcaption {
  transform: translateY(-110%);
}
figure .date {
  position: absolute;
  bottom: 0;
  right: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.7);
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
}
figure .date span {
  color: white;
  line-height: 1;
}
figure .date span:first-child {
  font-size: 20px;
  font-weight: 900;
}
figure .date span:last-child {
  font-size: 14px;
  font-weight: 400;
}
figure figcaption {
  color: white;
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  z-index: 1;
}
figure figcaption h4 {
  margin: 0 0 5px;
  font-size: 24px;
  line-height: 1.35;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.7);
}
figure figcaption p {
  margin: 0;
  line-height: 1.5;
}
</style>


<a target="_blank">
  <figure>
      <div class="date">
        <span class="card-date-year"></span>
        <span class="card-date-season"></span>
      </div>
      <figcaption>
          <h4><span id="title"></span></h4>
          <p id="abstract"></p>
      </figcaption>
  </figure>
</a>

`;

class PortfolioCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    
  }

  connectedCallback(){
    this.shadowRoot.querySelector('a').href = this.getAttribute('link');
    this.shadowRoot.querySelector('figure').style.backgroundImage = "url('" + this.getAttribute('bgimg') + "')";
    this.shadowRoot.querySelector('.card-date-year').innerText = this.getAttribute('year');
    this.shadowRoot.querySelector('.card-date-season').innerText = this.getAttribute('season');
    this.shadowRoot.querySelector('#title').innerText = this.getAttribute('title');
    this.shadowRoot.querySelector('#abstract').innerText = this.getAttribute('abstract');
  }

}


window.customElements.define('portfolio-card', PortfolioCard);
