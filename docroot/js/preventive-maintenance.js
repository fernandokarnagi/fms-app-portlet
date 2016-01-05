YUI().use(
  'aui-scheduler',
  function(Y) {
    var events = [
      {
        content: 'Sprinkle System',
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

    var eventRecorder = new Y.SchedulerEventRecorder();
    var agendaView = new Y.SchedulerAgendaView();
    var dayView = new Y.SchedulerDayView();
    var eventRecorder = new Y.SchedulerEventRecorder();
    var monthView = new Y.SchedulerMonthView();
    var weekView = new Y.SchedulerWeekView();

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