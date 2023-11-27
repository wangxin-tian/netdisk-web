import imageAvator from '@/assets/avator-s.jpg'

export default `
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta
			name="viewport"
			content="width=device-width, initial-scale=1.0"
		/>
		<title>resume</title>
		<style>
			#jianli span, #jianli div {
				font-family: "SimSun";
				line-height: 150%;
        font-size: 15px;
			}

			.dengxian {
				font-family: "Dengxian";
			}

			.line {
				border: solid 1.5px black;
			}

			.title {
				font-size: 25px;
				font-weight: 400;
				line-height: 40px;
			}

			.footer-title {
				font-size: 25px;
				font-weight: 400;
				line-height: 30px;
			}

			.yixiang {
				display: flex;
				flex-direction: row;
			}

			.yixiang div {
				margin-right: 20px;
			}

			.content .subtitle {
				font-style: italic;
				font-size: 16px;
				font-weight: bold;
				line-height: 20px;
			}

			.content .blank {
				height: 10px;
			}

			.hide {
				opacity: 0;
			}
		</style>
	</head>
	<body>
		<table id="jianli" style="width: 699px;">
			<thead>
				<tr height="160">
					<td width="149">
						<img src="${imageAvator}" width="140" alt="" />
					</td>
					<td width="275">
						<div
							style="
								font-size: 30px;
								font-weight: 600;
								line-height: 40px;
							"
						>
							王鑫
						</div>
						<div><span>电话：</span><span>13651592467</span></div>
						<div>
							<span>邮箱：</span><span>dihuangxia6@gmail.com</span>
						</div>
						<div>
							<span style="opacity: 0">邮箱：</span
							><span>3106532244@qq.com</span>
						</div>
						<div>
							<span>爱动漫、爱生活、爱睡觉</span>
						</div>
					</td>
					<td width="275">
						<div
							class="dengxian"
							style="
								font-size: 30px;
								font-weight: 600;
								line-height: 40px;
							"
						>
							U•ェ•*U
						</div>
						<div>
							<span>23岁</span>
						</div>
						<div>
							<span>北京交通大学海滨学院</span>
						</div>
						<div>
							<span>学历：本科</span>
						</div>
						<div>
							<span>专业：计算机科学与技术</span>
						</div>
					</td>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td colspan="3">
						<div class="title">求职意向</div>
						<div class="line"></div>
						<div class="content yixiang">
							<div>前端开发</div>
							<div>苏杭</div>
							<div>随时到岗</div>
						</div>
					</td>
				</tr>
				<tr>
					<td colspan="3">
						<div class="title">专业资料</div>
						<div class="line"></div>
						<div class="content">
							<div>擅长：JavaScript Vue；</div>
							<div>
								了解：React Uniapp MongoDB Node；（了解常规用法）
							</div>
							<div>
								了解：Webpack TypeScript Git HTTP Sass；（了解基本用法）
							</div>
							<div>other：Java Python SQL；（知道基本语法）</div>
						</div>
					</td>
				</tr>
				<tr>
					<td colspan="3">
						<span class="title">项目实践</span>
						<span
							><a href="https://github.com/wangxin-tian"
								>https://github.com/wangxin-tian</a
							>（项目已上传）</span
						>
						<div class="line"></div>
						<div class="content">
							<div class="item">
								<div class="subtitle">基于SSM + Vue的个人网盘系统</div>
								<div class="blank"></div>
								<div>
									主要技术：Vue2 Axios Vuex Router Element-ui Java SSM
									MySQL
								</div>
								<div>
									项目描述：使用vue开发的个人网盘页面，可以上传、存储、下载和在线预览。
								</div>
								<div>
									主要内容：1. 使用Java的SSM框架简单的写了页面的crud；
								</div>
								<div>
									<span class="hide">主要内容：</span
									><span
										>2.
										Echart做文件占比的可视化处理，使用vuex传递管理音频数据状态；</span
									>
								</div>
								<div>
									<span class="hide">主要内容：</span
									><span
										>3.
										使用Blob处理http响应的字节数组，限制了静态资源的访问；</span
									>
								</div>
							</div>
							<div class="item">
								<div class="blank"></div>
								<div class="subtitle">基于React的个人博客</div>
								<div class="blank"></div>
								<div>
									个人博客：<span
										><a href="http://118.195.140.233:3000/"
											>http://118.195.140.233:3000/</a
										></span
									>
								</div>
								<div>
									主要技术：React Ant-Design TypeScript Mobx Sass
									markedjs Nestjs MySQL
								</div>
								<div>
									项目描述：用React写的一款个人博客系统，可以管理文章、标签、相册、文章编辑等。
								</div>
								<div>
									<span>主要内容：</span
									><span
										>1.
										后台使用nestjs快速开发控制器、提供者和模块；</span
									>
								</div>
								<div>
									<span class="hide">主要内容：</span
									><span
										>2.
										使用hooks优化组件，封装了请求模块，并对http做了拦截处理；</span
									>
								</div>
								<div>
									<span class="hide">主要内容：</span
									><span>3. 使用Mobx对用户和关键词做了状态管理；</span>
								</div>
							</div>
							<div class="item">
								<div class="blank"></div>
								<div class="subtitle">
									基于uniapp的图书订阅微信小程序
								</div>
								<div class="blank"></div>
								<div>
									主要技术：uniapp Node Express Sass MongoDB uni-ui
								</div>
								<div>
									项目描述：用uniapp写了一个图书订阅的展示页面，且用node搭建的后台，可订阅阅读和上传书籍。
								</div>
								<div>
									主要内容：1.
									对网络请求和路由地址做了模块化封装，以及单个图书组件的封装；
								</div>
								<div>
									<span class="hide">主要内容：</span
									><span
										>2.
										node后端调用子线程执行python文件对传递的pdf做数据分析；</span
									>
								</div>
								<div>
									<span class="hide">主要内容：</span
									><span
										>3.
										使用MongoDB做数据库，封装了collections的model；</span
									>
								</div>
							</div>
						</div>
					</td>
				</tr>
				<tr>
					<td colspan="3">
						<div class="line"></div>
						<div style="display: flex; align-items: center">
							<span class="footer-title">个人技能:</span
							><span>英语四级、驾照</span>
						</div>
						<div style="display: flex; align-items: center">
							<span class="footer-title">个人兴趣:</span
							>哑铃、blender、王者、啃书、嵌入式<span></span>
						</div>
						<div style="display: flex; align-items: center">
							<span class="footer-title">自我评价:</span>
							<span style="flex: 0.9">乐于分享|互相信任|团队合作</span>
							<span class="footer-title">其他:</span>
							<span>做过门卫、兼职</span>
						</div>
						<div class="line"></div>
					</td>
				</tr>
			</tbody>
		</table>
	</body>
</html>

`;