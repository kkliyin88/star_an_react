<template>
  <div class='wrap'>
	  <ul>
		  <li class='left'>
			  <p class='' v-for='item in address'>
			  	   {{item}}
			  </p>
			  <br />
			  <p v-for='item in email'>
			  	   {{item}}
			  </p>
		  </li>
		   <li class='right'>
			   <img src='static/image/contact/1.png' />
		   </li>
	  </ul>
  </div>
</template>
<script>

    export default {
      name: 'about',
      components:{

      },
      data () {
        return {
			address:[
				'Registered Office Add.:' ,
				'B906, Nanfang Building, Luofang Rd.', 
				'Luohu Dist., Shenzhen, China',
				'Zip Code: 518000',
				'Company Tel.: +86 755 826837760',
			],
			email:[
				'E-mail:',
				'info@star-an.com',
				'ying@star-an.com',
				'vp@star-an.com',
			],
			
        }
      },
      mounted(){

      },

      methods:{
      }
    }
</script>
<style scoped lang='less'>
	ul {
		display: flex;
	    flex-direction: row;
		
		li{
			img{
				height: 330px;
				width:525px;
			}
		}
		li.left{
			p{
				height:30px ;
				line-height: 30px;
				font-size: 16px;
			}
		}
		li.right{
			margin-left: 70px;
		}
	}
</style>
