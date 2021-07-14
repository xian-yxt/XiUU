<template>
  <div>
    <el-table
      ref="baseTableRef"
      v-loading="isLoading"
      class="base-table-content"
      :header-cell-style="headerCellStyle"
      :element-loading-text="loadingConfig.loadingText"
      :element-loading-spinner="loadingConfig.loadingSpinner"
      :element-loading-background="loadingConfig.loadingBackground"
      :data="tableData"
      style="width: 100%;"
      :row-class-name="row"
      :border="tableBorder"
      :cell-class-name="cell"
      @select="clickSelect"
      @selection-change="handleSelectionChange"
      @sort-change="sortChange"
      @cell-click="handleCellClick"
      @filter-change="handleFilterChange"
    >
      <!--
        实现表格的折叠，需要用此插槽：slot='expand'，使用方式如下：
        <div slot="expand">
          <el-table-column
            type="expand"
            width="100"
            label="hh"
            align="left"
            :fixed="false"
          >
            <span>展开内容区...</span>
          </el-table-column>
        </div>
      -->
      <slot name="expand" />
      <el-table-column
        v-for="item in zeroTypes"
        :key="item.type"
        :type="item.type"
        :width="item.width"
        :label="item.label"
        :align="item.align"
        :fixed="item.fixed"
        :selectable="selectable"
      />
      <template v-for="item in tableColumns">
        <el-table-column
          v-if="item.filters"
          :key="item.key"
          :prop="item.key"
          :label="item.title"
          :width="item.width"
          :align="item.align"
          :fixed="item.fixed"
          :filters="item.filters?item.filters: []"
          :filter-method="filterTag"
          :column-key="item.columnKey"
          :min-width="item.minWidth"
          :sortable="item.sortable"
          :sort-method="(item.sortable && sortway === 'method') ? sortMethod : null"
          :sort-by="(item.sortable && sortway === 'by') ? sortBy : null"
          :formatter="item.formatter"
          :show-overflow-tooltip="item.tooltip"
        />
        <el-table-column
          v-else
          :key="item.key"
          :prop="item.key"
          :label="item.title"
          :width="item.width"
          :align="item.align"
          :fixed="item.fixed"
          :column-key="item.columnKey"
          :min-width="item.minWidth"
          :sortable="item.sortable"
          :sort-method="(item.sortable && sortway === 'method') ? sortMethod : null"
          :sort-by="(item.sortable && sortway === 'by') ? sortBy : null"
          :formatter="item.formatter"
          :show-overflow-tooltip="item.tooltip"
        >
          <template v-if="item.isscope">
            <slot
              slot-scope="scope"
              :row="scope.row"
              :item="item"
              :index="scope.$index"
              name="isscope"
            />
          </template>
        </el-table-column>
      </template>

      <el-table-column
        v-if="showAction"
        :label="actionQuery.label"
        :width="actionQuery.width"
        :min-width="actionQuery.minWidth"
        :align="actionQuery.align"
        :fixed="actionQuery.fixed"
      >
        <div slot-scope="scope" class="actions-btns-box">
          <template v-for="btn in btns">
            <template v-if="btn.isIcon">
              <el-tooltip
                v-show="btn.code"
                :key="btn.value"
                :effect="tooltipConfig.effect"
                :content="btn.label"
                :placement="tooltipConfig.placement"
              >
                <span class="table-action-icon" :class="[btn.icon]" @click="handleAction(btn, scope.row)" />
              </el-tooltip>
            </template>
            <template v-else>
              <el-button
                :key="btn.value"
                :style="{display: btn.code? 'block' : 'none'}"
                :type="btn.type"
                size="mini"
                :class="btn.type === 'primary' ? 'yxt-base-button-type-lightblue' : btn.type === 'normal' ? 'yxt-base-button-type-normal' : btn.type === 'text' ? '' : 'yxt-base-button-type-primary'"
                :disabled="btn.disabled"
                @click="handleAction(btn, scope.row)"
              >
                {{ btn.label }}
              </el-button>
            </template>
          </template>
          <slot :row="scope.row" :index="scope.$index" />
        </div>
      </el-table-column>
    </el-table>
    <div>
      <slot name="combined" />
    </div>
    <div v-if="showPagination" class="table-pagination-box">
      <div>
        <div v-if="onlyOnePagination" class="pagination-box-totalbox">
          共 {{ paginationConfig.total }} 条记录&nbsp;第{{ paginationConfig.currentPage }}/{{ Math.ceil(paginationConfig.total/paginationConfig.currentSize) }}页
        </div>
        <div v-if="onlyOnePagination1" class="onlyOnePagination">共 {{ paginationConfig.total }} 条</div>
      </div>
      <el-pagination
        background
        :current-page="paginationConfig.currentPage"
        :page-sizes="paginationConfig.pageSizes"
        :page-size="paginationConfig.currentSize"
        :layout="paginationConfig.layout"
        :total="paginationConfig.total"
        @size-change="handleSizeChange"
        @current-change="handlePageChange"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'BaseTable',
  props: {
    tableColumns: {
      type: Array,
      default: () => {
        return [];
      }
    },
    tableData: {
      type: Array,
      default: () => {
        return [];
      }
    },
    headerCellStyle: {
      type: Object,
      default: () => {
        return {
          background: '#fafafa',
          color: '#606266'
        };
      }
    },
    /**
     * table第一列设置
     *
     * index      下标
       selection  选择框
     */
    zeroTypes: {
      type: Array,
      default: () => {
        return [
          /* { label: '多选', type: 'selection', width: '50', align: 'center', fixed: 'left' },
          { label: '序号', type: 'index', width: '50', align: 'center', fixed: 'left' },*/
        ];
      }
    },
    /**
     * 排序方式设置
     * by:      指定数据按照哪个属性进行排序
     * method:  自定义函数排序
     */
    sortway: {
      type: String,
      default: 'by'
    },
    /**
     * table是否显示操作列？？？
     */
    showAction: {
      type: Boolean,
      default: false
    },
    /**
     * table操作列按钮数组
     */
    btns: {
      type: Array,
      default: () => [
        /* { label: '新增', value:'add', type: 'normal' },
          { label: '删除', value:'del', type: 'primary', disabled: false },
          { label: '编辑', value:'edit', isIcon: true, icon: 'el-icon-warning' }*/
      ]
    },
    /**
     * table操作列默认配置，可在外部自定义
     */
    actionQuery: {
      type: Object,
      default: function() {
        return {
          label: '操作',
          width: '300',
          minWidth: '300',
          align: 'left',
          fixed: 'right'
        };
      }
    },
    /**
     * 操作列为icon时，显示tooltip浮动提示
     */
    tooltipConfig: {
      type: Object,
      default: function() {
        return {
          effect: 'dark',
          placement: 'top-start'
        };
      }
    },
    /**
     * 所有@click 事件，通过key区分事件具体类型
     */
    actions: {
      type: Function,
      default: () => ({})
    },
    /**
     * table是否显示边框线？？？
     */
    tableBorder: {
      type: Boolean,
      default: true
    },
    /**
     * 是否显示分页组件？？？
     */
    showPagination: {
      type: Boolean,
      default: true
    },
    /**
     * 分页组件配置内容，可在外部自定义
     */
    paginationConfig: {
      type: Object,
      default: function() {
        return {
          currentPage: 1, // 当前页
          currentSize: 10, // 共多少页
          pageSizes: [10, 20, 30, 40, 50],
          total: 0, // 总条数
          layout: 'total, sizes, prev, pager, next, jumper'
        };
      }
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    loadingConfig: {
      type: Object,
      default: function() {
        return {
          loadingText: '加载中...',
          loadingSpinner: 'el-icon-loading',
          loadingBackground: 'rgba(0, 0, 0, 0.2)'
        };
      }
    },
    /**
     *  特殊样式分页器1处理
     * 【非必传】
     */
    onlyOnePagination: {
      type: Boolean,
      default: true
    },
    /**
     *  特殊样式分页器2处理
     * 【非必传】
     */
    onlyOnePagination1: {
      type: Boolean,
      default: false
    },
    /**
     * 是否需要设置禁选，配合actions使用
     */
    isSelectable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {
    // 处理禁选
    selectable(row) {
      if (this.isSelectable) {
        let query = {
          key: 'selectable',
          obj: { row }
        };
        return this.actions(query);
      } else return true;
    },
    // 表格的筛选条件发生变化的时候会触发该事件
    handleFilterChange(val) {
      let pm = {
        key: Object.keys(val)[0],
        codes: val[Object.keys(val)[0]]
      };
      this.$emit('filter-change', pm);
    },
    filterTag() {
      return true;
    },
    sortChange(column, prop, order) {
      let query = {
        key: 'sortChange',
        obj: { column,
          prop,
          order }
      };
      this.actions(query);
    },
    // 处理某列特殊样式问题
    cell({ row, column }) {
      let property = column.property;
      let query = {
        key: 'cell',
        obj: { row,
          property }
      };
      return this.actions(query);
    },
    row({ row }) {
      let query = {
        key: 'row',
        obj: { row }
      };
      return this.actions(query);
    },
    // 某个单元格被点击
    handleCellClick(row, column) {
      let property = column.property;
      let query = {
        key: 'cellClick',
        obj: { row,
          property }
      };
      return this.actions(query);
    },
    sortMethod(val1, val2) {
      let query = {
        key: 'sortMethod',
        obj: { val1,
          val2 }
      };
      return this.actions(query);
    },
    sortBy() {
      let query = {
        key: 'sortBy',
        obj: {}
      };
      return this.actions(query);
    },
    handleAction(btn, row) {
      let query = {
        key: 'handleAction',
        obj: {
          btn,
          row
        }
      };
      this.actions(query);
    },
    handleSizeChange(size) {
      let query = {
        key: 'handleSizeChange',
        size
      };
      this.actions(query);
    },
    handlePageChange(page) {
      let query = {
        key: 'handlePageChange',
        page
      };
      this.actions(query);
    },
    handleSelectionChange(selectItems) {
      let query = {
        key: 'handleSelectionChange',
        arr: selectItems
      };
      this.actions(query);
    },
    toggleSelection(rows, boolean) {
      this.$nextTick(() => {
        this.$refs.multipleTable.toggleRowSelection(rows, boolean);
      });
    },
    clearSelection() {
      this.$refs.multipleTable.clearSelection();
    },
    clickSelect(selection, row) {
      let query = {
        key: 'clickSelect',
        row,
        selection
      };
      this.actions(query);
    },
    // 取消排序
    toggleSortthiscolumn() {
      this.$refs.multipleTable.clearSort();
    },
    // 清除表头过滤
    toggleclearFilter() {
      this.$refs.multipleTable.clearFilter();
    },
    clearFilterAndSort() {
      this.$refs.multipleTable.clearSort();
      this.$refs.multipleTable.clearFilter();
    }
  }
};
</script>
<style lang="less" scoped>
.actions-btns-box {
  display: flex;
  flex-flow: wrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  .el-button {
    margin: 0 12px 0 0;
  }
}

.table-action-icon {
  cursor: pointer;
  color: #2e78ff;
  font-size: 20px;
  margin-left: 10px;
}

.table-pagination-box {
  display: flex;
  width: 100%;
  text-align: right;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;

  .onlyOnePagination {
    font-size: 14px;
    color: #586073;
  }

  .pagination-box-totalbox {
    font-size: 14px;
    color: #586073;
  }

  .el-pagination {
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
}
</style>
