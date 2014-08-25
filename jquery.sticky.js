$.fn.sticky = function( offset ) {
  this.css( "position", "relative" );
  var element = this
    , offset = offset || 0;
  $( window ).scroll( function( event ) {
      var initial_position = element.offset().top - ( parseInt( element.css( "top" ), 10 ) || 0);
      if( window.scrollY + offset > initial_position ) {
            element.css( "top", ( window.scrollY - initial_position + offset ) + "px" );
          } else {
                element.css( "top", "initial" );
              }
    } );
};
