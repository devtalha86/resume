$(document).ready(function () {



    // Mobile menu show/hide on scroll
    var prevScrollpos = window.pageYOffset;
        window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("mobile-navbar").style.top = "-65px";
        }
        
        else {
            document.getElementById("mobile-navbar").style.top = "0";
        }

       

        // For Desktop: When the user scrolls down 300px from the top of the document, slide down the navbar
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            document.getElementById("navbar").style.top = "0";
        } else {
            // document.getElementById("navbar").style.top = "-95px";
            // document.getElementById("mobile-navbar").style.top = "-65px";
        }

        prevScrollpos = currentScrollPos;

        
    }


    // Active menu on scroll 
      // Cache selectors
      var lastId,
        topMenu = $("#navbar, #mobile-navbar"),
        topMenuHeight = topMenu.outerHeight()+15,
        // All list items
        menuItems = topMenu.find("li a"),
        // Anchors corresponding to menu items
        scrollItems = menuItems.map(function(){
          var item = $($(this).attr("href"));
          if (item.length) { return item; }
        });

        // Bind click handler to menu items
        // so we can get a fancy scroll animation
        menuItems.click(function(e){
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
        $('html, body').stop().animate({ 
            scrollTop: offsetTop
        }, 800);
        e.preventDefault();
        });

        // Bind to scroll
        $(window).scroll(function(){
        // Get container scroll position
        var fromTop = $(this).scrollTop()+topMenuHeight;
        
        // Get id of current scroll item
        var cur = scrollItems.map(function(){
            if ($(this).offset().top < fromTop)
            return this;
        });
        // Get the id of the current element
        cur = cur[cur.length-1];
        var id = cur && cur.length ? cur[0].id : "";
        
        if (lastId !== id) {
            lastId = id;
            // Set/remove active class
            menuItems
                .removeClass("active")
                .filter("[href='#"+id+"']").addClass("active");
        }                   
        });

    
    // My Skills - SKill bar
    jQuery(document).ready(function(){
        jQuery('.skillbar').each(function(){
            jQuery(this).find('.skillbar-bar').animate({
                width:jQuery(this).attr('data-percent')
            },6000);
        });
    });


    // Opens menu in mobile 
    $('#mobileMenu--toggle, .overlay-menu ul li a').click(function() {
        
        $('#mobileMenu--toggle').toggleClass('active');
        $('#overlay').toggleClass('open');
    });


    // Go Back to top button
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 200) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
    
    

    


});