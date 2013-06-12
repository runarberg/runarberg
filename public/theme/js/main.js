var NewAjaxLink = function (title, href) {
    // only create ajax links in `body` element with class of `ajax`
    // <body class="ajax"> 
    var links = $('body.index a[href="'+ window.location.origin + href +'"]');
    links.click(function () {
        History.pushState(null, title, href);
        update_active_cat();
        return false;
    });
}

var update_active_cat = function () {
    $('header h2 a.active').removeClass('active');
    $('body.index a[href="'+ window.location.origin +
                             window.location.pathname +'"]')
        .addClass('active');
}

var AddHashNav = function (hashmatch, container) {
    var update_active_hash = function () {
        $('li:has(a:regex(href, #))').removeClass('active');
        $('li:has(a[href$="'+ window.location.hash +'"])').addClass('active');
    };
    var change_from_hash = function () {
        update_active_hash();
        if ( !window.location.hash ) {
            // empty hash, show default header
            change_content(container, container + ' > header');
            return false;
        } else if ( window.location.hash.match(hashmatch) ) {
            change_content(container, window.location.hash);
            return false;
        }
    };
    change_from_hash();
    $(window).on('hashchange', function (e) {
        change_from_hash();
    });
}

var change_content = function (container, content) {
    $(container + ' >').addClass('hidden');
    $(content).removeClass('hidden');
}

var load_new_content = function (href) {
    $('div.content-container').load(href + ' section.content', function () {
        setup();
    });
}

var interactive_footnotes = function () {
    $('article div.entry-content').after($('<div class="interactive-footnote">'));
    var $footnote_container = $('div.interactive-footnote');

    var footnote_over = function () {
        // display footnote, assign top offset
        var footnote = $($(this).attr('href')).find('td').last().html(),
            screen_top = $(window).scrollTop(),
            screen_bottom = screen_top + $(window).height();
        $footnote_container.html(footnote);
        // fix the position of the container to fit in screen
        var ref_align = $(this).offset().top,
            footnote_height = $footnote_container.outerHeight(true);
        if ( ref_align - (footnote_height/2) >= screen_top &&
             ref_align + (footnote_height/2) <= screen_bottom ) {
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

var setup = function () {
    if ( $('body').hasClass('index') ) {
        NewAjaxLink('Rúnar Berg Baugsson Sigríðarson', '/');
        NewAjaxLink('Pælingar', '/paelingar/');
        NewAjaxLink('Sögur', '/sogur/');
        NewAjaxLink('Önnur ritverk', '/onnur-ritverk/');
        AddHashNav(/preview$/, 'section.category-content');
        update_active_cat();
    }
    if ( $('a.footnote-reference').length > 0 ) {
        interactive_footnotes();
    }
}

$(document).ready(function () {
    History.Adapter.bind(window, 'statechange', function () {
        var State = History.getState();
        History.log(State.data, State.title, State.url);
        load_new_content(State.url);
    });
    setup();
});
