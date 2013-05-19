var floating_toc = function () {
    var $toc = $('nav.contents.topic'),
        original_top = $toc.offset().top,
        page_header_height = $('article').offset().top;

    if ( $(window).scrollTop() > original_top ) {
        $toc.css({
            'position': 'fixed',
            'top': 0
        });
    }
    $(window).scroll(function (e) {
        if ( $(this).scrollTop() > original_top ) {
            if ( $toc.css('position') === 'absolute' ) {
                $toc.css({
                    'position': 'fixed',
                    'top': 0
                });
            }
        } else {
            if ( $toc.css('position') === 'fixed' ){
                $toc.css({
                    'position': 'absolute',
                    'top': ''
                });
            }
        }
    });
}

var interactive_toc = function () {
    // Make finished sections have the class of 'finished' in the ToC
    var $sections = $('article section'),
        $toc_a = $('nav.contents.topic a');

    var marked_finished = function () {
        // find sections that are above the current scroll position and
        // collect them in an array of strings
        var finished_sects = $sections.filter(function (a) {
                return ( $(this).offset().top < $(window).scrollTop() + 2 );
            }).map(function () {
                return this.id;
            }).get();
        // Create a regular expression that contains a list of the finished
        // sections
        var re = new RegExp( '\\b' + finished_sects.join('\\b|\\b') + '\\b');
        // the active section is the last of the finished sections
        var active_sect = new RegExp(finished_sects[finished_sects.length-1]);
        $toc_a.each(function () {
            // If the ToC contains a link to a sections that te RE found
            if ( re.test($(this).attr('href')) && finished_sects.length > 0 ) {
                $(this).addClass('finished');
                // add a class of 'active' to the link that points to the
                // latest finished section
                if ( active_sect.test($(this).attr('href')) ) {
                    $(this).addClass('active');
                } else {
                    $(this).removeClass('active');
                }
            } else {
                $(this).removeClass('finished active');
            }
        });
    }

    marked_finished();
    
    $(window).scroll(function (e) {
        marked_finished();
    });
}

var interactive_footnotes = function () {
    var $footnote_container = $('div.interactive-footnote');

    var footnote_over = function () {
        // display footnote, assign top offset
        var footnote = $($(this).attr('href')).find('td').last().text(),
            screen_top = $(window).scrollTop(),
            screen_bottom = screen_top + $(window).height();
        $footnote_container.text(footnote);
        // fix the position of the container to fit in screen
        var ref_align = $(this).offset().top,
            footnote_height = $footnote_container.height();
        if ( ref_align - (footnote_height/2) > screen_top &&
             ref_align + (footnote_height/2) < screen_bottom ) {
            $footnote_container.css('top', ref_align - (footnote_height/2));
        } else if ( ref_align - (footnote_height/2) < screen_top ) {
            $footnote_container.css('top', screen_top);
        } else if ( ref_align + (footnote_height/2) > screen_bottom ) {
            $footnote_container.css('top', screen_bottom - footnote_height);
        }
    }
    var footnote_off = function () {
        var $a_ref = $(this);
        var hor = $(this).offset().left + $(this).width();
        $(document).on('mousemove', function (e) {
            //mousemove left
            if ( (! $('.footnote-reference:hover').length > 0) &&
                 (! $('.interactive-footnote:hover').length > 0) &&
                 e.pageX < hor ) {
                // remove footnote content
                $footnote_container.text('').css('top', '');
                hor = null;
            } else {
                hor = e.pageX;
            }
        });
    }
    $('a.footnote-reference').hover(footnote_over, footnote_off);
}

$(document).ready(function () {
    floating_toc();
    interactive_toc();
    interactive_footnotes();
});