import $ from 'jquery';

export let jq = function(){

    let Jqx = new Promise((resolve, reject) => {  
            
        function writex(){
           
           console.log("This is jquery inside Document!");
           $('body').html("Julius Bacosa is Webpack!");
                
        }
        resolve(writex());
    });
        
    return {
        jqx: Jqx
    }
};
        
        
        


   