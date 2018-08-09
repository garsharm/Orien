$(document).ready(function(){
		window.addEventListener("deviceorientation", function(){
		$("#corX").text(event.beta);
		$("#corY").text(event.gamma);

		corData = {
			corX : event.beta,
			corY : event.gamma,
		}

		/*$.ajax({
			url: "/oriendata",

			type: 'POST',
			data: corData,
			success : function(res) {
			
				   console.log(res);
			        }

		})*/
	}, true)
})	