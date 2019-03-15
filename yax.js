
var counter=0;var id_gen=0; var sec_id =0; var div_count = 0; var task_count=0; 
window.onload = function(){
	
	if (localStorage.length!=0){
		for(var i=0, len=localStorage.length; i<len; i++) {
    		var key = localStorage.key(i);
    		
    		var input = localStorage.getItem(key);

    		document.querySelector('body').innerHTML += input;
			document.querySelector('body').innerHTML += '<p></p>';

			

		}
		
		for(var i=0, len=localStorage.length; i<len; i++) {
			var key = localStorage.key(i);
			if (document.getElementById("task"+key.slice(3,4)).className == "strikethrough check"){
				document.getElementById("task"+key.slice(3,4)).checked = true;
			}
			else{
				document.getElementById("task"+key.slice(3,4)).checked = false;
			}
		
		}

		for(var i=0, len=localStorage.length; i<len; i++) {
			var key = localStorage.key(i)
			document.getElementById("icon"+key.slice(3,4)).addEventListener("click",del_div);
		}

		
	}
	
	document.getElementById("submit_button").onclick = add_div;

}
function add_div(){
		
		id_gen="icon"+(counter+1).toString(); sec_id = "one"+(counter+1).toString();div_count = "div"+(counter+1).toString(); task_count = "task"+(counter+1).toString();
		var input = document.getElementById("task_input").value;

		localStorage.setItem(div_count,'<section id='+sec_id+'><div class="div1"><input id='+task_count+' class="strikethrough" type="checkbox" autocomplete="on"><span>' + input + '</span><i id='+id_gen+' class="fas fa-trash-alt"></i></div></section>');
		
		
		  
		if (input=="")
		{
			alert("Please enter a task.");
			localStorage.removeItem(div_count);
			return false;		}
		else{
			var inp_string = localStorage.getItem(div_count);
			counter+=1;
			document.querySelector('body').innerHTML += inp_string;
			document.querySelector('body').innerHTML += '<p></p>';

			for (var i=1;i<=counter;i++){
				
				if (document.getElementById("icon"+i)!= null){
					document.getElementById("icon"+i).addEventListener("click",del_div);
				}
			} 
			
			document.getElementById("submit_button").onclick = add_div;
		}

		
		 for(var i=1;i<=counter;i++){
			document.getElementById(task_count).onclick = function(){
				localStorage.setItem(div_count,'<section id='+sec_id+'><div class="div1"><input id='+task_count+' class="strikethrough check" type="checkbox" autocomplete="on"><span>' + input + '</span><i id='+id_gen+' class="fas fa-trash-alt"></i></div></section>');

				document.getElementById(task_count).onclick = function(){
					localStorage.setItem(div_count,'<section id='+sec_id+'><div class="div1"><input id='+task_count+' class="strikethrough" type="checkbox" autocomplete="on"><span>' + input + '</span><i id='+id_gen+' class="fas fa-trash-alt"></i></div></section>');
				};

			};
		
		}	
		return false;
}

function del_div(event){
	localStorage.removeItem("div"+(this.id).slice(4,5));
	document.getElementById("one"+(this.id).slice(4,5)).innerHTML = '';

}	
	




