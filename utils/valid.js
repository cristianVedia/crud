
var valid = {
    checkParams: function(refobj, evalueobj) {
      let errors = [];
      const { name, email, password, sex, registerdate, address } = refobj.body;
      if(name.length <=0){
        errors.push({text: 'Por Favor Ingrese Tu Nombre'})
      }else
      if(errors.length > 0){
        evalueobj.render('users/signup', {errors, name, email, password, sex, registerdate, address });
      }
   },
    checkPassword: function (password) {
      if(password.length < 4) {
        errors.push({text: 'la contraseña al menos debe tener 4 caracteres'})
      }
  },
    checkEmail: function(email) {
      if(email) {
        req.flash('error_msg', 'El Email ya esta en uso.');
        res.redirect('/users/signup');
      }
 }

};
    module.exports = valid;