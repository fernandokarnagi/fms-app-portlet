YUI().use(
  'aui-scheduler',
  function(Y) {
    var events = [
      {
        body: '<html>..</html>',
        title: '',
        content: 'TITLE',
        endDate: new Date(2016, 0, 20, 14),
        startDate: new Date(2016, 0, 20, 8),
        color: '#69d777'
      },
      {
          content: 'Fire Hydrant',
          endDate: new Date(2016, 0, 20, 18),
          startDate: new Date(2016, 0, 20, 12),
          color: '#D96666'
        },
        {
            content: 'Hosereel System',
            endDate: new Date(2016, 0, 19, 17),
            startDate: new Date(2016, 0, 19, 8),
            color: '#3968ee'
          }
        
    ];

    var agendaView = new Y.SchedulerAgendaView();
    var dayView = new Y.SchedulerDayView();
    var eventRecorder = new Y.SchedulerEventRecorder();
    var monthView = new Y.SchedulerMonthView();
    var weekView = new Y.SchedulerWeekView();
    var closeCustomButton;
    
    Y.Do.after(function(evt) {
    	
    	var body = evnt.body;
    	var title = evnt.title;
    	 
        var toolbarBtnGroup = Y.one('#myScheduler .toolbar .btn-group');
        toolbarBtnGroup.empty();
        toolbarBtnGroup.appendChild('<button id="customClose" type="button">Close</button>');
        
        var contentvar =Y.one('#myScheduler .popover-content');  
      
        
        var popovertitle =Y.one('#myScheduler .popover-title'); 
        var contentVal =Y.one('#myScheduler .scheduler-event-recorder-content').val();
        popovertitle.html('<p>Pop Over Title goes here</p>');
        
        contentvar.appendChild('<p>'+contentVal+'</p><p>Custom Content goes here</p>');
        
        closeCustomButton = new Y.Button({
            label: 'Close',
            srcNode: '#customClose',
        }).render();
   	 
   	 closeCustomButton.on('click', function(event) {
             eventRecorder.hidePopover();
        });
        
       
    }, eventRecorder, 'showPopover');
    
    Y.Do.after(function() {
        
        // Make sure that the closeCustomButton is destroyed to avoid a memory leak.
        if (closeCustomButton) {
            closeCustomButton.destroy();
        }
    }, eventRecorder, 'hidePopover');
    
    
    new Y.Scheduler(
      {
        boundingBox: '#myScheduler',
        date: new Date(2016, 0, 11),
        eventRecorder: eventRecorder,
        items: events,
        render: true,
        views: [monthView, dayView, weekView, agendaView]
      }
    );	
  }
);