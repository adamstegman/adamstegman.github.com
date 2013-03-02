# coding: UTF-8

module Nanoc3::Helpers

  # Provides functionality for building project pages, such as finding projects
  # and constructing feeds.
  #
  # This helper has a few requirements. First, all projects should have
  # the following attributes:
  #
  # * `kind` — Set to `"project"`
  #
  # * `created_at` — The project’s creation timestamp
  #
  # Some functions in this helper, such as the {#atom_feed} function, require
  # additional attributes to be set; these attributes are described in the
  # documentation for these functions.
  #
  # All “time” item attributes, site configuration attributes or method
  # parameters can either be a `Time` instance or a string in any format
  # parseable by `Time.parse`.
  #
  # The two main functions are {#sorted_projects} and {#atom_feed}.
  #
  # This module is based entirely on the Nanoc3::Helpers::Blogging helper,
  # modified to suit my needs.
  module Projects
    include Blogging

    # Returns an unsorted list of projects, i.e. items where the `kind`
    # attribute is set to `"project"`.
    #
    # @return [Array] An array containing all projects
    def projects
      @items.select { |item| item[:kind] == 'project' }
    end

    # Returns a sorted list of projects, i.e. items where the `kind`
    # attribute is set to `"project"`. Projects are sorted by descending
    # creation date, so newer projects appear before older ones.
    #
    # @return [Array] A sorted array containing all projects
    def sorted_projects
      require 'time'
      projects.sort_by do |project|
        attribute_to_time(project[:created_at])
      end.reverse
    end

    # Returns a sorted list of projects that have the given +status+. Projects
    # are sorted by descending creation date, so newer projects appear before
    # older ones.
    #
    # @param [Symbol,String] status the status of the desired projects
    #
    # @return [Array] a sorted array containing projects with the given
    #                 +status+.
    def sorted_projects_by_status(status)
      status = status.to_s
      sorted_projects.select { |project| project[:status] == status }
    end

    # Returns a sorted list of projects that do not have the given +status+.
    # Projects are sorted by descending creation date, so newer projects
    # appear before older ones.
    #
    # @param [Symbol,String] status the status the desired projects do not have
    #
    # @return [Hash<String, Array>] a Hash with sorted arrays containing
    #                               projects without the given +status+, keyed
    #                               by the status.
    def sorted_projects_without_status(status)
      projects = sorted_projects.group_by { |project| project[:status] }
      projects.delete status.to_s
      projects
    end

    # Returns the project's identifier without namespacing.
    #
    # @example /projects/read-link-later/
    #   base_identifier(project) #=> "read-link-later"
    #
    # @param [Nanoc3::Item] project
    #
    # @return [String,nil] the project's identifier without namespacing, or nil if none could be found.
    def base_identifier(project)
      match = /([^\/]+)\/\Z/.match(project.identifier)
      match[1] if match
    end
  end
end
