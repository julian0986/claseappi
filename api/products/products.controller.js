function index(req,res){
  return res.status(200).json({message:'hello from products'});
};

module.exports = index
/* export default index; */
