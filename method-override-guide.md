package
	method-override

server.js
	var methodOverride = require('method-override');
	app.use(methodOverride('_method'));

at the end of form actions
	
	?_method=DELETE

	?_method=PUT


in server.js 
	use app.post
		when inserting (CREATE)

	use app.get 
		when getting (READ)

	use app.put
		when updating (UPDATE)

	use app.delete
		when deleting (DELETE)
