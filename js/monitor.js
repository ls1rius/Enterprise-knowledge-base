var monitorContain = new Vue({
	el:'#monitorContain',
	data:{
		items:[
			{
				isShowSpaceBar:false,
				itemColor:'#f29d93',
				iconfontLogo:'icon-msnui-update',
				importantMessage:'有更新',
				particularMessage:'共100篇新提交的文章',
				linkUrl:'bar-tick-align.html'
			},
			{
				isShowSpaceBar:true,
				itemColor:'#beeab0',
				iconfontLogo:'icon-jianchaxiang',
				importantMessage:'待审阅',
				particularMessage:'共100篇文章待审阅',
				linkUrl:'bar-tick-align.html'
			},
			{
				isShowSpaceBar:true,
				itemColor:'#dad84e',
				iconfontLogo:'icon-ai-article',
				importantMessage:'已有文章',
				particularMessage:'共100篇新提交的文章',
				linkUrl:'bar-tick-align.html'
			},
			{
				isShowSpaceBar:true,
				itemColor:'#6cabdd',
				iconfontLogo:'icon-huishouzhan',
				importantMessage:'回收站',
				particularMessage:'共100篇文章已废弃',
				linkUrl:'bar-tick-align.html'
			}
		],
		sideBarItems:[
			{
				title:'数量跟踪',
				linkUrl:'area-stack.html'
			},
			{
				title:'数量统计',
				linkUrl:'line-stack.html'
			},
			{
				title:'文档比例',
				linkUrl:'pie-doughnut.html'
			}
		]
	}
})
