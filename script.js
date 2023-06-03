function open_list(){
   var win = document.getElementById('is-active');
   if(win.style.display == 'none')
   {
      win.style.transition = 'ease-in-out 0.3s';
    win.style.display = 'block';
   }
   else{
    win.style.display = 'none';
   }
}

