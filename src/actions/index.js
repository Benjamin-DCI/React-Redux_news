export const SELECT_CHANNEL = "SELECT_CHANNEL";
export const REQUEST_POSTS = "REQUEST_POSTS";
export const RECEIVE_POSTS = "RECEIVE_POSTS";

const MY_API_KEY = "6ff22ce13e854e228643151ba46d6cb1";

export const getChannel = channel => ({
	type: SELECT_CHANNEL,
	channel
});

export const requestPosts = () => ({
	type: REQUEST_POSTS
});

export const receivedPosts = json => ({
	type: RECEIVE_POSTS,
	json: json.articles
});

export function fetchPosts(channel) {
	return function(dispatch) {
		dispatch(requestPosts());
		return fetch(`https://newsapi.org/v1/articles?
        source=${channel}&apiKey=${MY_API_KEY}`)
			.then(
				response => response.json(),
				error => console.log("An error occured", error)
			)
			.then(json => {
				dispatch(receivedPosts(json));
			});
	};
}
