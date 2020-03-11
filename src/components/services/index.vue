<template>
  <div class='wrap' >
	 <section class='content'>
		 <p class='title'>{{title}}</p>
		 <p>{{content}}</p>
	 </section>
	<section class='pic'>
		<ul >
			<li v-for='(item,i) in picArr' class='pointer' >
				<div class='img-pic' >
					<img :src='item.piclink' />
				</div>
			</li>
		</ul>
	</section>
  </div>
</template>
<script>
	import { get } from '@/axios/fetch';
    export default {
      name: 'applications',
      data () {
        return {
			picArr:[
				{   
					piclink:'/static/image/services/1.png',
				},
				{
					piclink:'/static/image/services/2.png',
				},
				{
					piclink:'/static/image/services/3.png',
				},
				{
					piclink:'/static/image/services/4.png',
				},
				{
					piclink:'/static/image/services/5.png',
				},
				{
					piclink:'/static/image/services/6.png',
				},
			],
			title:' Smart Lighting Service Delivered',
			content:'Star-An is a company focused on providing commercial and industrial clients with comprehensive, value-added smart lighting solutions. As a vertically-integrated manufacturer, our clientele save more money and enjoy the benefits of a streamlined process when implementing energy-efficient projects.'
        }
      },
      mounted(){
      },

      methods:{
		getImageMsg(){
		  let path = this.basePath + this.$route.query.name + '/' + this.$route.query.id +'/' +'imageMsg.json' 
		  get(path).then((res)=>{
			  this.smallPicArrNum = res.picNum;
			  this.smallPicArr = [];
			 for(let i=0;i<res.picNum;i++){
				 this.smallPicArr.push({pic:''})
			 };
			 this.smallPicArr.map((item,index)=>{
				 item.pic = this.basePath + this.$route.query.name + '/' + this.$route.query.id + '/' + (index+1) + '.png'
			 })
		  })
		},
      }
    }
</script>
<style scoped lang='less'>
	@import "./index.less";
</style>
