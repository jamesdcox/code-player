
            
            function updateOutput() {
                
                $("iframe").contents().find("html").html("<html><head><style type='text/css'>"+$("#css-panel").val() + "</style></head><body>" + $("#html-panel").val() + "</body></html>");
                
                document.getElementById("output-panel").contentWindow.eval($("#java-panel").val());
                
            }
            
            $(".menu-button").hover(function(){
                
                $(this).css('cursor','pointer');
                
                $(this).addClass ("hightlightedColor");
                
            },function() {
                
                 $(this).removeClass("hightlightedColor");
                                   
            });
            
            
            $(".menu-button").click(function(){
                
                $(this).toggleClass("active");
                
                $(this).removeClass("hightlightedColor");
                
                var panelId = $(this).attr("id") + "-panel";
                
                $("#" + panelId).toggleClass("hidden");
                
                var activePanels = 4-($('.hidden').length);
                
                $(".panel").width (($( window ).width() / activePanels) - 4);
                
                
                
            });
            
            
            $(".panel").height ($( window ).height() - $("#topBar-Container").height() - 5);
            
            $(".panel").width (($( window ).width() / 2) - 3);
            
            updateOutput();
            
            
            $("textarea").on('change keyup paste', function() {
                
                updateOutput();
            
            });
            
    
