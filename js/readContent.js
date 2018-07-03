var insideContain = new Vue({
	el:'#insideContain',
	data:{
		messageData:[
		{
			messageContain:'<i>故故故故yu：</i> 非常有用，谢谢作者',
			messageTime:'07:23:23'
		},
		{
			messageContain:'<i>一颗柠檬红：</i> 我觉得第二点还是分析的不够透彻，有论点没有论据，东说一点西说一点，完全没有get到重点。这样的文章收藏这么多只能说明我们眼界还是太窄了，看得太少',
			messageTime:'07:40:08'
		},
		{
			messageContain:'<i>奶茶烧仙草：</i> 其实没必要这么较真，都差不多的，网上说的都是大同小异，能总结成这样也不错了',
			messageTime:'07:56:09'
		},
		{
			messageContain:'<i>jgnb：</i> 收藏了',
			messageTime:'08:26:23'
		},
		{
			messageContain:'<i>新石器：</i> 马克一下，晚上继续看',
			messageTime:'10:46:37'
		},
		{
			messageContain:'<i>毛不易：</i> 同事推荐的，我觉得也不错，看看还是对自己的知识水平有提高',
			messageTime:'11:03:21'
		},
		{
			messageContain:'<i>white版：</i> 标题党，都是老生常谈了',
			messageTime:'13:44:47'
		},
		{
			messageContain:'<i>Pokemon：</i> 要是真的像作者说的那样就好了，完全是纸上谈兵',
			messageTime:'15:55:32'
		},
		{
			messageContain:'<i>正电拍拍：</i> 作者见解还是蛮不错的，值得一看',
			messageTime:'15:56:47'
		},
		{
			messageContain:'<i>canjuly：</i> 老旧的看法，换了个壳而已，还行吧，我第一遍是一口气看完，很过瘾，但还是想慢慢看所以下载了，自已看了一下又觉得一般般，没他们说的那么好，其实前面说的确实不错，后面就偷懒了，条例不够清晰，还是不错的，鼓励一下吧',
			messageTime:'17:16:23'
		}
		],
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
		],
		isComment:false,
		versionData:[
		{
			time:'2018/03/09 12:00:09',
			author:'沈继涛',
			isCur:true
		},
		{
			time:'2018/03/08 08:10:45',
			author:'张鹏（修改了语法错误）',
			isCur:false
		},
		{
			time:'2018/03/05 15:55:20',
			author:'李雷（上传了新图片）',
			isCur:false
		},
		{
			time:'2018/03/05 12:10:56',
			author:'沈继涛',
			isCur:false
		},
		{
			time:'2018/03/04 22:19:44',
			author:'韩梅梅',
			isCur:false
		},
		{
			time:'2018/03/01 07:05:19',
			author:'沈继涛',
			isCur:false
		},
		{
			time:'2018/02/28 15:22:13',
			author:'韩梅梅（添加了新内容）',
			isCur:false
		},
		{
			time:'2018/02/26 10:56:49',
			author:'吴亦凡',
			isCur:false
		},
		{
			time:'2018/02/23 12:22:09',
			author:'沈继涛',
			isCur:false
		}
		],
		isPickingVersion:false,
		curVersion:0,
		isShowDropDown:false,
		isCollect:false
	},
	methods:{
		switchToComment :function(){
			this.isComment = true;
		},
		cancelComment :function(){
			this.isComment = false;
		},
		addZero : function(t){
			if(t<10){
				return '0'+t;
			}
			else{
				return t;
			}
		},
		getCurTime:function(){
			var now = new Date();
			return this.addZero(now.getHours())+":"+this.addZero(now.getMinutes())+":"+this.addZero(now.getSeconds());
		},
		handleUsrName: function(name){
			return '<i>'+name+'：</i>'; 
		},
		submitComment :function(){
			var commentText = $('.commentBox textarea').val();
			this.isComment = false;
			this.messageData.push({
				messageContain:this.handleUsrName('沈继涛2号') + commentText,
				messageTime:this.getCurTime()
			})
		},
		showDropDown:function(){
			this.isShowDropDown = !this.isShowDropDown;
		},
		startVersionPick:function(){
			this.isPickingVersion = true;
			this.isShowDropDown = false;
		},
		cancelVersionPick :function(){
			this.isPickingVersion = false;
		},
		pickVersion:function(index){
			var tot = this.versionData.length;
			for(var i = 0;i<tot ;i++){
				this.versionData[i].isCur = false;
			}
			this.curVersion = index;
			this.versionData[this.curVersion].isCur = true;
			console.log(this.curVersion);
		},
		collectTheArticle:function(){
			if(this.isCollect == false){
				this.isCollect = true;
				alert('收藏成功');
			}
			else{
				this.isCollect = false;
				alert('取消收藏');
			}
		}
	}
})