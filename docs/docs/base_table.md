# Table 表格
----

<script>
export default{
  data() {
    return {
      tableData: [
        { id: '001', name: '李斯1', age: 18, gender: 'male' },
        { id: '002', name: '李斯2', age: 18, gender: 'male' },
        { id: '003', name: '李斯3', age: 18, gender: 'femal' },
        { id: '004', name: '李斯4', age: 18, gender: 'male' },
      ],
      tableColumns: [
        { title: '用户姓名', key: 'name', width: 120 },
        { key: 'age', title: '年龄', width: 120 },
        { key: 'gender', title: '性别', width: 120 }
      ],
      zeroTypes: [
        { label: '多选', type: 'selection', width: '50', align: 'center', fixed: 'left' }
      ],
      tableBtns: [
        { label: '删除', value:'del', type: 'text', code:'front_task_manage:delete' },
        { label: '编辑', value:'edit', type: 'text', code:'front_task_manage:edit' },
        { label: '详情', value:'det', type: 'text', code:'front_task_manage:detail' }
      ],
      paginationConfig: {
        currentPage: 1,
        currentSize: 10,
        pageSizes: [ 10, 20, 30, 40, 50 ],
        total: 0,
        layout: 'total, sizes, prev, pager, next, jumper',
      },
      isLoading: true
    }
  },
  mounted() {
    this.isLoading = false
  },
  methods: {
    handleTableActions(query) {
      if(query.key === 'handlePageChange'){
        // this.paginationConfig.currentPage = query.page
        // this.getList();
      } else if(query.key === 'handleSizeChange'){
        // this.paginationConfig.currentSize = query.size
        // this.getList();
      }
    },
  }
}
</script>
<div class="demo-block">
  <BaseTable
    :table-data="tableData"
    :table-columns="tableColumns"
    :btns="tableBtns"
    :show-action="true"
    :actions="handleTableActions"
    :zero-types="zeroTypes"
    :pagination-config="paginationConfig"
    :is-loading="isLoading"
  ></BaseTable>
</div>

### 参数说明

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| speed | 加载速度 | Number | 0-100 | 5 |
| easing | spinner加载动画 | String | linear, ease, cubic-bezier... | 贝萨尔曲线值|
| percentNum | 每次前进的百分比 | Float | 0-1 | Math.random() |
| showSpinner | 是否显示spinner | Boolean | true, false | 是否显示spinner |