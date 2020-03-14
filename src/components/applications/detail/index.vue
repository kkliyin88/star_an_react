<template>
  <div class='wrap' >
	<section class='left'>
		<img :src='pic' />
	</section>
	<section class='right'>
		<p class='title' style="margin-bottom: 20px;margin-top: -20px;font-weight: 600;">Brief Introduction of the Project</p>
		<p v-for="(item,i) in content"  :class="i%2==0?'title':'normalContent'">{{item}}</p>
	</section>
  </div>
</template>
<script>
	import { get } from '@/axios/fetch';
    export default {
      name: 'applications',
      data () {
        return {
			pic:'/static/image/applications/levelOne/',
			content:[],
        }
      },
      mounted(){
		  this.pic += this.$route.query.id+'.png';
		  this.getContent();
      },
      methods:{
		 getContent(){
			 let textPath = '/static/js/applications/levelOne/'+this.$route.query.id+'.json'
			get(textPath).then((res)=>{
				console.log('resddd',res)
			  this.content = res.arr;
			})
		 },
      }
    }
</script>
<style scoped lang='less'>
	@import "./index.less";
</style>
