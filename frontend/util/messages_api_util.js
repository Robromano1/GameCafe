export const fetchChannelMessages = (channelId) => (
	$.ajax({
		url: "/api/messages",
		method: "GET",
		data: { channelId }
	})
);




