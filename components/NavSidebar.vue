<template>
  <div class="nav-sidebar" data-scrollbar>
    <div class="header-info-close d-block d-xl-none">
      <span></span>
      <span></span>
    </div>
    <div class="sidebar-top-wrap">
      <div class="sidebar-logo">
        <a href="index.html" class="logo">
          <img src="/logo.svg" />
          <h3>Organic Stores</h3>
        </a>
      </div>
      <nav>
        <h5>Shop</h5>
        <ul class="nav-menu">
          <li>
            <a href="#">
              <span class="icon"
                ><img src="/nav-icons/oils.svg" alt="" /></span
              >Oils
            </a>
          </li>
          <li class="active">
            <a href="#">
              <span class="icon"
                ><img src="/nav-icons/Pulses.svg" alt="" /></span
              >Pulses
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon"
                ><img src="/nav-icons/Cereals.svg" alt="" /></span
              >Cereals
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon"
                ><img src="/nav-icons/Millets.svg" alt="" /></span
              >Millets
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon"
                ><img src="/nav-icons/Oil-Seeds.svg" alt="" /></span
              >Oil Seeds
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon"
                ><img src="/nav-icons/Sweetners.svg" alt="" /></span
              >Sweetners
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon"
                ><img src="/nav-icons/Flours-Suji.svg" alt="" /></span
              >Flours & Suji
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon"
                ><img src="/nav-icons/Health-Care.svg" alt="" /></span
              >Health Care
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon"
                ><img src="/nav-icons/Processed-Foods.svg" alt="" /></span
              >Processed Foods
            </a>
          </li>
        </ul>
        <div class="nav-view-all">
          <a href="#"><u>View All +</u></a>
        </div>
      </nav>
    </div>
    <div class="sidebar-bottom-wrap">
      <nav>
        <h5>ACCOUNT</h5>
        <ul class="nav-menu">
          <li>
            <a href="#">
              <span class="icon"
                ><img src="/nav-icons/Profile.svg" alt="" /></span
              >Profile
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon"
                ><img src="/nav-icons/Wishlist.svg" alt="" /></span
              >Wishlist
              <span class="nav-budge">0</span>
            </a>
          </li>
        </ul>
        <div class="nav-btn">
          <a href="#">
            <span class="icon"
              ><img src="/nav-icons/nav-login.svg" alt=""
            /></span>
            Login / Sign Up
          </a>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavSidebar",
};
</script>
