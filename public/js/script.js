$( document ).ready(function() {
  const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
   
  function niceBytes(x){
    let l = 0, n = parseInt(x, 10) || 0;
    while(n >= 1024 && ++l){
        n = n/1024;
    }
    return(n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l]);
  }

  $.ajax({
    url: "/getmem",
    dataType: "json",
    data:{},
    success: function(data){
      let mem = data[0].size
      console.log(mem);
     console.log(niceBytes(mem));
    }
  });

});//end doc ready
