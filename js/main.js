"use strict";

	$(function() {

  var siteSticky = function() {
		$(".js-sticky-header").sticky({topSpacing:0});
	};
	siteSticky();

	var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {
			
			var counter = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
      
    });

		$(window).resize(function() {
			var $this = $(this),
				w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();

			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		}) 

		// click outisde offcanvas
		$(document).mouseup(function(e) {
	    var container = $(".site-mobile-menu");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
	    }
		});
	}; 
	siteMenuClone();
	$('select').niceSelect();
	$('.change_from_to').on('click', function () {
		const $fromSelectWrapper = $('.from_select'); // First select
		const $toSelectWrapper = $('.to_select');   // Second select
	  
		const $fromSelect = $fromSelectWrapper.find('select');
		const $toSelect = $toSelectWrapper.find('select');
	  
		const fromValue = $fromSelect.val();
		const toSelect = $toSelect.val();
	  
		if (fromValue && $toSelect.find(`option[value="${fromValue}"]`).length > 0 && $fromSelect.find(`option[value="${toSelect}"]`).length > 0) {
		  $toSelect.val(fromValue).niceSelect('update');
		  $fromSelect.val(toSelect).niceSelect('update');
		}
	  });

	  const hearts = document.querySelectorAll(".toggle-fav");
	
	  hearts.forEach((icon) => {
		icon.addEventListener("click", function () {
		  icon.classList.toggle("fa-regular");
		  icon.classList.toggle("fa-solid");
		});
	  });
	  $(".room_carousal").owlCarousel({
		loop:true,
		margin:10,
		responsiveClass:true,
		lazyLoad: true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			600:{
				items:3,
				nav:false
			},
			1000:{
				items:3,
				nav:true,
				loop:false
			}
		}


			
	 }); 
	 $(".fav_tour_carousal").owlCarousel({
		loop:true,
		margin:10,
		responsiveClass:true,
		lazyLoad: true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			600:{
				items:3,
				nav:false
			},
			1000:{
				items:4,
				nav:true,
				loop:false
			}
		}


			
	 }); 

});
function toggleFilter(e) {
	const filterBox = e.currentTarget;
  
	// prevent toggle if clicked on reset button
	if (e.target.closest("button")) return;
  
	const content = filterBox.querySelector(".filterContent");
	const arrow = filterBox.querySelector(".arrow");
  
	if (!content || !arrow) return;
  
	content.style.display = content.style.display === "none" ? "flex" : "none";
	arrow.classList.toggle("up");
  }
  
  function resetFilters(e) {
	e.stopPropagation(); // so clicking Reset doesn't toggle the filter
	const filterBox = e.target.closest(".filter-box");
	filterBox.querySelectorAll('.checkbox input[type="checkbox"]').forEach(cb => cb.checked = false);
  }


  document.querySelectorAll('.air_desc').forEach(desc => {
	desc.addEventListener('click', function() {
	  const parent = this.closest('.air_show_my_child_description');
	  if (parent) {
		const detail = parent.querySelector('.travel_detail_data');
		if (detail) {
		  detail.classList.toggle('active'); // or toggle
		}
	  }
	});
  });
  
  
  
  

