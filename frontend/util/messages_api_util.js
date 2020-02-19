export const getChannelMessages = channelId => (
	$.ajax({
		url: "/api/messages",
		method: "GET",
		data: {
			channelId
		}
	})
);

export const getDmMessages = dmId => (
	$.ajax({
		url: "/api/messages",
		method: "GET",
		data: {
			dmId
		}
	})
);

