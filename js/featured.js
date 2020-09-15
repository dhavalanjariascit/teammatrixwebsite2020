window.onload = function toggleOngoingCardView() {
    document.getElementById('cardon0').style.display = 'block';
    document.getElementById('play0').style.display = 'block';
    document.getElementById('cardon1').style.display = 'none';
    document.getElementById('play1').style.display = 'none';
    document.getElementById('cardon2').style.display = 'none';
    document.getElementById('play2').style.display = 'none';
    document.getElementById('cardon3').style.display = 'none';
    document.getElementById('play3').style.display = 'none';
    document.getElementById('cardup1').style.display = 'none';
    document.getElementById('cardup2').style.display = 'none';
    document.getElementById('event0').style.color = '#FFFFFF';
    document.getElementById('event1').style.color = '#AFAFAF';
    document.getElementById('event2').style.color = '#AFAFAF';
    document.getElementById('event3').style.color = '#AFAFAF';
}

function upcoming() {
    document.getElementById('cardon0').style.display = 'none';
    document.getElementById('cardon1').style.display = 'none';
    document.getElementById('cardon2').style.display = 'none';
    document.getElementById('cardon3').style.display = 'none';
    document.getElementById('playOn1').style.display = 'block';
    document.getElementById('playOn2').style.display = 'none';
    toggleUpcomingCardView1();
    document.getElementById('toggleOngoing').style.color = '#AFAFAF';
    document.getElementById('toggleUpcoming').style.color = '#21AC39';
    document.getElementById('toggleUpcoming').style.fontWeight = 'bold';
    document.getElementById('toggleOngoing').style.fontWeight = 'normal';
}

function ongoing() {
    toggleOngoingCardView0();
    document.getElementById('toggleOngoing').style.color = '#21AC39';
    document.getElementById('toggleUpcoming').style.color = '#AFAFAF';
    document.getElementById('toggleOngoing').style.fontWeight = 'bold';
    document.getElementById('toggleUpcoming').style.fontWeight = 'normal';
    document.getElementById('cardup2').style.display = 'none';
    document.getElementById('cardup1').style.display = 'none';
    document.getElementById('play0').style.display = 'block';
    document.getElementById('play1').style.display = 'none';
    document.getElementById('play2').style.display = 'none';
    document.getElementById('play3').style.display = 'none';
}

function toggleOngoingCardView0() {
    document.getElementById('cardon0').style.display = 'block';
    document.getElementById('cardon1').style.display = 'none';
    document.getElementById('cardon2').style.display = 'none';
    document.getElementById('cardon3').style.display = 'none';
    document.getElementById('play0').style.display = 'block';
    document.getElementById('play1').style.display = 'none';
    document.getElementById('play2').style.display = 'none';
    document.getElementById('play3').style.display = 'none';
    document.getElementById('event0').style.color = '#FFFFFF';
    document.getElementById('event1').style.color = '#AFAFAF';
    document.getElementById('event2').style.color = '#AFAFAF';
    document.getElementById('event3').style.color = '#AFAFAF';
}

function toggleOngoingCardView1() {
    document.getElementById('cardon1').style.display = 'block';
    document.getElementById('cardon2').style.display = 'none';
    document.getElementById('cardon0').style.display = 'none';
    document.getElementById('play1').style.display = 'block';
    document.getElementById('play0').style.display = 'none';
    document.getElementById('play2').style.display = 'none';
    document.getElementById('play3').style.display = 'none';
    document.getElementById('cardon3').style.display = 'none';
    document.getElementById('event0').style.color = '#AFAFAF';
    document.getElementById('event1').style.color = '#FFFFFF';
    document.getElementById('event2').style.color = '#AFAFAF';
    document.getElementById('event3').style.color = '#AFAFAF';
}

function toggleOngoingCardView2() {
    document.getElementById('cardon2').style.display = 'block';
    document.getElementById('cardon1').style.display = 'none';
    document.getElementById('cardon3').style.display = 'none';
    document.getElementById('cardon0').style.display = 'none';
    document.getElementById('play0').style.display = 'none';
    document.getElementById('play1').style.display = 'none';
    document.getElementById('play2').style.display = 'block';
    document.getElementById('play3').style.display = 'none';
    document.getElementById('event0').style.color = '#AFAFAF';
    document.getElementById('event1').style.color = '#AFAFAF';
    document.getElementById('event2').style.color = '#FFFFFF';
    document.getElementById('event3').style.color = '#AFAFAF';
}

function toggleOngoingCardView3() {
    document.getElementById('cardon3').style.display = 'block';
    document.getElementById('cardon2').style.display = 'none';
    document.getElementById('cardon1').style.display = 'none';
    document.getElementById('cardon0').style.display = 'none';
    document.getElementById('play0').style.display = 'none';
    document.getElementById('play3').style.display = 'block';
    document.getElementById('play2').style.display = 'none';
    document.getElementById('play1').style.display = 'none';
    document.getElementById('event0').style.color = '#AFAFAF';
    document.getElementById('event3').style.color = '#FFFFFF';
    document.getElementById('event1').style.color = '#AFAFAF';
    document.getElementById('event2').style.color = '#AFAFAF';
}
// upcoming cards---------------

function toggleUpcomingCardView1() {
    document.getElementById('cardup1').style.display = 'block';
    document.getElementById('cardup2').style.display = 'none';
    document.getElementById('cardon1').style.display = 'none';
    document.getElementById('cardon0').style.display = 'none';
    document.getElementById('cardon2').style.display = 'none';
    document.getElementById('cardon3').style.display = 'none';
    document.getElementById('eventupcome1').style.color = '#FFFFFF';
    document.getElementById('eventupcome2').style.color = '#AFAFAF';
    document.getElementById('playOn1').style.display = 'block';
    document.getElementById('playOn2').style.display = 'none';
}

function toggleUpcomingCardView2() {
    document.getElementById('cardup2').style.display = 'block';
    document.getElementById('cardup1').style.display = 'none';
    document.getElementById('cardon1').style.display = 'none';
    document.getElementById('cardon0').style.display = 'none';
    document.getElementById('cardon2').style.display = 'none';
    document.getElementById('cardon3').style.display = 'none';
    document.getElementById('eventupcome1').style.color = '#AFAFAF';
    document.getElementById('eventupcome2').style.color = '#FFFFFF';
    document.getElementById('playOn2').style.display = 'block';
    document.getElementById('playOn1').style.display = 'none';
}