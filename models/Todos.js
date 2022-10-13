const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const TodosSchema = new Schema({
  title: 
  {
    type: String,
    required: true
},
  description: String //required automatically false
}, {timestamps: true}); //createdAt: UpdatedAt

module.exports = mongoose.model('Todos',TodosSchema);