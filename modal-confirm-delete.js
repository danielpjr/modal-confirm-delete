/**
 * @developer Daniel Pierobon Jr
 * @email danielpjr80@gmail.com
 * @created 09/05/18 19:16
 *
 * @repository https://github.com/danielpjr/modal-confirm-delete
 *
 * @dependencies [jQuery] https://github.com/jquery/jquery
 * @dependencies [Bootstrap] https://github.com/twbs/bootstrap
 * @dependencies [Magnific-Popup] https://github.com/dimsemenov/Magnific-Popup
 * @dependencies [Animate.css] https://github.com/daneden/animate.css
 * @dependencies [FortAwesome] https://github.com/FortAwesome/Font-Awesome
 *
 */

;(function( $, window, document, undefined ) {

    'use strict';

    $.fn.dpjModalDelete = function( options ) {

        var _settings = $.extend(
            {},
            {/*//TODO: Defaults*/},
            options ),
            _modal = $( '#ag-generic-delete-modal' ) || $(),
            _self = this;

        if( !_modal.get( 0 ) )
        {
            _modal = $(
                '<div id="ag-generic-delete-modal" ' +
                '     class="modal-block modal-full-color modal-block-danger modal-block-sm mfp-hide animated flipInX">' +
                ' <section class="card">' +
                '  <div class="card-body text-center">' +
                '    <div class="modal-icon center">' +
                '     <i class="fa fa-question-circle"></i>' +
                '    </div>' +
                '    <div class="modal-text">' +
                '     <h4>Você está prestes a excluir este item.</h4>' +
                '     <p>Tem certeza que deseja remove-lo ?</p>' +
                '    </div>' +
                '  </div>' +
                '  <footer class="card-footer">' +
                '   <div class="row">' +
                '    <div class="col-md-12 text-center">' +
                '     <button class="btn modal-confirm btn-primary">Sim! Excluir</button>' +
                '     <button class="btn modal-dismiss btn-default">Cancelar</button>' +
                '    </div>' +
                '   </div>' +
                '  </footer>' +
                ' </section>' +
                ' <form method="post" action="">' +
                '  <input type="hidden" name="_method" value="DELETE">' +
                '  <input type="hidden" name="_token" value="' + $( "meta[name='csrf-token']" ).attr( 'content' ) + '">' +
                ' </form>' +
                '</div>'
            )

            $( 'body' ).append( _modal );
        }

        _self.on( 'click', function(){

            $.magnificPopup.open( {
                items : {
                    src : _modal
                },
                mainClass : '',
                showCloseBtn : false,
                type : 'inline',
                modal : true,
                fixedContentPos : false,
                fixedBgPos : true,
                overflowY : 'auto',
                preloader : false,
                callbacks : {
                    open : function() {

                        _modal.find( 'form' ).attr( {

                            action : _self.data( 'plugin-modal-delete' ) || ''
                        } );

                        _modal.find( '.modal-dismiss' ).click( function(e) {

                            e.preventDefault();

                            _modal.magnificPopup( 'close' );
                        } );

                        _modal.find( '.modal-confirm' ).click( function(e) {

                            e.preventDefault();

                            _modal.find( 'form' ).submit();
                        } );
                    }
                }
            } );
        });
    };

})( jQuery, window, document );