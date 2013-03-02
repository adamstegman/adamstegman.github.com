# coding: UTF-8

module Nanoc3::Helpers
  # Renders partials in the partials/ subdirectory of the working directory.
  module Partials
    HAML_OPTIONS = { :format => :html5 }

    # Renders the given partial with the given variables in context.
    def render_partial(partial_name, context = {})
      template = File.read(File.join('partials', "#{partial_name}.haml"))
      # TODO: build same context that Nanoc uses
      Haml::Engine.new(template, HAML_OPTIONS).render(Object.new, context)
    end
  end
end
