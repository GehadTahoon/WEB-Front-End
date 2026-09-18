let pa=document.getElementsByClassName('par');
let bot=document.getElementsByClassName("btn");


    
       for(let i=0;i<bot.length;i++){
           
            bot[i].onclick=function(){

            if(bot[i].textContent == "see more"){
               
                  pa[i].style="height:0%;";
                 pa[i].style="opacity:1;";
                 bot[i].style="top:90%;";
                
                bot[i].textContent ="see less";

            }
            else
            {
                pa[i].style="height:20%;";
                pa[i].style="opacity:0;";
                
                
                bot[i].textContent ="see more";
            }
             


        }

    }

    
        
      



