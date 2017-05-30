function applyBootstrapStyles(){
    $this = $(this)
    
    //Sql dump
        $this.find('.cake-sql-log')
                .addClass('table table-bordered table-striped table-hover')
    
    
        $this.find('.index table, .related table')
                .addClass('table table-bordered table-condensed table-striped table-hover')
        
        $this.find('.input.email > input, .input.text > input, .input.number > input, .input.tel > input, .input.password > input, .input.select > select, .input.textarea textarea')
                .addClass('form-control')
        
        $this.find('.input.select > select[multiple]')
                .css('width', '100%')    
                .addClass('hide')
                .select2()
        
        $this.find('.submit input[type="submit"]')
                .addClass('btn btn-primary')
                .css('margin-top', 10)
        
        $this.find('.view dl, .related dl')
                .addClass('dl-horizontal')
        
        $this.find('.actions ul')
                .addClass('btn-group')
        
        $this.find('.actions ul li')
                .addClass('btn btn-default')
        
        $this.find('.actions ul li > a[onclick]')
                .addClass('text-danger')
        
        
        $this.find('td.actions')
                .addClass('btn-group')
        
        $this.find('td.actions  a')
                .addClass('btn btn-default btn-xs')
               // .html('<i class="fa fa-pencil"></i>')

        
        $this.find('tr td.actions  a[onclick]')
                .addClass('btn btn-default btn-xs btn-danger')
               // .html('<i class="fa fa-trash"></i> ')
        
        
        $this.find('.view, .form')
                .addClass('panel panel-default')
                .css('margin-top', 10)
        
        $this.find('.view > h2')
                .addClass('panel-heading')
        
        $this.find('.form form fieldset')
                .addClass('panel-body')
        
        $this.find('.form .submit input[type="submit"]')
                .css('margin-left', 15) 
        
        //Error messages
        $this.find('p.error').addClass('alert alert-danger');
        $this.find('p.notice').addClass('alert alert-info');
   $this.find('ul.cake-stack-trace')
                .addClass('list-group')
                .find('li')
                .addClass('list-group-item')

        $this.find('.notice')
                .parent()
                .addClass('alert alert-danger')
        
        $this.find('.notice.success')
                .parent()
                .removeClass('alert-danger')
                .addClass('alert alert-success')

        $this.find('div#header').addClass('page-header')

        $this.find('p#url-rewriting-warning')
                .addClass('alert alert-danger')

        $this.find('div#container')
                .addClass('container')

}

$(document).ready(function(){
        applyBootstrapStyles.call($('body'))
});
