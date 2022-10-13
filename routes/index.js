var express = require('express');
var router = express.Router();
const todos = require('../resource/todo.js') //importing todos
const Todos = require('../models/Todos');


/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Yasmini' });
// });
router.get('/', async function(req, res, next){
  const todos = await Todos.find();
  console.log(todos);
  res.render('home',{todosList:todos});
});
// router.get('/',function(req,res,next){
//   res.render('home',{todosList:todos})
// }
// )

router.get('/add-to-do',function(req,res,next){
  res.render('addTodo', {title: 'To-do'});
}
)
router.post('/save-to-do', async function(req,res,next){
  await Todos.insertMany([{title: req.body.title, description: req.body.description }])
  res.redirect('/');
})


// router.post('/save-to-do', async function(req,res,next){
//   await Todos= new Todos({
//     title: req.body.title,
//     description: req.body.description
// await todo.save(); This is optional


// router.get('/delete-to-do/:index', function(req,res,next){
//   console.log(req.params.index);
//   todos.splice(req.params.index,1);
//   res.redirect('/');
// })
router.get('/delete-to-do/:id', async function(req,res,next){
  await Todos.deleteOne({_id:req.params.id}, {$set:{title: req.body.title, description: req.body.description}});
  res.redirect('/')
})
router.get('/open-update-form/:id',async function(req,res,next)
{
  const todo = await Todos.findOne({_id: req.params.id});
  res.render('editToDo', {title:'Edit To-Do', todo:todo});
})
router.post('/edit-to-do/:id', async function(req,res,next){
 await Todos.updateOne({_id:req.params.id}, {$set:{title: req.body.title, description: req.body.description}});

  res.redirect('/');
})

module.exports = router;
