<script type="text/javascript">

     var city=[
     ["北京","天津","上海","重庆","香港","澳门"],
     ["石家庄","唐山","秦皇岛","邯郸","邢台","保定","张家口","承德","沧州","廊坊","衡水"],
     ["太原","大同","阳泉","长治","晋城","朔州","晋中","运城","忻州","临汾","吕梁"],
     ["呼和浩特","包头","乌海","赤峰","通辽","鄂尔多斯","呼伦贝尔","巴彦淖尔","乌兰察布","兴安","锡林郭勒","阿拉善"],
     ["沈阳","大连","鞍山","抚顺","本溪","丹东","锦州","营口","阜新","辽阳","盘锦","铁岭","朝阳","葫芦岛"]         
     ];

     function getCity()
     {
         //获得省份下拉框的对象
         var sltProvince=document.forms[0].province;
         //获得城市下拉框的对象
         var sltCity=document.forms[0].city;
         
         //得到对应省份的城市数组
         var provinceCity=city[sltProvince.selectedIndex - 1];

         //清空城市下拉框，仅留提示选项
         sltCity.length=1;

         //将城市数组中的值填充到城市下拉框中
         for(var i=0;i<provinceCity.length;i++)
         {
             sltCity[i+1]=new Option(provinceCity[i],provinceCity[i]);
         }

     }

</script>

<form name="test" method="post" action="">

      <select name="province" onChange="javascript:getCity()">
        <option value="null" selected="selected">请选择所在省份</option>
        <option value="直辖市" >直辖市</option>
        <option value="河北">河北</option>
        <option value="山西">山西</option>
        <option value="内蒙古">内蒙古</option>
        <option value="辽宁">辽宁</option>
          
     </select>
     <select name="city">
          <option value="null" selected="selected">请选择所在城市</option>
     </select>
</form>  