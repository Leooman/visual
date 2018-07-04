<template>
  	<div class="login_page fillcontain">
  		<div class="layer bg" id="login"></div>
	  	<transition name="form-fade" mode="in-out">
	  		<section class="form_contianer" v-show="showLogin">
		  		<div class="manage_tip">
		  			<p>Vadmin</p>
		  		</div>
		    	<el-form :model="loginForm" :rules="rules" ref="loginForm">
					<el-form-item prop="username">
						<el-input v-model="loginForm.username" placeholder="用户名" @keyup.enter.native="submitForm('loginForm')"></el-input>
					</el-form-item>
					<el-form-item prop="password">
						<el-input type="password" placeholder="密码" v-model="loginForm.password" @keyup.enter.native="submitForm('loginForm')"></el-input>
					</el-form-item>
					<el-form-item>
				    	<el-button type="primary" @click="submitForm('loginForm')" class="submit_btn">登陆</el-button>
				  	</el-form-item>
				</el-form>
	  		</section>
	  	</transition>
  	</div>
</template>

<script>
	import {mapActions, mapState} from 'vuex'
	import 'particles.js'
	import config from '@/controller/login/bubble'
	import {user,login} from '@/controller/api'
	import {setStore} from '@/controller/common'
	export default {
	    data(){
			return {
				loginForm: {
					username: null,
					password: null,
				},
				rules: {
					username: [
			            { required: true, message: '请输入用户名', trigger: 'blur' },
			        ],
					password: [
						{ required: true, message: '请输入密码', trigger: 'blur' }
					],
				},
				showLogin: false,
				userData:{}
			}
		},
		mounted(){
			let _this=this
			this.showLogin = true;
    		particlesJS('login', config)
    		user({
    			id:0
    		}).then(res => {
    			if(res.status === 200){
    				let user=res.data[0]
    				Object.assign(_this.userData,user)
    				_this.loginForm.username=user.user_name
    				_this.loginForm.password=user.password
    			}
    		}).catch(err => {
    			console.log(err)
    		})
		},
		computed: {
			...mapState({
				state : state => state
			}),
		},
		methods: {
			async submitForm(formName) {
				let _this=this
				this.$refs[formName].validate(async (valid) => {
					if (valid) {
						login({
							userName: this.loginForm.username,
							password: this.loginForm.password
						}).then(res => {
							if(res.status !== 404){
								setStore('isLogin',true)
								setStore('userInfo',_this.userData)
    							_this.state.userInfo=Object.assign(_this.userData)
								_this.state.isLogin=true
								_this.$router.push('home')
							}else{
								_this.$message({
			                        type: 'error',
			                        message: res.msg
			                    })
							}
						})
					} else {
						this.$notify.error({
							title: 'ERROR',
							message: '用户名密码不能为空',
							offset: 10,
							timeout: 500,
    						horizontalAlign: 'right',
    						verticalAlign: 'top'
						});
						return false;
					}
				});
			},
		},
		watch: {
			adminInfo: function (newValue){
				if (newValue.id) {
					this.$message({
                        type: 'success',
                        message: '检测到您之前登录过，将自动登录'
                    });
					this.$router.push('manage')
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	@import '../style/mixin';
	.login_page{
		height: 100%;
		overflow: hidden;
		background-image: url("../assets/img/login.jpg");
        background-size: cover;
        .manage_tip{
			position: absolute;
			width: 100%;
			top: -100px;
			left: 0;
			p{
				font-size: 34px;
				color: #fff;
			}
		}
		.form_contianer{
			.wh(320px, 210px);
			.ctp(320px, 210px);
			padding: 25px;
			border-radius: 5px;
			text-align: center;
			background-color: #fff;
			.submit_btn{
				width: 100%;
				font-size: 16px;
			}
		}
		.tip{
			font-size: 12px;
			color: red;
		}
		.form-fade-enter-active, .form-fade-leave-active {
		  	transition: all 1s;
		}
		.form-fade-enter, .form-fade-leave-active {
		  	transform: translate3d(0, -50px, 0);
		  	opacity: 0;
		}
	}
</style>
