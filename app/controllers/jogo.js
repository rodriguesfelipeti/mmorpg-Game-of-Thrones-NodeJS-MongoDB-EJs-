module.exports.jogo = (application,req,res) =>{
    if(req.session.autorizado){
        res.render('jogo', {img_casa: req.session.casa})
    }else{
        res.render('index',{validacao: {}, dadosForm: {}})
    }
    
} 

module.exports.sair = (application,req,res) => {
    req.session.destroy( (err) => res.render('index',{validacao: {}, dadosForm: {}}))
}