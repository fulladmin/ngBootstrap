ng-bootstrap-directives
=======================

animatable angular-js directives for bootsrap-js components


<h3 class="with-border"><i class="font-icon br-globe"></i> Angular Boostrap direcvtives <code style="text-transform:initial">ngBoostrap.js</code></h3>
<span class="help-block">
  In generally, there are many components written in angular.js to control boostrap.js components. However, lots of them are not efficient and required new learning.
 Even, some of them make boostrap unusable.
</span>
 <span class="help-block">
  In <code>ng-boostrap.js</code> we have tried to make use of <code>boostrap.js</code> own functionality as we can. Because, we think that <code>boostrap.js</code> is optimized and well designed framework.
  </span>
<span class="help-block">
  In <code>ng-boostrap.js</code> many directives, there is no change on default <code>boostrap.js</code> usage. You don't need new learning. We just make them animatable. Namely, we add animation options to them.
 </span>
 

<h3 class="with-border"><i class="font-icon br-globe"></i> Dropdown directive</h3>
<span class="help-block">
 There is no additional learning for dropdown. Just add the below options to the element has class <code>dropdown</code>
</span>
                <span class="help-block">
                    <code>data-animation</code> : default is 'sing'<br>
                    <code>data-speed</code> : default is 'fast'<br>
                </span>

<pre style="background:#fff;color:#000"><span style="color:#1c02ff">&lt;<span style="font-weight:700">ul</span> <span style="font-style:italic">class</span>=<span style="color:#036a07">"nav navbar-nav"</span>&gt;</span>
 <span style="color:#1c02ff">&lt;<span style="font-weight:700">li</span> <span style="font-style:italic">class</span>=<span style="color:#036a07">"dropdown"</span> <span style="font-style:italic">data-animation</span>=<span style="color:#036a07">"flip-x"</span> <span style="font-style:italic">data-speed</span>=<span style="color:#036a07">"fast"</span>&gt;</span>
 <span style="color:#1c02ff">&lt;<span style="font-weight:700">a</span> <span style="font-style:italic">id</span>=<span style="color:#036a07">"drop1"</span> <span style="font-style:italic">href</span>=<span style="color:#036a07">"#"</span> <span style="font-style:italic">role</span>=<span style="color:#036a07">"button"</span> <span style="font-style:italic">class</span>=<span style="color:#036a07">"dropdown-toggle"</span> <span style="font-style:italic">data-toggle</span>=<span style="color:#036a07">"dropdown"</span>&gt;</span>Dropdown <span style="color:#1c02ff">&lt;<span style="font-weight:700">b</span> <span style="font-style:italic">class</span>=<span style="color:#036a07">"caret"</span>&gt;&lt;/<span style="font-weight:700">b</span>&gt;</span><span style="color:#1c02ff">&lt;/<span style="font-weight:700">a</span>&gt;</span>
 <span style="color:#1c02ff">&lt;<span style="font-weight:700">ul</span> <span style="font-style:italic">class</span>=<span style="color:#036a07">"dropdown-menu"</span> <span style="font-style:italic">role</span>=<span style="color:#036a07">"menu"</span> <span style="font-style:italic">aria-labelledby</span>=<span style="color:#036a07">"drop1"</span>&gt;</span>
<span style="color:#1c02ff">&lt;<span style="font-weight:700">li</span> <span style="font-style:italic">role</span>=<span style="color:#036a07">"presentation"</span>&gt;</span><span style="color:#1c02ff">&lt;<span style="font-weight:700">a</span> <span style="font-style:italic">role</span>=<span style="color:#036a07">"menuitem"</span> <span style="font-style:italic">tabindex</span>=<span style="color:#036a07">"-1"</span> <span style="font-style:italic">href</span>=<span style="color:#036a07">"#"</span>&gt;</span>Action<span style="color:#1c02ff">&lt;/<span style="font-weight:700">a</span>&gt;</span><span style="color:#1c02ff">&lt;/<span style="font-weight:700">li</span>&gt;</span>
 ....                                           
 <span style="color:#1c02ff">&lt;/<span style="font-weight:700">ul</span>&gt;</span>
<span style="color:#1c02ff">&lt;/<span style="font-weight:700">li</span>&gt;</span>                                
<span style="color:#1c02ff">&lt;/<span style="font-weight:700">ul</span>&gt;</span>
</pre>
<h3><a href="http://angularanimation.ya.com.tr/ngboostrap.html">
For more information an demos, please click here
</a></h3>
