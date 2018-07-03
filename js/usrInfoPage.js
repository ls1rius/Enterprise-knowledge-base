var centerCoIntain = new Vue({
	el:'#centerContain',
	data:{
		usrHeadImage:'../image/user.jpg',
		name:'沈继涛',
		pos:'部门经理',
		sex:'女',
		age:'20',
		email:'865212941@qq.com',
		phone:'1810000001',
		fansNum:'67',
		followNum:'46',
		isChange:true,
		curLeft:0,
		editTip:'编辑资料',
		isPersonas:true,
		isBasicInfo:false,
		isMyfans:false,
		isMyFollows:false,
		isMyMsgs:false,
		pickBar:[
		{
			item:'用户画像'
		},
		{
			item:'基本信息'
		},
		{
			item:'我的粉丝'
		},
		{
			item:'我的关注'
		},
		{
			item:'我的消息'
		}
		],
		fansInfoData:[
		{
			image:'../image/faith.jpg',
			name:'faith'
		},
		{
			image:'../image/user.jpg',
			name:'张鹏'
		},
		{
			image:'../image/大鹏.jpg',
			name:'大鹏'
		},
		{
			image:'../image/晶玉翡翠.jpg',
			name:'晶玉翡翠'
		},
		{
			image:'../image/峍屿k.jpg',
			name:'峍屿k'
		},
		{
			image:'../image/逆流_而下.jpg',
			name:'逆流_而下'
		},
		{
			image:'../image/My未來式.jpg',
			name:'My未來式'
		},
		{
			image:'../image/宇欣.jpg',
			name:'宇欣'
		},
		{
			image:'../image/36kr.jpg',
			name:'36kr'
		},
		{
			image:'../image/JavaScript_w.jpg',
			name:'JavaScript_w'
		},
		{
			image:'../image/Paper_weekly.jpg',
			name:'Paper_weekly'
		},
		{
			image:'../image/大咖.jpg',
			name:'大咖'
		},
		{
			image:'../image/家v.jpg',
			name:'家v'
		},
		{
			image:'../image/27375871.jpg',
			name:'27375871'
		},
		{
			image:'../image/切格瓦拉.jpg',
			name:'切格瓦拉'
		},
		{
			image:'../image/人机与认知.jpg',
			name:'人机与认知'
		}
		],
		followsInfoData:[
		{
			image:'../image/头头不可一世.jpg',
			name:'头头不可一世'
		},
		{
			image:'../image/徐林森.jpg',
			name:'徐林森'
		},
		{
			image:'../image/泽宇.jpg',
			name:'泽宇'
		},
		{
			image:'../image/总为你着迷.jpg',
			name:'总为你着迷'
		},
		{
			image:'../image/依萍.jpg',
			name:'依萍'
		},
		{
			image:'../image/周扬.jpg',
			name:'周扬'
		}
		],
		msgData:[
		{
			image:'../image/man1.jpg',
			word:'下午那个文档能不能发我...',
			name:'李雷',
			time:'2018-04-07 18:20',
			content:'下午那个文档能不能发我一下啊'
		},
		{
			image:'../image/man1.jpg',
			word:'我觉得你说的挺有道理的...',
			name:'韩梅梅',
			time:'2018-03-03 18:20',
			content:'我觉得你说的挺有道理的。'
		},
		{
			image:'../image/man2.jpg',
			word:'标题党，通篇都在长篇大...',
			name:'张鹏',
			time:'标题党，通篇都在长篇大论，一点实质意义都没有',
			content:'我觉得你说的挺有道理的。'
		},
		{
			image:'../image/man3.jpg',
			word:'大佬能不能谈一下对区块...',
			name:'吴亦凡',
			time:'2018-02-25 18:20',
			content:'大佬能不能谈一下对区块链的见解，我很好奇'
		},
		{
			image:'../image/man4.jpg',
			word:'开头的条理很清晰，后面...',
			name:'小明',
			time:'2018-02-22 18:20',
			content:'开头的条理很清晰，后面就乱了。'
		}
		],
		curCheckMsg:0,
		curMsgContent:'Shibor报价银行团现由16家商业银行组成，包括工、农、中、建四家国有商业银行，交行、招商、光大、中信、兴业、浦发6家全国性股份制银行，北京银行、上海银行、南京银行3家城市商业性银行和“德意志上海”、“汇丰上海”、”渣打上海”3家外资银行。此16家报价银行是公开市场一级交易商或外汇市场做市商，在中国货币市场上人民币交易相对活跃、信息披露比较充分的银行。\
						Shibor报价银行团现由16家商业银行组成，包括工、农、中、建四家国有商业银行，交行、招商、光大、中信、兴业、浦发6家全国性股份制银行，北京银行、上海银行、南京银行3家城市商业性银行和“德意志上海”、“汇丰上海”、”渣打上海”3家外资银行。此16家报价银行是公开市场一级交易商或外汇市场做市商，在中国货币市场上人民币交易相对活跃、信息披露比较充分的银行。\
						Shibor报价银行团现由16家商业银行组成，包括工、农、中、建四家国有商业银行，交行、招商、光大、中信、兴业、浦发6家全国性股份制银行，北京银行、上海银行、南京银行3家城市商业性银行和“德意志上海”、“汇丰上海”、”渣打上海”3家外资银行。此16家报价银行是公开市场一级交易商或外汇市场做市商，在中国货币市场上人民币交易相对活跃、信息披露比较充分的银行。\
						Shibor报价银行团现由16家商业银行组成，包括工、农、中、建四家国有商业银行，交行、招商、光大、中信、兴业、浦发6家全国性股份制银行，北京银行、上海银行、南京银行3家城市商业性银行和“德意志上海”、“汇丰上海”、”渣打上海”3家外资银行。此16家报价银行是公开市场一级交易商或外汇市场做市商，在中国货币市场上人民币交易相对活跃、信息披露比较充分的银行。\
						Shibor报价银行团现由16家商业银行组成，包括工、农、中、建四家国有商业银行，交行、招商、光大、中信、兴业、浦发6家全国性股份制银行，北京银行、上海银行、南京银行3家城市商业性银行和“德意志上海”、“汇丰上海”、”渣打上海”3家外资银行。此16家报价银行是公开市场一级交易商或外汇市场做市商，在中国货币市场上人民币交易相对活跃、信息披露比较充分的银行。\
						Shibor报价银行团现由16家商业银行组成，包括工、农、中、建四家国有商业银行，交行、招商、光大、中信、兴业、浦发6家全国性股份制银行，北京银行、上海银行、南京银行3家城市商业性银行和“德意志上海”、“汇丰上海”、”渣打上海”3家外资银行。此16家报价银行是公开市场一级交易商或外汇市场做市商，在中国货币市场上人民币交易相对活跃、信息披露比较充分的银行。\
						Shibor报价银行团现由16家商业银行组成，包括工、农、中、建四家国有商业银行，交行、招商、光大、中信、兴业、浦发6家全国性股份制银行，北京银行、上海银行、南京银行3家城市商业性银行和“德意志上海”、“汇丰上海”、”渣打上海”3家外资银行。此16家报价银行是公开市场一级交易商或外汇市场做市商，在中国货币市场上人民币交易相对活跃、信息披露比较充分的银行。\
		'
	},
	methods:{
		changePickItem :function(index){
			var eleWidth = parseInt($('.slideSpace').css('width'));
			this.curLeft = eleWidth*index;
			// console.log(this.curLeft);
			this.isPersonas = false;
			this.isBasicInfo = false;
			this.isMyfans = false;
			this.isMyFollows = false;
			this.isMyMsgs = false;
			if(index == 0){
				this.isPersonas = true;
			}
			else if(index == 1){
				this.isBasicInfo = true;
			}
			else if(index == 2){
				this.isMyfans = true;
				setTimeout(function(){
                $("#myFans .pagination").createPage({
	                    totalPage:30,
	                    currPage:1,
	                    backFn:function(p){
	                        console.log("回调函数："+p);
	                    }
	                });
	            },0);
	   			// $("#myFans .pagination").createPage({
       //              totalPage:30,
       //              currPage:1,
       //              backFn:function(p){
       //                  console.log("回调函数："+p);
       //              }
       //          });


			}
			else if(index == 3){
				this.isMyFollows = true;
				setTimeout(function(){
                $("#myFans .pagination").createPage({
	                    totalPage:30,
	                    currPage:1,
	                    backFn:function(p){
	                        console.log("回调函数："+p);
	                    }
	                });
	            },0);

				// $(".pagination").createPage({
    //                 totalPage:30,
    //                 currPage:1,
    //                 backFn:function(p){
    //                     console.log("回调函数："+p);
    //                 }
    //             });
			}
			else if(index == 4){
				this.isMyMsgs = true;
			}
			else{
				this.isPersonas = false;
				this.isBasicInfo = false;
				this.isMyfans = false;
				this.isMyFollows = false;
			}
			
		},
		editTheInfo :function(){
			if(this.isChange == true){
				this.isChange = false;
				this.editTip = '完成';
			}
			else{
				this.isChange = true;
				this.editTip = '编辑资料';
			}
		},
		upLoadPic : function(evt){
    		var tgt = evt.target || window.event.srcElement,
		        files = tgt.files;

		    // FileReader support
		    if (FileReader && files && files.length) {
		        var fr = new FileReader();
		        fr.onload = function () {
		            // $('.headImageBox img').src = fr.result;
		            centerCoIntain.$data.usrHeadImage = fr.result;
		            var parentContain = window.parent.document;
		            parentContain.getElementsByClassName('usrInfoBoxContain')[0].childNodes[0].src = fr.result;
		            // console.log(centerCoIntain.$data.usrHeadImage);
		            // console.log($('.headImageBox img').src(fr.result));
		            // console.log(fr.result);
		        }
		        fr.readAsDataURL(files[0]);
		    }

		    // Not supported
		    else {
		        // fallback -- perhaps submit the input to an iframe and temporarily store
		        // them on the server until the user's session ends.
		    }
		},
		checkTheMsg:function(index){
			this.curCheckMsg = index;
			this.curMsgContent = this.msgData[index].content;
		}
	}
});

$(function($){
    var ms = {
        init:function(totalsubpageTmep,args){
            return (function(){
                ms.fillHtml(totalsubpageTmep,args);
                ms.bindEvent(totalsubpageTmep,args);
            })();
        },
        //填充html
        fillHtml:function(totalsubpageTmep,args){
            return (function(){
                totalsubpageTmep="<li><a href=\"javascript:void(0);\" class=\"prev geraltTb_pager\">上一页</a></li>";
                // 页码大于等于4的时候，添加第一个页码元素
                if(args.currPage!=1 && args.currPage>=4 && args.totalPage!=4) {
                    totalsubpageTmep += "<li class='ali'><a href='javascript:void(0);' class='geraltTb_pager' data-go='' >"+1+"</a></li>";
                }
                /* 当前页码>4, 并且<=总页码，总页码>5，添加“···”*/
                if(args.currPage-2>2 && args.currPage<=args.totalPage && args.totalPage>5) {
                    totalsubpageTmep += "<li class='ali'><a href='javascript:void(0);' class='geraltTb_' data-go='' >...</a></li>";
                }

                /* 当前页码的前两页 */
                var start = args.currPage-2;
                /* 当前页码的后两页 */
                var end = args.currPage+2;

                if((start>1 && args.currPage<4) || args.currPage==1) {
                    end++;
                }
                if(args.currPage>args.totalPage-4 && args.currPage>=args.totalPage) {
                    start--;
                }

                for(; start<=end; start++) {
                	if(start==args.currPage){
                		totalsubpageTmep += "<li class='ali'><a href='javascript:void(0);' class='geraltTb_pager now' data-go='' >"+start+"</a></li>";
                	}
                    else if(start<=args.totalPage && start>=1) {
                        totalsubpageTmep += "<li class='ali'><a href='javascript:void(0);' class='geraltTb_pager' data-go='' >"+start+"</a></li>";
                    }
                }
                

                if(args.currPage+2<args.totalPage-1 && args.currPage>=1 && args.totalPage>5) {
                    totalsubpageTmep += "<li class='ali'><a href='javascript:void(0);' class='geraltTb_' data-go='' >...</a></li>";
                }

                if(args.currPage!=args.totalPage && args.currPage<args.totalPage-2 && args.totalPage!=4) {
                    totalsubpageTmep += "<li class='ali'><a href='javascript:void(0);' class='geraltTb_pager' data-go='' >"+args.totalPage+"</a></li>";
                }
                totalsubpageTmep+="<li><a href=\"javascript:void(0);\" class=\"next geraltTb_pager\">下一页</a></li>"
                $(".pagination").html(totalsubpageTmep);
            })();
        },
        //绑定事件
        bindEvent:function(totalsubpageTmep,args){
            return (function(){
                totalsubpageTmep.on("click","a.geraltTb_pager",function(event){
                	console.log()
                    var current = parseInt($(this).text());

                    // totalsubpageTmep.off("click");
                    //判断是否是点击上一页
                    
                    if($(this).hasClass("prev")){
                    	$('.pagination li a ').each(function(index,value){
                    		if($('.pagination li a ').eq(index).hasClass("now")){
                    			var num = $('.pagination li a').eq(index).text();
                    			current = parseInt(num)-1;
                    			return false;
                    		}
                    		else{
		                    	current = 1;
		                    }
                    	})
                    	current=Math.max(current,1);
                    }
                    //判断是否点击下一页
                    else if($(this).hasClass("next")){
                    	$('.pagination li a ').each(function(index,value){
		                    if($('.pagination li a ').eq(index).hasClass("now")){
                    			var num = $('.pagination li a').eq(index).text();
                    			current = parseInt(num)+1;
                    			console.log(index);
                    			return false;
                    		}
                    		else{
		                    	current = 1;
		                    }
                    	})
                    	current=Math.min(current,args.totalPage);
                    }
                    
                    ms.fillHtml(totalsubpageTmep,{"currPage":current,"totalPage":args.totalPage,"turndown":args.turndown});
                    if(typeof(args.backFn)=="function"){
                        args.backFn(current);
                    }



                });
            })();
        }
    }
    $.fn.createPage = function(options){       
        ms.init(this,options);
    }
});
$(function(){
	$("#myFans .pagination").createPage({
        totalPage:30,
        currPage:1,
        backFn:function(p){
            console.log("回调函数："+p);
        }
    });
    $('#myFans .chooseItemSpace').eq(0).css('display','none');

    $("#myFollows .pagination").createPage({
        totalPage:30,
        currPage:1,
        backFn:function(p){
            console.log("回调函数："+p);
        }
    });
    $('#myFollows .chooseItemSpace').eq(0).css('display','none');
    
})































// drawContributionPart();
// drawContributionTime();
// function drawContributionPart(){
// 	var dom = document.getElementById("contributionPart");
// 	var myChart = echarts.init(dom,'macarons');
// 	var app = {};
// 	option = null;
// 	option = {
// 	    title : {
// 	        text: '用户贡献文章占比',
// 	        subtext: '资源来自后台统计',
// 	        x:'center'
// 	    },
// 	    tooltip : {
// 	        trigger: 'item',
// 	        formatter: "{a} <br/>{b} : {c} ({d}%)"
// 	    },
// 	    legend: {
// 	        orient: 'vertical',
// 	        left: 'left',
// 	        data: ['大数据','纳斯达克','区块链','数字货币','机器学习']
// 	    },
// 	    series : [
// 	        {
// 	            name: '访问来源',
// 	            type: 'pie',
// 	            radius : '55%',
// 	            center: ['50%', '60%'],
// 	            data:[
// 	                {value:335, name:'大数据'},
// 	                {value:310, name:'纳斯达克'},
// 	                {value:234, name:'区块链'},
// 	                {value:135, name:'数字货币'},
// 	                {value:1548, name:'机器学习'}
// 	            ],
// 	            itemStyle: {
// 	                emphasis: {
// 	                    shadowBlur: 10,
// 	                    shadowOffsetX: 0,
// 	                    shadowColor: 'rgba(0, 0, 0, 0.5)'
// 	                }
// 	            }
// 	        }
// 	    ]
// 	};
// 	;
// 	if (option && typeof option === "object") {
// 	    myChart.setOption(option, true);
// 	}
// }

// function drawContributionTime(){
// 	var dom = document.getElementById("contributionTime");
// 	var myChart = echarts.init(dom,'macarons');
// 	var app = {};
// 	option = null;
// 	app.title = '';


// 	option = {
// 	    tooltip: {
// 	        trigger: 'none',
// 	        axisPointer: {
// 	            type: 'cross'
// 	        }
// 	    },
// 	    color:["#c12e34",
// 	        "#e6b600",
// 	        "#0098d9",
// 	        "#2b821d",
// 	        "#005eaa",
// 	        "#339ca8",
// 	        "#cda819",
// 	        "#32a487"],
// 	    legend: {
// 	        data:['大数据','数字货币','JS','区块链','纳斯达克','机器学习'],
// 	        textStyle: {       // 属性lineStyle控制线条样式  
// 	           // fontWeight: 'bold',  
// 	           fontSize : 12,  
// 	           color: '#000'  
// 	       }
// 	    },
// 	    grid: {
// 	        top: 70,
// 	        bottom: 50
// 	    },
// 	    xAxis: [
// 	        {
// 	            type: 'category',
// 	            axisTick: {
// 	                alignWithLabel: true
// 	            },
// 	            axisLine: {
// 	                onZero: false,
// 	                lineStyle: {
// 	                    color: 'gray'
// 	                }
// 	            },
// 	            axisLabel: {            // 坐标轴小标记  
// 	               textStyle: {       // 属性lineStyle控制线条样式  
// 	                   // fontWeight: 'bold',  
// 	                   fontSize : 12,  
// 	                   color: '#000'  
// 	               }  
// 	            },
// 	            data: ["00:00", "04:00", "8:00", "12:00", "16:00", "20:00"]
// 	        },
// 	        {
// 	            type: 'category',
// 	            axisTick: {
// 	                alignWithLabel: true
// 	            },
// 	            axisLine: {
// 	                onZero: false,
// 	                lineStyle: {
// 	                    color: 'gray'
// 	                }
// 	            },
// 	            axisLabel: {            // 坐标轴小标记  
// 	               textStyle: {       // 属性lineStyle控制线条样式  
// 	                   // fontWeight: 'bold',  
// 	                   fontSize : 12,  
// 	                   color: '#000'  
// 	               }  
// 	            },
// 	            data: ["00:00", "04:00", "8:00", "12:00", "16:00", "20:00"]
// 	        }
// 	    ],
// 	    yAxis: [
// 	        {
// 	            type: 'value',
	            
// 	            // y轴的颜色和宽度
// 	            axisLine:{
// 	                lineStyle:{
// 	                    color:'gray'
// 	                }
// 	            },
// 	            // y轴的字体样式
// 	            axisLabel: {
// 	                show: true,
// 	                textStyle: {
// 	                    fontSize : 12, 
// 	                    color: '#000'
// 	                }
// 	            }
// 	        }
// 	    ],
// 	    series: [
// 	        {
// 	            name:'大数据',
// 	            type:'line',
// 	            xAxisIndex: 1,
// 	            smooth: true,
// 	            data:[9.9, 3.2, 1.3, 3.3, 0.9, 1.9]
// 	        },
// 	        {
// 	            name:'数字货币',
// 	            type:'line',
// 	            smooth: true,
// 	            data:[5.6, 4.2, 4.4, 3.1, 4.8, 6.6]
// 	        },
// 	        {
// 	            name:'JS',
// 	            type:'line',
// 	            smooth: true,
// 	            data:[3.0, 4.5, 1.0, 1.2, 4.9, 6.5]
// 	        }
// 	        ,
// 	        {
// 	            name:'区块链',
// 	            type:'line',
// 	            smooth: true,
// 	            data:[6.7, 7.8, 5.4, 4.6, 8.8, 7.5]
// 	        }
// 	        ,
// 	        {
// 	            name:'纳斯达克',
// 	            type:'line',
// 	            smooth: true,
// 	            data:[1.2, 2.3, 3.2, 1.2, 4.5, 8.0]
// 	        }
// 	        ,
// 	        {
// 	            name:'机器学习',
// 	            type:'line',
// 	            smooth: true,
// 	            data:[7.8, 0.2, 4.5, 4.0, 1.3, 5.2]
// 	        }
// 	    ]
// 	};

// 	if (option && typeof option === "object") {
// 	    myChart.setOption(option, true);
// 	}

// }

