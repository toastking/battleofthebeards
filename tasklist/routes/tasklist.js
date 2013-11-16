var mongoose = require('mongoose'), task = require("../models/task.js");

module.exports = TaskList;

function TaskList (connection) {
	mongoose.connect(connection);
}

TaskList.prototype= {
	showTasks: function(req,res){
		task.find({itemCompleted:false}, function foundTasks (err, items){
			res.render("index",{title:"Tasks",tasks: items})
		});
	},
	
	addTask: function(req,res){
		var item = req.body.item;  // item is the request param as a task object
		newTask = new task();
		newTask.itemName = item.name;
		newTask.itemCategory = item.category;
		
		newTask.save(function savedTask(err){
			if(err){
				throw err;
			}
		});
		res.redirect("/");
	},
	
	
	completeTask: function(req,res){
		var CompletedTasks= req.body;  //sets CompletedTasks to array of task objects
		for(taskId in CompletedTasks){  //enhanced for loop
			if(completedTasks[taskId] =="true"){
				var conditions = {_id: taskId};
				var updates = {itemCompleted: completedTasks[taskId]};
				task.update(conditions, updates, function updatedTask (err) {
					if(err){
						throw err;
					}
					
				});
			}
		}
		res.redirect("/");
	}
}
