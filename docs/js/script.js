$(window).scroll((function(){$(window).scrollTop()>0?$(".header").addClass("header_floating"):$(".header").removeClass("header_floating")})),$(document).on({mouseenter:function(){$(".header-xl .nav-link-dropdown").hide(),$("header.header-xl").addClass("expand"),$(".header-xl .cases__row").css("display","flex")}},".header-xl .nav-item"),$(document).on({mouseenter:function(){$(this).children().next().css("display","flex")}},".header-xl .dropdown-element"),$(document).on({mouseleave:function(){$(".header-xl .nav-link-dropdown").hide(),$(".header-xl .cases__row").hide(),$(this).removeClass("expand")}},".header.header-xl"),$(document).on({click:function(e){e.preventDefault(),$(".dropdown-link_md").removeClass("dropdown-link_md--active"),$(this).addClass("dropdown-link_md--active"),$(this).hasClass("dropdown-link_md-1")?$(".dropdown_md-1").is(":visible")||($(".dropdown_md").slideUp(),$(".dropdown_md-1").slideDown()):$(this).hasClass("dropdown-link_md-2")?$(".dropdown_md-2").is(":visible")||($(".dropdown_md").slideUp(),$(".dropdown_md-2").slideDown()):$(this).hasClass("dropdown-link_md-3")?$(".dropdown_md-3").is(":visible")||($(".dropdown_md").slideUp(),$(".dropdown_md-3").slideDown()):$(this).hasClass("dropdown-link_md-4")?$(".dropdown_md-4").is(":visible")||($(".dropdown_md").slideUp(),$(".dropdown_md-4").slideDown()):$(this).hasClass("dropdown-link_md-5")&&($(".dropdown_md-5").is(":visible")||($(".dropdown_md").slideUp(),$(".dropdown_md-5").slideDown()))}},".dropdown-link_md"),$(document).on({click:function(){$(this).parent().hasClass("dropdown-element_active")?($(this).parent().removeClass("dropdown-element_active"),$(this).parent().children().next().slideUp()):($(".dropdown-element-xs").removeClass("dropdown-element_active"),$(this).parent().addClass("dropdown-element_active"),$(".dropdown-xs").slideUp(),$(this).parent().children().next().slideDown())}},".dropdown-element-xs .nav-link-xs"),$(document).on({click:function(e){e.preventDefault()}},".nav-link-xs"),$(".navbar-toggler").click((function(){$(this).parent().parent().parent().parent().parent().toggleClass("expand"),$(".dropdown-link_md").removeClass("dropdown-link_md--active"),$(".dropdown_md").hide(),$(".cases__tab-title").attr("aria-expanded",!1),$(".cases__tab .collapse").removeClass("show")})),$("footer").mouseup((function(e){var t=$(".header");t.is(e.target)||0!==t.has(e.target).length||t.removeClass("expand")})),$(".slick-example").slick({slidesToShow:1,slidesToScroll:1,dots:!0,autoplay:!0}),$(".animation").waypoint((function(e){var t=$(this.element).attr("data-animate");$(this.element).addClass("visible animated "+t)}),{offset:"60%"}),$(".file-input-file").on("change",(function(){let e=$(this).val().split("\\");$(this).parents(".file-input").find(".file-input-item-text").text(e[e.length-1])})),$("._toggleMobileMenu").on("click",(function(){$(this).toggleClass("active"),$(".header__menu").toggleClass("active")})),$("._closeMenu").on("click",(function(){$(".header__menu").removeClass("active")})),$(window).width()<992&&($("._dropdownMenu").on("click",(function(e){e.preventDefault();let t=$(this).parent();$(t).toggleClass("active"),$(t).hasClass("active")?$(t).find(".menu__dropdown").slideDown():$(t).find(".menu__dropdown").slideUp()})),$("._dropdownMenuItem").on("click",(function(e){e.preventDefault();let t=$(this).parent();$(t).toggleClass("active");$(t).hasClass("active")?$(t).find("ul").slideDown():$(t).find("ul").slideUp()})));var date=new Date;if($(".footer-date").text(date.getFullYear()),$(".phone").mask("999999999990000"),$("#new-form").validate({rules:{file:{accept:"image/*,application/pdf,application/vnd.ms-excel,application/msword,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.ms-word,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,text/plain"}},errorPlacement:function(e,t){},submitHandler:function(e){var t=$(e).find('input[name="name"]').val(),o=$(e).find('input[name="email"]').val(),i=$(e).find('input[name="name-company"]').val(),a=$(e).find('textarea[name="message"]').val(),s=$(e).find('input[name="money"]').val(),n=$(e).find('input[name="phone"]').val(),r=$(e).find('input[name="file"]'),l=$(e).find('input[name="marketing"]').val(),c=$(e).find('input[name="template"]').val(),d=$(e).attr("data-form"),m=$(e).attr("data-formtype"),p=document.referrer,u=document.location.href,f=new FormData;return f.append("form_type",m),f.append("form",d),f.append("user_mail",o),f.append("user_name",t),f.append("user_phone",n),f.append("user_project",a),f.append("user_site",i),f.append("user_budget",s),f.append("referer",p),f.append("location",u),f.append("marketing",l),f.append("template",c),r[0].files.length>0&&f.append("file",r[0].files[0]),$.ajax({type:"POST",url:"https://www.completo.ru/ajax/send_mail_copy_lead.php",cache:!1,contentType:!1,processData:!1,data:f,success:function(e){}}),"undefined"!=typeof fbq&&fbq("track","Lead"),!1}}),$("#new-form .form_btn").click((function(e){$(this).parents("#new-form").valid()&&(e.preventDefault(),$("#myModal").modal(),dataLayer.push({event:"send_successful_zayavka_sotrudnichestvo",form_name:"Запросить предложение"}),$(".modal").fadeIn().css("display","flex").addClass("open"),setTimeout((function(){$("#new-form").submit()}),200))})),$(".data-scroll").click((function(e){var t=$(this).attr("data-scroll"),o=$("#"+t).offset().top-70;$("body,html").animate({scrollTop:o},800)})),$(window).width()>1200)for(var n=1;n<=7;){var about_text=".about__p-"+n,about_num=".about__num-"+n,text_width=$(about_text).width();$(about_num).css("width",text_width),n++}if($(".main-section").slick({dots:!0,arrows:!0,adaptiveHeight:!0,infinite:!0,fade:!0,cssEase:"linear",swipe:!1,pauseOnHover:!1}),$(".main-section__lang-eng").click((function(e){e.preventDefault(),$(this).animate({opacity:0},100).css("pointer-events","none"),$(this).parent().addClass("no-animate"),$(".main-section__lang-ru").css("transform","translateX(51px)"),setTimeout((function(){document.location.href="/eng"}),600)})),$(".main-section__lang-ru").click((function(e){e.preventDefault(),$(this).animate({opacity:0},100).css("pointer-events","none"),$(".main-section__lang-eng").css("transform","translateX(-39px)"),setTimeout((function(){document.location.href="/"}),600)})),document.querySelector(".blog")){function getMyHashNow(e){return $.ajax({url:"/ajax/hash_hmac.php",type:"POST",datatype:"json",data:{EMAIL:e},success:function(e){}})}$(window).scroll((function(){jQuery(this).scrollTop(),$(".blog").offset().top})),$("#depesha").validate({errorPlacement:function(e,t){},submitHandler:function(e){var t=$(e).serialize(),o=$(e).attr("data-form"),i=$(e).attr("data-formtype"),a=$(e).find('input[name="firstname"]').val(),s=$(e).find('input[name="email"]').val(),n=$(e).find('input[name="fromsite"]').val(),r=$(e).find('input[name="mmerge4"]').val();return $(e).html('<div class="dep-descrip">Отправка данных на сервер ... <img class="loading" src="/php_old/loading.gif"></div>').css("color","#999"),$(e).find("input, button").attr("disabled",!0),$.ajax({type:"POST",url:"/ajax/leadsToGetResponse.php",data:t,success:function(e){}}),void 0!==typeof window.SCMFormWidjetOntime&&("function"==typeof SCMFormWidjetOntime&&(SCMFormWidjetOntime=new SCMFormWidjetOntime),SCMFormWidjetOntime.send({form_type:i,form:o,type_scm:"bind",email:s,firstname:a,fromsite:n,source:n,mmerge4:r},(function(e){e.data}))),$.ajax({url:"/ajax/subscribe.php",type:"POST",data:t,success:function(t){if($(e).before("<div class='dep-descrip'>"+t+"</div>"),$(".dep-title").empty(),$(e).empty().hide(),"Вы уже зарегистрированы!"!==t){dataLayer.push({event:"send_successful_podpiska_depesha"});var o=getMyHashNow(s),i=setInterval((function(){if(o){var e=JSON.parse(o.responseText);clearInterval(i),dataLayer.push({UserID:e.userId,event:"setUserID"}),carrotquest.auth(e.userId,e.hash)}}),500)}}}),$(e).find("input, button").attr("disabled",!1),this.resetForm(),e.reset(),!1}}),$(".blog__btn").click((function(e){e.preventDefault();let t=$(this).parents("#depesha");t.valid()&&setTimeout((function(){t.submit()}),200)}))}function responseTarifOwl(){$(window).width()>992?(this.options.items=3,this.options.stagePadding=0):(this.options.items=1,this.options.stagePadding=30)}function htmlspecialchars_decode(e,t){var o=0,i=0,a=!1;void 0===t&&(t=2),e=e.toString().replace(/&lt;/g,"<").replace(/&gt;/g,">");var s={ENT_NOQUOTES:0,ENT_HTML_QUOTE_SINGLE:1,ENT_HTML_QUOTE_DOUBLE:2,ENT_COMPAT:2,ENT_QUOTES:3,ENT_IGNORE:4};if(0===t&&(a=!0),"number"!=typeof t){for(t=[].concat(t),i=0;i<t.length;i++)0===s[t[i]]?a=!0:s[t[i]]&&(o|=s[t[i]]);t=o}return t&s.ENT_HTML_QUOTE_SINGLE&&(e=e.replace(/&#0*39;/g,"'")),a||(e=e.replace(/&quot;/g,'"')),e=e.replace(/&amp;/g,"&")}$(window).on("load",(function(){$(".clients-container__custom-scrollbar").mCustomScrollbar({axis:"x"})})),$(".owl-tarifs").owlCarousel({margin:15,items:1,stagePadding:30,dots:!0,onResize:responseTarifOwl,onInitialize:responseTarifOwl}),$(".tarif-card__next").click((function(){$(".owl-tarifs").trigger("next.owl.carousel")})),$(".tarif-card__prev").click((function(){$(".owl-tarifs").trigger("prev.owl.carousel")})),$(".owl-right").owlCarousel({loop:!0,autoWidth:!0,items:4,center:!0,dots:!1,autoplay:!0,smartSpeed:1e3,autoplayTimeout:3500,autoplayHoverPause:!0}),$(".owl-left").owlCarousel({loop:!0,autoWidth:!0,items:4,center:!0,dots:!1,autoplay:!0,smartSpeed:1e3,autoplayTimeout:3500,rtl:!0,autoplayHoverPause:!0}),document.querySelector(".digital-transformation")&&$(window).scroll((function(){var e=jQuery(this).scrollTop(),t=$(".digital-transformation").offset(),o=$(".digital-transformation").outerHeight(),i=t.top-300;e>i&&e<i+o&&$(".digital-transformation__circle").css("transform","translateY("+parseInt((e-i)/2)+"px")})),$(window).on("load",(function(){if(document.querySelector("#vk_groups")){setTimeout((function(){$.getScript("//vk.com/js/api/openapi.js?162").then((function(){VK.init({apiId:vk_groups,onlyWidgets:!0}),VK.Widgets.Group("vk_groups",{mode:3,width:"auto",height:"260",color3:"FECC2F"},66714099)})),$.getScript("https://apis.google.com/js/platform.js").then((function(){})),$("#fb-container").append('<div id="fb-root"></div> <script async defer crossorigin="anonymous" src="https://connect.facebook.net/ru_RU/sdk.js#xfbml=1&version=v4.0"><\/script><div class="fb-page" data-href="https://www.facebook.com/completo.ru" data-tabs="timeline" data-width="" data-height="300" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/completo.ru" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/completo.ru">Комплето - Системный Электронный Маркетинг</a></blockquote></div>')}),5e3)}})),document.querySelector(".maed")&&($(window).scroll((function(){var e=jQuery(this).scrollTop(),t=$(".maed").offset().top-300;e>t&&e<t+900&&$(".maed__paralax").css("transform","translateY("+parseInt((e-t)/5)+"px")})),$(".maed__custom-scrollbar").mCustomScrollbar({axis:"x"})),document.querySelector(".marketing")&&$(window).scroll((function(){var e=jQuery(this).scrollTop(),t=$(".marketing").offset(),o=$(".marketing").outerHeight(),i=t.top-300;e>i&&e<i+o&&$(".marketing__circle").css("transform","translateY("+parseInt((e-i)/2)+"px")})),$(".select2").select2({minimumResultsForSearch:1/0,dropdownPosition:"below"}),$(".select2").change((function(){var e=$("#myTabselect").val();$(".slick-slider-mob").slick("slickGoTo",e)})),$(".slick-slider-mob").slick({arrows:!1,dots:!0,slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:767,settings:{slidesToShow:2}},{breakpoint:530,settings:{slidesToShow:1,fade:!0,cssEase:"linear"}}]}),document.querySelector(".power")&&$(window).scroll((function(){var e=jQuery(this).scrollTop(),t=$(".power").offset(),o=($(".power").outerHeight(),t.top-300);e>o&&e<o+500&&$(".power-mouse-paralax__block").css("transform","translate("+parseInt((o-e)/10)+"px,"+parseInt((e-o)/10)+"px")})),$(window).on("load",(function(){$(".custom-scrollbar").mCustomScrollbar({axis:"x"})})),document.querySelector(".remove")&&$(window).scroll((function(){var e=jQuery(this).scrollTop(),t=$(".remove").offset(),o=($(".remove").outerHeight(),t.top-300);e>o&&e<o+500&&$(".remove-mouse-paralax__block").css("transform","translate("+parseInt((o-e)/10)+"px,"+parseInt((e-o)/10)+"px")})),$(window).on("load",(function(){$(".research__scroll-content").mCustomScrollbar({axis:"x"})})),$(".what-we-do__display-slider").slick({nextArrow:$(".what-we-do-btn-next"),prevArrow:$(".what-we-do-btn-prev"),fade:!0,autoplay:!0,cssEase:"linear"}),$(window).on("load",(function(){$(".custom-scrollbar").mCustomScrollbar({axis:"x"})})),$(window).resize((function(){$(window).width()<768&&!$(".mobile_slider").hasClass("slick-initialized")?$(".mobile_slider").slick({infinite:!0,arrows:!0,dots:!0,autoplay:!0,speed:800,slidesToShow:1,slidesToScroll:1}):$(window).width()>767&&$(".mobile_slider").hasClass("slick-initialized")&&$(".mobile_slider").slick("unslick")})),$(window).width()<768&&$(".mobile_slider").slick({infinite:!0,arrows:!0,pauseOnFocus:!1,pauseOnHover:!1,dots:!0,autoplay:!0,speed:800,slidesToShow:1,slidesToScroll:1}),$(".header-slider").slick({infinite:!0,arrows:!0,dots:!0,speed:800,fade:!0,autoplay:!0,slidesToScroll:1,slidesToShow:1,pauseOnHover:!1,pauseOnFocus:!1,cssEase:"linear"}),$(".profit__list a").click((function(e){if(e.preventDefault(),$(".profit__list li").removeClass("profit__list-active"),$(this).parent().addClass("profit__list-active"),$(window).width()>991){let e=$(this).attr("href"),t=$(e).offset().top-199;$("body,html").animate({scrollTop:t},800)}else{let e=$(this).attr("href");$(".profit__calc-container-item").removeClass("profit__calc-container-item-active"),$(e).addClass("profit__calc-container-item-active")}})),$(".profit__calc-percent").mask("#0%*",{reverse:!0}),$(".profit__calc-percent-2").mask("##.0%",{reverse:!0}),$(".profit__calc-price").mask("# ### ### р.",{reverse:!0}),$(".profit__calc-dealers").mask("00",{reverse:!0}),$(".profit__calc-coast").mask("#000",{reverse:!0}),$("#dealers-site input").on("input",(function(){let e=+$("#profit-1").val()*+$("#profit-2").val().slice(0,-2).replace(/\s/g,"");$("#dealers-site .profit__calc-result .num").text(e.toFixed(0).replace(/(\d)(?=(\d{3})+([^\d]|$))/g,"$1 "))})),$("#personal-seo input").on("input",(function(){let e=+$("#profit-3").val()*+$("#profit-4").val().slice(0,-2).replace(/\s/g,"")*+$("#profit-5").val();$("#personal-seo .profit__calc-result .num").text(e.toFixed(0).replace(/(\d)(?=(\d{3})+([^\d]|$))/g,"$1 "))})),$("#ad-item input").on("input",(function(){let e=+$("#profit-6").val()*+$("#profit-7").val().slice(0,-2).replace(/\s/g,"")*+$("#profit-8").val().slice(0,-2)/100*(+$("#profit-9").val().slice(0,-2).replace(/\s/g,"")/+$("#profit-10").val());$("#ad-item .profit__calc-result .num").text(e.toFixed(0).replace(/(\d)(?=(\d{3})+([^\d]|$))/g,"$1 "))})),$("#dealers-control input").on("input",(function(){let e=+$("#profit-11").val()*+$("#profit-12").val()*+$("#profit-13").val().slice(0,-2).replace(/\s/g,"")*((+$("#profit-14").val().slice(0,-1)-+$("#profit-15").val().slice(0,-1))/100);$("#dealers-control .profit__calc-result .num").text(e.toFixed(0).replace(/(\d)(?=(\d{3})+([^\d]|$))/g,"$1 "))})),document.querySelector(".profit")&&($(window).scroll((function(){let e=$(".profit").offset().top,t=$(".profit").outerHeight()-$(".profit__list").height()-$(".profit__title-container").height()-100;$(this).scrollTop()>=e&&$(this).scrollTop()<=e+t?($(".profit__title-absolute").addClass("fixed-title"),$(".profit__list-block").addClass("fixed-title")):($(".profit__title-absolute").removeClass("fixed-title"),$(".profit__list-block").removeClass("fixed-title"))})),$(".profit__calc-container-item").waypoint((function(e){if("down"===e){$(".profit__list li").removeClass("profit__list-active");var t=".profit__list a[href='#"+this.element.id+"']";$(t).parent().addClass("profit__list-active")}}),{offset:"450px"}),$(".profit__calc-container-item").waypoint((function(e){if("up"===e){$(".profit__list li").removeClass("profit__list-active");var t=".profit__list a[href='#"+this.element.id+"']";$(t).parent().addClass("profit__list-active")}}),{offset:"-450px"}),$(".profit__select").select2({minimumResultsForSearch:1/0,dropdownPosition:"below"}),$(".profit__select").change((function(){var e=$(this).val();$(".profit__calc-container-item").removeClass("profit__calc-container-item-active"),$(e).addClass("profit__calc-container-item-active")}))),$(".big-slick").slick({centerMode:!0,variableWidth:!0,dots:!0,responsive:[{breakpoint:991.98,settings:{slidesToShow:1,slidesToScroll:1,centerMode:!1,variableWidth:!1}}]}).on("beforeChange",((e,t,o,i)=>{o!==i&&document.querySelectorAll(".slick-center + .slick-cloned").forEach((e=>{setTimeout((()=>e.classList.add("slick-current","slick-center")))}))})),$(".step__list-item-link").click((function(e){e.preventDefault();let t=$(this).find(".step__list-item-link-text").text(),o=$(this).find(".step__list-item-link-num").text(),i=$(this).data("link");$(this).parent().hasClass("active")||(console.log(i),$(".step__list-item").removeClass("active"),$(this).parent().addClass("active"),$(".step__container").removeClass("step__container-active"),$(".step__container[data-show="+i+"]").addClass("step__container-active"),$(".step__heading-num").text(o),$(".step__heading-name").text(t),$(".step__carousel").slick("slickGoTo",parseInt(i)))})),$(".step__carousel").on("beforeChange",(function(e,t,o,i){if(console.log(i),!$(".step__list-item-link[data-link="+i+"]").parent().hasClass("active")){$(".step__list-item").removeClass("active"),$(".step__container").removeClass("step__container-active"),$(".step__container[data-show="+i+"]").addClass("step__container-active"),$(".step__list-item-link[data-link="+i+"]").parent().addClass("active");let e=$(".step__list-item-link[data-link="+i+"]").find(".step__list-item-link-text").text(),t=$(".step__list-item-link[data-link="+i+"]").find(".step__list-item-link-num").text();$(".step__heading-num").text(t),$(".step__heading-name").text(e)}})),$(".step__carousel").slick({infinite:!0,slidesToScroll:1,slidesToShow:1,dots:!1,arrows:!1,fade:!0,cssEase:"linear"}),$(".step__next").click((function(e){e.preventDefault(),$(".step__carousel").slick("slickNext")})),$(".step__prev").click((function(e){e.preventDefault(),$(".step__carousel").slick("slickPrev")})),$(".primary-head-slider").slick({infinite:!0,arrows:!0,dots:!0,speed:800,fade:!0,autoplay:!0,slidesToScroll:1,slidesToShow:1,pauseOnHover:!1,pauseOnFocus:!1,cssEase:"linear"}),document.querySelector(".primary-head-slider-block-razrabotka")&&($(window).scroll((function(){var e=jQuery(this).scrollTop(),t=$(".primary-head-slider-block").offset(),o=$(".primary-head-slider-block").outerHeight(),i=t.top;e>i&&e<i+o&&$(".primary-head-slider-block .paralax-item").css("transform","translateY("+parseInt(e-i)+"px")})),$(window).scroll((function(){var e=jQuery(this).scrollTop(),t=$(".make-sites-section-main").offset(),o=$(".make-sites-section-main").outerHeight(),i=t.top-350;e>i&&e<i+o+350?$(".make-sites-section-main .paralax-item").css("transform","translateY("+parseInt(e-i)+"px"):e<i&&$(".make-sites-section-main .paralax-item").css("transform","translateY(0px)")})),$(window).scroll((function(){var e=jQuery(this).scrollTop(),t=$(".make-sites-section").offset(),o=$(".make-sites-section").outerHeight(),i=t.top-325;e>i&&e<i+o+325?$(".make-sites-section .paralax-item").css("transform","translateY("+parseInt(e-i)+"px"):e<i&&$(".make-sites-section .paralax-item").css("transform","translateY(0px)")})),$(window).scroll((function(){var e=jQuery(this).scrollTop(),t=$(".no-typical").offset(),o=$(".no-typical").outerHeight(),i=t.top-325;e>i&&e<i+o+325?$(".no-typical .paralax-item").css("transform","translateY("+parseInt(e-i)+"px"):e<i&&$(".no-typical .paralax-item").css("transform","translateY(0px)")})),$(window).scroll((function(){var e=jQuery(this).scrollTop(),t=$(".steps").offset(),o=$(".steps").outerHeight(),i=t.top-325;e>i&&e<i+o+325?$(".steps .paralax-item").css("transform","translateY("+parseInt(e-i)+"px"):e<i&&$(".steps .paralax-item").css("transform","translateY(0px)")})),$(window).scroll((function(){var e=jQuery(this).scrollTop(),t=$(".coast").offset(),o=$(".coast").outerHeight(),i=t.top-325;e>i&&e<i+o+325?$(".coast .paralax-item").css("transform","translateY("+parseInt(e-i)+"px"):e<i&&$(".coast .paralax-item").css("transform","translateY(0px)")}))),$(".carousel__list-carousel").slick({infinite:!0,slidesToScroll:1,slidesToShow:1,dots:!0,pauseOnHover:!1,pauseOnFocus:!1,cssEase:"linear",autoplay:!0}),$(".carousel__list-block-item-link").click((function(e){if(e.preventDefault(),!$(this).parent().hasClass("active")){$(".carousel__list-block-item").removeClass("active");let e=$(this).attr("data-link");$(".carousel__list-carousel").slick("slickGoTo",parseInt(e)),$(this).parent().addClass("active")}})),$(".carousel__list-carousel").on("beforeChange",(function(e,t,o,i){$(".carousel__list-block-item-link[data-link="+i+"]").parent().hasClass("active")||($(".carousel__list-block-item").removeClass("active"),$(".carousel__list-block-item-link[data-link="+i+"]").parent().addClass("active"))})),document.querySelector(".primary-head-slider-block-digital")&&$(window).scroll((function(){var e=jQuery(this).scrollTop(),t=$(".primary-head-slider-block").offset(),o=$(".primary-head-slider-block").outerHeight(),i=t.top;e>i&&e<i+o&&$(".primary-head-slider-block .paralax-item").css("transform","translateY("+parseInt(e-i)+"px")})),$(window).on("load",(function(){$(window).scroll((function(){if($("#form-content").length){var e=$("#form-content").offset().top-80;$(this).scrollTop()>=e?$(".new-cases__fixed").addClass("new-cases__fixed-hide"):$(".new-cases__fixed").removeClass("new-cases__fixed-hide")}}))})),$(".carousel__list-block-crm .carousel__list-block-item-link").click((function(){let e=$(this).data("link");$(".crm-block").removeClass("crm-block-active"),$(".crm-block[data-show="+e+"]").addClass("crm-block-active")})),$(".carousel__list-carousel-crm").on("beforeChange",(function(e,t,o,i){$(".crm-block").removeClass("crm-block-active"),$(".crm-block[data-show="+i+"]").addClass("crm-block-active")})),$(".form-container-modal").each((function(){$(this).validate({errorPlacement:function(e,t){},submitHandler:function(e){let t=$(e).find('input[name="name"]').val(),o=$(e).find('input[name="email"]').val(),i=$(e).find('input[name="phone"]').val(),a=$(e).attr("data-form"),s=$(e).attr("data-formtype"),n=$(e).attr("data-param-name_form"),r=document.referrer,l=document.location.href,c={},d=$(e).attr("data-type");return c="subscribe"===d?{form_type:s,form:a,type_scm:"bind",email:o,firstname:t,source:l,fromsite:l,mmerge4:n}:{form_type:s,form:a,type_scm:"bind",user_mail:o,user_name:t,user_phone:i,name_form:n,user_from_url:l,location:l,referer:r},"subscribe"===d&&($.ajax({type:"POST",url:"/ajax/leadsToGetResponse.php",data:{firstname:t,email:o,fromsite:l,mmerge4:n},success:function(e){}}),$.post("/ajax/subscribe.php",{firstname:t,email:o,fromsite:l,listid:"ffdfc7979d",mmerge4:n})),void 0!==typeof window.SCMFormWidjetOntime&&("function"==typeof SCMFormWidjetOntime&&(SCMFormWidjetOntime=new SCMFormWidjetOntime),SCMFormWidjetOntime.send(c,(function(e){if(e.data.result_id&&"subscribe"!==d){var t=e.data.post;$.ajax({type:"POST",url:l.origin+"/ajax/send_mail_small.php",dataType:"json",data:t}),dataLayer.push({event:"send_successful_zayavka_sotrudnichestvo",form_name:n})}}))),!1}})})),$(document).on("hidden.bs.modal",".modal",(function(e){$(".modal:visible").length&&$("body").addClass("modal-open")})),$(".form-container-modal .form_btn, .form-container-modal-new .form_btn-new").click((function(e){e.preventDefault();let t=$(this).parents(".form-container-modal");t.valid()&&(setTimeout((function(){t.submit()}),200),t.find("input, button").attr("disabled",!0),($(this).parents(".system-modules-container__form-container").hasClass("subscribe__head-form")||$(this).parents(".system-modules-container__form-container").hasClass("show-modal-done")||t.hasClass("show-modal-done"))&&$("#subscribe-modal-done").modal())})),$(".form-container-modal-2").validate({errorPlacement:function(e,t){}}),$(".form-container-modal-2 .form_btn").click((function(e){if(e.preventDefault(),$(this).parents(".form-container-modal-2").valid()){let e=$(this).parents(".form-container-modal-2");setTimeout((function(){e.submit()}),200),$(this).parents(".form-container-modal-2").find("input, button").attr("disabled",!0),$("#subscribe-modal-done").modal()}})),$(".videocourse__review-carousel-big").slick({dots:!1,slidesToShow:1,slidesToScroll:1,speed:500,fade:!0,cssEase:"linear",asNavFor:".videocourse__review-carousel-small",prevArrow:".videocourse__review-carousel-arrow-left",nextArrow:".videocourse__review-carousel-arrow-right"}),$(".videocourse__review-carousel-small").slick({dots:!1,arrows:!1,slidesToShow:1,slidesToScroll:1,speed:500,asNavFor:".videocourse__review-carousel-big"}),$(".videocourse-cert-block__card-text-content").each((function(e,t){$clamp(t,{clamp:3})})),$(".videocourse-cert-block__card-input-radio").on("change",(function(){let e=$(this).attr("id").match(/\d+/)[0],t=$(".videocourse-cert-block__card-input-radio").length,o=$(".videocourse-cert-block__card-input-radio:checked").length,i="browsing_"+e,a=Cookies.get("total_browsing")||0;$(this).is(":checked")?($('.videocourses__timeline-list-item[data-num="'+e+'"]').addClass("videocourses__timeline-list-item-active"),$(".videocourses__timeline-num").text(o),Cookies.set(i,"true",{expires:365,path:""}),a++):($('.videocourses__timeline-list-item[data-num="'+e+'"]').removeClass("videocourses__timeline-list-item-active"),$(".videocourses__timeline-num").text(o),Cookies.remove(i,{path:""}),a--),t==o?($(".videocourse-cert-block-cert-link").addClass("videocourse-cert-block-cert-link-active"),$(".cert-modal-btn").removeClass("d-none"),$(".videocourse-modal").modal("hide"),$("#videocourses-cert-modal").modal()):($(".videocourse-cert-block-cert-link").removeClass("videocourse-cert-block-cert-link-active"),$(".cert-modal-btn").addClass("d-none")),a?Cookies.set("total_browsing",a,{expires:365,path:""}):Cookies.remove("total_browsing",{path:""})})),$(window).on("load",(function(){$(".custom-scrollbar-y").mCustomScrollbar({axis:"y"})})),document.addEventListener("DOMContentLoaded",(function(){})),$(".videocourse-cert-block__card-nav").click((function(){let e=$(this).data("current"),t=$(this).data("next");0!==$("#videocourses-video-"+t).length&&($("#videocourses-video-"+e).modal("hide"),$("#videocourses-video-"+t).modal("show"),setTimeout((function(){$("body").addClass("modal-open")}),500))})),$(".videocourse-cert-block-cert-link").click((function(e){e.preventDefault();let t=$(this).attr("href");$(this).parents(".videocourse-modal").modal("hide"),$(t).modal(),setTimeout((function(){$("body").addClass("modal-open")}),500)})),$(".videocourse-modal").on("show.bs.modal",(function(){let e=$(this).data("link");""===$(this).find(".videocourse-cert-block__card-video").attr("src")&&$(this).find(".videocourse-cert-block__card-video").attr("src",e)})),$(".videocourse-modal").on("hidden.bs.modal",(function(e){$(e.target).find("iframe").each((function(e,t){$(t).attr("src",$(t).attr("src"))}))})),$("._sendCertificate").validate({errorPlacement:function(e,t){},submitHandler:function(e){let t=$(e).find('input[name="surname"]').val(),o=$(e).find('input[name="name"]').val(),i=$(e).find('input[name="email"]').val(),a=($(e).find('input[name="videocourse"]').val(),$(e).find('input[name="sert"]').val()),s=$(e).find('input[name="type"]').val(),n=$(e).find('input[name="videocourse_name"]').val(),r=document.referrer,l=document.location.href;var c={user_fname:o,user_sname:t,user_mail:i,type:s,refer:r,clientid:gaCid,user_from_url:l,videocourse_name:n};$.ajax({type:"POST",url:"/ajax/certificate/create-pdf.php",data:c,success:function(e){},error:function(e){},complete:function(t){let o=$(e).parents(".form-certificate-modal-container");if("Курс пройден"===t.responseText)o.find(".form-certificate-modal-container-link a").replaceWith($('<div>Вам уже был выслан сертификат, если вы не получили его, свяжитесь с нами: <a href="mailto: press-room@completo.ru">press-room@completo.ru</a></div>')),$(this).parents(".form-certificate-modal-container").find(".form-certificate-modal-container-link").show();else{$(".videocourse-certificate-title").text("Вы настоящий "),$(".videocourse-certificate-title-yellow").text("молодец");let e=t.responseText;o.find(".form-certificate-modal-container-link a").attr("href",e),Cookies.set(a,"true",{expires:365,path:""}),dataLayer.push({eventCategory:"Видеокурс",eventAction:"Курс пройден",eventLabel:t.responseText,event:"gaEvent"})}o.find(".form-certificate-modal-container-link").show()}})}}),$("._sendCertificate .form_btn").click((function(e){let t=$(this).parents("._sendCertificate");t.valid()&&(e.preventDefault(),setTimeout((function(){t.submit()}),200),t.find("input, button").attr("disabled",!0),$(this).parents(".form-certificate-modal-block").hide())})),$(".whitepapers__trust-big-carousel-link").click((function(e){e.preventDefault(),$(".whitepapers__trust-iframe").attr("src",$(this).attr("href"));let t=$(this).parent().attr("data-carousel");$(".whitepapers__trust-big-carousel").slick("slickGoTo",t),console.log(t)})),$(".whitepapers__trust-big-carousel").slick({vertical:!0,dots:!1,slidesToShow:3,slidesToScroll:1,prevArrow:".whitepapers__trust__prev",nextArrow:".whitepapers__trust__next",responsive:[{breakpoint:991,settings:{slidesToShow:2,centerMode:!0}},{breakpoint:768,settings:{slidesToShow:1,vertical:!1,fade:!0,cssEase:"linear"}}]}),$(".whitepapers__trust-big-carousel").on("afterChange",(function(e,t,o,i){let a=$(".whitepapers__trust-big-carousel .slick-slide.slick-current.slick-active .whitepapers__trust-big-carousel-link").attr("href");$(".whitepapers__trust-iframe").attr("src",a)})),$(".form-content").each((function(){$(this).validate({errorPlacement:function(e,t){},submitHandler:function submitHandler(form){var validator=this,funcName=$(form).attr("data-success-callback");if("function"==typeof window[funcName]){let call=eval(funcName)(form);console.log(call)}var submitJS=$(form).attr("data-success-submit");return void 0!==submitJS&&submitJS.length>0&&(submitJS=htmlspecialchars_decode(submitJS),eval(submitJS)),$(form).find("input, button").attr("disabled",!1),"undefined"!=typeof fbq&&fbq("track","Contact"),form.reset(),!1}})})),$(".form-content .form_btn").click((function(e){let t=$(this).parents(".form-content");t.valid()&&(e.preventDefault(),setTimeout((function(){t.submit()}),200),t.find("input, button").attr("disabled",!0),t.hasClass("show-modal-done")&&($("#content-modal-done").modal(),$("#content-modal-done .modal-title h2").text("Спасибо за интерес!"),$("#content-modal-done .modal-body").removeClass("d-none")))})),$(".form-content .chat-bot").click((function(e){let t=$(this).parents(".form-content");t.valid()?t.find(".valid").removeClass("valid"):t.find(".error").removeClass("error"),t.hasClass("show-modal-done")&&($("#content-modal-done").modal(),$("#content-modal-done .modal-title h2").text("Спасибо! Мы отправили материалы вам в мессенджер."),$("#content-modal-done .modal-body").addClass("d-none"))})),$(".data-scroll").click((function(e){var t=$(this).attr("data-scroll"),o=$("#"+t).offset().top-70;$("body,html").animate({scrollTop:o},800)})),$(".animation").waypoint((function(e){var t=$(this.element).attr("data-animate");$(this.element).addClass("visible animated "+t)}),{offset:"60%"});class TabForB2B{constructor(e){this.selector=e,this.init()}init(){document.querySelectorAll(this.selector).forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault(),this.checkActive(e),this.changeContent(e)}))}))}changeContent(e){const t=e.dataset.href;e.closest(".tab-container-resist").querySelectorAll(".tab-el--container").forEach((e=>{e.querySelectorAll(".tab-el").forEach((e=>{e.dataset.id===t?e.classList.add("active"):e.classList.remove("active")}))}))}checkActive(e){if(e.classList.contains("b2b__tab-item-active"))return!1;e.classList.add("b2b__tab-item-active"),e.closest(".b2b__tabs-container").querySelectorAll(this.selector).forEach((t=>{t!==e&&t.classList.remove("b2b__tab-item-active")}))}}document.addEventListener("DOMContentLoaded",(()=>{new TabForB2B(".js-tab-b2b")})),$(window).on("load",(function(){$(window).width()>991?$("._customScrollMagazine").mCustomScrollbar({axis:"x"}):$("._customScrollMagazine").mCustomScrollbar({axis:"y"})})),$(document).ready((function(){$(".b2b__work-mobileList").each((function(e,t){$("._workMobileList_"+e).slick({arrows:!1,slidesToShow:2,slidesToScroll:1,infinite:!1,dots:!0,responsive:[{breakpoint:530,settings:{slidesToShow:1}}]})}))})),$("._marathonProgramSlider").slick({slidesToShow:3,slidesToScroll:1,infinite:!1,responsive:[{breakpoint:992,settings:{slidesToShow:2,dots:!0,arrows:!1}},{breakpoint:767,settings:{slidesToShow:1,dots:!0,arrows:!1}}]}),document.addEventListener("DOMContentLoaded",(function(){!function e(){var t=new Date,o=new Date(2022,1,5,1,0,0)-t+1e3;if(!(o<0)){var i=Math.floor(o/1e3%60),a=Math.floor(o/1e3/60%60),s=Math.floor(o/1e3/60/60/24),n=Math.floor(o/1e3/60/60%24+24*s);i<10&&(i="0"+i),a<10&&(a="0"+a),n<10&&(n="0"+n),i=String(i).split(""),a=String(a).split(""),n=String(n).split(""),$(".marathon__banner .timerBlock__seconds").find(".timerBlock__item").each((function(e,t){0===e?$(t).text(i[0]):$(t).text(i[1])})),$(".marathon__banner .timerBlock__minuts").find(".timerBlock__item").each((function(e,t){0===e?$(t).text(a[0]):$(t).text(a[1])})),$(".marathon__banner .timerBlock__hourse").find(".timerBlock__item").each((function(e,t){0===e?$(t).text(n[0]):$(t).text(n[1])})),$(".modal .timerBlock__seconds").find(".timerBlock__item").each((function(e,t){0===e?$(t).text(i[0]):$(t).text(i[1])})),$(".modal .timerBlock__minuts").find(".timerBlock__item").each((function(e,t){0===e?$(t).text(a[0]):$(t).text(a[1])})),$(".modal .timerBlock__hourse").find(".timerBlock__item").each((function(e,t){0===e?$(t).text(n[0]):$(t).text(n[1])})),setTimeout(e,1e3)}}()}));