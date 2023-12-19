function publication_select(value) {
    if (value == 0) {
      var script = document.createElement("script");  // create a script DOM node
      script.type = 'text/javascript';
      script.src = "https://buttons.github.io/buttons.js";
      document.body.appendChild(script);      
      document.getElementById('pubs').innerHTML = document.getElementById('select_publication').innerHTML;
      document.getElementById('select0').style = 'text-decoration:underline;color:#000000';
      document.getElementById('select1').style = 'color:#0055AA';
      document.getElementById('select2').style = 'color:#0055AA';
    } else if (value == 1){
      var script = document.createElement("script");  // create a script DOM node
      script.type = 'text/javascript';
      script.src = "https://buttons.github.io/buttons.js";
      document.body.appendChild(script);  
      document.getElementById('pubs').innerHTML = document.getElementById('date_publication').innerHTML;
      document.getElementById('select0').style = 'color:#0055AA';
      document.getElementById('select1').style = 'text-decoration:underline;color:#000000';
      document.getElementById('select2').style = 'color:#0055AA';
    }
    else{
      var script = document.createElement("script");  // create a script DOM node
      script.type = 'text/javascript';
      script.src = "https://buttons.github.io/buttons.js";
      document.body.appendChild(script);  
      document.getElementById('pubs').innerHTML = document.getElementById('preprint_publication').innerHTML;
      document.getElementById('select0').style = 'color:#0055AA';
      document.getElementById('select1').style = 'color:#0055AA';
      document.getElementById('select2').style = 'text-decoration:underline;color:#000000';
    }
  }
  
  includeJs("https://buttons.github.io/buttons.js");
