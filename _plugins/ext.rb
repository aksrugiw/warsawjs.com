module Jekyll
  module StringFilter
    def capitalize(input)
      return input.capitalize
    end
  end
end

Liquid::Template.register_filter(Jekyll::StringFilter)
