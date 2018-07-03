
var centerContain = new Vue({
    el:'#centerContain',
    data:{
        chooseData:[
        {
            icon:'icon-yanjing1',
            choose:'审核',
            iconColor:'#29958F'
        },
        {
            icon:'icon-wancheng',
            choose:'发布',
            iconColor:'#8175C7'
        },
        {
            icon:'icon-folder',
            choose:'归档',
            iconColor:''
        },
        {
            icon:'icon-shanchu',
            choose:'删除',
            iconColor:'#59ACE2'
        },
        {
            icon:'icon-gantanhao',
            choose:'失效',
            iconColor:'#FF6C60'
        },
        {
            icon:'icon-wenjianjia',
            choose:'个人目录',
            iconColor:''
        }
        ],
        searchResults:[
        {
            title:'期货的入门知识',
            textImage:'../image/example4.jpg',
            text:'在下供职于国内一家期货公司，可以说说对这个问题的认识，也总结一下自己的思考。\
                从定义上来说，期货是在交易所内进行交易的标准化的合约，该合约约定了在未来\
                某一个特定的时间（交割日）以确定的价格（期货价格）交易一定数量是在交易所内\
                进行交易的标准化的合约，该合约约定了在未来某一个特定的时间（交割日）以确定的价格\
                （期货价格）交易一定数量',
            keyWords:[
            {
                item:'期货'
            },
            {
                item:'保险金'
            },
            {
                item:'期货'
            },
            {
                item:'保险金'
            },
            {
                item:'期货'
            }
            ],
            authorImage:'../image/example1.jpg',
            authorName:'Mr.吴',
            messageCount:13,
            likeCount:108,
            publishTime:'2018/03/31'
        },
        {
            title:'躺枪的万科与海淀的码农',
            textImage:'../image/example2.jpg',
            text:'10年180万元，在北京的5.5环租个90平方米的小三居，当这个消息传到自己耳朵里的时候，立马有了一种贫穷限制了自己想象力的感觉。并暗自感叹，还好提前贷款买了房，要不然以在媒体工作的那点薪水，今后在北京恐怕连租房的资格都要没有了。',
            keyWords:[
            {
                item:'证券'
            },
            {
                item:'房市'
            },
            {
                item:'公司'
            },
            ],
            authorImage:'../image/example1.jpg',
            authorName:'证券专家',
            messageCount:5,
            likeCount:22,
            publishTime:'2018/03/12'
        },
        {
            title:'人民币兑美元中间价下跌46基点报6.2817',
            textImage:'../image/example1.jpg',
            text:'4月17日在岸人民币兑美元即期汇率收涨47个基点，与中间价均创逾两周新高，午后美元震荡回落，但因月中购汇需求偏多，逢低美元买盘明显限制人民币汇率上涨空间，盘中波动区间为6.2740-6.2830，北京时间23:30夜盘报6.2835，较上日夜盘跌70个基点，全天成交量318.68亿美元，较上日扩大38.32亿美元。',
            keyWords:[
            {
                item:'货币'
            },
            {
                item:'人民币'
            },
            {
                item:'汇率'
            }
            ],
            authorImage:'../image/example1.jpg',
            authorName:'人民币动态',
            messageCount:2,
            likeCount:11,
            publishTime:'2018/03/31'
        },
        {
            title:'中国经济新开放助力世界经济稳定向好',
            textImage:'../image/example7.png',
            text:'实践证明，过去40年中国经济发展是在开放条件下取得的，未来中国经济实现高质量发展也必须在更加开放条件下进行。这是中国基于发展需要作出的战略抉择，同时也是在以实际行动推动经济全球化造福世界各国人民。”博鳌亚洲论坛2018年年会开幕式上，中国领导人再次向世界释放扩大开放的强烈信号。',
            keyWords:[
            {
                item:'宏观经济'
            },
            {
                item:'中国经济'
            },
            {
                item:'国际'
            }
            ],
            authorImage:'../image/example1.jpg',
            authorName:'宏观经济',
            messageCount:46,
            likeCount:258,
            publishTime:'2018/02/22'
        }
        ],
        isPassPart:true,
        isFailPart:false
    },
    methods:{
        getSearchResult : function(){
            this.normal = false;
            this.specifical = false;
            this.searchResult = true;
            setTimeout(function(){
                $(".pagination").createPage({
                    totalPage:30,
                    currPage:1,
                    backFn:function(p){
                        console.log("回调函数："+p);
                    }
                });
            },100);
        },
        changePickType:function(type){
            if(type=='p'){
                this.isPassPart = true;
                this.isFailPart = false;
            }
            else{
                this.isPassPart = false;
                this.isFailPart = true;
            }
        }
    }
});


var rightContain = new Vue({
    el:'#rightContain',
    data:{
        messageData:[
        {
            messageContain:'您收藏的文章 \
                            <i>浅谈区块链 </i>有更新',
            messageTime:'12:33:51'
        },
        {
            messageContain:'您关注的用户 \
                            <i>故故故故yu </i>发布了新文章',
            messageTime:'14:45:15'
        },
        {
            messageContain:'您收藏的文章<i> \
                            什么是比特币？ </i>有更新',
            messageTime:'14:53:35'
        },
        {
            messageContain:'您的文章 \
                            <i>货币基金如何盈利？ </i>\
                            被\
                            <i>canjuly </i>\
                            点赞',
            messageTime:'16:15:57'
        },
        {
            messageContain:'<i>canjuly </i>\
                            关注了您',
            messageTime:'18:49:00'
        },
        {
            messageContain:'您收藏的文章<i> \
                            中本聪的真正身份 </i>有更新',
            messageTime:'19:23:48'
        },
        {
            messageContain:'您收藏的文章<i> \
                            区块链大法 </i>有更新',
            messageTime:'21:48:36'
        }
        ],
        hotContainData:[
            {
                iconfont:'../image/word.png',
                title:'区块链如何带来个人数据保护“革命”？',
                starImg:'../image/star.png',
                starCount:'5',
                date:'2018/03/5',
                time:'12:29:23'
            },
            {
                iconfont:'../image/excel.png',
                title:'化解小微企业融资难题 腾讯区块链发力供应链金融',
                starImg:'../image/star.png',
                starCount:'4',
                date:'2018/03/3',
                time:'12:29:23'
            },
            {
                iconfont:'../image/pdf.png',
                title:'洛克菲勒家族旗下风投公司将与CoinFund展开合作',
                starImg:'../image/star.png',
                starCount:'4',
                date:'2018/03/3',
                time:'12:29:23'
            },
            {
                iconfont:'../image/ppt.png',
                title:'区块链规模应用尚需时日',
                starImg:'../image/star.png',
                starCount:'4',
                date:'2018/03/2',
                time:'12:29:23'
            },
            {
                iconfont:'../image/word.png',
                title:'北京金融局党组书记霍学文九问区块链、比特币与ICO ',
                starImg:'../image/star.png',
                starCount:'4',
                date:'2018/03/1',
                time:'12:29:23'
            },
            {
                iconfont:'../image/word.png',
                title:'消息称谷歌正研究区块链相关技术来支持其云业务',
                starImg:'../image/star.png',
                starCount:'4',
                date:'2018/02/25',
                time:'12:29:23'
            }
        ]
    }
})



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
	$(".pagination").createPage({
        totalPage:30,
        currPage:1,
        backFn:function(p){
            console.log("回调函数："+p);
        }
    });
    $('.chooseItemSpace').eq(0).css('display','none');
})
