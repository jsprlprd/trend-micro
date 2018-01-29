var fakewaffle = ( function ( $, fakewaffle ) {
	'use strict';

	fakewaffle.responsivePills = function ( collapseDisplayed ) {

		fakewaffle.currentPosition = 'pills';

		var tabGroups = $( '.nav-pills.responsive-pills' );
		var hidden    = '';
		var visible   = '';
		var activeTab = '';

		if ( collapseDisplayed === undefined ) {
			collapseDisplayed = [ 'xs', 'sm' ];
		}

		$.each( collapseDisplayed, function () {
			hidden  += ' hidden-' + this;
			visible += ' visible-' + this;
		} );

		$.each( tabGroups, function ( index ) {
			var collapseDiv;
			var $tabGroup = $( this );
			var pills      = $tabGroup.find( 'li a' );

			if ( $tabGroup.attr( 'id' ) === undefined ) {
				$tabGroup.attr( 'id', 'pills-' + index );
			}

			collapseDiv = $( '<div></div>', {
				'class' : 'col-md-12 panel-group responsive-pills' + visible,
				'id'    : 'collapse-' + $tabGroup.attr( 'id' )
			} );

			$.each( pills, function () {
				var $this          = $( this );
				var oldLinkClass   = $this.attr( 'class' ) === undefined ? '' : $this.attr( 'class' );
				var newLinkClass   = 'accordion-toggle';
				var oldParentClass = $this.parent().attr( 'class' ) === undefined ? '' : $this.parent().attr( 'class' );
				var newParentClass = 'panel panel-default';
				var newHash        = $this.get( 0 ).hash.replace( '#', 'collapse-' );

				if ( oldLinkClass.length > 0 ) {
					newLinkClass += ' ' + oldLinkClass;
				}

				if ( oldParentClass.length > 0 ) {
					oldParentClass = oldParentClass.replace( /\bactive\b/g, '' );
					newParentClass += ' ' + oldParentClass;
					newParentClass = newParentClass.replace( /\s{2,}/g, ' ' );
					newParentClass = newParentClass.replace( /^\s+|\s+$/g, '' );
				}

				if ( $this.parent().hasClass( 'active' ) ) {
					activeTab = '#' + newHash;
				}

				collapseDiv.append(
					$( '<div>' ).attr( 'class', newParentClass ).html(
						$( '<div>' ).attr( 'class', 'panel-heading' ).html(
							$( '<h4>' ).attr( 'class', 'panel-title' ).html(
								$( '<a>', {
									'class'       : newLinkClass,
									'data-toggle' : 'collapse',
									'data-parent' : '#collapse-' + $tabGroup.attr( 'id' ),
									'href'        : '#' + newHash,
									'html'        : $this.html()
								} )
							)
						)
					).append(
						$( '<div>', {
							'id'    : newHash,
							'class' : 'panel-collapse collapse'
						} )
					)
				);
			} );

			$tabGroup.next().after( collapseDiv );
			$tabGroup.addClass( hidden );
			$( '.tab-content.responsive-pills' ).addClass( hidden );

			if ( activeTab ) {
				$( activeTab ).collapse( 'show' );
			}
		} );

		fakewaffle.checkResize();
		fakewaffle.bindTabToCollapse();
	};

	fakewaffle.checkResize = function () {

		if ( $( '.panel-group.responsive-pills' ).is( ':visible' ) === true && fakewaffle.currentPosition === 'pills' ) {
			fakewaffle.tabToPanel();
			fakewaffle.currentPosition = 'panel';
		} else if ( $( '.panel-group.responsive-pills' ).is( ':visible' ) === false && fakewaffle.currentPosition === 'panel' ) {
			fakewaffle.panelToTab();
			fakewaffle.currentPosition = 'pills';
		}

	};

	fakewaffle.tabToPanel = function () {

		var tabGroups = $( '.nav-pills.responsive-pills' );

		$.each( tabGroups, function ( index, tabGroup ) {

			// Find the tab
			var tabContents = $( tabGroup ).next( '.tab-content' ).find( '.tab-pane' );

			$.each( tabContents, function ( index, tabContent ) {
				// Find the id to move the element to
				var destinationId = $( tabContent ).attr( 'id' ).replace ( /^/, '#collapse-' );

				// Convert tab to panel and move to destination
				$( tabContent )
					.removeClass( 'tab-pane' )
					.addClass( 'panel-body fw-previous-tab-pane' )
					.appendTo( $( destinationId ) );

			} );

		} );

	};

	fakewaffle.panelToTab = function () {

		var panelGroups = $( '.panel-group.responsive-pills' );

		$.each( panelGroups, function ( index, panelGroup ) {

			var destinationId = $( panelGroup ).attr( 'id' ).replace( 'collapse-', '#' );
			var destination   = $( destinationId ).next( '.tab-content' )[ 0 ];

			// Find the panel contents
			var panelContents = $( panelGroup ).find( '.panel-body.fw-previous-tab-pane' );

			// Convert to tab and move to destination
			panelContents
				.removeClass( 'panel-body fw-previous-tab-pane' )
				.addClass( 'tab-pane' )
				.appendTo( $( destination ) );

		} );

	};

	fakewaffle.bindTabToCollapse = function () {

		var pills     = $( '.nav-pills.responsive-pills' ).find( 'li a' );
		var collapse = $( '.panel-group.responsive-pills' ).find( '.panel-collapse' );

		// Toggle the panels when the associated tab is toggled
		pills.on( 'shown.bs.tab', function ( e ) {

			if (fakewaffle.currentPosition === 'pills') {
				var $current  = $( e.currentTarget.hash.replace( /#/, '#collapse-' ) );
				$current.collapse( 'show' );

				if ( e.relatedTarget ) {
					var $previous = $( e.relatedTarget.hash.replace( /#/, '#collapse-' ) );
					$previous.collapse( 'hide' );
				}
			}

		} );

		// Toggle the tab when the associated panel is toggled
		collapse.on( 'shown.bs.collapse', function ( e ) {

			if (fakewaffle.currentPosition === 'panel') {
				// Activate current pills
				var current = $( e.target ).context.id.replace( /collapse-/g, '#' );
				$( 'a[href="' + current + '"]' ).tab( 'show' );

				// Update the content with active
				var panelGroup = $( e.currentTarget ).closest( '.panel-group.responsive-pills' );
				$( panelGroup ).find( '.panel-body' ).removeClass( 'active' );
				$( e.currentTarget ).find( '.panel-body' ).addClass( 'active' );
			}

		} );
	};

	$( window ).resize( function () {
		fakewaffle.checkResize();
	} );

	return fakewaffle;
}( window.jQuery, fakewaffle || { } ) );
