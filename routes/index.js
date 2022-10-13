var express = require('express');
var router = express.Router();
const todos = require('../resource/todo.js') //importing todos


/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Yasmini' });
// });
router.get('/',function(req,res,next){
  res.render('home',{todosList:todos})
}
)

router.get('/add-to-do',function(req,res,next){
  res.render('addTodo', {title: 'To-do'});
}
)
router.post('/save-to-do', function(req,res,next){
  todos.push({...req.body, id: `00${todos.length}`}); //spread operator -> ...
  res.redirect('/');
})
// router.get('/delete-to-do/:index', function(req,res,next){
//   console.log(req.params.index);
//   todos.splice(req.params.index,1);
//   res.redirect('/');
// })
router.get('/delete-to-do/:id',function(req,res,next){
  const index = todos.findIndex(todo=>todo.id === req.params.id);
  todos.splice(index,1);
  // todos.splice(req.params.index,1);
  res.redirect('/')
})
router.get('/open-update-form/:id',function(req,res,next)
{
  const todotodo = todos.find(todo => todo.id === req.params.id);
  res.render('editToDo', {todo: todotodo});
})
router.post('/edit-to-do/:id', function(req,res,next){
  const index = todos.findIndex(todo=>todo.id === req.params.id);
  todos.splice(index,1, {...req.body, id: req.params.id});
  res.redirect('/');
})

module.exports = router;
