#!/usr/bin/env python
# -*- coding: utf-8 -*- #

import sys
sys.path.append('.')
from pelicanconf import *

SITEURL = 'http://runarberg.nfshost.com'

DELETE_OUTPUT_DIRECTORY = True

AUTHOR = u'Rúnar Berg'
SITENAME = u'Rúnar Berg Baugsson Sigríðarson'
SITESUBTITLE = u'Pælingar, sögur og önnur ritverk'

TIMEZONE = 'Atlantic/Reykjavik'
DATE_FORMATS = {
    'is': '%d. %B %Y',
}

DEFAULT_LANG = u'is'

PLUGIN_PATH = "/home/sterna/virtualenvs/pelican/pelican-plugins"
PLUGINS = ["extract_toc", "extract_footnotes", "html5"]

IGNORE_FILES = ['.#*', '*~', 'TODO']

DISPLAY_CATEGORIES_ON_MENU = True
ARTICLE_URL = '{category.slug}/{slug}.html'
ARTICLE_SAVE_AS = '{category.slug}/{slug}.html'
CATEGORY_URL = '{slug}/'
CATEGORY_SAVE_AS = '{slug}/index.html'


# Following items are often useful when publishing

# Uncomment following line for absolute URLs in production:
RELATIVE_URLS = False

#DISQUS_SITENAME = ""
#GOOGLE_ANALYTICS = ""
