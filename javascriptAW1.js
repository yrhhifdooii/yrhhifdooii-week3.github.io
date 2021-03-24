function getdata(){
			var req=new XMLHttpRequest();// XMLHttpRequest專門用來和伺服器做連線
			req.open("get","https://padax.github.io/taipei-day-trip-resources/taipei-attractions.json");
			req.onload=function(){//load事件 偵測連線的狀態結束
				//連線完成
				//let loadData = this.responseText;
				let loadData = JSON.parse(this.responseText); //JSON.parse主要將this.responseText字串轉換成JavaScript的數值或是物件
				let tlist = loadData["result"]["results"];
				
				for(let x = 0 ; x<8;x++){  //開網頁先下在8個 地點 所以沒有用tlist.length
					
				
					let strfile = tlist[x]["file"]; //將tlist陣列內的file找到
					let strfile2 = strfile.split("http://"); //用http:// 來分割網址 並且變成陣列  (因為網址連在一起)
					console.log(tlist[x]["stitle"]+"http://"+strfile2[1]+"\n");
					//console.log(tlist[x]["stitle"]);	
						
					let fdiv = document.createElement("div");//建立一個DIV標籤
					let img = document.createElement("img"); //建立一個img標籤
					img.src = "http://"+strfile2[1];       //想要建立的圖片網址  先寫好
					let h1 = document.createElement("h1"); //建立一個h1標籤
					h1.textContent = tlist[x]["stitle"];        //想要寫的內容 也是 先放在這邊寫好
					var bodyfa = document.getElementById("box1")//通過id號獲取frameDiv 的父類（也就是上一級的節點）
					fdiv.className = "boxitem";
			
					bodyfa.appendChild(fdiv);//把建立的節點frameDiv 新增到父類body 中；
					fdiv.appendChild(img);
					fdiv.appendChild(h1);
				}
				//console.log(tlist);
			}
			req.send();//送出連線			
		}
		
		
			let nms = 8 ;  //給 create按鈕 使用的變數
			
			
		function create(){			
			
			
		 var req=new XMLHttpRequest();// XMLHttpRequest專門用來和伺服器做連線
			req.open("get","https://padax.github.io/taipei-day-trip-resources/taipei-attractions.json");
			req.onload=function(){//load事件 偵測連線的狀態結束
				//連線完成
				//let loadData = this.responseText;
				let loadData = JSON.parse(this.responseText); //JSON.parse主要將this.responseText字串轉換成JavaScript的數值或是物件
				let tlist = loadData["result"]["results"];
				if((nms + 8 )< tlist.length ){
					for(let x = nms ; x<nms+8;x++){  //開網頁先下在8個 地點 所以沒有用tlist.length
					
				
						let strfile = tlist[x]["file"]; //將tlist陣列內的file找到
						let strfile2 = strfile.split("http://"); //用http:// 來分割網址 並且變成陣列  (因為網址連在一起)
						console.log(tlist[x]["stitle"]+"http://"+strfile2[1]+"\n");
						//console.log(strfile2);	
							
						let fdiv = document.createElement("div");//建立一個DIV標籤
						let img = document.createElement("img"); //建立一個img標籤
						img.src = "http://"+strfile2[1];       //想要建立的圖片網址  先寫好
						let h1 = document.createElement("h1"); //建立一個h1標籤
						h1.textContent = tlist[x]["stitle"];        //想要寫的內容 也是 先放在這邊寫好
						var bodyfa = document.getElementById("box1")//通過id號獲取frameDiv 的父類（也就是上一級的節點）
						fdiv.className = "boxitem";
				
						bodyfa.appendChild(fdiv);//把建立的節點frameDiv 新增到父類body 中；
						fdiv.appendChild(img);
						fdiv.appendChild(h1);
						
						 
					}

					
				}else{
					for(let x = nms ; x<tlist.length;x++){  //開網頁先下在8個 地點 所以沒有用tlist.length
					
				
						let strfile = tlist[x]["file"]; //將tlist陣列內的file找到
						let strfile2 = strfile.split("http://"); //用http:// 來分割網址 並且變成陣列  (因為網址連在一起)
						console.log(tlist[x]["stitle"]+"http://"+strfile2[1]+"\n");
						//console.log(strfile2);	
							
						let fdiv = document.createElement("div");//建立一個DIV標籤
						let img = document.createElement("img"); //建立一個img標籤
						img.src = "http://"+strfile2[1];       //想要建立的圖片網址  先寫好
						let h1 = document.createElement("h1"); //建立一個h1標籤
						h1.textContent = tlist[x]["stitle"];        //想要寫的內容 也是 先放在這邊寫好
						var bodyfa = document.getElementById("box1")//通過id號獲取frameDiv 的父類（也就是上一級的節點）
						fdiv.className = "boxitem";
				
						bodyfa.appendChild(fdiv);//把建立的節點frameDiv 新增到父類body 中；
						fdiv.appendChild(img);
						fdiv.appendChild(h1);
						
						 
					}
				}
				
				
			  nms = nms+8; //幫我改變抓取圖片的起始index
			}
			req.send();//送出連線
			}