$.fn.sticky = function( offset ) {
  this.css( "position", "relative" );
  var initial_position = this.offset().top + ( offset || 0 )
    , element = this;
  $( window ).scroll( function( event ) {
    if( window.scrollY > initial_position ) {
      element.css( "top", ( window.scrollY - initial_position ) + "px" );
    }
  } );
};

