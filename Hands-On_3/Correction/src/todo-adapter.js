var todoAdapter = {

	isOnLine: function() {
		return navigator.onLine;
	},

	addTodo: function(todo) {
		restClient.addTodo(todo, function(err, todoId) {
			if(!err) {
				todoStorage.addTodo(todo);
			} else {
				console.log(err);
			}
		});
	},

	getAllTodos: function(callback) {
		if(this.isOnLine()) {
			restClient.getAllTodos( function(err, todos) {
				if(!err) {
					todoStorage.setTodos(todos);
				} else {
					todos = todoStorage.getAllTodos();
				}
				callback(err, todos);
			});
		} else {
			callback(null, todoStorage.getAllTodos());
		}
	}

};