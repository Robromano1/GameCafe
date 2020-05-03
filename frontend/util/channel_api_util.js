export const getChannels = () => (
	$.ajax({
		url: "/api/channels/",
		method: "GET",
	})
);

export const getChannel = id => (
	$.ajax({
		url: `/api/channels/${id}`,
		method: "GET"
	})
);

export const getServerChannels = serverId => (
	$.ajax({
		url: "/api/channels",
		method: "GET",
		data: { serverId }
	})
)

export const createChannel = channel => (
	$.ajax({
		url: "/api/channels",
		method: "POST",
		data: { channel }
	})
);

export const deleteChannel = id => (
	$.ajax({
		url: `/api/channels/${id}`,
		method: "DELETE"
	})
)