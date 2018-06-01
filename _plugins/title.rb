module Jekyll
    class Title < Liquid::Tag
        def render(context)
            site = context.registers[:site]
            page = context.registers[:page]
            config = site.config

            page_title = page['title']
            page_tag = page['tag']
            title = config['title']

            if page_title
                title = "#{page_title} | #{title}"
            elsif page_tag
                title = "Tag: #{page_tag} | #{title}"
            end

            # Normalize apostrophe
            title = title.gsub(/\"/, "\'")

            # Special behaviour for `<em>xxx</em> yyy`
            title = title.gsub(/\<em\>/, '').gsub(/\<\/em\>/, '')

            title
        end
    end
end

Liquid::Template.register_tag('title', Jekyll::Title)
