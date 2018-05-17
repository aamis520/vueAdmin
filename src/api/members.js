import request from '@/utils/request'

let url =  'http://192.168.3.19/fwas.member.admin/member/'
//会员管理列表页
export function getMember(params) {
  return request({
    url: url + 'getMember',
    method: 'get',
    params
  })
}

//会员管理列表页 （显示全部）
export function getMemberNotPage(params) {
  return request({
    url: url + 'getMemberNotPage',
    method: 'get',
    params
  })
}

//添加会员
export function addMember(params) {
  return request({
    url: url + 'addmember',
    method: 'get',
    params
  })
}

//删除用户
export function deleteMember(params) {
  return request({
    url: url + 'deleteMember',
    method: 'get',
    params
  })
}

//封号
export function banMember(params) {
  return request({
    url: url + 'banMember',
    method: 'get',
    params
  })
}

//解封
export function unBanMember(params) {
  return request({
    url: url + 'unBanMember',
    method: 'get',
    params
  })
}

//重置密码
export function resetMemberPassword(params) {
  return request({
    url: url + 'resetMemberPassword',
    method: 'get',
    params
  })
}

//查看用户详细信息
export function getMemberDetailInfo(params) {
  return request({
    url: url + 'getMemberDetailInfo',
    method: 'get',
    params
  })
}

//封禁用户列表
export function banMemberInfoList(params) {
  return request({
    url: url + 'banMemberInfoList',
    method: 'get',
    params
  })
}

//用户登陆日志
export function MemberLoginInfoList(params) {
  return request({
    url: url + 'MemberLoginInfoList',
    method: 'get',
    params
  })
}
