window.onload = function(){

        const myNavbar = document.querySelector('#myNavbar');
        myNavbar.onclick = function(){ 
            document.querySelector('#side-menu').style.width = '250px';
            // document.querySelector('.content-holder').style.marginLeft = '250px';
        };

        const closeBtn = document.querySelector('#closeBtn');
        closeBtn.onclick = function(){
        document.querySelector('#side-menu').style.width = '0';
        // document.querySelector('.content-holder').style.marginLeft = '0';
        };

         // TweenMax.staggerFrom('.project', 3, {opacity:0, y:-300, ease:Back.easeOut.config(3)}, 2);

            let contactForm = document.querySelector('#contact-form-');
            const myBtn = document.querySelector('#myBtn');

        

            // contactform.setAttribute('action', '//formspree.io/' + 'Ortegar' + '@' + 'gmail' + '.' + 'com');
            const firstName = document.querySelector('#fname');
            const lastName = document.querySelector('#lname');
            const userEmail = document.querySelector('#email');
            const userMessage = document.querySelector('#message');
       
            myBtn.onclick = function (){
                if(!firstName.value){
                  firstName.style.borderColor = "red";
                //   console.log('Check Entries');
                  return false;
                 }
                 else{
                    firstName.style.borderColor = "green";
                 }
                  if(!lastName.value){
                    lastName.style.borderColor = "red";
                    // console.log('Check Entries');
                    return false;
                 }
                 else{
                    lastName.style.borderColor = "green";
                 }
                 if(!emailIsValid(email)){
                    userEmail.style.borderColor = "red";
                    // console.log(email.value);
                    return false;
                 }
                 else{
                    email.style.borderColor = "green";
                 }
                 if(!userMessage.value){
                    userMessage.style.borderColor = "red";
                    // console.log('Check Entries');
                    return false;
                 }
                 else{
                    userMessage.style.borderColor = "green";
                 }
                 contactForm.setAttribute('action', 'https://formspree.io/' + 'Ortegar95' + '@' + 'gmail' + '.' + 'com');
                //  console.log(contactForm) 
           
           }

                function emailIsValid (email) {
                email = userEmail.value;
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
          }
     }
    
        
        

   
    

                

