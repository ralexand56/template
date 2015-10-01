import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class httpsample{
	posts= [];
	subreddit_url:string = "http://reddit.com/r/funny.json";
	http:HttpClient;

	contructor(http){
		console.log("in constructor");
		http.configure(config=> {
			config
				.useStandardConfiguration()
				.withBaseUrl(this.subreddit_url);
		});

		this.http = http;
	}

	loadPosts() {
		// return this.http.jsonp(this.subreddit_url, "jsonp").then(r => {
		// 	this.posts = r.response.data.children;
		// });
		//this.http.fetch(this.subreddit_url).then(x => this.posts = x.response.data.children);
		//  return this.http.fetch('posts')
		// .then(response => response.json())
      // .then(users => this.posts = posts);
	}

	// jsonp(subreddit_url, callbackParameterName='jsoncallback'){
    // 	return this.createRequest(subreddit_url).asJsonp(callbackParameterName).send().then(x => this.posts = ;
  // }
	//
	activate() {
		return this.loadPosts();
	}
}
