function index(req,res){
  return res.status(200).json({message:'hello from products'});
};

const create = (req, res) => {
  return res.status(201).json({message:'producto creado'});

}
const showById = (req, res) => {
  return res.status(201).json({id:req.params.id, name:'laptop'});

}


module.exports = {
  index,
  create,
  showById,
}
/* export default index; */
