$(document).on('click','.create-actions', function () {
      var buttons1 = [
        {
          text: '取消订单的原因',
          label: true
        },
        {
          text: '我不想买了',
          bold: true,
          onClick: function() {
            $.alert("取消订单成功");
          }
        },
        {
          text: '	信息填写错误，重新拍',
          bold: true,
          onClick: function() {
            $.alert("取消订单成功");
          }
        },
        {
          text: '	卖家缺货',
          bold: true,
          onClick: function() {
            $.alert("取消订单成功");
          }
        },
        {
          text: '	同城见面交易',
          bold: true,
          onClick: function() {
            $.alert("取消订单成功");
          }
        },
        {
          text: '	其他原因',
          bold: true,
        }
      ];
      var groups = [buttons1];
      $.actions(groups);
  });