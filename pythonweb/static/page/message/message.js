var limits = 1;          //设置阈值
var origin = 1;
var ws,layer;
var carteen = document.getElementById("carteen");
var carteen_btn = document.getElementById("carteen_btn");
var building = document.getElementById("building");
var building_btn = document.getElementById("building_btn");
var eda = document.getElementById("eda");
var eda_btn = document.getElementById("eda_btn");
var videos = document.getElementById("abn_video");
var messages = "";
var abnvideo_url = "";

layui.config({
	base : "js/"
}).use(['form','layer','jquery','laypage','slider'],function(){
	var form = layui.form(),
	laypage = layui.laypage,
	$ = layui.jquery;
	layer = layui.layer;
	slider = layui.slider;	
	slider.render({
		elem: '#slideTest2'
		,value: 1 
		,change: function(value){
			limits = value;
		}
	});
	//触发事件
	var active = {
		offset: function(othis){
			var type = othis.data('type')
			,text = othis.text();
			layer.open({
				type: 1
				,offset: type 
				,id: 'layerDemo'+type 
				,content: '<div style="padding: 20px 100px;">'+ text +'</div>'
				,btn: '我知道了'
        		,btnAlign: 'c'       //按钮居中
        		,shade: 0          //不显示遮罩
        		,yes: function(){
        			layer.closeAll();
        		}
        	});
		}
	};
	$('#layerDemo .layui-btn').on('click', function(){
		var othis = $(this), method = othis.data('method');
		active[method] ? active[method].call(this, othis) : '';
	});
})



function onload () {
	if ("WebSocket" in window){
		ws = new WebSocket("ws://fw.trinicloud.cn:30352");
	}else{
		alert("您的浏览器不支持 WebSocket!");
	}
	$.ajax({
		url: '/db',
		type: 'GET',
		dataType: 'json',
		success:function(res){
			for (var i = res.length-1; i >=res.length-40; i--) {
				var Dates = res[i].date.replace(/\_/g,"-")
				var Times = res[i].time.replace(/\_/g,":")
				document.getElementById("eda_nummax").innerHTML = res[i].num_max;
				messages +='<div class="col-xs-12"><h5><span class="layui-badge-dot layui-bg-orange"></span>&nbsp&nbsp告警信息<button type="button" class="layui-btn layui-btn-sm" style="float: right;" data-id="'+res[i].date+res[i].time+'" onclick="deleteMsg(this);"><i class="layui-icon">&#xe640;</i></button><button type="button" class="layui-btn layui-btn-sm" style="float: right;" data-id="'+res[i].filepath+'" onclick="seeVideos(this);"><i class="layui-icon">&#xe64a;</i></button></h5><br><p>&nbsp&nbsp&nbsp&nbsp eda人数已经超过阈值，请及时安排人员进行疏导。</p><h6 style="float: right;">'+Dates+" "+Times+'</h6></div><div class="clearfix"> </div>';
				document.getElementById("style-2").innerHTML = messages
			}
		}
	})
	
	/*messages +='<div class="col-xs-12"><h5><span class="layui-badge-dot layui-bg-orange"></span>&nbsp&nbsp告警信息<button type="button" class="layui-btn layui-btn-sm" style="float: right;" data-id="hhh" onclick="deleteMsg(this);"><i class="layui-icon">&#xe640;</i></button><button type="button" class="layui-btn layui-btn-sm" style="float: right;" data-id="http://112.74.50.102:10000/static/video.mp4" onclick="seeVideos(this);"><i class="layui-icon">&#xe64a;</i></button></h5><br><p>&nbsp&nbsp&nbsp&nbsp eda人数已经超过阈值，请及时安排人员进行疏导。</p><h6 style="float: right;">2019-06-08 11:30:00</h6></div><div class="clearfix"> </div>';
	document.getElementById("style-2").innerHTML = messages*/

	$(document).ready(function() {
		var socket = io.connect('ws://123.207.127.43:5000/echo');

		socket.on('server_response',  function(res) {

			console.log(res)
			var message = JSON.parse(res)
			var Dates = message.date.replace(/\_/g,"-")
			var Times = message.time.replace(/\_/g,":")
			console.log(message.filepath)
			document.getElementById("eda_nummax").innerHTML = message.num_max;
			messages='<div class="col-xs-12"><h5><span class="layui-badge-dot layui-bg-orange"></span>&nbsp&nbsp告警信息<button type="button" class="layui-btn layui-btn-sm" style="float: right;" data-id="'+message.date+message.time+'" onclick="deleteMsg(this);"><i class="layui-icon">&#xe640;</i></button><button type="button" class="layui-btn layui-btn-sm" style="float: right;" data-id="'+message.filepath+'" onclick="seeVideos(this);"><i class="layui-icon">&#xe64a;</i></button></h5><br><p>&nbsp&nbsp&nbsp&nbsp eda人数已经超过阈值，请及时安排人员进行疏导。</p><h6 style="float: right;">'+Dates+" "+Times+'</h6></div><div class="clearfix"> </div>'+messages;
			document.getElementById("style-2").innerHTML = messages
		});
	});

}

document.getElementById("changeLimits").onclick = function(){
	var load_index;
	if (limits === origin) {
		alert("请修改后点击提交！")
	}else{
		load_index = layer.load();
		ws.send(limits);
		document.getElementById("current_limit").innerHTML = "当前阈值："+limits+"  (可拖拉修改)"
		layer.close(load_index);
	}
	origin = limits;
};


carteen.onclick = function(){
	var id_index = document.getElementById("eda_btn").getAttribute("data-id")
	console.log(id_index)
	$.ajax({
		url: '/send_message',
		type: 'post',
		dataType:"text",
		async:false,
		data: {
			location:id_index
		},
		success:function(data){
			console.log(data);
		},
	})
	carteen_btn.click();
}
building.onclick = function(){
	var id_index = building_btn.getAttribute("data-id")
	console.log(id_index)
	$.ajax({
		url: '/send_message',
		type: 'post',
		dataType:"text",
		async:false,
		data: {
			location:id_index
		},
		success:function(data){
			console.log(data);
		},
	})
	building_btn.click();
}
eda.onclick = function(){
	var id_index = eda_btn.getAttribute("data-id")
	console.log(id_index)
	$.ajax({
		url: '/send_message',
		type: 'post',
		dataType:"text",
		async:false,
		data: {
			location:id_index
		},
		success:function(data){
			console.log(data);
		},
	})
	eda_btn.click();
}

function seeVideos(e){
	abnvideo_url = e.getAttribute("data-id");
	console.log(abnvideo_url);
	localStorage.setItem("video", abnvideo_url);
	var index = layer.open({
		title : "查看异常视频",
		type : 2,
		content : "showVideo.html"
	});
	$(window).resize(function(){
		layer.full(index);
	})
	layer.full(index);

}

function deleteMsg(e){
	var id = e.getAttribute("data-id");
	alert("delete "+id+"！");
	e.parentNode.parentNode.nextSibling.remove();
	e.parentNode.parentNode.remove();
}

function showVideo(){
	abnvideo_url = localStorage.getItem("video");
	console.log(abnvideo_url)
	videos.innerHTML = '<source src="'+abnvideo_url+'" type="video/mp4" /><object data="'+abnvideo_url+'" type="video/mp4" style="width: 100%;height: 100%;"><embed src="'+abnvideo_url+'" type="video/mp4" style="width: 100%;height: 100%;"/></object>'
}

