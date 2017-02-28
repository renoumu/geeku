$(document).on('click','.create-actions', function () {
      var buttons1 = [
        {
          text: '退款/退货原因',
          label: true
        },
        {
          text: '买多了',
          bold: true,
          onClick: function() {
            $.alert("你选择了买多了");
            window.location.href = "../退款退货申请/index.html"
          }
        },
        {
          text: '买错了',
          onClick: function() {
            $.alert("你选择了买错了");
            window.location.href = "../退款退货申请/index.html"
          }
        },
        {
          text: '质量问题',
          bold: true,
          onClick: function() {
            $.alert("你选择了质量问题");
            window.location.href = "../退款退货申请/index.html"
          }
        },
        {
          text: '物流问题',
          bold: true,
          onClick: function() {
            $.alert("你选择了物流问题");
            window.location.href = "../退款退货申请/index.html"
          }
        },
        {
          text: '其他原因',
          bold: true,
        }
      ];
      var groups = [buttons1];
      $.actions(groups);
  });

$('.Evaluation-Btn').on('click',function(){
  window.location.href = "../评价（不输入状态）/index.html"
})

