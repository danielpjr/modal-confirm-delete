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
 */

;(function ($, window, document, undefined) {

    'use strict';

    $.fn.dpjModalDelete = function (options) {

        var _settings = $.extend(
            {},
            {
                text: {
                    title: 'You are about to delete this item.',
                    subtitle: 'Are you sure you want to remove it?',
                    blockTitle: 'This item can not be deleted.',
                    btnConfirm: 'Yes! Delete',
                    btnDismiss: 'Cancel',
                    blockBtnDismiss: 'Ok! Got it'
                }
            },
            options),
            _modal = $('#ag-generic-delete-modal') || $(),
            _self = this,
            _blocked = '';

        if (!_modal.get(0)) {

            _modal = $(
                '<div id="ag-generic-delete-modal" ' +
                '     class="modal-block modal-full-color modal-block-danger modal-block-sm mfp-hide animated flipInX">' +
                ' <section class="card">' +
                '  <div class="card-body text-center">' +
                '    <div class="modal-icon center mb-3">' +
                '     <i class="fa fa-question-circle without-block"></i>' +
                '     <i class="fa fa-exclamation-triangle with-block"></i>' +
                '    </div>' +
                '    <div class="modal-text">' +
                '     <h4 class="without-block">' + _settings.text.title + '</h4>' +
                '     <p class="without-block">' + _settings.text.subtitle + '</p>' +
                '     <h4 class="with-block">' + _settings.text.blockTitle + '</h4>' +
                '     <p class="with-block"></p>' +
                '    </div>' +
                '  </div>' +
                '  <footer class="card-footer">' +
                '   <div class="row">' +
                '    <div class="col-md-12 text-center">' +
                '     <button class="btn modal-confirm btn-primary without-block">' + _settings.text.btnConfirm + '</button>' +
                '     <button class="btn modal-dismiss btn-default without-block">' + _settings.text.btnDismiss + '</button>' +
                '     <button class="btn modal-dismiss btn-default with-block">' + _settings.text.blockBtnDismiss + '</button>' +
                '    </div>' +
                '   </div>' +
                '  </footer>' +
                ' </section>' +
                ' <form method="post" action="">' +
                '  <input type="hidden" name="_method" value="DELETE">' +
                '  <input type="hidden" name="_token" value="' + $("meta[name='csrf-token']").attr('content') + '">' +
                '  <div style="visible: hidden" id="inputs_hidden"></div>' +
                ' </form>' +
                '</div>'
            );

            $('body').append(_modal);
        }

        _self.on('click', function () {

            $.magnificPopup.open({
                items: {
                    src: _modal
                },
                mainClass: '',
                showCloseBtn: false,
                type: 'inline',
                modal: true,
                fixedContentPos: false,
                fixedBgPos: true,
                overflowY: 'auto',
                preloader: false,
                callbacks: {

                    open: function () {

                        _blocked = $.trim(_self.data('modal-delete-block') || '');

                        if (_blocked.length) {

                            _modal.find('.without-block').hide();
                            _modal.find('.with-block').show();
                            _modal.find('p.with-block').html(_blocked);
                        }
                        else {
                            _modal.find('.without-block').show();
                            _modal.find('.with-block').hide();
                            _modal.find('p.with-block').empty();
                        }

                        _modal.find('form').attr({

                            action: _self.data('plugin-modal-delete') || ''
                        });

                        _modal.find('.modal-dismiss').click(function (e) {

                            e.preventDefault();

                            _modal.magnificPopup('close');
                        });

                        _modal.find('.modal-confirm').click(function (e) {

                            e.preventDefault();

                            var form = _modal.find('form');

                            if (form.data('submitted') === false || form.data('submitted') === undefined) {
                                form.data('submitted', true);

                                form.submit();
                            }
                        });

                        /**
                         * Add input hidden to submit
                         */

                        const _inputs_hidden_container = _modal.find('#inputs_hidden');
                        
                        _inputs_hidden_container.html('');
                        
                        const _inputs_hidden = _self.data('modal-inputs-hidden') || [];

                        if (typeof _inputs_hidden == 'object') {
                            for (var name in _inputs_hidden) {
                                _inputs_hidden_container.append(
                                    `<input type="hidden" name="${name}" value="${_inputs_hidden[name]}" />`
                                )
                            }
                        }
                    }
                }
            });
        });
    };

})(jQuery, window, document);
