import About from 'pages/About';
import Collections from 'pages/Collections';
import Detail from 'pages/Detail';
import Home from 'pages/Home';
import each from 'lodash/each';
import Preloader from 'components/Preloader';

class App {
  constructor() {
    this.createPreloader();
    this.createContent();
    this.createPages();
    this.addEventLiteners()
    this.addLinkListeners();
    this.update();
  }

  createPreloader() {
    this.preloader = new Preloader();
    this.preloader.once('completed', this.onPreloaded.bind(this))
  }

  createContent() {
    this.content  = document.querySelector('.content');
    this.template = this.content.getAttribute('data-template');
  }

  createPages() {
    this.pages = {
      about: new About(),
      collections: new Collections(),
      detail: new Detail(),
      home: new Home()
    }

    this.page = this.pages[this.template];
    this.page.create();


  }

  // Events
  onPreloaded() {

    this.preloader.destroy();
    this.onResize();

    this.page.show();

  }

  async onChange(url) {
    await this.page.hide();

    const request = await window.fetch(url);
    console.log(request)
    if(request.status === 200) {
      const html = await request.text();
      console.log('el ahtml', html)
      const div  = document.createElement('div');
      div.innerHTML = html

      const divContent = div.querySelector('.content');


      this.template = divContent.getAttribute('data-template')

      this.content.setAttribute('data-template', this.template)
      this.content.innerHTML = divContent.innerHTML;

      this.page = this.pages[this.template];


      this.page.create()


      this.onResize();

      this.page.show();
      this.addLinkListeners()

    }else {
      console.log('Error')
    }
  }

  onResize() {
    if(this.page && this.page.onResize) {
      this.page.onResize();
    }
  }

  // Loop
  update() {
    if(this.page && this.page.update) {
      this.page.update();
    }
    this.frame = window.requestAnimationFrame(this.update.bind(this));
  }


  // Listeners
  addEventLiteners() {
    window.addEventListener('resize', this.onResize.bind(this))
  }

  addLinkListeners() {
    const links = document.querySelectorAll('a');
    each(links , link=> {
      link.onclick = event => {
        const {href} =link;
        event.preventDefault();

        this.onChange(href)
      }
    })
  }
}

setTimeout(()=> {
  new App()
}, 500)

