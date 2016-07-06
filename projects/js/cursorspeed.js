$('.speed-tracker').cursometer({
  onUpdateSpeed: function(speed) {
    $('.speed').html(speed);
  },
  updateSpeedRate: 20
});
