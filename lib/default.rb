# coding: UTF-8

# All files in the 'lib' directory will be loaded
# before nanoc starts compiling.
#
# http://nanoc.stoneship.org/docs/4-basic-concepts/#helpers

require File.expand_path(File.dirname(__FILE__)) + '/text_helpers'
require File.expand_path(File.dirname(__FILE__)) + '/projects'

include Nanoc3::Helpers::TextHelpers
include Nanoc3::Helpers::LinkTo
include Nanoc3::Helpers::Rendering
include Nanoc3::Helpers::Projects
