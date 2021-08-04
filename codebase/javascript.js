function loginvalidate(){
        
        if( document.loginform.emailid.value == "" ){
           alert( "Please provide your Email!" );
           document.loginform.EMail.focus() ;
           return false;
        }
        if( document.loginform.pass.value == "" ){
            alert( "Please provide your password" );
            document.loginform.pass.focus() ;
            return false;
         }
        
        return( true );
}


function registervalidate(){
        
   if( document.registrationform.firstname.value == "" ){
      alert( "Please provide your first name!" );
      document.registrationform.firstname.focus() ;
      return false;
   }
   if( document.registrationform.lastname.value == "" ){
       alert( "Please provide your last name!" );
       document.registrationform.lastname.focus() ;
       return false;
    }
    if( document.registrationform.emailid.value == "" ){
      alert( "Please provide your Email!" );
      document.registrationform.emailid.focus() ;
      return false;
   }
   if( document.registrationform.pass.value == "" ){
       alert( "Provide password!" );
       document.registrationform.pass.focus() ;
       return false;
    }
    if( document.registrationform.repeatpass.value == "" ){
      alert( "repeat your password please!" );
      document.registrationform.repeatpass.focus() ;
      return false;
   }
   
   return( true );
}


