<script>
  const track = document.querySelector('.carousel-track'); const itemWidth = ()
  = track.querySelector('.carousel-item').offsetWidth; function
  scrollCarousel(direction){" "}
  {track.scrollBy({
    left: direction * itemWidth(),
    behavior: "smooth",
  })}
</script>;
