<template>
  <div id="app">
    <indicator></indicator>
    <head-bar>
      <a href="#" aria-label="民眾回收一場空">民眾回收一場空</a>
      <a href="#" aria-label="政府燒錢有用嗎">政府燒錢有用嗎</a>
      <a href="#" aria-label="環保不只一條路">環保不只一條路</a>
    </head-bar>
    <cover src="static/government_cover_m.jpg" src-web="static/government_cover.jpg" position="leftTop">
      <h1 class="title">政府管理失能<br><span v-if="!isWeb">&nbsp;&nbsp;&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;卻拿百姓開刀</h1>
    </cover>
    <content-container style="background:#191410;color:white;">
      <p>民眾若未確實做好資源回收，現規定可依法開罰1200元到6000元不等，政府拿「開罰」做為督促分類的手段，但民眾乖乖分類後，官員卻沒有擔起該負的管理責任。經本報實地調查，被公告為
        <dictionary title="應回收物">
          <p style="margin:0;">餐盒、紙杯等皆屬環保署公告應回收項目中「廢紙容器類」，其餘廢紙容器包括紙餐具（含免洗餐具）、鋁箔包等。</p>
        </dictionary>
        的餐盒、紙杯，現在回收狀況一團亂，環保署卻一問三不知，嚴重失能。</p>
      <br>
      <p>詢問每年使用量，環保署推說不知道，也不清楚有多少回收物進了焚化爐；再問若全部餐盒、紙杯都落實回收，國內只有兩家再生處理廠夠嗎？環保署僅含糊稱「應該夠」，甚至明知回收業者因貪圖方便、拒收民眾分好的餐盒，官方也未積極處理。</p>
      <br>
      <p>從源頭的製造商、使用量，到後端的回收商、處理廠，環保署每一個環節都管理得不清不楚，只敢對老百姓開刀，這樣的管理能力，對得起配合政策、認真回收的民眾嗎？</p>
      <span>FB </span>
      <span>LINE</span>
    </content-container>
    <content-container>
      <br>
      <br>
      <h3>問題一：<br>沒有使用量 政府靠感覺做事？</h3>
      <br>
      <p>先弄清楚民眾一年下來用了多少紙杯、紙盒，才能判斷現在的回收量占多少、回收成果如何，環保署手上的資料卻七零八落，沒有使用量數據、製造商也僅知合法且有加入公會的業者，但據記者追查，國內許多紙餐具都是透過家庭代工生產，這些都是政府沒有掌握的黑洞。</p>
      <br>
      <p>看守台灣協會協會秘書長謝和霖指出，許多外帶紙杯、紙餐盒都是地下生產，環保署至今難以掌握，依規定製造業者都需要繳交回收基金給環保署，但環署現在根本不可能要求這些地下業者負起回收責任。</p>
    </content-container>
    <parallaxBg src="static/government_image1_m.jpg" src-web="static/government_image1.jpg">
    </parallaxBg>
    <content-container style="padding-top:0;padding-bottom:0;">
      <p class="image_description">紙餐盒許多都是家庭代工生產，製造量、使用量存有許多漏洞。</p>
    </content-container>
    <content-container style="min-height:100vh;display:flex;align-items:center;">
      <p>不清楚使用量的另一個嚴重問題，是環保署根本無法評估國內的回收處理廠夠不夠、吃不吃得下所有餐盒。目前全台僅位於苗栗的連泰紙業、正隆紙業新竹竹北廠兩地可處理紙容器再生，兩個廠現在都擔心「供不應求」，環保署卻絲毫不緊張，稱「連泰紙業擴廠後應該就夠了」。</p>
      <br>
      <p>2018年紙容器回收量從2萬5千噸激增到4萬噸，主因雖是
        <dictionary title="洋垃圾風暴">
          <p style="margin:0;">2017年中國大陸頒布「禁廢令」，宣告2018年起不再接受包括廢紙、廢塑等24種廢棄物進口，國際廢紙價格因而大跌，國內紙廠開始收購便宜的海外廢紙，衝擊國內廢紙回收體系。</p>
        </dictionary>
        衝擊下，紙廠不再讓混著紙容器的紙磚進入紙廠，但目前每月僅能處理350噸的正隆紙業擔憂，如果餐盒、餐具等紙容器回收情形持續好轉，「我們的處理廠夠嗎？」政府大力推廣民眾做回收，回收廠恐怕大塞車。</p>
      <!-- <fb-comment href="https://udn.com/upf/newmedia/2019_data/DUI_victim_stories/"></fb-comment> -->
    </content-container>
    <parallaxBg src="static/government_image2_m.jpg" src-web="static/government_image2.jpg">
    </parallaxBg>
    <content-container style="padding-top:0;padding-bottom:0;">
      <p class="image_description">正隆紙業的處理量每月最多只能處理350公噸紙容器。</p>
    </content-container>
    <content-container style="min-height:100vh;display:flex;align-items:center;">
      <p>連泰紙業目前每月可以處理5000噸紙容器，一年下來6萬噸，看似還有空間，但連泰紙業已著手擴廠，預計每月處理量將增長至12000噸，提早做準備。</p>
      <br>
      <p>連泰紙業經理連大鈞指出，2018年8月以前，每月平均僅有2000多噸的回收量，但8月開始回收量激增至近5000噸，達到連泰的產能極限，2019年才再投資新的設備，但近幾個月又發現回收量開始停滯，「有點沒信心」，連泰也曾向環保署回收基金管會詢問過全台紙容器應回收量究竟有多少，都沒得到回覆。</p>
      <br>
      <br>
      <br>
      <h3>問題二：<br>數字一團亂 補貼制度失能</h3>
      <br>
      <p>源頭數字混亂，讓後端回收補貼費率也一團亂。國內回收體系價格調節，都仰賴環保署資源回收基金管理會（簡稱回收基管會），基管會向生產商收取回收基金，再設定費率補貼回收業者及處理廠，但走訪第一線回收場，環保署對紙容器的補貼沒有發揮作用，許多回收場還是不想好好做。</p>
    </content-container>
    <parallaxBg src="static/government_image3-1_m.jpg" src-web="static/government_image3-1.jpg">
    </parallaxBg>
    <cover src="static/government_image3-2_m.jpg" src-web="static/government_image3-2.jpg"></cover>
    <content-container style="padding-top:0;">
      <p class="image_description">2018年紙容器回收量在洋垃圾衝擊下明顯成長，但國內長期存在的紙容器回收問題仍未改善。圖為進入紙容器處理廠、連泰紙業的紙磚。</p>
      <br>
      <br>
      <br>
      <br>
      <p>環保署雖明定紙容器每公斤回收商可領5.25元補助，希望藉由價格增加業者分類誘因，但並未再細分各級盤商收購價。以國內回收業體系實際運作情形來看，一層層砍下來，到中小盤商時價格已低。以新竹縣某清潔隊4月8日細分類回收價格為例，紙類1公斤2.2元、紙容器3元，兩者相差僅0.8元。</p>
      <br>
      <br>
      <column-one src="static/government_chart_m.svg" src-web="static/government_chart.svg" href="https://udn.com/upf/newmedia/2019_data/recycle/government"></column-one>
      <br>
      <br>
      <br>
      <p>位於桃園市平鎮區的享運細分類廠負責分類桃園市全市資源回收物，分類後再販售給下游回收商。廠方人員觀察，不少回收業者認為紙餐盒回收價格不夠高，加上餐盒油膩易跟紙類沾黏，時間放久一點還會有小蟲爬飛，要找人挑出太花錢，乾脆不收。</p>
      <br>
      <p>謝和霖批評，回收物會經過小盤、中盤、大盤回收商才到後端處理場，大盤若費用降低，下方就會調降，這是環環相扣的過程。環保署回收基管會的紙容器補貼費率最近更改已是4年前，「變動太慢」，根本無法因應市場浮動狀況，並沒有達到調控回收市場的功能。</p>
      <br>
      <br>
      <br>
      <h3>問題三：<br>回收半調子 百姓受害</h3>
      <br>
      <p>面對每天幾乎都會用到的紙餐盒、咖啡杯，多數民眾最深的困擾是：「到底能不能回收啊？是算紙類嗎？」被分類搞得霧煞煞。但這並非民眾的問題，而是政府、業者混淆了民眾。</p>
      <br>
      <p>從一張公文就能看見回收體系的崩壞。雙北的公寓大廈出現公文，指因紙廠改變政策拒收紙杯、免洗餐具、鋁箔包，要住戶直接當垃圾丟棄；部分社區大樓收集好餐盒出售給回收場，卻被業者直接挑出來，挑明跟住戶說「這不回收」。</p>
      <br>
      <p>新北一間企業員工餐廳雖設置空間讓顧客回收紙餐具，整理好後卻被清運業者打槍「不能收」，總務單位更直言「這不能賣錢，不能回收」，長期下來民眾根本搞不清楚紙餐盒要丟哪，若被清潔隊員抓到只能喊苦。</p>
      <br>
      <column-one src="static/government_image4.jpg" src-web="static/government_image4.jpg" description="各地破袋稽查愈來愈嚴格，但許多民眾至今搞不清楚紙餐盒到底算不算回收物。" href="https://udn.com/upf/newmedia/2019_data/recycle/government"></column-one>
      <br>
      <p>將此亂象詢問環保署，環保署表示知情，但坦言許多回收商長期累積下來的習慣改不掉，還是將紙容器跟紙類混在一起送入紙廠，一般紙廠其實無法消化紙容器，一樣變垃圾。很多回收業者也都知道有連泰等處理廠在收，「只是不想改變既有回收模式」，回收是自由市場，環署只能盡量輔導鼓勵。</p>
      <br>
      <br>
      <br>
      <h3>解方：政府的角色在哪裡？</h3>
      <br>
      <p>民眾每年平均使用超過200個的紙餐盒，現在的回收體系卻漏洞一堆，環保署既然以開罰這樣具強制性的手段要求民眾做分類，就必須負起責任，對種種亂象不能只以一句「回收是自由市場」輕輕帶過。</p>
      <br>
      <p>第一，環保署需加強源頭管理力道，搞清楚有多少製造商、到底用了幾個，弄清楚源頭數量，才能仔細檢視回收現況，繼而評估現行補貼政策是否需調整。</p>
      <br>
      <p>第二，紙餐盒回收處理面臨的困境在於供需意願落差大，連泰紙業等處理廠因補貼誘因強，再利用後又可賣錢，積極擴廠想收更多，但回收商卻因分類、清洗、運輸等瓶頸，回收意願低落，反映出補貼機制明顯失衡，環保署需要檢討。</p>
      <br>
      <p>第三，許多民眾並非不願意配合分類，而是被政府、業者弄得霧煞煞，加上紙餐盒等紙容器因需清洗，比紙類等回收麻煩，不好處理就直接丟進垃圾桶。謝和霖建議，環署的補貼機制可延伸到民眾，當民眾分類有得到鼓勵，「大家就會願意去做。」</p>
      <br>
      <p>以德國為例，鋁罐、玻璃啤酒瓶、礦泉水瓶等只要投入專門機器，就能兌換現金抵消費；提出「零垃圾宣言」的日本上勝町發現牛奶包裝盒等零碎紙類難回收，設計出集點制度讓民眾兌換生活用品，都是可參考的做法。</p>
      <br>
      <p>除了加強回收管理，「減少使用」才是真正從源頭解決的方法，除了鼓勵民眾自己攜帶環保餐具，民間已蓬勃發展出許多創意減量方法，都值得政府參考。</p>
      <br>
    </content-container>
    <content-container style="background:#30343f;color:#e4e4e4;">
      <hr>
      <br>
      <br>
      <br>
      <br>
      <share href="https://udn.com/upf/newmedia/2019_data/recycle/government/"></share>
      <br>
      <br>
      <br>
      <editor style="color:#e4e4e4;">
        <div>採訪團隊：鄭朝陽、郭政芬、張裕珍、林敬家、張雅婷、陳斯穎、許政榆、賴香珊、范榮達、魏翊庭</div>
        <div>製作人：洪欣慈</div>
        <div>影像：黃仲裕、郭政芬、賴香珊、報系資料照</div>
        <div>視覺設計：張心慈</div>
        <div>網頁製作：曾雅珮、謝化挺</div>
        <div>監製：林秀姿、潘如瑩、董谷音</div>
        <div>2019.06.05</div>
      </editor>
      <br>
      <logo use-ubrand="no" use-vision='no'></logo>
      <br>
      <br>
      <question href="https://www.surveycake.com/s/KpQKN" text="填寫閱讀體驗問卷"></question>
      <br>
      <br>
      <br>
      <relate 
        text1="延宕限塑、回收機制差 監院糾正環署" href1="https://udn.com/news/story/7266/3806198" img1="static/government_read1.jpg"
        text2="強化回收再利用率 環保署長：調整補貼制度" href2="https://udn.com/news/story/7314/3617009" img2="static/government_read2.jpg"
        text3="塑膠、膠膜回收 研議從原料課費" href3="https://udn.com/news/story/7266/3796119" img3="static/government_read3.jpg"
        text4="紙容器塑膠淋膜革命 大學生組隊赴美參賽" href4="https://udn.com/news/story/6928/3425491" img4="static/government_read4.jpg">
      </relate>
    </content-container>
    <content-container>
      <fb-comment href="https://udn.com/upf/newmedia/2019_data/recycle/government"></fb-comment>
    </content-container>
    <foot></foot>
    <back-top></back-top>
  </div>
</template>

<script>
  import Anchor from './components/Anchor.vue'
  import BackTop from './components/BackTop.vue'
  import ColumnOne from './components/ColumnOne.vue'
  import ColumnThree from './components/ColumnThree.vue'
  import ColumnTwo from './components/ColumnTwo.vue'
  import ContentContainer from './components/Content.vue'
  import Cover from './components/Cover.vue'
  import CoverVideo from './components/CoverVideo.vue'
  import Editor from './components/Editor.vue'
  import FbComment from './components/FbComment.vue'
  import FbQuote from './components/FbQuote.vue'
  import Foot from './components/Foot.vue'
  import HeadBar from './components/HeadBar.vue'
  import HeadBarSimplified from './components/HeadBarSimplified.vue'
  import Indicator from './components/Indicator.vue'
  import Logo from './components/Logo.vue'
  import Question from './components/Question.vue'
  import Quote from './components/Quote.vue'
  import Relate from './components/Relate.vue'
  import ParallaxBg from './components/ParallaxBg.vue'
  import Share from './components/Share.vue'
  import Youtube from './components/Youtube.vue'
  import Dictionary from './components/Dictionary.vue'

  import srcRWD from "./mixin/srcRWD.js"


export default {
  name: 'app',
  mixins: [srcRWD],
  components: {
    Anchor,
    BackTop,
    ColumnOne,
    ColumnThree,
    ColumnTwo,
    ContentContainer,
    Cover,
    CoverVideo,
    Editor,
    FbComment,
    FbQuote,
    Foot,
    HeadBar,
    HeadBarSimplified,
    Indicator,
    Logo,
    Question,
    Quote,
    Relate,
    ParallaxBg,
    Share,
    Youtube,
    Dictionary
  },
  data() {
    return {
      isWeb: false,
    }
  },
  mounted(){
    if(window.innerWidth>=768){
      this.isWeb = true;
    }else{
      this.isWeb = false;
    }
  }
}
</script>

<style lang="scss" scoped>
.title{
  writing-mode: vertical-rl;
  color: white;
  font-weight: bold;
  line-height: 1.3;
  letter-spacing: 4px;
}
.image_description{
  margin: 0;
  padding: 5px 0;
  position: relative;
  z-index: 6;
  font-size: 17px;
  color: #808080;
  background: #fff;
}
</style>