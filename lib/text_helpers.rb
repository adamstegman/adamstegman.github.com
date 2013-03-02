# coding: UTF-8

module Nanoc3::Helpers
  # Text helpers to be used anywhere in the application.
  module TextHelpers
    # Capitalizes each word in +text+.
    #
    # @param [String] a string to title-case
    # @return [String] +text+ converted to title case
    def titleize(text)
      text.split(/[ -]/).map(&:capitalize).join(' ')
    end
  end
end
