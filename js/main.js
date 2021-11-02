﻿$(function () {


    // 适配
    // iframe
    $(".AccountManagement_c_iframe").css("height", $(document).height());
    // 导航高度
    $(".nav_side").css("height", $(document).height() - 100);

    // iframe  链接
    $(".UserManagement").click(function () {
        $(".AccountManagement_c_iframe iframe").attr("src", "userlist.html")
    })
    $(".categoryManagement").click(function () {
        $(".AccountManagement_c_iframe iframe").attr("src", "categorylist.html")
    })
    $(".goodsManagement").click(function () {
        $(".AccountManagement_c_iframe iframe").attr("src","goodslist.html")
    })
    //===============================手风琴菜单//===============================手风琴菜单
    $(".goodsManagementClass1").click(function () {
        $(".AccountManagement_c_iframe iframe").attr("src","goodslist1.html?cid=1")
    })
    $(".goodsManagementClass2").click(function () {
        $(".AccountManagement_c_iframe iframe").attr("src","goodslist1.html?cid=2")
    })
    $(".goodsManagementClass3").click(function () {
        $(".AccountManagement_c_iframe iframe").attr("src","goodslist1.html?cid=3")
    })
    $(".goodsManagementClass4").click(function () {
        $(".AccountManagement_c_iframe iframe").attr("src","goodslist1.html?cid=4")
    })
    $(".goodsManagementClass5").click(function () {
        $(".AccountManagement_c_iframe iframe").attr("src","goodslist1.html?cid=5")
    })
    $(".goodsManagementClass6").click(function () {
        $(".AccountManagement_c_iframe iframe").attr("src","goodslist1.html?cid=6")
    })
    ///=====================二级手风琴
    $(".goodsManagementClass11").click(function () {
        $(".AccountManagement_c_iframe iframe").attr("src","goodslistPassed.html?cid=1")
    })
    $(".goodsManagementClass22").click(function () {
        $(".AccountManagement_c_iframe iframe").attr("src","goodslistPassed.html?cid=2")
    })
    $(".goodsManagementClass33").click(function () {
        $(".AccountManagement_c_iframe iframe").attr("src","goodslistPassed.html?cid=3")
    })
    $(".goodsManagementClass44").click(function () {
        $(".AccountManagement_c_iframe iframe").attr("src","goodslistPassed.html?cid=4")
    })
    $(".goodsManagementClass55").click(function () {
        $(".AccountManagement_c_iframe iframe").attr("src","goodslistPassed.html?cid=5")
    })
    $(".goodsManagementClass66").click(function () {
        $(".AccountManagement_c_iframe iframe").attr("src","goodslistPassed.html?cid=6")
    })
    //===============================手风琴菜单//===============================手风琴菜单

    $(".BossManagement").click(function(){
        $(".AccountManagement_c_iframe iframe").attr("src","bossPass.html")
    })


    $(".OrdersManagement").click(function () {
        $(".AccountManagement_c_iframe iframe").attr("src", "orderlist.html")
    })
    $(".AccountManagement").click(function () {
        $(".AccountManagement_c_iframe iframe").attr("src", "accountlist.html")
    })

    // pull page   翻页
    $(".pull_page ul li").click(function () {
        var index = $(this).index();
        if ($(this).hasClass("pull_page_df_btn")) {
            return;
        }
        $(this).addClass("on").siblings().removeClass("on");

    })

    // nav
    $(".nav_side>div").click(function () {
        var index = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $(".main_fx>div").eq(index).show().siblings().hide();
        if (index == 0) {
            $(".user_location span").text("用户管理");
        } else if (index == 1) {
            $(".user_location span").text("类型管理");
        } else if (index == 2) {
            $(".user_location span").text("食品管理");
        } else if (index == 3) {
            $(".user_location span").text("订单管理");
        } else if (index == 4) {
            $(".user_location span").text("账户管理");
        }
    })

    // 弹窗   all
    // z账户管理 -
    // 添加账户
    $("#add_Account_btn").click(function () {
        $("#add_Account").fadeIn(100);
    })

    $(".add_Account_close").click(function () {
        $("#add_Account").fadeOut(100);
        $("#user_column").fadeOut(100);
        $("#delete_Account").fadeOut(100);
        $("#ac_Account").fadeOut(100);
        $("#add_column").fadeOut(100);
        $("#edit_column").fadeOut(100);
        $("#delete_column").fadeOut(100);
    })
    /* // 编辑账户
     $(".edit_Account_btn").click(function(){
         $("#user_column").fadeIn(100);
     })
     //删除账户
     $(".delete_Account_btn").click(function(){
         $("#delete_Account").fadeIn(100);
     })*/

    // 栏目管理 -
    $("#add_column_btn").click(function () {
        $("#add_column").fadeIn(100);
    })
    /*
    // 编辑栏目
    $("#edit_column_btn").click(function(){
        $("#edit_column").fadeIn(100);
    })
    */
    // 删除栏目
    $("#delete_column_btn").click(function () {
        $("#delete_column").fadeIn(100);
    })
    /*
 //添加新闻
 $("#add_News_btn").click(function(){
     $("#MainFrame",window.parent.document).attr("src","page/newsadd.html");
 })
  // 编辑新闻
 $("#edit_News_btn").click(function(){
     $("#MainFrame",window.parent.document).attr("src","page/newsedit.html");
 })
 */
    /*// 删除新闻
    $("#delete_column_btn").click(function(){
        $("#delete_column").fadeIn(100);
    })*/

    // 确定 btn 
    $("#add_Account_ok_btn").click(function () {
        $("#add_Account").fadeOut(100);
    })
    $("#user_column_ok_btn").click(function () {
        $("#user_column").fadeOut(100);
    })
    $("#delete_Account_ok_btn").click(function () {
        $("#delete_Account").fadeOut(100);
    })
    $("#ac_Account_ok_btn").click(function () {
        $("#ac_Account").fadeOut(100);
    })
    $("#add_column_ok_btn").click(function () {
        $("#add_column ").fadeOut(100);
    })
    $("#edit_column_ok_btn").click(function () {
        $("#edit_column ").fadeOut(100);
    })

    $("#delete_column_ok_btn").click(function () {
        $("#delete_column").fadeOut(100);
    })


})