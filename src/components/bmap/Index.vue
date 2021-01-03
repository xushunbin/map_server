<template>
  <div>
    <div class="bm-view" id="map-box-id">
      <!--<baidu-map class="bm-view" id="map-box-id" center="阿坝藏族羌族自治州" @ready="handler"></baidu-map>-->
    </div>
    <el-button type="warning" v-on:click="downloadPicture">下载图片</el-button>
    <input type="file" v-on:change="getFile" id="upload">
  </div>
</template>
<script>
  import html2canvas from "html2canvas"
  export default {
    name: 'index',
    BMap: null,
    data() {
      return {
        msg: "Hello world",
      }
    },
    mounted() {
      this.ready()
    },
    methods: {
      Test: function () {
        console.log('TEST')
      },
      ready() {
        this.BMap = new BMap.Map('map-box-id');
        let point = new BMap.Point(116.331398, 39.897445);
        this.BMap.centerAndZoom(point, 10);
        this.BMap.enableScrollWheelZoom(true)
        this.BMap.setMapStyleV2({
          //styleId: 'b740b10f3d322cb55f63c212bcfdb1ea'
          styleId: '1ee2bf6147ed4a670d1fa8cd254bebdc'
        });
      },
      // handler: function ({BMap, map}) {
      //   this.BMap = BMap;
      //   // map.setMapStyle({style: 'grayscale'})
      //   map.setMapStyleV2({
      //     styleId: 'b740b10f3d322cb55f63c212bcfdb1ea'
      //   });
      // },
      downloadPicture: function () {
        //this.$options.methods.Test.bind(this)()
        // 去掉百度地图的谁赢
        document.querySelector('.BMap_cpyCtrl').style.display = 'none';
        document.querySelector('.anchorBL').style.display = 'none';
        html2canvas(document.querySelector("#map-box-id"), {
          useCORS: true
        }).then(canvas => {
          //document.body.appendChild(canvas)
          let dataURL = canvas.toDataURL("image/png");
          let link = document.createElement('a');
          this.imgUrl = dataURL;
          if (this.imgUrl !== "") {
            link.href = dataURL;
            link.setAttribute('download', this.getDownloadName() + '.png');
            link.style.display = 'none';
            document.body.appendChild(link);
            link.click();
          }
          document.querySelector('.BMap_cpyCtrl').style.display = 'block';
          document.querySelector('.anchorBL').style.display = 'block';
        });

      },
      getDownloadName: function () {
        let date = new Date();
        return date.getTime();
      },
      getFile: function(e) {
        console.log(e)
        let file = document.getElementById('upload').files[0];
        console.log(file);
        let reader = new FileReader();
        reader.readAsBinaryString(file);
        reader.onloadend = function (e) {
          console.log(this, this)
          shp(this.result).then(function (geoJson) {
            console.log(12313)
            console.log(geoJson)
          })
        }
      }
    }
  }
</script>

<style scoped>
  .bm-view {
    width: 100%;
    height: 500px;
  }
</style>
