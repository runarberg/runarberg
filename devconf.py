#!/usr/bin/env python
# -*- coding: utf-8 -*- #

AUTHOR = u'Rúnar Berg'
SITENAME = u'Rúnar Berg Baugsson Sigríðarson'
SITESUBTITLE = u'Pælingar, sögur og önnur ritverk'
SITEURL = 'http://127.0.0.1:8000'

PATH = 'content'

TIMEZONE = 'Atlantic/Reykjavik'
DATE_FORMATS = {
    'is': '%d. %B %Y',
}

DEFAULT_LANG = u'is'

PLUGIN_PATH = "/home/sterna/virtualenvs/pelican/pelican-plugins"
PLUGINS = ["assets", "extract_toc", "extract_footnotes", "html5"]
THEME = "preprocessors"

IGNORE_FILES = ['.#*', '*~', 'TODO']

RELATIVE_URLS = False
DISPLAY_CATEGORIES_ON_MENU = True
ARTICLE_URL = '{category.slug}/{slug}.html'
ARTICLE_SAVE_AS = '{category.slug}/{slug}.html'
CATEGORY_URL = '{slug}/'
CATEGORY_SAVE_AS = '{slug}/index.html'

# Blogroll
LINKS =  (('Pelican', 'http://docs.notmyidea.org/alexis/pelican/'),
          ('Python.org', 'http://python.org'),
          ('Jinja2', 'http://jinja.pocoo.org'),
          ('some link', 'http://doesnotexist.com'),
          ('You can modify those links in your config file', '#'),)

# Social widget
SOCIAL = (('You can add links in your config file', '#'),
          ('Another social link', '#'),)

DEFAULT_PAGINATION = False

