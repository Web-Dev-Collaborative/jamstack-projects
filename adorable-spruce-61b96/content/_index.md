---
title: Home
sections:
  - type: section_hero
    template: section_hero
    section_id: hero
    title: Bienvenue sur le site de Morgane
    content: |
      *Site de test pour s'améliorer sur stackbit*
    image: /images/8_thumb.jpg
    image_alt: App preview
    actions:
      - type: action
        template: action
        label: Clique ici !!!!!
        url: /features
        style: primary
  - type: section_features
    template: section_features
    section_id: features
    title: Présentation
    subtitle: Je suis étudiante en marketing digital et j'aime les chats
    background: gray
    features:
      - type: feature_item
        template: feature_item
        title: Que puis-je vous apporter ?
        content: |
          Mes compétences en :

          *   webmarketing

          *   communication

          *   graphisme
        image: /images/7.jpg
        image_alt: App preview on a phone and tablet
        actions:
          - type: action
            template: action
            label: Viens cliquer là
            url: /features
            style: secondary
            has_icon: true
            icon: arrow-right
            icon_position: right
      - type: feature_item
        template: feature_item
        title: Awesome Feature of Your Services
        content: >-
          Etiam vel urna sed massa egestas vulputate eu a velit. Sed ut nisl nec
          sapien interdum luctus. Cras rhoncus condimentum metus sit amet
          auctor.
        image: images/feature2.png
        image_alt: App users welcoming a new member
        actions:
          - type: action
            template: action
            label: Learn More
            url: /features
            style: secondary
            has_icon: true
            icon: arrow-right
            icon_position: right
      - type: feature_item
        template: feature_item
        title: Cool Feature of Your Services
        content: >-
          In ante enim, lobortis quis congue vel, finibus sit amet mi. Aenean
          quis venenatis sem. Proin eget massa id metus eleifend maximus sit
          amet nec urna.
        image: images/feature3.png
        image_alt: App user profile preview
        actions:
          - type: action
            template: action
            label: Learn More
            url: /features
            style: secondary
            has_icon: true
            icon: arrow-right
            icon_position: right
  - type: section_reviews
    template: section_reviews
    section_id: reviews
    title: Testimonials
    subtitle: >-
      Aliquam malesuada ligula eget est fringilla blandit. Integer finibus
      semper libero id sodales.
    background: white
    reviews:
      - type: review_item
        template: review_item
        author: Son patron
        avatar: images/review1.jpg
        avatar_alt: Eric Widget's photo
        content: >-
          Morgane est un très bon élément elle a tellement apporté à notre
          entrepris.
      - type: review_item
        template: review_item
        author: Parsley Montana
        avatar: images/review2.jpg
        avatar_alt: Parsley Montana's photo
        content: >-
          Sed laoreet magna commodo libero euismod sodales. Nunc ac libero
          convallis, interdum ligula vel, pretium diam. Integer commodo sem at
          dui sollicitudin, vel posuere justo laoreet.
      - type: review_item
        template: review_item
        author: Jonquil Von Haggerston
        avatar: images/review3.jpg
        avatar_alt: Jonquil Von Haggerston's photo
        content: >-
          Integer consectetur purus neque, ac porttitor enim convallis vitae.
          Interdum et malesuada fames ac ante ipsum primis in faucibus.
  - type: section_cta
    template: section_cta
    section_id: call-to-action
    title: This Is Call To Action Block!
    subtitle: This is an optional description for the call to action block.
    actions:
      - type: action
        template: action
        label: Get Started
        url: /signup
        style: primary
  - type: section_posts
    template: section_posts
    section_id: recent-posts
    title: Latest Posts
    background: gray
seo:
  type: stackbit_page_meta
  template: stackbit_page_meta
  title: Stackbit Azimuth Theme
  description: The preview of the Azimuth theme
  extra:
    - name: "og:type"
      value: website
      keyName: property
    - name: "og:title"
      value: Stackbit Azimuth Theme
      keyName: property
    - name: "og:description"
      value: The preview of the Azimuth theme
      keyName: property
    - name: "og:image"
      value: images/hero.png
      keyName: property
      relativeUrl: true
    - name: "twitter:card"
      value: summary_large_image
    - name: "twitter:title"
      value: Stackbit Azimuth Theme
    - name: "twitter:description"
      value: The preview of the Azimuth theme
    - name: "twitter:image"
      value: images/hero.png
      relativeUrl: true
layout: landing
---
