<template>
  <div class='wrap' >
  
	<section class='pic'>
		<ul >
			<li v-for='(item,i) in picArr' class='pointer' @click='goLevelOne(i)'>
				<router-link :to='item.routerPath'>
				<div class='img-pic' >
					<img :src='item.piclink' />
				</div>
				</router-link>
			</li>
		</ul>
	</section>
  </div>
</template>
<script>
    export default {
      name: 'applications',
      data () {
        return {
			title:'LED Lighting Fixture',
			msg1:'Intelligent lighting control system can optimize energy efficiency and comfort. Whether driving operational cost reduction through energy efficient LED lighting technologies or implementing a smart strategy to achieve advanced LED fixture management capabilities. Our goal is to help our clients save energy, time and money by using the most advanced effective lighting solutions for the specific application',
			picArr:[
				{   
					title_1:'About us ',
					piclink:'/static/image/applications/1.png',
					routerPath:{path:'/applications/levelOne',query:{id:1}},
				},
				{
					piclink:'/static/image/applications/2.png',
					routerPath:{path:'/applications/levelOne',query:{id:2}},
				},
				{
					piclink:'/static/image/applications/3.png',
					routerPath:{path:'/applications/levelOne',query:{id:3}},
				},
				{
					piclink:'/static/image/applications/4.png',
					routerPath:{path:'/applications/levelOne',query:{id:4}},
				},
				{
					piclink:'/static/image/applications/5.png',
					routerPath:{path:'/applications/levelOne',query:{id:5}},
				},
				{
					piclink:'/static/image/applications/6.png',
					routerPath:{path:'/applications/levelOne',query:{id:6}},
				},
			],
			
        }
      },
      mounted(){
      },

      methods:{
		 goLevelOne(){
			 
		 }
      }
    }
</script>
<style scoped lang='less'>
	@import "./index.less";
</style>
