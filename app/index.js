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
    this.addLinkListeners();
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

  onPreloaded() {
    this.preloader.destroy();
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
      this.page.show();
      this.addLinkListeners()

    }else {
      console.log('Error')
    }
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

