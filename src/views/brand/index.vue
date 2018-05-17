<template>
  <div class="content">
    <div class="tip m20">
      <p class="tipTitle">
        操作提示
      </p>
      <ul class="tipList">
        <li>商品品牌建立后可与商品分类进行绑定，新增一个品牌则需要重新与商品分类建立所属关系。</li>
        <li>品牌绑定商品分类后，商家发布商品时，可根据发布的商品所在分类找到对应的所属品牌并选择</li>
        <li>被推荐品牌，将在前台品牌推荐模块出显示</li>
      </ul>
    </div>
    <div class="search m20">
      <el-row>
        <el-col :span="12">
          <el-form inline="true">
            <el-form-item>
              <el-input placeholder="请输入品牌名称">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-select  placeholder="请选择审核状态">
                  <el-option
                      v-for="item in approvalStatus"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                  </el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-select  placeholder="请选择是否推荐">
                  <el-option
                      v-for="item in recommends"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                  </el-option>
              </el-select>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="12" class="textr">
          <el-button>搜索</el-button>
          <el-button type="info" @click="addDlsg = true">添加</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="list m20">
      <el-table border :data="data" style="width: 100%;">
        <el-table-column type="index" width="50" label="排序"></el-table-column>
        <el-table-column label="品牌名称" prop="id"></el-table-column>
        <el-table-column label="英文名"></el-table-column>
        <el-table-column label="品牌LOGO"></el-table-column>
        <el-table-column label="品牌推荐"></el-table-column>
        <el-table-column label="审核状态"></el-table-column>
        <el-table-column label="操作管理" width="320">
          <template slot-scope="scope">
            <el-button size="small" @click="addDlsg = true">编辑</el-button>
            <el-button size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="m20 textc">
        <el-pagination :current-page="pageNum" :page-sizes="[5, 10, 15, 20]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="100">
        </el-pagination>
      </div>
    </div>
    <!-- 添加  属性 dlsg -->
    <el-dialog :visible.sync="addDlsg" title="新增商品品牌" width="60%">
      <div>
        <div class="addTab">
          <el-form label-width="170px" class="m20">
            <el-form-item prop="" label="品牌名称">
              <el-input placeholder=""></el-input>
            </el-form-item>
            <el-form-item prop="" label="英文名称：">
              <el-input placeholder=""></el-input>
            </el-form-item>
            <el-form-item prop="" label="品牌图片：">
              <el-switch
                v-model="switchF"
                active-color="#13ce66"
                inactive-color="#ff4949"
                active-text="是"
                inactive-text="否">
              </el-switch>
            </el-form-item>
            <el-form-item prop="" label="品牌推荐：">
              <el-radio-group v-model="radio2">
                <el-radio :label="1">是</el-radio>
                <el-radio :label="2">否</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item prop="" label="品牌排序">
              <el-input placeholder="0"></el-input>
            </el-form-item>
            <div class="textr">
              <el-button type="primary">确认提交</el-button>
            </div>
          </el-form>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        switchF:true,
        pageNum: 4,
        addDlsg: false,
        pageNumber: 4,
        data: [{
          id: 1
        }],
        approvalStatus:[
          {
            label:"审核通过",
            value:"1"
          },
          {
            label:"审核未通过",
            value:"2"
          },
          {
            label:"待审核",
            value:"3"
          }
        ],
        recommends:[
          {
            label:"是",
            value:"1"
          },
          {
            label:"否",
            value:"2"
          }
        ]
      }
    }
  }
</script>
<style scoped lang="scss">
  .textr {
    text-align: right;
  }
  
  .textl {
    text-align: left;
  }
  
  .textc {
    text-align: center;
  }
  
  .m20 {
    margin: 20px;
  }
  
  .tip {
    border: 1px solid #ccc;
    background: #f4f4f4;
    border-radius: 8px;
    .tipTitle {
      font-size: 24px;
      font-weight: bold;
      text-indent: 2em;
    }
    .tipSubTitle {
      font-size: 16px;
      text-indent: 2em;
    }
    .tipList {
      font-size: 16px;
      color: #333;
      line-height: 24px;
      padding-right: 30px;
      li.warning {
        color: red;
      }
    }
    .tipSubList {
      font-size: 14px;
      line-height: 18px;
      color: #666;
      padding-right: 10px;
    }
  }
  
  .addTabs {
    margin-top: 20px;
    .addTabLabel .stepNum {
      display: inline-block;
      width: 20px;
      height: 20px;
      text-align: center;
      line-height: 20px;
      margin-right: 10px;
      color: #333;
      border-radius: 50%;
      font-style: normal;
      background: #999;
    }
    .el-tabs__item.is-active .addTabLabel .stepNum {
      color: #fff;
      background: #409EFF;
    }
    .tabContent {
      margin: 20px 10px;
      padding: 15px;
      border: 1px solid #ccc;
      border-radius: 10px;
      .tabContentTitle {
        font-size: 16px;
        color: #333;
      }
      .tabContentDesc {
        font-size: 14px;
        color: #999;
      }
      hr {
        height: 2px;
        border: none;
        border-bottom: 1px solid #ccc;
        margin-bottom: 20px;
      }
      .search {
        .searchArea {
          padding: 20px 0;
          span {
            margin-right: 15px;
            font-size: 14px;
          }
          button {
            margin-left: 15px;
          }
        }
      }
    }
  }
</style>