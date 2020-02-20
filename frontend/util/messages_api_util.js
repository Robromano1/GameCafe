export const getMessages = () => (
	$.ajax({
		url: "/api/messages",
		method: "GET"
	})
);



