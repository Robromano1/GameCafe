export const getChannels = userId => (
	$.ajax({
		url: "/api/channels",
		method: "GET",
		data: {
			userId
		}
	})
);

export const getChannel = id => (
	$.ajax({
		url: `/api/channels/${id}`,
		method: "GET"
	})
);

export const createChannel = channel => (
	$.ajax({
		url: "/api/channels",
		method: "POST",
		data: {
			channel
		}
	})
);

export const deleteChannel = id => (
	$.ajax({
		url: `/api/channels/${id}`,
		method: "DELETE"
	})
)