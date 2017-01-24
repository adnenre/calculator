$(document).ready(function(){
     var array =[];
     var op= '/*-+%';
     var number='.0123456789';
     var text='';
     var operator='';
     var res=''
     var ser=false;
     $('button').on('click',function(){
        calc($(this).text());
     });

     function calc(a){
        if (a =='CLEAR' || a=='='&& text=='' || array=='' && op.indexOf(a)!=-1 ){
          text='';
          array=[];
         
           $('.allop').text(0);
           $('.firste').text(0);
        }else if (a!='='){
        

             if(number.indexOf(a)!=-1 && array.length<2 )
             {
                  if(a=='.' && text.indexOf(a)!=-1){
                              text=text;  
                    
                      } else{
                              text+=a;
                               array[0]=eval(text);
                            $('.allop').text(array.join(''));

                            }
             }else if(op.indexOf(a)!=-1){
                  if(array.length<3){
                    text='';
                   operator=a;
                   array[1]=operator;
                    $('.allop').text(array.join(''));
                 }else{
               
                  array[0]=array.join('');
                  array.pop();
                   
                   operator=a;
                   array[1]=operator;
                       $('.allop').text(array.join(''));
                       text='';
                       
                     
                 }
                  
              
             }else{
                   if(a=='.' && text.indexOf(a)!=-1){
                              text=text;  
                    
                      } else {

                        text+=a;
                        array[2]=eval(text);
                         $('.allop').text(array.join(''));
                       
                         }
                   
                  }

        
         }else{
            res=array.join('')+'='+eval(array.join(''));
           
           $('.allop').text(res);
           
           $('.firste').text(eval(array.join('')));
           array[0]= eval(array.join(''));
           array.pop();
           array.pop();
           text='';
          
         }
      }
   });
/*
     function calc(a){
        //clear or begining of eq with operator or hit equal rest
        if (a =='CLEAR' || a=='='&& text=='' || text=='' && op.indexOf(a)!=-1){
          text='';
         
         
           $('.allop').text(0);
           $('.firste').text(0);
        }
        else if (a!='='){
          if(op.indexOf(text[text.length-1])!=-1 && op.indexOf(a)!=-1)//change operator
          {
            text=text.slice(0,text.length-1)+a;
              $('.allop').text(text);
        
          }else if(a=='.' && text.indexOf(a)!=-1){
             text=text;
          }else if(ser==true && op.indexOf(text[text.length-1])==-1 && number.indexOf(a)!=-1){
            ser=false;
            text=a;
           $('.allop').text(text);
           console.log(ser,text);
           
          }else{
            text+=a;
              $('.allop').text(text);
          }
             
           
          
        
        }else {
         res=eval(text);
         ser=true;
         $('.firste').text(res);
         $('.allop').text(text+'='+res);
         text=res;
        
     }
   }
     
});*/