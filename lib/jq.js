import $ from 'jquery';

export let jq = function(){

    $(document).ready(function(){
        console.log("This is jquery inside Document!");

        $('body').html("Julius Bacosa is Webpack!");
    });
    

}