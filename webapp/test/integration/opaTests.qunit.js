sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'travellist/test/integration/FirstJourney',
		'travellist/test/integration/pages/AirlineList',
		'travellist/test/integration/pages/AirlineObjectPage'
    ],
    function(JourneyRunner, opaJourney, AirlineList, AirlineObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('travellist') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheAirlineList: AirlineList,
					onTheAirlineObjectPage: AirlineObjectPage
                }
            },
            opaJourney.run
        );
    }
);