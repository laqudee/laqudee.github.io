import{_ as p,a as t,o as i,c as o,f as n,b as e,F as u,x as l,d as s}from"./app.3547d211.js";const c={},r=l(`<ul><li>MaterialPageRoute\u7EE7\u627F\u81EAPageRoute\u7C7B\u662F\u4E00\u4E2A\u62BD\u8C61\u7C7B\uFF0C\u8868\u793A\u5360\u6709\u6574\u4E2A\u5C4F\u5E55\u7A7A\u95F4\u7684\u4E00\u4E2A\u6A21\u6001\u8DEF\u7531\u9875\u9762\uFF0C\u5B83\u8FD8\u5B9A\u4E49\u4E86\u8DEF\u7531\u6784\u5EFA\u53CA\u5207\u6362\u662F\u8FC7\u6E21\u52A8\u753B\u7684\u76F8\u5173\u63A5\u53E3\u53CA\u5C5E\u6027\u3002</li><li>Material\u7EC4\u4EF6\u5E93\u63D0\u4F9B\u7684\u7EC4\u4EF6\uFF0C\u4ED6\u53EF\u4EE5\u9488\u5BF9\u4E0D\u540C\u5E73\u53F0\uFF0C\u5B9E\u73B0\u4E0E\u5E73\u53F0\u9875\u9762\u5207\u6362\u52A8\u753B\u98CE\u683C\u4E00\u81F4\u7684\u8DEF\u7531\u5207\u6362\u52A8\u753B\u3002</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>    <span class="token function">MaterialPageRoute</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        WidgetBuilder builder<span class="token punctuation">,</span> <span class="token comment">//\u662F\u4E00\u4E2AwidgetBuilder\u7C7B\u578B\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u4F5C\u7528\uFF1A\u6784\u5EFA\u8DEF\u7531\u9875\u9762\u7684\u5177\u4F53\u5185\u5BB9\uFF0C\u8FD4\u56DE\u503C\u662F\u4E00\u4E2Awidget</span>
        RouteSettings settings<span class="token punctuation">,</span> <span class="token comment">//\u5305\u542B\u8DEF\u7531\u7684\u914D\u7F6E\u4FE1\u606F\uFF0C\u5982\u8DEF\u7531\u540D\u79F0\u3001\u662F\u5426\u521D\u59CB\u8DEF\u7531</span>
        bool maintainState <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5F53\u5165\u6808\u4E00\u4E2A\u65B0\u8DEF\u7531\u65F6\uFF0C\u539F\u6765\u7684\u8DEF\u7531\u4ECD\u7136\u4F1A\u88AB\u4FDD\u5B58\u5728\u5185\u5B58\u4E2D\uFF0C\u82E5\u60F3\u91CA\u653E\u5176\u6240\u5360\u8D44\u6E90\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u5176\u4E3Afalse\u3002</span>
        bool fullscreenDialog <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//\u8868\u793A\u65B0\u7684\u8DEF\u7531\u9875\u9762\u662F\u5426\u662F\u4E00\u4E2A\u5168\u5C4F\u7684\u6A21\u6001\u5BF9\u8BDD\u6846</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li><p>Navigator</p><ul><li>\u4E00\u4E2A\u8DEF\u7531\u7BA1\u7406\u7684\u7EC4\u4EF6\uFF0C\u63D0\u4F9B\u6253\u5F00\u548C\u9000\u51FA\u8DEF\u7531\u9875\u65B9\u6CD5\u3002\u3010\u6808\u64CD\u4F5C\u3011\uFF0C\u5F53\u524D\u9875\u4F4D\u4E8E\u6808\u9876</li></ul></li><li><p>Future push(BuildContext context, Route route)</p><ul><li>\u5C06\u7ED9\u5B9A\u7684\u8DEF\u7531\u5165\u6808\uFF08\u6253\u5F00\u65B0\u7684\u9875\u9762\uFF09\uFF0C\u8FD4\u56DE\u503C\u662F\u4E00\u4E2AFuture\u5BF9\u8C61\uFF0C\u7528\u4E8E\u63A5\u6536\u65B0\u8DEF\u7531\u51FA\u6808\u7684\u8FD4\u56DE\u6570\u636E\u3002</li></ul></li><li><p>bool pop(BuildContext context,[result])</p><ul><li>\u5C06\u6808\u9876\u8DEF\u7531\u51FA\u6808\uFF0Cresult\u4E3A\u9875\u9762\u5173\u95ED\u65F6\u8FD4\u56DE\u7ED9\u4E0A\u4E00\u4E2A\u9875\u9762\u7684\u6570\u636E\uFF0C</li></ul></li><li><p>\u547D\u540D\u8DEF\u7531</p><ul><li>\u4E3A\u8DEF\u7531\u8D77\u540D\u5B57\uFF0C\u7136\u540E\u6839\u636E\u540D\u5B57\u76F4\u63A5\u6253\u5F00\u65B0\u7684\u8DEF\u7531</li></ul></li><li><p>\u8DEF\u7531\u8868</p><ul><li>Map&lt;String, WidgetBuilder&gt; routes;</li></ul></li><li><p>\u9002\u914D</p></li><li><p>\u547D\u540D\u8DEF\u7531\u53C2\u6570\u4F20\u9012</p><ul><li>\u5728routes\u91CC\u6CE8\u518C\u8DEF\u7531</li><li>\u5728\u8DEF\u7531\u9875\u901A\u8FC7routeSetting\u5BF9\u8C61\u83B7\u53D6\u8DEF\u7531\u53C2\u6570</li></ul></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">EchoRoute</span> <span class="token keyword">extends</span> <span class="token class-name">StatelessWidget</span> <span class="token punctuation">{</span>
    @override
    Widget <span class="token function">build</span><span class="token punctuation">(</span><span class="token parameter">BuilderContext context</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//\u83B7\u53D6\u8DEF\u7531\u53C2\u6570</span>
        <span class="token keyword">var</span> args<span class="token operator">=</span>ModalRoute<span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">.</span>settings<span class="token punctuation">.</span>arguments<span class="token punctuation">;</span>
        <span class="token comment">//.... \u7701\u7565\u65E0\u5173\u4EE3\u7801</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ul><li>\u5728\u6253\u5F00\u8DEF\u7531\u65F6\u4F20\u9012\u53C2\u6570\uFF1A</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Navigator<span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">pushNamed</span><span class="token punctuation">(</span><span class="token string">&quot;new_page&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">arguments</span><span class="token operator">:</span><span class="token string">&quot;hi&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u8DEF\u7531\u751F\u6210\u94A9\u5B50 <ul><li>\u5F53\u6211\u4EEC\u9700\u8981\u5728\u6253\u5F00\u6BCF\u4E00\u4E2A\u8DEF\u7531\u9875\u524D\u5224\u65AD\u7528\u6237\u767B\u5F55\u72B6\u6001\uFF0C\u6BCF\u6B21\u6253\u5F00\u524D\u90FD\u5224\u65AD\u4E00\u4E0B\u4F1A\u5F88\u9EBB\u70E6\uFF0C\u6240\u6709\u6709\u4E86\u3002</li><li>MaterialApp\u6709\u4E00\u4E2AonGenerateRoute\u5C5E\u6027\uFF0C\u5B83\u5728\u6253\u5F00\u547D\u540D\u8DEF\u7531\u65F6\u53EF\u80FD\u4F1A\u88AB\u8C03\u7528\u3002</li></ul></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">MaterialApp</span><span class="token punctuation">(</span>
    <span class="token operator">...</span>
    <span class="token literal-property property">onGenerateRoute</span><span class="token operator">:</span><span class="token punctuation">(</span>RouteSettings settings<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">MaterialPageRoute</span><span class="token punctuation">(</span>builder<span class="token operator">:</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">{</span>
            String routeName <span class="token operator">=</span> settings<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
            <span class="token comment">// \u5982\u679C\u8BBF\u95EE\u7684\u8DEF\u7531\u9875\u9700\u8981\u767B\u5F55\uFF0C\u4F46\u5F53\u524D\u672A\u767B\u5F55\uFF0C\u5219\u76F4\u63A5\u8FD4\u56DE\u767B\u5F55\u9875\u8DEF\u7531\uFF0C</span>
            <span class="token comment">// \u5F15\u5BFC\u7528\u6237\u767B\u5F55\uFF1B\u5176\u5B83\u60C5\u51B5\u5219\u6B63\u5E38\u6253\u5F00\u8DEF\u7531\u3002</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
<span class="token comment">//onGenerateRoute\u53EA\u4F1A\u5BF9\u547D\u540D\u8DEF\u7531\u751F\u6548</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ul><li><p>\u5305\u7BA1\u7406</p></li><li><p>\u6A21\u5757\u5171\u4EAB\u673A\u5236\uFF0CJava\u4E4Bjar\u5305\uFF0CAndroid\u4E4Baar\u5305\uFF0Cweb\u5F00\u53D1\u4E2D\u7684npm\u5305</p></li><li><p>\u4E00\u4E2Aapp\u7684\u5F00\u53D1\u4F1A\u4F9D\u8D56\u5F88\u591A\u5305\uFF0C\u8FD9\u4E9B\u5305\u901A\u5E38\u90FD\u6709\u4EA4\u53C9\u4F9D\u8D56\u5173\u7CFB\u3001\u7248\u672C\u4F9D\u8D56\u5173\u7CFB\u7B49\u3002</p></li><li><p>Android\u4E4Bgradle\u7BA1\u7406\u4F9D\u8D56</p></li><li><p>iOS\u4E4Bcocoapods</p></li><li><p>node\u4E2D\u7684npm</p></li><li><p>flutter\u7684\u5305\u7BA1\u7406</p></li><li><p>Pub\u4ED3\u5E93</p><ul><li>\u662FGoogle\u5B98\u65B9\u7684Dart Packages\u4ED3\u5E93\uFF0C\u7C7B\u4F3C\u4E8Enode\u4E2D\u7684npm\u4ED3\u5E93\uFF0CAndroid\u4E2D\u7684jcenter</li></ul></li><li><p>\u5176\u4ED6\u4F9D\u8D56\u65B9\u5F0F</p><ul><li>\u672C\u5730\u5305</li><li>git\u4ED3\u5E93</li></ul></li><li><p>\u8D44\u6E90\u7BA1\u7406</p><ul><li>flutter App \u5B89\u88C5\u5305\u4E2D\u5305\u542B\u4EE3\u7801\u548C\u8D44\u6E90\uFF08assets\uFF09\u4E24\u90E8\u5206\u3002</li><li>assets\u662F\u4F1A\u6253\u5305\u5230\u7A0B\u5E8F\u5B89\u88C5\u5305\u4E2D\u7684\uFF0C\u53EF\u5728\u8FD0\u884C\u65F6\u8BBF\u95EE\u3002</li><li>\u5E38\u89C1\u7C7B\u578B\u7684assets\u5305\u62EC\u9759\u6001\u6570\u636E\uFF0C\u914D\u7F6E\u6587\u4EF6\uFF0C\u56FE\u6807\u548C\u56FE\u7247\u3002</li></ul></li><li><p>\u7279\u5B9A\u5E73\u53F0assets</p><ul><li>\u8BBE\u7F6Eapp\u56FE\u6807</li></ul></li><li><p>flutter\u8C03\u8BD5\u5668</p></li><li><p>Dart\u5206\u6790\u5668</p><ul><li>\u5728\u8FD0\u884C\u4EE3\u7801\u524D\u8FD0\u884Cflutter analyze \u6D4B\u8BD5\u4EE3\u7801,\u8FD9\u4E2A\u5DE5\u5177\u662F\u4E00\u4E2A\u9759\u6001\u4EE3\u7801\u68C0\u67E5\u5DE5\u5177\uFF0C\u662Fdartanalyzer\u5DE5\u5177\u7684\u4E00\u4E2A\u5305\u88C5\uFF0C\u4E3B\u8981\u7528\u4E8E\u5206\u6790\u5E76\u5E2E\u52A9\u5F00\u53D1\u8005\u53D1\u73B0\u53EF\u80FD\u7684\u9519\u8BEF\u3002</li></ul></li><li><p>Dart Observatory(\u8BED\u53E5\u7EA7\u7684\u5355\u6B65\u8C03\u8BD5\u548C\u5206\u6790\u5668)</p><ul><li>observatory\u9ED8\u8BA4\u76D1\u542Chttp://127.0.0.1:8100</li></ul></li><li><p>debugger()\u58F0\u660E</p><ul><li>\u53EF\u4EE5\u4F7F\u7528debugger()\u8BED\u53E5\u63D2\u5165\u7F16\u7A0B\u5F0F\u65AD\u70B9\uFF0Cimport &#39;dart:developer&#39;;</li></ul></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">void</span> <span class="token function">someFunction</span><span class="token punctuation">(</span><span class="token parameter">double offset</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">debugger</span><span class="token punctuation">(</span>when<span class="token operator">:</span>offset <span class="token operator">&gt;</span> <span class="token number">30.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li><p>widget \u6811</p><ul><li>\u8981\u8F6C\u50A8widgets\u6811\u7684\u72B6\u6001\uFF0C\u53EF\u4EE5\u8C03\u7528debugDumpApp().</li><li>\u53EA\u8981\u5E94\u7528\u7A0B\u5E8F\u5DF2\u7ECF\u6784\u5EFA\u4E86\u81F3\u5C11\u4E00\u6B21\uFF08\u5373\u5728\u8C03\u7528builder()\u4E4B\u540E\u7684\u4EFB\u4F55\u65F6\u95F4\uFF09\uFF0C\u53EF\u4EE5\u5728\u5E94\u7528\u7A0B\u5E8F\u672A\u5904\u4E8E\u6784\u5EFA\u9636\u6BB5\uFF08\u5373\uFF0C\u4E0D\u5728build()\u65B9\u6CD5\u5185\u8C03\u7528\uFF09\u7684\u4EFB\u4F55\u65F6\u95F4\u8C03\u7528\u6B64\u65B9\u6CD5\uFF08\u5728\u8C03\u7528runApp()\u4E4B\u540E\uFF09</li></ul></li><li><p>flutter \u5F02\u5E38\u6355\u83B7</p></li><li><p>dart\u5355\u7EBF\u7A0B\u6A21\u578B</p></li><li><p>main\u51FD\u6570\u4E3A\u5E94\u7528\u7A0B\u5E8F\u7684\u5165\u53E3\uFF0Cmain\u51FD\u6570\u4E2D\u8C03\u7528runApp()\uFF0C\u7528\u4E8E\u542F\u52A8flutter\u5E94\u7528\u3002runAPP()\u63A5\u6536\u4E00\u4E2Awidget\u53C2\u6570</p></li><li><p>StatelessWidget\uFF1A\u65E0\u72B6\u6001\u7EC4\u4EF6\u3002</p></li><li><p>StatefulWidget:\u4E00\u4E2A\u6709\u72B6\u6001\u7684\u7EC4\u4EF6\uFF0C\u8FD9\u4E9B\u72B6\u6001\u5728widget\u751F\u547D\u5468\u671F\u4E2D\u53EF\u4EE5\u53D8\u5316</p></li><li><p>MaterialApp\u662FMaterial\u5E93\u4E2D\u63D0\u4F9B\u7684Flutter APP\u6846\u67B6\uFF0C\u901A\u8FC7\u5B83\u53EF\u4EE5\u8BBE\u7F6E\u5E94\u7528\u7684\u540D\u79F0\u3001\u4E3B\u9898\u3001\u8BED\u8A00\u3001\u9996\u9875\u53CA\u8DEF\u7531\u5217\u8868\u7B49\u3002\u5B83\u4E5F\u662F\u4E00\u4E2Awidget</p></li><li><p>myApp\u7C7B(\u8BBE\u7F6E\u7684\u5DE5\u7A0B\u540D)\uFF1A\u4EE3\u8868flutter\u5E94\u7528\uFF0C\u7EE7\u627F\u81EAstatelesswidget\u7C7B\uFF0C\u610F\u5473\u7740\u5E94\u7528\u672C\u8EAB\u4E5F\u662F\u4E00\u4E2Awidget\u3002flutter\u5728\u6784\u5EFA\u9875\u9762\u65F6\uFF0C\u4F1A\u8C03\u7528\u7EC4\u4EF6\u7684build\u65B9\u6CD5\uFF0Cwidget\u7684\u4E3B\u8981\u5DE5\u4F5C\u5C31\u662F\u63D0\u4F9B\u4E00\u4E2Abuild()\u65B9\u6CD5\u6765\u63CF\u8FF0\u5982\u4F55\u6784\u5EFAUI\u754C\u9762\uFF08\u901A\u5E38\u662F\u901A\u8FC7\u7EC4\u5408\u3001\u62FC\u88C5\u5176\u4ED6\u57FA\u7840widget\uFF09</p></li><li><p>\u6784\u5EFAUI\u754C\u9762\u7684\u903B\u8F91\u5728build\u65B9\u6CD5\u4E2D\uFF0C</p></li><li><p>Scaffold\uFF1Amaterial\u5E93\u4E2D\u63D0\u4F9B\u7684\u9875\u9762\u811A\u624B\u67B6\uFF0C\u63D0\u4F9B\u9ED8\u8BA4\u7684\u5BFC\u822A\u680F\u3001\u6807\u9898\u548C\u5305\u542B\u4E3B\u5C4F\u5E55widget\u6811\u7684body\u5C5E\u6027\u3002</p></li><li><p>Navigator\uFF1A\u4E00\u4E2A\u8DEF\u7531\u7BA1\u7406\u7EC4\u4EF6\uFF0C\u63D0\u4F9B\u6253\u5F00\u548C\u9000\u51FA\u8DEF\u7531\u9875\u65B9\u6CD5\u3002</p></li><li><p>MaterialPageRoute\u7EE7\u627F\u81EAPageRoute\u7C7B\uFF0CPageRoute\u7C7B\u662F\u4E00\u4E2A\u62BD\u8C61\u7C7B\uFF0C\u8868\u793A\u5360\u6709\u6574\u4E2A\u5C4F\u5E55\u7A7A\u95F4\u7684\u4E00\u4E2A\u6A21\u6001\u8DEF\u7531\u9875\u9762\uFF0C\u5B83\u8FD8\u5B9A\u4E49\u4E86\u8DEF\u7531\u6784\u5EFA\u53CA\u5207\u6362\u65F6\u8FC7\u6E21\u52A8\u753B\u7684\u76F8\u5173\u63A5\u53E3\u53CA\u5C5E\u6027\u3002</p></li><li><p>builder:\u662F\u4E00\u4E2AwidgetBuilder\u7C7B\u578B\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u4F5C\u7528\uFF1A\u6784\u5EFA\u8DEF\u7531\u9875\u9762\u7684\u5177\u4F53\u5185\u5BB9\uFF0C\u8FD4\u56DE\u503C\u662F\u4E00\u4E2Awidget\u3002</p></li><li><p>settings\uFF1A\u5305\u542B\u8DEF\u7531\u7684\u914D\u7F6E\u4FE1\u606F\uFF0C\u5982\u8DEF\u7531\u540D\u79F0\u3001\u662F\u5426\u521D\u59CB\u8DEF\u7531\uFF08\u9996\u9875\uFF09</p></li></ul><h3 id="flutter\u5305\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#flutter\u5305\u7BA1\u7406" aria-hidden="true">#</a> flutter\u5305\u7BA1\u7406</h3><ul><li>flutter\u4F7F\u7528\u914D\u7F6E\u6587\u4EF6<code>pubspec.yaml</code>\u6765\u7BA1\u7406\u4F9D\u8D56</li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment">#pubspec.yaml</span>
<span class="token key atrule">name</span><span class="token punctuation">:</span> flutter_action
<span class="token key atrule">description</span><span class="token punctuation">:</span> First Flutter application.

<span class="token key atrule">version</span><span class="token punctuation">:</span> 1.0.0+1

<span class="token key atrule">dependencies</span><span class="token punctuation">:</span>
    <span class="token key atrule">flutter</span><span class="token punctuation">:</span>
      <span class="token key atrule">sdk</span><span class="token punctuation">:</span> flutter
    <span class="token key atrule">cupertino_icno</span><span class="token punctuation">:</span> ^0.1.2
  
<span class="token key atrule">dev_dependencies</span><span class="token punctuation">:</span>
  <span class="token key atrule">flutter_test</span><span class="token punctuation">:</span>
    <span class="token key atrule">sdk</span><span class="token punctuation">:</span> flutter

<span class="token key atrule">flutter</span><span class="token punctuation">:</span>
  <span class="token key atrule">uses-material-design</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><ul><li><p>name\uFF1A\u5E94\u7528\u6216\u5305\u540D\u79F0</p></li><li><p>description\uFF1A\u5E94\u7528\u6216\u5305\u7684\u63CF\u8FF0\u3001\u7B80\u4ECB</p></li><li><p>version\uFF1A\u5E94\u7528\u6216\u5305\u7684\u7248\u672C\u53F7</p></li><li><p>dependencies\uFF1A\u5E94\u7528\u6216\u5305\u4F9D\u8D56\u7684\u5176\u4ED6\u5305\u6216\u63D2\u4EF6</p></li><li><p>dev_dependencies\uFF1A\u5F00\u53D1\u73AF\u5883\u4F9D\u8D56\u7684\u5DE5\u5177\u5305\uFF08\u800C\u4E0D\u662Fflutter\u5E94\u7528\u672C\u8EAB\u4F9D\u8D56\u7684\u5305\uFF09</p></li><li><p>flutter\uFF1Aflutter\u76F8\u5173\u7684\u914D\u7F6E\u9009\u9879</p></li><li><p>\u6CE8\uFF1A\u82E5\u5F00\u53D1\u7684flutter\u5E94\u7528\u672C\u8EAB\u4F9D\u8D56\u67D0\u4E2A\u5305\uFF0C\u6211\u4EEC\u9700\u8981\u5C06\u4F9D\u8D56\u7684\u5305\u6DFB\u52A0\u5230<code>dependencies</code>\u4E0B\u3002</p></li></ul><h3 id="pub\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#pub\u4ED3\u5E93" aria-hidden="true">#</a> Pub\u4ED3\u5E93</h3>`,16),d={href:"https://pub.dev/",target:"_blank",rel:"noopener noreferrer"},k=s("PUb"),b=s("\u662FGoogle\u5B98\u65B9\u7684Dart Package\u4ED3\u5E93\uFF0C\u7C7B\u4F3C\u4E8Enode\u4E2D\u7684npm\u4ED3\u5E93"),m=n("h4",{id:"\u793A\u4F8B",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u793A\u4F8B","aria-hidden":"true"},"#"),s(" \u793A\u4F8B")],-1),g=n("li",null,[n("p",null,[s("\u5B9E\u73B0\u4E00\u4E2A\u663E\u793A\u968F\u673A\u5B57\u7B26\u4E32\u7684widget\uFF0C\u8981\u7528\u5230"),n("code",null,"english_words"),s("\u8FD9\u4E2A\u5F00\u6E90\u5305\uFF0C\u5176\u4E2D\u5305\u542B\u6570\u5343\u4E2A\u5E38\u7528\u7684\u82F1\u6587\u5355\u8BCD\u3002")])],-1),h=l(`<p>\u6B65\u9AA4\uFF1A</p><ul><li>1.\u5728pub\u4E0A\u627E\u5230<code>english_worlds</code>\u5305\uFF0C\u5E76\u786E\u5B9A\u6700\u65B0\u7248\u672C\u53F7\u53CA\u662F\u5426\u652F\u6301flutter\u3002</li><li>2.\u5C06<code>english_words</code>\u6DFB\u52A0\u5230\u4F9D\u8D56\u5217\u8868\u4E2D\uFF1A</li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">dependencies</span><span class="token punctuation">:</span>
  <span class="token key atrule">flutter</span><span class="token punctuation">:</span>
    <span class="token key atrule">sdk</span><span class="token punctuation">:</span> flutter

  <span class="token key atrule">cupertino_icons</span><span class="token punctuation">:</span> ^0.1.0
  <span class="token comment"># \u65B0\u6DFB\u52A0\u7684\u4F9D\u8D56</span>
  <span class="token key atrule">english_words</span><span class="token punctuation">:</span> ^3.1.3
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,3),_=s("3.\u4E0B\u8F7D\u5305 "),f={href:"https://book.flutterchina.club/chapter2/flutter_package_mgr.html",target:"_blank",rel:"noopener noreferrer"},v=s("\u64CD\u4F5C\u65B9\u5F0F"),y=l(`<li><p>4.\u5F15\u5165<code>english_wods</code>\u5305</p><div class="language-dart ext-dart line-numbers-mode"><pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&#39;package:english_words/english_words.dart&#39;</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>5.\u4F7F\u7528\u8FD9\u4E2A\u5305\u6765\u751F\u6210\u968F\u673A\u5B57\u7B26\u4E32</p></li>`,2),x=l(`<h4 id="\u5176\u4ED6\u4F9D\u8D56\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6\u4F9D\u8D56\u65B9\u5F0F" aria-hidden="true">#</a> \u5176\u4ED6\u4F9D\u8D56\u65B9\u5F0F</h4><ul><li><p>\u9664\u4E86\u4F9D\u8D56Pub\u4ED3\u5E93\uFF0C\u8FD8\u53EF\u4EE5\u4F9D\u8D56\u672C\u5730\u5305\u548Cgit\u5305</p></li><li><p>\u672C\u5730\u5305\uFF1A</p></li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">dependencies</span><span class="token punctuation">:</span>
    <span class="token key atrule">pkg1</span><span class="token punctuation">:</span>
        <span class="token key atrule">path</span><span class="token punctuation">:</span> ../../code/pkg1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>\u4F9D\u8D56Git\uFF1A</li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">dependencies</span><span class="token punctuation">:</span>
  <span class="token key atrule">pkg1</span><span class="token punctuation">:</span>
    <span class="token key atrule">git</span><span class="token punctuation">:</span>
      <span class="token key atrule">url</span><span class="token punctuation">:</span> git<span class="token punctuation">:</span>//github.com/xxx/pkg1.git
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">dependencies</span><span class="token punctuation">:</span>
  <span class="token key atrule">package1</span><span class="token punctuation">:</span>
    <span class="token key atrule">git</span><span class="token punctuation">:</span>
      <span class="token key atrule">url</span><span class="token punctuation">:</span> git<span class="token punctuation">:</span>//github.com/flutter/packages.git
      <span class="token key atrule">path</span><span class="token punctuation">:</span> packages/package1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,6),w={href:"https://www.dartlang.org/tools/pub/dependencies",target:"_blank",rel:"noopener noreferrer"},j=s("\u8865\u5145\u9605\u8BFB"),P=n("h3",{id:"\u8D44\u6E90\u7BA1\u7406",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u8D44\u6E90\u7BA1\u7406","aria-hidden":"true"},"#"),s(" \u8D44\u6E90\u7BA1\u7406")],-1),R=n("li",null,[n("p",null,[s("\u7528"),n("code",null,"pubspec.yaml"),s("\u6765\u7BA1\u7406\u8D44\u6E90")])],-1),A={href:"https://book.flutterchina.club/chapter2/flutter_assets_mgr.html",target:"_blank",rel:"noopener noreferrer"},S=s("\u8BE6\u7EC6\u53C2\u8003");function M(N,B){const a=t("ExternalLinkIcon");return i(),o(u,null,[r,n("ul",null,[n("li",null,[n("a",d,[k,e(a)]),b])]),m,n("ul",null,[g,n("li",null,[h,n("ul",null,[n("li",null,[n("p",null,[_,n("a",f,[v,e(a)])])]),y])])]),x,n("blockquote",null,[n("p",null,[n("a",w,[j,e(a)])])]),P,n("ul",null,[R,n("li",null,[n("p",null,[n("a",A,[S,e(a)])])])])],64)}var D=p(c,[["render",M],["__file","2020-03-01-flutterNote02.html.vue"]]);export{D as default};
