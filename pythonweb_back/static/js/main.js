function onload () {

	$(document).ready(function() {	

		var socket = io.connect('ws://119.23.107.17:10001/echo');
		
		socket.on('server_response',  function(res) {

			var message = JSON.parse(res)
			var img = new Image();
			img.src = message.img_url;
			if (img.complete) {
				document.getElementById('num').innerHTML = '<p class="center">当前识别人数为'+message.people_num+'人</p>';
				document.getElementById('img').innerHTML = '<img src="'+message.img_url+'">'; 
			}else{
				img.onload = function(){
					img.onload = null;
					document.getElementById('num').innerHTML = '<p class="center">当前识别人数为'+message.people_num+'人</p>';
					document.getElementById('img').innerHTML = '<img src="'+message.img_url+'">'; 
				}
			}
			
		});
	});
}