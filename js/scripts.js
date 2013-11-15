// document.getElementById('login').addEventListener('click',function(){
// 	var api = new TasksAPI();
// 	var clientId = "619255683477-a873vhvp1e3rppki6r020h4cdhugf5gh.apps.googleusercontent.com";
// 	api.authenticate(clientId, function() {
//     api.getLists(function(result) {
//       console.log(result);
//       if (!result || !result.items || result.items.length==0) {
//         throw "No task lists available";
//       }
//       var listId=result.items[0].id;
//       api.getTasks(listId, function(tasks) {
//         console.log(tasks);
//         for (var j=0; j<tasks.items.length; j++) {
//           model.addTodo(tasks.items[j].title, tasks.items[j].status!='needsAction');
//         }
//       });
//     });
//   }
// });

var loginbtn=document.getElementById('login');
loginbtn.addEventListener('click',function(e){
  console.log(e.target);
  var api = new TasksAPI();
  var clientId = "619255683477-a873vhvp1e3rppki6r020h4cdhugf5gh.apps.googleusercontent.com";
  api.authenticate(clientId,function(){
    api.getLists(function(result){
      console.log(result);
      if (!result || !result.items || result.items.length==0) {
        throw "No task lists available";
      }
    });
  });
});  


