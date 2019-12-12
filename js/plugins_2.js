/*global $ , alert , console*/

$(function () {

    'use strict';
    
    $(window).scroll(function () {
       
        var navbar = $('.navbar');
        
        if ($(window).scrollTop() >= navbar.height()) {
            
            navbar.addClass('scrolled');
            
        } else {
            
            navbar.removeClass('scrolled');
            
        }
        
    });
    
    // switch tabs
    $('.tab-switch li').click(function () {
        
        // Add Class Active
        
        $(this).addClass('selected').siblings().removeClass('selected');
        
        //hide all div
        $('.tabs-section .tabs-content > div').hide();
        
        //Show div 
        $($(this).data('class')).fadeIn(2000);
    });
});