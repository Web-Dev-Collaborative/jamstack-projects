---
title: Pricing
sections:
  - type: section_pricing
    template: section_pricing
    section_id: pricing
    title: Prix
    subtitle: "Attention, je coûte très cher"
    background: gray
    pricing_plans:
      - type: pricing_plan
        template: pricing_plan
        title: Basic
        subtitle: For small businesses
        price: 20€/h
        details: |-
          * Lorem ipsum dolor sit amet
          * Mauris a mi tincidunt
          * Suspendisse ut lacus
          * Etiam eget dui a augue
        actions:
          - type: action
            template: action
            label: Order Now
            url: /signup
            style: secondary
      - type: pricing_plan
        template: pricing_plan
        title: Professional
        subtitle: For medium-sized businesses
        price: 50€/h
        details: |-
          * Curabitur non nunc mollis
          * Duis a purus nec ligula pellentesque dolor
          * Pellentesque sit amet
          * Fusce tempus mi vitae luctus
          * Nullam sollicitudin ante
        highlight: true
        actions:
          - type: action
            template: action
            label: Order Now
            url: /signup
            style: primary
      - type: pricing_plan
        template: pricing_plan
        title: Enterprise
        subtitle: For very large businesses
        price: 100€/h
        details: |-
          * Vestibulum non eros quis
          * Aenean iaculis lorem
          * Mauris eleifend sapien
          * Phasellus lobortis risus laoreet quam
        actions:
          - type: action
            template: action
            label: Order Now
            url: /signup
            style: secondary
  - type: section_faq
    template: section_faq
    section_id: faq
    title: Frequently Asked Questions
    subtitle: "Phasellus luctus laoreet arcu, vel porta metus imperdiet sit amet."
    background: gray
    faq_items:
      - type: faq_item
        template: faq_item
        question: Mauris ut tellus id arcu sagittis lacinia quis vel justo?
        answer: >-
          Ut cursus, nunc vitae hendrerit viverra, massa ipsum congue quam, sed
          tempus mauris lacus sit amet nibh. Curabitur laoreet est maximus
          mollis feugiat. Praesent nibh libero, placerat et justo at, luctus
          tristique enim. Pellentesque habitant morbi tristique senectus et
          netus et malesuada fames ac turpis egestas.
      - type: faq_item
        template: faq_item
        question: Aliquam eget purus ante?
        answer: >-
          Nunc sollicitudin libero tincidunt felis pretium, consectetur aliquam
          eros placerat. Sed neque neque, bibendum a pulvinar id, pellentesque
          eget velit.
      - type: faq_item
        template: faq_item
        question: Sed scelerisque in ipsum eu sollicitudin?
        answer: >-
          Nullam quis ultrices ipsum. Integer eleifend laoreet quam, ac
          dignissim nisi mollis eget. Ut vitae nisi sit amet nisi suscipit
          dictum faucibus eget magna. Vivamus in hendrerit magna, non
          pellentesque metus. Morbi orci odio, dictum at efficitur sit amet,
          luctus in ipsum. Nunc pellentesque mi vel dui vulputate, a lobortis
          lacus venenatis. Phasellus pellentesque dolor id feugiat faucibus.
          Etiam vehicula nunc velit, in consequat nisl feugiat nec.
seo:
  type: stackbit_page_meta
  template: stackbit_page_meta
  title: Pricing
  description: This is the pricing page
  extra:
    - name: "og:type"
      value: website
      keyName: property
    - name: "og:title"
      value: Pricing
      keyName: property
    - name: "og:description"
      value: This is the pricing page
      keyName: property
    - name: "twitter:card"
      value: summary_large_image
    - name: "twitter:title"
      value: Pricing
    - name: "twitter:description"
      value: This is the pricing page
layout: landing
---
