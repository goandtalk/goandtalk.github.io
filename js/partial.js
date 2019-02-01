window.gtpb = window.gtpb || {};


gtpb.partials = gtpb.partials || {};
  
  
    gtpb.partials['goandtalk/cover/default'] = `<section 675275c791df5c494218febd9c0cde06eea2ae6b mv-storage="idb_array" mv-app="{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}" mv-bar="edit save" 35fe3a9616151be1e9a9abc33ece88d44bd47528
  class="gt-mv-on relative flex flex-column " ><div class="{enc{! o.__get(it, \u0027appearance.section_background\u0027) || \u0027bg-black-70\u0027 }enc}
  {enc{! o.__get(it, \u0027appearance.slide_animation\u0027) || \u0027\u0027 }enc}"
  675275c791df5c494218febd9c0cde06eea2ae6b  mv-attribute="class" mv-value="section_background & ' ' & slide_animation" 35fe3a9616151be1e9a9abc33ece88d44bd47528>
    



<nav class="relative o-90  {tf{? o.edit_mode }tf}[if(page_app.header_class,page_app.header_class,site_app.params.header_class)]{tf{??}tf}{enc{! o.__get(o, \u0027header_class\u0027) || \u0027bg-transparent\u0027 }enc}{tf{?}tf}
 "  675275c791df5c494218febd9c0cde06eea2ae6b property="menu" 35fe3a9616151be1e9a9abc33ece88d44bd47528 >
  <div class="w-90 mw9 center ph2 pv4 cf flex justify-between tracked" >

    <span class="fl self-center">
      <a href="/" class="v-mid " title="Home">
        <img data-role="logo" class="h2 v-mid dim" src="6f171f7af664405d6c48d439c7dcf034b904ccf1" />
      </a>
    </span>

    
    <ul class="list dn fl cf ma0 di-l flex-l pv1 ph4-l justify-{tf{? o.edit_mode }tf}[if(page_app.main_menu_align,page_app.main_menu_align,site_app.params.main_menu_align)]{tf{??}tf}{enc{! o.__get(o, \u0027main_menu_align\u0027) || \u0027start\u0027 }enc}{tf{?}tf}
 flex-grow-1
    {enc{! o.__get(it, \u0027appearance.nav_link_color\u0027) || \u0027\u0027 }enc}
    " >
      
      
      
        {tf{? o.__get(o,\u0027site.menu.global.0\u0027) }tf}

        {loop{~ o.site.menu.global :item:idx }loop}


        <li class="fl" 675275c791df5c494218febd9c0cde06eea2ae6b property="global" mv-multiple 35fe3a9616151be1e9a9abc33ece88d44bd47528>
          <a href="dd670833e00d695c78df75d31d05c27606aca294" 675275c791df5c494218febd9c0cde06eea2ae6b property="url" 35fe3a9616151be1e9a9abc33ece88d44bd47528  class="link ph3 white-80">
            <span 675275c791df5c494218febd9c0cde06eea2ae6b property="name" 35fe3a9616151be1e9a9abc33ece88d44bd47528> {enc{! o.__get(item, \u0027name\u0027) || \u0027\u0027 }enc}</span>
          </a>
        </li>

        {loop{~}loop}

        {tf{??}tf}

          675275c791df5c494218febd9c0cde06eea2ae6b 
          <li class="fl" property="global" mv-multiple >
            <a href="#"  property="url" class="link ph3 white-80">
              <span  property="name" >Home</span>
            </a>
          </li>
          35fe3a9616151be1e9a9abc33ece88d44bd47528
        35fe3a9616151be1e9a9abc33ece88d44bd47528
        675275c791df5c494218febd9c0cde06eea2ae6b <button type="button" title="add item" class="v-mid dn br1 mv-add mv-ui mv-add-global">+</button> 35fe3a9616151be1e9a9abc33ece88d44bd47528

      
    </ul>
    
    <ul class="list fr cf ma0 ph3 ph4-l pv1 flex justify-end
    {enc{! o.__get(it, \u0027appearance.abbr_link_color\u0027) || \u0027\u0027 }enc}
    " >
    
      {tf{? o.__get(o,\u0027site.menu.iconmenu.0\u0027) }tf}

      {loop{~ o.site.menu.iconmenu :item:idx }loop}


      <li class="fl" 675275c791df5c494218febd9c0cde06eea2ae6b property="iconmenu" mv-multiple 35fe3a9616151be1e9a9abc33ece88d44bd47528>
        <a href="dd670833e00d695c78df75d31d05c27606aca294" 675275c791df5c494218febd9c0cde06eea2ae6b property="url" 35fe3a9616151be1e9a9abc33ece88d44bd47528  class="link ph3 dim white-80">
          <span 675275c791df5c494218febd9c0cde06eea2ae6b title="abbreviation" property="pre" 35fe3a9616151be1e9a9abc33ece88d44bd47528> {enc{! o.__get(item, \u0027pre\u0027) || \u0027\u0027 }enc}</span>
          675275c791df5c494218febd9c0cde06eea2ae6b <span class="dn" title="label in mobile menu" property="name"> {enc{! o.__get(item, \u0027name\u0027) || \u0027\u0027 }enc}  </span> 35fe3a9616151be1e9a9abc33ece88d44bd47528
        </a>
      </li>

      {loop{~}loop}

      {tf{??}tf}

        675275c791df5c494218febd9c0cde06eea2ae6b 
        <li class="fl" property="iconmenu" mv-multiple >
          <a href="#"  property="url" class="link ph3 dim white-80">
            <span  property="pre" >Link</span>
          </a>
        </li>
        35fe3a9616151be1e9a9abc33ece88d44bd47528
      35fe3a9616151be1e9a9abc33ece88d44bd47528
      675275c791df5c494218febd9c0cde06eea2ae6b <button type="button" title="add item" class="v-mid dn br1 mv-add mv-ui mv-add-iconmenu">+</button> 35fe3a9616151be1e9a9abc33ece88d44bd47528

    
    </ul>
  </div>
</nav>



  </div> {tf{? o.edit_mode }tf}


<div class="skip-zoom-clone  min-vh-100 w-100 absolute off-canvas-dashboard
">
  
  <div class="relative w-100 w-90-ns mw7 mt4 vh-100 bg-near-white overflow-y-scroll">
    <div class="bg-white-70 mb1 cf v-mid ph3">
      <span class="pv2 dib">Section Options</span>
      <span title="close" class="fr pv2 ph3 w3 tc orange hover-bg-white" mv-action="invoke('toggleClass', current_tab, '.off-canvas-dashboard', 'active')">X</span>
    </div>
    
    <div class="mb4 mh2 mh3-ns mt2 br1 shadow-4 b--white-30 ph1 ph2-ns pb4">
      

<input hidden property="current_tab" mv-storage="none" value="appearance_cover"/>
<div class="pt1 flex flex-wrap items-stretch">

  
	<button data-toggle-tab="appearance_cover" mv-action="set(current_tab,'appearance_cover')" class="[if(current_tab='appearance_cover', 'bg-white-90 bb-0')] gt-tab-button br1 active pointer ba f6 dib lh-solid ph2 pv2 mb2 ">
		
			<i class="fas fa-font"></i><span class="dn di-ns"> Appearance </span>
		
	</button>&nbsp;

</div>

<div class="tab-content pt3 ">

	
	<div data-pane="appearance_cover" class="gt-tab-pane [if(current_tab='appearance_cover', '', 'dn')] active">
	 
		
		

<div  property="appearance" >
  <h3 class="mt2">Appearance</h3>
  <div class="cf flex flex-wrap ba b--black-05" >
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Section Background 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(section_background, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="section_background" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="solid_background"
          
           value="bg-primary-color-dark"
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',section_background)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            This is the fallback background color when image is not available or disabled.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Action Trigger 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(trigger_class, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="trigger_class" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
           data-list="slide-trigger," 
           value="slide-trigger"
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',trigger_class)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            Remove the class to disable trigger.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Slide Animation 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(slide_animation, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="slide_animation" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="slide_animation"
          
           value=""
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',slide_animation)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            The slide animation during presentation, default to fadeIn if not set. 
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        

        <div>Text Color 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(text_color, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="text_color" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="text_color"
          
           value=""
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',text_color)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        

        <div>Main Nav Color 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(nav_link_color, '')">X</span>
        
        </div>
        <div  mv-action="invoke(&#39;replaceNodeClass&#39;,nav_link_color,&#39;mavo.root.children.menu.children.global.element.parentElement&#39;, &#39;link-&#39;)" 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="nav_link_color" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="link_color"
          
           value=""
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',nav_link_color)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        

        <div>Abbr Link Color 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(abbr_link_color, '')">X</span>
        
        </div>
        <div  mv-action="invoke(&#39;replaceNodeClass&#39;,abbr_link_color,&#39;mavo.root.children.menu.children.iconmenu.element.parentElement&#39;, &#39;link-&#39;)" 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="abbr_link_color" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="link_color"
          
           value=""
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',abbr_link_color)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
      </div>
       
    
  </div>
</div> 

	
	</div>


</div>

    </div>

  </div>
</div>

<div onclick="" class="skip-zoom-clone dn mv-bar f7 tc w-100 absolute top-0 pv1 ph2 bg-white o-10 hover-o-90 ">

  <button type="button" data-action="toggle-base-toolbar" class="manage-section pointer dim br2 pv1 ph2 mh1" title="toggle global setting toolbar ">
    <i class="fas fa-ellipsis-v" data-fa-mask="fas fa-square" data-fa-transform="shrink-2 left-4"></i>
  </button>

  <span class="dn di-ns gt-pos-btns"> 
    <button type="button" data-action="move-up" class="gt-move-up manage-section pointer dim br2 pv1 ph2 mh1" title="move section up"><i class="fas fa-angle-up"></i></button>
    <button type="button" data-action="move-down" class="gt-move-down manage-section pointer dim br2 pv1 ph2 mh1" title="move section down"><i class="fas fa-angle-down"></i></button>
    <button type="button" data-action="insert-section" class="gt-insert-section manage-section pointer dim br2 pv1 ph2 mh1" title="insert section "><i class="fas fa-plus"></i></button>
    
    <button type="button" data-action="delete-section" class="gt-delete-section manage-section pointer dim br2 pv1 ph2 mh2 white bg-orange" title="delete section"><i class="fas fa-trash"></i></button> 
  </span>

  
  <button title="turn editor on" type="button" data-action="toggle-mv-on" class="toggle-mv-on bg-light-green manage-section pointer dim br2 pv1 ph2 mh3" ><i class="fas fa-toggle-off"></i></button>
  
  
  <button type="button" class="gt-setting-toggle dn pointer dim br2 pv1 ph2 mh1" mv-action="invoke('toggleClass', current_tab, '.off-canvas-dashboard', 'active')"><i class="fas fa-cog"></i></button>
  <button title="edit section" type="button" class="mv-edit pointer dn dim br2 pv1 ph2 mh1">Edit</button>
  <button title="save section" type="button" class="mv-save pointer dn dim br2 pv1 ph2 mh1">Save</button>
</div>

{tf{?}tf}



</section>`;
  
    gtpb.partials['goandtalk/cover/hero-dark-background-with-text-at-center'] = `

<section 675275c791df5c494218febd9c0cde06eea2ae6b mv-storage="idb_array" mv-app="{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}" mv-bar="edit save" 35fe3a9616151be1e9a9abc33ece88d44bd47528
  class="gt-mv-on relative min-vh-100 flex flex-column " ><div class="{enc{! o.__get(it, \u0027appearance.section_background\u0027) || \u0027bg-black-70\u0027 }enc}
  {enc{! o.__get(it, \u0027appearance.slide_animation\u0027) || \u0027fadeIn\u0027 }enc}"
  675275c791df5c494218febd9c0cde06eea2ae6b  mv-attribute="class" mv-value="section_background & ' ' & slide_animation" 35fe3a9616151be1e9a9abc33ece88d44bd47528>
    



<figure class="ma0">
	<picture>
    
    <img alt="" 675275c791df5c494218febd9c0cde06eea2ae6b mv-attribute="src" mv-value="image.src" 35fe3a9616151be1e9a9abc33ece88d44bd47528 class="absolute abs-image {tf{? o.edit_mode }tf}[image.animation]{tf{??}tf}{enc{! o.__get(it, \u0027image.animation\u0027) || \u0027\u0027 }enc}{tf{?}tf}
" src="47a10716ab9cfa2da5ba2cc37e033286ea50785c" >
    
  </picture>
</figure>
<span class="absolute absolute--fill
    {enc{! o.__get(it, \u0027image.overlay_background\u0027) || \u0027bg-black-70\u0027 }enc}"
    675275c791df5c494218febd9c0cde06eea2ae6b  mv-attribute="class" mv-value="'absolute absolute--fill ' & overlay_background" 35fe3a9616151be1e9a9abc33ece88d44bd47528></span>



<nav class="relative o-90  {tf{? o.edit_mode }tf}[if(page_app.header_class,page_app.header_class,site_app.params.header_class)]{tf{??}tf}{enc{! o.__get(o, \u0027header_class\u0027) || \u0027bg-transparent\u0027 }enc}{tf{?}tf}
 "  675275c791df5c494218febd9c0cde06eea2ae6b property="menu" 35fe3a9616151be1e9a9abc33ece88d44bd47528 >
  <div class="w-90 mw9 center ph2 pv4 cf flex justify-between tracked" >

    <span class="fl self-center">
      <a href="/" class="v-mid " title="Home">
        <img data-role="logo" class="h2 v-mid dim" src="6f171f7af664405d6c48d439c7dcf034b904ccf1" />
      </a>
    </span>

    
    <ul class="list dn fl cf ma0 di-l flex-l pv1 ph4-l justify-{tf{? o.edit_mode }tf}[if(page_app.main_menu_align,page_app.main_menu_align,site_app.params.main_menu_align)]{tf{??}tf}{enc{! o.__get(o, \u0027main_menu_align\u0027) || \u0027start\u0027 }enc}{tf{?}tf}
 flex-grow-1
    {enc{! o.__get(it, \u0027appearance.nav_link_color\u0027) || \u0027\u0027 }enc}
    " >
      
      
      
        {tf{? o.__get(o,\u0027site.menu.global.0\u0027) }tf}

        {loop{~ o.site.menu.global :item:idx }loop}


        <li class="fl" 675275c791df5c494218febd9c0cde06eea2ae6b property="global" mv-multiple 35fe3a9616151be1e9a9abc33ece88d44bd47528>
          <a href="dd670833e00d695c78df75d31d05c27606aca294" 675275c791df5c494218febd9c0cde06eea2ae6b property="url" 35fe3a9616151be1e9a9abc33ece88d44bd47528  class="link ph3 white-80">
            <span 675275c791df5c494218febd9c0cde06eea2ae6b property="name" 35fe3a9616151be1e9a9abc33ece88d44bd47528> {enc{! o.__get(item, \u0027name\u0027) || \u0027\u0027 }enc}</span>
          </a>
        </li>

        {loop{~}loop}

        {tf{??}tf}

          675275c791df5c494218febd9c0cde06eea2ae6b 
          <li class="fl" property="global" mv-multiple >
            <a href="#"  property="url" class="link ph3 white-80">
              <span  property="name" >Home</span>
            </a>
          </li>
          35fe3a9616151be1e9a9abc33ece88d44bd47528
        35fe3a9616151be1e9a9abc33ece88d44bd47528
        675275c791df5c494218febd9c0cde06eea2ae6b <button type="button" title="add item" class="v-mid dn br1 mv-add mv-ui mv-add-global">+</button> 35fe3a9616151be1e9a9abc33ece88d44bd47528

      
    </ul>
    
    <ul class="list fr cf ma0 ph3 ph4-l pv1 flex justify-end
    {enc{! o.__get(it, \u0027appearance.abbr_link_color\u0027) || \u0027\u0027 }enc}
    " >
    
      {tf{? o.__get(o,\u0027site.menu.iconmenu.0\u0027) }tf}

      {loop{~ o.site.menu.iconmenu :item:idx }loop}


      <li class="fl" 675275c791df5c494218febd9c0cde06eea2ae6b property="iconmenu" mv-multiple 35fe3a9616151be1e9a9abc33ece88d44bd47528>
        <a href="dd670833e00d695c78df75d31d05c27606aca294" 675275c791df5c494218febd9c0cde06eea2ae6b property="url" 35fe3a9616151be1e9a9abc33ece88d44bd47528  class="link ph3 dim white-80">
          <span 675275c791df5c494218febd9c0cde06eea2ae6b title="abbreviation" property="pre" 35fe3a9616151be1e9a9abc33ece88d44bd47528> {enc{! o.__get(item, \u0027pre\u0027) || \u0027\u0027 }enc}</span>
          675275c791df5c494218febd9c0cde06eea2ae6b <span class="dn" title="label in mobile menu" property="name"> {enc{! o.__get(item, \u0027name\u0027) || \u0027\u0027 }enc}  </span> 35fe3a9616151be1e9a9abc33ece88d44bd47528
        </a>
      </li>

      {loop{~}loop}

      {tf{??}tf}

        675275c791df5c494218febd9c0cde06eea2ae6b 
        <li class="fl" property="iconmenu" mv-multiple >
          <a href="#"  property="url" class="link ph3 dim white-80">
            <span  property="pre" >Link</span>
          </a>
        </li>
        35fe3a9616151be1e9a9abc33ece88d44bd47528
      35fe3a9616151be1e9a9abc33ece88d44bd47528
      675275c791df5c494218febd9c0cde06eea2ae6b <button type="button" title="add item" class="v-mid dn br1 mv-add mv-ui mv-add-iconmenu">+</button> 35fe3a9616151be1e9a9abc33ece88d44bd47528

    
    </ul>
  </div>
</nav>

<div class="relative tc-l pa2 pa3-m pa4-l center flex-grow-1 w-90 mw9 flex flex-column " ><div class="flex-auto w-100 white-80 tracked flex flex-column justify-center">
        <div class="tc-l ph3">
          <p 675275c791df5c494218febd9c0cde06eea2ae6b  property="intro" 35fe3a9616151be1e9a9abc33ece88d44bd47528 class="f4 ttu white-60 mv2 mv3-l">
          {enc{! o.__get(it, \u0027intro\u0027) || \u0027\u0027 }enc}
          <a href="#" class="slide-trigger grow ph2 dn di-l " title="View Page as Presentation">
            
            
            
            <img class="v-mid w2"  src="5aff7ad5769b66377c06f3d3195c1ba6c58d9165"   />
          </a>
          </p>
          <div class="{enc{! o.__get(it, \u0027title_class\u0027) || \u0027gold\u0027 }enc}
          {enc{! o.__get(it, \u0027title_font_family\u0027) || \u0027baskerville\u0027 }enc}
          {enc{! o.__get(it, \u0027title_i\u0027) || \u0027\u0027 }enc}
          " 675275c791df5c494218febd9c0cde06eea2ae6b  mv-attribute="class" mv-value="title_class & ' ' & title_font_family & ' ' & title_i" 35fe3a9616151be1e9a9abc33ece88d44bd47528>
            <h1 class="f2 f1-m f-5-l tracked fw4 mb0 lh-title  "
            675275c791df5c494218febd9c0cde06eea2ae6b property="title"  35fe3a9616151be1e9a9abc33ece88d44bd47528>
            {enc{! o.__get(it, \u0027title\u0027) || \u0027\u0027 }enc}
            </h1>
          </div>
          675275c791df5c494218febd9c0cde06eea2ae6b
            
<div class="dn show-in-edit relative w-100 overflow-visible">

  <div class="gt-label">
    <i class="fas fa-heading bg-black-40 gray pv2 ph4 br0 pointer"
    mv-action="invoke('toggleClass', section_background, '.inline-title-options', 'dn')"
    ></i>
  </div>
  <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible">
    Toggle title formatting options
  </div>

  <div class="absolute dn inline-title-options left-0 right-0 top-2 pa3 pb5 z-1 bg-light-gray mid-gray">

    <div class="flex flex-wrap cf">
      <div class="relative w-100  w-50-ns  ph1 fl pt2 pb3 ">
        <div>Title Class
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(title_class, '')">x</span>
          <span title="toggle italic" class="mh2 bg-dark-gray white f7 ph1 br-100 i tracked-mega" mv-action="set(title_i, if(title_i,'','i'))">I</span>
          <span title="toggle center align text" class="mh2 bg-dark-gray white f7 ph1 br-100" mv-action="set(title_align, if(title_align = 'tc','ts','tc'))">
            <i class="fas fa-align-center"></i>
          </span>
        </div>
        <div class=" flex  flex-nowrap   pt1 cf items-center mid-gray">
          <input property="title_class" type="text" class="flex-auto  dropdown-input  h2 w-100  bg-transparent  br0 b--black-10 fl" data-path="text_color" value="gold" data-minchars="0" >
          <button type="button" mv-action="invoke('toggleDDInput',title_class)" class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl" title="click to open dropdown list">
            <span class="f6 bg-white-80 br-100 ph1 ">v</span>
          </button>
        </div>
      </div>
      <div class="relative w-100  w-50-ns  ph1 fl pt2 pb3 ">
        <div>Title Font Family             <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(title_font_family, '')">x</span>  </div>
        <div class=" flex  flex-nowrap   pt1 cf items-center mid-gray">
          <input property="title_font_family" type="text" class="flex-auto  dropdown-input  h2 w-100  bg-transparent  br0 b--black-10 fl" data-path="serif_font_family" value="baskerville" data-minchars="0">
          <button type="button" mv-action="invoke('toggleDDInput',title_font_family)" class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl" title="click to open dropdown list">
            <span class="f6 bg-white-80 br-100 ph1 ">v</span>
          </button>
        </div>
      </div>
    </div>
    <input hidden property="title_i">
    <input hidden property="title_align" value="tc">
  </div>
</div>

          35fe3a9616151be1e9a9abc33ece88d44bd47528
          <div class="
          {enc{! o.__get(it, \u0027appearance.text_class\u0027) || \u0027\u0027 }enc}
          " 675275c791df5c494218febd9c0cde06eea2ae6b  mv-attribute="class" mv-value="text_class" 35fe3a9616151be1e9a9abc33ece88d44bd47528>
            <h2 class="fw1 f3 white-80 mt3 mb4 " 675275c791df5c494218febd9c0cde06eea2ae6b  property="description" 35fe3a9616151be1e9a9abc33ece88d44bd47528>
              {enc{! o.__get(it, \u0027description\u0027) || \u0027\u0027 }enc}
            </h2>
          </div>
          <div >
            <span 675275c791df5c494218febd9c0cde06eea2ae6b property="cta" 35fe3a9616151be1e9a9abc33ece88d44bd47528>
              <span class="{enc{! o.__get(it, \u0027appearance.trigger_class\u0027) || \u0027\u0027 }enc}"
              675275c791df5c494218febd9c0cde06eea2ae6b mv-attribute="class" mv-value="trigger_class" 35fe3a9616151be1e9a9abc33ece88d44bd47528
              >
                
                

                <a class="f6 no-underline grow dib v-mid bg-primary-color b--primary-color white ba ph3 pv2 mb3 "
                675275c791df5c494218febd9c0cde06eea2ae6b  property="url" 35fe3a9616151be1e9a9abc33ece88d44bd47528
                 href="6aa54d91498069cf3ec3c6d46443b0b765c6cec2" >
                  <span 675275c791df5c494218febd9c0cde06eea2ae6b  property="name"  35fe3a9616151be1e9a9abc33ece88d44bd47528 >
                  {enc{! o.__get(it, \u0027cta.name\u0027) || \u0027Quick Start\u0027 }enc}
                  </span>
                </a>
              </span>
            </span>

            <span class="ph3"></span>

            
            
            
            <span 675275c791df5c494218febd9c0cde06eea2ae6b property="cta2" 35fe3a9616151be1e9a9abc33ece88d44bd47528>
            <a class="f6 no-underline grow dib v-mid white ba b--white ph3 pv2 mb3 "
            675275c791df5c494218febd9c0cde06eea2ae6b property="url" 35fe3a9616151be1e9a9abc33ece88d44bd47528
            href="b1d98aff0d513d54c95f98187a86801cfeb2b837" >
              <span 675275c791df5c494218febd9c0cde06eea2ae6b property="name" 35fe3a9616151be1e9a9abc33ece88d44bd47528 >
              {enc{! o.__get(it, \u0027cta2.name\u0027) || \u0027Explore\u0027 }enc}
              </span>
            </a>
            </span>
          </div>
        </div>

      </div>

      <div class="vh-25"></div>
    </div> 
  </div>  {tf{? o.edit_mode }tf}


<div class="skip-zoom-clone  min-vh-100 w-100 absolute off-canvas-dashboard
">
  
  <div class="relative w-100 w-90-ns mw7 mt4 vh-100 bg-near-white overflow-y-scroll">
    <div class="bg-white-70 mb1 cf v-mid ph3">
      <span class="pv2 dib">Section Options</span>
      <span title="close" class="fr pv2 ph3 w3 tc orange hover-bg-white" mv-action="invoke('toggleClass', current_tab, '.off-canvas-dashboard', 'active')">X</span>
    </div>
    
    <div class="mb4 mh2 mh3-ns mt2 br1 shadow-4 b--white-30 ph1 ph2-ns pb4">
      

<input hidden property="current_tab" mv-storage="none" value="appearance_cover"/>
<div class="pt1 flex flex-wrap items-stretch">

  
	<button data-toggle-tab="appearance_cover" mv-action="set(current_tab,'appearance_cover')" class="[if(current_tab='appearance_cover', 'bg-white-90 bb-0')] gt-tab-button br1 active pointer ba f6 dib lh-solid ph2 pv2 mb2 ">
		
			<i class="fas fa-font"></i><span class="dn di-ns"> Appearance </span>
		
	</button>&nbsp;

  
	<button data-toggle-tab="image" mv-action="set(current_tab,'image')" class="[if(current_tab='image', 'bg-white-90 bb-0')] gt-tab-button br1  pointer ba f6 dib lh-solid ph2 pv2 mb2 ">
		
			<i class="fas fa-image"></i><span class="dn di-ns"> Background Image </span>
		
	</button>&nbsp;

</div>

<div class="tab-content pt3 ">

	
	<div data-pane="appearance_cover" class="gt-tab-pane [if(current_tab='appearance_cover', '', 'dn')] active">
	 
		
		

<div  property="appearance" >
  <h3 class="mt2">Appearance</h3>
  <div class="cf flex flex-wrap ba b--black-05" >
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Section Background 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(section_background, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="section_background" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="solid_background"
          
           value="bg-black-70"
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',section_background)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            This is the fallback background color when image is not available or disabled.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Action Trigger 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(trigger_class, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="trigger_class" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
           data-list="slide-trigger," 
           value="slide-trigger"
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',trigger_class)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            Remove the class to disable trigger.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Slide Animation 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(slide_animation, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="slide_animation" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="slide_animation"
          
           value=""
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',slide_animation)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            The slide animation during presentation, default to fadeIn if not set. 
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        

        <div>Text Color 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(text_color, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="text_color" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="text_color"
          
           value=""
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',text_color)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        

        <div>Main Nav Color 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(nav_link_color, '')">X</span>
        
        </div>
        <div  mv-action="invoke(&#39;replaceNodeClass&#39;,nav_link_color,&#39;mavo.root.children.menu.children.global.element.parentElement&#39;, &#39;link-&#39;)" 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="nav_link_color" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="link_color"
          
           value=""
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',nav_link_color)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        

        <div>Abbr Link Color 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(abbr_link_color, '')">X</span>
        
        </div>
        <div  mv-action="invoke(&#39;replaceNodeClass&#39;,abbr_link_color,&#39;mavo.root.children.menu.children.iconmenu.element.parentElement&#39;, &#39;link-&#39;)" 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="abbr_link_color" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="link_color"
          
           value=""
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',abbr_link_color)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
      </div>
       
    
  </div>
</div> 

	
	</div>

	
	<div data-pane="image" class="gt-tab-pane [if(current_tab='image', '', 'dn')] ">
	 
		
		

<div  property="image" >
  <h3 class="mt2">Background Image</h3>
  <div class="cf flex flex-wrap ba b--black-05" >
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Source URL 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(src, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="src" 
          type="text" 
          class="flex-auto  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
          
           value="https://source.unsplash.com/sK1hW5knKkw/1536x864"
          data-minchars="0" 
          />
          
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            This is the full URL of the background image.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Overlay Background 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(overlay_background, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="overlay_background" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="overlay_background"
          
           value="bg-black-70"
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',overlay_background)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            This is the overlay over background image to make text readable.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Image Animation 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(animation, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="animation" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="slow_motion"
          
           value="slowUp"
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',animation)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            This is the slow motion animation of the image.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Auto Responsive 
        
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input property="responsive" type="checkbox" 
          class=""
          
          id="chk-image-responsive-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
          />
          <label class="flex-auto ph2" for="chk-image-responsive-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            Enable
          </label>
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            If enabled, dynamic images will be requested from Unsplash using the image id provided.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 [if(!responsive,&#39;dn&#39;)]">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Unsplash Image ID  <i class="pointer ph2 fas fa-link" mv-action="set(src,'https://source.unsplash.com/' & unsplash_image_id & '/' & if(size, size, '1366x768'))"> </i>

        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(unsplash_image_id, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="unsplash_image_id" 
          type="text" 
          class="flex-auto  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
          
           value=""
          data-minchars="0" 
          />
          
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            This is the image id from Unsplash. Click on the link icon to generate the image link. 
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 [if(!responsive,&#39;dn&#39;)]">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Size in Pixels 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(size, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input  mv-storage="none" 
           property="size" 
          type="text" 
          class="flex-auto  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
          
           value=""
          data-minchars="0" 
          />
          
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            The size of image width and height in pixels, default to 1366x768.
          </div>
        
      </div>
       
    
  </div>
</div> 

	
	</div>


</div>

    </div>

  </div>
</div>

<div onclick="" class="skip-zoom-clone dn mv-bar f7 tc w-100 absolute top-0 pv1 ph2 bg-white o-10 hover-o-90 ">

  <button type="button" data-action="toggle-base-toolbar" class="manage-section pointer dim br2 pv1 ph2 mh1" title="toggle global setting toolbar ">
    <i class="fas fa-ellipsis-v" data-fa-mask="fas fa-square" data-fa-transform="shrink-2 left-4"></i>
  </button>

  <span class="dn di-ns gt-pos-btns"> 
    <button type="button" data-action="move-up" class="gt-move-up manage-section pointer dim br2 pv1 ph2 mh1" title="move section up"><i class="fas fa-angle-up"></i></button>
    <button type="button" data-action="move-down" class="gt-move-down manage-section pointer dim br2 pv1 ph2 mh1" title="move section down"><i class="fas fa-angle-down"></i></button>
    <button type="button" data-action="insert-section" class="gt-insert-section manage-section pointer dim br2 pv1 ph2 mh1" title="insert section "><i class="fas fa-plus"></i></button>
    <button type="button" data-action="clone-section" class="gt-clone-section manage-section pointer dim br2 pv1 ph2 mh1" title="clone section"><i class="fas fa-clone"></i></button>
    <button type="button" data-action="delete-section" class="gt-delete-section manage-section pointer dim br2 pv1 ph2 mh2 white bg-orange" title="delete section"><i class="fas fa-trash"></i></button> 
  </span>

  
  <button title="turn editor on" type="button" data-action="toggle-mv-on" class="toggle-mv-on bg-light-green manage-section pointer dim br2 pv1 ph2 mh3" ><i class="fas fa-toggle-off"></i></button>
  
  
  <button type="button" class="gt-setting-toggle dn pointer dim br2 pv1 ph2 mh1" mv-action="invoke('toggleClass', current_tab, '.off-canvas-dashboard', 'active')"><i class="fas fa-cog"></i></button>
  <button title="edit section" type="button" class="mv-edit pointer dn dim br2 pv1 ph2 mh1">Edit</button>
  <button title="save section" type="button" class="mv-save pointer dn dim br2 pv1 ph2 mh1">Save</button>
</div>

{tf{?}tf}

  

</section>


`;
  
    gtpb.partials['goandtalk/cover/two-columns-text-and-image-with-nav'] = `










<section 675275c791df5c494218febd9c0cde06eea2ae6b mv-storage="idb_array" mv-app="{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}" mv-bar="edit save" 35fe3a9616151be1e9a9abc33ece88d44bd47528
  class="alternate gt-mv-on relative flex flex-column min-vh-100" ><div class="flex-auto flex flex-column justify-center
  {enc{! o.__get(it, \u0027appearance.section_background\u0027) || \u0027bg-black-70\u0027 }enc}
  {enc{! o.__get(it, \u0027appearance.slide_animation\u0027) || \u0027fadeIn\u0027 }enc}
  {enc{! o.__get(it, \u0027appearance.text_color\u0027) || \u0027white-80\u0027 }enc}
  "
  675275c791df5c494218febd9c0cde06eea2ae6b  mv-attribute="class" mv-value="section_background & ' ' & text_color & ' flex-auto flex flex-column justify-center ' & slide_animation" 35fe3a9616151be1e9a9abc33ece88d44bd47528>

    



<figure class="ma0">
	<picture>
    
    <img alt="" 675275c791df5c494218febd9c0cde06eea2ae6b mv-attribute="src" mv-value="image.src" 35fe3a9616151be1e9a9abc33ece88d44bd47528 class="absolute abs-image {tf{? o.edit_mode }tf}[image.animation]{tf{??}tf}{enc{! o.__get(it, \u0027image.animation\u0027) || \u0027\u0027 }enc}{tf{?}tf}
" src="a41325d3d724b613adde84fb3124bc6dd2d09ac7" >
    
  </picture>
</figure>
<span class="absolute absolute--fill
    {enc{! o.__get(it, \u0027image.overlay_background\u0027) || \u0027bg-black-70\u0027 }enc}"
    675275c791df5c494218febd9c0cde06eea2ae6b  mv-attribute="class" mv-value="'absolute absolute--fill ' & overlay_background" 35fe3a9616151be1e9a9abc33ece88d44bd47528></span>

    



<nav class="relative o-90  {tf{? o.edit_mode }tf}[if(page_app.header_class,page_app.header_class,site_app.params.header_class)]{tf{??}tf}{enc{! o.__get(o, \u0027header_class\u0027) || \u0027bg-transparent\u0027 }enc}{tf{?}tf}
 "  675275c791df5c494218febd9c0cde06eea2ae6b property="menu" 35fe3a9616151be1e9a9abc33ece88d44bd47528 >
  <div class="w-90 mw9 center ph2 pv4 cf flex justify-between tracked" >

    <span class="fl self-center">
      <a href="/" class="v-mid " title="Home">
        <img data-role="logo" class="h2 v-mid dim" src="6f171f7af664405d6c48d439c7dcf034b904ccf1" />
      </a>
    </span>

    
    <ul class="list dn fl cf ma0 di-l flex-l pv1 ph4-l justify-{tf{? o.edit_mode }tf}[if(page_app.main_menu_align,page_app.main_menu_align,site_app.params.main_menu_align)]{tf{??}tf}{enc{! o.__get(o, \u0027main_menu_align\u0027) || \u0027start\u0027 }enc}{tf{?}tf}
 flex-grow-1
    {enc{! o.__get(it, \u0027appearance.nav_link_color\u0027) || \u0027\u0027 }enc}
    " >
      
      
      
        {tf{? o.__get(o,\u0027site.menu.global.0\u0027) }tf}

        {loop{~ o.site.menu.global :item:idx }loop}


        <li class="fl" 675275c791df5c494218febd9c0cde06eea2ae6b property="global" mv-multiple 35fe3a9616151be1e9a9abc33ece88d44bd47528>
          <a href="dd670833e00d695c78df75d31d05c27606aca294" 675275c791df5c494218febd9c0cde06eea2ae6b property="url" 35fe3a9616151be1e9a9abc33ece88d44bd47528  class="link ph3 white-80">
            <span 675275c791df5c494218febd9c0cde06eea2ae6b property="name" 35fe3a9616151be1e9a9abc33ece88d44bd47528> {enc{! o.__get(item, \u0027name\u0027) || \u0027\u0027 }enc}</span>
          </a>
        </li>

        {loop{~}loop}

        {tf{??}tf}

          675275c791df5c494218febd9c0cde06eea2ae6b 
          <li class="fl" property="global" mv-multiple >
            <a href="#"  property="url" class="link ph3 white-80">
              <span  property="name" >Home</span>
            </a>
          </li>
          35fe3a9616151be1e9a9abc33ece88d44bd47528
        35fe3a9616151be1e9a9abc33ece88d44bd47528
        675275c791df5c494218febd9c0cde06eea2ae6b <button type="button" title="add item" class="v-mid dn br1 mv-add mv-ui mv-add-global">+</button> 35fe3a9616151be1e9a9abc33ece88d44bd47528

      
    </ul>
    
    <ul class="list fr cf ma0 ph3 ph4-l pv1 flex justify-end
    {enc{! o.__get(it, \u0027appearance.abbr_link_color\u0027) || \u0027\u0027 }enc}
    " >
    
      {tf{? o.__get(o,\u0027site.menu.iconmenu.0\u0027) }tf}

      {loop{~ o.site.menu.iconmenu :item:idx }loop}


      <li class="fl" 675275c791df5c494218febd9c0cde06eea2ae6b property="iconmenu" mv-multiple 35fe3a9616151be1e9a9abc33ece88d44bd47528>
        <a href="dd670833e00d695c78df75d31d05c27606aca294" 675275c791df5c494218febd9c0cde06eea2ae6b property="url" 35fe3a9616151be1e9a9abc33ece88d44bd47528  class="link ph3 dim white-80">
          <span 675275c791df5c494218febd9c0cde06eea2ae6b title="abbreviation" property="pre" 35fe3a9616151be1e9a9abc33ece88d44bd47528> {enc{! o.__get(item, \u0027pre\u0027) || \u0027\u0027 }enc}</span>
          675275c791df5c494218febd9c0cde06eea2ae6b <span class="dn" title="label in mobile menu" property="name"> {enc{! o.__get(item, \u0027name\u0027) || \u0027\u0027 }enc}  </span> 35fe3a9616151be1e9a9abc33ece88d44bd47528
        </a>
      </li>

      {loop{~}loop}

      {tf{??}tf}

        675275c791df5c494218febd9c0cde06eea2ae6b 
        <li class="fl" property="iconmenu" mv-multiple >
          <a href="#"  property="url" class="link ph3 dim white-80">
            <span  property="pre" >Link</span>
          </a>
        </li>
        35fe3a9616151be1e9a9abc33ece88d44bd47528
      35fe3a9616151be1e9a9abc33ece88d44bd47528
      675275c791df5c494218febd9c0cde06eea2ae6b <button type="button" title="add item" class="v-mid dn br1 mv-add mv-ui mv-add-iconmenu">+</button> 35fe3a9616151be1e9a9abc33ece88d44bd47528

    
    </ul>
  </div>
</nav>

<div class="cf w-100 relative  center flex flex-wrap {enc{! o.__get(it, \u0027section_max_width\u0027) || \u0027mw8\u0027 }enc}"
    675275c791df5c494218febd9c0cde06eea2ae6b
      mv-attribute="class"
      mv-value="'cf w-100 relative  center flex flex-wrap ' & if(section_max_width, section_max_width, 'mw8')"
    35fe3a9616151be1e9a9abc33ece88d44bd47528 >
      <div 675275c791df5c494218febd9c0cde06eea2ae6b mv-attribute="class"
      mv-value="'image-column w-100 z-0 flex flex-wrap fl w-' & image_column_width & '-ns ' &  image_order & ' ' & if(image_align_v_flex,image_align_v_flex,'items-center') & ' ' & image_layer & ' ' & image_column_height & ' ' & image_align_h" 35fe3a9616151be1e9a9abc33ece88d44bd47528 
      class="image-column w-100 z-0 flex flex-wrap fl
      {enc{! o.__get(it, \u0027image_column_height\u0027) || \u0027\u0027 }enc}
      {enc{! o.__get(it, \u0027image_layer\u0027) || \u0027static\u0027 }enc}
      {enc{! o.__get(it, \u0027image_order\u0027) || \u0027even-order-1-ns\u0027 }enc}
      {enc{! o.__get(it, \u0027image_align_h\u0027) || \u0027\u0027 }enc}
      w-{enc{! o.__get(it, \u0027image_column_width\u0027) || \u002730\u0027 }enc}-ns
      {enc{! o.__get(it, \u0027image_align_v_flex\u0027) || \u0027items-center\u0027 }enc}">
        <div class="tc overflow-hidden relative  w-100 flex flex-column justify-center items-center

        {enc{! o.__get(it, \u0027height_reference\u0027) || \u0027h\u0027 }enc}-{enc{! o.__get(it, \u0027image_height\u0027) || \u0027100\u0027 }enc}"
         675275c791df5c494218febd9c0cde06eea2ae6b mv-attribute="class" mv-value="'tc overflow-hidden relative  w-100 flex flex-column justify-center items-center ' & height_reference & '-' &  image_height " 35fe3a9616151be1e9a9abc33ece88d44bd47528
        > 
        
          <img class="mw-100 maxh-100
          o-{enc{! o.__get(it, \u0027image_opacity\u0027) || \u0027100\u0027 }enc}
          {enc{! o.__get(it, \u0027object_fit_class\u0027) || \u0027of-scale-down\u0027 }enc}
          {enc{! o.__get(it, \u0027image_br\u0027) || \u0027br0\u0027 }enc}"
          675275c791df5c494218febd9c0cde06eea2ae6b property="image_source" 35fe3a9616151be1e9a9abc33ece88d44bd47528
          src="be9210026fcf76504a9221b2aea4c4b61cf84e51"
          alt="{enc{! o.__get(it, \u0027image_alt_text\u0027) || \u0027\u0027 }enc}"
          >
        
        </div>
      </div>
      <div class="text-column z-0 center w-100 mw8 flex flex-auto pa2 ph3-m ph4-l fl
      {enc{! o.__get(it, \u0027text_column_class\u0027) || \u0027w-30-ns\u0027 }enc}
      {enc{! o.__get(it, \u0027card_align_h\u0027) || \u0027justify-center\u0027 }enc}
      {enc{! o.__get(it, \u0027card_align_v\u0027) || \u0027\u0027 }enc}
      "
      675275c791df5c494218febd9c0cde06eea2ae6b mv-attribute="class" mv-value="'text-column z-0 center w-100 mw8 flex flex-auto pa2 ph3-m ph4-l  fl ' & card_align_h & ' ' & card_align_v & ' ' & if(text_column_class,text_column_class,'w-30-ns') " 35fe3a9616151be1e9a9abc33ece88d44bd47528>
        
        <div class="text-card w-100 pa3 relative
        {enc{! o.__get(it, \u0027card_background\u0027) || \u0027\u0027 }enc}
        {enc{! o.__get(it, \u0027card_font_family\u0027) || \u0027\u0027 }enc}
        {enc{! o.__get(it, \u0027card_text_color\u0027) || \u0027\u0027 }enc}
        {enc{! o.__get(it, \u0027card_text_align\u0027) || \u0027\u0027 }enc}
        f{enc{! o.__get(it, \u0027card_font_size\u0027) || \u00273\u0027 }enc}-ns
        fw{enc{! o.__get(it, \u0027card_font_weight\u0027) || \u0027\u0027 }enc}-ns
        {enc{! o.__get(it, \u0027card_letter_spacing\u0027) || \u0027\u0027 }enc}
        {enc{! o.__get(it, \u0027card_i\u0027) || \u0027\u0027 }enc}
        {enc{! o.__get(it, \u0027card_list_style\u0027) || \u0027\u0027 }enc}
        w-{enc{! o.__get(it, \u0027card_width\u0027) || \u0027100\u0027 }enc}-ns
        "
        675275c791df5c494218febd9c0cde06eea2ae6b mv-attribute="class" mv-value="'w-100 pa3 relative ' & card_background & ' ' & card_text_color & ' ' & card_font_family & ' ' & card_text_align & ' f' & if(card_font_size,card_font_size,'3') & '-ns ' & ' fw' & card_font_weight & '-ns ' & ' ' & card_letter_spacing & ' ' & card_list_style & ' ' & card_i & ' w-' & if(card_width,card_width,100) & '-ns' " 35fe3a9616151be1e9a9abc33ece88d44bd47528
        >
          <span class="z--1 absolute absolute--fill bg-{enc{! o.__get(it, \u0027overlay_base\u0027) || \u0027black\u0027 }enc}-{enc{! o.__get(it, \u0027card_overlay\u0027) || \u0027\u0027 }enc}"
          675275c791df5c494218febd9c0cde06eea2ae6b mv-attribute="class" mv-value="'z--1 absolute absolute--fill bg-' & if(overlay_base,overlay_base,'black') & '-' & card_overlay" 35fe3a9616151be1e9a9abc33ece88d44bd47528
          >
          </span>

          <p  675275c791df5c494218febd9c0cde06eea2ae6b property="intro" 35fe3a9616151be1e9a9abc33ece88d44bd47528  class="f4 ma0 pv2 ttu">{enc{! o.__get(it, \u0027intro\u0027) || \u0027\u0027 }enc}
            <a href="#" class="slide-trigger grow ph2 dn di-l " title="View Page as Presentation">
              
              
              
              <img class="v-mid w2"  src="5aff7ad5769b66377c06f3d3195c1ba6c58d9165"   />
            </a>
          </p>

          <h2 class="ma0 pa2
          pv{enc{! o.__get(it, \u0027title_pv\u0027) || \u00273\u0027 }enc}-ns
          ph{enc{! o.__get(it, \u0027title_ph\u0027) || \u0027\u0027 }enc}-ns
          {enc{! o.__get(it, \u0027title_display\u0027) || \u0027\u0027 }enc}
          {enc{! o.__get(it, \u0027title_background\u0027) || \u0027\u0027 }enc}
          {enc{! o.__get(it, \u0027title_color\u0027) || \u0027\u0027 }enc}
          {enc{! o.__get(it, \u0027title_font_family\u0027) || \u0027\u0027 }enc}
          {enc{! o.__get(it, \u0027title_align\u0027) || \u0027tc\u0027 }enc}
          f{enc{! o.__get(it, \u0027title_font_size\u0027) || \u00272\u0027 }enc}-ns
          fw{enc{! o.__get(it, \u0027title_font_weight\u0027) || \u0027\u0027 }enc}-ns
          {enc{! o.__get(it, \u0027title_letter_spacing\u0027) || \u0027\u0027 }enc}
          {enc{! o.__get(it, \u0027title_i\u0027) || \u0027\u0027 }enc}
          {enc{! o.__get(it, \u0027title_transform\u0027) || \u0027\u0027 }enc}
          "
           675275c791df5c494218febd9c0cde06eea2ae6b
            mv-attribute="class" mv-value="'ma0 pa2 pv' & title_pv & '-ns ph' & title_ph & '-ns ' & title_display & ' ' & title_background & ' ' & title_color & ' ' & title_font_family & ' ' & title_i & ' ' & title_align  & ' f' & title_font_size & '-ns ' & ' fw' & title_font_weight & '-ns ' & title_transform & ' ' & title_letter_spacing "
            style="opacity:1;"
          35fe3a9616151be1e9a9abc33ece88d44bd47528 
          >
          <span  675275c791df5c494218febd9c0cde06eea2ae6b property="title" 35fe3a9616151be1e9a9abc33ece88d44bd47528  class="">{enc{! o.__get(it, \u0027title\u0027) || \u0027\u0027 }enc}</span>
          </h2>
          <div class="pa2 {enc{! o.__get(it, \u0027body_background\u0027) || \u0027\u0027 }enc}"
          675275c791df5c494218febd9c0cde06eea2ae6b mv-attribute="class" mv-value="'pa2 ' & body_background " 35fe3a9616151be1e9a9abc33ece88d44bd47528 
          >
            
            <span class="{enc{! o.__get(it, \u0027quote_display\u0027) || \u0027dn\u0027 }enc}"
              675275c791df5c494218febd9c0cde06eea2ae6b mv-attribute="class" mv-value="quote_display" 35fe3a9616151be1e9a9abc33ece88d44bd47528
            >
              <i class="fas fa-quote-left fa-3x fa-pull-left"></i>
            </span>
            

            <div class=" markdown lh-copy nested-links {enc{! o.__get(it, \u0027fancy_style\u0027) || \u0027\u0027 }enc}"  675275c791df5c494218febd9c0cde06eea2ae6b property="content" 35fe3a9616151be1e9a9abc33ece88d44bd47528  >
               {v{= o.sanitizer.sanitize(o.md.render(o.__get(it, \u0027content\u0027) || \u0027* It just works\u0027 || \u0027\u0027 )) }v}

              
            </div>
            
            <span class="{enc{! o.__get(it, \u0027quote_display\u0027) || \u0027dn\u0027 }enc}"
              675275c791df5c494218febd9c0cde06eea2ae6b mv-attribute="class" mv-value="quote_display" 35fe3a9616151be1e9a9abc33ece88d44bd47528
            >
              <i class="fas fa-quote-right fa-3x fa-pull-right"></i>
            </span>
            

          </div>
          

          <div class="pv1 mw7 center relative" 675275c791df5c494218febd9c0cde06eea2ae6b property="cta" 35fe3a9616151be1e9a9abc33ece88d44bd47528>
            
            <div class="fadeIn animate-edit-cta center tc ba w-100
            {enc{! o.__get(it, \u0027appearance.trigger_class\u0027) || \u0027\u0027 }enc}
            {enc{! o.__get(it, \u0027cta.background_color\u0027) || \u0027\u0027 }enc}
            {enc{! o.__get(it, \u0027cta_display\u0027) || \u0027\u0027 }enc}
            {enc{! o.__get(it, \u0027cta.border_color\u0027) || \u0027b--primary-color\u0027 }enc}
            {enc{! o.__get(it, \u0027cta.border_radius\u0027) || \u0027br2\u0027 }enc}
            pv{enc{! o.__get(it, \u0027cta.pv\u0027) || \u00272\u0027 }enc}
            ph{enc{! o.__get(it, \u0027cta.ph\u0027) || \u00273\u0027 }enc}
            mv{enc{! o.__get(it, \u0027cta.mv\u0027) || \u00270\u0027 }enc}
            w-{enc{! o.__get(it, \u0027cta.block_button_width\u0027) || \u0027100\u0027 }enc}-ns
            "
            675275c791df5c494218febd9c0cde06eea2ae6b
            mv-attribute="class" mv-value="'fadeIn animate-edit-cta center tc ba w-100  ' & cta.background_color & ' ' & cta_display & ' ' & cta.border_color & ' ' & cta.border_radius & ' pv' & cta.pv & ' ph' & cta.ph & ' mv' & cta.mv & ' w-' & cta.block_button_width &'-ns'"
            35fe3a9616151be1e9a9abc33ece88d44bd47528
            >
              
              

              <a class="no-underline w-100 dib"
              675275c791df5c494218febd9c0cde06eea2ae6b  property="url" 35fe3a9616151be1e9a9abc33ece88d44bd47528
               href="6aa54d91498069cf3ec3c6d46443b0b765c6cec2" >
                <div class="flex items-center justify-center {enc{! o.__get(it, \u0027cta.button_text_color\u0027) || \u0027\u0027 }enc}
                  {enc{! o.__get(it, \u0027cta.button_i\u0027) || \u0027\u0027 }enc}
                  f{enc{! o.__get(it, \u0027cta.button_font_size\u0027) || \u0027\u0027 }enc}-ns
                "
                675275c791df5c494218febd9c0cde06eea2ae6b mv-attribute="class" mv-value="'flex items-center justify-center ' & cta.button_text_color & ' ' & cta.button_i & ' f' & cta.button_font_size & '-ns' " 35fe3a9616151be1e9a9abc33ece88d44bd47528
                >
                  
                  <span class="ph2 {enc{! o.__get(it, \u0027cta.icon_order\u0027) || \u0027\u0027 }enc}"
                  675275c791df5c494218febd9c0cde06eea2ae6b
                  mv-attribute="class" mv-value="'ph2 ' & icon_order"
                  35fe3a9616151be1e9a9abc33ece88d44bd47528
                  >
                    <i class="cta-icon fas fa-{enc{! o.__get(it, \u0027cta.inner_icon\u0027) || \u0027info\u0027 }enc}"
                    data-fa-mask="fas fa-{enc{! o.__get(it, \u0027cta.icon_mask\u0027) || \u0027circle\u0027 }enc}"
                    data-fa-transform="{enc{! o.__get(it, \u0027cta.inner_icon_transform\u0027) || \u0027shrink-4\u0027 }enc}"
                    675275c791df5c494218febd9c0cde06eea2ae6b
                    mv-attribute="class" mv-value="'cta-icon fas fa-' & inner_icon"
                    35fe3a9616151be1e9a9abc33ece88d44bd47528
                    >
                    </i>
                  </span>
                  
                  <span 675275c791df5c494218febd9c0cde06eea2ae6b  property="name"  35fe3a9616151be1e9a9abc33ece88d44bd47528 >
                  {enc{! o.__get(it, \u0027cta.name\u0027) || \u0027Quick Start\u0027 }enc}
                  </span>
                </div>
              </a>
            </div>

            675275c791df5c494218febd9c0cde06eea2ae6b

            <div class="center left-0 right-0 top-4 dn show-in-edit skip-zoom-clone absolute bottom-2 w-100 overflow-visible f7 f6-ns normal fs-normal relaxed">
              <div class="relative">

                <div class="fadeIn [if(cta_display='dn','dn','flex')] flex-wrap items-center pointer [if(is_cta_form_active,'bg-black-20','')]"
mv-action="set(is_cta_form_active,!is_cta_form_active),invoke('promoteSection', section_background)"
>
  <div class="flex-auto"> 
    <div class="w-100 gt-label">&nbsp;
      <span class="pv2 ph3 cta-button-options [if(is_cta_form_active,'dib','dn')]">
        <i class="fas fa-window-close"></i>
      </span>
    </div>
    <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible">
      Click to show more options to design button.
    </div>
  </div>

  <div class="relative bg-black-10 pv2 ph3">
    <i class="fas fa-palette  white"></i>
  </div>
</div>


                <div class="cta-button-options fadeIn absolute z-1 [if(is_cta_form_active,'','dn')] top-2 pa2 ba b--white-80 bg-light-gray mid-gray mt4">
                  <div class="fadeIn [if(is_cta_form_active,'','dn')]">
  <span class="f4 dib ph1 mh1 pv2">
    Button Options
  </span>
  
  <span class="dib relative ph1 mh1 pv2">
    <span class="gt-label">
      <button type="button" class="grow pointer mh1 pa1 f6 br2 [if(button_i = 'i','bg-black-40','bg-black-20')]"
        mv-action="set(button_i, if(button_i, '','i'))"
      >
        <i class="fas fa-fw fa-italic" ></i>
      </button>
    </span>
    <span class="dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
        Toggle italic button text.
    </span>
  </span>
  <span class="dib relative ph1 mh1 pv2">
    <span class="gt-label">
      <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20  br2"
      mv-action="set(button_font_size, if(button_font_size < 7, button_font_size + 1, button_font_size))"
      >
        <i class="fas fa-fw fa-font" data-fa-transform="shrink-6" ></i>
      </button>
    </span>
    <span class="dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
        Decrease font size.
    </span>
  </span>
  <span class="dib relative ph1 mh1 pv2">
    <span class="gt-label">
      <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20  br2"
      mv-action="set(button_font_size, if(button_font_size > 1, button_font_size - 1, button_font_size))"
      >
          <i class="fas fa-fw fa-font"  ></i>
      </button>
    </span>
    <span class="dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
        Increase font size.
    </span>
  </span>
</div>


                  
                  

<div >
  <h3 class="mt2"></h3>
  <div class="cf flex flex-wrap ba b--black-05" >
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        

        <div>Background Color 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(background_color, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="background_color" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="solid_background"
          
           value="bg-light-gray" 
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',background_color)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        

        <div>Text Color 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(button_text_color, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="button_text_color" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="text_color"
          
           value="mid-gray" 
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',button_text_color)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        

        <div>Border Color 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(border_color, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="border_color" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="border_color"
          
           value="b--light-gray" 
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',border_color)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        

        <div>Border Radius 
        
        
        </div>
        <div 
        class=" bg-white 
         flex  flex-wrap   pt1 cf items-center ">
        
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
             property="border_radius"
            
            
            id="radio-25-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-25-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="br0"   checked 
            />
            <label class="flex-auto ph2" for="radio-25-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            br0 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-25-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-25-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="br1"  
            />
            <label class="flex-auto ph2" for="radio-25-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            br1 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-25-2-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-25-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="br2"  
            />
            <label class="flex-auto ph2" for="radio-25-2-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            br2 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-25-3-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-25-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="br3"  
            />
            <label class="flex-auto ph2" for="radio-25-3-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            br3 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-25-4-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-25-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="br4"  
            />
            <label class="flex-auto ph2" for="radio-25-4-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            br4 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-25-5-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-25-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="br-pill"  
            />
            <label class="flex-auto ph2" for="radio-25-5-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            br-pill 
            </label>
          </div>
          
        
        </div> 
        
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        

        <div>Button Width 
        
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input  min="10"  max="100"  step="10" 
           property="block_button_width" 
          type="range" 
          class="flex-auto  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
          
           value="50" 
          data-minchars="0" 
          />
          
        
        </div> 
        
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        

        <div>Horizontal Padding  [if(ph,0.25 * pow(2,(ph-1)),'0')] REM
        
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input  max="4"  step="1" 
           property="ph" 
          type="range" 
          class="flex-auto  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
          
           value="3" 
          data-minchars="0" 
          />
          
        
        </div> 
        
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        

        <div>Vertical Padding  [if(pv,0.25 * pow(2,(pv-1)),'0')] REM 
        
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input  max="4"  step="1" 
           property="pv" 
          type="range" 
          class="flex-auto  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
          
           value="2" 
          data-minchars="0" 
          />
          
        
        </div> 
        
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        

        <div>Vertical Margin  [if(mv,0.25 * pow(2,(mv-1)),'0')] REM 
        
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input  min="1"  max="5"  step="1" 
           property="mv" 
          type="range" 
          class="flex-auto  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
          
           value=""
          data-minchars="0" 
          />
          
        
        </div> 
        
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Outer Icon 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(icon_mask, '')">X</span>
        
        </div>
        <div  mv-action="invoke(&#39;setItemsAttr&#39;, icon_mask, &#39;root.children.cta.children.url&#39;, &#39;data-fa-mask&#39;, &#39;i.cta-icon&#39;)" 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="icon_mask" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="fas_list"
          
           value="circle" 
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',icon_mask)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            Optional. This is the icon on the outside. It is rendered on the button only if an inner icon has been selected.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Inner Icon  <i class="fas fa-[inner_icon]"></i>
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(inner_icon, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="inner_icon" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="fas_list"
          
           value="info" 
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',inner_icon)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            If an icon is selected, it is rendered alone, or with a selected mask.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Inner Icon transform   <button class="f7 pa1 b--black-20 br1 " type="button" mv-action="invoke('setItemsAttr', inner_icon_transform, 'root.children.cta.children.url', 'data-fa-transform', 'i.cta-icon')">
  ok
  </button>

        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(inner_icon_transform, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="inner_icon_transform" 
          type="text" 
          class="flex-auto  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
          
           value="shrink-4" 
          data-minchars="0" 
          />
          
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            Use the keywords and a number to resize and position the icon: shrink grow rotate up down left right flip-v flip-h
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Icon Order 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(icon_order, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="icon_order" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
           data-list="order-1, dn" 
           value=""
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',icon_order)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            Use order-1 to place icon after the button text, and dn to hide the icon. 
          </div>
        
      </div>
       
    
       
        <input class="absolute" hidden property="button_i" value="" />
       
    
       
        <input class="absolute" hidden property="button_font_size" value="4" />
       
    
  </div>
</div> 


                </div>
              </div>
            </div>

            35fe3a9616151be1e9a9abc33ece88d44bd47528
          </div>
          

        </div>

      </div>

    </div> 
    675275c791df5c494218febd9c0cde06eea2ae6b

      

<div class="fadeIn ui-image-position dn [if(toolbar_id = 1, 'show-in-edit','')] absolute top-2 left-2 right-0 center">
  <div class="relative">
    <div class="absolute top-0 bg-black-[toolbar_alpha] white ph3 left-0 right-0 center mw8">
      <div class="mv2 flex flex-wrap items-center">

        <span class="dib relative ph1 mh1 pv2">
          <span class="pa1 dim dib pointer gt-label [if(image_order ='odd-order-1-ns' or image_order ='even-order-1-ns','outline','')]"
            mv-action="set(image_order,if(!image_order or image_order='line-start','odd-order-1-ns',if(image_order='even-order-1-ns','line-start','even-order-1-ns'))),
            invoke('changeFadeIn', image_order, 'root.children.image_source.element.parentElement.parentElement.parentElement')"
          >
          <i class="fas f3 f4-l fa-fw fa-address-card fa-flip-horizontal"></i>

          </span>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              Change the order of image to create alternating sections. The value of current setting is [image_order].
          </span>
        </span>

        <span class="dib relative ph1 mh1 pv2"><span class="pa1 dim dib pointer gt-label [if(image_under_text,'outline','')]"
            mv-action="
            set(image_under_text, !image_under_text ),
            set(image_layer,if(image_under_text,'absolute','static')),
            set(image_column_height,if(image_under_text,'h-100','')),
            set(image_column_width,if(!image_under_text and image_column_width>60,60,image_column_width)),
            set(text_column_class,if(image_under_text,'w-100-ns', 'w-' & (100-image_column_width) &'-ns' )),
            invoke('changeFadeIn', image_layer, 'root.children.image_source.element.parentElement.parentElement'),
            "
          >
            <i class="fas f3 f4-l fa-hiking fa-fw " data-fa-mask="fas f3 f4-l fa-align-justify" data-fa-transform="shrink-4"></i>
          </span>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              Whether to always place image under text. If disabled, the image is placed under text when the width is over 60%.
          </span>
        </span>

        <span class="dib relative ph1 mh1 pv2">
          <span class="pa1 dim dib pointer gt-label [if(section_max_width ='mw-100','outline','')]"
            mv-action="set(section_max_width,if(!section_max_width or section_max_width='mw8', 'mw-100', 'mw8')),
            invoke('changeFadeIn', section_max_width, 'root.children.image_source.element.parentElement.parentElement')"
          >
            <i class="fas f3 f4-l fa-fw  fa-laptop-code"></i>
          </span>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              Allow the image to expand to the side of the window.
          </span>
        </span>


        <span class="dib relative ph1 mh1 pv2">
          <span class="pa1 dim dib pointer gt-label [if(image_align_v_flex ='items-start','outline','')]"
            mv-action="set(image_align_v_flex,'items-start'),
            invoke('changeFadeIn', image_align_v_flex, 'root.children.image_source.element.parentElement.parentElement')"
          >
            <i class="fas f3 f4-l fa-fw  fa-user" data-fa-transform="shrink-7 up-4" data-fa-mask="fas f3 f4-l fa-square-full"></i>
          </span>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              Align the image to the top if the image is not full height.
          </span>
        </span>
        <span class="dib relative ph1 mh1 pv2">
          <span class="pa1 dim dib pointer gt-label [if(image_align_v_flex ='items-center','outline','')]"
            mv-action="set(image_align_v_flex,'items-center'),invoke('changeFadeIn', image_align_v_flex, 'root.children.image_source.element.parentElement.parentElement')"
          >
            <i class="fas f3 f4-l fa-fw fa-user" data-fa-transform="shrink-7" data-fa-mask="fas f3 f4-l fa-square-full"></i>
          </span>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              Align the image to the middle vertically if the image is not full height.
          </span>
        </span>
        <span class="dib relative ph1 mh1 pv2">
          <span class="pa1 dim dib pointer gt-label [if(image_align_v_flex ='items-end','outline','')]"
            mv-action="set(image_align_v_flex,'items-end'),invoke('changeFadeIn', image_align_v_flex, 'root.children.image_source.element.parentElement.parentElement')"
          >
            <i class="fas f3 f4-l fa-fw fa-user" data-fa-transform="shrink-7 down-4" data-fa-mask="fas f3 f4-l fa-square-full"></i>
          </span>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              Align the image to the bottom if the image is not full height.
          </span>
        </span>
        
        <span class="dib relative ph1 mh1 pv2">
          <span class="pa1 dim dib pointer gt-label [if(object_fit_class ='of-cover','outline','')]"
            mv-action="
            set(object_fit_class,if('of-cover'=object_fit_class,'of-scale-down','of-cover')),
            invoke('replaceNodeClass',object_fit_class,'mavo.root.children.image_source.element','of-'),
            invoke('changeFadeIn', object_fit_class, 'root.children.image_source.element.parentElement.parentElement')"
          >
            <i class="fas f3 f4-l fa-fw fa-arrows-alt" data-fa-transform="shrink-4 bottom-4" data-fa-mask="fas f3 f4-l fa-square-full"></i>
          </span>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              Expand image to cover the container
          </span>
        </span>

        <span class="dib relative ph1 mh1 pv2">
          <span class="pa1 dim dib pointer gt-label [if(image_br ='br-100','outline','')]"
            mv-action="set(image_br,if(image_br='br-100','br0','br-100')),
            invoke('toggleClass', image_source,'','br-100'),
            invoke('changeFadeIn', image_br, 'root.children.image_source.element.parentElement.parentElement')"
          >
            <i class="fas f3 f4-l fa-fw  fa-user-circle" ></i>
          </span>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              Toggle round image
          </span>
        </span><span class="[if(image_layer='absolute','dib','dn')] relative ph1 mh1 pv2 ">
          <span class="pa1 dim dib pointer gt-label [if(image_align_h ='left-0','outline','')]"
            mv-action="set(image_align_h,'left-0'),invoke('changeFadeIn', image_align_h, 'root.children.image_source.element.parentElement.parentElement')"
          >
            <i class="fas f3 f4-l fa-fw fa-users" data-fa-transform="shrink-7 left-4" data-fa-mask="fas f3 f4-l fa-square-full"></i>
          </span>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              Align the image to the left if the image is not full width.
          </span>
        </span>
        <span class="if(image_layer='absolute','dib','dn')] relative ph1 mh1 pv2">
          <span class="pa1 dim dib pointer gt-label [if(contains(image_align_h,'left--'),'outline','')]"
            mv-action="set(image_align_h,'left--' & ((100-image_column_width)/2) & '-ns'),invoke('changeFadeIn', image_align_h, 'root.children.image_source.element.parentElement.parentElement')"
          >
            <i class="fas f3 f4-l fa-fw fa-users" data-fa-transform="shrink-7" data-fa-mask="fas f3 f4-l fa-square-full"></i>
          </span>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              Align the image to the center if the image is not full width.
          </span>
        </span>
        <span class="if(image_layer='absolute','dib','dn')] relative ph1 mh1 pv2">
          <span class="pa1 dim dib pointer gt-label [if(image_align_h ='right-0','outline','')]"
            mv-action="set(image_align_h,'right-0'),invoke('changeFadeIn', image_align_h, 'root.children.image_source.element.parentElement.parentElement')"
          >
            <i class="fas f3 f4-l fa-fw fa-users" data-fa-transform="shrink-7 right-4" data-fa-mask="fas f3 f4-l fa-square-full"></i>
          </span>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              Align the image to the right if the image is not full width.
          </span>
        </span>

        <span class="dib relative ph1 mh1 pv2">
          <span class="pa1 dim dib pointer gt-label [if(card_align_h ='justify-start','outline','')]"
            mv-action="set(card_align_h,'justify-start'),invoke('changeFadeIn', card_align_h, 'root.children.content.element.parentElement')"
          >
            <i class="fas f3 f4-l fa-fw fa-bars" data-fa-transform="shrink-6 left-4" data-fa-mask="fas f3 f4-l fa-square-full"></i>
          </span>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              Align the text block to the left if not full width.
          </span>
        </span>
        <span class="dib relative ph1 mh1 pv2">
          <span class="pa1 dim dib pointer gt-label [if(card_align_h ='justify-center','outline','')]"
            mv-action="set(card_align_h,'justify-center'),invoke('changeFadeIn', card_align_h, 'root.children.content.element.parentElement')"
          >
            <i class="fas f3 f4-l fa-fw fa-bars" data-fa-transform="shrink-6" data-fa-mask="fas f3 f4-l fa-square-full"></i>
          </span>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              Align the text block to the center if not full width.
          </span>
        </span>
        <span class="dib relative ph1 mh1 pv2">
          <span class="pa1 dim dib pointer gt-label [if(card_align_h ='justify-end','outline','')]"
            mv-action="set(card_align_h,'justify-end'),invoke('changeFadeIn', card_align_h, 'root.children.content.element.parentElement')"
          >
            <i class="fas f3 f4-l fa-fw fa-bars" data-fa-transform="shrink-6 right-4" data-fa-mask="fas f3 f4-l fa-square-full"></i>
          </span>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              Align the text block to the right if not full width.
          </span>
        </span>

        <span class="dib relative ph1 mh1 pv2">
          <span class="pa1 dim dib pointer gt-label [if(card_align_v ='items-start','outline','')]"
            mv-action="set(card_align_v,'items-start'),invoke('changeFadeIn', card_align_v, 'root.children.content.element.parentElement')"
          >
            <i class="fas f3 f4-l fa-fw fa-font" data-fa-transform="shrink-6 up-4" data-fa-mask="fas f3 f4-l fa-square-full"></i>
          </span>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              Align the text block to the top if the image is higher.
          </span>
        </span>
        <span class="dib relative ph1 mh1 pv2">
          <span class="pa1 dim dib pointer gt-label [if(card_align_v ='items-center','outline','')]"
            mv-action="set(card_align_v,'items-center'),invoke('changeFadeIn', card_align_v, 'root.children.content.element.parentElement')"
          >
            <i class="fas f3 f4-l fa-fw fa-font" data-fa-transform="shrink-6" data-fa-mask="fas f3 f4-l fa-square-full"></i>
          </span>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              Align the text block to the middle vertically if the image is higher.
          </span>
        </span>
        <span class="dib relative ph1 mh1 pv2">
          <span class="pa1 dim dib pointer gt-label [if(card_align_v ='items-end','outline','')]"
            mv-action="set(card_align_v,'items-end'),invoke('changeFadeIn', card_align_v, 'root.children.content.element.parentElement')"
          >
            <i class="fas f3 f4-l fa-fw fa-font" data-fa-transform="shrink-6 down-4" data-fa-mask="fas f3 f4-l fa-square-full"></i>
          </span>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              Align the text block to the bottom if the image is higher.
          </span>
        </span>

        <span class="dib relative ph1 mh1 pv2">
          <span class="pa1 dim dib pointer gt-label [if(cta_display ='dn','','outline')]"
            mv-action="set(cta_display,if(cta_display='dn','','dn')),
            invoke('changeFadeIn',cta_display,'root.children.image_source.element.parentElement.parentElement')
            "
          >
            <i class="fas f3 f4-l fa-fw fa-handshake" data-fa-transform="shrink-6" data-fa-mask="fas f3 f4-l fa-square"></i>
          </span>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              Toggle call-to-action button.
          </span>
        </span>

        <span class="dib relative ph1 mh1 pv2">
          <span class="pa1 dim dib pointer gt-label [if(quote_display ='di','outline','')]"
            mv-action="set(quote_display,if(quote_display='di','dn','di'))"
          >
            <i class="fas f3 f4-l fa-fw fa-quote-left" data-fa-transform="shrink-6" data-fa-mask="fas f3 f4-l fa-square"></i>
          </span>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              Toggle big quotation mark around text.
          </span>
        </span>

        <span class="dib relative ph1 mh1 pv2">
          <span class="pa1 dim dib pointer gt-label [if(title_display ='dn','','outline')]"
            mv-action="set(title_display,if(title_display='dn','','dn') ),
            invoke('changeFadeIn',title_display, 'root.children.image_source.element.parentElement.parentElement'),
            invoke('changeFadeIn',title_display, 'root.children.title.element.parentElement.parentElement', true)
            "
          >
            <i class="fas f3 f4-l fa-fw fa-heading" data-fa-transform="shrink-6" data-fa-mask="fas f3 f4-l fa-square"></i>
          </span>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              Toggle display title
          </span>
        </span>

      </div>

      <div class="cf flex flex-wrap"> 
        <div class="flex-auto relative fl ph2 w-100 w-50-m w-30-l pv3 ">
          <div class="gt-label flex"
          mv-action="set(text_column_class, if(image_column_width > 60, 'w-100-ns', 'w-' & (100 - image_column_width) & '-ns')),
          invoke('changeFadeIn', image_column_width, 'root.children.image_source.element.parentElement.parentElement'),
          set(image_layer, if(image_column_width>60 or image_under_text,'absolute', 'static')),
          set(image_column_height, if(image_column_width>60 or image_under_text,'h-100', '')),
          set(image_align_h, if(image_align_h != 'left-0' and image_align_h != 'right-0', 'left--' & ((100-image_column_width)/2 ) & '-ns', image_align_h))
          "
          >
            <div class="absolute f6 top-0 overflow-visible">Image [image_column_width]%, text column [if(image_under_text or image_column_width > 60, 100, 100-image_column_width)]% </div>

            <i class="fas f3 f4-l fa-fw fa-image"></i>
            <span class="w1"></span>
            <input list="width_of_container" property="image_column_width" type="range" min="0" max="100" step="10" class="ph1 flex-auto  bg-white  br0 b--black-10 " value="100"  >
          </div>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              This is the width of the image column. When placing image beside text, this will decide how much space to allocate to image and text.
          </span>
        </div>
        <div class="flex-auto relative fl ph2 w-100 w-50-m w-30-l pv3">
          <div class="gt-label flex"
          mv-action="invoke('replaceNodeClass', image_opacity, 'mavo.root.children.image_source.element', 'o-', 'o-')"
          >
              <i class="fas f3 f4-l fa-fw fa-wine-glass-alt"></i>
              <span class="w1"></span>
            <input list="width_of_container" property="image_opacity" type="range" min="10" max="100" step="10" class="ph1 flex-auto  bg-white  br0 b--black-10 " value="100"  >
          </div>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              Change the opacity of the image, allow background color to partially come thorough, and make text more readable.
          </span>
        </div>
        <div class="flex-auto fl relative ph2 w-100 w-50-m w-20-l pv3">
          <div class="gt-label flex">
            <span
            class="dib pointer grow [if(overlay_base='white','outline','')]"
            mv-action="set(overlay_base,if(overlay_base='white','black','white'))"
            >
              <i class="fas f3 f4-l fa-fw fa-adjust" ></i>
            </span>
            <span class="w1"></span>
            <input list="width_of_container" property="card_overlay" type="range" min="0" max="50" step="10" class="ph1 flex-auto bg-white  br0 b--black-10 " value="0"  >
          </div>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              Apply a semi-transparent layer below text to make it more readable. Click the icon to toggle semi-transparent black or white.
          </span>
        </div>

        <div class="flex-auto fl relative ph2 w-100 w-50-m w-20-l pv3 "> 
          <div class="gt-label flex"
            mv-action="invoke('changeFadeIn', card_width, 'root.children.image_source.element.parentElement.parentElement.parentElement')"
          >
            <div class="absolute f6 top-0 overflow-visible">Text [card_width]% of column.</div>
            <i class="fas f3 f4-l fa-fw fa-bars" ></i>
            <span class="w1"></span>
            <input list="width_of_container" property="card_width" type="range" min="20" max="100" step="10" class="ph1 flex-auto bg-white br0 b--black-10 " value="100"  >
          </div>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              This is the width of the text block within the text column.
          </span>
        </div>
      </div>
    </div>
<div class="w2 absolute left--2" style="top: 8rem;">
      <div class="relative pv2 ph1 overflow-visible">
        <div class="gt-label f7">[image_height]%</div>
        <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
            The height of image in [if(height_reference='vh','viewport','section' )].
        </span>
      </div>

      <div class="pv2 ph1">
        <span class="dib relative ">
          <span class="pa1 dim dib pointer gt-label [if('vh' = height_reference, 'outline')]"
            mv-action="set(height_reference,if(height_reference='vh','h','vh'))"
          >
            <i class="fas f3 f4-l fa-fw fa-laptop"></i>
          </span>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              Toggle percentage reference to viewport height, or dynamic section height.
          </span>
        </span>
      </div>

      <div class="pv2 ph1 relative">
        <span class="pa1 dim dib pointer gt-label [if(image_height =100,'outline','')]"
          mv-action="set(image_height, 100),
          invoke('changeFadeIn', image_height, 'root.children.image_source.element.parentElement.parentElement')"
        >
          <i class="fas f3 f4-l fa-hiking fa-fw" data-fa-mask="fas f3 f4-l fa-square-full"  data-fa-transform="shink-4"></i>
        </span>
        <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
          Set image height to 100%
        </span>
      </div>
      <div class="pv2 ph1 relative">
        <span class="pa1 dim dib pointer gt-label [if(image_height = 75,'outline','')]"
          mv-action="set(image_height, 75),
          invoke('changeFadeIn', image_height, 'root.children.image_source.element.parentElement.parentElement')"
        >
          <i class="fas f3 f4-l fa-hiking fa-fw" data-fa-mask="fas f3 f4-l fa-square-full"  data-fa-transform="shink-4 down-3"></i>
        </span>
        <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
          Set image height to 75%
        </span>
      </div>
      <div class="pv2 ph1 relative">
        <span class="pa1 dim dib pointer gt-label [if(image_height = 50,'outline','')]"
          mv-action="set(image_height, 50),
          invoke('changeFadeIn', image_height, 'root.children.image_source.element.parentElement.parentElement')"
        >
          <i class="fas f3 f4-l fa-hiking fa-fw" data-fa-mask="fas f3 f4-l fa-square-full"  data-fa-transform="shink-4 down-6"></i>
        </span>
        <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
          Set image height to 50%
        </span>
      </div>
      <div class="pv2 ph1 relative">
        <span class="pa1 dim dib pointer gt-label [if(image_height = 25,'outline','')]"
          mv-action="set(image_height, 25),
          invoke('changeFadeIn', image_height, 'root.children.image_source.element.parentElement.parentElement')"
        >
          <i class="fas f3 f4-l fa-hiking fa-fw" data-fa-mask="fas f3 f4-l fa-square-full"  data-fa-transform="shink-4 down-9"></i>
        </span>
        <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
          Set image height to 25%
        </span>
      </div>

      <div class="h2">&nbsp;</div>

    </div>

    <input hidden list="height_of_container" property="image_height" type="range" min="25" max="100" step="25" class="w-100  bg-white  br0 b--black-10 " value="100"  >
    <input hidden property="text_column_class" >
    <input hidden property="image_layer" value="absolute">
    <input hidden property="image_under_text" type="checkbox" >
    <input hidden property="image_column_height">
    <input hidden property="image_align_h">
    <input hidden property="image_align_v_flex">
    <input hidden property="card_align_h">
    <input hidden property="card_align_v">
    <input hidden property="overlay_base">
    <input hidden property="cta_display">
    <input hidden property="quote_display" value="dn">
    <input hidden property="title_display">
  </div>
</div>


      <div class="absolute top-2 center mw8 left-2 right-0 ph2" > 
        <div class="fadeIn skip-zoom-clone dn [if(toolbar_id = 2, 'show-in-edit','')] relative w-100 overflow-visible">
          
          <div class="f7 f6-ns normal fs-normal relaxed ">

            
<div class="ba b--white-30 w-100 bg-black-[toolbar_alpha] [if(text_toolbar_id > 0,'dn','')]">
  <div class="mv2 flex flex-wrap items-center">
    <span class="dib relative ph1 mh1 pv2"
    mv-action="invoke('toggleClass', section_background, '.title-options', 'dn')"
    >
      <span class="gt-label">
        <i class="fas fa-heading  white pa2 br0"></i>
      </span>
      <span class="dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
          These styles apply to the title only. Click here to show more options.
      </span>
    </span>

    <span class="dib relative ph1 mh1 pv2"
        mv-action="invoke('toggleClass', section_background, '.text-block-toolbar', 'dn')"
      >
      <span class="gt-label">
        <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20 white br2" >
          <i class="fas fa-keyboard"></i>
        </button>
      </span>
      <span class="dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
          Toggle text block toolbar.
      </span>

    </span>

    <span class="dib relative ph1 mh1 pv2">
      <span class="gt-label">
        <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20 white br2 [if(title_transform = 'ttu','outline','')]" mv-action="set(title_transform, if(title_transform = 'ttu', '', 'ttu')), invoke('changeFadeIn', title_transform, 'root.children.title.element.parentElement')">
          <i class="fas fa-fw fa-font" ></i>
        </button>
      </span>
      <span class="ttu dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
          Toggle upper case
      </span>
    </span>

    <span class="dib relative ph1 mh1 pv2">
      <span class="gt-label">
        <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20 white br2 [if(title_transform = 'ttc','outline','')]" mv-action="set(title_transform, if(title_transform = 'ttc', '', 'ttc')), invoke('changeFadeIn', title_transform, 'root.children.title.element.parentElement')">
          <i class="fas fa-fw fa-ad" ></i>
        </button>
      </span>
      <span class="ttc dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
          Toggle captilize case first letter
      </span>
    </span>

    <span class="dib relative ph1 mh1 pv2">
      <span class="gt-label">
        <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20 white br2 [if(title_i = 'i', 'outline','')]" mv-action="set(title_i, if(title_i = 'i', 'fs-normal','i')), invoke('changeFadeIn', title_i, 'root.children.title.element.parentElement')">
          <i class="fas fa-fw fa-italic" ></i>
        </button>
      </span>
      <span class="i dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
          Toggle italic style
      </span>
    </span>

    <span class="dib relative ph1 mh1 pv2">
      <span class="gt-label">
        <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20 white br2 [if(title_align = 'tc', 'outline','')]" mv-action="set(title_align, if(title_align = 'tc','ts','tc')), invoke('changeFadeIn', title_align, 'root.children.title.element.parentElement')">
          <i class="fas fa-fw fa-align-center"></i>
        </button>
      </span>
      <span class="tc dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
          Toggle align center
      </span>
    </span>

    <span class="dib relative ph1 mh1 pv2">
      <span class="gt-label">
        <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20 white br2"
        mv-action="set(title_font_size, if(title_font_size= -5, 1, if(title_font_size < 4, title_font_size + 1, title_font_size))),
        invoke('changeFadeIn', title_font_size, 'root.children.title.element.parentElement')">
          <i class="fas fa-fw fa-sort-alpha-down" ></i>
        </button>
      </span>
      <span class="f7 dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
          Decrease font size for medium and large screens.
      </span>
    </span>

    <span class="dib relative ph1 mh1 pv2">
      <span class="gt-label">
        <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20 white br2"
        mv-action="set(title_font_size, if(title_font_size = 1, -5, if(title_font_size > -6, title_font_size - 1, title_font_size))),
        invoke('changeFadeIn', title_font_size, 'root.children.title.element.parentElement')">
          <i class="fas fa-fw fa-sort-alpha-up" ></i>
        </button>
      </span>
      <span class="f5 dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
          Increase font size for medium and large screens.
      </span>
    </span>

    <span class="dib relative ph1 mh1 pv2">
      <span class="gt-label">
        <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20 white br2" mv-action="set(title_font_weight, if(title_font_weight > 1, title_font_weight - 1, title_font_weight)), invoke('changeFadeIn', title_font_weight, 'root.children.title.element.parentElement')">
          <i class="fw1 fas fa-fw fa-angle-down" ></i>
        </button>
      </span>
      <span class="fw1 dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
          Decrease font weight for medium and large screens.
      </span>
    </span>

    <span class="dib relative ph1 mh1 pv2">
      <span class="gt-label">
        <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20 white br2" mv-action="set(title_font_weight, if(title_font_weight < 9, title_font_weight + 1, title_font_weight)), invoke('changeFadeIn', title_font_weight, 'root.children.title.element.parentElement')">
          <i class="fw9-ns fas fa-fw fa-chevron-up" ></i>
        </button>
      </span>
      <span class="fw9-ns dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
          Increase font weight for medium and large screens.
      </span>
    </span>

    <span class="dib relative ph1 mh1 pv2">
      <span class="gt-label">
        <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20 white br2 [if(title_letter_spacing, 'outline')]" mv-action="set(title_letter_spacing, if(title_letter_spacing = 'tracked', 'tracked-mega',if(title_letter_spacing = 'tracked-mega','','tracked')) ), invoke('changeFadeIn', title_letter_spacing, 'root.children.title.element.parentElement')">
          <i class="fas fa-fw fa-text-width" ></i>
        </button>
      </span>
      <span class="tracked-mega dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
          Increase letter spacing
      </span>
    </span>

  <span class="flex-auto dib relative ph1 mh1 pv2"
      mv-action="invoke('toggleClass', section_background, '.title-options', 'dn')"
    >
    <span class="gt-label">
      <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20 white br2" >
        <i class="fas fa-cog"></i>
      </button>
    </span>
    <span class="dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
        Show more options of formatting title.
    </span>
  </span>

  </div>

  <div class="cf flex flex-wrap items-center">
  
    <div class="w4 flex-auto relative mh1 fl mid-gray flex flex-nowrap items-center cf mv2">
      <input placeholder="heading font" property="title_font_family" data-path="serif_font_family" data-minchars="0"
      class="white bg-transparent w-100 br0 b--white-20" />
      <span class="gt-label">
        <button type="button" mv-action="invoke('toggleDDInput',title_font_family)"
          class="dropdown-btn grow pointer pa1 f7 bg-black-20 white br0">
          <i class="fas fa-fw fa-caret-down"></i>
        </button>
      </span>
      <span class="right-0 dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
          Click the dropdown button to select font from list, or type to search.
      </span>
    </div>

    <div class="w4 flex-auto relative mh1 fl mid-gray flex flex-nowrap items-center cf mv2">
      <input placeholder="heading color" property="title_color" data-path="text_color" data-minchars="0"
      class="white bg-transparent w-100 br0 b--white-20" />
      <span class="gt-label">
        <button type="button" mv-action="invoke('toggleDDInput',title_color)"
        class="dropdown-btn grow pointer pa1 f7 bg-black-20 white br0">
          <i class="fas fa-fw fa-caret-down"></i>
        </button>
      </span>
      <span class="right-0 dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
          Click the dropdown button to select font color from list, or type to search.
      </span>

    </div>

    <div class="w4 flex-auto relative mh1 fl mid-gray flex flex-nowrap items-center cf mv2">
      <input placeholder="heading background" property="title_background" data-path="solid_background" data-minchars="0"
      class="white bg-transparent w-100 br0 b--white-20" />
      <span class="gt-label">
        <button type="button" mv-action="invoke('toggleDDInput',title_background)"
        class="dropdown-btn grow pointer pa1 f7 bg-black-20 white br0">
          <i class="fas fa-fw fa-caret-down"></i>
        </button>
      </span>
      <span class="right-0 dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
          Click the dropdown button to select background color from list, or type to search.
      </span>
    </div>
  </div>


</div> 

            
<div class="dn text-block-toolbar fadeIn">
  <div class=" ba b--white-30 w-100 bg-black-[toolbar_alpha] ">

    <div class="cf flex flex-wrap items-center">
      <span class="dib relative ph1 mh1 pv2">
        <span class="gt-label">
          <i class="fas fa-paragraph  white pa2 br0"></i>
        </span>
        <span class="dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
            These styles apply to the whole text block.
        </span>
      </span>

      <span class="dib relative ph1 mh1 pv2">
        <span class="gt-label">
          <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20 white br2 [if(card_i = 'i', 'outline','')]" mv-action="set(card_i, if(card_i, '','i')), invoke('changeFadeIn', card_i, 'root.children.content.element')">
            <i class="fas fa-fw fa-italic" ></i>
          </button>
        </span>
        <span class="i dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
            Toggle italic style
        </span>
      </span>
      <span class="dib relative ph1 mh1 pv2">
        <span class="gt-label">
          <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20 white br2 [if(card_text_align = 'tl', 'outline','')]" mv-action="set(card_text_align, 'tl'), invoke('changeFadeIn', card_text_align, 'root.children.content.element')">
            <i class="fas fa-fw fa-align-left"></i>
          </button>
        </span>
        <span class="tl dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
            Align text to left
        </span>
      </span>

      <span class="dib relative ph1 mh1 pv2">
        <span class="gt-label">
          <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20 white br2 [if(card_text_align = 'tc', 'outline','')]" mv-action="set(card_text_align, 'tc'), invoke('changeFadeIn', card_text_align, 'root.children.content.element')">
            <i class="fas fa-fw fa-align-center"></i>
          </button>
        </span>
        <span class="tc dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
            Align text to center
        </span>
      </span>

      <span class="dib relative ph1 mh1 pv2">
        <span class="gt-label">
          <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20 white br2 [if(card_text_align = 'tr', 'outline','')]" mv-action="set(card_text_align, 'tr'), invoke('changeFadeIn', card_text_align, 'root.children.content.element')">
            <i class="fas fa-fw fa-align-right"></i>
          </button>
        </span>
        <span class="tr dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
            Align text to right
        </span>
      </span>

      <span class="dib relative ph1 mh1 pv2">
        <span class="gt-label">
          <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20 white br2 [if(card_text_align = 'tj', 'outline','')]" mv-action="set(card_text_align, 'tj'), invoke('changeFadeIn', card_text_align, 'root.children.content.element')">
            <i class="fas fa-fw fa-align-justify"></i>
          </button>
        </span>
        <span class="tj dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
            Justify text both sides
        </span>
      </span>

      <span class="dib relative ph1 mh1 pv2">
        <span class="gt-label">
          <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20 white br2" mv-action="set(card_font_size, if(card_font_size < 6, card_font_size + 1, card_font_size)), invoke('changeFadeIn', card_font_size, 'root.children.content.element')">
            <i class="fas fa-fw fa-sort-alpha-down" ></i>
          </button>
        </span>
        <span class="f7 dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
            Decrease font size for medium and large screens.
        </span>
      </span>

      <span class="dib relative ph1 mh1 pv2">
        <span class="gt-label">
          <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20 white br2" mv-action="set(card_font_size, if(card_font_size > 3, card_font_size - 1, card_font_size)), invoke('changeFadeIn', card_font_size, 'root.children.content.element')">
            <i class="fas fa-fw fa-sort-alpha-up" ></i>
          </button>
        </span>
        <span class="f5 dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
            Increase font size for medium and large screens.
        </span>
      </span>

      <span class="dib relative ph1 mh1 pv2">
        <span class="gt-label">
          <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20 white br2" mv-action="set(card_font_weight, if(card_font_weight > 1, card_font_weight - 1, card_font_weight)), invoke('changeFadeIn', card_font_weight, 'root.children.content.element')">
            <i class="fw1 fas fa-fw fa-angle-down" ></i>
          </button>
        </span>
        <span class="fw1 dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
            Decrease font weight for medium and large screens.
        </span>
      </span>

      <span class="dib relative ph1 mh1 pv2">
        <span class="gt-label">
          <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20 white br2" mv-action="set(card_font_weight, if(card_font_weight < 9, card_font_weight + 1, card_font_weight)), invoke('changeFadeIn', card_font_weight, 'root.children.content.element')">
            <i class="fw9-ns fas fa-fw fa-chevron-up" ></i>
          </button>
        </span>
        <span class="fw9 dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
            Increase font weight for medium and large screens.
        </span>
      </span>

      <span class="dib relative ph1 mh1 pv2">
        <span class="gt-label">
          <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20 white br2 [if(card_letter_spacing, 'outline')]" mv-action="set(card_letter_spacing, if(card_letter_spacing = 'tracked', 'tracked-mega',if(card_letter_spacing = 'tracked-mega','','tracked')) ), invoke('changeFadeIn', card_letter_spacing, 'root.children.content.element')">
            <i class="fas fa-fw fa-text-width" ></i>
          </button>
        </span>
        <span class="tracked-mega dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
            Increase letter spacing
        </span>
      </span>

      <span class="dib relative ph1 mh1 pv2">
        <span class="gt-label">
          <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20 white br2 [if(card_list_style, 'outline')]" mv-action="set(card_list_style, if(card_list_style,'','nested-list-reset') ), invoke('changeFadeIn', card_list_style, 'root.children.content.element')">
            <i class="fas fa-fw fa-list-ul" ></i>
          </button>
        </span>
        <span class="dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
          Reset list style. When enabled, it keeps the data, but does not display bullet point or number before list item.
        </span>
      </span>

    </div>

  <div class="cf flex flex-wrap items-center">

    <div class="w4 flex-auto relative mh1 fl  mid-gray flex flex-nowrap items-center cf mv2">
      <input placeholder="font" property="card_font_family" data-path="serif_font_family" data-minchars="0"
      class="white bg-transparent w-100 br0 b--white-20" />
      <span class="gt-label">
        <button type="button" mv-action="invoke('toggleDDInput',card_font_family)"
          class="dropdown-btn grow pointer pa1 f7 bg-black-20 white br0">
          <i class="fas fa-fw fa-caret-down"></i>
        </button>
      </span>
      <span class="right-0 dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
          Click the dropdown button to select font from list, or type to search. The font applies to the whole text block.
      </span>
    </div>

    <div class="w4 flex-auto relative mh1 fl  mid-gray flex flex-nowrap items-center cf mv2">
      <input placeholder="color" property="card_text_color" data-path="text_color" data-minchars="0"
      class="white bg-transparent w-100 br0 b--white-20" />
      <span class="gt-label">
        <button type="button" mv-action="invoke('toggleDDInput',card_text_color)"
        class="dropdown-btn grow pointer pa1 f7 bg-black-20 white br0">
          <i class="fas fa-fw fa-caret-down"></i>
        </button>
      </span>
      <span class="right-0 dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
          Click the dropdown button to select font color from list, or type to search.
      </span>

    </div>

    <div class="w4 flex-auto relative mh1 fl  mid-gray flex flex-nowrap items-center cf mv2">
      <input placeholder="background" property="card_background" data-path="solid_background" data-minchars="0"
      class="white bg-transparent w-100 br0 b--white-20" />
      <span class="gt-label">
        <button type="button" mv-action="invoke('toggleDDInput',card_background)"
        class="dropdown-btn grow pointer pa1 f7 bg-black-20 white br0">
          <i class="fas fa-fw fa-caret-down"></i>
        </button>
      </span>
      <span class="right-0 dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
          Click the dropdown button to select background color from list, or type to search.
      </span>
    </div>
    <div class="w4 flex-auto relative mh1 fl  mid-gray flex flex-nowrap items-center cf mv2">
      <input placeholder="body background" property="body_background" data-path="solid_background" data-minchars="0"
      class="white bg-transparent w-100 br0 b--white-20" />
      <span class="gt-label">
        <button type="button" mv-action="invoke('toggleDDInput',body_background)"
        class="dropdown-btn grow pointer pa1 f7 bg-black-20 white br0">
          <i class="fas fa-fw fa-caret-down"></i>
        </button>
      </span>
      <span class="right-0 dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
          This background applies to the textbox body only.
      </span>
    </div>
    <div class="w4 flex-auto relative mh1 fl  mid-gray flex flex-nowrap items-center cf mv2"
    mv-action="invoke(replaceNodeClass,fancy_style,'mavo.root.children.content.element','fancy-')"
    >
      <input placeholder="fancy" property="fancy_style" data-list="fancy-dropcap,fancy-dropcap-all" data-minchars="0"
      class="white bg-transparent w-100 br0 b--white-20" />
      <span class="gt-label">
        <button type="button" mv-action="invoke('toggleDDInput',fancy_style)"
        class="dropdown-btn grow pointer pa1 f7 bg-black-20 white br0">
          <i class="fas fa-fw fa-caret-down"></i>
        </button>
      </span>
      <span class="right-0 dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
        Click the dropdown button to select a style, click this cell after deleting a style.
      </span>
    </div>

  </div>

  </div> 
</div>


          </div>

          <div class="fadeIn absolute left-0 right-0 center mw7 dn title-options top-2 pa2 z-1 bg-light-gray mid-gray ba b--white-80 f7 f6-ns normal fs-normal relaxed">
            <div class="tr pointer flex justify-between"
              mv-action="invoke('toggleClass', section_background, '.title-options', 'dn')"
            >
            <span>Heading Styles</span>
            <span>Close</span>
            </div>
            
            

<div >
  <h3 class="mt2"></h3>
  <div class="cf flex flex-wrap ba b--black-05" >
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Horizontal Padding 
        
        
        </div>
        <div 
        class=" bg-white 
         flex  flex-nowrap   pt1 cf items-center ">
        
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
             property="title_ph"
            
            
            id="radio-26-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-26-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="0"   checked 
            />
            <label class="flex-auto ph2" for="radio-26-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            0 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-26-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-26-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="1"  
            />
            <label class="flex-auto ph2" for="radio-26-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            1 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-26-2-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-26-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="2"  
            />
            <label class="flex-auto ph2" for="radio-26-2-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            2 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-26-3-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-26-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="3"  
            />
            <label class="flex-auto ph2" for="radio-26-3-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            3 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-26-4-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-26-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="4"  
            />
            <label class="flex-auto ph2" for="radio-26-4-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            4 
            </label>
          </div>
          
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            Padding left and right for medium and large screen. 
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Vertical Padding 
        
        
        </div>
        <div 
        class=" bg-white 
         flex  flex-nowrap   pt1 cf items-center ">
        
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
             property="title_pv"
            
            
            id="radio-27-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-27-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="0" 
            />
            <label class="flex-auto ph2" for="radio-27-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            0 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-27-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-27-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="1" 
            />
            <label class="flex-auto ph2" for="radio-27-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            1 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-27-2-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-27-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="2" 
            />
            <label class="flex-auto ph2" for="radio-27-2-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            2 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-27-3-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-27-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="3"  checked 
            />
            <label class="flex-auto ph2" for="radio-27-3-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            3 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-27-4-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-27-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="4" 
            />
            <label class="flex-auto ph2" for="radio-27-4-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            4 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-27-5-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-27-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="5" 
            />
            <label class="flex-auto ph2" for="radio-27-5-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            5 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-27-6-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-27-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="6" 
            />
            <label class="flex-auto ph2" for="radio-27-6-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            6 
            </label>
          </div>
          
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            Padding above and below for medium and large screen. 
          </div>
        
      </div>
       
    
       
        <input class="absolute" hidden property="title_i" value="" />
       
    
       
        <input class="absolute" hidden property="title_font_size" value="2" />
       
    
       
        <input class="absolute" hidden property="title_align" value="tc" />
       
    
       
        <input class="absolute" hidden property="title_transform" value="ttc" />
       
    
       
        <input class="absolute" hidden property="title_font_weight" value="7" />
       
    
       
        <input class="absolute" hidden property="title_letter_spacing" value="" />
       
    
       
        <input class="absolute" hidden property="section_max_width" value="" />
       
    
       
        <input class="absolute" hidden property="card_i" value="" />
       
    
       
        <input class="absolute" hidden property="card_font_size" value="5" />
       
    
       
        <input class="absolute" hidden property="card_text_align" value="" />
       
    
       
        <input class="absolute" hidden property="card_font_weight" value="4" />
       
    
       
        <input class="absolute" hidden property="card_letter_spacing" value="" />
       
    
       
        <input class="absolute" hidden property="card_list_style" value="" />
       
    
       
        <input class="absolute" hidden property="big_quote" value="" />
       
    
  </div>
</div> 

          </div>
          
        </div>
      </div>

      
<div class="absolute top-2 w2">
  <div class="relative pv3 ph1">
    <span class="gt-label">
      <button type="button" class="pointer grow baskerville dn show-in-edit pv1 ph2 f4 f5-l bg-black-05 white br2 b--white-90"
      mv-action="set(toolbar_id,if(toolbar_id = 2, 0, toolbar_id + 1))
      ">T</button>
    </span>

    <span class="dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
        Toggle layout control toolbars.
    </span>
    <input type="number" hidden mv-storage="none" property="toolbar_id" value="1" />
    <input type="number" hidden mv-storage="none" property="toolbar_alpha" value="10" />
    <input type="checkbox" hidden mv-storage="none" property="is_cta_form_active" />
  </div>
  <div class="relative pv3 ph1">
    <span class="gt-label">
      <button type="button" class="pointer grow baskerville dn [if(toolbar_id,'show-in-edit','')] pv1 ph2 f4 f5-l bg-black-05 white br2 b--white-90"
      mv-action="set(toolbar_alpha,if(toolbar_alpha >= 70, 10, toolbar_alpha + 20))">O

      </button>
    </span>

    <span class="dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
      Click to adjust toolbar opacity. Current value: [toolbar_alpha]%.
    </span>

  </div>
</div>


    35fe3a9616151be1e9a9abc33ece88d44bd47528
    <div class="vh-25"></div>
  </div>   {tf{? o.edit_mode }tf}


<div class="skip-zoom-clone  min-vh-100 w-100 absolute off-canvas-dashboard
">
  
  <div class="relative w-100 w-90-ns mw7 mt4 vh-100 bg-near-white overflow-y-scroll">
    <div class="bg-white-70 mb1 cf v-mid ph3">
      <span class="pv2 dib">Section Options</span>
      <span title="close" class="fr pv2 ph3 w3 tc orange hover-bg-white" mv-action="invoke('toggleClass', current_tab, '.off-canvas-dashboard', 'active')">X</span>
    </div>
    
    <div class="mb4 mh2 mh3-ns mt2 br1 shadow-4 b--white-30 ph1 ph2-ns pb4">
      

<input hidden property="current_tab" mv-storage="none" value="appearance_cover"/>
<div class="pt1 flex flex-wrap items-stretch">

  
	<button data-toggle-tab="appearance_cover" mv-action="set(current_tab,'appearance_cover')" class="[if(current_tab='appearance_cover', 'bg-white-90 bb-0')] gt-tab-button br1 active pointer ba f6 dib lh-solid ph2 pv2 mb2 ">
		
			<i class="fas fa-font"></i><span class="dn di-ns"> Appearance </span>
		
	</button>&nbsp;

  
	<button data-toggle-tab="layout_highlight_image" mv-action="set(current_tab,'layout_highlight_image')" class="[if(current_tab='layout_highlight_image', 'bg-white-90 bb-0')] gt-tab-button br1  pointer ba f6 dib lh-solid ph2 pv2 mb2 ">
		
			<i class="fas fa-file-image"></i><span class="dn di-ns"> Highlight Image </span>
		
	</button>&nbsp;

  
	<button data-toggle-tab="layout_image_container" mv-action="set(current_tab,'layout_image_container')" class="[if(current_tab='layout_image_container', 'bg-white-90 bb-0')] gt-tab-button br1  pointer ba f6 dib lh-solid ph2 pv2 mb2 ">
		
			<i class="fas fa-square"></i><span class="dn di-ns"> Image Container </span>
		
	</button>&nbsp;

  
	<button data-toggle-tab="image" mv-action="set(current_tab,'image')" class="[if(current_tab='image', 'bg-white-90 bb-0')] gt-tab-button br1  pointer ba f6 dib lh-solid ph2 pv2 mb2 ">
		
			<i class="fas fa-image"></i><span class="dn di-ns"> Background Image </span>
		
	</button>&nbsp;

</div>

<div class="tab-content pt3 ">

	
	<div data-pane="appearance_cover" class="gt-tab-pane [if(current_tab='appearance_cover', '', 'dn')] active">
	 
		
		

<div  property="appearance" >
  <h3 class="mt2">Appearance</h3>
  <div class="cf flex flex-wrap ba b--black-05" >
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Section Background 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(section_background, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="section_background" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="solid_background"
          
           value="bg-black-70"
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',section_background)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            This is the fallback background color when image is not available or disabled.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Action Trigger 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(trigger_class, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="trigger_class" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
           data-list="slide-trigger," 
           value="slide-trigger"
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',trigger_class)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            Remove the class to disable trigger.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Slide Animation 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(slide_animation, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="slide_animation" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="slide_animation"
          
           value=""
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',slide_animation)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            The slide animation during presentation, default to fadeIn if not set. 
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        

        <div>Text Color 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(text_color, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="text_color" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="text_color"
          
           value="white-80"
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',text_color)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        

        <div>Main Nav Color 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(nav_link_color, '')">X</span>
        
        </div>
        <div  mv-action="invoke(&#39;replaceNodeClass&#39;,nav_link_color,&#39;mavo.root.children.menu.children.global.element.parentElement&#39;, &#39;link-&#39;)" 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="nav_link_color" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="link_color"
          
           value=""
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',nav_link_color)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        

        <div>Abbr Link Color 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(abbr_link_color, '')">X</span>
        
        </div>
        <div  mv-action="invoke(&#39;replaceNodeClass&#39;,abbr_link_color,&#39;mavo.root.children.menu.children.iconmenu.element.parentElement&#39;, &#39;link-&#39;)" 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="abbr_link_color" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="link_color"
          
           value=""
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',abbr_link_color)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
      </div>
       
    
  </div>
</div> 

	
	</div>

	
	<div data-pane="layout_highlight_image" class="gt-tab-pane [if(current_tab='layout_highlight_image', '', 'dn')] ">
	 
		
		

<div >
  <h3 class="mt2">Highlight Image</h3>
  <div class="cf flex flex-wrap ba b--black-05" >
    
      
      <div class="relative 
w-100  ph1 fl pt2 pb3
 ">
        

        <div>Image Border Radius 
        
        
        </div>
        <div  mv-action="invoke(&#39;replaceItemsClass&#39;, image_br,&#39;root.children.image_source&#39;)" 
        class=" bg-white 
         flex  flex-nowrap   pt1 cf items-center ">
        
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
             property="image_br"
            
            
            id="radio-28-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-28-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="br0"   checked 
            />
            <label class="flex-auto ph2" for="radio-28-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            disable 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-28-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-28-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="br2"  
            />
            <label class="flex-auto ph2" for="radio-28-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            br2 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-28-2-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-28-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="br3"  
            />
            <label class="flex-auto ph2" for="radio-28-2-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            br3 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-28-3-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-28-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="br4"  
            />
            <label class="flex-auto ph2" for="radio-28-3-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            br4 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-28-4-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-28-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="br-100"  
            />
            <label class="flex-auto ph2" for="radio-28-4-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            circle or oval 
            </label>
          </div>
          
        
        </div> 
        
        
      </div>
       
    
      
      <div class="relative 
w-100  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Image Fit 
        
        
        </div>
        <div  mv-action="invoke(&#39;replaceItemsClass&#39;, object_fit_class,&#39;root.children.image_source&#39;)" 
        class=" bg-white 
         flex  flex-nowrap   pt1 cf items-center ">
        
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
             property="object_fit_class"
            
            
            id="radio-29-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-29-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="of-scale-down"   checked 
            />
            <label class="flex-auto ph2" for="radio-29-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            Scale Down 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-29-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-29-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="of-contain"  
            />
            <label class="flex-auto ph2" for="radio-29-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            Contain 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-29-2-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-29-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="of-cover"  
            />
            <label class="flex-auto ph2" for="radio-29-2-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            Cover 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-29-3-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-29-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="of-fill"  
            />
            <label class="flex-auto ph2" for="radio-29-3-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            Fill 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-29-4-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-29-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="of-none"  
            />
            <label class="flex-auto ph2" for="radio-29-4-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            None 
            </label>
          </div>
          
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            Whether to keep aspect ratio when stretching or cropping image.
          </div>
        
      </div>
       
    
  </div>
</div> 

	
	</div>

	
	<div data-pane="layout_image_container" class="gt-tab-pane [if(current_tab='layout_image_container', '', 'dn')] ">
	 
		
		

<div >
  <h3 class="mt2">Image Container</h3>
  <div class="cf flex flex-wrap ba b--black-05" >
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Image Vertical Position 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(image_vertical_position, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="image_vertical_position" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
           data-list="items-center, items-start, items-end, items-stretch" 
           value=""
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',image_vertical_position)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            This decides how to position the image container vertically. By default the container is centered vertically. 
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Height Reference 
        
        
        </div>
        <div 
        class=" bg-white 
         flex  flex-nowrap   pt1 cf items-center ">
        
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
             property="height_reference"
            
            
            id="radio-30-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-30-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="h"   checked 
            />
            <label class="flex-auto ph2" for="radio-30-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            Container 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-30-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-30-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="vh"  
            />
            <label class="flex-auto ph2" for="radio-30-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            Viewport 
            </label>
          </div>
          
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            This is the reference to calculate image height. If set to parent container, the text column will decide the height of the section. If set to viewport, the section has this height at a minimum. 
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Image Order 
        
        
        </div>
        <div 
        class=" bg-white 
         flex  flex-nowrap   pt1 cf items-center ">
        
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
             property="image_order"
            
            
            id="radio-31-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-31-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="even-order-1-ns"   checked 
            />
            <label class="flex-auto ph2" for="radio-31-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            line end in even sections 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-31-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-31-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="odd-order-1-ns"  
            />
            <label class="flex-auto ph2" for="radio-31-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            line end in odd sections 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-31-2-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-31-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="line-start"  
            />
            <label class="flex-auto ph2" for="radio-31-2-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            line start 
            </label>
          </div>
          
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            Change the order of the image to create alternate section effect on large screens.
          </div>
        
      </div>
       
    
  </div>
</div> 

	
	</div>

	
	<div data-pane="image" class="gt-tab-pane [if(current_tab='image', '', 'dn')] ">
	 
		
		

<div  property="image" >
  <h3 class="mt2">Background Image</h3>
  <div class="cf flex flex-wrap ba b--black-05" >
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Source URL 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(src, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="src" 
          type="text" 
          class="flex-auto  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
          
           value=""
          data-minchars="0" 
          />
          
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            This is the full URL of the background image.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Overlay Background 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(overlay_background, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="overlay_background" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="overlay_background"
          
           value="bg-black-70"
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',overlay_background)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            This is the overlay over background image to make text readable.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Image Animation 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(animation, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="animation" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="slow_motion"
          
           value="slowUp"
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',animation)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            This is the slow motion animation of the image.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Auto Responsive 
        
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input property="responsive" type="checkbox" 
          class=""
          
          id="chk-image-responsive-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
          />
          <label class="flex-auto ph2" for="chk-image-responsive-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            Enable
          </label>
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            If enabled, dynamic images will be requested from Unsplash using the image id provided.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 [if(!responsive,&#39;dn&#39;)]">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Unsplash Image ID  <i class="pointer ph2 fas fa-link" mv-action="set(src,'https://source.unsplash.com/' & unsplash_image_id & '/' & if(size, size, '1366x768'))"> </i>

        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(unsplash_image_id, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="unsplash_image_id" 
          type="text" 
          class="flex-auto  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
          
           value=""
          data-minchars="0" 
          />
          
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            This is the image id from Unsplash. Click on the link icon to generate the image link. 
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 [if(!responsive,&#39;dn&#39;)]">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Size in Pixels 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(size, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input  mv-storage="none" 
           property="size" 
          type="text" 
          class="flex-auto  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
          
           value=""
          data-minchars="0" 
          />
          
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            The size of image width and height in pixels, default to 1366x768.
          </div>
        
      </div>
       
    
  </div>
</div> 

	
	</div>


</div>

    </div>

  </div>
</div>

<div onclick="" class="skip-zoom-clone dn mv-bar f7 tc w-100 absolute top-0 pv1 ph2 bg-white o-10 hover-o-90 ">

  <button type="button" data-action="toggle-base-toolbar" class="manage-section pointer dim br2 pv1 ph2 mh1" title="toggle global setting toolbar ">
    <i class="fas fa-ellipsis-v" data-fa-mask="fas fa-square" data-fa-transform="shrink-2 left-4"></i>
  </button>

  <span class="dn di-ns gt-pos-btns"> 
    <button type="button" data-action="move-up" class="gt-move-up manage-section pointer dim br2 pv1 ph2 mh1" title="move section up"><i class="fas fa-angle-up"></i></button>
    <button type="button" data-action="move-down" class="gt-move-down manage-section pointer dim br2 pv1 ph2 mh1" title="move section down"><i class="fas fa-angle-down"></i></button>
    <button type="button" data-action="insert-section" class="gt-insert-section manage-section pointer dim br2 pv1 ph2 mh1" title="insert section "><i class="fas fa-plus"></i></button>
    <button type="button" data-action="clone-section" class="gt-clone-section manage-section pointer dim br2 pv1 ph2 mh1" title="clone section"><i class="fas fa-clone"></i></button>
    <button type="button" data-action="delete-section" class="gt-delete-section manage-section pointer dim br2 pv1 ph2 mh2 white bg-orange" title="delete section"><i class="fas fa-trash"></i></button> 
  </span>

  
  <button title="turn editor on" type="button" data-action="toggle-mv-on" class="toggle-mv-on bg-light-green manage-section pointer dim br2 pv1 ph2 mh3" ><i class="fas fa-toggle-off"></i></button>
  
  
  <button type="button" class="gt-setting-toggle dn pointer dim br2 pv1 ph2 mh1" mv-action="invoke('toggleClass', current_tab, '.off-canvas-dashboard', 'active')"><i class="fas fa-cog"></i></button>
  <button title="edit section" type="button" class="mv-edit pointer dn dim br2 pv1 ph2 mh1">Edit</button>
  <button title="save section" type="button" class="mv-save pointer dn dim br2 pv1 ph2 mh1">Save</button>
</div>

{tf{?}tf}

  

</section>

`;
  

  
  
    gtpb.partials['goandtalk/content/text-block'] = `





<section 675275c791df5c494218febd9c0cde06eea2ae6b mv-storage="idb_array" mv-app="{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}" mv-bar="edit save" 35fe3a9616151be1e9a9abc33ece88d44bd47528
  class="alternate gt-mv-on relative flex flex-column mid-gray" ><div class="flex-auto flex flex-column justify-center
  {enc{! o.__get(it, \u0027appearance.section_background\u0027) || \u0027\u0027 }enc}
  {enc{! o.__get(it, \u0027appearance.slide_animation\u0027) || \u0027fadeIn\u0027 }enc}
  {enc{! o.__get(it, \u0027appearance.text_color\u0027) || \u0027\u0027 }enc}
  "
  675275c791df5c494218febd9c0cde06eea2ae6b  mv-attribute="class" mv-value="section_background & ' ' & text_color & ' flex-auto flex flex-column justify-center ' & slide_animation" 35fe3a9616151be1e9a9abc33ece88d44bd47528>

    



<figure class="ma0">
	<picture>
    
    <img alt="" 675275c791df5c494218febd9c0cde06eea2ae6b mv-attribute="src" mv-value="image.src" 35fe3a9616151be1e9a9abc33ece88d44bd47528 class="absolute abs-image {tf{? o.edit_mode }tf}[image.animation]{tf{??}tf}{enc{! o.__get(it, \u0027image.animation\u0027) || \u0027\u0027 }enc}{tf{?}tf}
" src="a41325d3d724b613adde84fb3124bc6dd2d09ac7" >
    
  </picture>
</figure>
<span class="absolute absolute--fill
    {enc{! o.__get(it, \u0027image.overlay_background\u0027) || \u0027\u0027 }enc}"
    675275c791df5c494218febd9c0cde06eea2ae6b  mv-attribute="class" mv-value="'absolute absolute--fill ' & overlay_background" 35fe3a9616151be1e9a9abc33ece88d44bd47528></span><div class="cf w-100 relative  center flex flex-wrap {enc{! o.__get(it, \u0027section_max_width\u0027) || \u0027mw8\u0027 }enc}"
    675275c791df5c494218febd9c0cde06eea2ae6b
      mv-attribute="class"
      mv-value="'cf w-100 relative  center flex flex-wrap ' & if(section_max_width, section_max_width, 'mw8')"
    35fe3a9616151be1e9a9abc33ece88d44bd47528 >
      <div 675275c791df5c494218febd9c0cde06eea2ae6b mv-attribute="class"
      mv-value="'image-column w-100 z-0 flex flex-wrap fl w-' & image_column_width & '-ns ' &  image_order & ' ' & if(image_align_v_flex,image_align_v_flex,'items-center') & ' ' & image_layer & ' ' & image_column_height & ' ' & image_align_h" 35fe3a9616151be1e9a9abc33ece88d44bd47528 
      class="image-column w-100 z-0 flex flex-wrap fl
      {enc{! o.__get(it, \u0027image_column_height\u0027) || \u0027h-100\u0027 }enc}
      {enc{! o.__get(it, \u0027image_layer\u0027) || \u0027absolute\u0027 }enc}
      {enc{! o.__get(it, \u0027image_order\u0027) || \u0027even-order-1-ns\u0027 }enc}
      {enc{! o.__get(it, \u0027image_align_h\u0027) || \u0027\u0027 }enc}
      w-{enc{! o.__get(it, \u0027image_column_width\u0027) || \u0027100\u0027 }enc}-ns
      {enc{! o.__get(it, \u0027image_align_v_flex\u0027) || \u0027items-center\u0027 }enc}">
        <div class="tc overflow-hidden relative  w-100 flex flex-column justify-center items-center

        {enc{! o.__get(it, \u0027height_reference\u0027) || \u0027h\u0027 }enc}-{enc{! o.__get(it, \u0027image_height\u0027) || \u0027100\u0027 }enc}"
         675275c791df5c494218febd9c0cde06eea2ae6b mv-attribute="class" mv-value="'tc overflow-hidden relative  w-100 flex flex-column justify-center items-center ' & height_reference & '-' &  image_height " 35fe3a9616151be1e9a9abc33ece88d44bd47528
        > 
        
          <img class="mw-100 maxh-100
          o-{enc{! o.__get(it, \u0027image_opacity\u0027) || \u0027100\u0027 }enc}
          {enc{! o.__get(it, \u0027object_fit_class\u0027) || \u0027of-scale-down\u0027 }enc}
          {enc{! o.__get(it, \u0027image_br\u0027) || \u0027br0\u0027 }enc}"
          675275c791df5c494218febd9c0cde06eea2ae6b property="image_source" 35fe3a9616151be1e9a9abc33ece88d44bd47528
          src="be9210026fcf76504a9221b2aea4c4b61cf84e51"
          alt="{enc{! o.__get(it, \u0027image_alt_text\u0027) || \u0027\u0027 }enc}"
          >
        
        </div>
      </div>
      <div class="text-column z-0 center w-100 mw7 flex flex-auto pa2 pa3-m pa4-l fl
      {enc{! o.__get(it, \u0027text_column_class\u0027) || \u0027w-30-ns\u0027 }enc}
      {enc{! o.__get(it, \u0027card_align_h\u0027) || \u0027justify-center\u0027 }enc}
      {enc{! o.__get(it, \u0027card_align_v\u0027) || \u0027\u0027 }enc}
      "
      675275c791df5c494218febd9c0cde06eea2ae6b mv-attribute="class" mv-value="'text-column z-0 center w-100 mw7 flex flex-auto pa2 pa3-m pa4-l fl ' & card_align_h & ' ' & card_align_v & ' ' & if(text_column_class,text_column_class,'w-30-ns') " 35fe3a9616151be1e9a9abc33ece88d44bd47528>
        
        <div class="text-card w-100 pa3 relative
        {enc{! o.__get(it, \u0027card_background\u0027) || \u0027\u0027 }enc}
        {enc{! o.__get(it, \u0027card_font_family\u0027) || \u0027\u0027 }enc}
        {enc{! o.__get(it, \u0027card_text_color\u0027) || \u0027\u0027 }enc}
        {enc{! o.__get(it, \u0027card_text_align\u0027) || \u0027\u0027 }enc}
        f{enc{! o.__get(it, \u0027card_font_size\u0027) || \u00273\u0027 }enc}-ns
        fw{enc{! o.__get(it, \u0027card_font_weight\u0027) || \u0027\u0027 }enc}-ns
        {enc{! o.__get(it, \u0027card_letter_spacing\u0027) || \u0027\u0027 }enc}
        {enc{! o.__get(it, \u0027card_i\u0027) || \u0027\u0027 }enc}
        {enc{! o.__get(it, \u0027card_list_style\u0027) || \u0027\u0027 }enc}
        w-{enc{! o.__get(it, \u0027card_width\u0027) || \u0027\u0027 }enc}-ns
        "
        675275c791df5c494218febd9c0cde06eea2ae6b mv-attribute="class" mv-value="'text-card w-100 pa3 relative ' & card_background & ' ' & card_text_color & ' ' & card_font_family & ' ' & card_text_align & ' f' & if(card_font_size,card_font_size,'3') & '-ns ' & ' fw' & card_font_weight & '-ns ' & ' ' & card_letter_spacing & ' ' & card_list_style & ' ' & card_i & ' w-' & if(card_width,card_width,100) & '-ns' " 35fe3a9616151be1e9a9abc33ece88d44bd47528
        >
          <span class="z--1 absolute absolute--fill bg-{enc{! o.__get(it, \u0027overlay_base\u0027) || \u0027black\u0027 }enc}-{enc{! o.__get(it, \u0027card_overlay\u0027) || \u0027\u0027 }enc}"
          675275c791df5c494218febd9c0cde06eea2ae6b mv-attribute="class" mv-value="'z--1 absolute absolute--fill bg-' & if(overlay_base,overlay_base,'black') & '-' & card_overlay" 35fe3a9616151be1e9a9abc33ece88d44bd47528
          >
          </span>

          <p  675275c791df5c494218febd9c0cde06eea2ae6b property="intro" 35fe3a9616151be1e9a9abc33ece88d44bd47528  class="ma0 pv2">{enc{! o.__get(it, \u0027intro\u0027) || \u0027\u0027 }enc}</p>

          <h1 class="ma0 pa2
          pv{enc{! o.__get(it, \u0027title_pv\u0027) || \u00273\u0027 }enc}-ns
          ph{enc{! o.__get(it, \u0027title_ph\u0027) || \u0027\u0027 }enc}-ns
          {enc{! o.__get(it, \u0027title_display\u0027) || \u0027\u0027 }enc}
          {enc{! o.__get(it, \u0027title_background\u0027) || \u0027\u0027 }enc}
          {enc{! o.__get(it, \u0027title_color\u0027) || \u0027\u0027 }enc}
          {enc{! o.__get(it, \u0027title_font_family\u0027) || \u0027\u0027 }enc}
          {enc{! o.__get(it, \u0027title_align\u0027) || \u0027tc\u0027 }enc}
          f{enc{! o.__get(it, \u0027title_font_size\u0027) || \u00272\u0027 }enc}-ns
          fw{enc{! o.__get(it, \u0027title_font_weight\u0027) || \u0027\u0027 }enc}-ns
          {enc{! o.__get(it, \u0027title_letter_spacing\u0027) || \u0027\u0027 }enc}
          {enc{! o.__get(it, \u0027title_i\u0027) || \u0027\u0027 }enc}
          {enc{! o.__get(it, \u0027title_transform\u0027) || \u0027\u0027 }enc}
          "
           675275c791df5c494218febd9c0cde06eea2ae6b
            mv-attribute="class" mv-value="'ma0 pa2 pv' & title_pv & '-ns ph' & title_ph & '-ns ' & title_display & ' ' & title_background & ' ' & title_color & ' ' & title_font_family & ' ' & title_i & ' ' & title_align  & ' f' & title_font_size & '-ns ' & ' fw' & title_font_weight & '-ns ' & title_transform & ' ' & title_letter_spacing "
            style="opacity:1;"
          35fe3a9616151be1e9a9abc33ece88d44bd47528 
          >
            <span  675275c791df5c494218febd9c0cde06eea2ae6b property="title" 35fe3a9616151be1e9a9abc33ece88d44bd47528  class="">{enc{! o.__get(it, \u0027title\u0027) || \u0027\u0027 }enc}</span>
          </h1>
          <div class="pa2 {enc{! o.__get(it, \u0027body_background\u0027) || \u0027\u0027 }enc}"
          675275c791df5c494218febd9c0cde06eea2ae6b mv-attribute="class" mv-value="'pa2 ' & body_background " 35fe3a9616151be1e9a9abc33ece88d44bd47528 
          >
             
            <span class="{enc{! o.__get(it, \u0027quote_display\u0027) || \u0027dn\u0027 }enc}"
              675275c791df5c494218febd9c0cde06eea2ae6b mv-attribute="class" mv-value="quote_display" 35fe3a9616151be1e9a9abc33ece88d44bd47528
            >
              <i class="fas fa-quote-left fa-3x fa-pull-left"></i>
            </span>
            
            <div class=" markdown lh-copy nested-links {enc{! o.__get(it, \u0027fancy_style\u0027) || \u0027\u0027 }enc}"  675275c791df5c494218febd9c0cde06eea2ae6b property="content" 35fe3a9616151be1e9a9abc33ece88d44bd47528  >
               {v{= o.sanitizer.sanitize(o.md.render(o.__get(it, \u0027content\u0027) || \u0027* It just works\u0027 || \u0027\u0027 )) }v}

              
            </div>
            
              <span class="{enc{! o.__get(it, \u0027quote_display\u0027) || \u0027dn\u0027 }enc}"
                675275c791df5c494218febd9c0cde06eea2ae6b mv-attribute="class" mv-value="quote_display" 35fe3a9616151be1e9a9abc33ece88d44bd47528
              >
                <i class="fas fa-quote-right fa-3x fa-pull-right"></i>
              </span>
            
          </div>
          

          <div class="pv4" 675275c791df5c494218febd9c0cde06eea2ae6b property="cta" 35fe3a9616151be1e9a9abc33ece88d44bd47528>
            
            <div class="fadeIn animate-edit-cta center tc ba w-100
            {enc{! o.__get(it, \u0027cta.background_color\u0027) || \u0027bg-light-gray\u0027 }enc}
            {enc{! o.__get(it, \u0027cta_display\u0027) || \u0027\u0027 }enc}
            {enc{! o.__get(it, \u0027cta.border_color\u0027) || \u0027b--primary-color\u0027 }enc}
            {enc{! o.__get(it, \u0027cta.border_radius\u0027) || \u0027br2\u0027 }enc}
            pv{enc{! o.__get(it, \u0027cta.pv\u0027) || \u00272\u0027 }enc}
            ph{enc{! o.__get(it, \u0027cta.ph\u0027) || \u00273\u0027 }enc}
            mv{enc{! o.__get(it, \u0027cta.mv\u0027) || \u00270\u0027 }enc}
            w-{enc{! o.__get(it, \u0027cta.block_button_width\u0027) || \u0027100\u0027 }enc}-ns
            "
            675275c791df5c494218febd9c0cde06eea2ae6b
            mv-attribute="class" mv-value="'fadeIn animate-edit-cta center tc ba w-100  ' & cta.background_color & ' ' & cta_display  & ' ' & cta.border_color & ' ' & cta.border_radius & ' pv' & cta.pv & ' ph' & cta.ph & ' mv' & cta.mv & ' w-' & cta.block_button_width &'-ns'"
            35fe3a9616151be1e9a9abc33ece88d44bd47528
            >
              
              

              <a class="no-underline w-100 dib"
              675275c791df5c494218febd9c0cde06eea2ae6b  property="url" 35fe3a9616151be1e9a9abc33ece88d44bd47528
               href="6aa54d91498069cf3ec3c6d46443b0b765c6cec2" >
                <div class="flex items-center justify-center {enc{! o.__get(it, \u0027cta.button_text_color\u0027) || \u0027mid-gray\u0027 }enc}
                  {enc{! o.__get(it, \u0027cta.button_i\u0027) || \u0027\u0027 }enc}
                  f{enc{! o.__get(it, \u0027cta.button_font_size\u0027) || \u0027\u0027 }enc}-ns
                "
                675275c791df5c494218febd9c0cde06eea2ae6b mv-attribute="class" mv-value="'flex items-center justify-center ' & cta.button_text_color & ' ' & cta.button_i & ' f' & cta.button_font_size & '-ns' " 35fe3a9616151be1e9a9abc33ece88d44bd47528
                >
                  
                  <span class="ph2 {enc{! o.__get(it, \u0027cta.icon_order\u0027) || \u0027\u0027 }enc}"
                  675275c791df5c494218febd9c0cde06eea2ae6b
                  mv-attribute="class" mv-value="'ph2 ' & icon_order"
                  35fe3a9616151be1e9a9abc33ece88d44bd47528
                  >
                    <i class="cta-icon fas fa-{enc{! o.__get(it, \u0027cta.inner_icon\u0027) || \u0027info\u0027 }enc}"
                    data-fa-mask="fas fa-{enc{! o.__get(it, \u0027cta.icon_mask\u0027) || \u0027circle\u0027 }enc}"
                    data-fa-transform="{enc{! o.__get(it, \u0027cta.inner_icon_transform\u0027) || \u0027shrink-4\u0027 }enc}"
                    675275c791df5c494218febd9c0cde06eea2ae6b
                    mv-attribute="class" mv-value="'cta-icon fas fa-' & inner_icon"
                    35fe3a9616151be1e9a9abc33ece88d44bd47528
                    >
                    </i>
                  </span>
                  
                  <span 675275c791df5c494218febd9c0cde06eea2ae6b  property="name"  35fe3a9616151be1e9a9abc33ece88d44bd47528 >
                  {enc{! o.__get(it, \u0027cta.name\u0027) || \u0027Quick Start\u0027 }enc}
                  </span>
                </div>
              </a>
            </div>

            675275c791df5c494218febd9c0cde06eea2ae6b

            <div class="dn show-in-edit skip-zoom-clone absolute bottom-2 w-100 overflow-visible f7 f6-ns normal fs-normal relaxed">
              <div class="relative">

                <div class="fadeIn [if(cta_display='dn','dn','flex')] flex-wrap items-center pointer [if(is_cta_form_active,'bg-black-20','')]"
mv-action="set(is_cta_form_active,!is_cta_form_active),invoke('promoteSection', section_background)"
>
  <div class="flex-auto"> 
    <div class="w-100 gt-label">&nbsp;
      <span class="pv2 ph3 cta-button-options [if(is_cta_form_active,'dib','dn')]">
        <i class="fas fa-window-close"></i>
      </span>
    </div>
    <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible">
      Click to show more options to design button.
    </div>
  </div>

  <div class="relative bg-black-10 pv2 ph3">
    <i class="fas fa-palette  white"></i>
  </div>
</div>


                <div class="cta-button-options fadeIn absolute z-1 [if(is_cta_form_active,'','dn')] top-2 pa2 ba b--white-80 bg-light-gray mid-gray mt4">
                  <div class="fadeIn [if(is_cta_form_active,'','dn')]">
  <span class="f4 dib ph1 mh1 pv2">
    Button Options
  </span>
  
  <span class="dib relative ph1 mh1 pv2">
    <span class="gt-label">
      <button type="button" class="grow pointer mh1 pa1 f6 br2 [if(button_i = 'i','bg-black-40','bg-black-20')]"
        mv-action="set(button_i, if(button_i, '','i'))"
      >
        <i class="fas fa-fw fa-italic" ></i>
      </button>
    </span>
    <span class="dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
        Toggle italic button text.
    </span>
  </span>
  <span class="dib relative ph1 mh1 pv2">
    <span class="gt-label">
      <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20  br2"
      mv-action="set(button_font_size, if(button_font_size < 7, button_font_size + 1, button_font_size))"
      >
        <i class="fas fa-fw fa-font" data-fa-transform="shrink-6" ></i>
      </button>
    </span>
    <span class="dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
        Decrease font size.
    </span>
  </span>
  <span class="dib relative ph1 mh1 pv2">
    <span class="gt-label">
      <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20  br2"
      mv-action="set(button_font_size, if(button_font_size > 1, button_font_size - 1, button_font_size))"
      >
          <i class="fas fa-fw fa-font"  ></i>
      </button>
    </span>
    <span class="dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
        Increase font size.
    </span>
  </span>
</div>

                  
                  

<div >
  <h3 class="mt2"></h3>
  <div class="cf flex flex-wrap ba b--black-05" >
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        

        <div>Background Color 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(background_color, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="background_color" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="solid_background"
          
           value="bg-light-gray" 
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',background_color)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        

        <div>Text Color 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(button_text_color, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="button_text_color" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="text_color"
          
           value="mid-gray" 
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',button_text_color)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        

        <div>Border Color 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(border_color, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="border_color" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="border_color"
          
           value="b--light-gray" 
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',border_color)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        

        <div>Border Radius 
        
        
        </div>
        <div 
        class=" bg-white 
         flex  flex-wrap   pt1 cf items-center ">
        
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
             property="border_radius"
            
            
            id="radio-32-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-32-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="br0"   checked 
            />
            <label class="flex-auto ph2" for="radio-32-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            br0 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-32-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-32-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="br1"  
            />
            <label class="flex-auto ph2" for="radio-32-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            br1 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-32-2-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-32-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="br2"  
            />
            <label class="flex-auto ph2" for="radio-32-2-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            br2 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-32-3-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-32-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="br3"  
            />
            <label class="flex-auto ph2" for="radio-32-3-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            br3 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-32-4-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-32-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="br4"  
            />
            <label class="flex-auto ph2" for="radio-32-4-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            br4 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-32-5-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-32-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="br-pill"  
            />
            <label class="flex-auto ph2" for="radio-32-5-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            br-pill 
            </label>
          </div>
          
        
        </div> 
        
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        

        <div>Button Width 
        
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input  min="10"  max="100"  step="10" 
           property="block_button_width" 
          type="range" 
          class="flex-auto  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
          
           value="50" 
          data-minchars="0" 
          />
          
        
        </div> 
        
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        

        <div>Horizontal Padding  [if(ph,0.25 * pow(2,(ph-1)),'0')] REM
        
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input  max="4"  step="1" 
           property="ph" 
          type="range" 
          class="flex-auto  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
          
           value="3" 
          data-minchars="0" 
          />
          
        
        </div> 
        
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        

        <div>Vertical Padding  [if(pv,0.25 * pow(2,(pv-1)),'0')] REM 
        
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input  max="4"  step="1" 
           property="pv" 
          type="range" 
          class="flex-auto  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
          
           value="2" 
          data-minchars="0" 
          />
          
        
        </div> 
        
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        

        <div>Vertical Margin  [if(mv,0.25 * pow(2,(mv-1)),'0')] REM 
        
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input  min="1"  max="5"  step="1" 
           property="mv" 
          type="range" 
          class="flex-auto  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
          
           value=""
          data-minchars="0" 
          />
          
        
        </div> 
        
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Outer Icon 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(icon_mask, '')">X</span>
        
        </div>
        <div  mv-action="invoke(&#39;setItemsAttr&#39;, icon_mask, &#39;root.children.cta.children.url&#39;, &#39;data-fa-mask&#39;, &#39;i.cta-icon&#39;)" 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="icon_mask" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="fas_list"
          
           value="circle" 
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',icon_mask)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            Optional. This is the icon on the outside. It is rendered on the button only if an inner icon has been selected.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Inner Icon  <i class="fas fa-[inner_icon]"></i>
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(inner_icon, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="inner_icon" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="fas_list"
          
           value="info" 
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',inner_icon)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            If an icon is selected, it is rendered alone, or with a selected mask.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Inner Icon transform   <button class="f7 pa1 b--black-20 br1 " type="button" mv-action="invoke('setItemsAttr', inner_icon_transform, 'root.children.cta.children.url', 'data-fa-transform', 'i.cta-icon')">
  ok
  </button>

        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(inner_icon_transform, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="inner_icon_transform" 
          type="text" 
          class="flex-auto  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
          
           value="shrink-4" 
          data-minchars="0" 
          />
          
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            Use the keywords and a number to resize and position the icon: shrink grow rotate up down left right flip-v flip-h
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Icon Order 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(icon_order, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="icon_order" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
           data-list="order-1, dn" 
           value=""
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',icon_order)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            Use order-1 to place icon after the button text, and dn to hide the icon. 
          </div>
        
      </div>
       
    
       
        <input class="absolute" hidden property="button_i" value="" />
       
    
       
        <input class="absolute" hidden property="button_font_size" value="4" />
       
    
  </div>
</div> 


                </div>
              </div>
            </div>

            35fe3a9616151be1e9a9abc33ece88d44bd47528
          </div>
          

        </div>

      </div>

    </div> 
    675275c791df5c494218febd9c0cde06eea2ae6b

      

<div class="fadeIn ui-image-position dn [if(toolbar_id = 1, 'show-in-edit','')] absolute top-2 left-2 right-0 center">
  <div class="relative">
    <div class="absolute top-0 bg-black-[toolbar_alpha] white ph3 left-0 right-0 center mw8">
      <div class="mv2 flex flex-wrap items-center">

        <span class="dib relative ph1 mh1 pv2">
          <span class="pa1 dim dib pointer gt-label [if(image_order ='odd-order-1-ns' or image_order ='even-order-1-ns','outline','')]"
            mv-action="set(image_order,if(!image_order or image_order='line-start','odd-order-1-ns',if(image_order='even-order-1-ns','line-start','even-order-1-ns'))),
            invoke('changeFadeIn', image_order, 'root.children.image_source.element.parentElement.parentElement.parentElement')"
          >
          <i class="fas f3 f4-l fa-fw fa-address-card fa-flip-horizontal"></i>

          </span>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              Change the order of image to create alternating sections. The value of current setting is [image_order].
          </span>
        </span>

        <span class="dib relative ph1 mh1 pv2"><span class="pa1 dim dib pointer gt-label [if(image_under_text,'outline','')]"
            mv-action="
            set(image_under_text, !image_under_text ),
            set(image_layer,if(image_under_text,'absolute','static')),
            set(image_column_height,if(image_under_text,'h-100','')),
            set(image_column_width,if(!image_under_text and image_column_width>60,60,image_column_width)),
            set(text_column_class,if(image_under_text,'w-100-ns', 'w-' & (100-image_column_width) &'-ns' )),
            invoke('changeFadeIn', image_layer, 'root.children.image_source.element.parentElement.parentElement'),
            "
          >
            <i class="fas f3 f4-l fa-hiking fa-fw " data-fa-mask="fas f3 f4-l fa-align-justify" data-fa-transform="shrink-4"></i>
          </span>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              Whether to always place image under text. If disabled, the image is placed under text when the width is over 60%.
          </span>
        </span>

        <span class="dib relative ph1 mh1 pv2">
          <span class="pa1 dim dib pointer gt-label [if(section_max_width ='mw-100','outline','')]"
            mv-action="set(section_max_width,if(!section_max_width or section_max_width='mw8', 'mw-100', 'mw8')),
            invoke('changeFadeIn', section_max_width, 'root.children.image_source.element.parentElement.parentElement')"
          >
            <i class="fas f3 f4-l fa-fw  fa-laptop-code"></i>
          </span>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              Allow the image to expand to the side of the window.
          </span>
        </span>


        <span class="dib relative ph1 mh1 pv2">
          <span class="pa1 dim dib pointer gt-label [if(image_align_v_flex ='items-start','outline','')]"
            mv-action="set(image_align_v_flex,'items-start'),
            invoke('changeFadeIn', image_align_v_flex, 'root.children.image_source.element.parentElement.parentElement')"
          >
            <i class="fas f3 f4-l fa-fw  fa-user" data-fa-transform="shrink-7 up-4" data-fa-mask="fas f3 f4-l fa-square-full"></i>
          </span>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              Align the image to the top if the image is not full height.
          </span>
        </span>
        <span class="dib relative ph1 mh1 pv2">
          <span class="pa1 dim dib pointer gt-label [if(image_align_v_flex ='items-center','outline','')]"
            mv-action="set(image_align_v_flex,'items-center'),invoke('changeFadeIn', image_align_v_flex, 'root.children.image_source.element.parentElement.parentElement')"
          >
            <i class="fas f3 f4-l fa-fw fa-user" data-fa-transform="shrink-7" data-fa-mask="fas f3 f4-l fa-square-full"></i>
          </span>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              Align the image to the middle vertically if the image is not full height.
          </span>
        </span>
        <span class="dib relative ph1 mh1 pv2">
          <span class="pa1 dim dib pointer gt-label [if(image_align_v_flex ='items-end','outline','')]"
            mv-action="set(image_align_v_flex,'items-end'),invoke('changeFadeIn', image_align_v_flex, 'root.children.image_source.element.parentElement.parentElement')"
          >
            <i class="fas f3 f4-l fa-fw fa-user" data-fa-transform="shrink-7 down-4" data-fa-mask="fas f3 f4-l fa-square-full"></i>
          </span>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              Align the image to the bottom if the image is not full height.
          </span>
        </span>
        
        <span class="dib relative ph1 mh1 pv2">
          <span class="pa1 dim dib pointer gt-label [if(object_fit_class ='of-cover','outline','')]"
            mv-action="
            set(object_fit_class,if('of-cover'=object_fit_class,'of-scale-down','of-cover')),
            invoke('replaceNodeClass',object_fit_class,'mavo.root.children.image_source.element','of-'),
            invoke('changeFadeIn', object_fit_class, 'root.children.image_source.element.parentElement.parentElement')"
          >
            <i class="fas f3 f4-l fa-fw fa-arrows-alt" data-fa-transform="shrink-4 bottom-4" data-fa-mask="fas f3 f4-l fa-square-full"></i>
          </span>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              Expand image to cover the container
          </span>
        </span>

        <span class="dib relative ph1 mh1 pv2">
          <span class="pa1 dim dib pointer gt-label [if(image_br ='br-100','outline','')]"
            mv-action="set(image_br,if(image_br='br-100','br0','br-100')),
            invoke('toggleClass', image_source,'','br-100'),
            invoke('changeFadeIn', image_br, 'root.children.image_source.element.parentElement.parentElement')"
          >
            <i class="fas f3 f4-l fa-fw  fa-user-circle" ></i>
          </span>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              Toggle round image
          </span>
        </span><span class="[if(image_layer='absolute','dib','dn')] relative ph1 mh1 pv2 ">
          <span class="pa1 dim dib pointer gt-label [if(image_align_h ='left-0','outline','')]"
            mv-action="set(image_align_h,'left-0'),invoke('changeFadeIn', image_align_h, 'root.children.image_source.element.parentElement.parentElement')"
          >
            <i class="fas f3 f4-l fa-fw fa-users" data-fa-transform="shrink-7 left-4" data-fa-mask="fas f3 f4-l fa-square-full"></i>
          </span>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              Align the image to the left if the image is not full width.
          </span>
        </span>
        <span class="if(image_layer='absolute','dib','dn')] relative ph1 mh1 pv2">
          <span class="pa1 dim dib pointer gt-label [if(contains(image_align_h,'left--'),'outline','')]"
            mv-action="set(image_align_h,'left--' & ((100-image_column_width)/2) & '-ns'),invoke('changeFadeIn', image_align_h, 'root.children.image_source.element.parentElement.parentElement')"
          >
            <i class="fas f3 f4-l fa-fw fa-users" data-fa-transform="shrink-7" data-fa-mask="fas f3 f4-l fa-square-full"></i>
          </span>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              Align the image to the center if the image is not full width.
          </span>
        </span>
        <span class="if(image_layer='absolute','dib','dn')] relative ph1 mh1 pv2">
          <span class="pa1 dim dib pointer gt-label [if(image_align_h ='right-0','outline','')]"
            mv-action="set(image_align_h,'right-0'),invoke('changeFadeIn', image_align_h, 'root.children.image_source.element.parentElement.parentElement')"
          >
            <i class="fas f3 f4-l fa-fw fa-users" data-fa-transform="shrink-7 right-4" data-fa-mask="fas f3 f4-l fa-square-full"></i>
          </span>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              Align the image to the right if the image is not full width.
          </span>
        </span>

        <span class="dib relative ph1 mh1 pv2">
          <span class="pa1 dim dib pointer gt-label [if(card_align_h ='justify-start','outline','')]"
            mv-action="set(card_align_h,'justify-start'),invoke('changeFadeIn', card_align_h, 'root.children.content.element.parentElement')"
          >
            <i class="fas f3 f4-l fa-fw fa-bars" data-fa-transform="shrink-6 left-4" data-fa-mask="fas f3 f4-l fa-square-full"></i>
          </span>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              Align the text block to the left if not full width.
          </span>
        </span>
        <span class="dib relative ph1 mh1 pv2">
          <span class="pa1 dim dib pointer gt-label [if(card_align_h ='justify-center','outline','')]"
            mv-action="set(card_align_h,'justify-center'),invoke('changeFadeIn', card_align_h, 'root.children.content.element.parentElement')"
          >
            <i class="fas f3 f4-l fa-fw fa-bars" data-fa-transform="shrink-6" data-fa-mask="fas f3 f4-l fa-square-full"></i>
          </span>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              Align the text block to the center if not full width.
          </span>
        </span>
        <span class="dib relative ph1 mh1 pv2">
          <span class="pa1 dim dib pointer gt-label [if(card_align_h ='justify-end','outline','')]"
            mv-action="set(card_align_h,'justify-end'),invoke('changeFadeIn', card_align_h, 'root.children.content.element.parentElement')"
          >
            <i class="fas f3 f4-l fa-fw fa-bars" data-fa-transform="shrink-6 right-4" data-fa-mask="fas f3 f4-l fa-square-full"></i>
          </span>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              Align the text block to the right if not full width.
          </span>
        </span>

        <span class="dib relative ph1 mh1 pv2">
          <span class="pa1 dim dib pointer gt-label [if(card_align_v ='items-start','outline','')]"
            mv-action="set(card_align_v,'items-start'),invoke('changeFadeIn', card_align_v, 'root.children.content.element.parentElement')"
          >
            <i class="fas f3 f4-l fa-fw fa-font" data-fa-transform="shrink-6 up-4" data-fa-mask="fas f3 f4-l fa-square-full"></i>
          </span>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              Align the text block to the top if the image is higher.
          </span>
        </span>
        <span class="dib relative ph1 mh1 pv2">
          <span class="pa1 dim dib pointer gt-label [if(card_align_v ='items-center','outline','')]"
            mv-action="set(card_align_v,'items-center'),invoke('changeFadeIn', card_align_v, 'root.children.content.element.parentElement')"
          >
            <i class="fas f3 f4-l fa-fw fa-font" data-fa-transform="shrink-6" data-fa-mask="fas f3 f4-l fa-square-full"></i>
          </span>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              Align the text block to the middle vertically if the image is higher.
          </span>
        </span>
        <span class="dib relative ph1 mh1 pv2">
          <span class="pa1 dim dib pointer gt-label [if(card_align_v ='items-end','outline','')]"
            mv-action="set(card_align_v,'items-end'),invoke('changeFadeIn', card_align_v, 'root.children.content.element.parentElement')"
          >
            <i class="fas f3 f4-l fa-fw fa-font" data-fa-transform="shrink-6 down-4" data-fa-mask="fas f3 f4-l fa-square-full"></i>
          </span>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              Align the text block to the bottom if the image is higher.
          </span>
        </span>

        <span class="dib relative ph1 mh1 pv2">
          <span class="pa1 dim dib pointer gt-label [if(cta_display ='dn','','outline')]"
            mv-action="set(cta_display,if(cta_display='dn','','dn')),
            invoke('changeFadeIn',cta_display,'root.children.image_source.element.parentElement.parentElement')
            "
          >
            <i class="fas f3 f4-l fa-fw fa-handshake" data-fa-transform="shrink-6" data-fa-mask="fas f3 f4-l fa-square"></i>
          </span>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              Toggle call-to-action button.
          </span>
        </span>

        <span class="dib relative ph1 mh1 pv2">
          <span class="pa1 dim dib pointer gt-label [if(quote_display ='di','outline','')]"
            mv-action="set(quote_display,if(quote_display='di','dn','di'))"
          >
            <i class="fas f3 f4-l fa-fw fa-quote-left" data-fa-transform="shrink-6" data-fa-mask="fas f3 f4-l fa-square"></i>
          </span>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              Toggle big quotation mark around text.
          </span>
        </span>

        <span class="dib relative ph1 mh1 pv2">
          <span class="pa1 dim dib pointer gt-label [if(title_display ='dn','','outline')]"
            mv-action="set(title_display,if(title_display='dn','','dn') ),
            invoke('changeFadeIn',title_display, 'root.children.image_source.element.parentElement.parentElement'),
            invoke('changeFadeIn',title_display, 'root.children.title.element.parentElement.parentElement', true)
            "
          >
            <i class="fas f3 f4-l fa-fw fa-heading" data-fa-transform="shrink-6" data-fa-mask="fas f3 f4-l fa-square"></i>
          </span>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              Toggle display title
          </span>
        </span>

      </div>

      <div class="cf flex flex-wrap"> 
        <div class="flex-auto relative fl ph2 w-100 w-50-m w-30-l pv3 ">
          <div class="gt-label flex"
          mv-action="set(text_column_class, if(image_column_width > 60, 'w-100-ns', 'w-' & (100 - image_column_width) & '-ns')),
          invoke('changeFadeIn', image_column_width, 'root.children.image_source.element.parentElement.parentElement'),
          set(image_layer, if(image_column_width>60 or image_under_text,'absolute', 'static')),
          set(image_column_height, if(image_column_width>60 or image_under_text,'h-100', '')),
          set(image_align_h, if(image_align_h != 'left-0' and image_align_h != 'right-0', 'left--' & ((100-image_column_width)/2 ) & '-ns', image_align_h))
          "
          >
            <div class="absolute f6 top-0 overflow-visible">Image [image_column_width]%, text column [if(image_under_text or image_column_width > 60, 100, 100-image_column_width)]% </div>

            <i class="fas f3 f4-l fa-fw fa-image"></i>
            <span class="w1"></span>
            <input list="width_of_container" property="image_column_width" type="range" min="0" max="100" step="10" class="ph1 flex-auto  bg-white  br0 b--black-10 " value="100"  >
          </div>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              This is the width of the image column. When placing image beside text, this will decide how much space to allocate to image and text.
          </span>
        </div>
        <div class="flex-auto relative fl ph2 w-100 w-50-m w-30-l pv3">
          <div class="gt-label flex"
          mv-action="invoke('replaceNodeClass', image_opacity, 'mavo.root.children.image_source.element', 'o-', 'o-')"
          >
              <i class="fas f3 f4-l fa-fw fa-wine-glass-alt"></i>
              <span class="w1"></span>
            <input list="width_of_container" property="image_opacity" type="range" min="10" max="100" step="10" class="ph1 flex-auto  bg-white  br0 b--black-10 " value="100"  >
          </div>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              Change the opacity of the image, allow background color to partially come thorough, and make text more readable.
          </span>
        </div>
        <div class="flex-auto fl relative ph2 w-100 w-50-m w-20-l pv3">
          <div class="gt-label flex">
            <span
            class="dib pointer grow [if(overlay_base='white','outline','')]"
            mv-action="set(overlay_base,if(overlay_base='white','black','white'))"
            >
              <i class="fas f3 f4-l fa-fw fa-adjust" ></i>
            </span>
            <span class="w1"></span>
            <input list="width_of_container" property="card_overlay" type="range" min="0" max="50" step="10" class="ph1 flex-auto bg-white  br0 b--black-10 " value="0"  >
          </div>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              Apply a semi-transparent layer below text to make it more readable. Click the icon to toggle semi-transparent black or white.
          </span>
        </div>

        <div class="flex-auto fl relative ph2 w-100 w-50-m w-20-l pv3 "> 
          <div class="gt-label flex"
            mv-action="invoke('changeFadeIn', card_width, 'root.children.image_source.element.parentElement.parentElement.parentElement')"
          >
            <div class="absolute f6 top-0 overflow-visible">Text [card_width]% of column.</div>
            <i class="fas f3 f4-l fa-fw fa-bars" ></i>
            <span class="w1"></span>
            <input list="width_of_container" property="card_width" type="range" min="20" max="100" step="10" class="ph1 flex-auto bg-white br0 b--black-10 " value="100"  >
          </div>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              This is the width of the text block within the text column.
          </span>
        </div>
      </div>
    </div>
<div class="w2 absolute left--2" style="top: 8rem;">
      <div class="relative pv2 ph1 overflow-visible">
        <div class="gt-label f7">[image_height]%</div>
        <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
            The height of image in [if(height_reference='vh','viewport','section' )].
        </span>
      </div>

      <div class="pv2 ph1">
        <span class="dib relative ">
          <span class="pa1 dim dib pointer gt-label [if('vh' = height_reference, 'outline')]"
            mv-action="set(height_reference,if(height_reference='vh','h','vh'))"
          >
            <i class="fas f3 f4-l fa-fw fa-laptop"></i>
          </span>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              Toggle percentage reference to viewport height, or dynamic section height.
          </span>
        </span>
      </div>

      <div class="pv2 ph1 relative">
        <span class="pa1 dim dib pointer gt-label [if(image_height =100,'outline','')]"
          mv-action="set(image_height, 100),
          invoke('changeFadeIn', image_height, 'root.children.image_source.element.parentElement.parentElement')"
        >
          <i class="fas f3 f4-l fa-hiking fa-fw" data-fa-mask="fas f3 f4-l fa-square-full"  data-fa-transform="shink-4"></i>
        </span>
        <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
          Set image height to 100%
        </span>
      </div>
      <div class="pv2 ph1 relative">
        <span class="pa1 dim dib pointer gt-label [if(image_height = 75,'outline','')]"
          mv-action="set(image_height, 75),
          invoke('changeFadeIn', image_height, 'root.children.image_source.element.parentElement.parentElement')"
        >
          <i class="fas f3 f4-l fa-hiking fa-fw" data-fa-mask="fas f3 f4-l fa-square-full"  data-fa-transform="shink-4 down-3"></i>
        </span>
        <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
          Set image height to 75%
        </span>
      </div>
      <div class="pv2 ph1 relative">
        <span class="pa1 dim dib pointer gt-label [if(image_height = 50,'outline','')]"
          mv-action="set(image_height, 50),
          invoke('changeFadeIn', image_height, 'root.children.image_source.element.parentElement.parentElement')"
        >
          <i class="fas f3 f4-l fa-hiking fa-fw" data-fa-mask="fas f3 f4-l fa-square-full"  data-fa-transform="shink-4 down-6"></i>
        </span>
        <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
          Set image height to 50%
        </span>
      </div>
      <div class="pv2 ph1 relative">
        <span class="pa1 dim dib pointer gt-label [if(image_height = 25,'outline','')]"
          mv-action="set(image_height, 25),
          invoke('changeFadeIn', image_height, 'root.children.image_source.element.parentElement.parentElement')"
        >
          <i class="fas f3 f4-l fa-hiking fa-fw" data-fa-mask="fas f3 f4-l fa-square-full"  data-fa-transform="shink-4 down-9"></i>
        </span>
        <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
          Set image height to 25%
        </span>
      </div>

      <div class="h2">&nbsp;</div>

    </div>

    <input hidden list="height_of_container" property="image_height" type="range" min="25" max="100" step="25" class="w-100  bg-white  br0 b--black-10 " value="100"  >
    <input hidden property="text_column_class" >
    <input hidden property="image_layer" value="absolute">
    <input hidden property="image_under_text" type="checkbox" >
    <input hidden property="image_column_height">
    <input hidden property="image_align_h">
    <input hidden property="image_align_v_flex">
    <input hidden property="card_align_h">
    <input hidden property="card_align_v">
    <input hidden property="overlay_base">
    <input hidden property="cta_display">
    <input hidden property="quote_display" value="dn">
    <input hidden property="title_display">
  </div>
</div>


      <div class="absolute top-2 center mw8 left-2 right-0 ph2" > 
        <div class="fadeIn dn [if(toolbar_id = 2, 'show-in-edit','')] relative w-100 overflow-visible">
          
          <div class="f7 f6-ns normal fs-normal relaxed ">

            
<div class="ba b--white-30 w-100 bg-black-[toolbar_alpha] [if(text_toolbar_id > 0,'dn','')]">
  <div class="mv2 flex flex-wrap items-center">
    <span class="dib relative ph1 mh1 pv2"
    mv-action="invoke('toggleClass', section_background, '.title-options', 'dn')"
    >
      <span class="gt-label">
        <i class="fas fa-heading  white pa2 br0"></i>
      </span>
      <span class="dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
          These styles apply to the title only. Click here to show more options.
      </span>
    </span>

    <span class="dib relative ph1 mh1 pv2"
        mv-action="invoke('toggleClass', section_background, '.text-block-toolbar', 'dn')"
      >
      <span class="gt-label">
        <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20 white br2" >
          <i class="fas fa-keyboard"></i>
        </button>
      </span>
      <span class="dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
          Toggle text block toolbar.
      </span>

    </span>

    <span class="dib relative ph1 mh1 pv2">
      <span class="gt-label">
        <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20 white br2 [if(title_transform = 'ttu','outline','')]" mv-action="set(title_transform, if(title_transform = 'ttu', '', 'ttu')), invoke('changeFadeIn', title_transform, 'root.children.title.element.parentElement')">
          <i class="fas fa-fw fa-font" ></i>
        </button>
      </span>
      <span class="ttu dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
          Toggle upper case
      </span>
    </span>

    <span class="dib relative ph1 mh1 pv2">
      <span class="gt-label">
        <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20 white br2 [if(title_transform = 'ttc','outline','')]" mv-action="set(title_transform, if(title_transform = 'ttc', '', 'ttc')), invoke('changeFadeIn', title_transform, 'root.children.title.element.parentElement')">
          <i class="fas fa-fw fa-ad" ></i>
        </button>
      </span>
      <span class="ttc dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
          Toggle captilize case first letter
      </span>
    </span>

    <span class="dib relative ph1 mh1 pv2">
      <span class="gt-label">
        <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20 white br2 [if(title_i = 'i', 'outline','')]" mv-action="set(title_i, if(title_i = 'i', 'fs-normal','i')), invoke('changeFadeIn', title_i, 'root.children.title.element.parentElement')">
          <i class="fas fa-fw fa-italic" ></i>
        </button>
      </span>
      <span class="i dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
          Toggle italic style
      </span>
    </span>

    <span class="dib relative ph1 mh1 pv2">
      <span class="gt-label">
        <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20 white br2 [if(title_align = 'tc', 'outline','')]" mv-action="set(title_align, if(title_align = 'tc','ts','tc')), invoke('changeFadeIn', title_align, 'root.children.title.element.parentElement')">
          <i class="fas fa-fw fa-align-center"></i>
        </button>
      </span>
      <span class="tc dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
          Toggle align center
      </span>
    </span>

    <span class="dib relative ph1 mh1 pv2">
      <span class="gt-label">
        <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20 white br2"
        mv-action="set(title_font_size, if(title_font_size= -5, 1, if(title_font_size < 4, title_font_size + 1, title_font_size))),
        invoke('changeFadeIn', title_font_size, 'root.children.title.element.parentElement')">
          <i class="fas fa-fw fa-sort-alpha-down" ></i>
        </button>
      </span>
      <span class="f7 dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
          Decrease font size for medium and large screens.
      </span>
    </span>

    <span class="dib relative ph1 mh1 pv2">
      <span class="gt-label">
        <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20 white br2"
        mv-action="set(title_font_size, if(title_font_size = 1, -5, if(title_font_size > -6, title_font_size - 1, title_font_size))),
        invoke('changeFadeIn', title_font_size, 'root.children.title.element.parentElement')">
          <i class="fas fa-fw fa-sort-alpha-up" ></i>
        </button>
      </span>
      <span class="f5 dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
          Increase font size for medium and large screens.
      </span>
    </span>

    <span class="dib relative ph1 mh1 pv2">
      <span class="gt-label">
        <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20 white br2" mv-action="set(title_font_weight, if(title_font_weight > 1, title_font_weight - 1, title_font_weight)), invoke('changeFadeIn', title_font_weight, 'root.children.title.element.parentElement')">
          <i class="fw1 fas fa-fw fa-angle-down" ></i>
        </button>
      </span>
      <span class="fw1 dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
          Decrease font weight for medium and large screens.
      </span>
    </span>

    <span class="dib relative ph1 mh1 pv2">
      <span class="gt-label">
        <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20 white br2" mv-action="set(title_font_weight, if(title_font_weight < 9, title_font_weight + 1, title_font_weight)), invoke('changeFadeIn', title_font_weight, 'root.children.title.element.parentElement')">
          <i class="fw9-ns fas fa-fw fa-chevron-up" ></i>
        </button>
      </span>
      <span class="fw9-ns dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
          Increase font weight for medium and large screens.
      </span>
    </span>

    <span class="dib relative ph1 mh1 pv2">
      <span class="gt-label">
        <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20 white br2 [if(title_letter_spacing, 'outline')]" mv-action="set(title_letter_spacing, if(title_letter_spacing = 'tracked', 'tracked-mega',if(title_letter_spacing = 'tracked-mega','','tracked')) ), invoke('changeFadeIn', title_letter_spacing, 'root.children.title.element.parentElement')">
          <i class="fas fa-fw fa-text-width" ></i>
        </button>
      </span>
      <span class="tracked-mega dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
          Increase letter spacing
      </span>
    </span>

  <span class="flex-auto dib relative ph1 mh1 pv2"
      mv-action="invoke('toggleClass', section_background, '.title-options', 'dn')"
    >
    <span class="gt-label">
      <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20 white br2" >
        <i class="fas fa-cog"></i>
      </button>
    </span>
    <span class="dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
        Show more options of formatting title.
    </span>
  </span>

  </div>

  <div class="cf flex flex-wrap items-center">
  
    <div class="w4 flex-auto relative mh1 fl mid-gray flex flex-nowrap items-center cf mv2">
      <input placeholder="heading font" property="title_font_family" data-path="serif_font_family" data-minchars="0"
      class="white bg-transparent w-100 br0 b--white-20" />
      <span class="gt-label">
        <button type="button" mv-action="invoke('toggleDDInput',title_font_family)"
          class="dropdown-btn grow pointer pa1 f7 bg-black-20 white br0">
          <i class="fas fa-fw fa-caret-down"></i>
        </button>
      </span>
      <span class="right-0 dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
          Click the dropdown button to select font from list, or type to search.
      </span>
    </div>

    <div class="w4 flex-auto relative mh1 fl mid-gray flex flex-nowrap items-center cf mv2">
      <input placeholder="heading color" property="title_color" data-path="text_color" data-minchars="0"
      class="white bg-transparent w-100 br0 b--white-20" />
      <span class="gt-label">
        <button type="button" mv-action="invoke('toggleDDInput',title_color)"
        class="dropdown-btn grow pointer pa1 f7 bg-black-20 white br0">
          <i class="fas fa-fw fa-caret-down"></i>
        </button>
      </span>
      <span class="right-0 dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
          Click the dropdown button to select font color from list, or type to search.
      </span>

    </div>

    <div class="w4 flex-auto relative mh1 fl mid-gray flex flex-nowrap items-center cf mv2">
      <input placeholder="heading background" property="title_background" data-path="solid_background" data-minchars="0"
      class="white bg-transparent w-100 br0 b--white-20" />
      <span class="gt-label">
        <button type="button" mv-action="invoke('toggleDDInput',title_background)"
        class="dropdown-btn grow pointer pa1 f7 bg-black-20 white br0">
          <i class="fas fa-fw fa-caret-down"></i>
        </button>
      </span>
      <span class="right-0 dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
          Click the dropdown button to select background color from list, or type to search.
      </span>
    </div>
  </div>


</div> 

            
<div class="dn text-block-toolbar fadeIn">
  <div class=" ba b--white-30 w-100 bg-black-[toolbar_alpha] ">

    <div class="cf flex flex-wrap items-center">
      <span class="dib relative ph1 mh1 pv2">
        <span class="gt-label">
          <i class="fas fa-paragraph  white pa2 br0"></i>
        </span>
        <span class="dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
            These styles apply to the whole text block.
        </span>
      </span>

      <span class="dib relative ph1 mh1 pv2">
        <span class="gt-label">
          <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20 white br2 [if(card_i = 'i', 'outline','')]" mv-action="set(card_i, if(card_i, '','i')), invoke('changeFadeIn', card_i, 'root.children.content.element')">
            <i class="fas fa-fw fa-italic" ></i>
          </button>
        </span>
        <span class="i dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
            Toggle italic style
        </span>
      </span>
      <span class="dib relative ph1 mh1 pv2">
        <span class="gt-label">
          <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20 white br2 [if(card_text_align = 'tl', 'outline','')]" mv-action="set(card_text_align, 'tl'), invoke('changeFadeIn', card_text_align, 'root.children.content.element')">
            <i class="fas fa-fw fa-align-left"></i>
          </button>
        </span>
        <span class="tl dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
            Align text to left
        </span>
      </span>

      <span class="dib relative ph1 mh1 pv2">
        <span class="gt-label">
          <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20 white br2 [if(card_text_align = 'tc', 'outline','')]" mv-action="set(card_text_align, 'tc'), invoke('changeFadeIn', card_text_align, 'root.children.content.element')">
            <i class="fas fa-fw fa-align-center"></i>
          </button>
        </span>
        <span class="tc dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
            Align text to center
        </span>
      </span>

      <span class="dib relative ph1 mh1 pv2">
        <span class="gt-label">
          <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20 white br2 [if(card_text_align = 'tr', 'outline','')]" mv-action="set(card_text_align, 'tr'), invoke('changeFadeIn', card_text_align, 'root.children.content.element')">
            <i class="fas fa-fw fa-align-right"></i>
          </button>
        </span>
        <span class="tr dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
            Align text to right
        </span>
      </span>

      <span class="dib relative ph1 mh1 pv2">
        <span class="gt-label">
          <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20 white br2 [if(card_text_align = 'tj', 'outline','')]" mv-action="set(card_text_align, 'tj'), invoke('changeFadeIn', card_text_align, 'root.children.content.element')">
            <i class="fas fa-fw fa-align-justify"></i>
          </button>
        </span>
        <span class="tj dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
            Justify text both sides
        </span>
      </span>

      <span class="dib relative ph1 mh1 pv2">
        <span class="gt-label">
          <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20 white br2" mv-action="set(card_font_size, if(card_font_size < 6, card_font_size + 1, card_font_size)), invoke('changeFadeIn', card_font_size, 'root.children.content.element')">
            <i class="fas fa-fw fa-sort-alpha-down" ></i>
          </button>
        </span>
        <span class="f7 dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
            Decrease font size for medium and large screens.
        </span>
      </span>

      <span class="dib relative ph1 mh1 pv2">
        <span class="gt-label">
          <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20 white br2" mv-action="set(card_font_size, if(card_font_size > 3, card_font_size - 1, card_font_size)), invoke('changeFadeIn', card_font_size, 'root.children.content.element')">
            <i class="fas fa-fw fa-sort-alpha-up" ></i>
          </button>
        </span>
        <span class="f5 dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
            Increase font size for medium and large screens.
        </span>
      </span>

      <span class="dib relative ph1 mh1 pv2">
        <span class="gt-label">
          <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20 white br2" mv-action="set(card_font_weight, if(card_font_weight > 1, card_font_weight - 1, card_font_weight)), invoke('changeFadeIn', card_font_weight, 'root.children.content.element')">
            <i class="fw1 fas fa-fw fa-angle-down" ></i>
          </button>
        </span>
        <span class="fw1 dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
            Decrease font weight for medium and large screens.
        </span>
      </span>

      <span class="dib relative ph1 mh1 pv2">
        <span class="gt-label">
          <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20 white br2" mv-action="set(card_font_weight, if(card_font_weight < 9, card_font_weight + 1, card_font_weight)), invoke('changeFadeIn', card_font_weight, 'root.children.content.element')">
            <i class="fw9-ns fas fa-fw fa-chevron-up" ></i>
          </button>
        </span>
        <span class="fw9 dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
            Increase font weight for medium and large screens.
        </span>
      </span>

      <span class="dib relative ph1 mh1 pv2">
        <span class="gt-label">
          <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20 white br2 [if(card_letter_spacing, 'outline')]" mv-action="set(card_letter_spacing, if(card_letter_spacing = 'tracked', 'tracked-mega',if(card_letter_spacing = 'tracked-mega','','tracked')) ), invoke('changeFadeIn', card_letter_spacing, 'root.children.content.element')">
            <i class="fas fa-fw fa-text-width" ></i>
          </button>
        </span>
        <span class="tracked-mega dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
            Increase letter spacing
        </span>
      </span>

      <span class="dib relative ph1 mh1 pv2">
        <span class="gt-label">
          <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20 white br2 [if(card_list_style, 'outline')]" mv-action="set(card_list_style, if(card_list_style,'','nested-list-reset') ), invoke('changeFadeIn', card_list_style, 'root.children.content.element')">
            <i class="fas fa-fw fa-list-ul" ></i>
          </button>
        </span>
        <span class="dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
          Reset list style. When enabled, it keeps the data, but does not display bullet point or number before list item.
        </span>
      </span>

    </div>

  <div class="cf flex flex-wrap items-center">

    <div class="w4 flex-auto relative mh1 fl  mid-gray flex flex-nowrap items-center cf mv2">
      <input placeholder="font" property="card_font_family" data-path="serif_font_family" data-minchars="0"
      class="white bg-transparent w-100 br0 b--white-20" />
      <span class="gt-label">
        <button type="button" mv-action="invoke('toggleDDInput',card_font_family)"
          class="dropdown-btn grow pointer pa1 f7 bg-black-20 white br0">
          <i class="fas fa-fw fa-caret-down"></i>
        </button>
      </span>
      <span class="right-0 dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
          Click the dropdown button to select font from list, or type to search. The font applies to the whole text block.
      </span>
    </div>

    <div class="w4 flex-auto relative mh1 fl  mid-gray flex flex-nowrap items-center cf mv2">
      <input placeholder="color" property="card_text_color" data-path="text_color" data-minchars="0"
      class="white bg-transparent w-100 br0 b--white-20" />
      <span class="gt-label">
        <button type="button" mv-action="invoke('toggleDDInput',card_text_color)"
        class="dropdown-btn grow pointer pa1 f7 bg-black-20 white br0">
          <i class="fas fa-fw fa-caret-down"></i>
        </button>
      </span>
      <span class="right-0 dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
          Click the dropdown button to select font color from list, or type to search.
      </span>

    </div>

    <div class="w4 flex-auto relative mh1 fl  mid-gray flex flex-nowrap items-center cf mv2">
      <input placeholder="background" property="card_background" data-path="solid_background" data-minchars="0"
      class="white bg-transparent w-100 br0 b--white-20" />
      <span class="gt-label">
        <button type="button" mv-action="invoke('toggleDDInput',card_background)"
        class="dropdown-btn grow pointer pa1 f7 bg-black-20 white br0">
          <i class="fas fa-fw fa-caret-down"></i>
        </button>
      </span>
      <span class="right-0 dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
          Click the dropdown button to select background color from list, or type to search.
      </span>
    </div>
    <div class="w4 flex-auto relative mh1 fl  mid-gray flex flex-nowrap items-center cf mv2">
      <input placeholder="body background" property="body_background" data-path="solid_background" data-minchars="0"
      class="white bg-transparent w-100 br0 b--white-20" />
      <span class="gt-label">
        <button type="button" mv-action="invoke('toggleDDInput',body_background)"
        class="dropdown-btn grow pointer pa1 f7 bg-black-20 white br0">
          <i class="fas fa-fw fa-caret-down"></i>
        </button>
      </span>
      <span class="right-0 dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
          This background applies to the textbox body only.
      </span>
    </div>
    <div class="w4 flex-auto relative mh1 fl  mid-gray flex flex-nowrap items-center cf mv2"
    mv-action="invoke(replaceNodeClass,fancy_style,'mavo.root.children.content.element','fancy-')"
    >
      <input placeholder="fancy" property="fancy_style" data-list="fancy-dropcap,fancy-dropcap-all" data-minchars="0"
      class="white bg-transparent w-100 br0 b--white-20" />
      <span class="gt-label">
        <button type="button" mv-action="invoke('toggleDDInput',fancy_style)"
        class="dropdown-btn grow pointer pa1 f7 bg-black-20 white br0">
          <i class="fas fa-fw fa-caret-down"></i>
        </button>
      </span>
      <span class="right-0 dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
        Click the dropdown button to select a style, click this cell after deleting a style.
      </span>
    </div>

  </div>

  </div> 
</div>


          </div>

          <div class="fadeIn absolute left-0 right-0 center mw7 dn title-options top-2 pa2 z-1 bg-light-gray mid-gray ba b--white-80 f7 f6-ns normal fs-normal relaxed">
            <div class="tr pointer flex justify-between"
              mv-action="invoke('toggleClass', section_background, '.title-options', 'dn')"
            >
            <span>Heading Styles</span>
            <span>Close</span>
            </div>
            
            

<div >
  <h3 class="mt2"></h3>
  <div class="cf flex flex-wrap ba b--black-05" >
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Horizontal Padding 
        
        
        </div>
        <div 
        class=" bg-white 
         flex  flex-nowrap   pt1 cf items-center ">
        
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
             property="title_ph"
            
            
            id="radio-33-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-33-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="0"   checked 
            />
            <label class="flex-auto ph2" for="radio-33-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            0 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-33-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-33-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="1"  
            />
            <label class="flex-auto ph2" for="radio-33-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            1 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-33-2-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-33-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="2"  
            />
            <label class="flex-auto ph2" for="radio-33-2-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            2 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-33-3-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-33-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="3"  
            />
            <label class="flex-auto ph2" for="radio-33-3-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            3 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-33-4-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-33-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="4"  
            />
            <label class="flex-auto ph2" for="radio-33-4-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            4 
            </label>
          </div>
          
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            Padding left and right for medium and large screen. 
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Vertical Padding 
        
        
        </div>
        <div 
        class=" bg-white 
         flex  flex-nowrap   pt1 cf items-center ">
        
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
             property="title_pv"
            
            
            id="radio-34-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-34-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="0" 
            />
            <label class="flex-auto ph2" for="radio-34-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            0 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-34-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-34-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="1" 
            />
            <label class="flex-auto ph2" for="radio-34-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            1 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-34-2-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-34-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="2" 
            />
            <label class="flex-auto ph2" for="radio-34-2-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            2 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-34-3-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-34-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="3"  checked 
            />
            <label class="flex-auto ph2" for="radio-34-3-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            3 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-34-4-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-34-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="4" 
            />
            <label class="flex-auto ph2" for="radio-34-4-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            4 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-34-5-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-34-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="5" 
            />
            <label class="flex-auto ph2" for="radio-34-5-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            5 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-34-6-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-34-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="6" 
            />
            <label class="flex-auto ph2" for="radio-34-6-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            6 
            </label>
          </div>
          
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            Padding above and below for medium and large screen. 
          </div>
        
      </div>
       
    
       
        <input class="absolute" hidden property="title_i" value="" />
       
    
       
        <input class="absolute" hidden property="title_font_size" value="2" />
       
    
       
        <input class="absolute" hidden property="title_align" value="tc" />
       
    
       
        <input class="absolute" hidden property="title_transform" value="ttc" />
       
    
       
        <input class="absolute" hidden property="title_font_weight" value="7" />
       
    
       
        <input class="absolute" hidden property="title_letter_spacing" value="" />
       
    
       
        <input class="absolute" hidden property="section_max_width" value="" />
       
    
       
        <input class="absolute" hidden property="card_i" value="" />
       
    
       
        <input class="absolute" hidden property="card_font_size" value="5" />
       
    
       
        <input class="absolute" hidden property="card_text_align" value="" />
       
    
       
        <input class="absolute" hidden property="card_font_weight" value="4" />
       
    
       
        <input class="absolute" hidden property="card_letter_spacing" value="" />
       
    
       
        <input class="absolute" hidden property="card_list_style" value="" />
       
    
       
        <input class="absolute" hidden property="big_quote" value="" />
       
    
  </div>
</div> 

          </div>
          
        </div>
      </div>

      
<div class="absolute top-2 w2">
  <div class="relative pv3 ph1">
    <span class="gt-label">
      <button type="button" class="pointer grow baskerville dn show-in-edit pv1 ph2 f4 f5-l bg-black-05 white br2 b--white-90"
      mv-action="set(toolbar_id,if(toolbar_id = 2, 0, toolbar_id + 1))
      ">T</button>
    </span>

    <span class="dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
        Toggle layout control toolbars.
    </span>
    <input type="number" hidden mv-storage="none" property="toolbar_id" value="1" />
    <input type="number" hidden mv-storage="none" property="toolbar_alpha" value="10" />
    <input type="checkbox" hidden mv-storage="none" property="is_cta_form_active" />
  </div>
  <div class="relative pv3 ph1">
    <span class="gt-label">
      <button type="button" class="pointer grow baskerville dn [if(toolbar_id,'show-in-edit','')] pv1 ph2 f4 f5-l bg-black-05 white br2 b--white-90"
      mv-action="set(toolbar_alpha,if(toolbar_alpha >= 70, 10, toolbar_alpha + 20))">O

      </button>
    </span>

    <span class="dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
      Click to adjust toolbar opacity. Current value: [toolbar_alpha]%.
    </span>

  </div>
</div>

    35fe3a9616151be1e9a9abc33ece88d44bd47528

  </div> 
   {tf{? o.edit_mode }tf}


<div class="skip-zoom-clone  min-vh-100 w-100 absolute off-canvas-dashboard
">
  
  <div class="relative w-100 w-90-ns mw7 mt4 vh-100 bg-near-white overflow-y-scroll">
    <div class="bg-white-70 mb1 cf v-mid ph3">
      <span class="pv2 dib">Section Options</span>
      <span title="close" class="fr pv2 ph3 w3 tc orange hover-bg-white" mv-action="invoke('toggleClass', current_tab, '.off-canvas-dashboard', 'active')">X</span>
    </div>
    
    <div class="mb4 mh2 mh3-ns mt2 br1 shadow-4 b--white-30 ph1 ph2-ns pb4">
      

<input hidden property="current_tab" mv-storage="none" value="appearance"/>
<div class="pt1 flex flex-wrap items-stretch">

  
	<button data-toggle-tab="appearance" mv-action="set(current_tab,'appearance')" class="[if(current_tab='appearance', 'bg-white-90 bb-0')] gt-tab-button br1 active pointer ba f6 dib lh-solid ph2 pv2 mb2 ">
		
			<i class="fas fa-font"></i><span class="dn di-ns"> Appearance </span>
		
	</button>&nbsp;

  
	<button data-toggle-tab="layout_highlight_image" mv-action="set(current_tab,'layout_highlight_image')" class="[if(current_tab='layout_highlight_image', 'bg-white-90 bb-0')] gt-tab-button br1  pointer ba f6 dib lh-solid ph2 pv2 mb2 ">
		
			<i class="fas fa-file-image"></i><span class="dn di-ns"> Highlight Image </span>
		
	</button>&nbsp;

  
	<button data-toggle-tab="layout_image_container" mv-action="set(current_tab,'layout_image_container')" class="[if(current_tab='layout_image_container', 'bg-white-90 bb-0')] gt-tab-button br1  pointer ba f6 dib lh-solid ph2 pv2 mb2 ">
		
			<i class="fas fa-square"></i><span class="dn di-ns"> Image Container </span>
		
	</button>&nbsp;

  
	<button data-toggle-tab="image" mv-action="set(current_tab,'image')" class="[if(current_tab='image', 'bg-white-90 bb-0')] gt-tab-button br1  pointer ba f6 dib lh-solid ph2 pv2 mb2 ">
		
			<i class="fas fa-image"></i><span class="dn di-ns"> Background Image </span>
		
	</button>&nbsp;

</div>

<div class="tab-content pt3 ">

	
	<div data-pane="appearance" class="gt-tab-pane [if(current_tab='appearance', '', 'dn')] active">
	 
		
		

<div  property="appearance" >
  <h3 class="mt2">Appearance</h3>
  <div class="cf flex flex-wrap ba b--black-05" >
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Section Background 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(section_background, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="section_background" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="solid_background"
          
           value="bg-white-60"
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',section_background)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            This is the fallback background color when image is not available or disabled.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Card Background 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(card_background, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="card_background" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="solid_background"
          
           value=""
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',card_background)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            this is the background of grid cards.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        

        <div>Text Color 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(text_color, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="text_color" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="text_color"
          
           value=""
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',text_color)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        

        <div>Icon Color 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(icon_color, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="icon_color" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="text_color"
          
           value=""
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',icon_color)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Slide Animation 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(slide_animation, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="slide_animation" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="slide_animation"
          
           value="fadeIn" 
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',slide_animation)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            The slide animation during presentation, default to fadeIn if not set. 
          </div>
        
      </div>
       
    
  </div>
</div> 

	
	</div>

	
	<div data-pane="layout_highlight_image" class="gt-tab-pane [if(current_tab='layout_highlight_image', '', 'dn')] ">
	 
		
		

<div >
  <h3 class="mt2">Highlight Image</h3>
  <div class="cf flex flex-wrap ba b--black-05" >
    
      
      <div class="relative 
w-100  ph1 fl pt2 pb3
 ">
        

        <div>Image Border Radius 
        
        
        </div>
        <div  mv-action="invoke(&#39;replaceItemsClass&#39;, image_br,&#39;root.children.image_source&#39;)" 
        class=" bg-white 
         flex  flex-nowrap   pt1 cf items-center ">
        
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
             property="image_br"
            
            
            id="radio-35-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-35-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="br0"   checked 
            />
            <label class="flex-auto ph2" for="radio-35-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            disable 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-35-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-35-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="br2"  
            />
            <label class="flex-auto ph2" for="radio-35-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            br2 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-35-2-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-35-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="br3"  
            />
            <label class="flex-auto ph2" for="radio-35-2-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            br3 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-35-3-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-35-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="br4"  
            />
            <label class="flex-auto ph2" for="radio-35-3-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            br4 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-35-4-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-35-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="br-100"  
            />
            <label class="flex-auto ph2" for="radio-35-4-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            circle or oval 
            </label>
          </div>
          
        
        </div> 
        
        
      </div>
       
    
      
      <div class="relative 
w-100  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Image Fit 
        
        
        </div>
        <div  mv-action="invoke(&#39;replaceItemsClass&#39;, object_fit_class,&#39;root.children.image_source&#39;)" 
        class=" bg-white 
         flex  flex-nowrap   pt1 cf items-center ">
        
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
             property="object_fit_class"
            
            
            id="radio-36-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-36-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="of-scale-down"   checked 
            />
            <label class="flex-auto ph2" for="radio-36-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            Scale Down 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-36-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-36-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="of-contain"  
            />
            <label class="flex-auto ph2" for="radio-36-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            Contain 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-36-2-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-36-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="of-cover"  
            />
            <label class="flex-auto ph2" for="radio-36-2-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            Cover 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-36-3-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-36-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="of-fill"  
            />
            <label class="flex-auto ph2" for="radio-36-3-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            Fill 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-36-4-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-36-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="of-none"  
            />
            <label class="flex-auto ph2" for="radio-36-4-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            None 
            </label>
          </div>
          
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            Whether to keep aspect ratio when stretching or cropping image.
          </div>
        
      </div>
       
    
  </div>
</div> 

	
	</div>

	
	<div data-pane="layout_image_container" class="gt-tab-pane [if(current_tab='layout_image_container', '', 'dn')] ">
	 
		
		

<div >
  <h3 class="mt2">Image Container</h3>
  <div class="cf flex flex-wrap ba b--black-05" >
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Image Vertical Position 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(image_vertical_position, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="image_vertical_position" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
           data-list="items-center, items-start, items-end, items-stretch" 
           value=""
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',image_vertical_position)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            This decides how to position the image container vertically. By default the container is centered vertically. 
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Height Reference 
        
        
        </div>
        <div 
        class=" bg-white 
         flex  flex-nowrap   pt1 cf items-center ">
        
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
             property="height_reference"
            
            
            id="radio-37-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-37-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="h"   checked 
            />
            <label class="flex-auto ph2" for="radio-37-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            Container 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-37-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-37-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="vh"  
            />
            <label class="flex-auto ph2" for="radio-37-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            Viewport 
            </label>
          </div>
          
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            This is the reference to calculate image height. If set to parent container, the text column will decide the height of the section. If set to viewport, the section has this height at a minimum. 
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Image Order 
        
        
        </div>
        <div 
        class=" bg-white 
         flex  flex-nowrap   pt1 cf items-center ">
        
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
             property="image_order"
            
            
            id="radio-38-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-38-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="even-order-1-ns"   checked 
            />
            <label class="flex-auto ph2" for="radio-38-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            line end in even sections 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-38-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-38-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="odd-order-1-ns"  
            />
            <label class="flex-auto ph2" for="radio-38-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            line end in odd sections 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-38-2-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-38-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="line-start"  
            />
            <label class="flex-auto ph2" for="radio-38-2-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            line start 
            </label>
          </div>
          
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            Change the order of the image to create alternate section effect on large screens.
          </div>
        
      </div>
       
    
  </div>
</div> 

	
	</div>

	
	<div data-pane="image" class="gt-tab-pane [if(current_tab='image', '', 'dn')] ">
	 
		
		

<div  property="image" >
  <h3 class="mt2">Background Image</h3>
  <div class="cf flex flex-wrap ba b--black-05" >
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Source URL 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(src, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="src" 
          type="text" 
          class="flex-auto  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
          
           value=""
          data-minchars="0" 
          />
          
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            This is the full URL of the background image.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Overlay Background 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(overlay_background, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="overlay_background" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="overlay_background"
          
           value=""
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',overlay_background)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            This is the overlay over background image to make text readable.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Image Animation 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(animation, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="animation" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="slow_motion"
          
           value=""
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',animation)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            This is the slow motion animation of the image.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Auto Responsive 
        
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input property="responsive" type="checkbox" 
          class=""
          
          id="chk-image-responsive-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
          />
          <label class="flex-auto ph2" for="chk-image-responsive-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            Enable
          </label>
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            If enabled, dynamic images will be requested from Unsplash using the image id provided.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 [if(!responsive,&#39;dn&#39;)]">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Unsplash Image ID  <i class="pointer ph2 fas fa-link" mv-action="set(src,'https://source.unsplash.com/' & unsplash_image_id & '/' & if(size, size, '1366x768'))"> </i>

        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(unsplash_image_id, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="unsplash_image_id" 
          type="text" 
          class="flex-auto  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
          
           value=""
          data-minchars="0" 
          />
          
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            This is the image id from Unsplash. Click on the link icon to generate the image link. 
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 [if(!responsive,&#39;dn&#39;)]">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Size in Pixels 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(size, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input  mv-storage="none" 
           property="size" 
          type="text" 
          class="flex-auto  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
          
           value=""
          data-minchars="0" 
          />
          
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            The size of image width and height in pixels, default to 1366x768.
          </div>
        
      </div>
       
    
  </div>
</div> 

	
	</div>


</div>

    </div>

  </div>
</div>

<div onclick="" class="skip-zoom-clone dn mv-bar f7 tc w-100 absolute top-0 pv1 ph2 bg-white o-10 hover-o-90 ">

  <button type="button" data-action="toggle-base-toolbar" class="manage-section pointer dim br2 pv1 ph2 mh1" title="toggle global setting toolbar ">
    <i class="fas fa-ellipsis-v" data-fa-mask="fas fa-square" data-fa-transform="shrink-2 left-4"></i>
  </button>

  <span class="dn di-ns gt-pos-btns"> 
    <button type="button" data-action="move-up" class="gt-move-up manage-section pointer dim br2 pv1 ph2 mh1" title="move section up"><i class="fas fa-angle-up"></i></button>
    <button type="button" data-action="move-down" class="gt-move-down manage-section pointer dim br2 pv1 ph2 mh1" title="move section down"><i class="fas fa-angle-down"></i></button>
    <button type="button" data-action="insert-section" class="gt-insert-section manage-section pointer dim br2 pv1 ph2 mh1" title="insert section "><i class="fas fa-plus"></i></button>
    
    <button type="button" data-action="delete-section" class="gt-delete-section manage-section pointer dim br2 pv1 ph2 mh2 white bg-orange" title="delete section"><i class="fas fa-trash"></i></button> 
  </span>

  
  <button title="turn editor on" type="button" data-action="toggle-mv-on" class="toggle-mv-on bg-light-green manage-section pointer dim br2 pv1 ph2 mh3" ><i class="fas fa-toggle-off"></i></button>
  
  
  <button type="button" class="gt-setting-toggle dn pointer dim br2 pv1 ph2 mh1" mv-action="invoke('toggleClass', current_tab, '.off-canvas-dashboard', 'active')"><i class="fas fa-cog"></i></button>
  <button title="edit section" type="button" class="mv-edit pointer dn dim br2 pv1 ph2 mh1">Edit</button>
  <button title="save section" type="button" class="mv-save pointer dn dim br2 pv1 ph2 mh1">Save</button>
</div>

{tf{?}tf}

 
</section>


`;
  

  
  
    gtpb.partials['goandtalk/footer/default_footer'] = `
<section 675275c791df5c494218febd9c0cde06eea2ae6b mv-storage="idb_array" mv-app="{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}" mv-bar="edit save" 35fe3a9616151be1e9a9abc33ece88d44bd47528
  class="gt-mv-on relative flex flex-column justify-end" ><div class="flex-auto tc bg-black-10 gmws dn">
    <div class="pt5 f-6-l f1-m f2 flex flex-column justify-center">
      <span class="flex-auto"></span>
      <i class="fas fa-comments white slide-trigger pointer"></i>
      <span class="flex-auto"></span>
    </div>
  </div>
  <div class="{enc{! o.__get(it, \u0027appearance.section_background\u0027) || \u0027bg-black-70\u0027 }enc}
  {enc{! o.__get(it, \u0027appearance.text_color\u0027) || \u0027white-80\u0027 }enc}
  {enc{! o.__get(it, \u0027appearance.slide_animation\u0027) || \u0027\u0027 }enc}"
  675275c791df5c494218febd9c0cde06eea2ae6b  mv-attribute="class" mv-value="section_background & ' ' & slide_animation & ' ' & text_color " 35fe3a9616151be1e9a9abc33ece88d44bd47528>
    
<nav class="relative f6"   675275c791df5c494218febd9c0cde06eea2ae6b property="menu" 35fe3a9616151be1e9a9abc33ece88d44bd47528 >
  <div class="w-90 mw8 center ph2 pv3" >

    <ul class="list cf ma0 ph3 ph4-l pv1 flex justify-center flex-wrap {enc{! o.__get(it, \u0027appearance.nav_link_color\u0027) || \u0027link-gold\u0027 }enc} " >
      
        {tf{? o.__get(it,\u0027menu.footer_nav\u0027) }tf}

        {loop{~ it.menu.footer_nav :item:idx }loop}


        <li class="pv2 fl" 675275c791df5c494218febd9c0cde06eea2ae6b property="footer_nav" mv-multiple 35fe3a9616151be1e9a9abc33ece88d44bd47528>
          <a href="dd670833e00d695c78df75d31d05c27606aca294 " 675275c791df5c494218febd9c0cde06eea2ae6b property="url" 35fe3a9616151be1e9a9abc33ece88d44bd47528  class="link ph3 dim  ">
            <span 675275c791df5c494218febd9c0cde06eea2ae6b property="name" 35fe3a9616151be1e9a9abc33ece88d44bd47528> {enc{! o.__get(item, \u0027name\u0027) || \u0027\u0027 }enc}</span>
          </a>
        </li>

        {loop{~}loop}

        {tf{??}tf}

          675275c791df5c494218febd9c0cde06eea2ae6b 
          <li class="pv2 fl" property="footer_nav" mv-multiple >
            <a href="#top"  property="url" class="link ph3 dim ">
              <span  property="name" >Home</span>
            </a>
          </li>
          35fe3a9616151be1e9a9abc33ece88d44bd47528
        35fe3a9616151be1e9a9abc33ece88d44bd47528
        675275c791df5c494218febd9c0cde06eea2ae6b <button type="button" title="add item" class="v-mid dn br1 mv-add mv-ui mv-add-footer_nav">+</button> 35fe3a9616151be1e9a9abc33ece88d44bd47528

      
    </ul>

    <ul class="list cf ma0 ph3 ph4-l pv1 flex justify-center flex-wrap {enc{! o.__get(it, \u0027appearance.legal_link_color\u0027) || \u0027link-white-80\u0027 }enc}" >
    
      {tf{? o.__get(it,\u0027menu.footer_legal\u0027) }tf}

      {loop{~ it.menu.footer_legal :item:idx }loop}


      <li class="pv2 fl" 675275c791df5c494218febd9c0cde06eea2ae6b property="footer_legal" mv-multiple 35fe3a9616151be1e9a9abc33ece88d44bd47528>
        <a href="dd670833e00d695c78df75d31d05c27606aca294" 675275c791df5c494218febd9c0cde06eea2ae6b property="url" 35fe3a9616151be1e9a9abc33ece88d44bd47528  class="link ph3 dim ">
          <span 675275c791df5c494218febd9c0cde06eea2ae6b property="name" 35fe3a9616151be1e9a9abc33ece88d44bd47528> {enc{! o.__get(item, \u0027name\u0027) || \u0027\u0027 }enc}</span>
        </a>
      </li>

      {loop{~}loop}

      {tf{??}tf}

        675275c791df5c494218febd9c0cde06eea2ae6b 
        <li class="pv2 fl" property="footer_legal" mv-multiple >
          <a href="#"  property="url" class="link ph3 dim ">
            <span  property="name" >Terms</span>
          </a>
        </li>
        35fe3a9616151be1e9a9abc33ece88d44bd47528
      35fe3a9616151be1e9a9abc33ece88d44bd47528
      675275c791df5c494218febd9c0cde06eea2ae6b <button type="button" title="add item" class="v-mid dn br1 mv-add mv-ui mv-add-footer_legal">+</button> 35fe3a9616151be1e9a9abc33ece88d44bd47528

    
    </ul>
  </div>
</nav>

    <div class="tc ph4 pv2 f7" 675275c791df5c494218febd9c0cde06eea2ae6b property="copyright" 35fe3a9616151be1e9a9abc33ece88d44bd47528>
      {enc{! o.__get(it, \u0027copyright\u0027) || \u0027Copyright 2019. All rights reserved.\u0027 }enc}
    </div>
    <div class="tc pa3 f7 bg-black-80 white-60 pb6 pb3-l">Golden theme by goandmake.app. Powered by goandmake.app</div>
  </div> {tf{? o.edit_mode }tf}


<div class="skip-zoom-clone  min-vh-100 w-100 absolute off-canvas-dashboard
">
  
  <div class="relative w-100 w-90-ns mw7 mt4 vh-100 bg-near-white overflow-y-scroll">
    <div class="bg-white-70 mb1 cf v-mid ph3">
      <span class="pv2 dib">Section Options</span>
      <span title="close" class="fr pv2 ph3 w3 tc orange hover-bg-white" mv-action="invoke('toggleClass', current_tab, '.off-canvas-dashboard', 'active')">X</span>
    </div>
    
    <div class="mb4 mh2 mh3-ns mt2 br1 shadow-4 b--white-30 ph1 ph2-ns pb4">
      

<input hidden property="current_tab" mv-storage="none" value="appearance_footer"/>
<div class="pt1 flex flex-wrap items-stretch">

  
	<button data-toggle-tab="appearance_footer" mv-action="set(current_tab,'appearance_footer')" class="[if(current_tab='appearance_footer', 'bg-white-90 bb-0')] gt-tab-button br1 active pointer ba f6 dib lh-solid ph2 pv2 mb2 ">
		
			<i class="fas fa-font"></i><span class="dn di-ns"> Appearance </span>
		
	</button>&nbsp;

  
	<button data-toggle-tab="global_section" mv-action="set(current_tab,'global_section'),invoke(&#39;updateGlobalSectionList&#39;, data_key)" class="[if(current_tab='global_section', 'bg-white-90 bb-0')] gt-tab-button br1  pointer ba f6 dib lh-solid ph2 pv2 mb2 ">
		
			<i class="fas fa-globe"></i><span class="dn di-ns"> Global Section </span>
		
	</button>&nbsp;

</div>

<div class="tab-content pt3 ">

	
	<div data-pane="appearance_footer" class="gt-tab-pane [if(current_tab='appearance_footer', '', 'dn')] active">
	 
		
		

<div  property="appearance" >
  <h3 class="mt2">Appearance</h3>
  <div class="cf flex flex-wrap ba b--black-05" >
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        

        <div>Section Background 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(section_background, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="section_background" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="solid_background"
          
           value="bg-black-80"
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',section_background)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        

        <div>Text Color 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(text_color, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="text_color" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="text_color"
          
           value="white-80"
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',text_color)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        

        <div>Nav Link Color 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(nav_link_color, '')">X</span>
        
        </div>
        <div  mv-action="invoke(&#39;replaceNodeClass&#39;,nav_link_color,&#39;mavo.root.children.menu.children.footer_nav.element.parentElement&#39;, &#39;link-&#39;)" 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="nav_link_color" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="link_color"
          
           value="link-gold"
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',nav_link_color)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        

        <div>Legal Link Color 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(legal_link_color, '')">X</span>
        
        </div>
        <div  mv-action="invoke(&#39;replaceNodeClass&#39;,legal_link_color,&#39;mavo.root.children.menu.children.footer_legal.element.parentElement&#39;, &#39;link-&#39;)" 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="legal_link_color" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="link_color"
          
           value="link-white-80"
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',legal_link_color)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
      </div>
       
    
  </div>
</div> 

	
	</div>

	
	<div data-pane="global_section" class="gt-tab-pane [if(current_tab='global_section', '', 'dn')] ">
	 
		
		

<div >
  <h3 class="mt2">Global Section</h3>
  <div class="cf flex flex-wrap ba b--black-05" >
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Global Section 
        
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input property="is_global" type="checkbox" 
          class=""
          
          id="chk--is_global-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
          />
          <label class="flex-auto ph2" for="chk--is_global-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            Enable
          </label>
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            When checked, the section will be available in other pages. 
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 [if(!is_global,&#39;dn&#39;,&#39;&#39;)]">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Data Storage Key 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(data_key, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="data_key" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
           data-list="," 
           value=""
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',data_key)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            This is the key to store the global section. Alphanumeric and underscore only. Choose an existing key will replace previous data.
          </div>
        
      </div>
       
    
  </div>
</div> 

	
	</div>


</div>

    </div>

  </div>
</div>

<div onclick="" class="skip-zoom-clone dn mv-bar f7 tc w-100 absolute top-0 pv1 ph2 bg-white o-10 hover-o-90 ">

  <button type="button" data-action="toggle-base-toolbar" class="manage-section pointer dim br2 pv1 ph2 mh1" title="toggle global setting toolbar ">
    <i class="fas fa-ellipsis-v" data-fa-mask="fas fa-square" data-fa-transform="shrink-2 left-4"></i>
  </button>

  <span class="dn di-ns gt-pos-btns"> 
    <button type="button" data-action="move-up" class="gt-move-up manage-section pointer dim br2 pv1 ph2 mh1" title="move section up"><i class="fas fa-angle-up"></i></button>
    <button type="button" data-action="move-down" class="gt-move-down manage-section pointer dim br2 pv1 ph2 mh1" title="move section down"><i class="fas fa-angle-down"></i></button>
    <button type="button" data-action="insert-section" class="gt-insert-section manage-section pointer dim br2 pv1 ph2 mh1" title="insert section "><i class="fas fa-plus"></i></button>
    
    <button type="button" data-action="delete-section" class="gt-delete-section manage-section pointer dim br2 pv1 ph2 mh2 white bg-orange" title="delete section"><i class="fas fa-trash"></i></button> 
  </span>

  
  <button title="turn editor on" type="button" data-action="toggle-mv-on" class="toggle-mv-on bg-light-green manage-section pointer dim br2 pv1 ph2 mh3" ><i class="fas fa-toggle-off"></i></button>
  
  
  <button type="button" class="gt-setting-toggle dn pointer dim br2 pv1 ph2 mh1" mv-action="invoke('toggleClass', current_tab, '.off-canvas-dashboard', 'active')"><i class="fas fa-cog"></i></button>
  <button title="edit section" type="button" class="mv-edit pointer dn dim br2 pv1 ph2 mh1">Edit</button>
  <button title="save section" type="button" class="mv-save pointer dn dim br2 pv1 ph2 mh1">Save</button>
</div>

{tf{?}tf}



</section>`;
  

  
  
    gtpb.partials['goandtalk/settings/dialog-holder'] = `<div class="dialog-holder z-1 min-vh-100 w-100 top-0 fixed off-canvas-dashboard bg-black-80 flex">
  <div class="relative center w-90 mw6 bg-near-white overflow-y-scroll self-center">
    <div class="bg-white-70 mb1 cf v-mid ph3">
      <span class="pv2 dib dialog-title">Confirm Action</span>
      <span title="close" data-target="dialog-holder" class="close-dialog fr pv2 ph3 w3 tc orange hover-bg-white" >X</span>
    </div>
    
    <div class=" mh2 mh3-ns mt2 br1 b--white-30 ph1 ph2-ns pb4">
      <div class="confirm-question pv3"> Are you sure to delete this section?</div>
      <div class="pv4 tc flex justify-around">
        <button type="button" class="pointer pv2 ph3 white-90 bg-orange confirm-delete"> <i class="fas fa-trash"></i>Delete</button>
        <button type="button" autofocus data-target="dialog-holder" class="pointer pv2 ph3 white-90 bg-light-blue close-dialog"><i class="fas fa-window-close"></i> Cancel</button>
      </div>
    </div>

  </div>
</div>
`;
  
    gtpb.partials['goandtalk/settings/feedback-holder'] = `<div class="feedback-holder z-1 white pa4 w-90 mw7 bottom-2 bottom-0-l fixed off-canvas-dashboard ">
  Success
</div>
`;
  
    gtpb.partials['goandtalk/settings/insert-dialog-holder'] = `<section mv-app="insert_dialog" mv-storage="none" class="insert-dialog z-1 min-vh-100 w-100 top-0 fixed off-canvas-dashboard bg-black-80 flex">
  <div class="dn mv-bar"></div>
  <div class="relative center w-90 mw7 bg-near-white overflow-y-scroll self-center">
    <div class="flex bg-white-70 mb1 cf v-mid ph3">
      <span class="pv2 dib dialog-title">Insert Section</span>
      <span title="close" data-target="insert-dialog" class="flex-auto cancel-insert pv2 ph3 w3 tc orange hover-bg-white" >X</span>
    </div>
    
    <div class=" mh2 mh3-ns mt2 br1 b--white-30 ph1 ph2-ns pb4">
      <div class="pv3"> Select Section Template
        <i title="reset selection"
        mv-action="set(partial,'')"
        class="reset-select-partial light-red pa1 fas fa-eraser"></i>
      </div>
      <div class="cf flex flex-nowrap items-center">

        <input property="partial" data-path="partials" class="select-partial h2 w-100 flex-auto bg-white br0 b--black-10" placeholder="type to search"/>
        <button class="dropdown-btn grow pointer pa2 br0"
        mv-action="invoke('toggleDDInput',partial)"
        >
          <i class="fas fa-caret-down"></i>
        </button>
      </div>
      <div class="pv3">Use Data From Global Section
        <i title="reset selection" class="reset-select-global light-red pa1 fas fa-eraser"
        mv-action="set(data_key, '')"
        ></i>
      </div>
      <div class="cf flex flex-nowrap items-center">
        <input property="data_key" class="select-global h2 w-100 bg-white br0 b--black-10" placeholder="type to search"/>
        <button class="dropdown-btn grow pointer pa2 br0"
        mv-action="invoke('toggleDDInput',data_key)"
        >
          <i class="fas fa-caret-down"></i>
        </button>
      </div>
      <div class="pv4 tc flex justify-around">
        <button type="button" class="[if(idify(partial) or idify(data_key), '', 'dn')] pointer pv2 ph3 white-90 bg-green confirm-insert"> <i class="ph1 fas fa-fw fa-plus"></i>Insert</button>
        <button type="button" autofocus data-target="insert-dialog" class="pointer pv2 ph3 white-90 bg-light-blue cancel-insert"><i class="ph1 fas fa-fw fa-window-close"></i> Cancel</button>
      </div>
    </div>

  </div>
</section>
`;
  
    gtpb.partials['goandtalk/settings/no-js'] = `
<section class="relative min-vh-100 flex flex-column" >

  
  <div class="relative tc-l pa2 pa3-m pa4-l center flex-grow-1 w-90 mw9 flex flex-column " >
    <div class="flex-auto w-100 black-60 tracked flex flex-column justify-center">
      <div class="tc-l ph3">

        <div class="" >
          <h1 class="f2 f1-m f-5-l tracked fw4 mb0 lh-title  ">JavaScript Required</h1>
        </div>
        <div class="">
          <h2 class="fw1 f3 black-80 mt3 mb4 " > The page builder relies on JavaScript to work. If you see this page after page loads, it means JavaScript is not enabled, or not working properly. </h2>
        </div>

      </div>

    </div>

    <div class="vh-25"></div>
  </div>

</section>
`;
  
    gtpb.partials['goandtalk/settings/pagesetting-editor-holder'] = `{tf{? o.edit_mode }tf}


<section mv-app="page_app" mv-storage="idb_local" class="page-setting-holder z-1 gt-mv-on min-vh-100 w-100 top-0 fixed off-canvas-dashboard [if(base_app_list.current_base_app='page_app','active','')]">
  
  <input hidden type="checkbox" property="manage_toolbar" mv-storage="none" />
  <div class="relative w-100 w-90-ns mw7 mt4 vh-100 bg-near-white overflow-y-scroll pb6 pb3-l">
    <div class="flex bg-white-70 mb1 cf v-mid ph3">
      <span class="pv2 dib">Page Settings</span>
      <span class="toggle-manage-page bg-light-gray b--light-blue pointer mh4 ph3 pa1"
      mv-action="set(manage_toolbar, !manage_toolbar)"
      > <i class="gray fas fa-th-large"></i> </span>
      <span title="close" class="flex-auto fr pv2 ph3 w3 tc orange hover-bg-white"
      mv-action="set(base_app_list.current_base_app,'')" 
      >X</span>
    </div>
    
    <div class="relative mb4 mh2 mh3-ns mt2 br1 shadow-4 b--white-30 pr1 pr2-ns pb4 pl3">
      

<input hidden property="current_tab" mv-storage="none" value="page_root"/>
<div class="pt1 flex flex-wrap items-stretch">

  
	<button data-toggle-tab="page_root" mv-action="set(current_tab,'page_root')" class="[if(current_tab='page_root', 'bg-white-90 bb-0')] gt-tab-button br1 active pointer ba f6 dib lh-solid ph2 pv2 mb2 ">
		
			<i class="fas fa-paint-brush"></i><span class="dn di-ns"> Appearance </span>
		
	</button>&nbsp;

  
	<button data-toggle-tab="page_menu" mv-action="set(current_tab,'page_menu')" class="[if(current_tab='page_menu', 'bg-white-90 bb-0')] gt-tab-button br1  pointer ba f6 dib lh-solid ph2 pv2 mb2 ">
		
			<i class="fas fa-bars"></i><span class="dn di-ns"> Menu </span>
		
	</button>&nbsp;

  
	<button data-toggle-tab="page_icon" mv-action="set(current_tab,'page_icon')" class="[if(current_tab='page_icon', 'bg-white-90 bb-0')] gt-tab-button br1  pointer ba f6 dib lh-solid ph2 pv2 mb2 ">
		
			<i class="fas fa-info"></i><span class="dn di-ns"> Page Icon </span>
		
	</button>&nbsp;

</div>

<div class="tab-content pt3 ">

	
	<div data-pane="page_root" class="gt-tab-pane [if(current_tab='page_root', '', 'dn')] active">
	 
		
		

<div >
  <h3 class="mt2">Appearance</h3>
  <div class="cf flex flex-wrap ba b--black-05" >
    
      
      <div class="relative 
w-100  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Logo URL 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(logo_url, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <img class="w3 bg-black-20" mv-uploads="page_app.logo_url" property="logo_url" src="f31242cd7b629eb52f03daf3392c0469f5e560bb" >
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            This is the path to logo
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 bg-primary-color">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Primary Hue: [primary_hue] 
        
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input  max="360" 
           property="primary_hue" 
          type="range" 
          class="flex-auto  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
          
           value="0" 
          data-minchars="0" 
          />
          
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            The hue (0-360) of primary color in HSL. 0=red, 120=green, 240=blue. It applies to all shades.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 bg-primary-color">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Saturation: [saturation]% 
        
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input  max="100" 
           property="saturation" 
          type="range" 
          class="flex-auto  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
          
           value="0" 
          data-minchars="0" 
          />
          
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            Saturation of primary color(0-100). 100 = vidid. It applies to all shades. 
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 bg-primary-color">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Lightness: [lightness]% 
        
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input  max="100" 
           property="lightness" 
          type="range" 
          class="flex-auto  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
          
           value="0" 
          data-minchars="0" 
          />
          
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            The lightness of primary color(0-100). 0 = black, 100 = white.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 bg-primary-color-dark">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Dark Shade: [lightness_dark]% 
        
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input  max="100" 
           property="lightness_dark" 
          type="range" 
          class="flex-auto  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
          
           value="0" 
          data-minchars="0" 
          />
          
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            The lightness of dark shade(0-100). 0 = black, 100 = white. 
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 bg-primary-color-light">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Light Shade: [lightness_light]% 
        
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input  max="100" 
           property="lightness_light" 
          type="range" 
          class="flex-auto  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
          
           value="0" 
          data-minchars="0" 
          />
          
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            The lightness of light shade(0-100). 0 = black, 100 = white.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 bg-primary-color-lighter">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Lighter Shade: [lightness_lighter]% 
        
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input  max="100" 
           property="lightness_lighter" 
          type="range" 
          class="flex-auto  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
          
           value="0" 
          data-minchars="0" 
          />
          
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            The lightness of lighter shade (0-100). 0 = black, 100 = white. 
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Accent Color 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(accent_color, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center bg-accent-color pt4">
        
          <input 
           property="accent_color" 
          type="text" 
          class="flex-auto  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
          
           value=""
          data-minchars="0" 
          />
          
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            This is the color of small hightlight areas.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Accent Color Light 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(accent_color_light, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center bg-accent-color-light pt4">
        
          <input 
           property="accent_color_light" 
          type="text" 
          class="flex-auto  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
          
           value=""
          data-minchars="0" 
          />
          
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            This is the accent color in light shade. 
          </div>
        
      </div>
       
    
  </div>
</div> 

	
	</div>

	
	<div data-pane="page_menu" class="gt-tab-pane [if(current_tab='page_menu', '', 'dn')] ">
	 
		
		

<div >
  <h3 class="mt2">Menu</h3>
  <div class="cf flex flex-wrap ba b--black-05" >
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Nav Header Class 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(header_class, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="header_class" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="solid_background"
          
           value=""
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',header_class)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            This is the style of nav header.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Nav Link Class 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(header_link_class, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="header_link_class" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="text_color"
          
           value=""
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',header_link_class)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            This is the style of nav links.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Menu Align 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(main_menu_align, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="main_menu_align" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
           data-list="start,center,end" 
           value=""
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',main_menu_align)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            The positioning of desktop navigation menu, if the browser supports flex box.
          </div>
        
      </div>
       
    
  </div>
</div> 

	
	</div>

	
	<div data-pane="page_icon" class="gt-tab-pane [if(current_tab='page_icon', '', 'dn')] ">
	 
		
		

<div >
  <h3 class="mt2">Page Icon</h3>
  <div class="cf flex flex-wrap ba b--black-05" >
    
      
      <div class="relative 
w-100  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Outer Icon   <span class="fa-3x [if(is_bg_dark,'bg-primary-color-dark','')]">
    <span class="dib ph2 [toolbar_overlay]">

      <i class="fas fa-[inner_icon]" data-fa-mask="fas fa-[icon_mask]" data-fa-transform="[inner_icon_transform]"></i>

    </span>
  </span>

        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(icon_mask, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="icon_mask" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="fas_list"
          
           value="square" 
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',icon_mask)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            This is the class of Fontawesome icon, the mask. 
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Inner Icon <i class="gray fas fa-[if(icon_mask,icon_mask,'info-circle')]"></i>
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(inner_icon, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="inner_icon" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="fas_list"
          
           value="font" 
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',inner_icon)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            This is the class of Fontawesome icon.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Inner Icon transform 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(inner_icon_transform, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="inner_icon_transform" 
          type="text" 
          class="flex-auto  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
          
           value="shrink-6" 
          data-minchars="0" 
          />
          
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            keywords: shrink grow rotate up down left right flip-v flip-h
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        

        <div>dark background 
        
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input property="is_bg_dark" type="checkbox" mv-storage="none" 
          class=""
          
          id="chk--is_bg_dark-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
          />
          <label class="flex-auto ph2" for="chk--is_bg_dark-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            Enable
          </label>
        
        </div> 
        
        
      </div>
       
    
      
      <div class="relative 
w-100  ph1 fl pt2 pb3
 ">
        

        <div>toolbar overlay 
        
        
        </div>
        <div 
        class=" bg-white 
         flex  flex-nowrap   pt1 cf items-center ">
        
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
             property="toolbar_overlay"
             mv-storage="none" 
            
            id="radio-39-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-39-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="bg-black-10"   checked 
            />
            <label class="flex-auto ph2" for="radio-39-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            bg-black-10 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
             mv-storage="none" 
            
            id="radio-39-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-39-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="bg-black-40"  
            />
            <label class="flex-auto ph2" for="radio-39-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            bg-black-40 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
             mv-storage="none" 
            
            id="radio-39-2-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-39-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="bg-transparent"  
            />
            <label class="flex-auto ph2" for="radio-39-2-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            bg-transparent 
            </label>
          </div>
          
        
        </div> 
        
        
      </div>
       
    
  </div>
</div> 

	
	</div>


</div>

      <div class="manage-page [if(manage_toolbar,'','dn')] absolute absolute--fill bg-black-30"></div>
    </div>
    <div class="manage-page [if(manage_toolbar,'','dn')] z-1 bg-near-white absolute top-2 left-0 right-0 h-100 mb4 mh2 mh3-ns mt2 br1 shadow-4 b--white-30 pr1 pr2-ns pb4 pl3">
      
      
      

<input hidden property="manage_tab" mv-storage="none" value="page_current"/>
<div class="pt1 flex flex-wrap items-stretch">

  
	<button data-toggle-tab="page_current" mv-action="set(manage_tab,'page_current')" class="[if(manage_tab='page_current', 'bg-white-90 bb-0')] gt-tab-button br1 active pointer ba f6 dib lh-solid ph2 pv2 mb2 ">
		
			<i class="fas fa-book-open"></i><span class="dn di-ns"> Current </span>
		
	</button>&nbsp;

  
	<button data-toggle-tab="page_open" mv-action="set(manage_tab,'page_open')" class="[if(manage_tab='page_open', 'bg-white-90 bb-0')] gt-tab-button br1  pointer ba f6 dib lh-solid ph2 pv2 mb2 ">
		
			<i class="fas fa-folder-open"></i><span class="dn di-ns"> Open </span>
		
	</button>&nbsp;

  
	<button data-toggle-tab="page_clone" mv-action="set(manage_tab,'page_clone')" class="[if(manage_tab='page_clone', 'bg-white-90 bb-0')] gt-tab-button br1  pointer ba f6 dib lh-solid ph2 pv2 mb2 ">
		
			<i class="fas fa-copy"></i><span class="dn di-ns"> Save As </span>
		
	</button>&nbsp;

  
	<button data-toggle-tab="page_export_html" mv-action="set(manage_tab,'page_export_html'),invoke(&#39;exportPageHTML&#39;, exp_link_format)" class="[if(manage_tab='page_export_html', 'bg-white-90 bb-0')] gt-tab-button br1  pointer ba f6 dib lh-solid ph2 pv2 mb2 ">
		
			<i class="fas fa-file-code"></i><span class="dn di-ns"> Export Webpage </span>
		
	</button>&nbsp;

  
	<button data-toggle-tab="page_export_data" mv-action="set(manage_tab,'page_export_data'),invoke(&#39;exportPageData&#39;, exp_data_format)" class="[if(manage_tab='page_export_data', 'bg-white-90 bb-0')] gt-tab-button br1  pointer ba f6 dib lh-solid ph2 pv2 mb2 ">
		
			<i class="fas fa-file-export"></i><span class="dn di-ns"> Export Data </span>
		
	</button>&nbsp;

  
	<button data-toggle-tab="page_import_data" mv-action="set(manage_tab,'page_import_data')" class="[if(manage_tab='page_import_data', 'bg-white-90 bb-0')] gt-tab-button br1  pointer ba f6 dib lh-solid ph2 pv2 mb2 ">
		
			<i class="fas fa-file-import"></i><span class="dn di-ns"> Import Data </span>
		
	</button>&nbsp;

</div>

<div class="tab-content pt3 ">

	
	<div data-pane="page_current" class="gt-tab-pane [if(manage_tab='page_current', '', 'dn')] active">
	 
		
		

<div >
  <h3 class="mt2">Current</h3>
  <div class="cf flex flex-wrap ba b--black-05" >
    
      
      <div class="relative 
w-100  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>File Path 
        
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input  readonly 
           property="_id" 
          type="text" 
          class="flex-auto  
 h2 w-100  bg-light-gray   br0 b--black-10 fl
"
          data-path=""
          
           value=""
          data-minchars="0" 
          />
          
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            The unique path to save this document when exporting as file. This is relative to the content folder.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Title 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(title, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="title" 
          type="text" 
          class="flex-auto  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
          
           value=""
          data-minchars="0" 
          />
          
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            The meta data title is often included in browser tab and search results.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Description 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(description, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <textarea class="w-100"
           property="description" 
          ></textarea>
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            The meta data description is often included in search results.
          </div>
        
      </div>
       
    
      
        <div class="w-100 pv4 tc">
          <button type="button" mv-action="invoke(&#39;confirmDelete&#39;,&#39;&#39;,&#39;page&#39;)" class="w-100 w-50-ns bg-red ba b--black-10 pv2" > Delete Page </button>
        </div>
       
    
  </div>
</div> 

	
	</div>

	
	<div data-pane="page_open" class="gt-tab-pane [if(manage_tab='page_open', '', 'dn')] ">
	 
		
		

<div >
  <h3 class="mt2">Open</h3>
  <div class="cf flex flex-wrap ba b--black-05" >
    
      
      <div class="relative 
w-100  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Document 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(open_doc, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input  mv-storage="none" 
           property="open_doc" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="page_list"
          
           value=""
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',open_doc)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            Search and select document to edit.
          </div>
        
      </div>
       
    
      
        <div class="w-100 pv4 tc">
          <button type="button" mv-action="invoke(&#39;switchEditDoc&#39;)" class="w-100 w-50-ns bg-light-green ba b--black-10 pv2" > Go To Page </button>
        </div>
       
    
  </div>
</div> 

	
	</div>

	
	<div data-pane="page_clone" class="gt-tab-pane [if(manage_tab='page_clone', '', 'dn')] ">
	 
		
		

<div >
  <h3 class="mt2">Save As</h3>
  <div class="cf flex flex-wrap ba b--black-05" >
    
      
      <div class="relative 
w-100  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>New File Path 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(new_page_id, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input  required  mv-storage="none" 
           property="new_page_id" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="page_list"
          
           value=""
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',new_page_id)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            Required. The file path relative to the content folder.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Title 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(clone_title, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input  mv-storage="none" 
           property="clone_title" 
          type="text" 
          class="flex-auto  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
          
           value=""
          data-minchars="0" 
          />
          
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            The title of cloned page.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Override Doc If Exists 
        
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input property="override_doc_if_exists" type="checkbox" mv-storage="none" 
          class=""
          
          id="chk--override_doc_if_exists-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
          />
          <label class="flex-auto ph2" for="chk--override_doc_if_exists-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            Enable
          </label>
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            If checked, cloning this document will create a new record, or override an existing record.
          </div>
        
      </div>
       
    
      
        <div class="w-100 pv4 tc">
          <button type="button" mv-action="invoke(&#39;clonePage&#39;)" class="w-100 w-50-ns bg-light-green ba b--black-10 pv2" > Clone </button>
        </div>
       
    
  </div>
</div> 

	
	</div>

	
	<div data-pane="page_export_html" class="gt-tab-pane [if(manage_tab='page_export_html', '', 'dn')] ">
	 
		
		

<div >
  <h3 class="mt2">Export Webpage</h3>
  <div class="cf flex flex-wrap ba b--black-05" >
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Webpage Link Format 
        
        
        </div>
        <div  mv-action="invoke(&#39;exportPageHTML&#39;, exp_link_format)" 
        class=" bg-white 
         flex  flex-nowrap   pt1 cf items-center ">
        
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
             property="exp_link_format"
             mv-storage="none" 
            
            id="radio-40-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-40-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="local"   checked 
            />
            <label class="flex-auto ph2" for="radio-40-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            local 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
             mv-storage="none" 
            
            id="radio-40-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-40-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="web"  
            />
            <label class="flex-auto ph2" for="radio-40-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            web 
            </label>
          </div>
          
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            How the web page links to other pages. Choose local for browsing locally without a web server.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Nesting Level 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(nesting_level, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input  min="0"  mv-storage="none" 
           property="nesting_level" 
          type="number" 
          class="flex-auto  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
          
           value=""
          data-minchars="0" 
          />
          
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            This is the number of subfolders from project root to exported file.  
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  ph1 fl pt2 pb3
 ">
        

        <div>HTML Output 
        
          <span class="copy-data ph1 pointer"
           data-clipboard-target=".page-export-html" 
          ><i class="fas fa-copy gray"></i> </span>
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(html_output, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <textarea class="w-100 h4 page-export-html b--black-20"
           property="html_output"  mv-storage="none" 
          ></textarea>
        
        </div> 
        
        
      </div>
       
    
      
        <div class="w-100 pv4 tc download-data-holder dn db-l">
          <a href="#" download="talk.html"  class="download-page-html w-100 w-50-ns dark-gray bg-light-green ba b--black-10 pv2 no-underline grow dib v-mid" >
          Download Webpage
          </a>
        </div>
       
    
  </div>
</div> 

	
	</div>

	
	<div data-pane="page_export_data" class="gt-tab-pane [if(manage_tab='page_export_data', '', 'dn')] ">
	 
		
		

<div >
  <h3 class="mt2">Export Data</h3>
  <div class="cf flex flex-wrap ba b--black-05" >
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Data Format 
        
        
        </div>
        <div  mv-action="invoke(&#39;exportPageData&#39;, exp_data_format)" 
        class=" bg-white 
         flex  flex-nowrap   pt1 cf items-center ">
        
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
             property="exp_data_format"
             mv-storage="none" 
            
            id="radio-41-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-41-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="toml"   checked 
            />
            <label class="flex-auto ph2" for="radio-41-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            toml 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
             mv-storage="none" 
            
            id="radio-41-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-41-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="yaml"  
            />
            <label class="flex-auto ph2" for="radio-41-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            yaml 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
             mv-storage="none" 
            
            id="radio-41-2-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-41-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="json"  
            />
            <label class="flex-auto ph2" for="radio-41-2-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            json 
            </label>
          </div>
          
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            The format of meta data to export.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Custom Export Delimiter 
        
        
        </div>
        <div  mv-action="invoke(&#39;exportPageData&#39;, exp_data_format)" 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input property="custom_exp_delim" type="checkbox" mv-storage="none" 
          class=""
          
          id="chk--custom_exp_delim-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
          />
          <label class="flex-auto ph2" for="chk--custom_exp_delim-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            Enable
          </label>
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            By default the exported data uses delimiters recognized by Hugo. Enable this option to specify custom delimiters to work with other generators. 
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 [if(!custom_exp_delim,&#39;dn&#39;)]">
        

        <div>Delimiter Before Meta Data 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(exp_delim_before, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <textarea class="w-100 b--black-20"
           property="exp_delim_before"  mv-storage="none" 
          ></textarea>
        
        </div> 
        
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 [if(!custom_exp_delim,&#39;dn&#39;)]">
        

        <div>Delimiter After Meta Data 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(exp_delim_after, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <textarea class="w-100 b--black-20"
           property="exp_delim_after"  mv-storage="none" 
          ></textarea>
        
        </div> 
        
        
      </div>
       
    
      
      <div class="relative 
w-100  ph1 fl pt2 pb3
 ">
        

        <div>Page Data 
        
          <span class="copy-data ph1 pointer"
           data-clipboard-target=".page-export-data" 
          ><i class="fas fa-copy gray"></i> </span>
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(data_output, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <textarea class="w-100 h4 page-export-data b--black-20"
           property="data_output"  mv-storage="none" 
          ></textarea>
        
        </div> 
        
        
      </div>
       
    
      
        <div class="w-100 pv4 tc download-data-holder dn db-l">
          <a href="#" download="[filename(_id)]"  class="download-page-data w-100 w-50-ns dark-gray bg-light-green ba b--black-10 pv2 no-underline grow dib v-mid" >
          Download Page Data
          </a>
        </div>
       
    
  </div>
</div> 

	
	</div>

	
	<div data-pane="page_import_data" class="gt-tab-pane [if(manage_tab='page_import_data', '', 'dn')] ">
	 
		
		

<div >
  <h3 class="mt2">Import Data</h3>
  <div class="cf flex flex-wrap ba b--black-05" >
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Custom Import Delimiter 
        
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input property="custom_imp_delim" type="checkbox" mv-storage="none" 
          class=""
          
          id="chk--custom_imp_delim-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
          />
          <label class="flex-auto ph2" for="chk--custom_imp_delim-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            Enable
          </label>
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            By default the imported data uses delimiters recognized by Hugo. Enable this option to specify custom delimiters to work with other generators. 
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 [if(!custom_imp_delim,&#39;dn&#39;)]">
        

        <div>Delimiter Before Meta Data 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(imp_delim_before, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <textarea class="w-100 b--black-20"
           property="imp_delim_before"  mv-storage="none" 
          ></textarea>
        
        </div> 
        
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 [if(!custom_imp_delim,&#39;dn&#39;)]">
        

        <div>Delimiter After Meta Data 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(imp_delim_after, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <textarea class="w-100 b--black-20"
           property="imp_delim_after"  mv-storage="none" 
          ></textarea>
        
        </div> 
        
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        

        <div>Import Page From File 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(import_page_file, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input  mv-storage="none" 
           property="import_page_file" 
          type="file" 
          class="flex-auto  
 h2 w-100   br0 b--black-10 fl
"
          data-path=""
          
           value=""
          data-minchars="0" 
          />
          
        
        </div> 
        
        
      </div>
       
    
      
      <div class="relative 
w-100  ph1 fl pt2 pb3
 ">
        

        <div>Paste Page Data 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(data_input, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <textarea class="w-100 h4 b--black-20"
           property="data_input"  mv-storage="none" 
          ></textarea>
        
        </div> 
        
        
      </div>
       
    
      
        <div class="w-100 pv4 tc">
          <button type="button" mv-action="invoke(&#39;importPageData&#39;, custom_imp_delim)" class="import-page-data w-100 w-50-ns dark-gray bg-light-blue ba b--black-10 pv2 no-underline grow dib v-mid" > Import Page Data </button>
        </div>
       
    
  </div>
</div> 

	
	</div>


</div>

      
    </div>
  </div>
  <style>
    .primary-color-dark {
      color:  hsl([primary_hue or site_app.params.primary_hue],[saturation or site_app.params.saturation]%,[lightness_dark or site_app.params.lightness_dark]%);
    }
    .bg-primary-color-dark {
      background-color: hsl([primary_hue or site_app.params.primary_hue],[saturation or site_app.params.saturation]%,[lightness_dark or site_app.params.lightness_dark]%);
      color: rgba(255,255,255,.8);
    }
    .b--primary-color-dark {
      border-color: hsl([primary_hue or site_app.params.primary_hue],[saturation or site_app.params.saturation]%,[lightness_dark or site_app.params.lightness_dark]%);
    }

    .bg-primary-color-dark-90 {
      background-color: hsla([primary_hue or site_app.params.primary_hue],[saturation or site_app.params.saturation]%,[lightness_dark or site_app.params.lightness_dark]%, 90%);
      color: rgba(255,255,255,.8);
    }
    .b--primary-color-dark-90 {
      border-color: hsla([primary_hue or site_app.params.primary_hue],[saturation or site_app.params.saturation]%,[lightness_dark or site_app.params.lightness_dark]%, 90%);
    }

    .primary-color-first-letter-h3 h3:first-letter {
      color: hsl([primary_hue or site_app.params.primary_hue],[saturation or site_app.params.saturation]%,[lightness or site_app.params.lightness]%);
      font-size: 1.2em;
    }

    .primary-color {
      color: hsl([primary_hue or site_app.params.primary_hue],[saturation or site_app.params.saturation]%,[lightness or site_app.params.lightness]%);
    }
    .b--primary-color {
      border-color: hsl([primary_hue or site_app.params.primary_hue],[saturation or site_app.params.saturation]%,[lightness or site_app.params.lightness]%);
    }
    .hover-primary-color:hover, .hover-primary-color:focus {
      color: hsl([primary_hue or site_app.params.primary_hue],[saturation or site_app.params.saturation]%,[lightness or site_app.params.lightness]%);
    }
    .hover-bg-primary-color:hover, .hover-bg-primary-color:focus {
      background-color: hsl([primary_hue or site_app.params.primary_hue],[saturation or site_app.params.saturation]%,[lightness or site_app.params.lightness]%);
      color: rgba(255,255,255,.8);
    }

    .bg-primary-color {
      background-color: hsl([primary_hue or site_app.params.primary_hue],[saturation or site_app.params.saturation]%,[lightness or site_app.params.lightness]%);
      color: rgba(255,255,255,.8);
    }

    .primary-color-light {
      color: hsl([primary_hue or site_app.params.primary_hue],[saturation or site_app.params.saturation]%,[lightness_light or site_app.params.lightness_light]%);
    }
    .bg-primary-color-light {
      background-color: hsl([primary_hue or site_app.params.primary_hue],[saturation or site_app.params.saturation]%,[lightness_light or site_app.params.lightness_light]%);
      color: rgba(255,255,255,.8);
    }
    .b--primary-color-light {
      border-color: hsl([primary_hue or site_app.params.primary_hue],[saturation or site_app.params.saturation]%,[lightness_light or site_app.params.lightness_light]%);
    }

    .primary-color-lighter {
      color: hsl([primary_hue or site_app.params.primary_hue],[saturation or site_app.params.saturation]%,[lightness_lighter or site_app.params.lightness_lighter]%);
    }
    .bg-primary-color-lighter {
      background-color: hsl([primary_hue or site_app.params.primary_hue],[saturation or site_app.params.saturation]%,[lightness_lighter or site_app.params.lightness_lighter]%);
      color: rgba(255,255,255,.9);
    }
    .b--primary-color-lighter {
      border-color: hsl([primary_hue or site_app.params.primary_hue],[saturation or site_app.params.saturation]%,[lightness_lighter or site_app.params.lightness_lighter]%);
    }

    .accent-color {
      color: [accent_color or site_app.params.accent_color];
    }
    .bg-accent-color {
      background-color: [accent_color or site_app.params.accent_color];
      color: rgba(255,255,255,.8);
    }
    .b--accent-color {
      border-color: [accent_color or site_app.params.accent_color];
    }
    .accent-color-light {
      color: [accent_color_light or site_app.params.accent_color_light];
    }
    .bg-accent-color-light {
      background-color: [accent_color_light or site_app.params.accent_color_light];
      color: rgba(255,255,255,.8);
    }
    .b--accent-color-light {
      border-color: [accent_color_light or site_app.params.accent_color_light];
    }

  </style>
<div onclick="" class="dn mv-bar f7 tc w-100 absolute top-0 pv1 ph2 bg-white o-10 hover-o-90 ">
  <button title="edit section" type="button" class="pointer mv-edit dim br2 pv1 ph2 mh1">Edit</button>
  <button title="save section" type="button" class="pointer mv-save dim br2 pv1 ph2 mh1">Save</button>
</div>

</section>
{tf{?}tf}

`;
  
    gtpb.partials['goandtalk/settings/sitesetting-editor-holder'] = `

{tf{? o.edit_mode }tf}

<section mv-app="site_app" mv-storage="idb_local" class="site-setting-holder z-1 gt-mv-on min-vh-100 w-100 top-0 fixed off-canvas-dashboard [if(base_app_list.current_base_app='site_app','active','')]">
  
  <input hidden type="checkbox" property="manage_toolbar" mv-storage="none" />
  <div class="relative w-100 w-90-ns mw7 mt4 vh-100 bg-near-white overflow-y-scroll pb6 pb3-l">
    <div class="flex bg-white-70 mb1 cf v-mid ph3">
      <span class="pv2 dib">Site Settings - [site_id]</span>
      <span class="toggle-manage-site bg-light-gray b--light-blue pointer mh4 ph3 pa1"
      mv-action="set(manage_toolbar,!manage_toolbar)"
      >
        <i class="gray fas fa-th-large"></i>
      </span>
      
      <span title="close" class="flex-auto fr pv2 ph3 w3 tc orange hover-bg-white"
      mv-action="set(base_app_list.current_base_app,'')" 
      >X</span>
    </div>
    
    <div property="params" class="relative mb4 mh2 mh3-ns mt2 br1 shadow-4 b--white-30 pr1 pr2-ns pb4 pl3">

      

<input hidden property="current_tab" mv-storage="none" value="site_root"/>
<div class="pt1 flex flex-wrap items-stretch">

  
	<button data-toggle-tab="site_root" mv-action="set(current_tab,'site_root')" class="[if(current_tab='site_root', 'bg-white-90 bb-0')] gt-tab-button br1 active pointer ba f6 dib lh-solid ph2 pv2 mb2 ">
		
			<i class="fas fa-paint-brush"></i><span class="dn di-ns"> Appearance </span>
		
	</button>&nbsp;

  
	<button data-toggle-tab="site_menu" mv-action="set(current_tab,'site_menu')" class="[if(current_tab='site_menu', 'bg-white-90 bb-0')] gt-tab-button br1  pointer ba f6 dib lh-solid ph2 pv2 mb2 ">
		
			<i class="fas fa-bars"></i><span class="dn di-ns"> Menu </span>
		
	</button>&nbsp;

</div>

<div class="tab-content pt3 ">

	
	<div data-pane="site_root" class="gt-tab-pane [if(current_tab='site_root', '', 'dn')] active">
	 
		
		

<div >
  <h3 class="mt2">Appearance</h3>
  <div class="cf flex flex-wrap ba b--black-05" >
    
      
      <div class="relative 
w-100  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Logo URL 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(logo_url, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <img class="w3 bg-black-20" mv-uploads="site_app.params.logo_url" property="logo_url" src="f31242cd7b629eb52f03daf3392c0469f5e560bb" >
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            This is the path to logo
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 bg-primary-color">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Primary Hue: [primary_hue] 
        
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input  max="360" 
           property="primary_hue" 
          type="range" 
          class="flex-auto  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
          
           value=""
          data-minchars="0" 
          />
          
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            The hue (0-360) of primary color in HSL. 0=red, 120=green, 240=blue. It applies to all shades.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 bg-primary-color">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Saturation: [saturation]% 
        
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input  max="100" 
           property="saturation" 
          type="range" 
          class="flex-auto  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
          
           value="35" 
          data-minchars="0" 
          />
          
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            Saturation of primary color(0-100). 100 = vidid. It applies to all shades. 
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 bg-primary-color">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Lightness: [lightness]% 
        
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input  max="100" 
           property="lightness" 
          type="range" 
          class="flex-auto  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
          
           value="45" 
          data-minchars="0" 
          />
          
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            The lightness of primary color(0-100). 0 = black, 100 = white.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 bg-primary-color-dark">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Dark Shade: [lightness_dark]% 
        
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input  max="100" 
           property="lightness_dark" 
          type="range" 
          class="flex-auto  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
          
           value="20" 
          data-minchars="0" 
          />
          
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            The lightness of dark shade(0-100). 0 = black, 100 = white. 
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 bg-primary-color-light">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Light Shade: [lightness_light]% 
        
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input  max="100" 
           property="lightness_light" 
          type="range" 
          class="flex-auto  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
          
           value="65" 
          data-minchars="0" 
          />
          
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            The lightness of light shade(0-100). 0 = black, 100 = white.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 bg-primary-color-lighter">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Lighter Shade: [lightness_lighter]% 
        
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input  max="100" 
           property="lightness_lighter" 
          type="range" 
          class="flex-auto  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
          
           value="80" 
          data-minchars="0" 
          />
          
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            The lightness of lighter shade (0-100). 0 = black, 100 = white. 
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Accent Color 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(accent_color, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center bg-accent-color pt4">
        
          <input 
           property="accent_color" 
          type="text" 
          class="flex-auto  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
          
           value="hsl(165,35%,45%)" 
          data-minchars="0" 
          />
          
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            This is the color of small hightlight areas.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Accent Color Light 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(accent_color_light, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center bg-accent-color-light pt4">
        
          <input 
           property="accent_color_light" 
          type="text" 
          class="flex-auto  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
          
           value="hsl(165,35%,65%)" 
          data-minchars="0" 
          />
          
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            This is the accent color in light shade. 
          </div>
        
      </div>
       
    
  </div>
</div> 

	
	</div>

	
	<div data-pane="site_menu" class="gt-tab-pane [if(current_tab='site_menu', '', 'dn')] ">
	 
		
		

<div >
  <h3 class="mt2">Menu</h3>
  <div class="cf flex flex-wrap ba b--black-05" >
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Nav Header Class 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(header_class, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="header_class" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="solid_background"
          
           value=""
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',header_class)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            This is the style of nav header.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Menu Align 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(main_menu_align, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="main_menu_align" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
           data-list="start,center,end" 
           value=""
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',main_menu_align)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            The positioning of desktop navigation menu, if the browser supports flex box.
          </div>
        
      </div>
       
    
  </div>
</div> 

	
	</div>


</div>

      <div class="manage-site [if(manage_toolbar,'','dn')] absolute absolute--fill bg-black-30"></div>
    </div>
    <div class="manage-site [if(manage_toolbar,'','dn')] z-1 bg-near-white absolute top-2 left-0 right-0 bottom-0 mb4 mh2 mh3-ns mt2 br1 shadow-4 b--white-30 pr1 pr2-ns pb4 pl3">
      
      
      

<input hidden property="manage_tab" mv-storage="none" value="site_current"/>
<div class="pt1 flex flex-wrap items-stretch">

  
	<button data-toggle-tab="site_current" mv-action="set(manage_tab,'site_current')" class="[if(manage_tab='site_current', 'bg-white-90 bb-0')] gt-tab-button br1 active pointer ba f6 dib lh-solid ph2 pv2 mb2 ">
		
			<i class="fas fa-book-open"></i><span class="dn di-ns"> Current </span>
		
	</button>&nbsp;

  
	<button data-toggle-tab="site_open" mv-action="set(manage_tab,'site_open')" class="[if(manage_tab='site_open', 'bg-white-90 bb-0')] gt-tab-button br1  pointer ba f6 dib lh-solid ph2 pv2 mb2 ">
		
			<i class="fas fa-folder-open"></i><span class="dn di-ns"> Open </span>
		
	</button>&nbsp;

  
	<button data-toggle-tab="site_export_data" mv-action="set(manage_tab,'site_export_data'),invoke(&#39;exportSiteData&#39;, exp_data_format)" class="[if(manage_tab='site_export_data', 'bg-white-90 bb-0')] gt-tab-button br1  pointer ba f6 dib lh-solid ph2 pv2 mb2 ">
		
			<i class="fas fa-file-export"></i><span class="dn di-ns"> Export Data </span>
		
	</button>&nbsp;

  
	<button data-toggle-tab="site_import_data" mv-action="set(manage_tab,'site_import_data')" class="[if(manage_tab='site_import_data', 'bg-white-90 bb-0')] gt-tab-button br1  pointer ba f6 dib lh-solid ph2 pv2 mb2 ">
		
			<i class="fas fa-file-import"></i><span class="dn di-ns"> Import Data </span>
		
	</button>&nbsp;

</div>

<div class="tab-content pt3 ">

	
	<div data-pane="site_current" class="gt-tab-pane [if(manage_tab='site_current', '', 'dn')] active">
	 
		
		

<div >
  <h3 class="mt2">Current</h3>
  <div class="cf flex flex-wrap ba b--black-05" >
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Site ID 
        
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input  readonly 
           property="site_id" 
          type="text" 
          class="flex-auto  
 h2 w-100  bg-light-gray   br0 b--black-10 fl
"
          data-path=""
          
           value=""
          data-minchars="0" 
          />
          
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            This is the name to identify the site. 
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Site Title 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(title, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="title" 
          type="text" 
          class="flex-auto  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
          
           value=""
          data-minchars="0" 
          />
          
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            The site title is appended to every page title. 
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Site Base URL 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(baseurl, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="baseurl" 
          type="text" 
          class="flex-auto  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
          
           value=""
          data-minchars="0" 
          />
          
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            The base URL where the site will be served.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Copyright 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(copyright, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="copyright" 
          type="text" 
          class="flex-auto  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
          
           value=""
          data-minchars="0" 
          />
          
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            Copyright statement of the website.
          </div>
        
      </div>
       
    
      
        <div class="w-100 pv4 tc">
          <button type="button" mv-action="invoke(&#39;confirmDelete&#39;, &#39;&#39;, &#39;site&#39;)" class="w-100 w-50-ns bg-red ba b--black-10 pv2" > Delete Site </button>
        </div>
       
    
  </div>
</div> 

	
	</div>

	
	<div data-pane="site_open" class="gt-tab-pane [if(manage_tab='site_open', '', 'dn')] ">
	 
		
		

<div >
  <h3 class="mt2">Open</h3>
  <div class="cf flex flex-wrap ba b--black-05" >
    
      
      <div class="relative 
w-100  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Site 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(open_site, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input  mv-storage="none" 
           property="open_site" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="site_list"
          
           value=""
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',open_site)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            Search and select site to edit.
          </div>
        
      </div>
       
    
      
        <div class="w-100 pv4 tc">
          <button type="button" mv-action="invoke(&#39;switchEditSite&#39;)" class="w-100 w-50-ns bg-light-green ba b--black-10 pv2" > Open </button>
        </div>
       
    
  </div>
</div> 

	
	</div>

	
	<div data-pane="site_export_data" class="gt-tab-pane [if(manage_tab='site_export_data', '', 'dn')] ">
	 
		
		

<div >
  <h3 class="mt2">Export Data</h3>
  <div class="cf flex flex-wrap ba b--black-05" >
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Data Format 
        
        
        </div>
        <div  mv-action="invoke(&#39;exportSiteData&#39;, exp_data_format)" 
        class=" bg-white 
         flex  flex-nowrap   pt1 cf items-center ">
        
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
             property="exp_data_format"
             mv-storage="none" 
            
            id="radio-42-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-42-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="toml"   checked 
            />
            <label class="flex-auto ph2" for="radio-42-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            toml 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
             mv-storage="none" 
            
            id="radio-42-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-42-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="yaml"  
            />
            <label class="flex-auto ph2" for="radio-42-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            yaml 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
             mv-storage="none" 
            
            id="radio-42-2-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-42-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="json"  
            />
            <label class="flex-auto ph2" for="radio-42-2-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            json 
            </label>
          </div>
          
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            The format of meta data to export.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  ph1 fl pt2 pb3
 ">
        

        <div>Page Data 
        
          <span class="copy-data ph1 pointer"
           data-clipboard-target=".site-export-data" 
          ><i class="fas fa-copy gray"></i> </span>
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(data_output, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <textarea class="w-100 h4 site-export-data b--black-20"
           property="data_output"  mv-storage="none" 
          ></textarea>
        
        </div> 
        
        
      </div>
       
    
      
        <div class="w-100 pv4 tc download-data-holder dn db-l">
          <a href="#" download="[filename(_id)]"  class="download-site-data w-100 w-50-ns dark-gray bg-light-green ba b--black-10 pv2 no-underline grow dib v-mid" >
          Download Site Data
          </a>
        </div>
       
    
  </div>
</div> 

	
	</div>

	
	<div data-pane="site_import_data" class="gt-tab-pane [if(manage_tab='site_import_data', '', 'dn')] ">
	 
		
		

<div >
  <h3 class="mt2">Import Data</h3>
  <div class="cf flex flex-wrap ba b--black-05" >
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        

        <div>Import Site Config From File 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(import_site_file, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input  mv-storage="none" 
           property="import_site_file" 
          type="file" 
          class="flex-auto  
 h2 w-100   br0 b--black-10 fl
"
          data-path=""
          
           value=""
          data-minchars="0" 
          />
          
        
        </div> 
        
        
      </div>
       
    
      
      <div class="relative 
w-100  ph1 fl pt2 pb3
 ">
        

        <div>Paste Site Config Data 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(data_input, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <textarea class="w-100 h4 b--black-20"
           property="data_input"  mv-storage="none" 
          ></textarea>
        
        </div> 
        
        
      </div>
       
    
      
        <div class="w-100 pv4 tc">
          <button type="button" mv-action="invoke(&#39;importSiteData&#39;, data_input)" class="import-site-data w-100 w-50-ns dark-gray bg-light-blue ba b--black-10 pv2 no-underline grow dib v-mid" > Import Site Config Data </button>
        </div>
       
    
  </div>
</div> 

	
	</div>


</div>

      
    </div>
  </div>

<div onclick="" class="dn mv-bar f7 tc w-100 absolute top-0 pv1 ph2 bg-white o-10 hover-o-90 ">
  <button title="edit section" type="button" class="pointer mv-edit dim br2 pv1 ph2 mh1">Edit</button>
  <button title="save section" type="button" class="pointer mv-save dim br2 pv1 ph2 mh1">Save</button>
</div>

</section>
{tf{?}tf}

`;
  

  
  
    gtpb.partials['goandtalk/export/base-js'] = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title> {enc{! it.title }enc} | {enc{! o.site.title }enc} </title>
    <meta name="HandheldFriendly" content="True">
    <meta name="MobileOptimized" content="320">
    <meta name="viewport" content="width=device-width,minimum-scale=1">

    <link href="{v{= o._relurl('/css/webslides.css?v=0.0002') }v}" rel="stylesheet" />
    <link href="{v{= o._relurl('/css/tachyons.min.css?v=0.0001') }v}" rel="stylesheet" />

    <style>
      .primary-color-dark {
        color:  {v{= o.styles.primary_color_dark }v};
      }
      .bg-primary-color-dark {
        background-color: {v{= o.styles.primary_color_dark }v};
        color: rgba(255,255,255,.8);
      }
      .b--primary-color-dark {
        border-color: {v{= o.styles.primary_color_dark }v};
      }

      .bg-primary-color-dark-90 {
        background-color: {v{= o.styles.primary_color_dark_90 }v};
        color: rgba(255,255,255,.8);
      }
      .b--primary-color-dark-90 {
        border-color: {v{= o.styles.primary_color_dark_90 }v};
      }
      .primary-color-first-letter-h3 h3:first-letter {
        color: {v{= o.styles.primary_color }v};
        font-size: 1.2em;
      }
      .primary-color {
        color: {v{= o.styles.primary_color }v};
      }
      .b--primary-color {
        border-color: {v{= o.styles.primary_color }v};
      }
      .hover-primary-color:hover, .hover-primary-color:focus {
        color: {v{= o.styles.primary_color }v};
      }
      .hover-bg-primary-color:hover, .hover-bg-primary-color:focus {
        background-color: {v{= o.styles.primary_color }v};
      }

      .bg-primary-color {
        background-color: {v{= o.styles.primary_color }v};
        color: rgba(255,255,255,.8);
      }

      .primary-color-light {
        color: {v{= o.styles.primary_color_light }v};
      }
      .bg-primary-color-light {
        background-color: {v{= o.styles.primary_color_light }v};
        color: rgba(255,255,255,.8);
      }
      .b--primary-color-light {
        border-color: {v{= o.styles.primary_color_light }v};
      }
      .primary-color-lighter {
        color: {v{= o.styles.primary_color_lighter }v};
      }
      .bg-primary-color-lighter {
        background-color: {v{= o.styles.primary_color_lighter }v};
        color: rgba(255,255,255,.9);
      }
      .b--primary-color-light {
        border-color: {v{= o.styles.primary_color_lighter }v};
      }

      .accent-color {
        color: {v{= o.styles.accent_color }v};
      }
      .bg-accent-color {
        background-color: {v{= o.styles.accent_color }v};
      }
      .b--accent-color {
        border-color: {v{= o.styles.accent_color }v};
      }
      .accent-color-light {
        color: {v{= o.styles.accent_color_light }v};
      }
      .bg-accent-color-light {
        background-color: {v{= o.styles.accent_color_light }v};
      }
      .b--accent-color-light {
        border-color: {v{= o.styles.accent_color_light }v};
      }

    </style>

  </head>
  <body class="bg-light-gray sans-serif readable ">

    <main role="main" class="relative h-100" >

      <div id="site-page-settings">

        <div onclick="" class="gt-vbar z-1 bg-white fixed left-0 top-0 bottom-0 vh-100 o-0 hover-o-90 mw2 flex flex-column justify-center">
          <div class="relative">
            <button aria-label="exit slides" type="button" class="pointer gt-label gt-exit-slides bg-orange w-100 pa1 v-mid mb2 dim br2 f5 fw9">&#x21c5;</button>
            <div class="w5 dn gt-tooltip bg-black-80 white-90 pa1 absolute top-2 left-2 ">Exit slides and browse as normal page.</div>
          </div>

        </div>

      </div>
      <article id="webslides" class="disabled">
        {v{= o.slidesHTML }v}
      </article>

    </main>
    <footer >
      <div >
        {v{= o.mobileNavHTML || '' }v}
      </div>
    </footer>

    <script src="{v{= o._relurl('/js/webslides.min.js?v=0.0002') }v}"></script>
    <script src="{v{= o._relurl('/js/lib/fa/solid.min.js') }v}" data-auto-replace-svg="nest"></script>
    <script src="{v{= o._relurl('/js/lib/fa/fontawesome.min.js') }v}" data-auto-replace-svg="nest"></script>

  </body>
</html>
`;
  
    gtpb.partials['goandtalk/export/nav-mobile-js'] = `
{tf{? o.__get(o, 'site.params.mobile_menu_button.0') }tf}
  {loop{~ o.site.params.mobile_menu_button :btn:idx }loop}
  <div  class="z-1 handheld-menu-{v{= idx }v} handheld-menu overflow-scroll fixed top-0 left-0 right-0 bottom-0 pb5 dn bg-primary-color-dark" >
    <div class="h-100 pv3">
      <ul class="h-100 pl0 flex flex-column justify-end">
        {loop{~ o.site.menu[btn.menu] :menuitem:menuindex }loop}
          <li  class="hover-bg-white-50 pv3 ph4 bg-animate">
              <a href="{v{= o._relurl(menuitem.url) }v}" class="link  white-80">
                {enc{! menuitem.name }enc}
              </a>
          </li>
        {loop{~}loop}
      </ul>
    </div>
  </div>
  {loop{~ }loop}
{tf{?? }tf}
  <div  class="z-1 handheld-menu-0 handheld-menu overflow-scroll fixed top-0 left-0 right-0 bottom-0 pb5 dn bg-primary-color-dark" >
    <div class="h-100 flex flex-column pv3  justify-end">
      <ul class="h-100 pl0 ">
        {tf{? o.__get(o, 'site.menu.global.0') }tf}
          {loop{~ o.site.menu.global :menuitem:menuindex }loop}
            <li  class="hover-bg-white-50 pv3 ph4 bg-animate">
                <a href="{v{= o._relurl(menuitem.url) }v}" class="link  white-80">
                  {enc{! menuitem.name }enc}
                </a>
            </li>
          {loop{~}loop}
        {tf{?? }tf}
          <li  class="hover-bg-white-50 pv3 ph4 bg-animate">
              <a href="#" class="link  white-80 ">
                Home
              </a>
          </li>
        {tf{? }tf}
      </ul>
    </div>
  </div>

{tf{? }tf}

<div class="dn-l fixed left-0 right-0 bottom-0 z-5 flex" >
  {tf{? o.__get(o, 'site.params.mobile_menu_button.0') }tf}
    {loop{~ o.site.params.mobile_menu_button :btn:idx }loop}
      <button class="gt-menu-toggle handheld-toggler dn-l flex-grow-1 bg-white-70 pv3 b--near-white " data-target=".handheld-menu-{v{= idx }v}">
        {v{= o.__get(o.custom_menu_label,'' + idx ) || btn.label }v}
      </button>
    {loop{~ }loop}
  {tf{?? }tf}
    <button class="gt-menu-toggle handheld-toggler dn-l flex-grow-1 bg-white-70 pv3 b--near-white " data-target=".handheld-menu-0">Menu</button>
  {tf{? }tf}
</div>
`;
  

  
  
    gtpb.partials['goandtalk/slides/alternate-text-and-big-icon-layer'] = `<section 675275c791df5c494218febd9c0cde06eea2ae6b mv-storage="idb_array" gt-app="{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}" mv-bar="edit save" 35fe3a9616151be1e9a9abc33ece88d44bd47528
  class="alternate gt-mv-off relative flex flex-column mid-gray" ><div class="flex-auto flex flex-column justify-center {enc{! o.__get(it, \u0027appearance.section_background\u0027) || \u0027\u0027 }enc}
  {enc{! o.__get(it, \u0027appearance.slide_animation\u0027) || \u0027fadeIn\u0027 }enc}
  {enc{! o.__get(it, \u0027appearance.text_color\u0027) || \u0027dark-gray\u0027 }enc}
  "
  675275c791df5c494218febd9c0cde06eea2ae6b  mv-attribute="class" mv-value="section_background & ' ' & text_color & ' flex-auto flex flex-column justify-center ' & slide_animation" 35fe3a9616151be1e9a9abc33ece88d44bd47528><div class="cf w-100 relative pa2 pa3-m pa4-l center mw8 flex flex-wrap" >
      <div 675275c791df5c494218febd9c0cde06eea2ae6b mv-attribute="class" mv-value="'w-100 odd-order-1-ns flex flex-wrap fl w-' & icons.width & '-ns' " 35fe3a9616151be1e9a9abc33ece88d44bd47528 
      class="w-{enc{! o.__get(it, \u0027icons.width\u0027) || \u002730\u0027 }enc}-ns w-100 odd-order-1-ns flex flex-wrap fl">
        <div 675275c791df5c494218febd9c0cde06eea2ae6b mv-attribute="class" mv-value="'tc w-100 self-center  f-headline ' & if(icon_color,icon_color,'primary-color-light') " 35fe3a9616151be1e9a9abc33ece88d44bd47528 
          class="tc self-center w-100 f-headline {enc{! o.__get(it, \u0027appearance.icon_color\u0027) || \u0027primary-color-light\u0027 }enc}">
          <span class="fa-layers fa-fw">
            <i 675275c791df5c494218febd9c0cde06eea2ae6b mv-attribute="class" mv-value="'fas fa-' & outer_icon " 35fe3a9616151be1e9a9abc33ece88d44bd47528
            class="fas fa-{enc{! o.__get(it, \u0027icons.outer_icon\u0027) || \u0027circle\u0027 }enc}"></i>
            <i 675275c791df5c494218febd9c0cde06eea2ae6b mv-attribute="class" mv-value="'alt-mini-icon fas fa-' & mini_icon & ' ' & if(mini_icon_color,mini_icon_color,'white') " 35fe3a9616151be1e9a9abc33ece88d44bd47528
            data-fa-transform="{enc{! o.__get(it, \u0027icons.icon_transform\u0027) || \u0027shrink-6\u0027 }enc}" class="alt-mini-icon fas fa-{enc{! o.__get(it, \u0027icons.mini_icon\u0027) || \u0027\u0027 }enc}
            {enc{! o.__get(it, \u0027icons.mini_icon_color\u0027) || \u0027white\u0027 }enc}
            "></i>

          </span>

        </div>
        675275c791df5c494218febd9c0cde06eea2ae6b
        <div property="icons" class="dn show-in-edit w-100">
          <div>Mini Icon <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(mini_icon, '')">x</span></div>
          <div class="mid-gray flex flex-nowrap pt1 items-center">
            <input property="mini_icon" type="text" class="flex-auto dropdown-input  h2 w-100  bg-white  br0 b--black-10 " data-path="fas_list" value="check" data-minchars="0" >
            <button type="button" mv-action="invoke('toggleDDInput',mini_icon)" class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05" title="click to open dropdown list"> <i class="f6 fas fa-arrow-down"></i></button>
          </div>
          <div>Mini Icon Color <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(mini_icon_color, '')">x</span></div>
          <div class="mid-gray flex flex-nowrap pt1 items-center">
            <input property="mini_icon_color" type="text" class="flex-auto dropdown-input  h2 w-100  bg-white  br0 b--black-10 " data-path="text_color" value="white" data-minchars="0" >
            <button type="button" mv-action="invoke('toggleDDInput',mini_icon_color)" class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05" title="click to open dropdown list"> <i class="f6 fas fa-arrow-down"></i></button>
          </div>
          <div class="mt3">Outer Icon <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(outer_icon, '')">x</span></div>
          <div class="mid-gray flex flex-nowrap pt1 items-center">
            <input property="outer_icon" type="text" class="flex-auto dropdown-input  h2 w-100  bg-white  br0 b--black-10 " data-path="fas_list" value="circle" data-minchars="0" >
            <button type="button" mv-action="invoke('toggleDDInput',outer_icon)" class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05" title="click to open dropdown list"> <i class="f6 fas fa-arrow-down"></i></button>
          </div>

          <div class="mt3">Column Width [width]% </div>
          <input property="width" type="range" min="20" max="50" step="10" class="h2 w-100  bg-white  br0 b--black-10 " value="30"  >
          <div class="mt3 relative">
            <div class="gt-label"
            mv-action="invoke('setItemsAttr', icon_transform, 'root.children.icons', 'data-fa-transform', '.alt-mini-icon')"
            >Mini Icon Transformation </div>
            <input class="h2 w-100 bg-white  br0 b--black-10" property="icon_transform" value="shrink-6"/>
            <div class="dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible top-2">
              This is one of the keywords (shrink, grow, left, right, up, down, rotate) followed by a value, for example shrink-6 down-4. Click on the field title for the new value to take effect.
            </div>
          </div>
        </div>
        35fe3a9616151be1e9a9abc33ece88d44bd47528
      </div>
      <div class="w-100 w-50-ns flex-auto pa2 fl">
        
        <div 675275c791df5c494218febd9c0cde06eea2ae6b mv-attribute="class" mv-value="'w-100 pa3 ' & card_background" 35fe3a9616151be1e9a9abc33ece88d44bd47528
        class="w-100 pa3 {enc{! o.__get(it, \u0027appearance.card_background\u0027) || \u0027\u0027 }enc}">
          <p  675275c791df5c494218febd9c0cde06eea2ae6b property="intro" 35fe3a9616151be1e9a9abc33ece88d44bd47528  class="f4 pa2">{enc{! o.__get(it, \u0027intro\u0027) || \u0027\u0027 }enc} </p>
          <h2  675275c791df5c494218febd9c0cde06eea2ae6b property="title" 35fe3a9616151be1e9a9abc33ece88d44bd47528  class="tc pa2 pa3-m pa4-l ma0 f2">{enc{! o.__get(it, \u0027title\u0027) || \u0027\u0027 }enc} </h2>
          <div class="pt3 f3 markdown lh-copy nested-links"  675275c791df5c494218febd9c0cde06eea2ae6b property="content" 35fe3a9616151be1e9a9abc33ece88d44bd47528  >
             {v{= o.sanitizer.sanitize(o.md.render(o.__get(it, \u0027content\u0027) || \u0027* It just works\u0027 || \u0027\u0027 )) }v}

            
          </div>
        </div>
      </div>
    </div>

  </div>  {tf{? o.edit_mode }tf}


<div class="skip-zoom-clone  min-vh-100 w-100 absolute off-canvas-dashboard
">
  
  <div class="relative w-100 w-90-ns mw7 mt4 vh-100 bg-near-white overflow-y-scroll">
    <div class="bg-white-70 mb1 cf v-mid ph3">
      <span class="pv2 dib">Section Options</span>
      <span title="close" class="fr pv2 ph3 w3 tc orange hover-bg-white" mv-action="invoke('toggleClass', current_tab, '.off-canvas-dashboard', 'active')">X</span>
    </div>
    
    <div class="mb4 mh2 mh3-ns mt2 br1 shadow-4 b--white-30 ph1 ph2-ns pb4">
      

<input hidden property="current_tab" mv-storage="none" value="appearance"/>
<div class="pt1 flex flex-wrap items-stretch">

  
	<button data-toggle-tab="appearance" mv-action="set(current_tab,'appearance')" class="[if(current_tab='appearance', 'bg-white-90 bb-0')] gt-tab-button br1 active pointer ba f6 dib lh-solid ph2 pv2 mb2 ">
		
			<i class="fas fa-font"></i><span class="dn di-ns"> Appearance </span>
		
	</button>&nbsp;

  
	<button data-toggle-tab="global_section" mv-action="set(current_tab,'global_section'),invoke(&#39;updateGlobalSectionList&#39;, data_key)" class="[if(current_tab='global_section', 'bg-white-90 bb-0')] gt-tab-button br1  pointer ba f6 dib lh-solid ph2 pv2 mb2 ">
		
			<i class="fas fa-globe"></i><span class="dn di-ns"> Global Section </span>
		
	</button>&nbsp;

</div>

<div class="tab-content pt3 ">

	
	<div data-pane="appearance" class="gt-tab-pane [if(current_tab='appearance', '', 'dn')] active">
	 
		
		

<div  property="appearance" >
  <h3 class="mt2">Appearance</h3>
  <div class="cf flex flex-wrap ba b--black-05" >
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Section Background 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(section_background, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="section_background" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="solid_background"
          
           value="bg-transparent"
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',section_background)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            This is the fallback background color when image is not available or disabled.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Card Background 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(card_background, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="card_background" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="solid_background"
          
           value=""
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',card_background)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            this is the background of grid cards.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        

        <div>Text Color 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(text_color, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="text_color" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="text_color"
          
           value=""
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',text_color)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        

        <div>Icon Color 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(icon_color, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="icon_color" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="text_color"
          
           value=""
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',icon_color)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Slide Animation 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(slide_animation, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="slide_animation" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="slide_animation"
          
           value="fadeIn" 
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',slide_animation)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            The slide animation during presentation, default to fadeIn if not set. 
          </div>
        
      </div>
       
    
  </div>
</div> 

	
	</div>

	
	<div data-pane="global_section" class="gt-tab-pane [if(current_tab='global_section', '', 'dn')] ">
	 
		
		

<div >
  <h3 class="mt2">Global Section</h3>
  <div class="cf flex flex-wrap ba b--black-05" >
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Global Section 
        
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input property="is_global" type="checkbox" 
          class=""
          
          id="chk--is_global-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
          />
          <label class="flex-auto ph2" for="chk--is_global-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            Enable
          </label>
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            When checked, the section will be available in other pages. 
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 [if(!is_global,&#39;dn&#39;,&#39;&#39;)]">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Data Storage Key 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(data_key, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="data_key" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
           data-list="," 
           value=""
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',data_key)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            This is the key to store the global section. Alphanumeric and underscore only. Choose an existing key will replace previous data.
          </div>
        
      </div>
       
    
  </div>
</div> 

	
	</div>


</div>

    </div>

  </div>
</div>

<div onclick="" class="skip-zoom-clone dn mv-bar f7 tc w-100 absolute top-0 pv1 ph2 bg-white o-10 hover-o-90 ">

  <button type="button" data-action="toggle-base-toolbar" class="manage-section pointer dim br2 pv1 ph2 mh1" title="toggle global setting toolbar ">
    <i class="fas fa-ellipsis-v" data-fa-mask="fas fa-square" data-fa-transform="shrink-2 left-4"></i>
  </button>

  <span class="dn di-ns gt-pos-btns"> 
    <button type="button" data-action="move-up" class="gt-move-up manage-section pointer dim br2 pv1 ph2 mh1" title="move section up"><i class="fas fa-angle-up"></i></button>
    <button type="button" data-action="move-down" class="gt-move-down manage-section pointer dim br2 pv1 ph2 mh1" title="move section down"><i class="fas fa-angle-down"></i></button>
    <button type="button" data-action="insert-section" class="gt-insert-section manage-section pointer dim br2 pv1 ph2 mh1" title="insert section "><i class="fas fa-plus"></i></button>
    <button type="button" data-action="clone-section" class="gt-clone-section manage-section pointer dim br2 pv1 ph2 mh1" title="clone section"><i class="fas fa-clone"></i></button>
    <button type="button" data-action="delete-section" class="gt-delete-section manage-section pointer dim br2 pv1 ph2 mh2 white bg-orange" title="delete section"><i class="fas fa-trash"></i></button> 
  </span>

  
  <button title="turn editor on" type="button" data-action="toggle-mv-on" class="toggle-mv-on bg-light-green manage-section pointer dim br2 pv1 ph2 mh3" ><i class="fas fa-toggle-off"></i></button>
  <button title="turn editor off" type="button" data-action="toggle-mv-off" class="toggle-mv-off dn manage-section orange pointer dim br2 pv1 ph2 mh3" ><i class="fas fa-power-off"></i></button>
  
  <button type="button" class="gt-setting-toggle dn pointer dim br2 pv1 ph2 mh1" mv-action="invoke('toggleClass', current_tab, '.off-canvas-dashboard', 'active')"><i class="fas fa-cog"></i></button>
  <button title="edit section" type="button" class="mv-edit pointer dn dim br2 pv1 ph2 mh1">Edit</button>
  <button title="save section" type="button" class="mv-save pointer dn dim br2 pv1 ph2 mh1">Save</button>
</div>

{tf{?}tf}

 

</section>

`;
  
    gtpb.partials['goandtalk/slides/alternate-two-columns-text-and-image'] = `







<section 675275c791df5c494218febd9c0cde06eea2ae6b mv-storage="idb_array" gt-app="{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}" mv-bar="edit save" 35fe3a9616151be1e9a9abc33ece88d44bd47528
  class="alternate gt-mv-off relative flex flex-column mid-gray" ><div class="flex-auto flex flex-column justify-center
  {enc{! o.__get(it, \u0027appearance.section_background\u0027) || \u0027\u0027 }enc}
  {enc{! o.__get(it, \u0027appearance.slide_animation\u0027) || \u0027fadeIn\u0027 }enc}
  {enc{! o.__get(it, \u0027appearance.text_color\u0027) || \u0027black-40\u0027 }enc}
  "
  675275c791df5c494218febd9c0cde06eea2ae6b  mv-attribute="class" mv-value="section_background & ' ' & text_color & ' flex-auto flex flex-column justify-center ' & slide_animation" 35fe3a9616151be1e9a9abc33ece88d44bd47528>

    



<figure class="ma0">
	<picture>
    
    <img alt="" 675275c791df5c494218febd9c0cde06eea2ae6b mv-attribute="src" mv-value="image.src" 35fe3a9616151be1e9a9abc33ece88d44bd47528 class="absolute abs-image {tf{? o.edit_mode }tf}[image.animation]{tf{??}tf}{enc{! o.__get(it, \u0027image.animation\u0027) || \u0027\u0027 }enc}{tf{?}tf}
" src="a41325d3d724b613adde84fb3124bc6dd2d09ac7" >
    
  </picture>
</figure>
<span class="absolute absolute--fill
    {enc{! o.__get(it, \u0027image.overlay_background\u0027) || \u0027bg-black-10\u0027 }enc}"
    675275c791df5c494218febd9c0cde06eea2ae6b  mv-attribute="class" mv-value="'absolute absolute--fill ' & overlay_background" 35fe3a9616151be1e9a9abc33ece88d44bd47528></span><div class="cf w-100 relative  center flex flex-wrap {enc{! o.__get(it, \u0027section_max_width\u0027) || \u0027mw8\u0027 }enc}"
    675275c791df5c494218febd9c0cde06eea2ae6b
      mv-attribute="class"
      mv-value="'cf w-100 relative  center flex flex-wrap ' & if(section_max_width, section_max_width, 'mw8')"
    35fe3a9616151be1e9a9abc33ece88d44bd47528 >
      <div 675275c791df5c494218febd9c0cde06eea2ae6b mv-attribute="class"
      mv-value="'image-column w-100 z-0 flex flex-wrap fl w-' & image_column_width & '-ns ' &  image_order & ' ' & if(image_align_v_flex,image_align_v_flex,'items-center') & ' ' & image_layer & ' ' & image_column_height & ' ' & image_align_h" 35fe3a9616151be1e9a9abc33ece88d44bd47528 
      class="image-column w-100 z-0 flex flex-wrap fl
      {enc{! o.__get(it, \u0027image_column_height\u0027) || \u0027\u0027 }enc}
      {enc{! o.__get(it, \u0027image_layer\u0027) || \u0027static\u0027 }enc}
      {enc{! o.__get(it, \u0027image_order\u0027) || \u0027even-order-1-ns\u0027 }enc}
      {enc{! o.__get(it, \u0027image_align_h\u0027) || \u0027\u0027 }enc}
      w-{enc{! o.__get(it, \u0027image_column_width\u0027) || \u002730\u0027 }enc}-ns
      {enc{! o.__get(it, \u0027image_align_v_flex\u0027) || \u0027items-center\u0027 }enc}">
        <div class="tc overflow-hidden relative  w-100 flex flex-column justify-center items-center

        {enc{! o.__get(it, \u0027height_reference\u0027) || \u0027h\u0027 }enc}-{enc{! o.__get(it, \u0027image_height\u0027) || \u0027100\u0027 }enc}"
         675275c791df5c494218febd9c0cde06eea2ae6b mv-attribute="class" mv-value="'tc overflow-hidden relative  w-100 flex flex-column justify-center items-center ' & height_reference & '-' &  image_height " 35fe3a9616151be1e9a9abc33ece88d44bd47528
        > 
        
          <img class="mw-100 maxh-100
          o-{enc{! o.__get(it, \u0027image_opacity\u0027) || \u0027100\u0027 }enc}
          {enc{! o.__get(it, \u0027object_fit_class\u0027) || \u0027of-scale-down\u0027 }enc}
          {enc{! o.__get(it, \u0027image_br\u0027) || \u0027br0\u0027 }enc}"
          675275c791df5c494218febd9c0cde06eea2ae6b property="image_source" 35fe3a9616151be1e9a9abc33ece88d44bd47528
          src="be9210026fcf76504a9221b2aea4c4b61cf84e51"
          alt="{enc{! o.__get(it, \u0027image_alt_text\u0027) || \u0027\u0027 }enc}"
          >
        
        </div>
      </div>
      <div class="text-column z-0 center w-100 mw7 flex flex-auto pa2 pa3-m pa4-l fl
      {enc{! o.__get(it, \u0027text_column_class\u0027) || \u0027w-30-ns\u0027 }enc}
      {enc{! o.__get(it, \u0027card_align_h\u0027) || \u0027justify-center\u0027 }enc}
      {enc{! o.__get(it, \u0027card_align_v\u0027) || \u0027\u0027 }enc}
      "
      675275c791df5c494218febd9c0cde06eea2ae6b mv-attribute="class" mv-value="'text-column z-0 center w-100 mw7 flex flex-auto pa2 pa3-m pa4-l fl ' & card_align_h & ' ' & card_align_v & ' ' & if(text_column_class,text_column_class,'w-30-ns') " 35fe3a9616151be1e9a9abc33ece88d44bd47528>
        
        <div class="text-card w-100 pa3 relative
        {enc{! o.__get(it, \u0027card_background\u0027) || \u0027\u0027 }enc}
        {enc{! o.__get(it, \u0027card_font_family\u0027) || \u0027\u0027 }enc}
        {enc{! o.__get(it, \u0027card_text_color\u0027) || \u0027\u0027 }enc}
        {enc{! o.__get(it, \u0027card_text_align\u0027) || \u0027\u0027 }enc}
        f{enc{! o.__get(it, \u0027card_font_size\u0027) || \u00273\u0027 }enc}-ns
        fw{enc{! o.__get(it, \u0027card_font_weight\u0027) || \u0027\u0027 }enc}-ns
        {enc{! o.__get(it, \u0027card_letter_spacing\u0027) || \u0027\u0027 }enc}
        {enc{! o.__get(it, \u0027card_i\u0027) || \u0027\u0027 }enc}
        {enc{! o.__get(it, \u0027card_list_style\u0027) || \u0027\u0027 }enc}
        w-{enc{! o.__get(it, \u0027card_width\u0027) || \u0027100\u0027 }enc}-ns
        "
        675275c791df5c494218febd9c0cde06eea2ae6b mv-attribute="class" mv-value="'w-100 pa3 relative ' & card_background & ' ' & card_text_color & ' ' & card_font_family & ' ' & card_text_align & ' f' & if(card_font_size,card_font_size,'3') & '-ns ' & ' fw' & card_font_weight & '-ns ' & ' ' & card_letter_spacing & ' ' & card_list_style & ' ' & card_i & ' w-' & if(card_width,card_width,100) & '-ns' " 35fe3a9616151be1e9a9abc33ece88d44bd47528
        >
          <span class="z--1 absolute absolute--fill bg-{enc{! o.__get(it, \u0027overlay_base\u0027) || \u0027black\u0027 }enc}-{enc{! o.__get(it, \u0027card_overlay\u0027) || \u0027\u0027 }enc}"
          675275c791df5c494218febd9c0cde06eea2ae6b mv-attribute="class" mv-value="'z--1 absolute absolute--fill bg-' & if(overlay_base,overlay_base,'black') & '-' & card_overlay" 35fe3a9616151be1e9a9abc33ece88d44bd47528
          >
          </span>

          <p  675275c791df5c494218febd9c0cde06eea2ae6b property="intro" 35fe3a9616151be1e9a9abc33ece88d44bd47528  class="ma0 pv2">{enc{! o.__get(it, \u0027intro\u0027) || \u0027\u0027 }enc}</p>

          <h2 class="ma0 pa2
          pv{enc{! o.__get(it, \u0027title_pv\u0027) || \u00273\u0027 }enc}-ns
          ph{enc{! o.__get(it, \u0027title_ph\u0027) || \u0027\u0027 }enc}-ns
          {enc{! o.__get(it, \u0027title_display\u0027) || \u0027\u0027 }enc}
          {enc{! o.__get(it, \u0027title_background\u0027) || \u0027\u0027 }enc}
          {enc{! o.__get(it, \u0027title_color\u0027) || \u0027\u0027 }enc}
          {enc{! o.__get(it, \u0027title_font_family\u0027) || \u0027\u0027 }enc}
          {enc{! o.__get(it, \u0027title_align\u0027) || \u0027tc\u0027 }enc}
          f{enc{! o.__get(it, \u0027title_font_size\u0027) || \u00272\u0027 }enc}-ns
          fw{enc{! o.__get(it, \u0027title_font_weight\u0027) || \u0027\u0027 }enc}-ns
          {enc{! o.__get(it, \u0027title_letter_spacing\u0027) || \u0027\u0027 }enc}
          {enc{! o.__get(it, \u0027title_i\u0027) || \u0027\u0027 }enc}
          {enc{! o.__get(it, \u0027title_transform\u0027) || \u0027\u0027 }enc}
          "
           675275c791df5c494218febd9c0cde06eea2ae6b
            mv-attribute="class" mv-value="'ma0 pa2 pv' & title_pv & '-ns ph' & title_ph & '-ns ' & title_display & ' ' & title_background & ' ' & title_color & ' ' & title_font_family & ' ' & title_i & ' ' & title_align  & ' f' & title_font_size & '-ns ' & ' fw' & title_font_weight & '-ns ' & title_transform & ' ' & title_letter_spacing "
            style="opacity:1;"
          35fe3a9616151be1e9a9abc33ece88d44bd47528 
          >
          <span  675275c791df5c494218febd9c0cde06eea2ae6b property="title" 35fe3a9616151be1e9a9abc33ece88d44bd47528  class="">{enc{! o.__get(it, \u0027title\u0027) || \u0027\u0027 }enc}</span>
          </h2>
          <div class="pa2 {enc{! o.__get(it, \u0027body_background\u0027) || \u0027\u0027 }enc}"
          675275c791df5c494218febd9c0cde06eea2ae6b mv-attribute="class" mv-value="'pa2 ' & body_background " 35fe3a9616151be1e9a9abc33ece88d44bd47528 
          >
            
            <span class="{enc{! o.__get(it, \u0027quote_display\u0027) || \u0027dn\u0027 }enc}"
              675275c791df5c494218febd9c0cde06eea2ae6b mv-attribute="class" mv-value="quote_display" 35fe3a9616151be1e9a9abc33ece88d44bd47528
            >
              <i class="fas fa-quote-left fa-3x fa-pull-left"></i>
            </span>
            

            <div class=" markdown lh-copy nested-links {enc{! o.__get(it, \u0027fancy_style\u0027) || \u0027\u0027 }enc}"  675275c791df5c494218febd9c0cde06eea2ae6b property="content" 35fe3a9616151be1e9a9abc33ece88d44bd47528  >
               {v{= o.sanitizer.sanitize(o.md.render(o.__get(it, \u0027content\u0027) || \u0027* It just works\u0027 || \u0027\u0027 )) }v}

              
            </div>
            
            <span class="{enc{! o.__get(it, \u0027quote_display\u0027) || \u0027dn\u0027 }enc}"
              675275c791df5c494218febd9c0cde06eea2ae6b mv-attribute="class" mv-value="quote_display" 35fe3a9616151be1e9a9abc33ece88d44bd47528
            >
              <i class="fas fa-quote-right fa-3x fa-pull-right"></i>
            </span>
            

          </div>
          

          <div class="pv4" 675275c791df5c494218febd9c0cde06eea2ae6b property="cta" 35fe3a9616151be1e9a9abc33ece88d44bd47528>
            
            <div class="fadeIn animate-edit-cta center tc ba w-100
            {enc{! o.__get(it, \u0027cta.background_color\u0027) || \u0027bg-light-gray\u0027 }enc}
            {enc{! o.__get(it, \u0027cta_display\u0027) || \u0027\u0027 }enc}
            {enc{! o.__get(it, \u0027cta.border_color\u0027) || \u0027b--primary-color\u0027 }enc}
            {enc{! o.__get(it, \u0027cta.border_radius\u0027) || \u0027br2\u0027 }enc}
            pv{enc{! o.__get(it, \u0027cta.pv\u0027) || \u00272\u0027 }enc}
            ph{enc{! o.__get(it, \u0027cta.ph\u0027) || \u00273\u0027 }enc}
            mv{enc{! o.__get(it, \u0027cta.mv\u0027) || \u00270\u0027 }enc}
            w-{enc{! o.__get(it, \u0027cta.block_button_width\u0027) || \u0027100\u0027 }enc}-ns
            "
            675275c791df5c494218febd9c0cde06eea2ae6b
            mv-attribute="class" mv-value="'fadeIn animate-edit-cta center tc ba w-100  ' & cta.background_color & ' ' & cta_display & ' ' & cta.border_color & ' ' & cta.border_radius & ' pv' & cta.pv & ' ph' & cta.ph & ' mv' & cta.mv & ' w-' & cta.block_button_width &'-ns'"
            35fe3a9616151be1e9a9abc33ece88d44bd47528
            >
              
              

              <a class="no-underline w-100 dib"
              675275c791df5c494218febd9c0cde06eea2ae6b  property="url" 35fe3a9616151be1e9a9abc33ece88d44bd47528
               href="6aa54d91498069cf3ec3c6d46443b0b765c6cec2" >
                <div class="flex items-center justify-center {enc{! o.__get(it, \u0027cta.button_text_color\u0027) || \u0027mid-gray\u0027 }enc}
                  {enc{! o.__get(it, \u0027cta.button_i\u0027) || \u0027\u0027 }enc}
                  f{enc{! o.__get(it, \u0027cta.button_font_size\u0027) || \u0027\u0027 }enc}-ns
                "
                675275c791df5c494218febd9c0cde06eea2ae6b mv-attribute="class" mv-value="'flex items-center justify-center ' & cta.button_text_color & ' ' & cta.button_i & ' f' & cta.button_font_size & '-ns' " 35fe3a9616151be1e9a9abc33ece88d44bd47528
                >
                  
                  <span class="ph2 {enc{! o.__get(it, \u0027cta.icon_order\u0027) || \u0027\u0027 }enc}"
                  675275c791df5c494218febd9c0cde06eea2ae6b
                  mv-attribute="class" mv-value="'ph2 ' & icon_order"
                  35fe3a9616151be1e9a9abc33ece88d44bd47528
                  >
                    <i class="cta-icon fas fa-{enc{! o.__get(it, \u0027cta.inner_icon\u0027) || \u0027info\u0027 }enc}"
                    data-fa-mask="fas fa-{enc{! o.__get(it, \u0027cta.icon_mask\u0027) || \u0027circle\u0027 }enc}"
                    data-fa-transform="{enc{! o.__get(it, \u0027cta.inner_icon_transform\u0027) || \u0027shrink-4\u0027 }enc}"
                    675275c791df5c494218febd9c0cde06eea2ae6b
                    mv-attribute="class" mv-value="'cta-icon fas fa-' & inner_icon"
                    35fe3a9616151be1e9a9abc33ece88d44bd47528
                    >
                    </i>
                  </span>
                  
                  <span 675275c791df5c494218febd9c0cde06eea2ae6b  property="name"  35fe3a9616151be1e9a9abc33ece88d44bd47528 >
                  {enc{! o.__get(it, \u0027cta.name\u0027) || \u0027Quick Start\u0027 }enc}
                  </span>
                </div>
              </a>
            </div>

            675275c791df5c494218febd9c0cde06eea2ae6b

            <div class="dn show-in-edit skip-zoom-clone absolute bottom-2 w-100 overflow-visible f7 f6-ns normal fs-normal relaxed">
              <div class="relative">

                <div class="fadeIn [if(cta_display='dn','dn','flex')] flex-wrap items-center pointer [if(is_cta_form_active,'bg-black-20','')]"
mv-action="set(is_cta_form_active,!is_cta_form_active),invoke('promoteSection', section_background)"
>
  <div class="flex-auto"> 
    <div class="w-100 gt-label">&nbsp;
      <span class="pv2 ph3 cta-button-options [if(is_cta_form_active,'dib','dn')]">
        <i class="fas fa-window-close"></i>
      </span>
    </div>
    <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible">
      Click to show more options to design button.
    </div>
  </div>

  <div class="relative bg-black-10 pv2 ph3">
    <i class="fas fa-palette  white"></i>
  </div>
</div>


                <div class="cta-button-options fadeIn absolute z-1 [if(is_cta_form_active,'','dn')] top-2 pa2 ba b--white-80 bg-light-gray mid-gray mt4">
                  <div class="fadeIn [if(is_cta_form_active,'','dn')]">
  <span class="f4 dib ph1 mh1 pv2">
    Button Options
  </span>
  
  <span class="dib relative ph1 mh1 pv2">
    <span class="gt-label">
      <button type="button" class="grow pointer mh1 pa1 f6 br2 [if(button_i = 'i','bg-black-40','bg-black-20')]"
        mv-action="set(button_i, if(button_i, '','i'))"
      >
        <i class="fas fa-fw fa-italic" ></i>
      </button>
    </span>
    <span class="dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
        Toggle italic button text.
    </span>
  </span>
  <span class="dib relative ph1 mh1 pv2">
    <span class="gt-label">
      <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20  br2"
      mv-action="set(button_font_size, if(button_font_size < 7, button_font_size + 1, button_font_size))"
      >
        <i class="fas fa-fw fa-font" data-fa-transform="shrink-6" ></i>
      </button>
    </span>
    <span class="dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
        Decrease font size.
    </span>
  </span>
  <span class="dib relative ph1 mh1 pv2">
    <span class="gt-label">
      <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20  br2"
      mv-action="set(button_font_size, if(button_font_size > 1, button_font_size - 1, button_font_size))"
      >
          <i class="fas fa-fw fa-font"  ></i>
      </button>
    </span>
    <span class="dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
        Increase font size.
    </span>
  </span>
</div>


                  
                  

<div >
  <h3 class="mt2"></h3>
  <div class="cf flex flex-wrap ba b--black-05" >
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        

        <div>Background Color 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(background_color, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="background_color" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="solid_background"
          
           value="bg-light-gray" 
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',background_color)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        

        <div>Text Color 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(button_text_color, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="button_text_color" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="text_color"
          
           value="mid-gray" 
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',button_text_color)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        

        <div>Border Color 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(border_color, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="border_color" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="border_color"
          
           value="b--light-gray" 
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',border_color)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        

        <div>Border Radius 
        
        
        </div>
        <div 
        class=" bg-white 
         flex  flex-wrap   pt1 cf items-center ">
        
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
             property="border_radius"
            
            
            id="radio-43-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-43-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="br0"   checked 
            />
            <label class="flex-auto ph2" for="radio-43-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            br0 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-43-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-43-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="br1"  
            />
            <label class="flex-auto ph2" for="radio-43-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            br1 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-43-2-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-43-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="br2"  
            />
            <label class="flex-auto ph2" for="radio-43-2-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            br2 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-43-3-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-43-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="br3"  
            />
            <label class="flex-auto ph2" for="radio-43-3-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            br3 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-43-4-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-43-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="br4"  
            />
            <label class="flex-auto ph2" for="radio-43-4-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            br4 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-43-5-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-43-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="br-pill"  
            />
            <label class="flex-auto ph2" for="radio-43-5-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            br-pill 
            </label>
          </div>
          
        
        </div> 
        
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        

        <div>Button Width 
        
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input  min="10"  max="100"  step="10" 
           property="block_button_width" 
          type="range" 
          class="flex-auto  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
          
           value="50" 
          data-minchars="0" 
          />
          
        
        </div> 
        
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        

        <div>Horizontal Padding  [if(ph,0.25 * pow(2,(ph-1)),'0')] REM
        
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input  max="4"  step="1" 
           property="ph" 
          type="range" 
          class="flex-auto  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
          
           value="3" 
          data-minchars="0" 
          />
          
        
        </div> 
        
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        

        <div>Vertical Padding  [if(pv,0.25 * pow(2,(pv-1)),'0')] REM 
        
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input  max="4"  step="1" 
           property="pv" 
          type="range" 
          class="flex-auto  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
          
           value="2" 
          data-minchars="0" 
          />
          
        
        </div> 
        
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        

        <div>Vertical Margin  [if(mv,0.25 * pow(2,(mv-1)),'0')] REM 
        
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input  min="1"  max="5"  step="1" 
           property="mv" 
          type="range" 
          class="flex-auto  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
          
           value=""
          data-minchars="0" 
          />
          
        
        </div> 
        
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Outer Icon 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(icon_mask, '')">X</span>
        
        </div>
        <div  mv-action="invoke(&#39;setItemsAttr&#39;, icon_mask, &#39;root.children.cta.children.url&#39;, &#39;data-fa-mask&#39;, &#39;i.cta-icon&#39;)" 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="icon_mask" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="fas_list"
          
           value="circle" 
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',icon_mask)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            Optional. This is the icon on the outside. It is rendered on the button only if an inner icon has been selected.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Inner Icon  <i class="fas fa-[inner_icon]"></i>
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(inner_icon, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="inner_icon" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="fas_list"
          
           value="info" 
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',inner_icon)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            If an icon is selected, it is rendered alone, or with a selected mask.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Inner Icon transform   <button class="f7 pa1 b--black-20 br1 " type="button" mv-action="invoke('setItemsAttr', inner_icon_transform, 'root.children.cta.children.url', 'data-fa-transform', 'i.cta-icon')">
  ok
  </button>

        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(inner_icon_transform, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="inner_icon_transform" 
          type="text" 
          class="flex-auto  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
          
           value="shrink-4" 
          data-minchars="0" 
          />
          
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            Use the keywords and a number to resize and position the icon: shrink grow rotate up down left right flip-v flip-h
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Icon Order 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(icon_order, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="icon_order" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
           data-list="order-1, dn" 
           value=""
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',icon_order)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            Use order-1 to place icon after the button text, and dn to hide the icon. 
          </div>
        
      </div>
       
    
       
        <input class="absolute" hidden property="button_i" value="" />
       
    
       
        <input class="absolute" hidden property="button_font_size" value="4" />
       
    
  </div>
</div> 


                </div>
              </div>
            </div>

            35fe3a9616151be1e9a9abc33ece88d44bd47528
          </div>
          

        </div>

      </div>

    </div> 
    675275c791df5c494218febd9c0cde06eea2ae6b

      

<div class="fadeIn ui-image-position dn [if(toolbar_id = 1, 'show-in-edit','')] absolute top-2 left-2 right-0 center">
  <div class="relative">
    <div class="absolute top-0 bg-black-[toolbar_alpha] white ph3 left-0 right-0 center mw8">
      <div class="mv2 flex flex-wrap items-center">

        <span class="dib relative ph1 mh1 pv2">
          <span class="pa1 dim dib pointer gt-label [if(image_order ='odd-order-1-ns' or image_order ='even-order-1-ns','outline','')]"
            mv-action="set(image_order,if(!image_order or image_order='line-start','odd-order-1-ns',if(image_order='even-order-1-ns','line-start','even-order-1-ns'))),
            invoke('changeFadeIn', image_order, 'root.children.image_source.element.parentElement.parentElement.parentElement')"
          >
          <i class="fas f3 f4-l fa-fw fa-address-card fa-flip-horizontal"></i>

          </span>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              Change the order of image to create alternating sections. The value of current setting is [image_order].
          </span>
        </span>

        <span class="dib relative ph1 mh1 pv2"><span class="pa1 dim dib pointer gt-label [if(image_under_text,'outline','')]"
            mv-action="
            set(image_under_text, !image_under_text ),
            set(image_layer,if(image_under_text,'absolute','static')),
            set(image_column_height,if(image_under_text,'h-100','')),
            set(image_column_width,if(!image_under_text and image_column_width>60,60,image_column_width)),
            set(text_column_class,if(image_under_text,'w-100-ns', 'w-' & (100-image_column_width) &'-ns' )),
            invoke('changeFadeIn', image_layer, 'root.children.image_source.element.parentElement.parentElement'),
            "
          >
            <i class="fas f3 f4-l fa-hiking fa-fw " data-fa-mask="fas f3 f4-l fa-align-justify" data-fa-transform="shrink-4"></i>
          </span>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              Whether to always place image under text. If disabled, the image is placed under text when the width is over 60%.
          </span>
        </span>

        <span class="dib relative ph1 mh1 pv2">
          <span class="pa1 dim dib pointer gt-label [if(section_max_width ='mw-100','outline','')]"
            mv-action="set(section_max_width,if(!section_max_width or section_max_width='mw8', 'mw-100', 'mw8')),
            invoke('changeFadeIn', section_max_width, 'root.children.image_source.element.parentElement.parentElement')"
          >
            <i class="fas f3 f4-l fa-fw  fa-laptop-code"></i>
          </span>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              Allow the image to expand to the side of the window.
          </span>
        </span>


        <span class="dib relative ph1 mh1 pv2">
          <span class="pa1 dim dib pointer gt-label [if(image_align_v_flex ='items-start','outline','')]"
            mv-action="set(image_align_v_flex,'items-start'),
            invoke('changeFadeIn', image_align_v_flex, 'root.children.image_source.element.parentElement.parentElement')"
          >
            <i class="fas f3 f4-l fa-fw  fa-user" data-fa-transform="shrink-7 up-4" data-fa-mask="fas f3 f4-l fa-square-full"></i>
          </span>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              Align the image to the top if the image is not full height.
          </span>
        </span>
        <span class="dib relative ph1 mh1 pv2">
          <span class="pa1 dim dib pointer gt-label [if(image_align_v_flex ='items-center','outline','')]"
            mv-action="set(image_align_v_flex,'items-center'),invoke('changeFadeIn', image_align_v_flex, 'root.children.image_source.element.parentElement.parentElement')"
          >
            <i class="fas f3 f4-l fa-fw fa-user" data-fa-transform="shrink-7" data-fa-mask="fas f3 f4-l fa-square-full"></i>
          </span>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              Align the image to the middle vertically if the image is not full height.
          </span>
        </span>
        <span class="dib relative ph1 mh1 pv2">
          <span class="pa1 dim dib pointer gt-label [if(image_align_v_flex ='items-end','outline','')]"
            mv-action="set(image_align_v_flex,'items-end'),invoke('changeFadeIn', image_align_v_flex, 'root.children.image_source.element.parentElement.parentElement')"
          >
            <i class="fas f3 f4-l fa-fw fa-user" data-fa-transform="shrink-7 down-4" data-fa-mask="fas f3 f4-l fa-square-full"></i>
          </span>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              Align the image to the bottom if the image is not full height.
          </span>
        </span>
        
        <span class="dib relative ph1 mh1 pv2">
          <span class="pa1 dim dib pointer gt-label [if(object_fit_class ='of-cover','outline','')]"
            mv-action="
            set(object_fit_class,if('of-cover'=object_fit_class,'of-scale-down','of-cover')),
            invoke('replaceNodeClass',object_fit_class,'mavo.root.children.image_source.element','of-'),
            invoke('changeFadeIn', object_fit_class, 'root.children.image_source.element.parentElement.parentElement')"
          >
            <i class="fas f3 f4-l fa-fw fa-arrows-alt" data-fa-transform="shrink-4 bottom-4" data-fa-mask="fas f3 f4-l fa-square-full"></i>
          </span>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              Expand image to cover the container
          </span>
        </span>

        <span class="dib relative ph1 mh1 pv2">
          <span class="pa1 dim dib pointer gt-label [if(image_br ='br-100','outline','')]"
            mv-action="set(image_br,if(image_br='br-100','br0','br-100')),
            invoke('toggleClass', image_source,'','br-100'),
            invoke('changeFadeIn', image_br, 'root.children.image_source.element.parentElement.parentElement')"
          >
            <i class="fas f3 f4-l fa-fw  fa-user-circle" ></i>
          </span>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              Toggle round image
          </span>
        </span><span class="[if(image_layer='absolute','dib','dn')] relative ph1 mh1 pv2 ">
          <span class="pa1 dim dib pointer gt-label [if(image_align_h ='left-0','outline','')]"
            mv-action="set(image_align_h,'left-0'),invoke('changeFadeIn', image_align_h, 'root.children.image_source.element.parentElement.parentElement')"
          >
            <i class="fas f3 f4-l fa-fw fa-users" data-fa-transform="shrink-7 left-4" data-fa-mask="fas f3 f4-l fa-square-full"></i>
          </span>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              Align the image to the left if the image is not full width.
          </span>
        </span>
        <span class="if(image_layer='absolute','dib','dn')] relative ph1 mh1 pv2">
          <span class="pa1 dim dib pointer gt-label [if(contains(image_align_h,'left--'),'outline','')]"
            mv-action="set(image_align_h,'left--' & ((100-image_column_width)/2) & '-ns'),invoke('changeFadeIn', image_align_h, 'root.children.image_source.element.parentElement.parentElement')"
          >
            <i class="fas f3 f4-l fa-fw fa-users" data-fa-transform="shrink-7" data-fa-mask="fas f3 f4-l fa-square-full"></i>
          </span>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              Align the image to the center if the image is not full width.
          </span>
        </span>
        <span class="if(image_layer='absolute','dib','dn')] relative ph1 mh1 pv2">
          <span class="pa1 dim dib pointer gt-label [if(image_align_h ='right-0','outline','')]"
            mv-action="set(image_align_h,'right-0'),invoke('changeFadeIn', image_align_h, 'root.children.image_source.element.parentElement.parentElement')"
          >
            <i class="fas f3 f4-l fa-fw fa-users" data-fa-transform="shrink-7 right-4" data-fa-mask="fas f3 f4-l fa-square-full"></i>
          </span>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              Align the image to the right if the image is not full width.
          </span>
        </span>

        <span class="dib relative ph1 mh1 pv2">
          <span class="pa1 dim dib pointer gt-label [if(card_align_h ='justify-start','outline','')]"
            mv-action="set(card_align_h,'justify-start'),invoke('changeFadeIn', card_align_h, 'root.children.content.element.parentElement')"
          >
            <i class="fas f3 f4-l fa-fw fa-bars" data-fa-transform="shrink-6 left-4" data-fa-mask="fas f3 f4-l fa-square-full"></i>
          </span>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              Align the text block to the left if not full width.
          </span>
        </span>
        <span class="dib relative ph1 mh1 pv2">
          <span class="pa1 dim dib pointer gt-label [if(card_align_h ='justify-center','outline','')]"
            mv-action="set(card_align_h,'justify-center'),invoke('changeFadeIn', card_align_h, 'root.children.content.element.parentElement')"
          >
            <i class="fas f3 f4-l fa-fw fa-bars" data-fa-transform="shrink-6" data-fa-mask="fas f3 f4-l fa-square-full"></i>
          </span>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              Align the text block to the center if not full width.
          </span>
        </span>
        <span class="dib relative ph1 mh1 pv2">
          <span class="pa1 dim dib pointer gt-label [if(card_align_h ='justify-end','outline','')]"
            mv-action="set(card_align_h,'justify-end'),invoke('changeFadeIn', card_align_h, 'root.children.content.element.parentElement')"
          >
            <i class="fas f3 f4-l fa-fw fa-bars" data-fa-transform="shrink-6 right-4" data-fa-mask="fas f3 f4-l fa-square-full"></i>
          </span>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              Align the text block to the right if not full width.
          </span>
        </span>

        <span class="dib relative ph1 mh1 pv2">
          <span class="pa1 dim dib pointer gt-label [if(card_align_v ='items-start','outline','')]"
            mv-action="set(card_align_v,'items-start'),invoke('changeFadeIn', card_align_v, 'root.children.content.element.parentElement')"
          >
            <i class="fas f3 f4-l fa-fw fa-font" data-fa-transform="shrink-6 up-4" data-fa-mask="fas f3 f4-l fa-square-full"></i>
          </span>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              Align the text block to the top if the image is higher.
          </span>
        </span>
        <span class="dib relative ph1 mh1 pv2">
          <span class="pa1 dim dib pointer gt-label [if(card_align_v ='items-center','outline','')]"
            mv-action="set(card_align_v,'items-center'),invoke('changeFadeIn', card_align_v, 'root.children.content.element.parentElement')"
          >
            <i class="fas f3 f4-l fa-fw fa-font" data-fa-transform="shrink-6" data-fa-mask="fas f3 f4-l fa-square-full"></i>
          </span>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              Align the text block to the middle vertically if the image is higher.
          </span>
        </span>
        <span class="dib relative ph1 mh1 pv2">
          <span class="pa1 dim dib pointer gt-label [if(card_align_v ='items-end','outline','')]"
            mv-action="set(card_align_v,'items-end'),invoke('changeFadeIn', card_align_v, 'root.children.content.element.parentElement')"
          >
            <i class="fas f3 f4-l fa-fw fa-font" data-fa-transform="shrink-6 down-4" data-fa-mask="fas f3 f4-l fa-square-full"></i>
          </span>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              Align the text block to the bottom if the image is higher.
          </span>
        </span>

        <span class="dib relative ph1 mh1 pv2">
          <span class="pa1 dim dib pointer gt-label [if(cta_display ='dn','','outline')]"
            mv-action="set(cta_display,if(cta_display='dn','','dn')),
            invoke('changeFadeIn',cta_display,'root.children.image_source.element.parentElement.parentElement')
            "
          >
            <i class="fas f3 f4-l fa-fw fa-handshake" data-fa-transform="shrink-6" data-fa-mask="fas f3 f4-l fa-square"></i>
          </span>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              Toggle call-to-action button.
          </span>
        </span>

        <span class="dib relative ph1 mh1 pv2">
          <span class="pa1 dim dib pointer gt-label [if(quote_display ='di','outline','')]"
            mv-action="set(quote_display,if(quote_display='di','dn','di'))"
          >
            <i class="fas f3 f4-l fa-fw fa-quote-left" data-fa-transform="shrink-6" data-fa-mask="fas f3 f4-l fa-square"></i>
          </span>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              Toggle big quotation mark around text.
          </span>
        </span>

        <span class="dib relative ph1 mh1 pv2">
          <span class="pa1 dim dib pointer gt-label [if(title_display ='dn','','outline')]"
            mv-action="set(title_display,if(title_display='dn','','dn') ),
            invoke('changeFadeIn',title_display, 'root.children.image_source.element.parentElement.parentElement'),
            invoke('changeFadeIn',title_display, 'root.children.title.element.parentElement.parentElement', true)
            "
          >
            <i class="fas f3 f4-l fa-fw fa-heading" data-fa-transform="shrink-6" data-fa-mask="fas f3 f4-l fa-square"></i>
          </span>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              Toggle display title
          </span>
        </span>

      </div>

      <div class="cf flex flex-wrap"> 
        <div class="flex-auto relative fl ph2 w-100 w-50-m w-30-l pv3 ">
          <div class="gt-label flex"
          mv-action="set(text_column_class, if(image_column_width > 60, 'w-100-ns', 'w-' & (100 - image_column_width) & '-ns')),
          invoke('changeFadeIn', image_column_width, 'root.children.image_source.element.parentElement.parentElement'),
          set(image_layer, if(image_column_width>60 or image_under_text,'absolute', 'static')),
          set(image_column_height, if(image_column_width>60 or image_under_text,'h-100', '')),
          set(image_align_h, if(image_align_h != 'left-0' and image_align_h != 'right-0', 'left--' & ((100-image_column_width)/2 ) & '-ns', image_align_h))
          "
          >
            <div class="absolute f6 top-0 overflow-visible">Image [image_column_width]%, text column [if(image_under_text or image_column_width > 60, 100, 100-image_column_width)]% </div>

            <i class="fas f3 f4-l fa-fw fa-image"></i>
            <span class="w1"></span>
            <input list="width_of_container" property="image_column_width" type="range" min="0" max="100" step="10" class="ph1 flex-auto  bg-white  br0 b--black-10 " value="30"  >
          </div>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              This is the width of the image column. When placing image beside text, this will decide how much space to allocate to image and text.
          </span>
        </div>
        <div class="flex-auto relative fl ph2 w-100 w-50-m w-30-l pv3">
          <div class="gt-label flex"
          mv-action="invoke('replaceNodeClass', image_opacity, 'mavo.root.children.image_source.element', 'o-', 'o-')"
          >
              <i class="fas f3 f4-l fa-fw fa-wine-glass-alt"></i>
              <span class="w1"></span>
            <input list="width_of_container" property="image_opacity" type="range" min="10" max="100" step="10" class="ph1 flex-auto  bg-white  br0 b--black-10 " value="100"  >
          </div>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              Change the opacity of the image, allow background color to partially come thorough, and make text more readable.
          </span>
        </div>
        <div class="flex-auto fl relative ph2 w-100 w-50-m w-20-l pv3">
          <div class="gt-label flex">
            <span
            class="dib pointer grow [if(overlay_base='white','outline','')]"
            mv-action="set(overlay_base,if(overlay_base='white','black','white'))"
            >
              <i class="fas f3 f4-l fa-fw fa-adjust" ></i>
            </span>
            <span class="w1"></span>
            <input list="width_of_container" property="card_overlay" type="range" min="0" max="50" step="10" class="ph1 flex-auto bg-white  br0 b--black-10 " value="0"  >
          </div>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              Apply a semi-transparent layer below text to make it more readable. Click the icon to toggle semi-transparent black or white.
          </span>
        </div>

        <div class="flex-auto fl relative ph2 w-100 w-50-m w-20-l pv3 "> 
          <div class="gt-label flex"
            mv-action="invoke('changeFadeIn', card_width, 'root.children.image_source.element.parentElement.parentElement.parentElement')"
          >
            <div class="absolute f6 top-0 overflow-visible">Text [card_width]% of column.</div>
            <i class="fas f3 f4-l fa-fw fa-bars" ></i>
            <span class="w1"></span>
            <input list="width_of_container" property="card_width" type="range" min="20" max="100" step="10" class="ph1 flex-auto bg-white br0 b--black-10 " value="100"  >
          </div>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              This is the width of the text block within the text column.
          </span>
        </div>
      </div>
    </div>
<div class="w2 absolute left--2" style="top: 8rem;">
      <div class="relative pv2 ph1 overflow-visible">
        <div class="gt-label f7">[image_height]%</div>
        <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
            The height of image in [if(height_reference='vh','viewport','section' )].
        </span>
      </div>

      <div class="pv2 ph1">
        <span class="dib relative ">
          <span class="pa1 dim dib pointer gt-label [if('vh' = height_reference, 'outline')]"
            mv-action="set(height_reference,if(height_reference='vh','h','vh'))"
          >
            <i class="fas f3 f4-l fa-fw fa-laptop"></i>
          </span>
          <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
              Toggle percentage reference to viewport height, or dynamic section height.
          </span>
        </span>
      </div>

      <div class="pv2 ph1 relative">
        <span class="pa1 dim dib pointer gt-label [if(image_height =100,'outline','')]"
          mv-action="set(image_height, 100),
          invoke('changeFadeIn', image_height, 'root.children.image_source.element.parentElement.parentElement')"
        >
          <i class="fas f3 f4-l fa-hiking fa-fw" data-fa-mask="fas f3 f4-l fa-square-full"  data-fa-transform="shink-4"></i>
        </span>
        <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
          Set image height to 100%
        </span>
      </div>
      <div class="pv2 ph1 relative">
        <span class="pa1 dim dib pointer gt-label [if(image_height = 75,'outline','')]"
          mv-action="set(image_height, 75),
          invoke('changeFadeIn', image_height, 'root.children.image_source.element.parentElement.parentElement')"
        >
          <i class="fas f3 f4-l fa-hiking fa-fw" data-fa-mask="fas f3 f4-l fa-square-full"  data-fa-transform="shink-4 down-3"></i>
        </span>
        <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
          Set image height to 75%
        </span>
      </div>
      <div class="pv2 ph1 relative">
        <span class="pa1 dim dib pointer gt-label [if(image_height = 50,'outline','')]"
          mv-action="set(image_height, 50),
          invoke('changeFadeIn', image_height, 'root.children.image_source.element.parentElement.parentElement')"
        >
          <i class="fas f3 f4-l fa-hiking fa-fw" data-fa-mask="fas f3 f4-l fa-square-full"  data-fa-transform="shink-4 down-6"></i>
        </span>
        <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
          Set image height to 50%
        </span>
      </div>
      <div class="pv2 ph1 relative">
        <span class="pa1 dim dib pointer gt-label [if(image_height = 25,'outline','')]"
          mv-action="set(image_height, 25),
          invoke('changeFadeIn', image_height, 'root.children.image_source.element.parentElement.parentElement')"
        >
          <i class="fas f3 f4-l fa-hiking fa-fw" data-fa-mask="fas f3 f4-l fa-square-full"  data-fa-transform="shink-4 down-9"></i>
        </span>
        <span class="dn pa1 gt-tooltip absolute bg-black white-80 overflow-y-visible w4 top-4 z-1">
          Set image height to 25%
        </span>
      </div>

      <div class="h2">&nbsp;</div>

    </div>

    <input hidden list="height_of_container" property="image_height" type="range" min="25" max="100" step="25" class="w-100  bg-white  br0 b--black-10 " value="100"  >
    <input hidden property="text_column_class" >
    <input hidden property="image_layer" value="static">
    <input hidden property="image_under_text" type="checkbox" >
    <input hidden property="image_column_height">
    <input hidden property="image_align_h">
    <input hidden property="image_align_v_flex">
    <input hidden property="card_align_h">
    <input hidden property="card_align_v">
    <input hidden property="overlay_base">
    <input hidden property="cta_display">
    <input hidden property="quote_display" value="dn">
    <input hidden property="title_display">
  </div>
</div>


      <div class="absolute top-2 center mw8 left-2 right-0 ph2" > 
        <div class="fadeIn skip-zoom-clone dn [if(toolbar_id = 2, 'show-in-edit','')] relative w-100 overflow-visible">
          
          <div class="f7 f6-ns normal fs-normal relaxed ">

            
<div class="ba b--white-30 w-100 bg-black-[toolbar_alpha] [if(text_toolbar_id > 0,'dn','')]">
  <div class="mv2 flex flex-wrap items-center">
    <span class="dib relative ph1 mh1 pv2"
    mv-action="invoke('toggleClass', section_background, '.title-options', 'dn')"
    >
      <span class="gt-label">
        <i class="fas fa-heading  white pa2 br0"></i>
      </span>
      <span class="dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
          These styles apply to the title only. Click here to show more options.
      </span>
    </span>

    <span class="dib relative ph1 mh1 pv2"
        mv-action="invoke('toggleClass', section_background, '.text-block-toolbar', 'dn')"
      >
      <span class="gt-label">
        <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20 white br2" >
          <i class="fas fa-keyboard"></i>
        </button>
      </span>
      <span class="dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
          Toggle text block toolbar.
      </span>

    </span>

    <span class="dib relative ph1 mh1 pv2">
      <span class="gt-label">
        <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20 white br2 [if(title_transform = 'ttu','outline','')]" mv-action="set(title_transform, if(title_transform = 'ttu', '', 'ttu')), invoke('changeFadeIn', title_transform, 'root.children.title.element.parentElement')">
          <i class="fas fa-fw fa-font" ></i>
        </button>
      </span>
      <span class="ttu dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
          Toggle upper case
      </span>
    </span>

    <span class="dib relative ph1 mh1 pv2">
      <span class="gt-label">
        <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20 white br2 [if(title_transform = 'ttc','outline','')]" mv-action="set(title_transform, if(title_transform = 'ttc', '', 'ttc')), invoke('changeFadeIn', title_transform, 'root.children.title.element.parentElement')">
          <i class="fas fa-fw fa-ad" ></i>
        </button>
      </span>
      <span class="ttc dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
          Toggle captilize case first letter
      </span>
    </span>

    <span class="dib relative ph1 mh1 pv2">
      <span class="gt-label">
        <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20 white br2 [if(title_i = 'i', 'outline','')]" mv-action="set(title_i, if(title_i = 'i', 'fs-normal','i')), invoke('changeFadeIn', title_i, 'root.children.title.element.parentElement')">
          <i class="fas fa-fw fa-italic" ></i>
        </button>
      </span>
      <span class="i dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
          Toggle italic style
      </span>
    </span>

    <span class="dib relative ph1 mh1 pv2">
      <span class="gt-label">
        <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20 white br2 [if(title_align = 'tc', 'outline','')]" mv-action="set(title_align, if(title_align = 'tc','ts','tc')), invoke('changeFadeIn', title_align, 'root.children.title.element.parentElement')">
          <i class="fas fa-fw fa-align-center"></i>
        </button>
      </span>
      <span class="tc dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
          Toggle align center
      </span>
    </span>

    <span class="dib relative ph1 mh1 pv2">
      <span class="gt-label">
        <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20 white br2"
        mv-action="set(title_font_size, if(title_font_size= -5, 1, if(title_font_size < 4, title_font_size + 1, title_font_size))),
        invoke('changeFadeIn', title_font_size, 'root.children.title.element.parentElement')">
          <i class="fas fa-fw fa-sort-alpha-down" ></i>
        </button>
      </span>
      <span class="f7 dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
          Decrease font size for medium and large screens.
      </span>
    </span>

    <span class="dib relative ph1 mh1 pv2">
      <span class="gt-label">
        <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20 white br2"
        mv-action="set(title_font_size, if(title_font_size = 1, -5, if(title_font_size > -6, title_font_size - 1, title_font_size))),
        invoke('changeFadeIn', title_font_size, 'root.children.title.element.parentElement')">
          <i class="fas fa-fw fa-sort-alpha-up" ></i>
        </button>
      </span>
      <span class="f5 dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
          Increase font size for medium and large screens.
      </span>
    </span>

    <span class="dib relative ph1 mh1 pv2">
      <span class="gt-label">
        <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20 white br2" mv-action="set(title_font_weight, if(title_font_weight > 1, title_font_weight - 1, title_font_weight)), invoke('changeFadeIn', title_font_weight, 'root.children.title.element.parentElement')">
          <i class="fw1 fas fa-fw fa-angle-down" ></i>
        </button>
      </span>
      <span class="fw1 dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
          Decrease font weight for medium and large screens.
      </span>
    </span>

    <span class="dib relative ph1 mh1 pv2">
      <span class="gt-label">
        <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20 white br2" mv-action="set(title_font_weight, if(title_font_weight < 9, title_font_weight + 1, title_font_weight)), invoke('changeFadeIn', title_font_weight, 'root.children.title.element.parentElement')">
          <i class="fw9-ns fas fa-fw fa-chevron-up" ></i>
        </button>
      </span>
      <span class="fw9-ns dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
          Increase font weight for medium and large screens.
      </span>
    </span>

    <span class="dib relative ph1 mh1 pv2">
      <span class="gt-label">
        <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20 white br2 [if(title_letter_spacing, 'outline')]" mv-action="set(title_letter_spacing, if(title_letter_spacing = 'tracked', 'tracked-mega',if(title_letter_spacing = 'tracked-mega','','tracked')) ), invoke('changeFadeIn', title_letter_spacing, 'root.children.title.element.parentElement')">
          <i class="fas fa-fw fa-text-width" ></i>
        </button>
      </span>
      <span class="tracked-mega dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
          Increase letter spacing
      </span>
    </span>

  <span class="flex-auto dib relative ph1 mh1 pv2"
      mv-action="invoke('toggleClass', section_background, '.title-options', 'dn')"
    >
    <span class="gt-label">
      <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20 white br2" >
        <i class="fas fa-cog"></i>
      </button>
    </span>
    <span class="dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
        Show more options of formatting title.
    </span>
  </span>

  </div>

  <div class="cf flex flex-wrap items-center">
  
    <div class="w4 flex-auto relative mh1 fl mid-gray flex flex-nowrap items-center cf mv2">
      <input placeholder="heading font" property="title_font_family" data-path="serif_font_family" data-minchars="0"
      class="white bg-transparent w-100 br0 b--white-20" />
      <span class="gt-label">
        <button type="button" mv-action="invoke('toggleDDInput',title_font_family)"
          class="dropdown-btn grow pointer pa1 f7 bg-black-20 white br0">
          <i class="fas fa-fw fa-caret-down"></i>
        </button>
      </span>
      <span class="right-0 dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
          Click the dropdown button to select font from list, or type to search.
      </span>
    </div>

    <div class="w4 flex-auto relative mh1 fl mid-gray flex flex-nowrap items-center cf mv2">
      <input placeholder="heading color" property="title_color" data-path="text_color" data-minchars="0"
      class="white bg-transparent w-100 br0 b--white-20" />
      <span class="gt-label">
        <button type="button" mv-action="invoke('toggleDDInput',title_color)"
        class="dropdown-btn grow pointer pa1 f7 bg-black-20 white br0">
          <i class="fas fa-fw fa-caret-down"></i>
        </button>
      </span>
      <span class="right-0 dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
          Click the dropdown button to select font color from list, or type to search.
      </span>

    </div>

    <div class="w4 flex-auto relative mh1 fl mid-gray flex flex-nowrap items-center cf mv2">
      <input placeholder="heading background" property="title_background" data-path="solid_background" data-minchars="0"
      class="white bg-transparent w-100 br0 b--white-20" />
      <span class="gt-label">
        <button type="button" mv-action="invoke('toggleDDInput',title_background)"
        class="dropdown-btn grow pointer pa1 f7 bg-black-20 white br0">
          <i class="fas fa-fw fa-caret-down"></i>
        </button>
      </span>
      <span class="right-0 dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
          Click the dropdown button to select background color from list, or type to search.
      </span>
    </div>
  </div>


</div> 

            
<div class="dn text-block-toolbar fadeIn">
  <div class=" ba b--white-30 w-100 bg-black-[toolbar_alpha] ">

    <div class="cf flex flex-wrap items-center">
      <span class="dib relative ph1 mh1 pv2">
        <span class="gt-label">
          <i class="fas fa-paragraph  white pa2 br0"></i>
        </span>
        <span class="dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
            These styles apply to the whole text block.
        </span>
      </span>

      <span class="dib relative ph1 mh1 pv2">
        <span class="gt-label">
          <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20 white br2 [if(card_i = 'i', 'outline','')]" mv-action="set(card_i, if(card_i, '','i')), invoke('changeFadeIn', card_i, 'root.children.content.element')">
            <i class="fas fa-fw fa-italic" ></i>
          </button>
        </span>
        <span class="i dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
            Toggle italic style
        </span>
      </span>
      <span class="dib relative ph1 mh1 pv2">
        <span class="gt-label">
          <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20 white br2 [if(card_text_align = 'tl', 'outline','')]" mv-action="set(card_text_align, 'tl'), invoke('changeFadeIn', card_text_align, 'root.children.content.element')">
            <i class="fas fa-fw fa-align-left"></i>
          </button>
        </span>
        <span class="tl dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
            Align text to left
        </span>
      </span>

      <span class="dib relative ph1 mh1 pv2">
        <span class="gt-label">
          <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20 white br2 [if(card_text_align = 'tc', 'outline','')]" mv-action="set(card_text_align, 'tc'), invoke('changeFadeIn', card_text_align, 'root.children.content.element')">
            <i class="fas fa-fw fa-align-center"></i>
          </button>
        </span>
        <span class="tc dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
            Align text to center
        </span>
      </span>

      <span class="dib relative ph1 mh1 pv2">
        <span class="gt-label">
          <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20 white br2 [if(card_text_align = 'tr', 'outline','')]" mv-action="set(card_text_align, 'tr'), invoke('changeFadeIn', card_text_align, 'root.children.content.element')">
            <i class="fas fa-fw fa-align-right"></i>
          </button>
        </span>
        <span class="tr dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
            Align text to right
        </span>
      </span>

      <span class="dib relative ph1 mh1 pv2">
        <span class="gt-label">
          <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20 white br2 [if(card_text_align = 'tj', 'outline','')]" mv-action="set(card_text_align, 'tj'), invoke('changeFadeIn', card_text_align, 'root.children.content.element')">
            <i class="fas fa-fw fa-align-justify"></i>
          </button>
        </span>
        <span class="tj dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
            Justify text both sides
        </span>
      </span>

      <span class="dib relative ph1 mh1 pv2">
        <span class="gt-label">
          <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20 white br2" mv-action="set(card_font_size, if(card_font_size < 6, card_font_size + 1, card_font_size)), invoke('changeFadeIn', card_font_size, 'root.children.content.element')">
            <i class="fas fa-fw fa-sort-alpha-down" ></i>
          </button>
        </span>
        <span class="f7 dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
            Decrease font size for medium and large screens.
        </span>
      </span>

      <span class="dib relative ph1 mh1 pv2">
        <span class="gt-label">
          <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20 white br2" mv-action="set(card_font_size, if(card_font_size > 3, card_font_size - 1, card_font_size)), invoke('changeFadeIn', card_font_size, 'root.children.content.element')">
            <i class="fas fa-fw fa-sort-alpha-up" ></i>
          </button>
        </span>
        <span class="f5 dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
            Increase font size for medium and large screens.
        </span>
      </span>

      <span class="dib relative ph1 mh1 pv2">
        <span class="gt-label">
          <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20 white br2" mv-action="set(card_font_weight, if(card_font_weight > 1, card_font_weight - 1, card_font_weight)), invoke('changeFadeIn', card_font_weight, 'root.children.content.element')">
            <i class="fw1 fas fa-fw fa-angle-down" ></i>
          </button>
        </span>
        <span class="fw1 dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
            Decrease font weight for medium and large screens.
        </span>
      </span>

      <span class="dib relative ph1 mh1 pv2">
        <span class="gt-label">
          <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20 white br2" mv-action="set(card_font_weight, if(card_font_weight < 9, card_font_weight + 1, card_font_weight)), invoke('changeFadeIn', card_font_weight, 'root.children.content.element')">
            <i class="fw9-ns fas fa-fw fa-chevron-up" ></i>
          </button>
        </span>
        <span class="fw9 dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
            Increase font weight for medium and large screens.
        </span>
      </span>

      <span class="dib relative ph1 mh1 pv2">
        <span class="gt-label">
          <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20 white br2 [if(card_letter_spacing, 'outline')]" mv-action="set(card_letter_spacing, if(card_letter_spacing = 'tracked', 'tracked-mega',if(card_letter_spacing = 'tracked-mega','','tracked')) ), invoke('changeFadeIn', card_letter_spacing, 'root.children.content.element')">
            <i class="fas fa-fw fa-text-width" ></i>
          </button>
        </span>
        <span class="tracked-mega dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
            Increase letter spacing
        </span>
      </span>

      <span class="dib relative ph1 mh1 pv2">
        <span class="gt-label">
          <button type="button" class="grow pointer mh1 pa1 f6 bg-black-20 white br2 [if(card_list_style, 'outline')]" mv-action="set(card_list_style, if(card_list_style,'','nested-list-reset') ), invoke('changeFadeIn', card_list_style, 'root.children.content.element')">
            <i class="fas fa-fw fa-list-ul" ></i>
          </button>
        </span>
        <span class="dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
          Reset list style. When enabled, it keeps the data, but does not display bullet point or number before list item.
        </span>
      </span>

    </div>

  <div class="cf flex flex-wrap items-center">

    <div class="w4 flex-auto relative mh1 fl  mid-gray flex flex-nowrap items-center cf mv2">
      <input placeholder="font" property="card_font_family" data-path="serif_font_family" data-minchars="0"
      class="white bg-transparent w-100 br0 b--white-20" />
      <span class="gt-label">
        <button type="button" mv-action="invoke('toggleDDInput',card_font_family)"
          class="dropdown-btn grow pointer pa1 f7 bg-black-20 white br0">
          <i class="fas fa-fw fa-caret-down"></i>
        </button>
      </span>
      <span class="right-0 dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
          Click the dropdown button to select font from list, or type to search. The font applies to the whole text block.
      </span>
    </div>

    <div class="w4 flex-auto relative mh1 fl  mid-gray flex flex-nowrap items-center cf mv2">
      <input placeholder="color" property="card_text_color" data-path="text_color" data-minchars="0"
      class="white bg-transparent w-100 br0 b--white-20" />
      <span class="gt-label">
        <button type="button" mv-action="invoke('toggleDDInput',card_text_color)"
        class="dropdown-btn grow pointer pa1 f7 bg-black-20 white br0">
          <i class="fas fa-fw fa-caret-down"></i>
        </button>
      </span>
      <span class="right-0 dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
          Click the dropdown button to select font color from list, or type to search.
      </span>

    </div>

    <div class="w4 flex-auto relative mh1 fl  mid-gray flex flex-nowrap items-center cf mv2">
      <input placeholder="background" property="card_background" data-path="solid_background" data-minchars="0"
      class="white bg-transparent w-100 br0 b--white-20" />
      <span class="gt-label">
        <button type="button" mv-action="invoke('toggleDDInput',card_background)"
        class="dropdown-btn grow pointer pa1 f7 bg-black-20 white br0">
          <i class="fas fa-fw fa-caret-down"></i>
        </button>
      </span>
      <span class="right-0 dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
          Click the dropdown button to select background color from list, or type to search.
      </span>
    </div>
    <div class="w4 flex-auto relative mh1 fl  mid-gray flex flex-nowrap items-center cf mv2">
      <input placeholder="body background" property="body_background" data-path="solid_background" data-minchars="0"
      class="white bg-transparent w-100 br0 b--white-20" />
      <span class="gt-label">
        <button type="button" mv-action="invoke('toggleDDInput',body_background)"
        class="dropdown-btn grow pointer pa1 f7 bg-black-20 white br0">
          <i class="fas fa-fw fa-caret-down"></i>
        </button>
      </span>
      <span class="right-0 dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
          This background applies to the textbox body only.
      </span>
    </div>
    <div class="w4 flex-auto relative mh1 fl  mid-gray flex flex-nowrap items-center cf mv2"
    mv-action="invoke(replaceNodeClass,fancy_style,'mavo.root.children.content.element','fancy-')"
    >
      <input placeholder="fancy" property="fancy_style" data-list="fancy-dropcap,fancy-dropcap-all" data-minchars="0"
      class="white bg-transparent w-100 br0 b--white-20" />
      <span class="gt-label">
        <button type="button" mv-action="invoke('toggleDDInput',fancy_style)"
        class="dropdown-btn grow pointer pa1 f7 bg-black-20 white br0">
          <i class="fas fa-fw fa-caret-down"></i>
        </button>
      </span>
      <span class="right-0 dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
        Click the dropdown button to select a style, click this cell after deleting a style.
      </span>
    </div>

  </div>

  </div> 
</div>


          </div>

          <div class="fadeIn absolute left-0 right-0 center mw7 dn title-options top-2 pa2 z-1 bg-light-gray mid-gray ba b--white-80 f7 f6-ns normal fs-normal relaxed">
            <div class="tr pointer flex justify-between"
              mv-action="invoke('toggleClass', section_background, '.title-options', 'dn')"
            >
            <span>Heading Styles</span>
            <span>Close</span>
            </div>
            
            

<div >
  <h3 class="mt2"></h3>
  <div class="cf flex flex-wrap ba b--black-05" >
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Horizontal Padding 
        
        
        </div>
        <div 
        class=" bg-white 
         flex  flex-nowrap   pt1 cf items-center ">
        
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
             property="title_ph"
            
            
            id="radio-44-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-44-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="0"   checked 
            />
            <label class="flex-auto ph2" for="radio-44-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            0 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-44-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-44-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="1"  
            />
            <label class="flex-auto ph2" for="radio-44-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            1 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-44-2-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-44-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="2"  
            />
            <label class="flex-auto ph2" for="radio-44-2-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            2 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-44-3-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-44-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="3"  
            />
            <label class="flex-auto ph2" for="radio-44-3-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            3 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-44-4-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-44-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="4"  
            />
            <label class="flex-auto ph2" for="radio-44-4-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            4 
            </label>
          </div>
          
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            Padding left and right for medium and large screen. 
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Vertical Padding 
        
        
        </div>
        <div 
        class=" bg-white 
         flex  flex-nowrap   pt1 cf items-center ">
        
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
             property="title_pv"
            
            
            id="radio-45-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-45-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="0" 
            />
            <label class="flex-auto ph2" for="radio-45-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            0 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-45-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-45-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="1" 
            />
            <label class="flex-auto ph2" for="radio-45-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            1 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-45-2-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-45-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="2" 
            />
            <label class="flex-auto ph2" for="radio-45-2-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            2 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-45-3-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-45-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="3"  checked 
            />
            <label class="flex-auto ph2" for="radio-45-3-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            3 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-45-4-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-45-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="4" 
            />
            <label class="flex-auto ph2" for="radio-45-4-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            4 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-45-5-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-45-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="5" 
            />
            <label class="flex-auto ph2" for="radio-45-5-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            5 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-45-6-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-45-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="6" 
            />
            <label class="flex-auto ph2" for="radio-45-6-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            6 
            </label>
          </div>
          
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            Padding above and below for medium and large screen. 
          </div>
        
      </div>
       
    
       
        <input class="absolute" hidden property="title_i" value="" />
       
    
       
        <input class="absolute" hidden property="title_font_size" value="2" />
       
    
       
        <input class="absolute" hidden property="title_align" value="tc" />
       
    
       
        <input class="absolute" hidden property="title_transform" value="ttc" />
       
    
       
        <input class="absolute" hidden property="title_font_weight" value="7" />
       
    
       
        <input class="absolute" hidden property="title_letter_spacing" value="" />
       
    
       
        <input class="absolute" hidden property="section_max_width" value="" />
       
    
       
        <input class="absolute" hidden property="card_i" value="" />
       
    
       
        <input class="absolute" hidden property="card_font_size" value="5" />
       
    
       
        <input class="absolute" hidden property="card_text_align" value="" />
       
    
       
        <input class="absolute" hidden property="card_font_weight" value="4" />
       
    
       
        <input class="absolute" hidden property="card_letter_spacing" value="" />
       
    
       
        <input class="absolute" hidden property="card_list_style" value="" />
       
    
       
        <input class="absolute" hidden property="big_quote" value="" />
       
    
  </div>
</div> 

          </div>
          
        </div>
      </div>

      
<div class="absolute top-2 w2">
  <div class="relative pv3 ph1">
    <span class="gt-label">
      <button type="button" class="pointer grow baskerville dn show-in-edit pv1 ph2 f4 f5-l bg-black-05 white br2 b--white-90"
      mv-action="set(toolbar_id,if(toolbar_id = 2, 0, toolbar_id + 1))
      ">T</button>
    </span>

    <span class="dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
        Toggle layout control toolbars.
    </span>
    <input type="number" hidden mv-storage="none" property="toolbar_id" value="1" />
    <input type="number" hidden mv-storage="none" property="toolbar_alpha" value="10" />
    <input type="checkbox" hidden mv-storage="none" property="is_cta_form_active" />
  </div>
  <div class="relative pv3 ph1">
    <span class="gt-label">
      <button type="button" class="pointer grow baskerville dn [if(toolbar_id,'show-in-edit','')] pv1 ph2 f4 f5-l bg-black-05 white br2 b--white-90"
      mv-action="set(toolbar_alpha,if(toolbar_alpha >= 70, 10, toolbar_alpha + 20))">O

      </button>
    </span>

    <span class="dn pa1 gt-tooltip absolute z-1 bg-black white-80 overflow-y-visible w4 top-4">
      Click to adjust toolbar opacity. Current value: [toolbar_alpha]%.
    </span>

  </div>
</div>


    35fe3a9616151be1e9a9abc33ece88d44bd47528

  </div>  {tf{? o.edit_mode }tf}


<div class="skip-zoom-clone  min-vh-100 w-100 absolute off-canvas-dashboard
">
  
  <div class="relative w-100 w-90-ns mw7 mt4 vh-100 bg-near-white overflow-y-scroll">
    <div class="bg-white-70 mb1 cf v-mid ph3">
      <span class="pv2 dib">Section Options</span>
      <span title="close" class="fr pv2 ph3 w3 tc orange hover-bg-white" mv-action="invoke('toggleClass', current_tab, '.off-canvas-dashboard', 'active')">X</span>
    </div>
    
    <div class="mb4 mh2 mh3-ns mt2 br1 shadow-4 b--white-30 ph1 ph2-ns pb4">
      

<input hidden property="current_tab" mv-storage="none" value="appearance"/>
<div class="pt1 flex flex-wrap items-stretch">

  
	<button data-toggle-tab="appearance" mv-action="set(current_tab,'appearance')" class="[if(current_tab='appearance', 'bg-white-90 bb-0')] gt-tab-button br1 active pointer ba f6 dib lh-solid ph2 pv2 mb2 ">
		
			<i class="fas fa-font"></i><span class="dn di-ns"> Appearance </span>
		
	</button>&nbsp;

  
	<button data-toggle-tab="layout_highlight_image" mv-action="set(current_tab,'layout_highlight_image')" class="[if(current_tab='layout_highlight_image', 'bg-white-90 bb-0')] gt-tab-button br1  pointer ba f6 dib lh-solid ph2 pv2 mb2 ">
		
			<i class="fas fa-file-image"></i><span class="dn di-ns"> Highlight Image </span>
		
	</button>&nbsp;

  
	<button data-toggle-tab="layout_image_container" mv-action="set(current_tab,'layout_image_container')" class="[if(current_tab='layout_image_container', 'bg-white-90 bb-0')] gt-tab-button br1  pointer ba f6 dib lh-solid ph2 pv2 mb2 ">
		
			<i class="fas fa-square"></i><span class="dn di-ns"> Image Container </span>
		
	</button>&nbsp;

  
	<button data-toggle-tab="image" mv-action="set(current_tab,'image')" class="[if(current_tab='image', 'bg-white-90 bb-0')] gt-tab-button br1  pointer ba f6 dib lh-solid ph2 pv2 mb2 ">
		
			<i class="fas fa-image"></i><span class="dn di-ns"> Background Image </span>
		
	</button>&nbsp;

  
	<button data-toggle-tab="global_section" mv-action="set(current_tab,'global_section'),invoke(&#39;updateGlobalSectionList&#39;, data_key)" class="[if(current_tab='global_section', 'bg-white-90 bb-0')] gt-tab-button br1  pointer ba f6 dib lh-solid ph2 pv2 mb2 ">
		
			<i class="fas fa-globe"></i><span class="dn di-ns"> Global Section </span>
		
	</button>&nbsp;

</div>

<div class="tab-content pt3 ">

	
	<div data-pane="appearance" class="gt-tab-pane [if(current_tab='appearance', '', 'dn')] active">
	 
		
		

<div  property="appearance" >
  <h3 class="mt2">Appearance</h3>
  <div class="cf flex flex-wrap ba b--black-05" >
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Section Background 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(section_background, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="section_background" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="solid_background"
          
           value="bg-primary-color-dark"
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',section_background)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            This is the fallback background color when image is not available or disabled.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Card Background 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(card_background, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="card_background" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="solid_background"
          
           value=""
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',card_background)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            this is the background of grid cards.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        

        <div>Text Color 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(text_color, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="text_color" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="text_color"
          
           value=""
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',text_color)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        

        <div>Icon Color 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(icon_color, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="icon_color" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="text_color"
          
           value="gold"
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',icon_color)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Slide Animation 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(slide_animation, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="slide_animation" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="slide_animation"
          
           value="fadeIn" 
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',slide_animation)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            The slide animation during presentation, default to fadeIn if not set. 
          </div>
        
      </div>
       
    
  </div>
</div> 

	
	</div>

	
	<div data-pane="layout_highlight_image" class="gt-tab-pane [if(current_tab='layout_highlight_image', '', 'dn')] ">
	 
		
		

<div >
  <h3 class="mt2">Highlight Image</h3>
  <div class="cf flex flex-wrap ba b--black-05" >
    
      
      <div class="relative 
w-100  ph1 fl pt2 pb3
 ">
        

        <div>Image Border Radius 
        
        
        </div>
        <div  mv-action="invoke(&#39;replaceItemsClass&#39;, image_br,&#39;root.children.image_source&#39;)" 
        class=" bg-white 
         flex  flex-nowrap   pt1 cf items-center ">
        
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
             property="image_br"
            
            
            id="radio-46-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-46-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="br0"   checked 
            />
            <label class="flex-auto ph2" for="radio-46-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            disable 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-46-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-46-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="br2"  
            />
            <label class="flex-auto ph2" for="radio-46-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            br2 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-46-2-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-46-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="br3"  
            />
            <label class="flex-auto ph2" for="radio-46-2-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            br3 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-46-3-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-46-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="br4"  
            />
            <label class="flex-auto ph2" for="radio-46-3-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            br4 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-46-4-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-46-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="br-100"  
            />
            <label class="flex-auto ph2" for="radio-46-4-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            circle or oval 
            </label>
          </div>
          
        
        </div> 
        
        
      </div>
       
    
      
      <div class="relative 
w-100  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Image Fit 
        
        
        </div>
        <div  mv-action="invoke(&#39;replaceItemsClass&#39;, object_fit_class,&#39;root.children.image_source&#39;)" 
        class=" bg-white 
         flex  flex-nowrap   pt1 cf items-center ">
        
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
             property="object_fit_class"
            
            
            id="radio-47-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-47-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="of-scale-down"   checked 
            />
            <label class="flex-auto ph2" for="radio-47-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            Scale Down 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-47-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-47-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="of-contain"  
            />
            <label class="flex-auto ph2" for="radio-47-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            Contain 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-47-2-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-47-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="of-cover"  
            />
            <label class="flex-auto ph2" for="radio-47-2-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            Cover 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-47-3-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-47-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="of-fill"  
            />
            <label class="flex-auto ph2" for="radio-47-3-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            Fill 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-47-4-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-47-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="of-none"  
            />
            <label class="flex-auto ph2" for="radio-47-4-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            None 
            </label>
          </div>
          
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            Whether to keep aspect ratio when stretching or cropping image.
          </div>
        
      </div>
       
    
  </div>
</div> 

	
	</div>

	
	<div data-pane="layout_image_container" class="gt-tab-pane [if(current_tab='layout_image_container', '', 'dn')] ">
	 
		
		

<div >
  <h3 class="mt2">Image Container</h3>
  <div class="cf flex flex-wrap ba b--black-05" >
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Image Vertical Position 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(image_vertical_position, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="image_vertical_position" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
           data-list="items-center, items-start, items-end, items-stretch" 
           value=""
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',image_vertical_position)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            This decides how to position the image container vertically. By default the container is centered vertically. 
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Height Reference 
        
        
        </div>
        <div 
        class=" bg-white 
         flex  flex-nowrap   pt1 cf items-center ">
        
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
             property="height_reference"
            
            
            id="radio-48-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-48-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="h"   checked 
            />
            <label class="flex-auto ph2" for="radio-48-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            Container 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-48-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-48-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="vh"  
            />
            <label class="flex-auto ph2" for="radio-48-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            Viewport 
            </label>
          </div>
          
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            This is the reference to calculate image height. If set to parent container, the text column will decide the height of the section. If set to viewport, the section has this height at a minimum. 
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Image Order 
        
        
        </div>
        <div 
        class=" bg-white 
         flex  flex-nowrap   pt1 cf items-center ">
        
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
             property="image_order"
            
            
            id="radio-49-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-49-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="even-order-1-ns"   checked 
            />
            <label class="flex-auto ph2" for="radio-49-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            line end in even sections 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-49-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-49-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="odd-order-1-ns"  
            />
            <label class="flex-auto ph2" for="radio-49-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            line end in odd sections 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-49-2-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-49-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="line-start"  
            />
            <label class="flex-auto ph2" for="radio-49-2-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            line start 
            </label>
          </div>
          
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            Change the order of the image to create alternate section effect on large screens.
          </div>
        
      </div>
       
    
  </div>
</div> 

	
	</div>

	
	<div data-pane="image" class="gt-tab-pane [if(current_tab='image', '', 'dn')] ">
	 
		
		

<div  property="image" >
  <h3 class="mt2">Background Image</h3>
  <div class="cf flex flex-wrap ba b--black-05" >
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Source URL 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(src, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="src" 
          type="text" 
          class="flex-auto  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
          
           value=""
          data-minchars="0" 
          />
          
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            This is the full URL of the background image.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Overlay Background 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(overlay_background, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="overlay_background" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="overlay_background"
          
           value=""
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',overlay_background)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            This is the overlay over background image to make text readable.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Image Animation 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(animation, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="animation" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="slow_motion"
          
           value=""
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',animation)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            This is the slow motion animation of the image.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Auto Responsive 
        
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input property="responsive" type="checkbox" 
          class=""
          
          id="chk-image-responsive-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
          />
          <label class="flex-auto ph2" for="chk-image-responsive-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            Enable
          </label>
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            If enabled, dynamic images will be requested from Unsplash using the image id provided.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 [if(!responsive,&#39;dn&#39;)]">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Unsplash Image ID  <i class="pointer ph2 fas fa-link" mv-action="set(src,'https://source.unsplash.com/' & unsplash_image_id & '/' & if(size, size, '1366x768'))"> </i>

        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(unsplash_image_id, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="unsplash_image_id" 
          type="text" 
          class="flex-auto  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
          
           value=""
          data-minchars="0" 
          />
          
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            This is the image id from Unsplash. Click on the link icon to generate the image link. 
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 [if(!responsive,&#39;dn&#39;)]">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Size in Pixels 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(size, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input  mv-storage="none" 
           property="size" 
          type="text" 
          class="flex-auto  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
          
           value=""
          data-minchars="0" 
          />
          
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            The size of image width and height in pixels, default to 1366x768.
          </div>
        
      </div>
       
    
  </div>
</div> 

	
	</div>

	
	<div data-pane="global_section" class="gt-tab-pane [if(current_tab='global_section', '', 'dn')] ">
	 
		
		

<div >
  <h3 class="mt2">Global Section</h3>
  <div class="cf flex flex-wrap ba b--black-05" >
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Global Section 
        
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input property="is_global" type="checkbox" 
          class=""
          
          id="chk--is_global-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
          />
          <label class="flex-auto ph2" for="chk--is_global-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            Enable
          </label>
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            When checked, the section will be available in other pages. 
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 [if(!is_global,&#39;dn&#39;,&#39;&#39;)]">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Data Storage Key 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(data_key, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="data_key" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
           data-list="," 
           value=""
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',data_key)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            This is the key to store the global section. Alphanumeric and underscore only. Choose an existing key will replace previous data.
          </div>
        
      </div>
       
    
  </div>
</div> 

	
	</div>


</div>

    </div>

  </div>
</div>

<div onclick="" class="skip-zoom-clone dn mv-bar f7 tc w-100 absolute top-0 pv1 ph2 bg-white o-10 hover-o-90 ">

  <button type="button" data-action="toggle-base-toolbar" class="manage-section pointer dim br2 pv1 ph2 mh1" title="toggle global setting toolbar ">
    <i class="fas fa-ellipsis-v" data-fa-mask="fas fa-square" data-fa-transform="shrink-2 left-4"></i>
  </button>

  <span class="dn di-ns gt-pos-btns"> 
    <button type="button" data-action="move-up" class="gt-move-up manage-section pointer dim br2 pv1 ph2 mh1" title="move section up"><i class="fas fa-angle-up"></i></button>
    <button type="button" data-action="move-down" class="gt-move-down manage-section pointer dim br2 pv1 ph2 mh1" title="move section down"><i class="fas fa-angle-down"></i></button>
    <button type="button" data-action="insert-section" class="gt-insert-section manage-section pointer dim br2 pv1 ph2 mh1" title="insert section "><i class="fas fa-plus"></i></button>
    <button type="button" data-action="clone-section" class="gt-clone-section manage-section pointer dim br2 pv1 ph2 mh1" title="clone section"><i class="fas fa-clone"></i></button>
    <button type="button" data-action="delete-section" class="gt-delete-section manage-section pointer dim br2 pv1 ph2 mh2 white bg-orange" title="delete section"><i class="fas fa-trash"></i></button> 
  </span>

  
  <button title="turn editor on" type="button" data-action="toggle-mv-on" class="toggle-mv-on bg-light-green manage-section pointer dim br2 pv1 ph2 mh3" ><i class="fas fa-toggle-off"></i></button>
  <button title="turn editor off" type="button" data-action="toggle-mv-off" class="toggle-mv-off dn manage-section orange pointer dim br2 pv1 ph2 mh3" ><i class="fas fa-power-off"></i></button>
  
  <button type="button" class="gt-setting-toggle dn pointer dim br2 pv1 ph2 mh1" mv-action="invoke('toggleClass', current_tab, '.off-canvas-dashboard', 'active')"><i class="fas fa-cog"></i></button>
  <button title="edit section" type="button" class="mv-edit pointer dn dim br2 pv1 ph2 mh1">Edit</button>
  <button title="save section" type="button" class="mv-save pointer dn dim br2 pv1 ph2 mh1">Save</button>
</div>

{tf{?}tf}

 

</section>

`;
  
    gtpb.partials['goandtalk/slides/big-bold-quote'] = `<section 675275c791df5c494218febd9c0cde06eea2ae6b mv-storage="idb_array" gt-app="{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}" mv-bar="edit save" 35fe3a9616151be1e9a9abc33ece88d44bd47528
  class="alternate gt-mv-off relative flex flex-column mid-gray" ><div class="flex-auto flex flex-column justify-center {enc{! o.__get(it, \u0027appearance.section_background\u0027) || \u0027\u0027 }enc}
  {enc{! o.__get(it, \u0027appearance.slide_animation\u0027) || \u0027fadeIn\u0027 }enc}
  {enc{! o.__get(it, \u0027appearance.text_color\u0027) || \u0027dark-gray\u0027 }enc}
  "
  675275c791df5c494218febd9c0cde06eea2ae6b  mv-attribute="class" mv-value="section_background & ' ' & text_color & ' flex-auto flex flex-column justify-center ' & slide_animation" 35fe3a9616151be1e9a9abc33ece88d44bd47528><div class="cf w-100 relative pa2 pa3-m pa4-l center mw8 flex flex-wrap" >

      <div class="w-100 flex-auto pa2 fl">
        
        <div 675275c791df5c494218febd9c0cde06eea2ae6b mv-attribute="class" mv-value="'w-100 pa3 ' & card_background" 35fe3a9616151be1e9a9abc33ece88d44bd47528
        class="w-100 pa3 {enc{! o.__get(it, \u0027appearance.card_background\u0027) || \u0027\u0027 }enc}">
          <p  675275c791df5c494218febd9c0cde06eea2ae6b property="intro" 35fe3a9616151be1e9a9abc33ece88d44bd47528  class="f4 pa2">{enc{! o.__get(it, \u0027intro\u0027) || \u0027\u0027 }enc} </p>
          <h2  675275c791df5c494218febd9c0cde06eea2ae6b property="title" 35fe3a9616151be1e9a9abc33ece88d44bd47528  class="tc pa2 pa3-m pa4-l ma0 f2">{enc{! o.__get(it, \u0027title\u0027) || \u0027\u0027 }enc} </h2>
          <i class="fas fa-quote-left fa-pull-left fa-3x"></i>
          <div class="pt3 f3 markdown lh-copy nested-links"  675275c791df5c494218febd9c0cde06eea2ae6b property="content" 35fe3a9616151be1e9a9abc33ece88d44bd47528  >
             {v{= o.sanitizer.sanitize(o.md.render(o.__get(it, \u0027content\u0027) || \u0027* It just works\u0027 || \u0027\u0027 )) }v}

            
          </div>
          <i class="fas fa-quote-right fa-pull-right fa-3x"></i>

          <div class="pv2"  675275c791df5c494218febd9c0cde06eea2ae6b property="reviewer" 35fe3a9616151be1e9a9abc33ece88d44bd47528 >
            {enc{! o.__get(it, \u0027reviewer\u0027) || \u0027\u0027 }enc}
          </div>
          <div  675275c791df5c494218febd9c0cde06eea2ae6b property="role" 35fe3a9616151be1e9a9abc33ece88d44bd47528 >
            {enc{! o.__get(it, \u0027role\u0027) || \u0027\u0027 }enc}
          </div>

        </div>
      </div>
    </div>

  </div>  {tf{? o.edit_mode }tf}


<div class="skip-zoom-clone  min-vh-100 w-100 absolute off-canvas-dashboard
">
  
  <div class="relative w-100 w-90-ns mw7 mt4 vh-100 bg-near-white overflow-y-scroll">
    <div class="bg-white-70 mb1 cf v-mid ph3">
      <span class="pv2 dib">Section Options</span>
      <span title="close" class="fr pv2 ph3 w3 tc orange hover-bg-white" mv-action="invoke('toggleClass', current_tab, '.off-canvas-dashboard', 'active')">X</span>
    </div>
    
    <div class="mb4 mh2 mh3-ns mt2 br1 shadow-4 b--white-30 ph1 ph2-ns pb4">
      

<input hidden property="current_tab" mv-storage="none" value="appearance"/>
<div class="pt1 flex flex-wrap items-stretch">

  
	<button data-toggle-tab="appearance" mv-action="set(current_tab,'appearance')" class="[if(current_tab='appearance', 'bg-white-90 bb-0')] gt-tab-button br1 active pointer ba f6 dib lh-solid ph2 pv2 mb2 ">
		
			<i class="fas fa-font"></i><span class="dn di-ns"> Appearance </span>
		
	</button>&nbsp;

  
	<button data-toggle-tab="global_section" mv-action="set(current_tab,'global_section'),invoke(&#39;updateGlobalSectionList&#39;, data_key)" class="[if(current_tab='global_section', 'bg-white-90 bb-0')] gt-tab-button br1  pointer ba f6 dib lh-solid ph2 pv2 mb2 ">
		
			<i class="fas fa-globe"></i><span class="dn di-ns"> Global Section </span>
		
	</button>&nbsp;

</div>

<div class="tab-content pt3 ">

	
	<div data-pane="appearance" class="gt-tab-pane [if(current_tab='appearance', '', 'dn')] active">
	 
		
		

<div  property="appearance" >
  <h3 class="mt2">Appearance</h3>
  <div class="cf flex flex-wrap ba b--black-05" >
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Section Background 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(section_background, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="section_background" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="solid_background"
          
           value="bg-accent-color-light"
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',section_background)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            This is the fallback background color when image is not available or disabled.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Card Background 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(card_background, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="card_background" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="solid_background"
          
           value=""
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',card_background)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            this is the background of grid cards.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        

        <div>Text Color 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(text_color, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="text_color" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="text_color"
          
           value=""
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',text_color)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        

        <div>Icon Color 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(icon_color, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="icon_color" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="text_color"
          
           value="gold"
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',icon_color)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Slide Animation 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(slide_animation, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="slide_animation" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="slide_animation"
          
           value="fadeIn" 
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',slide_animation)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            The slide animation during presentation, default to fadeIn if not set. 
          </div>
        
      </div>
       
    
  </div>
</div> 

	
	</div>

	
	<div data-pane="global_section" class="gt-tab-pane [if(current_tab='global_section', '', 'dn')] ">
	 
		
		

<div >
  <h3 class="mt2">Global Section</h3>
  <div class="cf flex flex-wrap ba b--black-05" >
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Global Section 
        
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input property="is_global" type="checkbox" 
          class=""
          
          id="chk--is_global-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
          />
          <label class="flex-auto ph2" for="chk--is_global-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            Enable
          </label>
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            When checked, the section will be available in other pages. 
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 [if(!is_global,&#39;dn&#39;,&#39;&#39;)]">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Data Storage Key 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(data_key, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="data_key" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
           data-list="," 
           value=""
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',data_key)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            This is the key to store the global section. Alphanumeric and underscore only. Choose an existing key will replace previous data.
          </div>
        
      </div>
       
    
  </div>
</div> 

	
	</div>


</div>

    </div>

  </div>
</div>

<div onclick="" class="skip-zoom-clone dn mv-bar f7 tc w-100 absolute top-0 pv1 ph2 bg-white o-10 hover-o-90 ">

  <button type="button" data-action="toggle-base-toolbar" class="manage-section pointer dim br2 pv1 ph2 mh1" title="toggle global setting toolbar ">
    <i class="fas fa-ellipsis-v" data-fa-mask="fas fa-square" data-fa-transform="shrink-2 left-4"></i>
  </button>

  <span class="dn di-ns gt-pos-btns"> 
    <button type="button" data-action="move-up" class="gt-move-up manage-section pointer dim br2 pv1 ph2 mh1" title="move section up"><i class="fas fa-angle-up"></i></button>
    <button type="button" data-action="move-down" class="gt-move-down manage-section pointer dim br2 pv1 ph2 mh1" title="move section down"><i class="fas fa-angle-down"></i></button>
    <button type="button" data-action="insert-section" class="gt-insert-section manage-section pointer dim br2 pv1 ph2 mh1" title="insert section "><i class="fas fa-plus"></i></button>
    <button type="button" data-action="clone-section" class="gt-clone-section manage-section pointer dim br2 pv1 ph2 mh1" title="clone section"><i class="fas fa-clone"></i></button>
    <button type="button" data-action="delete-section" class="gt-delete-section manage-section pointer dim br2 pv1 ph2 mh2 white bg-orange" title="delete section"><i class="fas fa-trash"></i></button> 
  </span>

  
  <button title="turn editor on" type="button" data-action="toggle-mv-on" class="toggle-mv-on bg-light-green manage-section pointer dim br2 pv1 ph2 mh3" ><i class="fas fa-toggle-off"></i></button>
  <button title="turn editor off" type="button" data-action="toggle-mv-off" class="toggle-mv-off dn manage-section orange pointer dim br2 pv1 ph2 mh3" ><i class="fas fa-power-off"></i></button>
  
  <button type="button" class="gt-setting-toggle dn pointer dim br2 pv1 ph2 mh1" mv-action="invoke('toggleClass', current_tab, '.off-canvas-dashboard', 'active')"><i class="fas fa-cog"></i></button>
  <button title="edit section" type="button" class="mv-edit pointer dn dim br2 pv1 ph2 mh1">Edit</button>
  <button title="save section" type="button" class="mv-save pointer dn dim br2 pv1 ph2 mh1">Save</button>
</div>

{tf{?}tf}

 

</section>

`;
  
    gtpb.partials['goandtalk/slides/collection-big-icon-circle-mask'] = `

<section 675275c791df5c494218febd9c0cde06eea2ae6b mv-storage="idb_array" gt-app="{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}" mv-bar="edit save" 35fe3a9616151be1e9a9abc33ece88d44bd47528
  class="gt-mv-off relative flex flex-column mid-gray" ><div class="pv3 flex-auto flex flex-column justify-center {enc{! o.__get(it, \u0027appearance.section_background\u0027) || \u0027bg-white-70\u0027 }enc}
  {enc{! o.__get(it, \u0027appearance.slide_animation\u0027) || \u0027fadeIn\u0027 }enc}
  {enc{! o.__get(it, \u0027appearance.text_color\u0027) || \u0027dark-gray\u0027 }enc}
  "
  675275c791df5c494218febd9c0cde06eea2ae6b  mv-attribute="class" mv-value="section_background & ' ' & text_color & ' pv3 flex-auto flex flex-column justify-center ' & slide_animation" 35fe3a9616151be1e9a9abc33ece88d44bd47528>
    <p  675275c791df5c494218febd9c0cde06eea2ae6b property="intro" 35fe3a9616151be1e9a9abc33ece88d44bd47528  class="tc pa2">{enc{! o.__get(it, \u0027intro\u0027) || \u0027\u0027 }enc} </p>
    <h2  675275c791df5c494218febd9c0cde06eea2ae6b property="title" 35fe3a9616151be1e9a9abc33ece88d44bd47528  class="tc pa2 pa3-m pa4-l ma0 f3">{enc{! o.__get(it, \u0027title\u0027) || \u0027\u0027 }enc} </h2><div class="cf w-100 relative pa2 pa3-m pa4-l center mw8 flex flex-wrap
      {enc{! o.__get(it, \u0027horizontal_position\u0027) || \u0027justify-center\u0027 }enc}
      {enc{! o.__get(it, \u0027vertical_position\u0027) || \u0027\u0027 }enc}"
       675275c791df5c494218febd9c0cde06eea2ae6b mv-attribute="class" mv-value="'cf w-100 relative pa2 pa3-m pa4-l center mw8 flex flex-wrap ' & horizontal_position & ' ' & vertical_position" 35fe3a9616151be1e9a9abc33ece88d44bd47528 >
    
      {tf{? o.__get(it,\u0027column.0\u0027) }tf}

      {loop{~ it.column :item:idx }loop}

      <div 675275c791df5c494218febd9c0cde06eea2ae6b property="column" mv-multiple 35fe3a9616151be1e9a9abc33ece88d44bd47528
      class="{enc{! o.__get(it, \u0027column_class\u0027) || \u0027w-25-l\u0027 }enc} fl w-100 w-50-m pa3 flex grow
      {enc{! o.__get(it, \u0027resize_column\u0027) || \u0027flex-auto\u0027 }enc}">
        <div 675275c791df5c494218febd9c0cde06eea2ae6b mv-attribute="class" mv-value="'w-100 pa2 ' & card_background" 35fe3a9616151be1e9a9abc33ece88d44bd47528 class="w-100 pa2 {enc{! o.__get(it, \u0027appearance.card_background\u0027) || \u0027bg-light-gray\u0027 }enc}">
          
          <div 675275c791df5c494218febd9c0cde06eea2ae6b mv-attribute="class" mv-value="'tc fa-6x ' & if(icon_color,icon_color,'primary-color-light') " 35fe3a9616151be1e9a9abc33ece88d44bd47528 class="tc fa-6x {enc{! o.__get(it, \u0027appearance.icon_color\u0027) || \u0027primary-color-light\u0027 }enc}">
            <i data-fa-transform="{enc{! o.__get(it, \u0027data_fa_transform\u0027) || \u0027shrink-8\u0027 }enc}" data-fa-mask="fas fa-{enc{! o.__get(it, \u0027data_fa_mask\u0027) || \u0027circle\u0027 }enc}" 675275c791df5c494218febd9c0cde06eea2ae6b mv-attribute="class" mv-value="'fas fa-' & icon "  35fe3a9616151be1e9a9abc33ece88d44bd47528 class="fas fa-{enc{! o.__get(item, \u0027icon\u0027) || \u0027\u0027 }enc}"></i>
          </div>

          675275c791df5c494218febd9c0cde06eea2ae6b
          <div class="dn show-in-edit w-100">
            <div>Select Icon <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(icon, '')">x</span></div>
            <div class="mid-gray flex flex-nowrap pt1 items-center">
              <input property="icon" type="text" class="flex-auto dropdown-input  h2 w-100  bg-white  br0 b--black-10 " data-path="fas_list" value="" data-minchars="0" >
              <button type="button" mv-action="invoke('toggleDDInput',icon)" class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 " title="click to open dropdown list"> <i class="f6 fas fa-arrow-down"></i></button>
            </div>
          </div>
          35fe3a9616151be1e9a9abc33ece88d44bd47528

          <h3 675275c791df5c494218febd9c0cde06eea2ae6b property="title" 35fe3a9616151be1e9a9abc33ece88d44bd47528 class="tc f3"> {enc{! o.__get(item, \u0027title\u0027) || \u0027\u0027 }enc} </h3>
          <div class="pt3 lh-copy markdown" 675275c791df5c494218febd9c0cde06eea2ae6b property="description" 35fe3a9616151be1e9a9abc33ece88d44bd47528> {v{= o.sanitizer.sanitize(o.md.render(o.__get(item, \u0027description\u0027) || \u0027\u0027 || \u0027\u0027 )) }v}
 </div>
        </div>
      </div>
      {loop{~}loop}

      {tf{??}tf}

        675275c791df5c494218febd9c0cde06eea2ae6b
        <div property="column" mv-multiple
        class="{enc{! o.__get(it, \u0027column_class\u0027) || \u0027w-25-l\u0027 }enc} fl w-100 w-50-m pa3 flex grow
        {enc{! o.__get(it, \u0027resize_column\u0027) || \u0027flex-auto\u0027 }enc}">
          <div 675275c791df5c494218febd9c0cde06eea2ae6b mv-attribute="class" mv-value="'w-100 pa2 ' & card_background" 35fe3a9616151be1e9a9abc33ece88d44bd47528 class="w-100 pa2 {enc{! o.__get(it, \u0027appearance.card_background\u0027) || \u0027bg-light-gray\u0027 }enc}">
            <div 675275c791df5c494218febd9c0cde06eea2ae6b mv-attribute="class" mv-value="'tc fa-6x ' & if(icon_color,icon_color,'primary-color-light') " 35fe3a9616151be1e9a9abc33ece88d44bd47528 class="tc fa-6x {enc{! o.__get(it, \u0027appearance.icon_color\u0027) || \u0027primary-color-light\u0027 }enc}">
              <i data-fa-transform="shrink-8" data-fa-mask="fas fa-circle" mv-attribute="class" mv-value="'fas fa-' & icon "  class="fas fa-th-large"></i>
            </div>
            <div class="dn show-in-edit w-100">
              <div>Select Icon <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(icon, '')">x</span></div>
              <div class="mid-gray flex flex-nowrap pt1 items-center">
                <input property="icon" type="text" class="flex-auto dropdown-input  h2 w-100  bg-white  br0 b--black-10 " data-path="fas_list" value="th-large" data-minchars="0" >
                <button type="button" mv-action="invoke('toggleDDInput',icon)" class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 " title="click to open dropdown list"> <i class="f6 fas fa-arrow-down"></i></button>
              </div>
            </div>
            <h3 property="title" class="tc f3"> Easy </h3>
            <div class="pt4 lh-copy markdown" property="description">It just works.</div>
          </div>
        </div>
        35fe3a9616151be1e9a9abc33ece88d44bd47528
      35fe3a9616151be1e9a9abc33ece88d44bd47528
      675275c791df5c494218febd9c0cde06eea2ae6b <button type="button" title="add column" class="bg-green self-center v-mid dn br1 mv-add mv-ui mv-add-column">+</button> 35fe3a9616151be1e9a9abc33ece88d44bd47528
    

    </div>
    <div class="tc pa2 pa3-ns mb4 f3" 675275c791df5c494218febd9c0cde06eea2ae6b property="description"  35fe3a9616151be1e9a9abc33ece88d44bd47528> {enc{! o.__get(it, \u0027description\u0027) || \u0027\u0027 }enc} </div>
  </div>  {tf{? o.edit_mode }tf}


<div class="skip-zoom-clone  min-vh-100 w-100 absolute off-canvas-dashboard
">
  
  <div class="relative w-100 w-90-ns mw7 mt4 vh-100 bg-near-white overflow-y-scroll">
    <div class="bg-white-70 mb1 cf v-mid ph3">
      <span class="pv2 dib">Section Options</span>
      <span title="close" class="fr pv2 ph3 w3 tc orange hover-bg-white" mv-action="invoke('toggleClass', current_tab, '.off-canvas-dashboard', 'active')">X</span>
    </div>
    
    <div class="mb4 mh2 mh3-ns mt2 br1 shadow-4 b--white-30 ph1 ph2-ns pb4">
      

<input hidden property="current_tab" mv-storage="none" value="appearance"/>
<div class="pt1 flex flex-wrap items-stretch">

  
	<button data-toggle-tab="appearance" mv-action="set(current_tab,'appearance')" class="[if(current_tab='appearance', 'bg-white-90 bb-0')] gt-tab-button br1 active pointer ba f6 dib lh-solid ph2 pv2 mb2 ">
		
			<i class="fas fa-font"></i><span class="dn di-ns"> Appearance </span>
		
	</button>&nbsp;

  
	<button data-toggle-tab="layout_column" mv-action="set(current_tab,'layout_column')" class="[if(current_tab='layout_column', 'bg-white-90 bb-0')] gt-tab-button br1  pointer ba f6 dib lh-solid ph2 pv2 mb2 ">
		
			<i class="fas fa-th"></i><span class="dn di-ns"> Layout </span>
		
	</button>&nbsp;

  
	<button data-toggle-tab="layout_fa_mask" mv-action="set(current_tab,'layout_fa_mask')" class="[if(current_tab='layout_fa_mask', 'bg-white-90 bb-0')] gt-tab-button br1  pointer ba f6 dib lh-solid ph2 pv2 mb2 ">
		
			<i class="fas fa-mask"></i><span class="dn di-ns"> Mask </span>
		
	</button>&nbsp;

  
	<button data-toggle-tab="global_section" mv-action="set(current_tab,'global_section'),invoke(&#39;updateGlobalSectionList&#39;, data_key)" class="[if(current_tab='global_section', 'bg-white-90 bb-0')] gt-tab-button br1  pointer ba f6 dib lh-solid ph2 pv2 mb2 ">
		
			<i class="fas fa-globe"></i><span class="dn di-ns"> Global Section </span>
		
	</button>&nbsp;

</div>

<div class="tab-content pt3 ">

	
	<div data-pane="appearance" class="gt-tab-pane [if(current_tab='appearance', '', 'dn')] active">
	 
		
		

<div  property="appearance" >
  <h3 class="mt2">Appearance</h3>
  <div class="cf flex flex-wrap ba b--black-05" >
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Section Background 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(section_background, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="section_background" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="solid_background"
          
           value="bg-white-70"
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',section_background)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            This is the fallback background color when image is not available or disabled.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Card Background 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(card_background, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="card_background" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="solid_background"
          
           value="bg-light-gray"
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',card_background)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            this is the background of grid cards.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        

        <div>Text Color 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(text_color, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="text_color" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="text_color"
          
           value="primary-color-first-letter-h3"
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',text_color)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        

        <div>Icon Color 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(icon_color, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="icon_color" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="text_color"
          
           value=""
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',icon_color)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Slide Animation 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(slide_animation, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="slide_animation" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="slide_animation"
          
           value="fadeIn" 
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',slide_animation)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            The slide animation during presentation, default to fadeIn if not set. 
          </div>
        
      </div>
       
    
  </div>
</div> 

	
	</div>

	
	<div data-pane="layout_column" class="gt-tab-pane [if(current_tab='layout_column', '', 'dn')] ">
	 
		
		

<div >
  <h3 class="mt2">Layout</h3>
  <div class="cf flex flex-wrap ba b--black-05" >
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Columns Per Row 
        
        
        </div>
        <div  mv-action="invoke(&#39;replaceItemsClass&#39;, column_class,&#39;root.children.column&#39;)" 
        class=" bg-white 
         flex  flex-nowrap   pt1 cf items-center ">
        
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
             property="column_class"
            
            
            id="radio-50-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-50-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="w-50-l"   checked 
            />
            <label class="flex-auto ph2" for="radio-50-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            2 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-50-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-50-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="w-33-l"  
            />
            <label class="flex-auto ph2" for="radio-50-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            3 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-50-2-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-50-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="w-25-l"   checked 
            />
            <label class="flex-auto ph2" for="radio-50-2-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            4 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-50-3-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-50-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="w-20-l"  
            />
            <label class="flex-auto ph2" for="radio-50-3-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            5 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-50-4-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-50-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="w-10-l"  
            />
            <label class="flex-auto ph2" for="radio-50-4-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            10 
            </label>
          </div>
          
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            This is the maximum number of columns in a row before wrapping to the next row.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Resize Column 
        
        
        </div>
        <div  mv-action="invoke(&#39;replaceItemsClass&#39;, resize_column,&#39;root.children.column&#39;)" 
        class=" bg-white 
         flex  flex-nowrap   pt1 cf items-center ">
        
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
             property="resize_column"
            
            
            id="radio-51-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-51-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="flex-auto"   checked 
            />
            <label class="flex-auto ph2" for="radio-51-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            auto 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-51-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-51-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="flex-none"  
            />
            <label class="flex-auto ph2" for="radio-51-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            none 
            </label>
          </div>
          
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            Whether to resize columns if there is extra space in the row. If set to auto, the extra space will be divided equally. 
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Horizontal Position 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(horizontal_position, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="horizontal_position" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
           data-list="justify-center, justify-start, justify-end, justify-between, justify-around" 
           value="justify-center" 
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',horizontal_position)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            This decides how to distribute extra space if columns are not resized. 
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Vertical Position 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(vertical_position, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="vertical_position" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
           data-list="items-center, items-start, items-end, items-stretch" 
           value=""
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',vertical_position)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            This decides how to position items vertically. By default items are stretched to fill the vertical space available. 
          </div>
        
      </div>
       
    
  </div>
</div> 

	
	</div>

	
	<div data-pane="layout_fa_mask" class="gt-tab-pane [if(current_tab='layout_fa_mask', '', 'dn')] ">
	 
		
		

<div >
  <h3 class="mt2">Mask</h3>
  <div class="cf flex flex-wrap ba b--black-05" >
    
      
      <div class="relative 
w-100  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div> 
        
        
        </div>
        <div  mv-action="invoke(&#39;setItemsAttr&#39;, data_fa_mask,&#39;root.children.column&#39;, &#39;data-fa-mask&#39;)" 
        class=" bg-white 
         flex  flex-wrap   pt1 cf items-center ">
        
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
             property="data_fa_mask"
            
            
            id="radio-52-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-52-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="circle"   checked 
            />
            <label class="flex-auto ph2" for="radio-52-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
             <i class="black-30 fas fa-fw fa-2x fa-circle"></i> 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-52-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-52-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="apple-alt"  
            />
            <label class="flex-auto ph2" for="radio-52-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
             <i class="black-30 fas fa-fw fa-2x fa-apple-alt"></i> 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-52-2-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-52-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="bookmark"  
            />
            <label class="flex-auto ph2" for="radio-52-2-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
             <i class="black-30 fas fa-fw fa-2x fa-bookmark"></i> 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-52-3-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-52-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="certificate"  
            />
            <label class="flex-auto ph2" for="radio-52-3-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
             <i class="black-30 fas fa-fw fa-2x fa-certificate"></i> 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-52-4-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-52-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="comment"  
            />
            <label class="flex-auto ph2" for="radio-52-4-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
             <i class="black-30 fas fa-fw fa-2x fa-comment"></i> 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-52-5-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-52-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="comment-alt"  
            />
            <label class="flex-auto ph2" for="radio-52-5-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
             <i class="black-30 fas fa-fw fa-2x fa-comment-alt"></i> 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-52-6-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-52-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="square"  
            />
            <label class="flex-auto ph2" for="radio-52-6-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
             <i class="black-30 fas fa-fw fa-2x fa-square"></i> 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-52-7-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-52-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="tablet"  
            />
            <label class="flex-auto ph2" for="radio-52-7-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
             <i class="black-30 fas fa-fw fa-2x fa-tablet"></i> 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-52-8-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-52-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="archive"  
            />
            <label class="flex-auto ph2" for="radio-52-8-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
             <i class="black-30 fas fa-fw fa-2x fa-archive"></i> 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-52-9-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-52-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="bell"  
            />
            <label class="flex-auto ph2" for="radio-52-9-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
             <i class="black-30 fas fa-fw fa-2x fa-bell"></i> 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-52-10-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-52-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="calendar"  
            />
            <label class="flex-auto ph2" for="radio-52-10-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
             <i class="black-30 fas fa-fw fa-2x fa-calendar"></i> 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-52-11-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-52-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="chess-king"  
            />
            <label class="flex-auto ph2" for="radio-52-11-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
             <i class="black-30 fas fa-fw fa-2x fa-chess-king"></i> 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-52-12-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-52-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="chess-queen"  
            />
            <label class="flex-auto ph2" for="radio-52-12-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
             <i class="black-30 fas fa-fw fa-2x fa-chess-queen"></i> 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-52-13-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-52-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="clipboard"  
            />
            <label class="flex-auto ph2" for="radio-52-13-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
             <i class="black-30 fas fa-fw fa-2x fa-clipboard"></i> 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-52-14-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-52-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="cloud"  
            />
            <label class="flex-auto ph2" for="radio-52-14-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
             <i class="black-30 fas fa-fw fa-2x fa-cloud"></i> 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-52-15-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-52-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="coffee"  
            />
            <label class="flex-auto ph2" for="radio-52-15-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
             <i class="black-30 fas fa-fw fa-2x fa-coffee"></i> 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-52-16-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-52-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="file"  
            />
            <label class="flex-auto ph2" for="radio-52-16-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
             <i class="black-30 fas fa-fw fa-2x fa-file"></i> 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-52-17-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-52-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="fish"  
            />
            <label class="flex-auto ph2" for="radio-52-17-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
             <i class="black-30 fas fa-fw fa-2x fa-fish"></i> 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-52-18-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-52-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="flag"  
            />
            <label class="flex-auto ph2" for="radio-52-18-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
             <i class="black-30 fas fa-fw fa-2x fa-flag"></i> 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-52-19-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-52-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="folder"  
            />
            <label class="flex-auto ph2" for="radio-52-19-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
             <i class="black-30 fas fa-fw fa-2x fa-folder"></i> 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-52-20-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-52-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="heart"  
            />
            <label class="flex-auto ph2" for="radio-52-20-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
             <i class="black-30 fas fa-fw fa-2x fa-heart"></i> 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-52-21-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-52-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="lock"  
            />
            <label class="flex-auto ph2" for="radio-52-21-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
             <i class="black-30 fas fa-fw fa-2x fa-lock"></i> 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-52-22-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-52-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="map-marker"  
            />
            <label class="flex-auto ph2" for="radio-52-22-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
             <i class="black-30 fas fa-fw fa-2x fa-map-marker"></i> 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-52-23-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-52-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="microchip"  
            />
            <label class="flex-auto ph2" for="radio-52-23-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
             <i class="black-30 fas fa-fw fa-2x fa-microchip"></i> 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-52-24-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-52-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="mobile"  
            />
            <label class="flex-auto ph2" for="radio-52-24-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
             <i class="black-30 fas fa-fw fa-2x fa-mobile"></i> 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-52-25-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-52-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="play"  
            />
            <label class="flex-auto ph2" for="radio-52-25-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
             <i class="black-30 fas fa-fw fa-2x fa-play"></i> 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-52-26-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-52-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="scroll"  
            />
            <label class="flex-auto ph2" for="radio-52-26-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
             <i class="black-30 fas fa-fw fa-2x fa-scroll"></i> 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-52-27-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-52-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="shopping-bag"  
            />
            <label class="flex-auto ph2" for="radio-52-27-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
             <i class="black-30 fas fa-fw fa-2x fa-shopping-bag"></i> 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-52-28-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-52-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="shopping-cart"  
            />
            <label class="flex-auto ph2" for="radio-52-28-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
             <i class="black-30 fas fa-fw fa-2x fa-shopping-cart"></i> 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-52-29-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-52-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="sticky-note"  
            />
            <label class="flex-auto ph2" for="radio-52-29-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
             <i class="black-30 fas fa-fw fa-2x fa-sticky-note"></i> 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-52-30-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-52-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="tag"  
            />
            <label class="flex-auto ph2" for="radio-52-30-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
             <i class="black-30 fas fa-fw fa-2x fa-tag"></i> 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-52-31-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-52-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="unlock"  
            />
            <label class="flex-auto ph2" for="radio-52-31-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
             <i class="black-30 fas fa-fw fa-2x fa-unlock"></i> 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-52-32-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-52-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="weight-hanging"  
            />
            <label class="flex-auto ph2" for="radio-52-32-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
             <i class="black-30 fas fa-fw fa-2x fa-weight-hanging"></i> 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-52-33-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-52-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="trophy"  
            />
            <label class="flex-auto ph2" for="radio-52-33-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
             <i class="black-30 fas fa-fw fa-2x fa-trophy"></i> 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-52-34-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-52-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="tshirt"  
            />
            <label class="flex-auto ph2" for="radio-52-34-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
             <i class="black-30 fas fa-fw fa-2x fa-tshirt"></i> 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-52-35-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-52-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="wine-glass"  
            />
            <label class="flex-auto ph2" for="radio-52-35-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
             <i class="black-30 fas fa-fw fa-2x fa-wine-glass"></i> 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-52-36-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-52-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="suitcase"  
            />
            <label class="flex-auto ph2" for="radio-52-36-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
             <i class="black-30 fas fa-fw fa-2x fa-suitcase"></i> 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-52-37-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-52-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="star"  
            />
            <label class="flex-auto ph2" for="radio-52-37-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
             <i class="black-30 fas fa-fw fa-2x fa-star"></i> 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-52-38-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-52-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="splotch"  
            />
            <label class="flex-auto ph2" for="radio-52-38-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
             <i class="black-30 fas fa-fw fa-2x fa-splotch"></i> 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-52-39-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-52-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="mortar-pestle"  
            />
            <label class="flex-auto ph2" for="radio-52-39-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
             <i class="black-30 fas fa-fw fa-2x fa-mortar-pestle"></i> 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-52-40-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-52-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="truck-moving"  
            />
            <label class="flex-auto ph2" for="radio-52-40-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
             <i class="black-30 fas fa-fw fa-2x fa-truck-moving"></i> 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-52-41-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-52-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="hourglass"  
            />
            <label class="flex-auto ph2" for="radio-52-41-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
             <i class="black-30 fas fa-fw fa-2x fa-hourglass"></i> 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-52-42-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-52-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="hourglass-start"  
            />
            <label class="flex-auto ph2" for="radio-52-42-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
             <i class="black-30 fas fa-fw fa-2x fa-hourglass-start"></i> 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-52-43-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-52-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="hourglass-end"  
            />
            <label class="flex-auto ph2" for="radio-52-43-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
             <i class="black-30 fas fa-fw fa-2x fa-hourglass-end"></i> 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-52-44-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-52-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="couch"  
            />
            <label class="flex-auto ph2" for="radio-52-44-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
             <i class="black-30 fas fa-fw fa-2x fa-couch"></i> 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-52-45-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-52-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="concierge-bell"  
            />
            <label class="flex-auto ph2" for="radio-52-45-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
             <i class="black-30 fas fa-fw fa-2x fa-concierge-bell"></i> 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-52-46-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-52-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="brush"  
            />
            <label class="flex-auto ph2" for="radio-52-46-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
             <i class="black-30 fas fa-fw fa-2x fa-brush"></i> 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-52-47-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-52-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="box"  
            />
            <label class="flex-auto ph2" for="radio-52-47-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
             <i class="black-30 fas fa-fw fa-2x fa-box"></i> 
            </label>
          </div>
          
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            This is the outer icon, the mask.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  ph1 fl pt2 pb3
 ">
        

        <div>Icon Transform 
        
        
        </div>
        <div  mv-action="invoke(&#39;setItemsAttr&#39;, data_fa_transform,&#39;root.children.column&#39;, &#39;data-fa-transform&#39;)" 
        class=" bg-white 
         flex  flex-wrap   pt1 cf items-center ">
        
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
             property="data_fa_transform"
            
            
            id="radio-53-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-53-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="shrink-8"   checked 
            />
            <label class="flex-auto ph2" for="radio-53-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            shrink-8 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-53-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-53-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="shrink-10"  
            />
            <label class="flex-auto ph2" for="radio-53-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            shrink-10 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-53-2-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-53-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="up-2 shrink-8"  
            />
            <label class="flex-auto ph2" for="radio-53-2-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            up-2 shrink-8 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-53-3-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-53-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="up-2 shrink-10"  
            />
            <label class="flex-auto ph2" for="radio-53-3-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            up-2 shrink-10 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-53-4-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-53-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="up-4 shrink-8"  
            />
            <label class="flex-auto ph2" for="radio-53-4-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            up-4 shrink-8 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-53-5-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-53-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="up-4 shrink-10"  
            />
            <label class="flex-auto ph2" for="radio-53-5-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            up-4 shrink-10 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-53-6-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-53-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="down-2 shrink-8"  
            />
            <label class="flex-auto ph2" for="radio-53-6-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            down-2 shrink-8 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-53-7-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-53-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="down-2 shrink-10"  
            />
            <label class="flex-auto ph2" for="radio-53-7-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            down-2 shrink-10 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-53-8-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-53-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="down-4 shrink-8"  
            />
            <label class="flex-auto ph2" for="radio-53-8-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            down-4 shrink-8 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-53-9-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-53-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="down-4 shrink-10"  
            />
            <label class="flex-auto ph2" for="radio-53-9-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            down-4 shrink-10 
            </label>
          </div>
          
        
        </div> 
        
        
      </div>
       
    
  </div>
</div> 

	
	</div>

	
	<div data-pane="global_section" class="gt-tab-pane [if(current_tab='global_section', '', 'dn')] ">
	 
		
		

<div >
  <h3 class="mt2">Global Section</h3>
  <div class="cf flex flex-wrap ba b--black-05" >
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Global Section 
        
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input property="is_global" type="checkbox" 
          class=""
          
          id="chk--is_global-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
          />
          <label class="flex-auto ph2" for="chk--is_global-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            Enable
          </label>
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            When checked, the section will be available in other pages. 
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 [if(!is_global,&#39;dn&#39;,&#39;&#39;)]">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Data Storage Key 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(data_key, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="data_key" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
           data-list="," 
           value=""
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',data_key)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            This is the key to store the global section. Alphanumeric and underscore only. Choose an existing key will replace previous data.
          </div>
        
      </div>
       
    
  </div>
</div> 

	
	</div>


</div>

    </div>

  </div>
</div>

<div onclick="" class="skip-zoom-clone dn mv-bar f7 tc w-100 absolute top-0 pv1 ph2 bg-white o-10 hover-o-90 ">

  <button type="button" data-action="toggle-base-toolbar" class="manage-section pointer dim br2 pv1 ph2 mh1" title="toggle global setting toolbar ">
    <i class="fas fa-ellipsis-v" data-fa-mask="fas fa-square" data-fa-transform="shrink-2 left-4"></i>
  </button>

  <span class="dn di-ns gt-pos-btns"> 
    <button type="button" data-action="move-up" class="gt-move-up manage-section pointer dim br2 pv1 ph2 mh1" title="move section up"><i class="fas fa-angle-up"></i></button>
    <button type="button" data-action="move-down" class="gt-move-down manage-section pointer dim br2 pv1 ph2 mh1" title="move section down"><i class="fas fa-angle-down"></i></button>
    <button type="button" data-action="insert-section" class="gt-insert-section manage-section pointer dim br2 pv1 ph2 mh1" title="insert section "><i class="fas fa-plus"></i></button>
    <button type="button" data-action="clone-section" class="gt-clone-section manage-section pointer dim br2 pv1 ph2 mh1" title="clone section"><i class="fas fa-clone"></i></button>
    <button type="button" data-action="delete-section" class="gt-delete-section manage-section pointer dim br2 pv1 ph2 mh2 white bg-orange" title="delete section"><i class="fas fa-trash"></i></button> 
  </span>

  
  <button title="turn editor on" type="button" data-action="toggle-mv-on" class="toggle-mv-on bg-light-green manage-section pointer dim br2 pv1 ph2 mh3" ><i class="fas fa-toggle-off"></i></button>
  <button title="turn editor off" type="button" data-action="toggle-mv-off" class="toggle-mv-off dn manage-section orange pointer dim br2 pv1 ph2 mh3" ><i class="fas fa-power-off"></i></button>
  
  <button type="button" class="gt-setting-toggle dn pointer dim br2 pv1 ph2 mh1" mv-action="invoke('toggleClass', current_tab, '.off-canvas-dashboard', 'active')"><i class="fas fa-cog"></i></button>
  <button title="edit section" type="button" class="mv-edit pointer dn dim br2 pv1 ph2 mh1">Edit</button>
  <button title="save section" type="button" class="mv-save pointer dn dim br2 pv1 ph2 mh1">Save</button>
</div>

{tf{?}tf}

 

</section>

`;
  
    gtpb.partials['goandtalk/slides/collection-big-icon-mono'] = `

<section 675275c791df5c494218febd9c0cde06eea2ae6b mv-storage="idb_array" gt-app="{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}" mv-bar="edit save" 35fe3a9616151be1e9a9abc33ece88d44bd47528
  class="gt-mv-off relative flex flex-column mid-gray" ><div class="pv3 flex-auto flex flex-column justify-center {enc{! o.__get(it, \u0027appearance.section_background\u0027) || \u0027\u0027 }enc}
  {enc{! o.__get(it, \u0027appearance.slide_animation\u0027) || \u0027fadeIn\u0027 }enc}
  {enc{! o.__get(it, \u0027appearance.text_color\u0027) || \u0027dark-gray\u0027 }enc}
  "
  675275c791df5c494218febd9c0cde06eea2ae6b  mv-attribute="class" mv-value="section_background & ' ' & text_color & ' pv3 flex-auto flex flex-column justify-center ' & slide_animation" 35fe3a9616151be1e9a9abc33ece88d44bd47528>
    <p  675275c791df5c494218febd9c0cde06eea2ae6b property="intro" 35fe3a9616151be1e9a9abc33ece88d44bd47528  class="tc pa2">{enc{! o.__get(it, \u0027intro\u0027) || \u0027\u0027 }enc} </p>
    <h2  675275c791df5c494218febd9c0cde06eea2ae6b property="title" 35fe3a9616151be1e9a9abc33ece88d44bd47528  class="tc pa2 pa3-ns ma0 f3">{enc{! o.__get(it, \u0027title\u0027) || \u0027\u0027 }enc} </h2><div class="cf w-100 relative pa2 pa3-m pa4-l center mw8 flex flex-wrap {enc{! o.__get(it, \u0027horizontal_position\u0027) || \u0027justify-center\u0027 }enc} {enc{! o.__get(it, \u0027vertical_position\u0027) || \u0027\u0027 }enc}"
      675275c791df5c494218febd9c0cde06eea2ae6b mv-attribute="class" mv-value="'cf w-100 relative pa2 pa3-m pa4-l center mw8 flex flex-wrap ' & horizontal_position & ' ' & vertical_position" 35fe3a9616151be1e9a9abc33ece88d44bd47528 
     >
    
      {tf{? o.__get(it,\u0027column.0\u0027) }tf}

      {loop{~ it.column :item:idx }loop}

      <div 675275c791df5c494218febd9c0cde06eea2ae6b property="column" mv-multiple 35fe3a9616151be1e9a9abc33ece88d44bd47528
      class="{enc{! o.__get(it, \u0027column_class\u0027) || \u0027w-25-l\u0027 }enc} fl w-100 w-50-m  pa3 flex grow
      {enc{! o.__get(it, \u0027resize_column\u0027) || \u0027flex-auto\u0027 }enc}">
        <div 675275c791df5c494218febd9c0cde06eea2ae6b mv-attribute="class" mv-value="'w-100 pa2 ' & card_background" 35fe3a9616151be1e9a9abc33ece88d44bd47528 class="w-100 pa2 {enc{! o.__get(it, \u0027appearance.card_background\u0027) || \u0027\u0027 }enc}">
          
          <div 675275c791df5c494218febd9c0cde06eea2ae6b mv-attribute="class" mv-value="'tc fa-5x ' & icon_color " 35fe3a9616151be1e9a9abc33ece88d44bd47528 class="tc fa-5x {enc{! o.__get(it, \u0027appearance.icon_color\u0027) || \u0027black-20\u0027 }enc}">
            <i 675275c791df5c494218febd9c0cde06eea2ae6b mv-attribute="class" mv-value="'fas fa-' & icon "  35fe3a9616151be1e9a9abc33ece88d44bd47528 class="fas fa-{enc{! o.__get(item, \u0027icon\u0027) || \u0027\u0027 }enc}"></i>
          </div>
          675275c791df5c494218febd9c0cde06eea2ae6b
          <div class="dn show-in-edit w-100">
            <div>Select Icon <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(icon, '')">x</span></div>
            <div class="mid-gray flex flex-nowrap pt1 items-center">
              <input property="icon" type="text" class="flex-auto dropdown-input  h2 w-100  bg-white  br0 b--black-10 " data-path="fas_list" value="" data-minchars="0" >
              <button type="button" mv-action="invoke('toggleDDInput',icon)" class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 " title="click to open dropdown list"> <i class="f6 fas fa-arrow-down"></i></button>
            </div>
          </div>
          35fe3a9616151be1e9a9abc33ece88d44bd47528
          <h3 675275c791df5c494218febd9c0cde06eea2ae6b property="title" 35fe3a9616151be1e9a9abc33ece88d44bd47528 class="tc"> {enc{! o.__get(item, \u0027title\u0027) || \u0027\u0027 }enc} </h3>
          <div class="pt4 lh-copy markdown" 675275c791df5c494218febd9c0cde06eea2ae6b property="description" 35fe3a9616151be1e9a9abc33ece88d44bd47528> {v{= o.sanitizer.sanitize(o.md.render(o.__get(item, \u0027description\u0027) || \u0027\u0027 || \u0027\u0027 )) }v}
 </div>
        </div>
      </div>
      {loop{~}loop}

      {tf{??}tf}

        675275c791df5c494218febd9c0cde06eea2ae6b
        <div property="column" mv-multiple
        class="{enc{! o.__get(it, \u0027column_class\u0027) || \u0027w-25-l\u0027 }enc} fl w-100 w-50-m pa3 flex grow
        {enc{! o.__get(it, \u0027resize_column\u0027) || \u0027flex-auto\u0027 }enc}">
          <div 675275c791df5c494218febd9c0cde06eea2ae6b mv-attribute="class" mv-value="'w-100 pa2 ' & card_background" 35fe3a9616151be1e9a9abc33ece88d44bd47528 class="w-100 pa2 {enc{! o.__get(it, \u0027appearance.card_background\u0027) || \u0027\u0027 }enc}">
            <div 675275c791df5c494218febd9c0cde06eea2ae6b mv-attribute="class" mv-value="'tc fa-5x ' & icon_color " 35fe3a9616151be1e9a9abc33ece88d44bd47528 class="tc fa-5x {enc{! o.__get(it, \u0027appearance.icon_color\u0027) || \u0027gray\u0027 }enc}">
              <i mv-attribute="class" mv-value="'fas fa-' & icon "  class="fas fa-th-large"></i>
            </div>
            <div class="dn show-in-edit w-100">
              <div>Select Icon <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(icon, '')">x</span></div>
              <div class="mid-gray flex flex-nowrap pt1 items-center">
                <input property="icon" type="text" class="flex-auto dropdown-input  h2 w-100  bg-white  br0 b--black-10 " data-path="fas_list" value="th-large" data-minchars="0" >
                <button type="button" mv-action="invoke('toggleDDInput',icon)" class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 " title="click to open dropdown list"> <i class="f6 fas fa-arrow-down"></i></button>
              </div>
            </div>
            <h3 property="title" class="tc"> Build </h3>
            <div class="pt4 lh-copy markdown" property="description"></div>
          </div>
        </div>
        35fe3a9616151be1e9a9abc33ece88d44bd47528
      35fe3a9616151be1e9a9abc33ece88d44bd47528
      675275c791df5c494218febd9c0cde06eea2ae6b <button type="button" title="add column" class="bg-green self-center v-mid dn br1 mv-add mv-ui mv-add-column">+</button> 35fe3a9616151be1e9a9abc33ece88d44bd47528
    

    </div>
    <div class="tc pa2 pa3-ns mb4 f3" 675275c791df5c494218febd9c0cde06eea2ae6b property="description"  35fe3a9616151be1e9a9abc33ece88d44bd47528> {enc{! o.__get(it, \u0027description\u0027) || \u0027\u0027 }enc} </div>
  </div>  {tf{? o.edit_mode }tf}


<div class="skip-zoom-clone  min-vh-100 w-100 absolute off-canvas-dashboard
">
  
  <div class="relative w-100 w-90-ns mw7 mt4 vh-100 bg-near-white overflow-y-scroll">
    <div class="bg-white-70 mb1 cf v-mid ph3">
      <span class="pv2 dib">Section Options</span>
      <span title="close" class="fr pv2 ph3 w3 tc orange hover-bg-white" mv-action="invoke('toggleClass', current_tab, '.off-canvas-dashboard', 'active')">X</span>
    </div>
    
    <div class="mb4 mh2 mh3-ns mt2 br1 shadow-4 b--white-30 ph1 ph2-ns pb4">
      

<input hidden property="current_tab" mv-storage="none" value="appearance"/>
<div class="pt1 flex flex-wrap items-stretch">

  
	<button data-toggle-tab="appearance" mv-action="set(current_tab,'appearance')" class="[if(current_tab='appearance', 'bg-white-90 bb-0')] gt-tab-button br1 active pointer ba f6 dib lh-solid ph2 pv2 mb2 ">
		
			<i class="fas fa-font"></i><span class="dn di-ns"> Appearance </span>
		
	</button>&nbsp;

  
	<button data-toggle-tab="layout_column" mv-action="set(current_tab,'layout_column')" class="[if(current_tab='layout_column', 'bg-white-90 bb-0')] gt-tab-button br1  pointer ba f6 dib lh-solid ph2 pv2 mb2 ">
		
			<i class="fas fa-th"></i><span class="dn di-ns"> Layout </span>
		
	</button>&nbsp;

  
	<button data-toggle-tab="global_section" mv-action="set(current_tab,'global_section'),invoke(&#39;updateGlobalSectionList&#39;, data_key)" class="[if(current_tab='global_section', 'bg-white-90 bb-0')] gt-tab-button br1  pointer ba f6 dib lh-solid ph2 pv2 mb2 ">
		
			<i class="fas fa-globe"></i><span class="dn di-ns"> Global Section </span>
		
	</button>&nbsp;

</div>

<div class="tab-content pt3 ">

	
	<div data-pane="appearance" class="gt-tab-pane [if(current_tab='appearance', '', 'dn')] active">
	 
		
		

<div  property="appearance" >
  <h3 class="mt2">Appearance</h3>
  <div class="cf flex flex-wrap ba b--black-05" >
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Section Background 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(section_background, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="section_background" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="solid_background"
          
           value=""
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',section_background)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            This is the fallback background color when image is not available or disabled.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Card Background 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(card_background, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="card_background" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="solid_background"
          
           value="hover-primary-color"
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',card_background)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            this is the background of grid cards.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        

        <div>Text Color 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(text_color, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="text_color" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="text_color"
          
           value="primary-color-first-letter-h3"
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',text_color)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        

        <div>Icon Color 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(icon_color, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="icon_color" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="text_color"
          
           value="black-20"
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',icon_color)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Slide Animation 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(slide_animation, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="slide_animation" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="slide_animation"
          
           value="fadeIn" 
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',slide_animation)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            The slide animation during presentation, default to fadeIn if not set. 
          </div>
        
      </div>
       
    
  </div>
</div> 

	
	</div>

	
	<div data-pane="layout_column" class="gt-tab-pane [if(current_tab='layout_column', '', 'dn')] ">
	 
		
		

<div >
  <h3 class="mt2">Layout</h3>
  <div class="cf flex flex-wrap ba b--black-05" >
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Columns Per Row 
        
        
        </div>
        <div  mv-action="invoke(&#39;replaceItemsClass&#39;, column_class,&#39;root.children.column&#39;)" 
        class=" bg-white 
         flex  flex-nowrap   pt1 cf items-center ">
        
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
             property="column_class"
            
            
            id="radio-54-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-54-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="w-50-l"   checked 
            />
            <label class="flex-auto ph2" for="radio-54-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            2 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-54-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-54-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="w-33-l"  
            />
            <label class="flex-auto ph2" for="radio-54-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            3 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-54-2-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-54-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="w-25-l"   checked 
            />
            <label class="flex-auto ph2" for="radio-54-2-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            4 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-54-3-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-54-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="w-20-l"  
            />
            <label class="flex-auto ph2" for="radio-54-3-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            5 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-54-4-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-54-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="w-10-l"  
            />
            <label class="flex-auto ph2" for="radio-54-4-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            10 
            </label>
          </div>
          
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            This is the maximum number of columns in a row before wrapping to the next row.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Resize Column 
        
        
        </div>
        <div  mv-action="invoke(&#39;replaceItemsClass&#39;, resize_column,&#39;root.children.column&#39;)" 
        class=" bg-white 
         flex  flex-nowrap   pt1 cf items-center ">
        
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
             property="resize_column"
            
            
            id="radio-55-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-55-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="flex-auto"   checked 
            />
            <label class="flex-auto ph2" for="radio-55-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            auto 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-55-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-55-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="flex-none"  
            />
            <label class="flex-auto ph2" for="radio-55-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            none 
            </label>
          </div>
          
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            Whether to resize columns if there is extra space in the row. If set to auto, the extra space will be divided equally. 
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Horizontal Position 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(horizontal_position, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="horizontal_position" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
           data-list="justify-center, justify-start, justify-end, justify-between, justify-around" 
           value="justify-center" 
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',horizontal_position)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            This decides how to distribute extra space if columns are not resized. 
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Vertical Position 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(vertical_position, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="vertical_position" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
           data-list="items-center, items-start, items-end, items-stretch" 
           value=""
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',vertical_position)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            This decides how to position items vertically. By default items are stretched to fill the vertical space available. 
          </div>
        
      </div>
       
    
  </div>
</div> 

	
	</div>

	
	<div data-pane="global_section" class="gt-tab-pane [if(current_tab='global_section', '', 'dn')] ">
	 
		
		

<div >
  <h3 class="mt2">Global Section</h3>
  <div class="cf flex flex-wrap ba b--black-05" >
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Global Section 
        
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input property="is_global" type="checkbox" 
          class=""
          
          id="chk--is_global-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
          />
          <label class="flex-auto ph2" for="chk--is_global-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            Enable
          </label>
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            When checked, the section will be available in other pages. 
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 [if(!is_global,&#39;dn&#39;,&#39;&#39;)]">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Data Storage Key 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(data_key, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="data_key" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
           data-list="," 
           value=""
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',data_key)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            This is the key to store the global section. Alphanumeric and underscore only. Choose an existing key will replace previous data.
          </div>
        
      </div>
       
    
  </div>
</div> 

	
	</div>


</div>

    </div>

  </div>
</div>

<div onclick="" class="skip-zoom-clone dn mv-bar f7 tc w-100 absolute top-0 pv1 ph2 bg-white o-10 hover-o-90 ">

  <button type="button" data-action="toggle-base-toolbar" class="manage-section pointer dim br2 pv1 ph2 mh1" title="toggle global setting toolbar ">
    <i class="fas fa-ellipsis-v" data-fa-mask="fas fa-square" data-fa-transform="shrink-2 left-4"></i>
  </button>

  <span class="dn di-ns gt-pos-btns"> 
    <button type="button" data-action="move-up" class="gt-move-up manage-section pointer dim br2 pv1 ph2 mh1" title="move section up"><i class="fas fa-angle-up"></i></button>
    <button type="button" data-action="move-down" class="gt-move-down manage-section pointer dim br2 pv1 ph2 mh1" title="move section down"><i class="fas fa-angle-down"></i></button>
    <button type="button" data-action="insert-section" class="gt-insert-section manage-section pointer dim br2 pv1 ph2 mh1" title="insert section "><i class="fas fa-plus"></i></button>
    <button type="button" data-action="clone-section" class="gt-clone-section manage-section pointer dim br2 pv1 ph2 mh1" title="clone section"><i class="fas fa-clone"></i></button>
    <button type="button" data-action="delete-section" class="gt-delete-section manage-section pointer dim br2 pv1 ph2 mh2 white bg-orange" title="delete section"><i class="fas fa-trash"></i></button> 
  </span>

  
  <button title="turn editor on" type="button" data-action="toggle-mv-on" class="toggle-mv-on bg-light-green manage-section pointer dim br2 pv1 ph2 mh3" ><i class="fas fa-toggle-off"></i></button>
  <button title="turn editor off" type="button" data-action="toggle-mv-off" class="toggle-mv-off dn manage-section orange pointer dim br2 pv1 ph2 mh3" ><i class="fas fa-power-off"></i></button>
  
  <button type="button" class="gt-setting-toggle dn pointer dim br2 pv1 ph2 mh1" mv-action="invoke('toggleClass', current_tab, '.off-canvas-dashboard', 'active')"><i class="fas fa-cog"></i></button>
  <button title="edit section" type="button" class="mv-edit pointer dn dim br2 pv1 ph2 mh1">Edit</button>
  <button title="save section" type="button" class="mv-save pointer dn dim br2 pv1 ph2 mh1">Save</button>
</div>

{tf{?}tf}

 

</section>

`;
  
    gtpb.partials['goandtalk/slides/collection-card'] = `



<section 675275c791df5c494218febd9c0cde06eea2ae6b mv-storage="idb_array" gt-app="{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}" mv-bar="edit save" 35fe3a9616151be1e9a9abc33ece88d44bd47528
  class="gt-mv-off relative flex flex-column mid-gray" ><div class="pv3 flex-auto flex flex-column justify-center {enc{! o.__get(it, \u0027appearance.section_background\u0027) || \u0027\u0027 }enc}
  {enc{! o.__get(it, \u0027appearance.slide_animation\u0027) || \u0027fadeIn\u0027 }enc}
  {enc{! o.__get(it, \u0027appearance.text_color\u0027) || \u0027dark-gray\u0027 }enc}
  "
  675275c791df5c494218febd9c0cde06eea2ae6b  mv-attribute="class" mv-value="section_background & ' ' & text_color & ' pv3 flex-auto flex flex-column justify-center ' & slide_animation" 35fe3a9616151be1e9a9abc33ece88d44bd47528>
    <p  675275c791df5c494218febd9c0cde06eea2ae6b property="intro" 35fe3a9616151be1e9a9abc33ece88d44bd47528  class="tc pa2">{enc{! o.__get(it, \u0027intro\u0027) || \u0027\u0027 }enc} </p>
    <h2  675275c791df5c494218febd9c0cde06eea2ae6b property="title" 35fe3a9616151be1e9a9abc33ece88d44bd47528  class="tc pa2 pa3-ns ma0 f3">{enc{! o.__get(it, \u0027title\u0027) || \u0027\u0027 }enc} </h2><div class="cf w-100 relative pa2 pa3-m pa4-l center mw8 flex flex-wrap {enc{! o.__get(it, \u0027horizontal_position\u0027) || \u0027justify-center\u0027 }enc} {enc{! o.__get(it, \u0027vertical_position\u0027) || \u0027\u0027 }enc}"
      675275c791df5c494218febd9c0cde06eea2ae6b mv-attribute="class" mv-value="'cf w-100 relative pa2 pa3-m pa4-l center mw8 flex flex-wrap ' & horizontal_position & ' ' & vertical_position" 35fe3a9616151be1e9a9abc33ece88d44bd47528 
     >
    
      {tf{? o.__get(it,\u0027column.0\u0027) }tf}

      {loop{~ it.column :item:idx }loop}

      <div 675275c791df5c494218febd9c0cde06eea2ae6b property="column" mv-multiple 35fe3a9616151be1e9a9abc33ece88d44bd47528
      class="{enc{! o.__get(it, \u0027column_class\u0027) || \u0027w-25-l\u0027 }enc} fl w-100 w-50-m  pa3 flex grow
      {enc{! o.__get(it, \u0027resize_column\u0027) || \u0027flex-auto\u0027 }enc}">
      
        <div 675275c791df5c494218febd9c0cde06eea2ae6b mv-attribute="class" mv-value="'w-100 pa2 ' & card_background" 35fe3a9616151be1e9a9abc33ece88d44bd47528 class="w-100 pa2 {enc{! o.__get(it, \u0027appearance.card_background\u0027) || \u0027\u0027 }enc}">

          <div class="relative mb2 tc">
            <img class="mw-100 {enc{! o.__get(it, \u0027images_class\u0027) || \u0027br0\u0027 }enc}" 675275c791df5c494218febd9c0cde06eea2ae6b property="image_source" 35fe3a9616151be1e9a9abc33ece88d44bd47528 src="6f5ad8f3480a1be0ec38d366a49c5176d83e9e5e" >
          </div>

          <h3 675275c791df5c494218febd9c0cde06eea2ae6b property="title" 35fe3a9616151be1e9a9abc33ece88d44bd47528 class="tc"> {enc{! o.__get(item, \u0027title\u0027) || \u0027\u0027 }enc} </h3>
          <div class="pt1 lh-copy markdown" 675275c791df5c494218febd9c0cde06eea2ae6b property="description" 35fe3a9616151be1e9a9abc33ece88d44bd47528> {v{= o.sanitizer.sanitize(o.md.render(o.__get(item, \u0027description\u0027) || \u0027\u0027 || \u0027\u0027 )) }v}
 </div>
        </div>
      </div>
      {loop{~}loop}

      {tf{??}tf}

        675275c791df5c494218febd9c0cde06eea2ae6b
        <div property="column" mv-multiple
        class="{enc{! o.__get(it, \u0027column_class\u0027) || \u0027w-25-l\u0027 }enc} fl w-100 w-50-m pa3 flex grow
        {enc{! o.__get(it, \u0027resize_column\u0027) || \u0027flex-auto\u0027 }enc}">
          <div mv-attribute="class" mv-value="'w-100 pa2 ' & card_background" class="w-100 pa2 {enc{! o.__get(it, \u0027appearance.card_background\u0027) || \u0027\u0027 }enc}">

            <div class="relative mb2 tc">
              <img class="mw-100 {enc{! o.__get(it, \u0027images_class\u0027) || \u0027br0\u0027 }enc}" alt="" property="image_source"  src="" >
            </div>

            <h3 property="title" class="tc"> Build </h3>
            <div class="pt1 lh-copy markdown" property="description"></div>
          </div>
        </div>
        35fe3a9616151be1e9a9abc33ece88d44bd47528
      35fe3a9616151be1e9a9abc33ece88d44bd47528
      675275c791df5c494218febd9c0cde06eea2ae6b <button type="button" title="add column" class="bg-green self-center v-mid dn br1 mv-add mv-ui mv-add-column">+</button> 35fe3a9616151be1e9a9abc33ece88d44bd47528
    

    </div>
    <div class="tc pa2 pa3-ns mb4 f3" 675275c791df5c494218febd9c0cde06eea2ae6b property="description"  35fe3a9616151be1e9a9abc33ece88d44bd47528> {enc{! o.__get(it, \u0027description\u0027) || \u0027\u0027 }enc} </div>
  </div>  {tf{? o.edit_mode }tf}


<div class="skip-zoom-clone  min-vh-100 w-100 absolute off-canvas-dashboard
">
  
  <div class="relative w-100 w-90-ns mw7 mt4 vh-100 bg-near-white overflow-y-scroll">
    <div class="bg-white-70 mb1 cf v-mid ph3">
      <span class="pv2 dib">Section Options</span>
      <span title="close" class="fr pv2 ph3 w3 tc orange hover-bg-white" mv-action="invoke('toggleClass', current_tab, '.off-canvas-dashboard', 'active')">X</span>
    </div>
    
    <div class="mb4 mh2 mh3-ns mt2 br1 shadow-4 b--white-30 ph1 ph2-ns pb4">
      

<input hidden property="current_tab" mv-storage="none" value="appearance"/>
<div class="pt1 flex flex-wrap items-stretch">

  
	<button data-toggle-tab="appearance" mv-action="set(current_tab,'appearance')" class="[if(current_tab='appearance', 'bg-white-90 bb-0')] gt-tab-button br1 active pointer ba f6 dib lh-solid ph2 pv2 mb2 ">
		
			<i class="fas fa-font"></i><span class="dn di-ns"> Appearance </span>
		
	</button>&nbsp;

  
	<button data-toggle-tab="layout_column" mv-action="set(current_tab,'layout_column')" class="[if(current_tab='layout_column', 'bg-white-90 bb-0')] gt-tab-button br1  pointer ba f6 dib lh-solid ph2 pv2 mb2 ">
		
			<i class="fas fa-th"></i><span class="dn di-ns"> Layout </span>
		
	</button>&nbsp;

  
	<button data-toggle-tab="layout_images" mv-action="set(current_tab,'layout_images')" class="[if(current_tab='layout_images', 'bg-white-90 bb-0')] gt-tab-button br1  pointer ba f6 dib lh-solid ph2 pv2 mb2 ">
		
			<i class="fas fa-images"></i><span class="dn di-ns"> Thumbnail </span>
		
	</button>&nbsp;

  
	<button data-toggle-tab="global_section" mv-action="set(current_tab,'global_section'),invoke(&#39;updateGlobalSectionList&#39;, data_key)" class="[if(current_tab='global_section', 'bg-white-90 bb-0')] gt-tab-button br1  pointer ba f6 dib lh-solid ph2 pv2 mb2 ">
		
			<i class="fas fa-globe"></i><span class="dn di-ns"> Global Section </span>
		
	</button>&nbsp;

</div>

<div class="tab-content pt3 ">

	
	<div data-pane="appearance" class="gt-tab-pane [if(current_tab='appearance', '', 'dn')] active">
	 
		
		

<div  property="appearance" >
  <h3 class="mt2">Appearance</h3>
  <div class="cf flex flex-wrap ba b--black-05" >
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Section Background 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(section_background, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="section_background" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="solid_background"
          
           value=""
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',section_background)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            This is the fallback background color when image is not available or disabled.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Card Background 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(card_background, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="card_background" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="solid_background"
          
           value="hover-primary-color"
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',card_background)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            this is the background of grid cards.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        

        <div>Text Color 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(text_color, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="text_color" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="text_color"
          
           value=""
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',text_color)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        

        <div>Icon Color 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(icon_color, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="icon_color" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="text_color"
          
           value=""
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',icon_color)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Slide Animation 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(slide_animation, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="slide_animation" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="slide_animation"
          
           value="fadeIn" 
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',slide_animation)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            The slide animation during presentation, default to fadeIn if not set. 
          </div>
        
      </div>
       
    
  </div>
</div> 

	
	</div>

	
	<div data-pane="layout_column" class="gt-tab-pane [if(current_tab='layout_column', '', 'dn')] ">
	 
		
		

<div >
  <h3 class="mt2">Layout</h3>
  <div class="cf flex flex-wrap ba b--black-05" >
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Columns Per Row 
        
        
        </div>
        <div  mv-action="invoke(&#39;replaceItemsClass&#39;, column_class,&#39;root.children.column&#39;)" 
        class=" bg-white 
         flex  flex-nowrap   pt1 cf items-center ">
        
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
             property="column_class"
            
            
            id="radio-56-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-56-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="w-50-l"   checked 
            />
            <label class="flex-auto ph2" for="radio-56-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            2 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-56-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-56-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="w-33-l"  
            />
            <label class="flex-auto ph2" for="radio-56-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            3 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-56-2-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-56-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="w-25-l"   checked 
            />
            <label class="flex-auto ph2" for="radio-56-2-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            4 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-56-3-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-56-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="w-20-l"  
            />
            <label class="flex-auto ph2" for="radio-56-3-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            5 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-56-4-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-56-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="w-10-l"  
            />
            <label class="flex-auto ph2" for="radio-56-4-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            10 
            </label>
          </div>
          
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            This is the maximum number of columns in a row before wrapping to the next row.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Resize Column 
        
        
        </div>
        <div  mv-action="invoke(&#39;replaceItemsClass&#39;, resize_column,&#39;root.children.column&#39;)" 
        class=" bg-white 
         flex  flex-nowrap   pt1 cf items-center ">
        
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
             property="resize_column"
            
            
            id="radio-57-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-57-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="flex-auto"   checked 
            />
            <label class="flex-auto ph2" for="radio-57-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            auto 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-57-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-57-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="flex-none"  
            />
            <label class="flex-auto ph2" for="radio-57-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            none 
            </label>
          </div>
          
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            Whether to resize columns if there is extra space in the row. If set to auto, the extra space will be divided equally. 
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Horizontal Position 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(horizontal_position, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="horizontal_position" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
           data-list="justify-center, justify-start, justify-end, justify-between, justify-around" 
           value="justify-center" 
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',horizontal_position)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            This decides how to distribute extra space if columns are not resized. 
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Vertical Position 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(vertical_position, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="vertical_position" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
           data-list="items-center, items-start, items-end, items-stretch" 
           value=""
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',vertical_position)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            This decides how to position items vertically. By default items are stretched to fill the vertical space available. 
          </div>
        
      </div>
       
    
  </div>
</div> 

	
	</div>

	
	<div data-pane="layout_images" class="gt-tab-pane [if(current_tab='layout_images', '', 'dn')] ">
	 
		
		

<div >
  <h3 class="mt2">Thumbnail</h3>
  <div class="cf flex flex-wrap ba b--black-05" >
    
      
      <div class="relative 
w-100  ph1 fl pt2 pb3
 ">
        

        <div>Images Class 
        
        
        </div>
        <div  mv-action="invoke(&#39;replaceItemsClass&#39;, images_class,&#39;root.children.column&#39;, &#39;img&#39;)" 
        class=" bg-white 
         flex  flex-nowrap   pt1 cf items-center ">
        
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
             property="images_class"
            
            
            id="radio-58-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-58-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="br0"   checked 
            />
            <label class="flex-auto ph2" for="radio-58-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            disable 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-58-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-58-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="br2"  
            />
            <label class="flex-auto ph2" for="radio-58-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            br2 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-58-2-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-58-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="br3"  
            />
            <label class="flex-auto ph2" for="radio-58-2-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            br3 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-58-3-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-58-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="br4"  
            />
            <label class="flex-auto ph2" for="radio-58-3-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            br4 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-58-4-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-58-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="br-100"  
            />
            <label class="flex-auto ph2" for="radio-58-4-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            circle or oval 
            </label>
          </div>
          
        
        </div> 
        
        
      </div>
       
    
  </div>
</div> 

	
	</div>

	
	<div data-pane="global_section" class="gt-tab-pane [if(current_tab='global_section', '', 'dn')] ">
	 
		
		

<div >
  <h3 class="mt2">Global Section</h3>
  <div class="cf flex flex-wrap ba b--black-05" >
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Global Section 
        
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input property="is_global" type="checkbox" 
          class=""
          
          id="chk--is_global-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
          />
          <label class="flex-auto ph2" for="chk--is_global-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            Enable
          </label>
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            When checked, the section will be available in other pages. 
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 [if(!is_global,&#39;dn&#39;,&#39;&#39;)]">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Data Storage Key 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(data_key, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="data_key" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
           data-list="," 
           value=""
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',data_key)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            This is the key to store the global section. Alphanumeric and underscore only. Choose an existing key will replace previous data.
          </div>
        
      </div>
       
    
  </div>
</div> 

	
	</div>


</div>

    </div>

  </div>
</div>

<div onclick="" class="skip-zoom-clone dn mv-bar f7 tc w-100 absolute top-0 pv1 ph2 bg-white o-10 hover-o-90 ">

  <button type="button" data-action="toggle-base-toolbar" class="manage-section pointer dim br2 pv1 ph2 mh1" title="toggle global setting toolbar ">
    <i class="fas fa-ellipsis-v" data-fa-mask="fas fa-square" data-fa-transform="shrink-2 left-4"></i>
  </button>

  <span class="dn di-ns gt-pos-btns"> 
    <button type="button" data-action="move-up" class="gt-move-up manage-section pointer dim br2 pv1 ph2 mh1" title="move section up"><i class="fas fa-angle-up"></i></button>
    <button type="button" data-action="move-down" class="gt-move-down manage-section pointer dim br2 pv1 ph2 mh1" title="move section down"><i class="fas fa-angle-down"></i></button>
    <button type="button" data-action="insert-section" class="gt-insert-section manage-section pointer dim br2 pv1 ph2 mh1" title="insert section "><i class="fas fa-plus"></i></button>
    <button type="button" data-action="clone-section" class="gt-clone-section manage-section pointer dim br2 pv1 ph2 mh1" title="clone section"><i class="fas fa-clone"></i></button>
    <button type="button" data-action="delete-section" class="gt-delete-section manage-section pointer dim br2 pv1 ph2 mh2 white bg-orange" title="delete section"><i class="fas fa-trash"></i></button> 
  </span>

  
  <button title="turn editor on" type="button" data-action="toggle-mv-on" class="toggle-mv-on bg-light-green manage-section pointer dim br2 pv1 ph2 mh3" ><i class="fas fa-toggle-off"></i></button>
  <button title="turn editor off" type="button" data-action="toggle-mv-off" class="toggle-mv-off dn manage-section orange pointer dim br2 pv1 ph2 mh3" ><i class="fas fa-power-off"></i></button>
  
  <button type="button" class="gt-setting-toggle dn pointer dim br2 pv1 ph2 mh1" mv-action="invoke('toggleClass', current_tab, '.off-canvas-dashboard', 'active')"><i class="fas fa-cog"></i></button>
  <button title="edit section" type="button" class="mv-edit pointer dn dim br2 pv1 ph2 mh1">Edit</button>
  <button title="save section" type="button" class="mv-save pointer dn dim br2 pv1 ph2 mh1">Save</button>
</div>

{tf{?}tf}

 

</section>

`;
  
    gtpb.partials['goandtalk/slides/collection-small-icon-at-side'] = `
<section 675275c791df5c494218febd9c0cde06eea2ae6b mv-storage="idb_array" gt-app="{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}" mv-bar="edit save" 35fe3a9616151be1e9a9abc33ece88d44bd47528
  class="gt-mv-off relative flex flex-column mid-gray" ><div class="pv3 flex-auto flex flex-column justify-center {enc{! o.__get(it, \u0027appearance.section_background\u0027) || \u0027\u0027 }enc}
  {enc{! o.__get(it, \u0027appearance.slide_animation\u0027) || \u0027fadeIn\u0027 }enc}
  {enc{! o.__get(it, \u0027appearance.text_color\u0027) || \u0027dark-gray\u0027 }enc}
  "
  675275c791df5c494218febd9c0cde06eea2ae6b  mv-attribute="class" mv-value="section_background & ' ' & text_color & ' pv3 flex-auto flex flex-column justify-center ' & slide_animation" 35fe3a9616151be1e9a9abc33ece88d44bd47528>
    <p  675275c791df5c494218febd9c0cde06eea2ae6b property="intro" 35fe3a9616151be1e9a9abc33ece88d44bd47528  class="tc pa2">{enc{! o.__get(it, \u0027intro\u0027) || \u0027\u0027 }enc} </p>
    <h2  675275c791df5c494218febd9c0cde06eea2ae6b property="title" 35fe3a9616151be1e9a9abc33ece88d44bd47528  class="tc pa2 pa3-m pa4-l ma0 f3">{enc{! o.__get(it, \u0027title\u0027) || \u0027\u0027 }enc} </h2><div class="cf w-100 relative pa2 pa3-m pa4-l center mw8 justify-center flex flex-wrap cf" >
    
      {tf{? o.__get(it,\u0027column.0\u0027) }tf}

      {loop{~ it.column :item:idx }loop}
<div 675275c791df5c494218febd9c0cde06eea2ae6b property="column" mv-multiple 35fe3a9616151be1e9a9abc33ece88d44bd47528 class="fl alternate w-100 w-50-l pa3 flex flex-auto">
        <div 675275c791df5c494218febd9c0cde06eea2ae6b mv-attribute="class" mv-value="'w-100 pa2 flex flex-wrap ' & card_background" 35fe3a9616151be1e9a9abc33ece88d44bd47528
          class="w-100 pa2 flex flex-wrap {enc{! o.__get(it, \u0027appearance.card_background\u0027) || \u0027\u0027 }enc}">
          
          <div 675275c791df5c494218febd9c0cde06eea2ae6b mv-attribute="class" mv-value="'tc self-center w-100 w-30-l f-headline f1-ns ' & if(icon_color,icon_color,'primary-color-light') & ' ' & layout_class " 35fe3a9616151be1e9a9abc33ece88d44bd47528
          class="tc self-center w-100 w-30-l f-headline f1-ns {enc{! o.__get(it, \u0027appearance.icon_color\u0027) || \u0027primary-color-light\u0027 }enc}
          {enc{! o.__get(it, \u0027layout_class\u0027) || \u0027\u0027 }enc}">
            <i 675275c791df5c494218febd9c0cde06eea2ae6b mv-attribute="class" mv-value="'fas fa-' & icon "  35fe3a9616151be1e9a9abc33ece88d44bd47528 class="fas fa-{enc{! o.__get(item, \u0027icon\u0027) || \u0027\u0027 }enc}"></i>
          </div>
          <div class="w-100 w-70-l ">
            675275c791df5c494218febd9c0cde06eea2ae6b
            <div class="dn show-in-edit w-100">
              <div>Select Icon <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(icon, '')">-</span></div>
              <div class="mid-gray flex flex-nowrap pt1 items-center">
                <input property="icon" type="text" class="flex-auto dropdown-input  h2 w-100  bg-white  br0 b--black-10 " data-path="fas_list" value="" data-minchars="0" >
                <button type="button" mv-action="invoke('toggleDDInput',icon)" class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 " title="click to open dropdown list"> <i class="f6 fas fa-arrow-down"></i></button>
              </div>
            </div>
            35fe3a9616151be1e9a9abc33ece88d44bd47528
            <p class="f5" 675275c791df5c494218febd9c0cde06eea2ae6b property="intro" 35fe3a9616151be1e9a9abc33ece88d44bd47528> {enc{! o.__get(item, \u0027intro\u0027) || \u0027\u0027 }enc}</p>
            <h3 675275c791df5c494218febd9c0cde06eea2ae6b property="title" 35fe3a9616151be1e9a9abc33ece88d44bd47528 class="f3 tc"> {enc{! o.__get(item, \u0027title\u0027) || \u0027\u0027 }enc} </h3>
            <div class="pt3 markdown lh-copy f4 nested-links" 675275c791df5c494218febd9c0cde06eea2ae6b property="content" 35fe3a9616151be1e9a9abc33ece88d44bd47528>
              {v{= o.sanitizer.sanitize(o.md.render(o.__get(item, \u0027content\u0027) || \u0027\u0027 || \u0027\u0027 )) }v}

            </div>
          </div>
        </div>
      </div>
      {loop{~}loop}

      {tf{??}tf}

        675275c791df5c494218febd9c0cde06eea2ae6b
        <div property="column" mv-multiple class="fl alternate w-100 w-50-l pa3 flex flex-auto">
          <div 675275c791df5c494218febd9c0cde06eea2ae6b mv-attribute="class" mv-value="'w-100 pa2 flex flex-wrap ' & card_background" 35fe3a9616151be1e9a9abc33ece88d44bd47528 class="w-100 pa2 flex flex-wrap {enc{! o.__get(it, \u0027appearance.card_background\u0027) || \u0027\u0027 }enc}">
            <div 675275c791df5c494218febd9c0cde06eea2ae6b mv-attribute="class" mv-value="'tc self-center w-100 w-30-l f-headline f1-ns ' & if(icon_color,icon_color,'primary-color-light') & ' ' & layout_class " 35fe3a9616151be1e9a9abc33ece88d44bd47528
            class="tc self-center w-100 w-30-l f-headline f1-ns {enc{! o.__get(it, \u0027appearance.icon_color\u0027) || \u0027primary-color-light\u0027 }enc}
            {enc{! o.__get(it, \u0027layout_class\u0027) || \u0027\u0027 }enc}">
              <i mv-attribute="class" mv-value="'fas fa-' & icon "  class="fas fa-th-large"></i>
            </div>
            <div class="w-100 w-70-l ">
              <div class="dn show-in-edit w-100">
                <div>Select Icon <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(icon, '')">-</span></div>
                <div class="mid-gray flex flex-nowrap pt1 items-center">
                  <input property="icon" type="text" class="flex-auto dropdown-input  h2 w-100  bg-white  br0 b--black-10 " data-path="fas_list" value="th-large" data-minchars="0" >
                  <button type="button" mv-action="invoke('toggleDDInput',icon)" class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 " title="click to open dropdown list"> <i class="f6 fas fa-arrow-down"></i></button>
                </div>
              </div>
              <p class="f5" property="intro"></p>
              <h3 property="title" class="f3 tc"> Easy </h3>
              <div class="pt3 markdown f4 lh-copy nested-links" property="content">It just works.</div>
            </div>
          </div>
        </div>
        35fe3a9616151be1e9a9abc33ece88d44bd47528
      35fe3a9616151be1e9a9abc33ece88d44bd47528
      675275c791df5c494218febd9c0cde06eea2ae6b <button type="button" title="add column" class="bg-green self-center v-mid dn br1 mv-add mv-ui mv-add-column">+</button> 35fe3a9616151be1e9a9abc33ece88d44bd47528
    

    </div>
    <div class="tc pa2 pa3-ns mb4 f3" 675275c791df5c494218febd9c0cde06eea2ae6b property="description"  35fe3a9616151be1e9a9abc33ece88d44bd47528> {enc{! o.__get(it, \u0027description\u0027) || \u0027\u0027 }enc} </div>
  </div>  {tf{? o.edit_mode }tf}


<div class="skip-zoom-clone  min-vh-100 w-100 absolute off-canvas-dashboard
">
  
  <div class="relative w-100 w-90-ns mw7 mt4 vh-100 bg-near-white overflow-y-scroll">
    <div class="bg-white-70 mb1 cf v-mid ph3">
      <span class="pv2 dib">Section Options</span>
      <span title="close" class="fr pv2 ph3 w3 tc orange hover-bg-white" mv-action="invoke('toggleClass', current_tab, '.off-canvas-dashboard', 'active')">X</span>
    </div>
    
    <div class="mb4 mh2 mh3-ns mt2 br1 shadow-4 b--white-30 ph1 ph2-ns pb4">
      

<input hidden property="current_tab" mv-storage="none" value="appearance"/>
<div class="pt1 flex flex-wrap items-stretch">

  
	<button data-toggle-tab="appearance" mv-action="set(current_tab,'appearance')" class="[if(current_tab='appearance', 'bg-white-90 bb-0')] gt-tab-button br1 active pointer ba f6 dib lh-solid ph2 pv2 mb2 ">
		
			<i class="fas fa-font"></i><span class="dn di-ns"> Appearance </span>
		
	</button>&nbsp;

  
	<button data-toggle-tab="layout_alternate" mv-action="set(current_tab,'layout_alternate')" class="[if(current_tab='layout_alternate', 'bg-white-90 bb-0')] gt-tab-button br1  pointer ba f6 dib lh-solid ph2 pv2 mb2 ">
		
			<i class="fas fa-th"></i><span class="dn di-ns"> Layout </span>
		
	</button>&nbsp;

  
	<button data-toggle-tab="global_section" mv-action="set(current_tab,'global_section'),invoke(&#39;updateGlobalSectionList&#39;, data_key)" class="[if(current_tab='global_section', 'bg-white-90 bb-0')] gt-tab-button br1  pointer ba f6 dib lh-solid ph2 pv2 mb2 ">
		
			<i class="fas fa-globe"></i><span class="dn di-ns"> Global Section </span>
		
	</button>&nbsp;

</div>

<div class="tab-content pt3 ">

	
	<div data-pane="appearance" class="gt-tab-pane [if(current_tab='appearance', '', 'dn')] active">
	 
		
		

<div  property="appearance" >
  <h3 class="mt2">Appearance</h3>
  <div class="cf flex flex-wrap ba b--black-05" >
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Section Background 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(section_background, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="section_background" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="solid_background"
          
           value="bg-transparent"
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',section_background)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            This is the fallback background color when image is not available or disabled.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Card Background 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(card_background, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="card_background" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="solid_background"
          
           value=""
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',card_background)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            this is the background of grid cards.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        

        <div>Text Color 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(text_color, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="text_color" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="text_color"
          
           value=""
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',text_color)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        

        <div>Icon Color 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(icon_color, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="icon_color" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="text_color"
          
           value=""
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',icon_color)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Slide Animation 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(slide_animation, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="slide_animation" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="slide_animation"
          
           value="fadeIn" 
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',slide_animation)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            The slide animation during presentation, default to fadeIn if not set. 
          </div>
        
      </div>
       
    
  </div>
</div> 

	
	</div>

	
	<div data-pane="layout_alternate" class="gt-tab-pane [if(current_tab='layout_alternate', '', 'dn')] ">
	 
		
		

<div >
  <h3 class="mt2">Layout</h3>
  <div class="cf flex flex-wrap ba b--black-05" >
    
      
      <div class="relative 
w-100  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Icon Layout Class 
        
        
        </div>
        <div 
        class=" bg-white 
         flex  flex-nowrap   pt1 cf items-center ">
        
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
             property="layout_class"
            
            
            id="radio-59-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-59-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="line-start"   checked 
            />
            <label class="flex-auto ph2" for="radio-59-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            line start 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-59-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-59-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="even-order-1-l"  
            />
            <label class="flex-auto ph2" for="radio-59-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            outside 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-59-2-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-59-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="odd-order-1-l"   checked 
            />
            <label class="flex-auto ph2" for="radio-59-2-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            inside 
            </label>
          </div>
          
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            Change the position of icons or thumbnail images to create special layout on large screen.
          </div>
        
      </div>
       
    
  </div>
</div> 

	
	</div>

	
	<div data-pane="global_section" class="gt-tab-pane [if(current_tab='global_section', '', 'dn')] ">
	 
		
		

<div >
  <h3 class="mt2">Global Section</h3>
  <div class="cf flex flex-wrap ba b--black-05" >
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Global Section 
        
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input property="is_global" type="checkbox" 
          class=""
          
          id="chk--is_global-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
          />
          <label class="flex-auto ph2" for="chk--is_global-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            Enable
          </label>
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            When checked, the section will be available in other pages. 
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 [if(!is_global,&#39;dn&#39;,&#39;&#39;)]">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Data Storage Key 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(data_key, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="data_key" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
           data-list="," 
           value=""
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',data_key)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            This is the key to store the global section. Alphanumeric and underscore only. Choose an existing key will replace previous data.
          </div>
        
      </div>
       
    
  </div>
</div> 

	
	</div>


</div>

    </div>

  </div>
</div>

<div onclick="" class="skip-zoom-clone dn mv-bar f7 tc w-100 absolute top-0 pv1 ph2 bg-white o-10 hover-o-90 ">

  <button type="button" data-action="toggle-base-toolbar" class="manage-section pointer dim br2 pv1 ph2 mh1" title="toggle global setting toolbar ">
    <i class="fas fa-ellipsis-v" data-fa-mask="fas fa-square" data-fa-transform="shrink-2 left-4"></i>
  </button>

  <span class="dn di-ns gt-pos-btns"> 
    <button type="button" data-action="move-up" class="gt-move-up manage-section pointer dim br2 pv1 ph2 mh1" title="move section up"><i class="fas fa-angle-up"></i></button>
    <button type="button" data-action="move-down" class="gt-move-down manage-section pointer dim br2 pv1 ph2 mh1" title="move section down"><i class="fas fa-angle-down"></i></button>
    <button type="button" data-action="insert-section" class="gt-insert-section manage-section pointer dim br2 pv1 ph2 mh1" title="insert section "><i class="fas fa-plus"></i></button>
    <button type="button" data-action="clone-section" class="gt-clone-section manage-section pointer dim br2 pv1 ph2 mh1" title="clone section"><i class="fas fa-clone"></i></button>
    <button type="button" data-action="delete-section" class="gt-delete-section manage-section pointer dim br2 pv1 ph2 mh2 white bg-orange" title="delete section"><i class="fas fa-trash"></i></button> 
  </span>

  
  <button title="turn editor on" type="button" data-action="toggle-mv-on" class="toggle-mv-on bg-light-green manage-section pointer dim br2 pv1 ph2 mh3" ><i class="fas fa-toggle-off"></i></button>
  <button title="turn editor off" type="button" data-action="toggle-mv-off" class="toggle-mv-off dn manage-section orange pointer dim br2 pv1 ph2 mh3" ><i class="fas fa-power-off"></i></button>
  
  <button type="button" class="gt-setting-toggle dn pointer dim br2 pv1 ph2 mh1" mv-action="invoke('toggleClass', current_tab, '.off-canvas-dashboard', 'active')"><i class="fas fa-cog"></i></button>
  <button title="edit section" type="button" class="mv-edit pointer dn dim br2 pv1 ph2 mh1">Edit</button>
  <button title="save section" type="button" class="mv-save pointer dn dim br2 pv1 ph2 mh1">Save</button>
</div>

{tf{?}tf}

 

</section>

`;
  
    gtpb.partials['goandtalk/slides/collection-text-custom-width'] = `



<section 675275c791df5c494218febd9c0cde06eea2ae6b mv-storage="idb_array" gt-app="{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}" mv-bar="edit save" 35fe3a9616151be1e9a9abc33ece88d44bd47528
  class="gt-mv-off relative flex flex-column mid-gray" ><div class="pv3 flex-auto flex flex-column justify-center {enc{! o.__get(it, \u0027appearance.section_background\u0027) || \u0027\u0027 }enc}
  {enc{! o.__get(it, \u0027appearance.slide_animation\u0027) || \u0027fadeIn\u0027 }enc}
  {enc{! o.__get(it, \u0027appearance.text_color\u0027) || \u0027dark-gray\u0027 }enc}
  "
  675275c791df5c494218febd9c0cde06eea2ae6b  mv-attribute="class" mv-value="section_background & ' ' & text_color & ' pv3 flex-auto flex flex-column justify-center ' & slide_animation" 35fe3a9616151be1e9a9abc33ece88d44bd47528>
    <p  675275c791df5c494218febd9c0cde06eea2ae6b property="intro" 35fe3a9616151be1e9a9abc33ece88d44bd47528  class="tc pa2">{enc{! o.__get(it, \u0027intro\u0027) || \u0027\u0027 }enc} </p>
    <h2  675275c791df5c494218febd9c0cde06eea2ae6b property="title" 35fe3a9616151be1e9a9abc33ece88d44bd47528  class="tc pa2 pa3-ns ma0 f3">{enc{! o.__get(it, \u0027title\u0027) || \u0027\u0027 }enc} </h2><div class="cf w-100 relative pa2 pa3-m pa4-l center mw8 flex flex-wrap {enc{! o.__get(it, \u0027horizontal_position\u0027) || \u0027justify-center\u0027 }enc} {enc{! o.__get(it, \u0027vertical_position\u0027) || \u0027\u0027 }enc}"
      675275c791df5c494218febd9c0cde06eea2ae6b mv-attribute="class" mv-value="'cf w-100 relative pa2 pa3-m pa4-l center mw8 flex flex-wrap ' & horizontal_position & ' ' & vertical_position" 35fe3a9616151be1e9a9abc33ece88d44bd47528 
     >
    
      {tf{? o.__get(it,\u0027column.0\u0027) }tf}

      {loop{~ it.column :item:idx }loop}

      <div 675275c791df5c494218febd9c0cde06eea2ae6b property="column" mv-multiple 35fe3a9616151be1e9a9abc33ece88d44bd47528
      class="w-{enc{! o.__get(item, \u0027column_width\u0027) || \u002720\u0027 }enc}-ns fl w-100  pa3 flex grow
      {enc{! o.__get(it, \u0027resize_column\u0027) || \u0027flex-auto\u0027 }enc}">
      
        <div 675275c791df5c494218febd9c0cde06eea2ae6b mv-attribute="class" mv-value="'w-100 pa2 ' & card_background" 35fe3a9616151be1e9a9abc33ece88d44bd47528 class="w-100 pa2 {enc{! o.__get(it, \u0027appearance.card_background\u0027) || \u0027\u0027 }enc}">
          675275c791df5c494218febd9c0cde06eea2ae6b
          <div class="dn show-in-edit w-100"
          mv-action="invoke('replaceNodeClass', column_width, 'element.parentElement.parentElement.parentElement', 'w-', 'w-', '-ns', 'w-100' )"
          >
            <div class="f7">[column_width]%</div>
            <input class=" w-100 pv2" property="column_width" type="range" min="10" max="100" step="10" value="20"  />
          </div>
          35fe3a9616151be1e9a9abc33ece88d44bd47528
          <div class="relative mb2 tc">
            <img class="mw-100 {enc{! o.__get(it, \u0027images_class\u0027) || \u0027br0\u0027 }enc}" 675275c791df5c494218febd9c0cde06eea2ae6b property="image_source" 35fe3a9616151be1e9a9abc33ece88d44bd47528 src="6f5ad8f3480a1be0ec38d366a49c5176d83e9e5e" >
          </div>

          <h3 675275c791df5c494218febd9c0cde06eea2ae6b property="title" 35fe3a9616151be1e9a9abc33ece88d44bd47528 class=""> {enc{! o.__get(item, \u0027title\u0027) || \u0027\u0027 }enc} </h3>
          <div class="pt1 lh-copy markdown" 675275c791df5c494218febd9c0cde06eea2ae6b property="description" 35fe3a9616151be1e9a9abc33ece88d44bd47528> {v{= o.sanitizer.sanitize(o.md.render(o.__get(item, \u0027description\u0027) || \u0027\u0027 || \u0027\u0027 )) }v}
 </div>
        </div>
      </div>
      {loop{~}loop}

      {tf{??}tf}

        675275c791df5c494218febd9c0cde06eea2ae6b
        <div property="column" mv-multiple
        class="w-{enc{! o.__get(item, \u0027column_width\u0027) || \u002720\u0027 }enc}-ns w-100 pa3 flex grow
        {enc{! o.__get(it, \u0027resize_column\u0027) || \u0027flex-auto\u0027 }enc}">
          <div mv-attribute="class" mv-value="'w-100 pa2 ' & card_background" class="w-100 pa2 {enc{! o.__get(it, \u0027appearance.card_background\u0027) || \u0027\u0027 }enc}">
            <div class="dn show-in-edit">
              <input class="w-100 pv2" property="column_width" type="range" min="10" max="100" step="10" value="20" />
            </div>
            <div class="relative mb2 tc">
              <img class="mw-100 {enc{! o.__get(it, \u0027images_class\u0027) || \u0027br0\u0027 }enc}" alt="" property="image_source"  src="" >
            </div>

            <h3 property="title" class=""> Build </h3>
            <div class="pt1 lh-copy markdown" property="description"></div>
          </div>
        </div>
        35fe3a9616151be1e9a9abc33ece88d44bd47528
      35fe3a9616151be1e9a9abc33ece88d44bd47528
      675275c791df5c494218febd9c0cde06eea2ae6b <button type="button" title="add column" class="bg-green self-center v-mid dn br1 mv-add mv-ui mv-add-column">+</button> 35fe3a9616151be1e9a9abc33ece88d44bd47528
    

    </div>
    <div class="tc pa2 pa3-ns mb4 f3" 675275c791df5c494218febd9c0cde06eea2ae6b property="description"  35fe3a9616151be1e9a9abc33ece88d44bd47528> {enc{! o.__get(it, \u0027description\u0027) || \u0027\u0027 }enc} </div>
  </div>  {tf{? o.edit_mode }tf}


<div class="skip-zoom-clone  min-vh-100 w-100 absolute off-canvas-dashboard
">
  
  <div class="relative w-100 w-90-ns mw7 mt4 vh-100 bg-near-white overflow-y-scroll">
    <div class="bg-white-70 mb1 cf v-mid ph3">
      <span class="pv2 dib">Section Options</span>
      <span title="close" class="fr pv2 ph3 w3 tc orange hover-bg-white" mv-action="invoke('toggleClass', current_tab, '.off-canvas-dashboard', 'active')">X</span>
    </div>
    
    <div class="mb4 mh2 mh3-ns mt2 br1 shadow-4 b--white-30 ph1 ph2-ns pb4">
      

<input hidden property="current_tab" mv-storage="none" value="appearance"/>
<div class="pt1 flex flex-wrap items-stretch">

  
	<button data-toggle-tab="appearance" mv-action="set(current_tab,'appearance')" class="[if(current_tab='appearance', 'bg-white-90 bb-0')] gt-tab-button br1 active pointer ba f6 dib lh-solid ph2 pv2 mb2 ">
		
			<i class="fas fa-font"></i><span class="dn di-ns"> Appearance </span>
		
	</button>&nbsp;

  
	<button data-toggle-tab="layout_column" mv-action="set(current_tab,'layout_column')" class="[if(current_tab='layout_column', 'bg-white-90 bb-0')] gt-tab-button br1  pointer ba f6 dib lh-solid ph2 pv2 mb2 ">
		
			<i class="fas fa-th"></i><span class="dn di-ns"> Layout </span>
		
	</button>&nbsp;

  
	<button data-toggle-tab="layout_images" mv-action="set(current_tab,'layout_images')" class="[if(current_tab='layout_images', 'bg-white-90 bb-0')] gt-tab-button br1  pointer ba f6 dib lh-solid ph2 pv2 mb2 ">
		
			<i class="fas fa-images"></i><span class="dn di-ns"> Thumbnail </span>
		
	</button>&nbsp;

  
	<button data-toggle-tab="global_section" mv-action="set(current_tab,'global_section'),invoke(&#39;updateGlobalSectionList&#39;, data_key)" class="[if(current_tab='global_section', 'bg-white-90 bb-0')] gt-tab-button br1  pointer ba f6 dib lh-solid ph2 pv2 mb2 ">
		
			<i class="fas fa-globe"></i><span class="dn di-ns"> Global Section </span>
		
	</button>&nbsp;

</div>

<div class="tab-content pt3 ">

	
	<div data-pane="appearance" class="gt-tab-pane [if(current_tab='appearance', '', 'dn')] active">
	 
		
		

<div  property="appearance" >
  <h3 class="mt2">Appearance</h3>
  <div class="cf flex flex-wrap ba b--black-05" >
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Section Background 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(section_background, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="section_background" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="solid_background"
          
           value=""
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',section_background)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            This is the fallback background color when image is not available or disabled.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Card Background 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(card_background, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="card_background" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="solid_background"
          
           value="hover-primary-color"
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',card_background)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            this is the background of grid cards.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        

        <div>Text Color 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(text_color, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="text_color" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="text_color"
          
           value=""
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',text_color)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        

        <div>Icon Color 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(icon_color, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="icon_color" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="text_color"
          
           value=""
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',icon_color)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Slide Animation 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(slide_animation, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="slide_animation" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path="slide_animation"
          
           value="fadeIn" 
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',slide_animation)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            The slide animation during presentation, default to fadeIn if not set. 
          </div>
        
      </div>
       
    
  </div>
</div> 

	
	</div>

	
	<div data-pane="layout_column" class="gt-tab-pane [if(current_tab='layout_column', '', 'dn')] ">
	 
		
		

<div >
  <h3 class="mt2">Layout</h3>
  <div class="cf flex flex-wrap ba b--black-05" >
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Columns Per Row 
        
        
        </div>
        <div  mv-action="invoke(&#39;replaceItemsClass&#39;, column_class,&#39;root.children.column&#39;)" 
        class=" bg-white 
         flex  flex-nowrap   pt1 cf items-center ">
        
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
             property="column_class"
            
            
            id="radio-60-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-60-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="w-50-l"   checked 
            />
            <label class="flex-auto ph2" for="radio-60-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            2 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-60-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-60-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="w-33-l"  
            />
            <label class="flex-auto ph2" for="radio-60-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            3 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-60-2-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-60-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="w-25-l"   checked 
            />
            <label class="flex-auto ph2" for="radio-60-2-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            4 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-60-3-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-60-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="w-20-l"  
            />
            <label class="flex-auto ph2" for="radio-60-3-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            5 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-60-4-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-60-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="w-10-l"  
            />
            <label class="flex-auto ph2" for="radio-60-4-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            10 
            </label>
          </div>
          
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            This is the maximum number of columns in a row before wrapping to the next row.
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Resize Column 
        
        
        </div>
        <div  mv-action="invoke(&#39;replaceItemsClass&#39;, resize_column,&#39;root.children.column&#39;)" 
        class=" bg-white 
         flex  flex-nowrap   pt1 cf items-center ">
        
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
             property="resize_column"
            
            
            id="radio-61-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-61-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="flex-auto"   checked 
            />
            <label class="flex-auto ph2" for="radio-61-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            auto 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-61-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-61-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="flex-none"  
            />
            <label class="flex-auto ph2" for="radio-61-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            none 
            </label>
          </div>
          
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            Whether to resize columns if there is extra space in the row. If set to auto, the extra space will be divided equally. 
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Horizontal Position 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(horizontal_position, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="horizontal_position" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
           data-list="justify-center, justify-start, justify-end, justify-between, justify-around" 
           value="justify-center" 
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',horizontal_position)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            This decides how to distribute extra space if columns are not resized. 
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Vertical Position 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(vertical_position, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="vertical_position" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
           data-list="items-center, items-start, items-end, items-stretch" 
           value=""
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',vertical_position)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            This decides how to position items vertically. By default items are stretched to fill the vertical space available. 
          </div>
        
      </div>
       
    
  </div>
</div> 

	
	</div>

	
	<div data-pane="layout_images" class="gt-tab-pane [if(current_tab='layout_images', '', 'dn')] ">
	 
		
		

<div >
  <h3 class="mt2">Thumbnail</h3>
  <div class="cf flex flex-wrap ba b--black-05" >
    
      
      <div class="relative 
w-100  ph1 fl pt2 pb3
 ">
        

        <div>Images Class 
        
        
        </div>
        <div  mv-action="invoke(&#39;replaceItemsClass&#39;, images_class,&#39;root.children.column&#39;, &#39;img&#39;)" 
        class=" bg-white 
         flex  flex-nowrap   pt1 cf items-center ">
        
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
             property="images_class"
            
            
            id="radio-62-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-62-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="br0"   checked 
            />
            <label class="flex-auto ph2" for="radio-62-0-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            disable 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-62-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-62-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="br2"  
            />
            <label class="flex-auto ph2" for="radio-62-1-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            br2 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-62-2-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-62-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="br3"  
            />
            <label class="flex-auto ph2" for="radio-62-2-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            br3 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-62-3-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-62-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="br4"  
            />
            <label class="flex-auto ph2" for="radio-62-3-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            br4 
            </label>
          </div>
          
          <div class=" flex-auto pv1  ph1 flex items-center">
            <input type="radio"
            
            
            
            id="radio-62-4-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            name="radio-62-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
            value="br-100"  
            />
            <label class="flex-auto ph2" for="radio-62-4-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            circle or oval 
            </label>
          </div>
          
        
        </div> 
        
        
      </div>
       
    
  </div>
</div> 

	
	</div>

	
	<div data-pane="global_section" class="gt-tab-pane [if(current_tab='global_section', '', 'dn')] ">
	 
		
		

<div >
  <h3 class="mt2">Global Section</h3>
  <div class="cf flex flex-wrap ba b--black-05" >
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 ">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Global Section 
        
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input property="is_global" type="checkbox" 
          class=""
          
          id="chk--is_global-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}"
          />
          <label class="flex-auto ph2" for="chk--is_global-{enc{! o.__get(o, \u0027id\u0027) || \u0027\u0027 }enc}">
            Enable
          </label>
        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            When checked, the section will be available in other pages. 
          </div>
        
      </div>
       
    
      
      <div class="relative 
w-100  flex-auto w-25-ns ff-ns  ph1 fl pt2 pb3
 [if(!is_global,&#39;dn&#39;,&#39;&#39;)]">
        
          <span class="gt-label mh1 black-60 fr w2 v-mid tc">
  <span class="bg-black-40 white f7 ph1 br-100">?</span>
</span>
 
        

        <div>Data Storage Key 
        
        
          <span title="clear value" class="mh2 bg-light-red white f7 ph1 br-100" mv-action="set(data_key, '')">X</span>
        
        </div>
        <div 
        class="
         flex  flex-nowrap   pt1 cf items-center ">
        
          <input 
           property="data_key" 
          type="text" 
          class="flex-auto  dropdown-input  
 h2 w-100  bg-white  br0 b--black-10 fl
"
          data-path=""
           data-list="," 
           value=""
          data-minchars="0" 
          />
          
<button type="button" mv-action="invoke('toggleDDInput',data_key)"
  class="dropdown-btn w2 h2 v-mid tc br1 bg-black-10 black-90 ba1 b--black-05 z-0 fl"
  title="click to open dropdown list">
  <span class="f6 bg-white-80 ph1 ">v</span>
</button>

        
        </div> 
        
        
          <div class="gt-tooltip bg-black-80 white-90 ph1 pv2 absolute top-2 left-0 right-0 dn f6 z-1 overflow-y-visible
">
            This is the key to store the global section. Alphanumeric and underscore only. Choose an existing key will replace previous data.
          </div>
        
      </div>
       
    
  </div>
</div> 

	
	</div>


</div>

    </div>

  </div>
</div>

<div onclick="" class="skip-zoom-clone dn mv-bar f7 tc w-100 absolute top-0 pv1 ph2 bg-white o-10 hover-o-90 ">

  <button type="button" data-action="toggle-base-toolbar" class="manage-section pointer dim br2 pv1 ph2 mh1" title="toggle global setting toolbar ">
    <i class="fas fa-ellipsis-v" data-fa-mask="fas fa-square" data-fa-transform="shrink-2 left-4"></i>
  </button>

  <span class="dn di-ns gt-pos-btns"> 
    <button type="button" data-action="move-up" class="gt-move-up manage-section pointer dim br2 pv1 ph2 mh1" title="move section up"><i class="fas fa-angle-up"></i></button>
    <button type="button" data-action="move-down" class="gt-move-down manage-section pointer dim br2 pv1 ph2 mh1" title="move section down"><i class="fas fa-angle-down"></i></button>
    <button type="button" data-action="insert-section" class="gt-insert-section manage-section pointer dim br2 pv1 ph2 mh1" title="insert section "><i class="fas fa-plus"></i></button>
    <button type="button" data-action="clone-section" class="gt-clone-section manage-section pointer dim br2 pv1 ph2 mh1" title="clone section"><i class="fas fa-clone"></i></button>
    <button type="button" data-action="delete-section" class="gt-delete-section manage-section pointer dim br2 pv1 ph2 mh2 white bg-orange" title="delete section"><i class="fas fa-trash"></i></button> 
  </span>

  
  <button title="turn editor on" type="button" data-action="toggle-mv-on" class="toggle-mv-on bg-light-green manage-section pointer dim br2 pv1 ph2 mh3" ><i class="fas fa-toggle-off"></i></button>
  <button title="turn editor off" type="button" data-action="toggle-mv-off" class="toggle-mv-off dn manage-section orange pointer dim br2 pv1 ph2 mh3" ><i class="fas fa-power-off"></i></button>
  
  <button type="button" class="gt-setting-toggle dn pointer dim br2 pv1 ph2 mh1" mv-action="invoke('toggleClass', current_tab, '.off-canvas-dashboard', 'active')"><i class="fas fa-cog"></i></button>
  <button title="edit section" type="button" class="mv-edit pointer dn dim br2 pv1 ph2 mh1">Edit</button>
  <button title="save section" type="button" class="mv-save pointer dn dim br2 pv1 ph2 mh1">Save</button>
</div>

{tf{?}tf}

 

</section>

`;
  


     

     

gtpb.default.site_id = "gt";
gtpb.default.TemplateHash = {"35fe3a9616151be1e9a9abc33ece88d44bd47528":"{tf{?}tf}\n","47a10716ab9cfa2da5ba2cc37e033286ea50785c":"{tf{? o.edit_mode }tf}{enc{! o.__get(it, \\u0027image.src\\u0027) || \\u0027https://source.unsplash.com/sK1hW5knKkw/1536x864\\u0027 }enc}{tf{??}tf}{v{= o._relurl(o.__get(it, \\u0027image.src\\u0027) || \\u0027https://source.unsplash.com/sK1hW5knKkw/1536x864\\u0027) }v}{tf{?}tf}","5aff7ad5769b66377c06f3d3195c1ba6c58d9165":"{tf{? o.edit_mode }tf}{enc{! o.__get(o, \\u0027site.params.slide_trigger_icon\\u0027) || \\u0027/images/logos/icon-on-dark.svg\\u0027 }enc}{tf{??}tf}{v{= o._relurl(o.__get(o, \\u0027site.params.slide_trigger_icon\\u0027) || \\u0027/images/logos/icon-on-dark.svg\\u0027) }v}{tf{?}tf}","675275c791df5c494218febd9c0cde06eea2ae6b":"{tf{? o.edit_mode }tf}\n","6aa54d91498069cf3ec3c6d46443b0b765c6cec2":"{tf{? o.edit_mode }tf}{enc{! o.__get(it, \\u0027cta.url\\u0027) || \\u0027#\\u0027 }enc}{tf{??}tf}{v{= o._relurl(o.__get(it, \\u0027cta.url\\u0027) || \\u0027#\\u0027) }v}{tf{?}tf}","6f171f7af664405d6c48d439c7dcf034b904ccf1":"{tf{? o.edit_mode }tf}{enc{! o.__get(o, \\u0027logo_url\\u0027) || \\u0027/images/logos/icon-on-dark.svg\\u0027 }enc}{tf{??}tf}{v{= o._relurl(o.__get(o, \\u0027logo_url\\u0027) || \\u0027/images/logos/icon-on-dark.svg\\u0027) }v}{tf{?}tf}","6f5ad8f3480a1be0ec38d366a49c5176d83e9e5e":"{tf{? o.edit_mode }tf}{enc{! o.__get(item, \\u0027image_source\\u0027) || \\u0027\\u0027 }enc}{tf{??}tf}{v{= o._relurl(o.__get(item, \\u0027image_source\\u0027) || \\u0027\\u0027) }v}{tf{?}tf}","a41325d3d724b613adde84fb3124bc6dd2d09ac7":"{tf{? o.edit_mode }tf}{enc{! o.__get(it, \\u0027image.src\\u0027) || \\u0027\\u0027 }enc}{tf{??}tf}{v{= o._relurl(o.__get(it, \\u0027image.src\\u0027) || \\u0027\\u0027) }v}{tf{?}tf}","b1d98aff0d513d54c95f98187a86801cfeb2b837":"{tf{? o.edit_mode }tf}{enc{! o.__get(it, \\u0027cta2.url\\u0027) || \\u0027#\\u0027 }enc}{tf{??}tf}{v{= o._relurl(o.__get(it, \\u0027cta2.url\\u0027) || \\u0027#\\u0027) }v}{tf{?}tf}","be9210026fcf76504a9221b2aea4c4b61cf84e51":"{tf{? o.edit_mode }tf}{enc{! o.__get(it, \\u0027image_source\\u0027) || \\u0027\\u0027 }enc}{tf{??}tf}{v{= o._relurl(o.__get(it, \\u0027image_source\\u0027) || \\u0027\\u0027) }v}{tf{?}tf}","dd670833e00d695c78df75d31d05c27606aca294":"{tf{? o.edit_mode }tf}{enc{! o.__get(item, \\u0027url\\u0027) || \\u0027#\\u0027 }enc}{tf{??}tf}{v{= o._relurl(o.__get(item, \\u0027url\\u0027) || \\u0027#\\u0027) }v}{tf{?}tf}","f31242cd7b629eb52f03daf3392c0469f5e560bb":"{tf{? o.edit_mode }tf}{enc{! o.__get(it, \\u0027params.logo_url\\u0027) || \\u0027/images/logos/icon-on-dark.svg\\u0027 }enc}{tf{??}tf}{v{= o._relurl(o.__get(it, \\u0027params.logo_url\\u0027) || \\u0027/images/logos/icon-on-dark.svg\\u0027) }v}{tf{?}tf}"};
gtpb.default.SiteMenu = {"global":[{"URL":"/tutorial/","Page":null,"Name":"Tutorials","Menu":"global","Identifier":"tutorials","Pre":"","Post":"","Weight":5,"Parent":"","Children":null},{"URL":"/presentation/","Page":null,"Name":"Talks","Menu":"global","Identifier":"talks","Pre":"","Post":"","Weight":10,"Parent":"","Children":null},{"URL":"/about/","Page":null,"Name":"About","Menu":"global","Identifier":"about","Pre":"","Post":"","Weight":15,"Parent":"","Children":null}],"iconmenu":[{"URL":"#","Page":null,"Name":"Go Account","Menu":"iconmenu","Identifier":"","Pre":"Go","Post":"","Weight":0,"Parent":"","Children":null}]};
gtpb.default.SiteParams = {"accent_color":"hsl(165,35%,45%)","accent_color_light":"hsl(165,35%,65%)","flex_box_interior_classes":"w-100 w-50-m w-33-l ","global_section":{"alternate_text_and_big_icon_layer":{"appearance":{"animation":"fadeIn","icon_color":"primary-color","section_background":"bg-primary-color-light","slide_animation":"fadeIn"},"content":"* go to the previous section with the title \"Global Section\".\n* find the section toolbar at the top edge of the section.\n* click on the toggle button to turn on the app\n* click on Edit button on the toolbar to switch to editing mode.\n* Change the section title to something you can easily recognize.\n* click on the cog icon on the section toolbar to show the section settings window.\n* go to \"Global Section\" tab and tick the checkbox to enable it as global section. \n* Fill in a data storage key you can easily recognize. You can get a list of existing keys by clicking on the dropdown button. Make sure to use a new key to avoid overriding data.\n* click the Save button to save the changes.\n* open another tutorial in another tab of your browser.\n* click on the plus icon on any section toolbar to bring up a window for inserting new section.\n* leave \"Select Section Template \" as blank. Clear this field if it has any value.\n* in the \"Use Data From Global Section\" field, click on the dropdown button, and look for the global section you have created.\n* click on the \"Insert\" button to confirm the operation.\n* you should be able to see the global section inserted to that tutorial page, with data you have saved.","description":"","icons":{"icon_transform":"shrink-6","mini_icon":"globe-asia","mini_icon_color":"white","outer_icon":"square","width":20},"intro":"Exercise","is_global":true,"partial":"goandtalk/slides/alternate-text-and-big-icon-layer","title":"Using a Global Section"},"app_status_on_off":{"appearance":{"card_background":"bg-light-gray","icon_color":"black-10","section_background":"bg-white-70","slide_animation":"fadeIn","text_color":"primary-color-first-letter-h3"},"column":[{"description":"* The Application is currently off.\n* Click this button to turn it on.\n* Not available for apps that are always on.","icon":"toggle-off","title":"Off"},{"description":"* The application is on.\n* Click this button to turn if off.\n* Not available for apps that are always on.","icon":"power-off","title":"On"}],"column_class":"w-25-l","data_fa_mask":"circle","data_fa_transform":"shrink-8","data_key":"app_status_on_off","description":"  ","horizontal_position":"justify-center","intro":"Toggle On Demand","is_global":true,"partial":"goandtalk/slides/collection-big-icon-circle-mask","resize_column":"flex-auto","title":"The State of Section Application"},"buttons_in_edit_mode":{"appearance":{"card_background":"hover-primary-color","slide_animation":"fadeIn"},"column":[{"column_width":20,"description":"* The app is in standby mode. \n* Click on this button to switch to editing mode. \n* The section works like a normal web page.\n* Click on a link will take you to a new resource.","title":"Edit"},{"column_width":20,"description":"* The app is in editing mode.\n* Click on this button to exit editing.\n* Click on text or image to start editing.\n* The section will behave differently.\n* Click on a link will bring up an editor.","title":"Editing"},{"column_width":20,"description":"* Click this button to save the current PAGE.\n* Click on \"Save\" button on any section will save the whole page.\n* This button works in standby and editing mode.","title":"Save"},{"column_width":20,"description":"* Toggles more options of the current section.\n* This button works in standby and editing mode.","title":"Settings"}],"column_class":"w-50-l","data_key":"buttons_in_edit_mode","description":"  ","horizontal_position":"justify-center","images_class":"br0","intro":"Buttons and States","is_global":true,"partial":"goandtalk/slides/collection-text-custom-width","resize_column":"flex-auto","title":"Buttons Available When the Section App is On"},"data_browser_database":{"appearance":{"card_background":"bg-light-gray","section_background":"bg-white-70","slide_animation":"fadeIn","text_color":"primary-color-first-letter-h3"},"column":[{"description":"* IndexedDB by name\n* Storage space is large enough for texts\n* Limited in space for images, especially on mobile devices\n* Online image service recommended","icon":"database","title":"A Database in Your Browser"}],"column_class":"w-50-l","content":"","data_fa_mask":"tablet","data_fa_transform":"shrink-8","data_key":"data_browser_database","description":"  ","horizontal_position":"justify-center","intro":" ","is_global":true,"partial":"goandtalk/slides/collection-big-icon-circle-mask","resize_column":"flex-none","title":"Where are Data and Images Saved"},"default_footer":{"appearance":{"legal_link_color":"link-white-80","nav_link_color":"link-gold","section_background":"bg-black-80"},"is_global":true,"menu":{"footer_legal":[{"name":"Terms of Service","url":"#"},{"name":"Privacy","url":"#"}],"footer_nav":[{"name":"Home","url":"#"},{"name":"About","url":"/about/"}]}},"finding_toolbar":{"appearance":{"animation":"fadeIn","card_background":"hover-primary-color","icon_color":"black-20","slide_animation":"fadeIn","text_color":"primary-color-first-letter-h3"},"column":[{"description":"* At the left side of the screen.\n* Manage global settings. \n* Apply to the current page, or all pages.\n* Hide all section tools.\n* Hide itself.","icon":"grip-vertical","title":"Global Toolbar"},{"description":"* At the top of each section.\n* Manage current section. \n* Apply to current section.\n* Turn app on and off.\n* Toggle edit mode.\n* Toggle global toolbar.","icon":"grip-horizontal","title":"Section Toolbar"},{"description":"* Available in some sections. \n* Toggle button to switch toolbars.\n* Toggle on to edit.\n* Toggle off when done.","icon":"keyboard","title":"Context Toolbar"}],"column_class":"w-25-l","data_key":"finding_toolbar","description":"Hover or tap to show the toolbars.","horizontal_position":"justify-center","intro":"At Top and Left, Out of View Initially","is_global":true,"partial":"goandtalk/slides/collection-big-icon-mono","resize_column":"flex-auto","title":"Finding Toolbars"},"site_and_page_data":{"appearance":{"card_background":"hover-primary-color","icon_color":"black-20","slide_animation":"fadeIn"},"column":[{"description":"* data related to current page only\n* page title and description\n* body text\n* local sections\n* header background, primary colors etc\n\nThere can be multiple pages in one site or project.","icon":"file-alt","title":"Page Data"},{"description":"* data related to the whole site or project\n* site title and description\n* menu items\n* default primary colors\n* global sections\n\nThere can be multiple sites or projects. Each site has its own database.","icon":"globe","title":"Site Data"}],"column_class":"w-25-l","content":"","data_key":"site_and_page_data","description":"  ","horizontal_position":"justify-center","intro":" ","is_global":true,"partial":"goandtalk/slides/collection-big-icon-mono","resize_column":"flex-auto","title":"Page and Site Data"}},"header_class":"bg-primary-color","lightness":45,"lightness_dark":20,"lightness_light":65,"lightness_lighter":80,"logo_url":"/images/logos/icon-on-dark.svg","mainSections":["post"],"main_menu_align":"start","mainsections":["post"],"mobile_menu_button":[{"label":"Menu","menu":"global"},{"label":"Account","menu":"iconmenu"}],"primary_hue":345,"saturation":35,"skip_cover_nav":false};
gtpb.default.SiteBaseURL = "https://goandtalk.github.io/";
gtpb.default.SiteCopyright = "Copyright 2018, GoAndMake.app.";
gtpb.default.SiteTitle = "Go and talk theme";
gtpb.default.SiteFooter = {"appearance":{"legal_link_color":"link-white-80","nav_link_color":"link-gold","section_background":"bg-black-80"},"is_global":true,"menu":{"footer_legal":[{"name":"Terms of Service","url":"#"},{"name":"Privacy","url":"#"}],"footer_nav":[{"name":"Home","url":"#"},{"name":"About","url":"#"}]}};
