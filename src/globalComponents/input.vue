<style scoped lang='scss'>
.input-father{
	display: flex;
	justify-content: center;
	align-items: center;
	.checked-box {
	    font-size: 18px;
	    color: #27b7c2;
	}
}
</style>
<template>
	<div>
		<div class="input-father" v-if="type=='radio'">
			<slot name='qm'></slot>
			<input :type="type" :name='name'  :checked="checked" :value="value" @click="inputClick">
			<span class="checked-box iconfont" :class="inputChecked"></span>
			<slot name='hm'></slot>
		</div>
		<div class="input-father" v-if="type=='text'">
			<slot name='qm'></slot>
			<input :type="type" :name='name'  :value="value" @input="change">
			<span class="checked-box iconfont" :class="inputChecked"></span>
			<slot name='hm'></slot>
		</div>
		<div class="input-father" v-if="type=='checkbox'">
			<slot name='qm'></slot>
			<input :type="type" :name='name' :checked="checked" :value="value" @click="inputClick">
			<span class="checked-box iconfont" :class="inputChecked"></span>
			<slot name='hm'></slot>
		</div>
	</div>
</template>
<script>
	export default{
		name: "e_input",
		data(){
			return {

			}
		},
		computed:{
			inputChecked() {
				return this.checked ? 'icon-yduidanxuankuangxuanzhong':'icon-yduidanxuankuang'
			}
		},
		props:{
			type:{
				default:'text',
				type:String
			},
			value:{
				default:'',
				type:String
			},
			checked:{
				default:false,
				type:Boolean
			},
			name:{
				default:'',
				type:String
			}
		},
		methods:{
			change(e){
				let cur=e.currentTarget
				let val=cur.value
				this.$emit('change',val)
			},
			inputClick(e){
				let cur=e.currentTarget
				let val=cur.value
				this.$emit('inputClick',val)
			}
		}
	}
</script>