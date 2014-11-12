( function( $ ) {
  $.fn.sticky = function( offset, limit ) {
    this.css( "position", "relative" );
    var element = this
      , offset = offset || 0;
    $( window ).scroll( function( event ) {
      var initial_position = element.offset().top - ( parseInt( element.css( "top" ), 10 ) || 0);
      if( ( window.pageYOffset + offset ) > initial_position ) {
        if( typeof( limit ) !== 'undefined' && ( ( window.pageYOffset + offset + element.height() ) > limit.offset().top ) ) {
          return; // do nothing
        } else {
          element.css( "top", Math.floor( window.pageYOffset - initial_position + offset ) + "px" );
        }
      } else {
        element.css( "top", "initial" );
      }
    } );
  };
} )( jQuery );
