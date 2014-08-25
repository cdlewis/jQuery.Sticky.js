$.fn.sticky = function( offset ) {
  this.css( "position", "relative" );
  var initial_position = this.offset().top
    , element = this
    , offset = offset || 0;
  $( window ).scroll( function( event ) {
      if( window.scrollY + offset > initial_position ) {
            element.css( "top", ( window.scrollY - initial_position + offset ) + "px" );
          } else {
                element.css( "top", "initial" );
              }
    } );
};
