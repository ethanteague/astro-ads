
var containerTwo = '<div class="astro-ads-container1 astro-ads-container astro-ads-container-second">\
<span class="astro-ads-container-tag-left">\
<div style="clear:both"></div>\
</span>\
<span class="astro-ads-container-tag-right">\
<span class="astro-ads-container-tag-description">Sepia and Red Golden Roots Tote</span>\
<h4 class="astro-ads-container-tag-header astro-ads-container-tag-attn">$175.00</h4>\
</span>\
<a href="https://astrologia.store/products/sepia-and-red-golden-roots-tote" target="_blank">\
<span class="astro-ads-container-cta">SHOP</span>\
</a>\
</div>\
\
<div class="astro-ads-container2 astro-ads-container astro-ads-container-second">\
<span class="astro-ads-container-tag-left">\
<div style="clear:both"></div>\
</span>\
<span class="astro-ads-container-tag-right">\
<span class="astro-ads-container-tag-description">I Am Free Yoga Mat</span>\
<h4 class="astro-ads-container-tag-header astro-ads-container-tag-attn">$80.00</h4>\
</span>\
<a href="https://astrologia.store/products/i-am-free-yoga-mat" target="_blank">\
<span class="astro-ads-container-cta">SHOP</span>\
</a>\
</div>\
\
<div class="astro-ads-container3 astro-ads-container astro-ads-container-second">\
<span class="astro-ads-container-tag-left">\
<div style="clear:both"></div>\
</span>\
<span class="astro-ads-container-tag-right">\
\
<span class="astro-ads-container-tag-description">Stencil Teal Large Tote</span>\
<h4 class="astro-ads-container-tag-header astro-ads-container-tag-attn">$395.00</h4>\
</span>\
\
<a href="https://astrologia.store/products/stencil-teal-large-tote" target="_blank">\
<span class="astro-ads-container-cta">SHOP</span>\
</a>\
</div>';

var containerOne = '<div class="astro-ads-container1 astro-ads-container">\
<span class="astro-ads-container-tag-left">\
<div style="clear:both"></div>\
</span>\
<span class="astro-ads-container-tag-right">\
<span class="astro-ads-container-tag-description">Sterling Silver Black Onyx & Emerald Stone Choker Necklace and Earring Set</span>\
<h4 class="astro-ads-container-tag-header astro-ads-container-tag-attn">$75.00</h4>\
</span>\
<a href="https://astrologia.store/products/sterling-silver-black-onyx-emerald-stone-choker-necklace-and-earring-set" target="_blank">\
<span class="astro-ads-container-cta">SHOP</span>\
</a>\
</div>\
\
<div class="astro-ads-container2 astro-ads-container">\
<span class="astro-ads-container-tag-left">\
<div style="clear:both"></div>\
</span>\
<span class="astro-ads-container-tag-right">\
<span class="astro-ads-container-tag-description">Tanzanite and Citrine Bracelet in 14k Gold Plated Sterling Silver~ Double Strand</span>\
<h4 class="astro-ads-container-tag-header astro-ads-container-tag-attn">$84.95</h4>\
</span>\
<a href="https://astrologia.store/products/tanzanite-and-citrine-bracelet-sterling-silver-14k-gold-plated-double-strand" target="_blank">\
<span class="astro-ads-container-cta">SHOP</span>\
</a>\
</div>\
\
<div class="astro-ads-container3 astro-ads-container">\
<span class="astro-ads-container-tag-left">\
<div style="clear:both"></div>\
</span>\
<span class="astro-ads-container-tag-right">\
\
<span class="astro-ads-container-tag-description">Turquoise Hamsa Sterling Silver Necklace: Length 16"+2"</span>\
<h4 class="astro-ads-container-tag-header astro-ads-container-tag-attn">$56.00</h4>\
</span>\
\
<a href="https://astrologia.store/products/fronay-collection-turquoise-hamsa-sterling-silver-necklace-length-16-2" target="_blank">\
<span class="astro-ads-container-cta">SHOP</span>\
</a>\
</div>';

var data = '<div class="astro-ads-container-wrap">' +
  '<h3 class="astro-ads-container-tag-header astro-ads-container-tag-collection">MTrue\'s Picks</h3>' +
  containerTwo +
  '<div style="clear:both"></div></div>';

window.onload = function () {
  var targetItem = document.getElementById('astro-ads');
  targetItem.innerHTML = data;
}

