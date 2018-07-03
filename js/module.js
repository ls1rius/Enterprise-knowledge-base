var mainContain = new Vue({
	el:'#mainContain',
	data:{
		logoPic:'../image/headImage.png',
		usrHeadImage:'../image/user.jpg',
		usrName:'沈继涛',
		pickedBarTop: 2,
		linkUrl:'homePageForDepartAdmin.html',
		linkUrls:[
			'homePageForTopAdmin.html',
			'newDocument.html',
			'myArticle.html',
			'searchPage.html',
			'graph-npm.html',
			'statistics.html'
		],
		items:[
		{
			iconfont:'icon-iconset0119',
			fontColor:'navigatorItemsChooseColor',
			navigatorName:'首页',
		},
		{
			iconfont:'icon-xinjianwendang',
			fontColor:'navigatorItemsUnChooseColor',
			navigatorName:'新建知识',
		},
		{
			iconfont:'icon-zhishikuguanli',
			fontColor:'navigatorItemsUnChooseColor',
			navigatorName:'我的知识',
		},
		{
			iconfont:'icon-sousuo',
			fontColor:'navigatorItemsUnChooseColor',
			navigatorName:'搜索知识',
		},
		{
			iconfont:'icon-sort',
			fontColor:'navigatorItemsUnChooseColor',
			navigatorName:'知识目录',
		}
		,
		{
			iconfont:'icon-tongji',
			fontColor:'navigatorItemsUnChooseColor',
			navigatorName:'知识统计',
		}
		]
	},
	methods:{
		transToPage : function(addr,index){
			// window.open(addr);
			// this.fontColor = 'navigatorItemsChooseColor';
			// console.log(this.items);
			// console.log(addr);

			this.items.forEach(function(item){
				// console.log(item.fontColor);
				item.fontColor = 'navigatorItemsUnChooseColor';
			})
			this.linkUrl = this.linkUrls[index];
			// console.log(index);
			// console.log(this.linkUrls[index]);
			// console.log(index);
			this.items[index].fontColor = 'navigatorItemsChooseColor';
			this.pickedBarTop = index * 120 + 2;
			// console.log(this.pickedBarTop);
		},
		swapIntoUsrInfoPage : function(){
			this.linkUrl = 'usrInfoPage.html';
		},
		backToHomePage : function(){
			this.linkUrl = 'homePageForTopAdmin.html';
			this.pickedBarTop = 0 * 120 + 2;
		}
	}
})



