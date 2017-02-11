/**
 * Created by Nolyo on 02/08/2015.
 */

(function ($) {

    $.fn.cookieCnil = function (options) {

        //On définit nos paramètres par défaut
        var defauts = {
            "chemin": '/',
            "url": "http://www.cnil.fr/vos-obligations/sites-web-cookies-et-autres-traceurs/que-dit-la-loi/",
            "parameter": true,
            "couleurBandeau": '#232323',
            "couleurTexte": '#FFF',
            "couleurTexteBtn": '#000',
            "close": "OK, tout accepter",
            "couleurBtnClose": '#156100',
            "couleurBtnPerso": 'linear-gradient(to bottom, #ffffff 0%, #ffffff 100%)',
            "texte": "En poursuivant votre navigation sur ce site, vous acceptez l'utilisation de cookies permettant d'am&eacute;liorer votre exp&eacute;rience utilisateur.",
            "textePersonnaliser": "Personnaliser",
        };

        //On fusionne nos deux objets !
        var parametres = $.extend(defauts, options);

        function createCookie(name, value, days) {
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                var expires = "; expires=" + date.toGMTString();
            }
            else var expires = "";
            document.cookie = name + "=" + value + expires + "; path=" + defauts.chemin;
        }

        function readCookie(name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        }

        function eraseCookie(name) {

            createCookie(name, "", -1);
        }

        function createAll() {
            createCookie('social', 'true', 396);
            createCookie('audience', 'true', 396);
            createCookie('youtube', 'true', 396);
            createCookie('shareThis', 'true', 396);
            createCookie('wufoo', 'true', 396);
            createCookie('zeBestOf', 'true', 396);
            createCookie('formProspect', 'true', 396);
        }

        //redesign le bandeau en fonction de la taille
        $(document).ready(function () {
            function resize() {
                jQuery('.cookie_accept').css({
                    'min-height': '33px',
                    'padding': '10px',
                    'width': '100%',
                    'font-size': '14px',
                    'position': 'fixed',
                    'bottom': '0',
                    'z-index': '100000',
                    'background-color': '#232323',
                    'color': '#FFF',
                    'opacity': '0.95',
                    'font-family': 'arial',
                    'text-align': 'center'
                });
                jQuery('.button_cook').css({
                    'padding': '7px',
                    'font-family': 'Arial, sans-serif',
                    'font-size': '0.9em',
                    'background': 'linear-gradient(to bottom, #ffffff 0%, #ffffff 100%)',
                    'font-weight': 'bold',
                    'text-shadow': '1px 1px 0px #ffffff;',
                    'color': '#000',
                    'border-radius': '7px'
                });
                jQuery('#btn_close_cookies').css({
                    'background': 'green',
                    "color": "#FFF",
                    'margin-right': '10px'
                });
                jQuery('a.button_cook').css('text-decoration', 'none');
                // jQuery('.cookie_accept').css('appearance', 'checkbox');
                jQuery('body').css({ 'padding': 0, 'margin': 0 });

                if (jQuery(window).width() < 870) {
                    jQuery('.text_cookie').css({
                        'margin': 'auto',
                        'display': 'block',
                    });
                    jQuery('.btn_cookie').css({
                        'margin-top': '15px',
                        'text-align': 'center',
                        'display': 'inline-block',

                    });
                } else {
                    jQuery('.text_cookie').css({
                        'margin': 'auto',
                        'display': 'inline-block'
                    });
                    jQuery('.btn_cookie').css({
                        'margin': '10px 15px',
                        'text-align': 'center',
                        'display': 'inline-block',

                    });
                }
            }

            function persoCookie() {
                //on supprime le bandeau et affiche les les input de params
                jQuery('.cookie_accept').remove();
                addInputParam()
            }

            //ADD tous les input dans le form
            function addInputParam() {
                //Creation de la div contenant le FORM
                jQuery('body').append('<div id="param_cookie"</div>');

                jQuery('#param_cookie').append("<p>En poursuivant votre navigation sur ce site, vous acceptez l'installation et l'utilisation de cookies sur votre poste.</p>");

                jQuery('#param_cookie').append('<div id="in"></div>');

                jQuery('#in').append("<p>Les cookies utilisés sur ce site permettent de vous proposer le partage de nos contenus sur les réseaux sociaux\
            et l'établissement de la mesure d'audience de ce site.</p>");

                jQuery('#in').append('<form id="param_cookie_form"></form>');

                jQuery('#param_cookie_form').append("<p> \
                <input type='checkbox' id='param_social' checked> \
                <label for='param_social'>Cookies Facebook, Twitter, Google + permettant le partage de contenus sur les réseaux sociaux.</label> \
            </p>");

                jQuery('#param_cookie_form').append('<p>\
                <input type="checkbox" id="param_audience" checked>\
                <label for="param_audience">Cookies Xiti, Google Analytics permettant l’établissement de la mesure d’audience.</label>\
            </p>');

                jQuery('#param_cookie_form').append('<p>\
                <input type="checkbox" id="param_youtube" checked>\
                <label for="param_youtube">Cookies Youtube permettant d\'afficher de la publicité personnalisée dans les vidéos et enregistrer l\'historique de lecture.</label>\
            </p>');

                jQuery('#param_cookie_form').append('<p>\
                <input type="checkbox" id="param_shareThis" checked>\
            <label for="param_shareThis">Cookies ShareThis permettant le partage de contenus sur les réseaux sociaux.</label>\
            </p>');

                jQuery('#param_cookie_form').append('<p>\
                <input type="checkbox" id="param_wufoo" checked>\
            <label for="param_wufoo">Cookies Wufoo permettant le d\'afficher certains formulaires.</label>\
            </p>');

                jQuery('#param_cookie_form').append('<p>\
                <input type="checkbox" id="param_zeBestOf" checked>\
            <label for="param_zeBestOf">Cookies ZeBestOf et Google ADS permettant d\'afficher de la publicité personnalisée sur des sites tiers.</label>\
            </p>');

                jQuery('#param_cookie_form').append('<p>\
                <input type="checkbox" id="param_formProspect" checked>\
            <label for="param_formProspect">Cookies Prospect permettant d\'afficher des formulaire à remplir (Candidature, documentation ...)</label>\
            </p>');

                jQuery('#param_cookie_form').append('<p><input type="submit" class="btn btn-primary" id="param_submit" value="Mémoriser"></p>');

                jQuery('.btn-primary').css({
                    'padding': '7px',
                    'font-size': '0.9em',
                    'font-weight': 'bold',
                    'text-shadow': '1px 1px 0px #ffffff;',
                    'border-radius': '7px',
                    'background': '#156100',
                    "color": "#FFF",
                    'margin-right': '10px'
                })
                designPerso();

            }

            //CSS du bandeau
            function designPerso() {
                jQuery('#param_cookie_form').css({
                    'margin-bottom': '20px',
                    'margin-top': '20px'
                });

                jQuery('p').css({
                    'margin-top': '5px',
                    'position': 'relative',
                    'color': '#FFF'
                });
                jQuery('#param_cookie').css({
                    'width': '100%',
                    'font-size': '13px',
                    'position': 'fixed',
                    'bottom': '0',
                    'left': '0',
                    'z-index': '100000',
                    'background-color': '#232323',
                    'color': '#FFF',
                    'opacity': '0.95',
                    'font-family': 'arial',
                    'text-align': 'center',
                    'margin-left': 'auto',
                    'margin-right': 'auto'
                });

                jQuery('#param_cookie *').css('font-family', 'Arial');

                jQuery('#in').css({
                    'max-width': '600px',
                    'text-align': 'left',
                    'margin': '0 auto 10px',
                    'padding': '0 0.5em',

                });

                jQuery('#param_cookie_form input[type="checkbox"]').css({
                    'margin-top': '0px',
                    'position': 'absolute',
                    'opacity': 1,
                    'top': '3px',
                    '-webkit-appearance': 'checkbox',
                    'transform': 'initial',
                    '-webkit-transform': 'initial'
                });

                jQuery('#param_cookie_form label').css({
                    'display': 'initial',
                    'font-size': '15px',
                    'font-weight': 'normal',
                    'padding-left': '22px'
                });
                
                jQuery('#param_cookie_form #param_submit').css({
                    'line-height': '1.5',
                    'padding-bottom': '5px',
                    'padding-top': '5px',
                    'padding-left': '10px',
                    'padding-right': '10px',
                    'position': 'initial'
                });
                 
                var appendCssToHead = '<style type="text/css">' +
                                
                                '#param_cookie p {' +
                                    'font-family: Arial, sans-serif;' +
                                    'font-size: 15px;' +
                                    'line-height: 18px;' +
                                    'margin-bottom: 15px;' +
                                '}' +

                                '#param_cookie_form label:before, #param_cookie_form label:after {' +
                                    'display: none;' +
                                '}' +

                                '#param_submit {' +
                                    'border: none !important;' +
                                    'background: green !important;' +
                                    'font-style: normal;' +
                                    'text-transform: uppercase !important;' +
                                '}' +

                            '</style>';

                $(appendCssToHead).appendTo('head');
            }

            //Lorsque le visiteur
            function setup_param_cookie() {
                if ($('#param_social').is(':checked')) {
                    createCookie('social', 'true', 395);
                } else {
                    eraseCookie('social');
                }
                if ($('#param_audience').is(':checked')) {
                    createCookie('audience', 'true', 395);
                } else {
                    eraseCookie('audience');
                }
                if ($('#param_youtube').is(':checked')) {
                    createCookie('youtube', 'true', 396);
                } else {
                    eraseCookie('youtube');
                }
                if ($('#param_shareThis').is(':checked')) {
                    createCookie('shareThis', 'true', 396);
                } else {
                    eraseCookie('shareThis');
                }
                if ($('#param_wufoo').is(':checked')) {
                    createCookie('wufoo', 'true', 396);
                } else {
                    eraseCookie('wufoo');
                }
                if ($('#param_zeBestOf').is(':checked')) {
                    createCookie('zeBestOf', 'true', 396);
                } else {
                    eraseCookie('zeBestOf');
                }
                if ($('#param_formProspect').is(':checked')) {
                    createCookie('formProspect', 'true', 396);
                } else {
                    eraseCookie('formProspect');
                }
                createCookie('visit_check', 2, 395);
                $("#param_cookie").fadeOut();
                location.reload();
            }

            //Si aucun parametre n est réglé par le user ou si c est sa 1ere visite ou si la derniere visite date de plus de 24 heures
            if (!readCookie('visit_check')) {
                //insertion du bandeau
                jQuery('body').append("<div style='display: none;' class='cookie_accept'><div class='text_cookie'>" + parametres.texte + "</div></div>");
                jQuery('.cookie_accept').append('<div class="btn_cookie"><a href="#" class="button_cook" id="btn_close_cookies">' + parametres.close + '</a></div>');
                jQuery('.btn_cookie').append('<a href="#" class="button_cook" id="btn_perso_cookies">' + parametres.textePersonnaliser + '</a>');
                createCookie('visit_check', '1', 390);
                createCookie('audience', 'true', 395);
            } else if (readCookie('visit_check') != 2) {
                createAll();
            }

            resize();

            jQuery('.cookie_accept').slideDown(500);

            /* Evenement click close et création des cookies */

            // On accepte tous les cookies sans entrer dans les parametre
            jQuery('#btn_close_cookies').on('click', function () {
                createAll()
                jQuery('.cookie_accept').slideUp();
                location.reload();
            });

            // On demande a entrer dans les params du cookies
            jQuery('#btn_perso_cookies').on('click', function () {
                persoCookie();
                return false;
            });

            // Efface tous les cookie de ce systeme
            jQuery('#erase').on('click', function () {
                eraseAllCookies();
                return false;
            });

            // Envoie du formulaire/ le visiteur a choisi les cookies qu il accepte
            jQuery('body').on('submit', 'form#param_cookie_form', function (e) {
                setup_param_cookie();
                e.preventDefault();
                return false;
            });

            jQuery(window).resize(function () {
                resize();
            })
        });
        return this;
    };

})(jQuery);

function auto() {
    $("script").each(function () {
        if (typeof $(this).attr('src') == "undefined") {
            // Cookies Audience
            if (!readCookie('audience')) {
                regex = /(google\-analytics\.com).+/;
                if ($(this).html().match(regex)) {
                    $(this).remove();
                }
            }
            // Cookies Social
            if (!readCookie('social')) {
                twitter = /(platform\.twitter\.com).+/;
                facebook = /(connect\.facebook\.net).+/;
                if ($(this).html().match(twitter) || $(this).html().match(facebook)) {
                    $(this).remove();
                }
            }
            // Cookies shareThis
            if (!readCookie('shareThis')) {
                shareThis = /(sharethis\.com).+/;
                if ($(this).html().match(shareThis)) {
                    $(this).remove();
                }
            }
            // Cookies ZeBestOf 
            if (!readCookie('zeBestOf')) {
                zebestof = /(zebestof\.com).+/;
                googleAds = /(google_conversion_id).+/;
                if ($(this).html().match(zebestof) || $(this).html().match(googleAds)) {
                    $(this).remove();
                }
            }

        } else {
            //Si un src est dans le script
            //console.log($(this).attr('src'));
        }
    });

    if ((readCookie('visit_check') && readCookie('youtube'))) {
        return true;
    } else {
        var test = $('iframe');
        $('iframe').each(function () {
            var t = $(this);
            var url = t.attr('src');
            var regex = /(youtube\.com.+)/;
            if (url.match(regex) != null) {

                var splitId = RegExp.$1.split('embed/')[1];
                t.attr('src', "https://www.youtube-nocookie.com/embed/" + splitId);
            }
        });
    }

    if ((readCookie('visit_check') && readCookie('formProspect'))) {
        return true;
    } else {
        var test = $('iframe');

        $('iframe').each(function () {
            var t = $(this);
            var url = t.attr('src');
            var regex = /(prospect\.epitech\.eu.+)/;
            if (url.match(regex) != null) {
                var message = "<p>Vous avez choisi de ne pas avoir de cookies. Vous ne pouvez avoir accès à ce formulaire. Vous pouvez autoriser les cookies en cliquant <a href='#' onclick='eraseAllCookies()'> ici</a></p>";
                $(message).insertBefore(t)
                t.remove();
            }
        });

    }
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {

    createCookie(name, "", -1);
}

function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else var expires = "";
    document.cookie = name + "=" + value + expires + "; path= /";
}

function eraseAllCookies() {
    eraseCookie('audience');
    eraseCookie('shareThis');
    eraseCookie('social');
    eraseCookie('youtube');
    eraseCookie('zeBestOf');
    eraseCookie('wufoo');
    eraseCookie('visit_check');
    location.reload();
}

$('body').cookieCnil();
auto();