import { Tea } from '../models/tea.js'


export {
  index,
  show,
  create,
  update,
  deleteTea as delete
}

function index(req, res) {
  Tea.find({})
  .then(teas => {
    res.status(200).json(teas)
  })
  .catch(err => {
    res.json(err)
  })
}
function show(req, res) {
Tea.findById(req.params.id)
.then(teas => {
  res.json(err)
})
}
function create(req, res) {
  Tea.create(req.body)
  .then(tea =>{
    res.json(tea)
  })
  .catch(err => {
    res.json(err)
  })
}
function update(req, res) {
  Tea.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(teas => {
    res.json(teas)
  })
  .catch(err => {
    res.json(err)
  })
}
function deleteTea(req, res) {
  Puppy.findByIdAndDelete(req.params.id)
  .then(teas => {
    res.json(teas)
    })
    .catch(err => {
      res.json(err)
    })
}