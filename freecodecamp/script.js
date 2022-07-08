import axios from "axios";

const http = new XMLHttpRequest();
const url1 = "https://jsonplaceholder.typicode.com/posts";
http.open("GET", url1);
http.send();
//we log HTTP response to the console by using XMLHTTPRequest.onreadystatechange property which contains the event handler to be called when the readystatechanged event is fired

http.onreadystatechange = (e) => {
  //the onreadystatechange property has two methods, readyState and status which allow us to check the state of our request
  if (this.readyState == 4 && this.status == 200) {
    console.log(http.responseText);
  }
  /**
   * The XMLHttpRequest.readyState property returns the state an XMLHttpRequest client is in. An XHR client exists in one of the following states:
   * 1 -UNSENT The XMLHttpRequest client has been created, but the open() method hasn't been called yet.
   * 2 - OPENED open() method has been invoked. During this state, the request headers can be set using the setRequestHeader() method and the send() method can be called which will initiate the fetch.
   * 3 - HEADERS_RECEIVED send() has been called and the response headers have been received.
   * 4 - LOADING - Response's body is being received. If responseType is "text" or empty string, responseText will have the partial text response as it loads.
   * 5 - DONE The fetch operation is complete. This could mean that either the data transfer has been completed successfully or failed.
   * *** If readyState is equal to 4, it means the request is done. The readyState property has 5 responses. ***
   */
};

// *** fetch
/**
 * fetch() is web API taht lets you make asynchronous requests. it returns a Primise that allows us to handle the async request in a smarter way.
 */
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((data) => {
    return data.json();
  })
  .then((res) => console.log(res));
// the fetch function takes one required parametar: the endpoint URL. It also has other optional parameters as in the example below:
const URL2 = "https://jsonplaceholder.typicode.com/posts";
const data = {
  name: "Said",
  id: 23,
};
//optional parametars
const otherPram = {
  headers: {
    "content-type": "application/json; charset=UTF-8",
  },
  body: data,
  method: "POST",
};

fetch(URL2, otherPram)
  .fetch((data) => {
    return data.json();
  })
  .fetch((res) => console.log(res))
  .fetch((err) => console.log(err));

// AXIOS
const url = "https://jsonplaceholder.typicode.com/posts";
axios
  .get(url)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
//with parameter
const params = {
  name: "said",
  id: 21,
};
axios
  .get(url, params)
  .then((data) => console.log(data))
  .catch((err = console.log(err)));

// AXIOS post
const user = {
  name: "Said",
  id: 21,
};
axios({
  method: "post",
  url: url,
  data: {
    user,
  },
})
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

/* AXIOS returns a PROMISE. Promise can execute multiple requests. You can do the sam thing with axios and run multiple requests at the same time.
 */

function getUser() {
  const userUrl = "https//jsonplaceholder.typicode.com/users";
  return axios.get(userUrl);
}
function getPost() {
  const postUrl = "https://jsonplaceholder.typicode.com/posts";
  return axios.get(postUrl);
}
axios
  .all([getUser(), getPost()])
  .then((user, posts) => {
    console.log(users);
    console.log(posts);
  })
  .catch((err) => console.log(err));
