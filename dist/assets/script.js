// Add set one.
var containerOne = '<div class="astro-ads-container1 astro-ads-container astro-ads-container-second">\
<span class="astro-ads-container-tag-left">\
<div style="clear:both"></div>\
</span>\
<span class="astro-ads-container-tag-right">\
<span class="astro-ads-container-tag-description">Sepia and Red Golden Roots Tote</span>\
<h4 class="astro-ads-container-tag-header astro-ads-container-tag-attn">$175.00</h4>\
</span>\
<a href="https://astrologia.store/products/sepia-and-red-golden-roots-tote?afmc=1a" target="_blank">\
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
<a href="https://astrologia.store/products/i-am-free-yoga-mat?afmc=1a" target="_blank">\
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
<a href="https://astrologia.store/products/stencil-teal-large-tote?afmc=1a" target="_blank">\
<span class="astro-ads-container-cta">SHOP</span>\
</a>\
</div>';

// Add set two.
var containerTwo = '<div class="astro-ads-container1 astro-ads-container">\
<span class="astro-ads-container-tag-left">\
<div style="clear:both"></div>\
</span>\
<span class="astro-ads-container-tag-right">\
<span class="astro-ads-container-tag-description">Sterling Silver Black Onyx & Emerald Stone Choker Necklace and Earring Set</span>\
<h4 class="astro-ads-container-tag-header astro-ads-container-tag-attn">$75.00</h4>\
</span>\
<a href="https://astrologia.store/products/sterling-silver-black-onyx-emerald-stone-choker-necklace-and-earring-set?afmc=1a" target="_blank">\
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
<a href="https://astrologia.store/products/tanzanite-and-citrine-bracelet-sterling-silver-14k-gold-plated-double-strand?afmc=1a" target="_blank">\
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
<a href="https://astrologia.store/products/fronay-collection-turquoise-hamsa-sterling-silver-necklace-length-16-2?afmc=1a" target="_blank">\
<span class="astro-ads-container-cta">SHOP</span>\
</a>\
</div>';

// Determine odd or even counter.
function isEven(value) {
  if (value % 2 == 0) {
    return true;
  }
  else {
    return false;
  }
}

// Change out our items every few seconds.
var counter = 0;
setInterval(change, 3000);
function change() {
  if (isEven(counter)) {
    document.getElementById('astro-ads-target').innerHTML = '<h3 id="astro-header-set" class="astro-ads-container-tag-header astro-ads-container-tag-collection">MTrue\'s Picks</h3>' +
      containerOne +
      '<div style="clear:both"></div>';
  }
  else {
    document.getElementById('astro-ads-target').innerHTML = '<h3 id="astro-header-set" class="astro-ads-container-tag-header astro-ads-container-tag-collection">MTrue\'s Picks</h3>' +
      containerTwo +
      '<div style="clear:both"></div>';
  }

  counter++;
}

// Plug our add html into var.
var data = '<div id="astro-ads-target" class="astro-ads-container-wrap"><h3 id="astro-header-set" class="astro-ads-container-tag-header astro-ads-container-tag-collection">MTrue\'s Picks</h3>' +
  containerTwo +
  '<div style="clear:both"></div></div>';
if (document.getElementById('astro-header-set') != null) {
  var data = '<div id="astro-ads-target" class="astro-ads-container-wrap"></div>';
}

// Plug our add html into dom.
window.onload = function () {
  var targetItem = document.getElementById('astro-ads');
  targetItem.innerHTML = data;
}

