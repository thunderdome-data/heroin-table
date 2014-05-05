
/*google analytics*/
    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-37303540-1']);
    _gaq.push(['_trackPageview']);

    (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();

/*add source and credit line*/
    var dfm_sources_credits = function(config) {
    //testing to make sure the div id is there
        if(typeof config.div_id === 'undefined') {
            var error_msg = "Warning: You haven't defined a div id for the sources and credits.";
            show_error(error_msg);
            return false;
        }
        var target_div = jQuery('#' + config.div_id);
    //testing to make sure the div id passed to us is actually in the document
        if(target_div.length === 0) {
            var error_msg = "Warning: A div with the id " + config.div_id + " isn't currently in your document. Perhaps it's misspelled?";
            show_error(error_msg);
            return false;
        }
        var text = [];
        //styling for the div
        var css = {
            'font': 'italic 11px Arial'
            ,'color': '#999'
            , 'margin': '10px 0 10px 0px'
            , 'border-top': '1px solid #e2e2e2'
            , 'padding': '5px 0 0 0',
           
            };
        if(typeof config.sources !== 'undefined' && config.sources && config.sources !== ''){
            text.push( ['Sources:',config.sources].join(' ') );
        }
        if(typeof config.credits !== 'undefined' && config.credits && config.credits !== ''){
            text.push( ['Credits:',config.credits].join(' ') );
        }
        jQuery(document).ready( function() {
            jQuery(target_div).html(text.join('<br />')).css(css);
            jQuery(target_div.selector + ' > a').css({'color':'#999'}); //to make links right color
        });
    }
    function show_error(error_msg) {
        if(typeof console !== 'undefined') {
            console.log(error_msg);
        }
        else {
            alert(error_msg);
        }
    
    }