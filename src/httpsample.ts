import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import 'fetch';

@inject(HttpClient)
export class httpsample{
	posts = [];
	users = [];
	subreddit_url:string = "https://api.github.com/";
	github_url:string = "http://reddit.com/r/nsfw.json";

	constructor(public http:HttpClient){
		
		// http.configure(config=> {
		// 	config
		// 		.useStandardConfiguration()
		// 		.withBaseUrl(this.subreddit_url);
		// });

		this.http = http;
	}

	loadUsers() {
		// this.http.fetch("users")
		// 	.then(response => response.json())
		// 	.then(users => this.posts = users);
	}
	
	loadPosts() {
		return this.http.jsonp(this.github_url, "jsonp").then(r => {
			this.posts = r.response.data.children;
		});
	}

	// jsonp(subreddit_url, callbackParameterName='jsoncallback'){
    // 	return this.createRequest(subreddit_url).asJsonp(callbackParameterName).send().then(x => this.posts = ;
  // }
	//
	activate() {
		this.loadPosts();
	}
}
