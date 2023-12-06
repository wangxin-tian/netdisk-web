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
				font-weight: bold;
			}

			.footer-title {
				font-size: 25px;
				font-weight: bold;
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
				height: 3px;
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
							<div>熟悉：JavaScript Vue3 React Nestjs；（实习时一直维护基于react的oa项目比较熟悉）</div>
							<div>
								了解：Uniapp Node TypeScript；（了解常规配置和用法，node中主要使用过文件和加密安全）
							</div>
							<div>
								了解：Webpack Git HTTP Sass；（熟悉git flow，以及能够脱离脚手架使用webpack搭建demo）
							</div>
							<div>other：Java Python SQL MongoDB；（能根据需要配置项目，但不没有用过多线程和复杂的sql）</div>
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
									主要技术：SpringBoot JWT MySQL Vue3 Vite Axios Vuex vue-router Element-plus pdfjs markedjs
								</div>
								<div>
									项目描述：使用vue3重构自己的个人网盘，实现了文件的管理、阅读、编辑和分享。
								</div>
								<div>
									主要内容：1. 使用jsonwebtoken做了鉴权管理，文件加密存储，同时文件采用字节流的形式传递；
								</div>
								<div>
									<span class="hide">主要内容：</span
									><span
										>2.
										封装了图片、视频和音频的组件和模块；</span
									>
								</div>
								<div>
									<span class="hide">主要内容：</span
									><span
										>3.
										支持编辑和预览markdown和txt以及html文件；</span
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
							>哑铃、blender、王者、啃书、树莓派<span></span>
						</div>
						<div style="display: flex; align-items: center">
							<span class="footer-title">自我评价:</span>
							<span style="flex: 0.9">乐于分享|互相信任|团队合作</span>
							<span class="footer-title">其他:</span>
							<span>做过门卫、志愿者</span>
						</div>
						<div class="line"></div>
					</td>
				</tr>
			</tbody>
		</table>
	</body>
</html>

`;