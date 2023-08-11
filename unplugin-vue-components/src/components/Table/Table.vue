<template>
	<div class="sw-table-container">
		<el-table
			:id="onlyId"
			ref="ElTable"
			v-bind="_tableBind">
			<slot></slot>
			<template #append>
				<slot name="append"></slot>
			</template>
		</el-table>
		<el-pagination
			v-if="$props.pager"
			v-bind="_paginationBind">
			<slot name="layout"></slot>
		</el-pagination>
	</div>
</template>
<script lang="ts" setup name="SwTable">
import type { Table } from 'element-ui'
import { Loading } from 'element-ui'
const $scopedSlots = useSlots()
const $props = defineProps({
	data: Array,
	pager: {
		type: Boolean,
		default: true,
	},
})
const onlyId = ref(`el-table-${Math.round(Math.random() * 99999999)}`)
const pagerSize = ref(10)
const pagerPage = ref(1)
const _tableBind = computed(() => {
	return {
		...$props,
	}
})
const _paginationBind = computed(() => {
	return {
		...$props,
		total: $props.data.length,
		pageSize: pagerSize.value,
		currentPage: pagerPage.value,
		disabled: $props.disabled,
	}
})
</script>

<style lang="scss" scoped>
.sw-table-container {
	position: relative;
	.el-table {
		margin-bottom: 0.5em;
	}
	.el-pagination {
		text-align: right;
		z-index: 1;
		.el-pagination__jump {
			margin-left: 0.5em;
		}
	}
	.slot-pager {
		font-size: 13px;
		min-height: 32px;
		padding: 2px 5px;
		width: 50%;
		margin-top: -26px;
		z-index: 2;
	}
}
</style>
