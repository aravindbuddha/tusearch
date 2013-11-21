
var q=document.getElementById('q');
var out=document.getElementById('out');

var app={
  init:function(){
    this.events();
  },
  events:function(){
    q.addEventListener('keypress',this.getResult());
  },
  getResult:function(){
    var base=this;
    var url="http://www.techumber.com/feeds/posts/summary?alt=json&q="+q.value+"&max-results=2000";
    var xhr=new XMLHttpRequest();
    xhr.open('GET',url,true);
    xhr.onload = function(e) {
      if(this.status == 200) {
        var out=document.getElementById('out');
        base.showResult(JSON.parse(this.response));   
      }
    };
    xhr.send();
  },
  showResult:function(r){ console.log(r);
      var fallbackThumb= "http://4.bp.blogspot.com/-ZguqmEQ-Hpk/UonGYGNZkmI/AAAAAAAACBo/3IRunOZ95oQ/s72-c/CSS-Preprocessors-For-Beginners(sass)-techumber.png" // Fallback thumbnail untuk posting tak bergambar
      var result='';
      out.innerHTML=" ";
      var thumb=null;
      r.feed.entry.forEach(function(post){
        if ("media$thumbnail" in post) {
          thumb=new Blob([post.media$thumbnail.url],{type:'image/png'});
        }
        else{
          thumb=new Blob([fallbackThumb],{type:'image/png'});
        }
          result+='<div class="post">';
          result+='<img src="'+window.URL.createObjectURL(thumb) +'" />';
          result+='<h2>'+post.title.$t+'</h2>';
          result+='<p>'+post.summary.$t+'</p>';
          result+='</div>';

      });
      out.innerHTML=result;
      //var thumb=new Blob([img],{type:'image/png'}); 
      
      //var blob=new Blob([img], {type: 'image/png'});
      // result+='<div class="post">';
      // result+='<img src="'+window.URL.createObjectURL(img) +'" width="'+post.media$thumbnail.width+'" height="'+post.media$thumbnail.height+'"/>';
      // result+='<h2>'+post.title.$t+'</h2>';
      // result+='<p>'+post.summary.$t+'</p>';
      // result+='</div>';
      //result+=JSON.stringify(post.title.$t);
    
    //result=JSON.stringify(r.feed.entry[0].title.$t);
  }
}
document.addEventListener('DOMContentLoaded',function(){
  app.init();
});

// var q=document.getElementById('q');
// // document.addEventListener('onkeypress',function(){
// //   alert('hi');
// //   console.log(e.keyCode);
// // });
// var log=document.getElementById('log');
// q.addEventListener('keypress', function(e){
//   alert(e.target);
// }, false);

// function logeventinfo (ev) { alert('hi');
//   // log.innerHTML = '';
//   // out = '<ul>';
//   // for (var i in ev) {
//   //   if (typeof ev[i] === 'function' || i === i.toUpperCase()) {
//   //     continue;
//   //   }
//   //   out += '<li><span>'+i+'</span>: '+ev[i]+'</li>';
//   // }
//   // log.innerHTML += out + '</ul>';
// }


//  var searchFormConfig = {  
//         numPost: 9999, // Jumlah maksimal temuan
//         summaryPost: true, // 'true' jika ingin menampilkan deskripsi posting
//         summaryLength: 100, // Jumlah karakter ringkasan posting
//         resultTitle: "Result For Keyword", // Judul hasil pencarian
//         noResult: "No result", // Deskripsi 'tak ditemukan'
//         resultThumbnail: true, // 'true' untuk menampilkan thumbnail posting
//         thumbSize: 150, // Ukuran & resolusi thumbnail
//         fallbackThumb: "http://1.bp.blogspot.com/-gIdQCoMIkSk/UYl-cRQtiHI/AAAAAAAAJC0/p9xZetaajI8/s000/grey.png" // Fallback thumbnail untuk posting tak bergambar
//       };

// function $$$(a) {
//     return document.getElementById(a)
// }
// var config = searchFormConfig,
//     input = $$$("feed-q-input"),
//     resultContainer = $$$("search-result-container"),
//     resultLoader = $$$("search-result-loader"),
//     skeleton = "";

// function showResult(l) {
//     var k = l.feed.entry ? l.feed.entry : "",
//         a, g, e;
//     skeleton = "<h4>" + config.resultTitle + " &quot;" + input.value + "&quot;</h4>";
//     skeleton += '<a class="close" href="/">&times;</a><ol>';
//     if (k === "") {
//         skeleton += "<li>" + config.noResult + "</li>"
//     }
//     for (var d = 0; d < config.numPost; d++) {
//         if (d == k.length) {
//             break
//         }
//         var b = new RegExp(input.value, "ig"),
//             f = k[d],
//             h = f.title.$t.replace(b, "<mark>" + input.value + "</mark>");
//         for (var c = 0; c < f.link.length; c++) {
//             if (f.link[c].rel == "alternate") {
//                 a = f.link[c].href;
//                 break
//             }
//         }
//         if (config.summaryPost === true) {
//             if ("content" in f) {
//                 g = f.content.$t
//             } else {
//                 if ("summary" in f) {
//                     g = f.summary.$t
//                 } else {
//                     g = ""
//                 }
//             }
//         }
//         if (config.resultThumbnail === true) {
//             if ("media$thumbnail" in f) {
//                 e = f.media$thumbnail.url.replace(/\/s[0-9]+\-c/g, "/s" + config.thumbSize + "-c")
//             } else {
//                 e = config.fallbackThumb
//             }
//         }
//         g = g.replace(/<\S[^>]*>/g, "");
//         if (g.length > config.summaryLength) {
//             g = g.substring(0, config.summaryLength) + "..."
//         }
//         g = g.replace(b, "<mark>" + input.value + "</mark>");
//         skeleton += '<li><img style="width:' + config.thumbSize + "px;height:" + config.thumbSize + 'px;" src="' + e + '" alt="" /><a href="' + a + '" target="_blank">' + h + "</a><p>" + g + "</p></li>"
//     }
//     skeleton += "</ol>";
//     resultContainer.innerHTML = skeleton;
//     resultLoader.style.display = "none";
//     resultContainer.style.display = "block"
// }

// function appendScript() {
//     var a = document.createElement("script");
//     a.type = "text/javascript";
//     a.id = "search-feed-script";
//     document.getElementsByTagName("head")[0].appendChild(a)
// }
// appendScript();

// function updateScript() {
//     resultContainer.style.display = "none";
//     resultLoader.style.display = "block";
//     var a = $$$("search-feed-script"),
//         b = document.createElement("script");
//     b.id = "search-feed-script";
//     b.type = "text/javascript";
//     b.src = "http://www.techumber.com/feeds/posts/summary?alt=json-in-script&q=" + input.value + "&max-results=" + config.numPost + "&callback=showResult";
//     a.parentNode.removeChild(a);
//     document.getElementsByTagName("head")[0].appendChild(b);
//     return false
// }

// function resetField() {
//     resultContainer.innerHTML = "";
//     if (input.value === "") {
//         resultContainer.style.display = "none";
//         resultLoader.style.display = "none"
//     }
//     $("#search-result-container").on("click", ".close", function () {
//         resultContainer.style.display = "none";
//         resultLoader.style.display = "none";
//         return false
//     })
// };
