
var rightIntro = new Vue({
	el:'#rightIntro',
	data:{
		introWords:'2016年是我国“十三五”规划的第一年，中国多领域面临挑战与机遇，我国既面临大有作为的重要战略机遇，也面临诸多矛盾叠加、风险隐患增多的严峻挑战，作为中国经济重中之重的金融领域，更是迎来重大变革的新时代，新常态下的发展'
	}
})

var leftCarousel = new Vue({
	el:'#leftCarousel',
	data:{
		cur: 0,
		carouselData:[
		{
			showPic:'../image/example8.png',
			isActive:'active',
			carouseIntroWords:"虚拟货币市场主体的规范与指引",
			content:'2016年是我国“十三五”规划的第一年，中国多领域面临挑战与机遇，我国既面临大有作为的重要战略机遇，也面临诸多矛盾叠加、风险隐患增多的严峻挑战，作为中国经济重中之重的金融领域，更是迎来重大变革的新时代，新常态下的发展'
		},
		{
			showPic:'../image/example2.jpg',
			isActive:'',
			carouseIntroWords:"中国货币市场基准利率的确立及其动态关系研究",
			content:'Shibor报价银行团现由16家商业银行组成，包括工、农、中、建四家国有商业银行，交行、招商、光大、中信、兴业、浦发6家全国性股份制银行，北京银行、上海银行、南京银行3家城市商业性银行和“德意志上海”、“汇丰上海”、”渣打上海”3家外资银行。此16家报价银行是公开市场一级交易商或外汇市场做市商，在中国货币市场上人民币交易相对活跃、信息披露比较充分的银行。'
		},
		{
			showPic:'../image/example3.png',
			isActive:'',
			carouseIntroWords:"论我国货币市场与资本市场的协调发展",
			content:'改革开放以来，我国经济发展迅速，人们的生活水平得到了明显提高。可是，在经济快速发展的过程中货币市场与资本市场都存在一定的不足，本文作者对我国的货币市场与资本市场进行了详细的分析与总结，并提出了相应的措施，希望能够促进二者的协调发展'
		},
		{
			showPic:'../image/example4.jpg',
			isActive:'',
			carouseIntroWords:"货币市场基准利率的性质及对Shibor的实证研究",
			content:'作为我国金融市场基准利率体系建设和利率市场化改革配套的重要基础设施，上海银行间同业拆放利率（Shibor）已成功运行近7年。本文首先对货币市场基准利率的性质进行了讨论，指出市场代表性和基准性是金融市场基准利率的核心属性。对我国货币市场和Shibor运行以来情况的考察表明，Shibor具备了货币市场基准利率的基本特征。通过等均值、等方差检验、Granger因果分析和EGARCH模型等方法进行的实证分析表明，Shibor具有良好的市场代表性、基准性和稳定性，较好地发挥了货币市场基准利率的作用。今后应以市场机制建设为重点，进一步夯实巩固Shibor货币市场基准利率地位，通过Shibor的健全完善，推动中国金融市场化改革向纵深领域迈进．促进中国金融和经济的长远健康发展。'
		},
		{
			showPic:'../image/example5.png',
			isActive:'',
			carouseIntroWords:"货币政策工具与货币市场基准利率",
			content:'数量型工具与价格型工具都属于货币政策的分类，都属于政府或中央银行为影响经济活动所采取的措施，尤指控制货币供给以及调控利率的各项措施，用以达到特定或维持政策目标———比如，抑制通胀、实现完全就业或经济增长。目前，我国正处于汇率改革的关键时期，利率的走势应该服务于汇率改革，为汇改创造一个平稳的、收益率略低的利率环境，既然利率型工具有如此大的振动幅度和如此长的作用周期，那么对于利率工具的选择就需要慎重'
		}
		]
	},
	created:function(){

	},
	// mounted: function () {
	// 	this.$http.get('http://d-star.xyz:8080/getCarousel').then(res=> {
	//              var that = this;
	//              res.data.forEach(function(item){
	//              	that.carouselData.push({
	//              		'showPic':item.coverUrl,
	//              		'carouseIntroWords':item.title,
	//              		'content':item.content,
	//              		'isActive':''
	//              	});
	//              });
	//             this.carouselData[0].isActive = 'active';
	//             // console.log(this.carouselData.length);
	//             // rightIntro.introWords = this.carouselData[0].content;
	//             $('#rightIntro span').text(this.carouselData[0].content);
	//             // rightIntro.$set(rightIntro.$data,'introWords',this.carouselData[0].content);
	//             // console.log(rightIntro.introWords);
	//             // console.log(this.carouselData);
	//                $('#leftCarousel').carousel({
	// 				    interval: 5000
	// 				})
	// 				$('#leftCarousel').on('slid.bs.carousel', function () {
	// 				    // 执行一些动作...
	// 				    // var carouselData = $(this).data('bs.carousel').$active;
	// 				    // console.log(that.carouselData);
	// 				    // console.log(that.cur);
	// 				    // console.log(that.carouselData);
	// 				    that.cur = (that.cur + 1)%that.carouselData.length;
	//             		$('#rightIntro span').text(that.carouselData[that.cur].content)
	// 				    // rightIntro.introWords = that.carouselData[that.cur].content;
	// 				    // console.log(rightIntro.introWords);
	// 				    // console.log(rightIntro.introWords);
	//             		// Vue.set(rightIntro.$data,'introWords',that.carouselData[that.cur].content);
	// 				    // console.log(rightIntro.introWords);
	// 				    // rightIntro.$data.introWords = that.carouselData[that.cur].content;
	// 				})
	//             // get body data
	//             // this.someData = response.body;
	//         }, function(res){
	//             console.log("数据获取错误");
	//     });
	// }

})
$(function(){
	console.log(leftCarousel.carouselData);
	$('#rightIntro span').text(leftCarousel.carouselData[0].content);
	$('#leftCarousel').carousel({
	    interval: 5000
	});
	$('#leftCarousel').on('slid.bs.carousel', function () {
	    // console.log(this.carouselData);
	    // console.log(leftCarousel.cur);
	    leftCarousel.cur = (leftCarousel.cur + 1)%leftCarousel.carouselData.length;
		$('#rightIntro span').text(leftCarousel.carouselData[leftCarousel.cur].content);
	})
})
function fmtDate(obj){
    var date =  new Date(obj);
    var y = 1900+date.getYear();
    var m = "0"+(date.getMonth()+1);
    var d = "0"+date.getDate();
    return y+"/"+m.substring(m.length-2,m.length)+"/"+d.substring(d.length-2,d.length);
}
var centerContain = new Vue({
	el:'#centerContain',
	data:{
		buzzwords:[],
		recommendData:[
		{
			recommendImage:'../image/example1.jpg',
			recommendTitle:'虚拟货币市场主体的规范与指引',
			recommendInfoAuthor:'canjuly',
			recommendInfoTime:'2018/03/03',
			recommendStatistcsCount:'775'
		},
		{
			recommendImage:'../image/example6.jpg',
			recommendTitle:'中国货币市场基准利率的确立及其动态关系研究',
			recommendInfoAuthor:'中本聪',
			recommendInfoTime:'2018/03/05',
			recommendStatistcsCount:'3453'
		}
		]
	},
	created:function(){
		this.$http.get('http://d-star.xyz:8080/getPopularTags').then(res=> {
	             var that = this;
	             res.data.forEach(function(item){
	             	that.buzzwords.push({
	             		'buzzword':item.name
	             	});
	             });
	            // get body data
	            // this.someData = response.body;
	        }, function(res){
	            console.log("数据获取错误");
	        });
		// this.$http.get('http://d-star.xyz:8080/getRcmdArticle').then(res=> {
	 //             var that = this;
	 //             res.data.forEach(function(item){
	 //             	that.recommendData.push({
	 //             		'recommendImage':item.coverUrl,
	 //             		'recommendTitle':item.title,
	 //             		'recommendInfoAuthor':item.owner.name,
	 //             		'recommendInfoTime':fmtDate(item.date),
	 //             		'recommendStatistcsCount':item.hitCnt
	 //             	});
	 //             });
	 //             // that[0].recommendImage = '../image/example5.jpg';
	 //             // that[1].recommendImage = '../image/example6.jpg';
	 //            // get body data
	 //            // this.someData = response.body;
	 //        }, function(res){
	 //            console.log("数据获取错误");
	 //        });
	}
})

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
		]
	},
	created:function(){
		this.$http.get('http://d-star.xyz:8080/getNotifications').then(res=> {
	             var that = this;
	             res.data.forEach(function(item){
	             	that.messageData.push({
	             		'messageContain':item.text,
	             		'messageTime':item.date
	             	});
	             });
	            // get body data
	            // this.someData = response.body;
	        }, function(res){
	            console.log("数据获取错误");
	        });
	}
})
