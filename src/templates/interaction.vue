<template>
  <div class="interaction">
   
   	
   	<!--<div class="go-back" @click="back()">
   		<img src="../assets/img/My-head_img_fanhui.png"/>
   	</div>-->
    <div class="in-con">
      <h3 class="ranking">已经击败90%小伙伴 </h3>
      <div class="game-box">
      	<a class="game-1" href="javascript:;">
      		<img src="../assets/img/Game_img_Luck-draw.png"/>
      		<p>幸运大转盘</p>
      	</a>
      	<a class="game-2"  href="javascript:;">
      		<img src="../assets/img/Game_img_adventure.png"/>
      		<p>奇幻冒险</p>
      	</a>
      </div>
      <div class="record">
        <div class="record-title">
          <span>我的获奖记录:</span>
          <a href="javascript:;">
          	<img src="../assets/img/Game_icon_See.png"/>
          </a>
        </div>
        <ul>
          <li v-for="list in lists">
          	<span class="record-text">{{list.text}}</span>
          	<span class="record-time">{{list.time}}</span>
          </li>
        </ul>
      </div>
    </div>
    
  </div>
</template>

<script>
  export default {
    name: 'interaction',
    data () {
      return {
        lists: [
          {text: '小幸运! 幸运大抽奖游戏获得10积分!',time:'12：05'},
          {text: '小幸运! 幸运大抽奖游戏获得30积分!',time:'11：05'},
          {text: '小幸运! 幸运大抽奖游戏获得20积分!',time:'10：05'}
        ]
      }
    },
    methods: {
      handleSidebar (name) {
        this.$router.push({path: '/' + name})
      },
      back(){
				let vm = this;
				vm.$router.go(-1)
			}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.interaction{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: url(../assets/img/game-interaction_bg.jpg)no-repeat;
		background-size: 100% 100%;
	}
	.go-back{
		position: fixed;
		top: 10%;
		left: 0.3rem;
		width: 1.4rem;
		height: 0.8rem;
	}
	.go-back img{
		width: 100%;
		height: 100%;
	}



  .in-con {
    padding: 0 0.4rem;
    margin-top: 47%;
  }

  .in-con .ranking {
    width: 60%;
    background: #F5F5E3;
    border-radius: 0.2rem;
    margin: 0 auto;
    height: 0.4rem;
    text-align: center;
    line-height: 0.4rem;
    font-size: 0.28rem;
    color: #2B2626;
  }
	
	.game-box{
		overflow: hidden;
		width: 60%;
		margin:0.9rem auto 0;
	}
	.game-box a.game-1{
		text-align: center;
		float: left;
		color: #3C3939;
		font-weight: 600;
	}
	.game-box a.game-2{
		text-align: center;
		float: right;
		color:  #3C3939;
		font-weight: 600;
	}
	.game-box a img{
		width: 1.52rem;
		height: 1.56rem;
	}
	.game-box a.game-2 img{
		width: 1.78rem;
	}
  .record {
    position: absolute;
    bottom: 53px;
    left: 0;
    width: 100%;
    padding: 0.6rem 0.8rem;
  }

  .record-title {
   padding-bottom:0.24rem;
    color: #3C3939;
    font-size: 0.28rem;
    font-weight: 600;
  }

  .record-title a {
    float: right;
    width: 1rem;
    height: 0.4rem;
  }
	.record-title a img{
		width: 100%;
		height: 100%;
		vertical-align: middle;
	}
  .record li {
  	overflow: hidden;
    line-height: 0.6rem;
    border-top: 2px dashed #D2B0A8;
    font-size: 0.28rem;
    font-weight: 600;
    color: #3C3939;
  }
  .record-text{
  	float: left;
  }
  .record-time{
  	float: right;
  	font-size:0.24rem;
  }
</style>
