(function($)
{
    $(function()
    {
        $('.q-and-a .question').on('click', function()
        {
            $(this).closest('.q-and-a').hasClass('open') ? $(this).closest('.q-and-a').removeClass('open') : $(this).closest('.q-and-a').addClass('open');
        });
    });
})(jQuery);
