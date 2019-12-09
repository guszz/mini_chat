module.exports.iniciaChat = function(application, req, res){


  var dadosForm = req.body

  req.assert('apelido','Nome ou apelido é obrigatório!').notEmpty()
  req.assert('apelido','Nome ou apelido deve conter de 3 a 15 caractéres').len(3,15)

  var erros = req.validationErrors()

  if(erros){
    res.render('index', {validacao: erros})
    return
  }

  res.render('chat')
}
