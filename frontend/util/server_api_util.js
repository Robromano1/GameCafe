export const fetchServers = () => (
	$.ajax({
		url: '/api/servers',
		method: 'GET'
	})
)
// change to implicit return ()
export const fetchServer = id => (
	$.ajax({
		url: `/api/servers/${id}`,
		method: 'GET'
	})
)

export const fetchUserServers = userId => (
	$.ajax({
		url: '/api/servers',
		method: 'GET',
		data: { userId }
	})
)

export const createServer = server => {
	$.ajax({
		url: '/api/servers',
		method: "POST",
		data: { server }
	})
}

export const deleteServer = id => {
	$.ajax({
		url: `/api/servers/${id}`,
		method: "DELETE"
	})
}