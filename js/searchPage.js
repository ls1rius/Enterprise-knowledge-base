var recommendPart = new Vue({
	el:'#rightContain .recommendPart',
	data:{
		recommendTips:[
		{
			item:'货币型基金'
		},
		{
			item:'海外投资保险'
		},
		{
			item:'债券市场'
		},
		{
			item:'国际金融'
		},
		{
			item:'比特币'
		},
		{
			item:'大数据'
		}
		],
		recommendContain:[
		{
			title:'欧洲债务危机的根源是什么？',
			tips:[
			{
				tip:'债务'
			},
			{
				tip:'金融'
			}
			],
			author:'王小安',
			time:'2018/03/31'
		},
		{
			title:'欧洲债务危机的根源是什么？',
			tips:[
			{
				tip:'债务'
			},
			{
				tip:'金融'
			}
			],
			author:'王小安',
			time:'2018/03/31'
		},
		{
			title:'欧洲债务危机的根源是什么？',
			tips:[
			{
				tip:'债务'
			},
			{
				tip:'金融'
			}
			],
			author:'王小安',
			time:'2018/03/31'
		}
		]
	}
})

var hotPart = new Vue({
	el:'#rightContain .hotPart',
	data:{
		starImg:'../image/fire.png',
		hotContainData:[
			{
				iconfont:'../image/word.png',
				title:'刘建伟：3月一线城市商品住宅销售价格同比下降  二三线城市同比涨幅继续回落',
				starCount:5
			},
			{
				iconfont:'../image/excel.png',
				title:'增值税改革迈新步 全年将减税4000亿',
				starCount:4
			},
			{
				iconfont:'../image/pdf.png',
				title:'北京将放宽六大重点领域的外资准入限制',
				starCount:4
			},
			{
				iconfont:'../image/ppt.png',
				title:'躺枪的万科与海淀的码农',
				starCount:4
			},
			{
				iconfont:'../image/word.png',
				title:'前FBI局长科米：我有话要说',
				starCount:4
			},
			{
				iconfont:'../image/word.png',
				title:'欧盟在世贸组织就美钢铝关税提起磋商请求',
				starCount:4
			}
		]
	}
})


var centerContain = new Vue({
	el:'#centerContain',
	data:{
		normal:true,
		specifical:false,
		searchResult:false,
		normalColor : 'red',
		specificalColor :'#999999',
		pickedTotalTypeConditions: 0,
		pickedTypeConditions: 0,
		totalTypeConditions:[
			{item:'内容'},
			{item:'标签'}
		],
		typeConditions:[
			{item:'全部'},
			{item:'文档'},
			{item:'图片'},
			{item:'视频'}
		],
		usefulConditions:[
			{
				conditionDes:'主题',
				haveInput:true,
				haveSelect:false,
				selects:[
					
				],
				hints:'请输入主题'
			},
			{
				conditionDes:'创建人',
				haveInput:true,
				haveSelect:true,
				selects:[
					{item:'员工'},
					{item:'CEO'},
					{item:'管理员'}
				],
				hints:'请输入创建人姓名'
			},
			{
				conditionDes:'文档目录',
				haveInput:true,
				haveSelect:true,
				selects:[
					{item:'员工'},
					{item:'CEO'},
					{item:'管理员'}
				],
				hints:'请选择文档目录'
			},
			{
				conditionDes:'创建时间',
				haveInput:true,
				haveSelect:false,
				selects:[
				],
				hints:'请选择创建时间'
			},
			{
				conditionDes:'创建人部门',
				haveInput:true,
				haveSelect:true,
				selects:[
					{item:'员工'},
					{item:'CEO'},
					{item:'管理员'}
				],
				hints:'请选择创建人部门'

			},
			{
				conditionDes:'修改时间',
				haveInput:true,
				haveSelect:false,
				selects:[
				],
				hints:'请选择修改时间'
			}
		],
		otherConditions:[
			{
				conditionDes:'编号',
				haveInput:true,
				haveSelect:false,
				selects:[
					
				],
				hints:'请输入编号'
			},
			{
				conditionDes:'显示',
				haveInput:false,
				haveSelect:true,
				selects:[
					{item:'员工'},
					{item:'CEO'},
					{item:'管理员'}
				],
				hints:''
			},
			{
				conditionDes:'所有者',
				haveInput:true,
				haveSelect:true,
				selects:[
					{item:'员工'},
					{item:'CEO'},
					{item:'管理员'}
				],
				hints:'请输入所有者姓名'
			},
			{
				conditionDes:'所有者部门',
				haveInput:true,
				haveSelect:false,
				selects:[
				],
				hints:'请选择所有者部门'
			},
			{
				conditionDes:'所有者分部',
				haveInput:true,
				haveSelect:true,
				selects:[
					{item:'员工'},
					{item:'CEO'},
					{item:'管理员'}
				],
				hints:'请选择所有者分部'

			},
			{
				conditionDes:'创建人分部',
				haveInput:true,
				haveSelect:false,
				selects:[
				],
				hints:'请选择创建人分部'
			},
			{
				conditionDes:'新闻类型',
				haveInput:false,
				haveSelect:true,
				selects:[
					{item:'员工'},
					{item:'CEO'},
					{item:'管理员'}
				],
				hints:'请选择修改时间'
			},
			{
				conditionDes:'修改日期',
				haveInput:true,
				haveSelect:false,
				selects:[
				],
				hints:'请选择修改日期'
			},
			{
				conditionDes:'虚拟目录',
				haveInput:true,
				haveSelect:true,
				selects:[
					{item:'员工'},
					{item:'CEO'},
					{item:'管理员'}
				],
				hints:'请选择虚拟目录'
			},
			{
				conditionDes:'关键字',
				haveInput:true,
				haveSelect:false,
				selects:[
				],
				hints:'请输入关键字'
			},
			{
				conditionDes:'回复文档数',
				haveInput:true,
				haveSelect:false,
				selects:[
				],
				hints:'请输入回复文档数'
			},
			{
				conditionDes:'状态',
				haveInput:false,
				haveSelect:true,
				selects:[
					{item:'员工'},
					{item:'CEO'},
					{item:'管理员'}
				],
				hints:'请输入状态'
			},
			{
				conditionDes:'语言',
				haveInput:true,
				haveSelect:true,
				selects:[
					{item:'员工'},
					{item:'CEO'},
					{item:'管理员'}
				],
				hints:'请选择语言信息'
			},
			{
				conditionDes:'最后修改人',
				haveInput:true,
				haveSelect:false,
				selects:[
				],
				hints:'请输入最后修改人'
			},
			
			{
				conditionDes:'归档日期',
				haveInput:true,
				haveSelect:false,
				selects:[
				],
				hints:'请选择归档日期'
			},
			{
				conditionDes:'归档人',
				haveInput:true,
				haveSelect:false,
				selects:[
				],
				hints:'请输入归档人'
			},
			{
				conditionDes:'审批时间',
				haveInput:true,
				haveSelect:false,
				selects:[
				],
				hints:'请选择审批日期'
			},
			{
				conditionDes:'最后审批人',
				haveInput:true,
				haveSelect:false,
				selects:[
				],
				hints:'请输入最后审批人'
			},
			{
				conditionDes:'相关客户',
				haveInput:true,
				haveSelect:false,
				selects:[
				],
				hints:'请输入相关客户'
			},
			{
				conditionDes:'相关资产',
				haveInput:true,
				haveSelect:false,
				selects:[
				],
				hints:'请输入相关资产'
			},
			{
				conditionDes:'相关人员',
				haveInput:true,
				haveSelect:false,
				selects:[
				],
				hints:'请输入相关人员'
			},
			{
				conditionDes:'相关目录',
				haveInput:true,
				haveSelect:false,
				selects:[
				],
				hints:'请输入相关目录'
			}
		],
		curSrcs:[
		{
			item:'内容'
		},
		{
			item:'文档'
		}
		],
		searchResultCount:'19,900,000',
		searchResults:[
		{
			title:'金融产品的个人需求及市场细分',
            textImage:'../image/01.jpg',
            text:'随着我国加入WTO，我国金融发展将不如一个新的历史阶段。根据协议，中国将向外资金融机构全面开放外汇业务\
                从定义上来说，期货是在交易所内进行交易的标准化的合约，该合约约定了在未来\
                某一个特定的时间（交割日）以确定的价格（期货价格）交易一定数量是在交易所内\
                进行交易的标准化的合约，该合约约定了在未来某一个特定的时间（交割日）以确定的价格\
                （期货价格）交易一定数量',
            keyWords:[
            {
                item:'金融产品'
            },
            {
                item:'市场细分'
            },
            {
                item:'需求'
            },
            ],
            authorImage:'../image/01.jpg',
            authorName:'Mr.戚',
            messageCount:13,
            likeCount:108,
            publishTime:'2018/02/31'
        },
        {
            title:'基于多维尺度分析的个人金融产品差异性',
            textImage:'../image/02.jpg',
            text:'调研个人金融产品，通过问卷调查获取数据,运用多维尺度分析对中国主要商业银行的主打个人金融产品的差异性做出实证分析并提出解决策略。文章得出如下结论:我国商业银行个人金融产品的层次差别并不十分明显,产品或服务从形式到功能上都存在着较大的同质性;个人金融产品主要是单一型产品,缺乏为客户提供多项业务相结合的交叉式或捆绑式服务,不能满足消费者的多元化需求;不同收入的消费人群对个人金融产品的需求不同。',
            keyWords:[
            {
                item:'金融产品'
            },
            {
                item:'商业银行'
            },
            {
                item:'客户'
            },
            ],
            authorImage:'../image/02.jpg',
            authorName:'证券专家',
            messageCount:5,
            likeCount:22,
            publishTime:'2018/04/12'
        },
        {
            title:'金融产品创新的经济分析',
            textImage:'../image/03.jpg',
            text:'自二十世纪七十年代以来，金融创新领域的理论研究方兴未艾，但针对金融产品创新的系统研究尚显缺乏，金融产品的创新过程仍然被视作“黑箱”。从货币的产生算起；金融产品出现在人类的经济生活中已经有数千年的历史，这期间不但货币的形态从远古的牲畜演变到现代的电子货币，而且还产生了银行存贷款、保险合约、债券、股票等等基础金融产品，而当代的金融衍生产品创新更是层出不穷。',
            keyWords:[
            {
                item:'金融产品'
            },
            {
                item:'金融创新'
            },
            ],
            authorImage:'../image/03.jpg',
            authorName:'金融市场部',
            messageCount:2,
            likeCount:11,
            publishTime:'2018/04/13'
        },
        {
            title:'对我国商业银行金融产品创新的思考',
            textImage:'../image/04.png',
            text:'金融产品创新是商业银行竞争的有力武器，特别是金融格局越来越开放的今天尤显重要,当前金融产品创新中由于观念、制度、内部管理与技术方面的约束，导致产品创新结构失衡、联动性不强等方面的问题，影响了金融产品创新的功能发挥。应当从产品创新机制、基础、保障、环境等方面予以进一步完善。',
            keyWords:[
            {
                item:'金融产品'
            },
            {
                item:'金融创新'
            },
            {
                item:'国内'
            }
            ],
            authorImage:'../image/04.png',
            authorName:'李华',
            messageCount:46,
            likeCount:258,
            publishTime:'2018/04/14'
        }
		],
		financeData:[
		{
			item:'图片'
		},
		{
			item:'音频'
		},
		{
			item:'文档'
		}
		]
	},
	methods:{
		changeSearchModel : function(id){
			this.searchResult = false;
			if(id=='n') {
				this.normal = true;
				this.specifical = false;
				this.normalColor = 'red';
				this.specificalColor = '#999999';
			}
			else {
				this.normal = false;
				this.specifical = true;
				this.normalColor = '#999999';
				this.specificalColor = 'red';
				setTimeout(function(){
					$('.usefulConditions .condition:eq(3) .conditionInput input').datepicker({
					    format: 'yyyy-mm-dd',
					    minView:'month',
					    language: 'zh-CN',
					    autoclose:true,
					    startDate:new Date()
					});
					$('.usefulConditions .condition:eq(5) .conditionInput input').datepicker({
					    format: 'yyyy-mm-dd',
					    minView:'month',
					    language: 'zh-CN',
					    autoclose:true,
					    startDate:new Date()
					});
					$('.otherConditions .condition:eq(7) .conditionInput input').datepicker({
					    format: 'yyyy-mm-dd',
					    minView:'month',
					    language: 'zh-CN',
					    autoclose:true,
					    startDate:new Date()
					});
					$('.otherConditions .condition:eq(14) .conditionInput input').datepicker({
					    format: 'yyyy-mm-dd',
					    minView:'month',
					    language: 'zh-CN',
					    autoclose:true,
					    startDate:new Date()
					});
					$('.otherConditions .condition:eq(16) .conditionInput input').datepicker({
					    format: 'yyyy-mm-dd',
					    minView:'month',
					    language: 'zh-CN',
					    autoclose:true,
					    startDate:new Date()
					});
				},1000)
			}
		},
		changeTotalTypeCondition : function(index){
			this.pickedTotalTypeConditions = index;
		},
		changeTypeCondition :function(index){
			this.pickedTypeConditions = index;
		},
		cancelSpecificalSearch : function(){
			this.normal = true;
			this.specifical = false;
			this.normalColor = 'red';
			this.specificalColor = '#999999';
		},
		clearAllConditions : function(){
			var usefulConditions = $('.usefulConditions .condition .conditionInput input');
			var otherConditions = $('.otherConditions .condition .conditionInput input');
			for (var i = 0;i<usefulConditions.length;i++){
				var tmpEle = $('.usefulConditions .condition:eq(' + i + ') .conditionInput input');
				tmpEle.val("");
				// console.log($('.usefulConditions .condition:eq('+ i +') .conditionInput input'));
			}
			for (var i = 0;i<otherConditions.length;i++){
				var tmpEle = $('.otherConditions .condition:eq(' + i + ') .conditionInput input');
				tmpEle.val("");
				// console.log($('.otherConditions .condition:eq('+ i +') .conditionInput input'));
			}
		},
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
		    setTimeout(function(){
		    	createDataRangePicker();
		    },100);
		},
		filterTheSearch :function(){
			if($('.searchResultCount span').css('display')=='flex'){
				$('.searchResultCount span').css({'opacity':'0'});
				setTimeout(function(){
					$('.searchResultCount span').css({'display':'none'});
				},500);
				$('.searchResultCount .filterBox').css({'opacity':'1'});
				setTimeout(function(){
					$('.searchResultCount .filterBox').css({'display':'flex'});
				},500);
			}
			else{
				$('.searchResultCount span').css({'opacity':'1'});
				setTimeout(function(){
					$('.searchResultCount span').css({'display':'flex'});
				},500);
				$('.searchResultCount .filterBox').css({'opacity':'0'});
				setTimeout(function(){
					$('.searchResultCount .filterBox').css({'display':'none'});
				},500);
			}
		}
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
})




function createDataRangePicker(){

	$('#reservationtime').daterangepicker({
		timePicker: true,
		timePickerIncrement: 30,
		format: 'MM/DD/YYYY h:mm A'
	},
	function(start, end, label) {
		console.log(start.toISOString(), end.toISOString(), label);
	});
	var cb = function(start, end, label) {
		console.log(start.toISOString(), end.toISOString(), label);
		$('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
		//alert("Callback has fired: [" + start.format('MMMM D, YYYY') + " to " + end.format('MMMM D, YYYY') + ", label = " + label + "]");
	}

	var optionSet1 = {
		startDate: moment().subtract('days', 29),
		endDate: moment(),
		minDate: '01/01/2012',
		maxDate: '12/31/2014',
		dateLimit: {
			days: 60
		},
		showDropdowns: true,
		showWeekNumbers: true,
		timePicker: false,
		timePickerIncrement: 1,
		timePicker12Hour: true,
		ranges: {
			'Today': [moment(), moment()],
			'Yesterday': [moment().subtract('days', 1), moment().subtract('days', 1)],
			'Last 7 Days': [moment().subtract('days', 6), moment()],
			'Last 30 Days': [moment().subtract('days', 29), moment()],
			'This Month': [moment().startOf('month'), moment().endOf('month')],
			'Last Month': [moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month')]
		},
		opens: 'left',
		buttonClasses: ['btn btn-default'],
		applyClass: 'btn-small btn-primary',
		cancelClass: 'btn-small',
		format: 'MM/DD/YYYY',
		separator: ' to ',
		locale: {
			applyLabel: 'Submit',
			cancelLabel: 'Clear',
			fromLabel: 'From',
			toLabel: 'To',
			customRangeLabel: 'Custom',
			daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
			monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
			firstDay: 1
		}
	};

	var optionSet2 = {
		startDate: moment().subtract('days', 7),
		endDate: moment(),
		opens: 'left',
		ranges: {
			'Today': [moment(), moment()],
			'Yesterday': [moment().subtract('days', 1), moment().subtract('days', 1)],
			'Last 7 Days': [moment().subtract('days', 6), moment()],
			'Last 30 Days': [moment().subtract('days', 29), moment()],
			'This Month': [moment().startOf('month'), moment().endOf('month')],
			'Last Month': [moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month')]
		}
	};

	$('#reportrange span').html(moment().subtract('days', 29).format('MMMM D, YYYY') + ' - ' + moment().format('MMMM D, YYYY'));

	$('#reportrange').daterangepicker(optionSet1, cb);

	$('#reportrange').on('show.daterangepicker',
	function() {
		console.log("show event fired");
	});
	$('#reportrange').on('hide.daterangepicker',
	function() {
		console.log("hide event fired");
	});
	$('#reportrange').on('apply.daterangepicker',
	function(ev, picker) {
		console.log("apply event fired, start/end dates are " + picker.startDate.format('MMMM D, YYYY') + " to " + picker.endDate.format('MMMM D, YYYY'));
	});
	$('#reportrange').on('cancel.daterangepicker',
	function(ev, picker) {
		console.log("cancel event fired");
	});

	$('#options1').click(function() {
		$('#reportrange').data('daterangepicker').setOptions(optionSet1, cb);
	});

	$('#options2').click(function() {
		$('#reportrange').data('daterangepicker').setOptions(optionSet2, cb);
	});

	$('#destroy').click(function() {
		$('#reportrange').data('daterangepicker').remove();
	});

};