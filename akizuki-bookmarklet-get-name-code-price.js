// akizuki-bookmarklet v0.0.1
// (C) 2018 Tiryoh<tiryoh@gmail.com>
// Released under the MIT License.
// https://tiryoh.mit-license.org

( function(){
        try{
            var arr = document.getElementsByClassName("order_g")[0].children[2].children[0].children[0].children[0].children[1].innerText.substr(1).match(/\d/g);
        } catch(e) {
            window.alert("akizuki-bookmarklet parse error\nhttps://tiryoh.github.io/akizuki-bookmarklet\nこのブックマークレットに関する秋月電子通商さんへのお問い合わせは控えてください。\n\nerror:"+e);
        }
        var price = "";
        for (var i = 0, len = arr.length; i < len; i++){
            price += arr[i];
        }
	    var contents=document.title.substr(0,document.title.lastIndexOf(": "))+"\t"+location.href.match(/[A-Z]-\d{5}/g)+"\t"+price+"\n";
        var d=window.open(null,null,'width=700,height=300,menubar=no,toolbar=no,scrollbars=yes').document;
        d.writeln('<html><script>function copy() { let textarea = document.getElementById("textarea"); textarea.select(); document.execCommand("copy");window.close();}</script><body></body><textarea id="textarea" rows=15 cols=80>'+contents+'</textarea><br><button onclick="copy()">copy to clipboard</button></body></html>');
        d.close()
	}
)();