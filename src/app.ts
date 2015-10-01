import {autoinject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {HttpClient} from 'aurelia-fetch-client';

export class App {
	router:Router;

  configureRouter(config, router:Router){
    config.title = "Template";
    config.map([
            { route: ['', 'home'], name: 'home', moduleId: './home', nav: true, title: 'Home' },
            { route: 'httpsample', name: 'httpsample', moduleId: './httpsample', nav: true, title: 'Http Sample' },
            { route: 'user', name: 'user', moduleId: './user', nav: true, title: 'User' }

    ]);

    this.router = router;
  }
}
